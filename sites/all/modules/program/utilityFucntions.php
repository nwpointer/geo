<?php 

function getTermsfrom($taxonomy){
  $terms = array();
  $myvoc = taxonomy_vocabulary_machine_name_load($taxonomy);
  $tree = taxonomy_get_tree($myvoc->vid);
  foreach ($tree as $term) {
   array_push($terms, $term->name);
  }
  return $terms;
}

function selectFrom($taxonomy){
  $terms = getTermsfrom($taxonomy);
  $html = '<select name="filter" id="' . $taxonomy . '">';
  $html .= '<option selected disabled value="null">filter by ' . $taxonomy . '</option>';
  foreach($terms as $term){
    $html .= '<option value="' . $term . '">' . $term . '</option>';
  }
  $html .= '<option value="null"> All ' . $taxonomy . 's</option>';
  $html .= '</select>';
  return $html;
}

function loadjs($scripts, $location = "footer"){
	$program_module_path = drupal_get_path('module', 'program');
	
	foreach ($scripts as $src) {
		drupal_add_js($program_module_path . $src, array('scope'=>$location) );	
	}
}

function loadcss($styles){
	$program_module_path = drupal_get_path('module', 'program');

	foreach($styles as $style ){
		drupal_add_css(
			$program_module_path . $style, array('group' => CSS_DEFAULT, 'type' => 'file')
		);
	}
}