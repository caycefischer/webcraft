// 2. Activate plugins on document.ready

$(document).ready(function() {

    $(function() {
		$(".gridder").bind("click", gridder);
    });
    
    function gridder(evt) {
		$("#grid").toggleClass("grid");
    }

    $('h1').grumble({
		text: 'toggle the grid!', 
		angle: 85, 
		distance: 100, 
		showAfter: 500 
	});

});