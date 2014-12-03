function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

(function ($) {
  // search
  $("input.search").val(getParameterByName('searchterm'));


  var options = {
    valueNames: [ "title", "country" ],
    item: '<li>' +'<div class="img-wrap"><img width="100%"></div><div class="content"><a class="program"><h3 class="title"></h3></a><p class="country"></p></div></li>' //,
    //page: 3,
    //plugins: [ ListPagination({}) ]
  };

  App.programList = new List("programs", options);
  

  App.programView.render = function(){
    App.programList.add(program);
    console.log(program);
    App.programList.search($("input.search").val());
    $('#programs li:last-child a.program').attr('href', program.path);
    $('#programs li:last-child img').attr('src', program.image);
  }

  App.requestPrograms();

  

})(jQuery);