






$(document).ready(function() {

//////*/*/*/*/////// DESIGN //////*/*/*/*///////
  $('#catDesign').click(function(){
    var tumblrTag = "design";
    //reset/remove existing photos
    $("#tumblr-posts").html("");


    /* tumblr api get tagged posts */
    apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
    limit=50
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
        dataType: 'jsonp',
        data: {
        api_key: apiKey,
            tag: tumblrTag
        },
        success: function(results){
          var i = 0
                while (i < results.response.posts.length) {
            var type = results.response.posts[i].type;
            if (type == "photo") {
              var photos = results.response.posts[i].photos;
              var linkURL = results.response.posts[i].post_url;
                        var caption = results.response.posts[i].caption;
              for (var j = 0; j < photos.length; j++) {
                if (photos[j].alt_sizes[1]) {
                  imgURL = photos[j].alt_sizes[1].url
                  // console.log(imgURL, linkURL);
                }else{
                  continue;
                }
                $("#tumblr-posts").append("<li><a href=" + linkURL + " target='_blank'><img src=" + imgURL + " /></a></li>");
              }
            }
            i++;
          }
          console.log(results.response);
        }
      });
  });




//////*/*/*/*/////// ILLUSTRATION //////*/*/*/*///////
  $('#catIllus').click(function(){
    var tumblrTag = "illustration";
    //reset/remove existing photos
    $("#tumblr-posts").html("");

    /* tumblr api get tagged posts */
    apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
    limit=50
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
        dataType: 'jsonp',
        data: {
        api_key: apiKey,
            tag: tumblrTag
        },
        success: function(results){
          var i = 0;
                while (i < results.response.posts.length) {
            var type = results.response.posts[i].type;
            if (type == "photo") {
              var photos = results.response.posts[i].photos;
              var linkURL = results.response.posts[i].post_url;
                        var caption = results.response.posts[i].caption;
              for (var j = 0; j < photos.length; j++) {
                if (photos[j].alt_sizes[1]) {
                  imgURL = photos[j].alt_sizes[1].url
                  // console.log(imgURL, linkURL);
                }else{
                  continue;
                }
                $("#tumblr-posts").append("<li><a href=" + linkURL + " target='_blank'><img src=" + imgURL + " /></a></li>");
              }
            }
            i++;
          }
          console.log(results.response);
        }
      });
  });


//////*/*/*/*/////// PHOTOGRAPHY //////*/*/*/*///////
  $('#catPhoto').click(function(){
    var tumblrTag = "photography";
    //reset/remove existing photos
    $("#tumblr-posts").html("");

    /* tumblr api get tagged posts */
    apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
    limit=50
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
        dataType: 'jsonp',
        data: {
        api_key: apiKey,
            tag: tumblrTag
        },
        success: function(results){
          var i = 0;
                while (i < results.response.posts.length) {
            var type = results.response.posts[i].type;
            if (type == "photo") {
              var photos = results.response.posts[i].photos;
              var linkURL = results.response.posts[i].post_url;
                        var caption = results.response.posts[i].caption;
              for (var j = 0; j < photos.length; j++) {
                if (photos[j].alt_sizes[1]) {
                  imgURL = photos[j].alt_sizes[1].url
                  // console.log(imgURL, linkURL);
                }else{
                  continue;
                }
                $("#tumblr-posts").append("<li><a href=" + linkURL + " target='_blank'><img src=" + imgURL + " /></a></li>");
              }
            }
            i++;
          }
          console.log(results.response);
        }
      });
  });




  
//////*/*/*/*/////// GIF //////*/*/*/*///////
  $('#catGIF').click(function(){
    var tumblrTag = "gif";
    //reset/remove existing photos
    $("#tumblr-posts").html("");

    /* tumblr api get tagged posts */
    apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
    limit=50
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
        dataType: 'jsonp',
        data: {
        api_key: apiKey,
            tag: tumblrTag
        },
        success: function(results){
          var i = 0;
                while (i < results.response.posts.length) {
            var type = results.response.posts[i].type;
            if (type == "photo") {
              var photos = results.response.posts[i].photos;
              var linkURL = results.response.posts[i].post_url;
                        var caption = results.response.posts[i].caption;
              for (var j = 0; j < photos.length; j++) {
                if (photos[j].alt_sizes[1]) {
                  imgURL = photos[j].alt_sizes[1].url
                  // console.log(imgURL, linkURL);
                }else{
                  continue;
                }
                $("#tumblr-posts").append("<li><a href=" + linkURL + " target='_blank'><img src=" + imgURL + " /></a></li>");
              }
            }
            i++;
          }
          console.log(results.response);
        }
      });
  });




