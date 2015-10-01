var headUrl = 'http://tigrri.github.io/ajax2/';
var htmlList = ['header.html', 'section.html'];



animate = false;
animate_2 = false;
var compare = function() {
	if(animate && animate_2){
		console.log('ok');
		$('.section').animate({right: "0"}, 1400);
		$('.header').animate({left: "0"}, 1400);
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
