var headUrl = 'http://tigrri.github.io/ajax2/';
var htmlList = ['header.html', 'section.html'];

var someDeffered = $.ajax(headUrl + htmlList[0]);
	someDeffered.then(function(result){
	    $('.wrapper').append(result);
	    return $.ajax(headUrl + htmlList[1])
	}).then(function(result){
	    console.log(JSON.stringify(result));
	    $('.wrapper').append(result);
	    return $.ajax(headUrl + htmlList[2])
	}).then(function(result) {
		$('.wrapper').append(result);
	});