//////*/*/*/*/////// 3D //////*/*/*/*///////
  $('#cat3D').click(function(){
    var tumblrTag = "3D";
    //reset/remove existing photos
    $("#tumblr-posts").html("");

    /* tumblr api get tagged posts */
    apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
    limit=50
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
        dataType: 'jsonp',
        data: {
        api_key: apiKey,
            tag: tumblrTag
        },
        success: function(results){
          var i = 0;
                while (i < results.response.posts.length) {
            var type = results.response.posts[i].type;
            if (type == "photo") {
              var photos = results.response.posts[i].photos;
              var linkURL = results.response.posts[i].post_url;
                        var caption = results.response.posts[i].caption;
              for (var j = 0; j < photos.length; j++) {
                if (photos[j].alt_sizes[1]) {
                  imgURL = photos[j].alt_sizes[1].url
                  // console.log(imgURL, linkURL);
                }else{
                  continue;
                }
                $("#tumblr-posts").append("<li><a href=" + linkURL + " target='_blank'><img src=" + imgURL + " /></a></li>");
              }
            }
            i++;
          }
          console.log(results.response);
        }
      });
  });
  


//////*/*/*/*/////// ART //////*/*/*/*///////
  $('#catArt').click(function(){
    var tumblrTag = "artwork";
    //reset/remove existing photos
    $("#tumblr-posts").html("");

    /* tumblr api get tagged posts */
    apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
    limit=50
    $.ajax({
        url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
        dataType: 'jsonp',
        data: {
        api_key: apiKey,
            tag: tumblrTag
        },
        success: function(results){
          var i = 0;
                while (i < results.response.posts.length) {
            var type = results.response.posts[i].type;
            if (type == "photo") {
              var photos = results.response.posts[i].photos;
              var linkURL = results.response.posts[i].post_url;
                        var caption = results.response.posts[i].caption;
              for (var j = 0; j < photos.length; j++) {
                if (photos[j].alt_sizes[1]) {
                  imgURL = photos[j].alt_sizes[1].url
                  // console.log(imgURL, linkURL);
                }else{
                  continue;
                }
                $("#tumblr-posts").append("<li><a href=" + linkURL + " target='_blank'><img src=" + imgURL + " /></a></li>");
              }
            }
            i++;
          }
          console.log(results.response);
        }
      });
  });




//////*/*/*/*/////// ART //////*/*/*/*///////
	$('#catTypo').click(function(){
		var tumblrTag = "typography";
		//reset/remove existing photos
		$("#tumblr-posts").html("");

		/* tumblr api get tagged posts */
		apiKey = "sO4aMxnu55qhYyiUpJPWncpOSAAi0gSQyVwk128u23vpVyKSoa";
		limit=50
		$.ajax({
				url: "https://api.tumblr.com/v2/blog/piiixels.tumblr.com/posts?limit=50",
				dataType: 'jsonp',
				data: {
				api_key: apiKey,
		        tag: tumblrTag
				},
				success: function(results){
					var i = 0;
		            while (i < results.response.posts.length) {
						var type = results.response.posts[i].type;
						if (type == "photo") {
							var photos = results.response.posts[i].photos;
							var linkURL = results.response.posts[i].post_url;
		                    var caption = results.response.posts[i].caption;
							for (var j = 0; j < photos.length; j++) {
								if (photos[j].alt_sizes[1]) {
									imgURL = photos[j].alt_sizes[1].url
									// console.log(imgURL, linkURL);
								}else{
									continue;
								}
								$(".wall").append("<a class='article' href=" + linkURL + " target='_blank'><img src=" + imgURL + " /></a>");
							}
						}
						i++;
					}
					console.log(results.response);
				}
			});
	});






