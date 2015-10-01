Skip to content
This repository  
Search
Pull requests
Issues
Gist
 @tigrri
 Unwatch 1
  Star 0
 Fork 0 tigrri/ajax2
Branch: gh-pages  ajax2/main.js
@tigrritigrri 2 minutes ago Update main.js
1 contributor
RawBlameHistory     45 lines (40 sloc)  942 Bytes
var headUrl = 'http://tigrri.github.io/ajax2/';
var htmlList = ['header.html', 'section.html'];

// var someDeffered = $.ajax(headUrl + htmlList[0]);
// 	someDeffered.then(function(result){
// 	    $('.wrapper').append(result);
// 	    return $.ajax(headUrl + htmlList[1])
// 	}).then(function(result){
// 	    $('.wrapper').append(result);
// 	    return $.ajax(headUrl + htmlList[2])
// 	});


animate = false;

var compare = function() {
	if(animate && animate_2){
		console.log('ok');
		$('.section').animate({left: "220px"}, 400);
		$('.header').animate({left: "220px"}, 400);
	}
}
$.ajax({
    url: headUrl + 'header.html',
  success: function(data) {
    $('.wrapper').append(data);
    animate = true;
    compare();
  },
  error: function(data) {
  	animate = false;
    console.error(data);
  }
});
$.ajax({
    url: headUrl + 'section.html',
  success: function(data) {
    $('.wrapper').append(data);
    animate_2 = true;
    compare();
  },
  error: function(data) {
  	animate_2 = false;
    console.error(data);
  }
});
Status API Training Shop Blog About Pricing
© 2015 GitHub, Inc. Terms Privacy Security Contact Help
