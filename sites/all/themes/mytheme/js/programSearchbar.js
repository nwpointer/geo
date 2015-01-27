(function($) {
	  window.search = function(){
	  	searchTerm = $("#search-term").val();
	  	parent.location='/programs?searchterm=' + searchTerm;
	  }
})(jQuery);