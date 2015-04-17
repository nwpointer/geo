(function($){
	// alert("foo");

	var options = { valueNames: [ 'discipline', 'country', 'term', 'price', 'region', 'type', 'priority'] };
	programList = new List('programList', options);

	function updateList(){
		var values_date = $(".discipline_s").val();
		programList.filter(function(item) {
		    return (_(values_date).contains(item.values().discipline) || !values_date);
		  });
	}

	$(function(){
		$('select').each(function(){
	    $(this).multipleSelect({
	      onClick: updateList,
	      selectAll: false,
	      placeholder: $(this).data('placeholder')
	    });
	  });
	});
})(jQuery);

// jQuery(".discipline_s").val()