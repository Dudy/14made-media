jQuery.noConflict();
jQuery(document).ready(function($){								
	"use strict";
	
	//MOBILE MENU...
	$('#page-nav > ul').mobileMenu({
	  defaultText: 'Navigate to...',
	  className: 'mobile-menu',
	  subMenuDash: '&ndash;&nbsp;'
	});
								
	//TEXTBOX CLEAR...
	$('input.Textbox, textarea.Textbox').focus(function() {
	  if (this.value == this.title) {
		 $(this).val("");
	  }}).blur(function() {
	  if (this.value == "") {
	     $(this).val(this.title);
	  }
	});

	//ISOTOPE CATEGORY CLICK...
	var $container = $('.portfolio-container');	
	var $gw = 20;
	if($('.portfolio-container li').hasClass('with-sidebar')) { $gw = 12; }
	
	$('.sorting-container a').click(function(){ 
		$('.sorting-container').find('a').removeClass('active');
		$(this).addClass('active');
		
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'easeOutBack',
				queue: false
			},
			masonry: {
				columnWidth: $('.portfolio-container li').width(),
				gutterWidth: $gw
			}
		});
		return false;
	});

	if($container.length){
		//ISOTOPE...
		$container.isotope({ 
			filter: '*', 
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			},
			masonry: {
				columnWidth: $('.portfolio-container li').width(),
				gutterWidth: $gw
			}
		});
	}
	
	var $pphoto = $('a[data-gal^="prettyPhoto"]');
	if($pphoto.length){
		//PRETTYPHOTO...
		$("a[data-gal^='prettyPhoto']").prettyPhoto({ 
			theme:"dark_rounded", 
			autoplay_slideshow: false, 
			overlay_gallery: false, 
			show_title: false,
			social_tools: false
		});
	}
	
	//PARTNERS...
	if($(".carousel-wrapper").length) {
	  $('.testimonial-carousel').carouFredSel({
		responsive: true,
		auto: false,
		width: '100%',
		prev: '.prev-arrow',
		next: '.next-arrow',
		height: 'auto',
		scroll: {
			fx: 'crossfade'
		},				
		items: {
		  visible: {
			min: 1,
			max: 1
		  }
		}				
	  });			
	}
	
	//TWITTER TWEETS...
	$(".tweets").tweet({
      modpath: 'js/twitter/',		
	  username: "envato",
	  count: 2,
	  loading_text: "loading tweets...",
	  template: "{avatar}{join}{text}{time}",
	});
	
	//FLICKR FEEDS...	
	$('.flickrs').jflickrfeed({
	  limit: 9,
	  qstrings: {
		id: '52617155@N08'
	  },
	  itemTemplate: '<li>'+
			'<a data-gal="prettyPhoto" href="{{image}}" title="{{title}}">' +
				'<img src="{{image_s}}" alt="{{title}}" />' +
			'</a>' +
		'</li>'
	}, function(data) {
		jQuery('.flickrs a').prettyPhoto({ 
			theme:"dark_rounded", 
			autoplay_slideshow: false, 
			overlay_gallery: false, 
			show_title: false,
			social_tools: false
		});;
	});
	
	//FOOTER NAV LINE HIDE...
	$('ul.footer-links li:last').addClass('last');
});