/* get Browser */
function get_browser(e) {var t = e.toLowerCase(), n = function(e) {return t.indexOf(e)>-1}, r = "gecko", i = "webkit", s = "safari", o = "opera", u = "mobile", a = document.documentElement, f = [!/opera|webtv/i.test(t) && /msie\s(\d)/.test(t) ? "ie ie" + RegExp.$1: n("firefox/2") ? r + " ff2": n("firefox/3.5") ? r + " ff3 ff3_5": n("firefox/3.6") ? r + " ff3 ff3_6": n("firefox/3") ? r + " ff3": n("gecko/") ? r: n("opera") ? o + (/version\/(\d+)/.test(t) ? " " + o + RegExp.$1 : /opera(\s|\/)(\d+)/.test(t) ? " " + o + RegExp.$2 : ""): n("konqueror") ? "konqueror": n("blackberry") ? u + " blackberry": n("android") ? u + " android": n("chrome") ? i + " chrome": n("iron") ? i + " iron": n("applewebkit/") ? i + " " + s + (/version\/(\d+)/.test(t) ? " " + s + RegExp.$1 : ""): n("mozilla/") ? r: "", n("j2me") ? u + " j2me": n("iphone") ? u + " iphone": n("ipod") ? u + " ipod": n("ipad") ? u + " ipad": n("mac") ? "mac": n("darwin") ? "mac": n("webtv") ? "webtv": n("win") ? "win" + (n("windows nt 6.0") ? " vista" : ""): n("freebsd") ? "freebsd": n("x11") || n("linux") ? "linux": "", "js"];c = f.join(" ");a.className += " " + c;return c} get_browser(navigator.userAgent);

$(document).ready(function(){

  $('body').on('scroll', function(){
    console.log('hallo');
  })

  $(window).on('load resize', function(){
    vw = $(window).width() / 100;
    vh = $(window).height();
  })

  if(!$('html').hasClass('mobile')){

    $(document).on('mousemove', function(e){

      var timesraw = parseInt(100 - Math.round((e.pageY + 0.1) / ($(window).height()) * 100));
      var times = '"srff"' + timesraw;

      $('#timescount').text(timesraw + '%');
      $('#arialcount').text(100-timesraw + '%');
      $('#slantcount').text(timesraw + '%');
      $('#arialcount').text(100-timesraw + '%');

      if((e.pageX <= $(window).width()/2)){
        var backslantraw = parseInt(100 - Math.round((e.pageX + 0.1) / ($(window).width()/2) * 100));
        var backslant = '"ital"' + '-' + backslantraw + ',';
        var settings = backslant + times;
        $('.follower, .abc, .content').css({'font-variation-settings': settings})
        $('#slantcount').text(0 + '%');
        $('#backcount').text('-' + backslantraw + '%');
      } else {
        var backslantraw = parseInt((100 - Math.round((e.pageX + 0.1) / ($(window).width()/2) * 100)) * -1);
        var backslant = '"ital"' + backslantraw + ',';
        var settings = backslant + times;
        $('.follower, .abc, .content').css({'font-variation-settings': settings})
        $('#slantcount').text(backslantraw+ '%');
        $('#backcount').text(0 + '%');
      }
    });

  }

    count = 0;
    $('body').on('click', function(e){
      if($(window).width() >= 800){
        var target = $(e.target), article;
        if(!target.hasClass('mobile2') && !target.parents().hasClass('mobile2') && !target.is('a')){
          if(count == 0){
            count++;
            $('.inner').show();
            $('.follower').hide();
            $('#two, #three, #one').css({'border-color':'white'});
            $('body, .white').css({'background-color':'black', 'color': 'white'});

          } else {
            $('.inner').hide();
            $('.follower').show();
            $('#two, #three, #one').css({'border-color':'black'});
            $('body, .white').css({'background-color':'white', 'color': 'black'});
            count = 0;
          }
        }
        count2 = 0;
        $('.burger').on('click', function(){
          that = $(this);
          if(count2 == 0){
            that.css({'font-variation-settings': '"nvgn" 100'});
            $('.mobile2').css({'overflow':'hidden'});
            $('.about').css({'max-height': 37*vw});
            count2++;

          } else {
            that.css({'font-variation-settings': '"nvgn" 0'});
            $('.mobile2').css({'overflow':'scroll'});
            $('.about').css({'max-height': 0*vw});
            count2 = 0;
          }
        })
      }
    })

  count2 = 0;
  $('.burger').on('click', function(){
    if($(window).width() <= 800){
      that = $(this);
      if(count2 == 0){
        that.css({'font-variation-settings': '"nvgn" 100'});
        $('.content').hide();
        $('.about').show();
        count2++;

      } else {
        that.css({'font-variation-settings': '"nvgn" 0'});
        $('.content').show();
        $('.about').hide();
        count2 = 0;
      }
    }
  })

  if($('html').hasClass('mobile')){

    function ask() {
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('devicemotion', () => {});
            }
          })
          .catch(console.error);
      }
    }

    var deviceorientationenabled = false;

    if ($('html').hasClass('mobile')) {
      window.addEventListener('deviceorientation', handleOrientation);
      function handleOrientation(event) {
        deviceorientationenabled = true;
        var x = event.gamma;
        var y = event.beta;
      }
    }
    if ($('html').hasClass('mobile') && deviceorientationenabled == false) {

    }


    $(document).one('click touchmove', '*', function(e) {
      if ($('html').hasClass('mobile')) {
        console.log('ask');
        ask()
      }
    });

    window.addEventListener("deviceorientation", handleOrientation, true);

    function handleOrientation(event) {
      var y = event.beta;  // In degree in the range [-180,180]
      var x = event.gamma; // In degree in the range [-90,90]

      var yy = Math.round(y);
      var xx = Math.round(x);

      // console.log(xx);

      if( x > 0 && x < 30 ){
        var xx = parseInt(0 + ((x / 30) * 100));
      } else if ( x > 30 && x < 90 ){
        var xx = 100;
      } else if ( x > -30 && x < 0 ){
        var xx = parseInt((x / 30) * 100);
      } else if ( x < -30 && x > -180 ){
        var xx = parseInt((x / 30) * 100);
        var xx = -100;
      } else {
        var xx = 0;
      }



      if( y > 0 && y < 40){
        var yy = parseInt(100 - ((y / 40) * 50));
      } else if ( (y < 0 && y > -180 ) || (y == 0)){
        var yy = 100;
      } else if ( y > 40 && y < 80){
        var yy = parseInt(100 + (((y / 40) * 50) * -1));
      } else if ((y > 80 && y < 180 ) || (y == 80)){
        var yy = 0;
      } else{
        var yy = 50;
      }

      $('.content').css({
          fontVariationSettings: '"srff"' + yy + ', "ital"' + xx
      });
    };
  }

});
