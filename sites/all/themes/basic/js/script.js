/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

	

	$(function(){

		$("#menu-toggle").click(function(){
			$('nav #primary').toggle();
		});

		explore = function(){
             var search = $('.explore input[type="text"]').val();
             window.location.href += 'programs/' + search;
             return false;
            }

		// $("#barwrapper").sticky({topSpacing:-0, responsiveWidth:true});
		$("#programList #controls").sticky({topSpacing:-0, responsiveWidth:true});
		// $("#save").sticky({topSpacing:-0});
		//$("#sidebar-extras").sticky({topSpacing:60, getWidthFrom: ".region-sidebar-first"});
		jQuery("#togglesavedProgramDisplay").click(function(){
			$("#savedProgramDisplay").slideToggle(100);
		});
	});

	$(function(){
	 var lastScrollTop = 0, delta = 5;
	 $(window).scroll(function(){
	 var nowScrollTop = $(this).scrollTop();
	 if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
	 if (nowScrollTop > lastScrollTop){
		$("#barwrapper").addClass("visible-visor");
		$("#savedProgramDisplay:visible").toggle();
	 } else {
		$("#barwrapper").removeClass("visible-visor");
		$("#savedProgramDisplay:visible").toggle();
	 }
	 lastScrollTop = nowScrollTop;
	 }
	 });
	 });

	// $("#togglesavedProgramDisplay").click(function(){

	// 	$("#savedProgramDisplay").slideToggle();
	// });
	// 
	



// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // 

  }
};


})(jQuery, Drupal, this, this.document);
