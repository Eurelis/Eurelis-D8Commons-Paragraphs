(function($, Drupal) {

	var accordionHandler = function() {
		var i = 0;
		$('.accordion').each(function() {
			i++;
			$(this).attr('id','accordion-unique-id-'+ i);
			$(this).attr('data-accordion','accordion-unique-id-'+ i);
		});

		$('.accordionLink').each(function() {
			i++;
			$(this).attr('href','#accordion-'+ i);
			$(this).next('.accordionContent').attr('id','accordion-'+ i);
		});
	};

	$(document).ready(function() {
		// Functions
		accordionHandler();
	});

	/* Use this behavior as a template for custom Javascript.*/
	Drupal.behaviors.exampleBehavior = {
		attach: function(context, settings) {
			//alert("I'm alive!");
		}
	};
})(jQuery, Drupal);