/*
JALISWALL 0.3
by Pierre Bonnin - @PierreBonninPRO - 2015
*/
(function($){
  $.fn.jaliswall = function(options){
    
    this.each(function(){
      
      var defaults = {
        item : '.wall-item',
        columnClass : '.wall-column',
        resize:true,
        onChange : function(){void(0);}
      }
      
      var prm = $.extend(defaults, options);
      
      var container = $(this);
      var items = container.find(prm.item);
      var elemsDatas = [];
      var columns = [];
      var nbCols = getNbCols();
      
      init();
      
      function init(){
        nbCols = getNbCols();
        recordAndRemove();
        print();
        if(prm.resize){
          $(window).resize(function(){
            if(nbCols != getNbCols()){
              nbCols = getNbCols();
              setColPos();
              print();
            }
          });
        }
      }
      
      function getNbCols(){
        var instanceForCompute = false;
        if(container.find(prm.columnClass).length == 0){
          instanceForCompute = true;
          container.append("<div class='"+parseSelector(prm.columnClass)+"'></div>");
        }
        var colWidth = container.find(prm.columnClass).outerWidth(true);
        var wallWidth = container.innerWidth();
        if(instanceForCompute)container.find(prm.columnClass).remove();
        return Math.round(wallWidth / colWidth);
      }
      
      // save items content and params and removes originals items
      function recordAndRemove(){
        items.each(function(index){
          var item = $(this);
          elemsDatas.push({
            content : item[0].outerHTML,
            colid : index%nbCols
          });
          item.remove();
        });
      }
      
      //determines in which column an item should be
      function setColPos(){
        for (var i in elemsDatas){
          elemsDatas[i].colid = i%nbCols;
        }
      }
      
      // to get a class name without the selector
      function parseSelector(selector){
        return selector.slice(1, selector.length);
      }
      
      //write and append html
      function print(){
        var tree = '';
        //creates columns
        for (var i=0; i<nbCols; i++){
          tree += "<div class='"+parseSelector(prm.columnClass)+"'></div>";
        }
        container.html(tree);
        
        // creates items
        for (var i in elemsDatas){
          var html='';
          
          var content = (elemsDatas[i].content != undefined)?elemsDatas[i].content:'';
          html += content;
          container.children(prm.columnClass).eq(i%nbCols).append(html);
        }
        
        try{
          prm.onChange();
        }catch(e){
          console.log('jaliswall onChange error / '+e);
        }
        
      }
      
      //creates a well-formed attribute
      function getAttr(attr, type){
        return (attr != undefined)?type+"='"+attr+"'":'';
      }
      
    });
    
    return this;
  }
})(jQuery);




function onChange(){
  console.log('cols number changed');
}

$('.wall').jaliswall({item:'.article', onChange:onChange});







}); // end of document.ready

















// $(document).ready(function() {
	
// 	//Store given consumer key
// 	var client =  'fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4';
  
// 	$('#catDesign').click(function(){
// 		$('#search_bar').val("design");
// 	});
	
// 	$('#catIllus').click(function(){
// 		$('#search_bar').val("illustration");
// 	});

// 	$('#catPhoto').click(function(){
// 		$('#search_bar').val("photography");
// 	});
	
// 	$('#catGIF').click(function(){
// 		$('#search_bar').val("gif");
// 	});

// 	$('#cat3D').click(function(){
// 		$('#search_bar').val("3d");
// 	});
	
// 	$('#catArt').click(function(){
// 		$('#search_bar').val("artwork");
// 	});


// 	// click function 
// 	 $('#search_button').click(function(){

		 
// 		 // get value from textbox
// 		 var urlTumblrRaw = $('#search_bar').val();
// 		 // getting rid of http protocol sintax 
// 		 var urlTumblr = urlTumblrRaw.replace(/.*?:\/\//g, "");
		 
		 
		 
// 		 //run ajax call and pass parameter from search
// 		 $.ajax({
// 			 // creating the url to access the endpoing. The variable with the blog
// 			 // url goes once more under regex to make sure no character is being pass
// 			 // that might stop the ajax call
// 			 url: 'http://api.tumblr.com/v2/blog/piiixels/posts',
// 			 method: 'get',
// 			 // make sure to use jsonp. It is a requirement to consume the Tumblr api
// 			 dataType: "jsonp",
// 			 data: ({ api_key: client}),
// 			 // upon sucess exceute the following code
// 			 success: function(data){
// 					 console.log(data);
					 
// 					 // check if  input is returning object with data
// 					 if((data.response).length === 0){
// 						 $('#tumblr_search').html('no data returned, make sure you entered a Tumblr url');
// 						 } else {
					
// 				 	//check if seach has been already excuted and clean the div for the next search
// 					if($('#tumblr_search').not(':empty')){
// 						$('#tumblr_search').empty();
// 					}
					
// 					// variables to access the object returned
// 					var objectBlog = data.response.blog;
// 					var objectPosts = data.response.posts;
					
// 					// getting title of the tumblr
// 					$('#title_tumblr').html(objectBlog.title + ' recent blog posts');
					
// 					// getting description of the tumblr
// 					$('#tumblr_desc').html(objectBlog.description);
					
// 					// each loop to go through all the post
// 					$.each(objectPosts, function(key, value){
// 						//just retrieving post that have photos
// 						if(value.type === "photo"){
// 							// inner each loop to go through all the photos for each post
// 							$.each(value.photos, function(k, v){
// 									//append image
// 									$('#tumblr_search').append(
// 										'<img src="' + v.original_size.url + '" width="250" height="259" />'
// 									);
// 								});// end inner each
							
// 							// caption for each post
// 							$('#tumblr_search').append(value.caption + '<hr />');
// 						}
// 						});// end each
// 				 } // end success function
// 			 }
// 			 }); // end ajax call
		 
// 		 }); // end click function
	
// }); // end of document.ready

