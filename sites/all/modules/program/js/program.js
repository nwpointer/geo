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
    item: '<li><a class="url"><div class="img-wrap"><img class="image" width="100%"></div><div class="content"><h3 class="title"></h3><p class="term"></p></div></a></li>' //,
    //page: 3,
    //plugins: [ ListPagination({}) ]
  };

  App.programList = new List("programs", options);
  

  App.programView.render = function(){
    App.programList.add(program);
    App.programList.search($("input.search").val());
    // $('#programs li:last-child a.program').attr('href', program.path);
    // $('#programs li:last-child img').attr('src', program.image);
  }

  App.requestPrograms();

  

})(jQuery);