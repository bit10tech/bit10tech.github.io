// typing animation
var rotateText = function(el, toRotate, period) 
{
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

rotateText.prototype.tick = function() 
{
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
	
	if (this.isDeleting) 
	{
		this.txt = fullTxt.substring(0, this.txt.length-1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length+1);
	}
	
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
	var that = this;
	var delta = 300-Math.random()*100;
	
	if (this.isDeleting) 
	{
		delta /= 2;
	}
	
	if (!this.isDeleting && this.txt === fullTxt) 
	{
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}
	
	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() 
{
	var elements = document.getElementsByClassName('txt-rota');
	for (var i=0; i<elements.length; i++) 
	{
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) 
		{
			new rotateText(elements[i], JSON.parse(toRotate), period);
		}
	}
	
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rota > .wrap { border-right: 0.08em solid grey }";
	document.body.appendChild(css);
};

// menu animations 
(function() 
{
	var windowH = $(window).height(),
		documElem = $(document),
		sdp1 = $('.sdp1'),
		sdp2 = $('.sdp2'),
		cont1 = $('.set1'),
		cont2 = $('.set2'),
		btns = $('.lnk'),
		animSpeed = 250,
		css = document.createElement("style"),
		a = 0;
            
	sdp1.css({
		height: 0 + '%',
		top: -windowH + 'px'
	});
	
	sdp2.css({
		height: 0 + '%',
		top: -windowH + 'px'
	});
            
	btns.on('click', function(e) 
	{
		if (a == 0) 
		{
			if ( $(this).hasClass('lnk-proj') ) 
			{
				sdp2.animate({'top': -windowH + 'px'}, animSpeed);
				cont2.animate({'padding-top': 0}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-math > a:focus:before {transform: scaleY(0) }";
				document.body.appendChild(css);
				sdp1.animate({'top': 0 + '%' }, animSpeed);
				cont1.animate({'padding-top': 6.25 + '%'}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-proj > a:focus:before {transform: scaleY(1) }";
				a = 1;
			} else if ( $(this).hasClass('lnk-math') ) {
				sdp1.animate({'top': -windowH + 'px'}, animSpeed);
				cont1.animate({'padding-top': 0}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-proj > a:focus:before {transform: scaleY(0) }";
				document.body.appendChild(css);
				sdp2.animate({'top': 0 + '%' }, animSpeed);
				cont2.animate({'padding-top': 6.25 + '%'}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-math > a:focus:before {transform: scaleY(1) }";
				a = 2;
			} else {
				sdp1.animate({'top': -windowH + 'px'}, animSpeed);
				cont1.animate({'padding-top': 0}, animSpeed);
				sdp2.animate({'top': -windowH + 'px'}, animSpeed);
				cont2.animate({'paddingtop': 0}, animSpeed);
			}
		} else if (a == 1) {
			if ( $(this).hasClass('lnk-proj') ) 
			{
				sdp1.animate({'top': -windowH + 'px'}, animSpeed);
				cont1.animate({'padding-top': 0}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk > a:focus:before {transform: scaleY(0) }";
				document.body.appendChild(css);
				a = 0;
			} else if ( $(this).hasClass('lnk-math') ) {
				sdp1.animate({'top': -windowH + 'px'}, animSpeed);
				cont1.animate({'padding-top': 0}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-proj > a:focus:before {transform: scaleY(0) }";
				document.body.appendChild(css);
				sdp2.animate({'top': 0 + '%' }, animSpeed);
				cont2.animate({'padding-top': 6.25 + '%'}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-math > a:focus:before {transform: scaleY(1) }";
				a = 2;
			} else {
				sdp1.animate({'top': 0}, animSpeed);
				cont1.animate({'padding-top': 0 + 'px'}, animSpeed);
				sdp2.animate({'top': -windowH + 'px'}, animSpeed);
				cont2.animate({'padding-top': 0}, animSpeed);
			}
		} else if (a == 2) {
			if ( $(this).hasClass('lnk-proj') ) 
			{
				sdp2.animate({'top': -windowH + 'px'}, animSpeed);
				cont2.animate({'padding-top': 0}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-math > a:focus:before {transform: scaleY(0) }";
				document.body.appendChild(css);
				sdp1.animate({'top': 0 + '%' }, animSpeed);
				cont1.animate({'padding-top': 6.25 + '%'}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk-proj > a:focus:before {transform: scaleY(1) }";
				a = 1;
			} else if ( $(this).hasClass('lnk-math') ) {
				sdp2.animate({'top': -windowH + 'px'}, animSpeed);
				cont2.animate({'padding-top': 0}, animSpeed);
				css.type = "text/css";
				css.innerHTML = ".lnk > a:focus:before {transform: scaleY(0) }";
				document.body.appendChild(css);
				a = 0;
			} else {
				sdp1.animate({'top': 0}, animSpeed);
				cont1.animate({'padding-top': 0 + 'px'}, animSpeed);
				sdp2.animate({'top': -windowH + 'px'}, animSpeed);
				cont2.animate({'padding-top': 0}, animSpeed);
			}
		}
		e.preventDefault();
	});
})();

//slideshows
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














