(function ($){

//list.js initializations
var options = { 
  valueNames: [ 'discipline', 'country', 'term'] ,
  // item: '<li><a class="discipline"></a> <br /><span class="url"></span><p class="country"></p></li>'//,
  item: '<li><a class="url"><div class="img-wrap"><img class="image"></div><div class="content"><h3 class="title"></h3><p class="term"></p><p class="discipline"></p></div></a></li>'
};

App.programs = new List('programList', options);

App.programs.multiFresh = function(){
  App.requestPrograms(function(){
  App.programs.add(program);
  App.programs.update();
  updateList();


  // update mulit-select
  for (var property in program) {
    // console.log(validSelections[property]);
    if(validSelections[property]){
      validSelections[property].push(program[property]);
      $(function(){
        item = program[property];
        dropdownof(property).append('<option value="'+item+'">'+ item +'</option>')
      });
    }
  };
  $('select').each(function(){
    $(this).multipleSelect({
      onClick: updateList,
      selectAll: true,
      placeholder: $(this).data('placeholder')
    });
  });
});
}

var catagories = {}; // the catagories user can use from
var validSelections = {}; // selectable options in select dropdown
// initialize validSelections
foreachCatagory(function(catagories){
  validSelections[catagories] = [];
});

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
 
// after page load... 
$(function(){
  updateList();
  // // register eventhandlers for 
  // foreachCatagory(function(catagory){
  //   dropdownof(catagory).change(updateList);
  // });
  
  // look through list for field values
  _(App.programs.items).each(function(item){
    foreachCatagory(function(catagory){
      validSelections[catagory].push(item.values()[catagory]);
    }); 
  });

  // add unique field values to select drop down
  foreachCatagory(function(option){
    _(validSelections[option]).uniq().each(function(item){
        dropdownof(option).append('<option value="'+item+'">'+ item +'</option>')
      });
  });

  // registers eventhandlers for multi select
  $('select').each(function(){
    $(this).multipleSelect({
      onClick: updateList,
      selectAll: true,
      placeholder: $(this).data('placeholder')
    });
  });
});
})(jQuery);