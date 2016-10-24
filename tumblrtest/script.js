

$(document).ready(function() {
    var tumblrTag = "design";
    var imgURL = null;
    var postId = null;
    var imgArray = [];
    //reset/remove existing photos
    $("#tumblr-posts").html("");


    /* tumblr api get tagged posts */
    apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
    limit=50
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
        dataType: 'jsonp',
        data: {
        api_key: apiKey
        },
        success: function(results){
          var i = 0
                while (i < results.response.posts.length) {
            var type = results.response.posts[i].type;
            if (type == "photo") {
              var photos = results.response.posts[i].photos;
              var linkURL = results.response.posts[i].post_url;
              var caption = results.response.posts[i].caption;
              postId = results.response.posts[i].id;
              for (var j = 0; j < photos.length; j++) {
                if (photos[j].alt_sizes[1]) {
                  imgURL = photos[j].alt_sizes[1].url
                  // var num = 0;
                  // console.log(imgURL, linkURL);
                }else{
                  continue;
                }
                $("#tumblr-posts").append("<div class='item'><a href='/" + (i+1) + "'><img src=" + imgURL + " /></a></div>");
                  imgArray.push(imgURL);
                  // num++;



                 console.log(imgArray[j]); 
                
              }
            }
            i++;
          }
          console.log(results.response);
        }
      });

// $('#tumblr-posts').click(function() {    
//       alert("hi");  
//   }); 



}); // end of document.ready
