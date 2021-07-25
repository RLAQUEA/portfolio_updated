//this is the disappear scroll function 

(function() {

    var windowH = $(window).height(),
        introEl = $('div.intro'),
        introHeadingH = introEl.find('h1').height();

    introEl.css('padding', (windowH - introHeadingH)/2 + 'px 0');

    $(document).on('scroll', function() {
        introEl.slideUp(1000, function() { $(document).off('scroll'); });
    });



})();

//this is the hamburger menu button
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }