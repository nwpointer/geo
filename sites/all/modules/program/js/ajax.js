(function ($) {
  window.programs = [];
  window.programIDs = [];
  var url = window.location.origin + "/rest/node";
  $.ajax(url, {
    success: function(data){
      for(i=0; i<data.length; i++){
        if(data[i].type == "program"){
          window.programs.push(data[i]);
        }
      }
      render();
    },
    error: function(){
      console.log("fail");
    }
  });

  // function request(url, output, callback){
  //   url = window.location.origin + url;
  //   $.ajax(url, {
  //     success: function(data){
  //       for(i=0; i<data.length; i++){
  //         if(data[i].type == "program"){
  //           output.push(data[i]);
  //         }
  //       }
  //       render();
  //     },
  //     error: function(){
  //       console.log(url + "fail");
  //     }
  //   });
  // }

  function render(){
    programs = window.programs;
    for(i=0; i<programs.length; i++){
      window.userList.add(programs[i]);
    }
  }
})(jQuery);