(function ($){

//list.js initializations
var options = { 
  valueNames: [ 'discipline', 'country', 'term', 'pricing', 'regions'] ,
  // item: '<li><a class="discipline"></a> <br /><span class="url"></span><p class="country"></p></li>'//,
  item: '<li><a class="url"><div class="img-wrap"><img class="image"></div><div class="content"><h3 class="title"></h3><p class="term"></p><p class="discipline"></p></div></a></li>'
};

var catagories = {}; // the catagories user can use from
var validSelections = {}; // selectable options in select dropdown
// initialize validSelections
foreachCatagory(function(catagories){
  validSelections[catagories] = [];
});

App.programs = new List('programList', options);

App.programs.multiFresh = function(){
  $(".ms-drop.bottom").empty();
  
  foreachCatagory(function(catagories){
    validSelections[catagories] = [];
    dropdownof(catagories).empty();
  });

  App.requestPrograms(function(){
    App.programs.add(program);
    App.programs.search($("input.search").val());
    // App.programs.update();
    // updateList();

    // update mulit-select
    for (var property in program) {
      if(validSelections[property] && validSelections[property].indexOf(program[property]) == -1){
        console.log();
        validSelections[property].push(program[property]);
        $(function(){
          item = program[property];
          $("." + property + "_s").append('<option class="'+ item +'"value="'+item+'">'+ item +'</option>');
        });
      }
    };

    $('select').each(function(){
      $(this).multipleSelect({
        onClick: updateList,
        selectAll: false,
        placeholder: $(this).data('placeholder')
      });
    });
    // App.programList.search($("input.search").val());
  });
}

//3 helper functions 
var updateList = function(){
  App.programs.filter(function(item) {
    filter = true;
    foreachCatagory(function(option){
      catagories[option] = dropdownof(option).val();
      filter = filter && (_(catagories[option]).contains(item.values()[option]) || !catagories[option]);
    });
    return filter;
  });
}

function foreachCatagory(f){
  options.valueNames.forEach(function(option){
    f(option);
  });
}

function dropdownof(option){
  return $("." + option + "_s");
}
})(jQuery);