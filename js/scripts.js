// 2. Activate plugins on document.ready

$(document).ready(function() {

/*
	$("#menu").localScroll({
		offset: -200
	});
*/


    $(function() {
       $("#baseliner").bind("click", baseliner);
    });
    
    function baseliner(evt) {
      $("body").toggleClass("baseline");
    }

    $(function() {
       $("#gridder").bind("click", gridder);
    });
    
    function gridder(evt) {
      $(".col").toggleClass("fixed");
//      $(this).toggleClass("fixed");
    }

});