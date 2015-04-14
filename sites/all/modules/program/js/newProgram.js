(function($){
	// alert("foo");

	var options = { valueNames: [ 'discipline' ] };
	var programList = new List('users', options);

	function updateList(){
		var values_date = $(".discipline_s").val();
		// userList.filter(function(item) {
		//     return (_(values_date).contains(item.values().born) || !values_date) 
		//            && (_(values_name).contains(item.values().name) || !values_name)
		//   });
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