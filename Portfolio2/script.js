var API_DOMAIN = "https://api.instagram.com/v1";
var RECENT_MEDIA_PATH = "/users/self/media/recent";
// what do you think a variable in all caps means?

$(document).ready(function() {
  var token = window.location.hash;
  if (!token) {
    window.location.replace("./login.html");
  }
  token = token.replace("#", "?"); // Prepare for query parameter
  var mediaUrl = API_DOMAIN + RECENT_MEDIA_PATH + token;

  $.ajax({
    method: "GET",
    url: mediaUrl,
    dataType: "jsonp",
    success: handleResponse,
    error: function() {
      alert("there has been an error...")
    }
  })
});

function handleResponse(response) {
  console.log(response);
  var arrayLength = response.data.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log(response.data[i].images.standard_resolution.url);

//for loop, everytime adds image to div id

// var images = $("#all-images");
// var i;
// for(i=0; i<20; i++) {
//   .append(img src="response.data[i].images.standard_resolution.url"); 
// }


    //Do something
    var url = response.data[i].images.standard_resolution.url; 
    var instapic = '<div class="the-image"><img id="all-images" src="' + url + '"/></div> <lb>';
    //$("#all-images").append(instapic);
    if( response.data[i].caption !== null ) {
      var caption1 = response.data[i].caption.text
      // console.log(caption1);
      var caption = '<div class="the-caption">' + caption1 + ' </div> '; 
      var box =  '<div class="the-box">' + instapic + caption + ' </div>';
     // $("#all-images").append(box);

      $("#all-images").append(box);

      var box =  '<div class="the-box">' + instapic + caption + ' </div>'
    }
    
   
    

 // $("#list").append(instapic);
 // $("#list").append(caption1);





}
}