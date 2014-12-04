function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

(function ($) {
  // make search tools sticky
  // $('#programs').stick_in_parent();


  // search
  $("input.search").val(getParameterByName('searchterm'));


  var options = {
    valueNames: [ "title", "country" ],
    item: '<li><a class="url"><div class="img-wrap"><img class="image"></div><div class="content"><h3 class="title"></h3><p class="term"></p><p class="discipline"></p></div></a></li>'//,
    //page: 6,
    //plugins: [ ListPagination({}) ]
  };

  App.programList = new List("programs", options);
  

  App.programView.render = function(){
    App.programList.add(program);
    App.programList.add(program); 
    App.programList.search($("input.search").val());
    // $('#programs li:last-child a.program').attr('href', program.path);
    // $('#programs li:last-child img').attr('src', program.image);
  }

  App.requestPrograms();

 $('#discipline').change(function() {
   console.log( this.value); // or $(this).val()
   selection = this;
   if(this.value =='null'){
    App.programList.filter();
   }else{
    App.programList.filter(function(item){
      return item.values().discipline == selection.value;
    });
   }
 });

 $('#term').change(function() {
   console.log( this.value); // or $(this).val()
   selection = this;
   if(this.value =='null'){
    App.programList.filter();
   }else{
    App.programList.filter(function(item){
      return item.values().term == selection.value;
    });
   }
 });

 // App.programList.filter(function(item){
 //  if (item.values().id > 1) {
 //         return true;
 //     } else {
 //         return false;
 //     }
 // });

})(jQuery);