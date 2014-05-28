//Menu
function mainmenu(){
	$("ul.menu ul ").css({display: "none"}); // Opera Fix
	$("ul.menu li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(200);
	},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
	});
}

jQuery(document).ready(function($){					
	mainmenu();		
	
	$("ul.menu li:has(ul)").each(function(){
		$(this).addClass("hasSubmenu");
	});		
	
	/*Expand Toggle*/
	$('.expand-box').hide();
	$('a.expand').click(function() {
		if($(this).hasClass("control-open")){
			$(this).removeClass("control-open");
		}else{
			$(this).addClass("control-open");
		}	
	$('.expand-box').toggle(400);
		return false;
	});
	
	
	//Tooltip
	if($(".tooltip-bottom").length){
		$(".tooltip-bottom").each(function(){
			$(this).tipTip({maxWidth: "auto"});
		});
	}

	if($(".tooltip-top").length){		
		$(".tooltip-top").each(function(){
			$(this).tipTip({maxWidth: "auto",defaultPosition: "top"});
		});
	}
	if($(".tooltip-left").length){
		$(".tooltip-left").each(function(){
			$(this).tipTip({maxWidth: "auto",defaultPosition: "left"});
		});
	}
	
	if($(".tooltip-right").length){
		$(".tooltip-right").each(function(){
			$(this).tipTip({maxWidth: "auto",defaultPosition: "right"});	
		});
	}
	
	
	
	//Gallery page isotope	
	var $container = $('.portfolio-container');
	if($container.length){
		$($container).find("> div").each(function(){
			$(this).addClass("column all-sort");
		});
		
		$container.isotope({
			filter: '*',
			animationOptions: { duration: 750, easing: 'linear', queue: false  }
		});
		
		if($("div#sorting-container").length){
			$("div#sorting-container a").click(function(){
				$("div#sorting-container a").removeClass("active_sort");
				var selector = $(this).attr('data-filter');
				$(this).addClass("active_sort");
				$container.isotope({ filter: selector, animationOptions: { duration: 750, easing: 'linear',  queue: false }});
				return false;
			});		
		}
	}
	
	if($("div.portfolio-container").length) {
		$(window).smartresize(function(){
	  		applyIso();
		});
	}
	
	function applyIso(){
		$("div.portfolio-container").css({overflow:'hidden'}).isotope({itemSelector : '.isotope-item'});
	};
	
		
	/*Testimonial Carousel*/
	if($(".testimonial-carousel").length){
		$('ul.testimonial-carousel').jcarousel({ scroll: 1 });
	}
	
	/*Portfolio Carousel*/
	if($(".portfolio-carousel").length){
		$('ul.portfolio-carousel').jcarousel({ scroll: 1 });
	}
	
	/*Clients Carousel*/
	if($(".clients-carousel").length){
		$('ul.clients-carousel').jcarousel({ scroll: 1 });
	}
	
	/**
	 * Tabs Shortcodes
	 */
	if($('ul.tabs-frame').length > 0) $('ul.tabs-frame').tabs('> .tabs-frame-content');
	
	if($('.tabs-vertical-frame').length > 0){
		$('.tabs-vertical-frame').tabs('> .tabs-vertical-frame-content');
		
		$('.tabs-vertical-frame').each(function(){
			$(this).find("li:first").addClass('first').addClass('current');
			$(this).find("li:last").addClass('last');
		});

		$('.tabs-vertical-frame li').click(function(){ 
			$(this).parent().children().removeClass('current');
			$(this).addClass('current');
		});
	}
	/*Tabs Shortcode Ends*/
	
	
	/* 
	 * Toggle shortcode
	 */
	$('.toggle').toggle(function(){
		$(this).addClass('active');
	}, function () {
		$(this).removeClass('active');
	});

	$('.toggle').click(function(){
		$(this).next('.toggle-content').slideToggle();
	});
	
	$('.toggle-frame-set').each(function(i) {
		var $this = $(this),
		    $toggle = $this.find('.toggle-accordion');
		
		$toggle.click(function(){
			if( $(this).next().is(':hidden') ) {
				$this.find('.toggle-accordion').removeClass('active').next().slideUp();
				$(this).toggleClass('active').next().slideDown();
			}
			return false;
		});
	});
	/* Toggle Shortcode end*/
	
		/* Tiny Nav */		
	$("#top-menu ul.menu").tinyNav({
	  active: 'current_page_item' // String: Set the "active" class
	});


	
});