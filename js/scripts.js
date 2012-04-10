// 2. Activate plugins on document.ready

$(document).ready(function() {

    $(function() {
		$(".gridder").bind("click", gridder);
    });
    
    function gridder(evt) {
		$("#grid").toggleClass("grid");
    }

    $(function() {
		$(".title").bind("hover", twirler);
    });
    
    function twirler(evt) {
		$(".symbol").toggleClass("animated");
    }

});