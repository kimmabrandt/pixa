var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var db = require('../models');

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.user.findById(id).then(function(user) {
    cb(null, user);
  }).catch(cb);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, cb) {
  db.user.find({
    where: { email: email }
  }).then(function(user) {
    if (!user || !user.validPassword(password)) {
      cb(null, false);
    } else {
      cb(null, user);
    }
  }).catch(cb);
}));

passport.use(new FacebookStrategy({
clientID: process.env.FACEBOOK_APP_ID,
clientSecret: process.env.FACEBOOK_APP_SECRET,
callbackURL: process.env.BASE_URL + '/auth/callback/facebook',
profileFields: ['id', 'email', 'displayName'],
enableProof:true
}, function(accessToken, refreshTokn, profile, cb) {
//when fb sends back access token this function is called
var email = profile.emails ? profile.emails[0].value : null;
// ^^^f profile.email exists, make var email equal to profile.emails[0], else null


// see if user existsg in db
//checing if fb login is anywhere in our db
db.user.find({
  where: {email: email}
}).then(function(existingUser){
  if(existingUser && email) { 
    existingUser.update({ 
      //if so, update with the new fb data
      facebookId: profile.id,
      facebookToken: accessToken
    }).then(function(updatedUser) {
      //if cb wasnt here, it woud just stall
      cb(null, updatedUser); 
    }).catch(cb);
  } else{
    //if the user doesn't exist
    db.user.findOrCreate({
      where: {facebookId: profile.id}, //from strategy
      defaults: {
        facebookToken: accessToken,
        name: profile.displayName,
        email:email
      }
    }).spread(function(user, created){
      //if the user was rreated
      if(created){
        return cb(null, user);
      } else {
        //if user was found
        user.facebookToken = accessToken;
        user.save().then(function() {
          cb(null, user)
        }).catch(cb);
      }
    }).catch(cb);
  }
});
})); 






module.exports = passport;
