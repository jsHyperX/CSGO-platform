// $(function() {
//     var headHeight = $('ul').outerHeight();
//     $('.content').css({'margin-top': headHeight });
// });

// window.addEventListener('scroll', function () {
//   document.body.classList[
//     window.scrollY > 20 ? 'add': 'remove'
//   ]('scrolled');
// });

$(window).on('scroll', function ()  {
	
  if ($(window).scrollTop() > 150) 
  {
    $('header').addClass('fixed');
    //$('.page-header').addClass('hide-header');
  } 
  else 
  {
    $('header').removeClass('fixed');
    //$('.page-header').removeClass('hide-header');
  }
});
