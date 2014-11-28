window.App = {};
App.terms = [];
window.Api = window.location.origin + '/rest';

(function ($) {
  function request(url, callback){
    $.ajax(url, {
      success: function(data){
         if(typeof callback === "function"){
          callback(data);
         }
      },
      error: function(){
        console.log(url + "fail");
      }
    });
  };
  function synchronousRequest(url, callback){
    $.ajax(url, {
      success: function(data){
         if(typeof callback === "function"){
          response = callback(data);
         }
      },
      error: function(){
        console.log(url + "fail");
      },
      async: false
    });
  };

  App.requestPrograms = function(){
    url = Api + '/node';
    request(url, function(data){
      data = _.select(data, function(node){ return node.type == "program";});
      App.programUrls = _.pluck(data, "uri");
      _.each(App.programUrls, App.requestProgram);
      console.log('nodes loaded');
    });
  }

  App.requestProgram = function(url){
    request(url, function(data){
      program = {}
      program.country = getTermName(data.field_country);
      program.title = data.title;
      program.path = data.path;
      program.academicStanding = getCustomfield(data.field_academic_standing);
      App.programList.add(program);
    });
  }

  function getCustomfield(field){
      return field.und[0].value;
  }

  function getTermName(field){
    term = getTerm(field);
    return term.name;
  }
  function getTerm(field){
    tid=field.und[0].tid;
    url = Api + '/term/' + tid;
    if(typeof App.terms[tid] === "undefined"){
      synchronousRequest(url, function(data){
        App.terms[data.tid] = data;
      });
    }
    return App.terms[tid];
  }

  // function render(){
  //   programs = window.programs;
  //   for(i=0; i<programs.length; i++){
  //     window.userList.add(programs[i]);
  //   }
  // }
})(jQuery);