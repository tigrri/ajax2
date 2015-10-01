
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
animate_2 = false;
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
