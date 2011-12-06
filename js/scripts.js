// 2. Activate plugins on document.ready

$(document).ready(function() {

/*
	$("#menu").localScroll({
		offset: -200
	});
*/

    $(function() {
       $("h1").bind("click", baseliner);
    });
    
    function baseliner(evt) {
      $("body").toggleClass("baseline");
    }

});