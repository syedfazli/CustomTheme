<?php 
	global $language;
	global $base_url;
	$term = taxonomy_term_load($field->original_value);
	$taxonomy_path_alias = drupal_get_path_alias('taxonomy/term/' . $field->original_value); 
	
    if ($term) {
        if (module_exists('i18n_taxonomy')) {
            $term_name = i18n_taxonomy_term_name($term, $language->language);
            $term_desc = i18n_taxonomy_term_description($term, $language->language);
        } else {
            $term_name = $term->name;
            $term_desc = $term->description;
        }
		
		$imagePath = ' ';
		if(isset($term->field_image['und'])) {
			$imagePath = file_create_url(image_style_url('resize_137x137', $term->field_image['und'][0]['uri'])); 
		}
    }
?>
<a href="<?php print $base_url .'/'. $taxonomy_path_alias; ?>" class="d_block photoframe tr_all_hover shadow color_dark r_corners">
	<span class="d_block wrapper">
		<img width="137px" height="137px" class="tr_all_long_hover" src="<?php print $imagePath; ?>" alt="">
	</span>
	<?php print $term_name; ?>
</a>