(function ($) {
  var options = {
    valueNames: [ "title", "country" ],
    item: '<li><h3 class="title"></h3><p class="country"></p></li>'
  };

  window.userList = new List("users", options);

})(jQuery);