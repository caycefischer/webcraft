// 2. Activate plugins on document.ready

$(document).ready(function() {

    $(function() {
		$(".gridder").bind("click", gridder);
    });
    
    function gridder(evt) {
		$("#grid").toggleClass("grid");
    }

    $(function() {
       $("pre").bind("click", textwrapper);
    });
        function textwrapper(evt) {
          $(this).toggleClass("wrapping");
        }

    $("#top").lettering();

    // facebook
    (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=364670606909953";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));


    //twitter
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

    //google+
    (function() {
                    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                    po.src = 'https://apis.google.com/js/plusone.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                  })();


    //github
    
});