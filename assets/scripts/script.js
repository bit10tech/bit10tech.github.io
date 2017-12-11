/*
	===================
		videos
	===================
*/

var video = document.getElementById('glass');
			
video.addEventListener("timeupdate", function() {
	if (video.currentTime >= 3) {
		video.pause();
	}
});
		
/* 
	===================
		drop-down menu
	===================
*/
		
(function() {
	var windowH = $(window).height(),
		documElem = $(document),
		slideDownPage = $('.slide-down-page'),
		content = $('.content'),
		btns = $('.btn'),
		animSpeed = 500;
		a = 0;
            
	slideDownPage.css({
		height: 0 + '%',
		top: -windowH + 'px'
	});
            
	btns.on('click', function(e) {
		if (a == 0) {
			if ( $(this).hasClass('btn-menu') ) {
				slideDownPage.animate({'top': 0}, animSpeed);
				content.animate({'margin-top': 0 + 'px'}, animSpeed);
				a = 1;
			}
			else {
				slideDownPage.animate({'top': -windowH + 'px'}, animSpeed);
				content.animate({'margin-top': 0}, animSpeed);
			}
		} 
		else if (a == 1) {
			if ( $(this).hasClass('btn-menu') ) {
				slideDownPage.animate({'top': -windowH + 'px'}, animSpeed);
				content.animate({'margin-top': 0}, animSpeed);
				a = 0;
			}
			else {
				slideDownPage.animate({'top': 0}, animSpeed);
				content.animate({'margin-top': 0 + 'px'}, animSpeed);
			}
		}
		e.preventDefault();
	});
})();

/*
	===================
		slideshows
	===================
*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
