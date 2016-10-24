require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var cloudinary = require("cloudinary");
var multer = require("multer");
var upload = multer({ dest: "./uploads/" });
var bodyParser = require('body-parser');
var passport = require('./config/ppConfig');
var session = require('express-session');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var app = express();
var db = require('./models');


app.set('view engine', 'ejs');

// app.use('/public', express.static(__dirname + '/public'));

app.use(express.static('.'));

// app.use('public', express.static('/public'));
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
  secret: process.env.SESSION_SECRET || 'mysupercoolsecret',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});


//===============  Home/index  ===============//

app.get('/', function(req, res) {
  //table called place
  //pass along to index.ejs
  //allows us to use places in index.ejs. coming from places table in sql, into markers variable
  db.photos.findAll().then(function(photos) {
    res.render('index', { photos: photos });
  }).catch(function(err) {
    res.send({ message: 'error', error: err });
  });
});

app.get('/categories', function(req, res) {
  res.render('categories');
});

//===============  Upload  ===============//

app.get('/upload', isLoggedIn, function(req, res) {
  res.render('upload');
});


app.post("/", upload.single("myFile"), function(req, res){
  cloudinary.uploader.upload(req.file.path, function(result){
    console.log(result);
  console.log('***************************');
  console.log(result.secure_url);
    res.send('<p>Your image was uploaded to :'+result.secure_url +'</p>');
  });

});


//===============  Favorites  ===============//

app.get("/favorites/:id", function(req, res){
  db.user.find({
    where: { id: req.params.id }
  }).then(function(user){
    user.getPhotos().then(function(photos){
      res.render("favorites", { tagName: user.name, photos: photos});
    });
  }); // End then
});


app.post('/delete', function(req, res) {
  db.users_photos.find({
    where: { 
      userId: req.body.userId,
      photoId: req.body.photoId
    }
  }).then(function(photo) {
    if (photo) {
      photo.destroy().then(function() {
        res.send({msg: 'success'});
      });
    } else {
      res.status(404).send({msg: 'error'});
    }
  }).catch(function(err) {
    res.status(500).send({msg: 'error'});
  });
});


//===============  Image view  ===============//

// GET /images/:id - display a specific image
app.get('/:id', function(req, res) {
  db.photos.find({
    where: { id: req.params.id }
  })
  .then(function(photos) {
    if (!photos) throw Error();
    res.render('images', { photos: photos });
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});



// POST /projects - create a new favorite
app.post('/:id', function(req, res) {

    db.users_photos.create({
      userId: req.body.userId,
      photoId: req.body.photoId
      }).then(function(project){

    console.log(project.get());
          res.redirect("/");
      }); //End then() for createArticle
          }); 


//===============  Etc  ===============//

app.get('/featured', function(req, res) {
  res.render('featured');
});


app.get('/tumblr', function(req, res) {
  res.render('tumblr');
});


app.use('/auth', require('./controllers/auth'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
