/*
 * MBP - Mobile boilerplate helper functions
 */
(function(document){

window.MBP = window.MBP || {}; 

// Fix for iPhone viewport scale bug 
// http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/

MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
MBP.ua = navigator.userAgent;

MBP.scaleFix = function () {
  if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
    MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    document.addEventListener("gesturestart", MBP.gestureStart, false);
  }
};
MBP.gestureStart = function () {
    MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
};


// Hide URL Bar for iOS and Android by Scott Jehl
// https://gist.github.com/1183357

MBP.hideUrlBar = function () {
	var win = window,
		doc = win.document;

	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash || !win.addEventListener ){

		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,

		//reset to 0 on bodyready, if needed
		bodycheck = setInterval(function(){
			if( doc.body ){
				clearInterval( bodycheck );
				scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
				win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
			}	
		}, 15 );

		win.addEventListener( "load", function(){
			setTimeout(function(){
				//reset to hide addr bar at onload
				win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
			}, 0);
		}, false );
	}
};


// Autogrow
// http://googlecode.blogspot.com/2009/07/gmail-for-mobile-html5-series.html

MBP.autogrow = function (element, lh) {

    function handler(e){
        var newHeight = this.scrollHeight,
            currentHeight = this.clientHeight;
        if (newHeight > currentHeight) {
            this.style.height = newHeight + 3 * textLineHeight + "px";
        }
    }

    var setLineHeight = (lh) ? lh : 12,
        textLineHeight = element.currentStyle ? element.currentStyle.lineHeight : 
                         getComputedStyle(element, null).lineHeight;

    textLineHeight = (textLineHeight.indexOf("px") == -1) ? setLineHeight :
                     parseInt(textLineHeight, 10);

    element.style.overflow = "hidden";
    element.addEventListener ? element.addEventListener('keyup', handler, false) :
                               element.attachEvent('onkeyup', handler);
};

})(document);


// Prevent iOS from zooming onfocus
// http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/

var $viewportMeta = $('meta[name="viewport"]');
$('input, select, textarea').bind('focus blur', function(event) {
  $viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
});
