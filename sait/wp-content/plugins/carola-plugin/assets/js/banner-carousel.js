(function($) {
	
	"use strict";
	var banner_carousels_script_js = function($scope, $) {
		
		function carola_theme_owl_carousel() {
			if($('.theme_carousel').length) {
				$(".theme_carousel").each(function (index) {
					var $owlAttr = {
							animateOut: 'slideOut',
							animateIn: 'slideIn',
					},
					$extraAttr = $(this).data("options");
					$.extend($owlAttr, $extraAttr);
					$(this).owlCarousel($owlAttr);   
				});
			}
		}
		carola_theme_owl_carousel();
		
		  		
	};
	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/carola_main_slider.default', banner_carousels_script_js);
		elementorFrontend.hooks.addAction('frontend/element_ready/carola_project_carousel.default', banner_carousels_script_js);
		elementorFrontend.hooks.addAction('frontend/element_ready/carola_testimonials_carousel.default', banner_carousels_script_js);
		elementorFrontend.hooks.addAction('frontend/element_ready/carola_cars_carousel.default', banner_carousels_script_js);
    });	

})(window.jQuery);