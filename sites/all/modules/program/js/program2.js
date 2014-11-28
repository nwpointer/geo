(function ($) {
	window.programs = [];
	var url = window.location.origin + "/rest/node";
	$.ajax(url, {
		success: function(data){
			for(i=0; i<data.length; i++){
				if(data[i].type == "program"){
					window.programs.push(data[i]);
				}
			}
			window.render();
		},
		error: function(){
			console.log("fail");
		}
	});
	
	// function print(){
	// 	programs = window.programs;
	// 	console.log(programs);
	// 	for(i=0; i<programs.length; i++){
	// 		el = $("#programs ul").append(
	// 			"<li>"
	// 			+ programs[i].title +
	// 			"</li>"
	// 		);


	// 	}
	// }
})(jQuery);