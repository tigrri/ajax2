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


$.ajax({
    url: 'http://tigrri.github.io/ajax2/header.html',
  success: function(data) {
    $('.wrapper').append(data);
    animate = true;
    // compare();
  },
  error: function(data) {
    console.error(data);
  }
});
