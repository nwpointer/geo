(function ($) {
  var options = {
    valueNames: [ "title", "country", "path" ],
    item: '<li><h3 class="title"></h3><p class="country"></p></li>'
  };

  

  App.programList = new List("programs", options);

  App.requestPrograms();

})(jQuery);