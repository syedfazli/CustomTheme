<?php

drupal_add_js(drupal_get_path('theme', 'customtheme') . '/js/custom/theme_settings.js');

/**
 * Implements hook_form_system_theme_settings_alter()
 */
function customtheme_form_system_theme_settings_alter(&$form, &$form_state) {
	//background image
    $bg_image = theme_get_setting('bg_image');
    if (file_uri_scheme($bg_image) == 'public') {
        $bg_image = file_uri_target($bg_image);
    }
	
    //logo footer 
    $logo_footer = theme_get_setting('logo_footer');
    if (file_uri_scheme($logo_footer) == 'public') {
        $logo_footer = file_uri_target($logo_footer);
    }
	
	//image menu
    $image_menu = theme_get_setting('image_menu');
    if (file_uri_scheme($image_menu) == 'public') {
        $image_menu = file_uri_target($image_menu);
    }
	
	//custom logo
	$logo_onepage = theme_get_setting('logo_onepage');
    if (file_uri_scheme($logo_onepage) == 'public') {
        $logo_onepage = file_uri_target($logo_onepage);
    }
	$logo_corporate = theme_get_setting('logo_corporate');
    if (file_uri_scheme($logo_corporate) == 'public') {
        $logo_corporate = file_uri_target($logo_corporate);
    }
	$logo_construction = theme_get_setting('logo_construction'); 
    if (file_uri_scheme($logo_construction) == 'public') {
        $logo_construction = file_uri_target($logo_construction);
    }
	$logo_interior = theme_get_setting('logo_interior'); 
    if (file_uri_scheme($logo_interior) == 'public') {
        $logo_interior = file_uri_target($logo_interior);
    }

    // Main settings wrapper
    $form['options'] = array(
        '#type' => 'vertical_tabs',
        '#default_tab' => 'defaults',
        '#weight' => '-10',
        '#attached' => array(
            'css' => array(drupal_get_path('theme', 'customtheme') . '/css/theme-options.css'),
        ),
    );

    // ----------- GENERAL -----------
    $form['options']['general'] = array(
        '#type' => 'fieldset',
        '#title' => t('General'),
    );

    // Breadcrumbs
    $form['options']['general']['breadcrumbs'] = array(
        '#type' => 'checkbox',
        '#title' => 'Breadcrumbs',
        '#default_value' => theme_get_setting('breadcrumbs'),
    );
	
    // Switcher
    $form['options']['general']['switcher'] = array(
        '#type' => 'checkbox',
        '#title' => 'Show Switcher Control',
        '#default_value' => theme_get_setting('switcher'),
    );
    
    // Social Widget
    $form['options']['general']['social_widget'] = array(
        '#type' => 'checkbox',
        '#title' => 'Show Social Widget',
        '#default_value' => theme_get_setting('social_widget'),
    );
	
	$form['options']['general']['twitter_username'] = array(
        '#type' => 'textfield',
        '#title'=> 'Your twitter username',
        '#default_value' => theme_get_setting('twitter_username'),
    );
	
	// RTL Setting
    $form['options']['general']['rtl'] = array(
        '#type' => 'select',
        '#title' => 'You want enable RTL for your website?',
        '#default_value' => theme_get_setting('rtl'),
        '#options' => array(
            '0' => 'No (default)',
            '1' => 'Yes',
        ),
    );
	
	// Maintenance Time
    $form['options']['general']['maintenance_time'] = array(
        '#type' => 'textfield',
        '#title' => 'Maintenance Time',
        '#default_value' => theme_get_setting('maintenance_time'),
    );

     // ----------- LAYOUT -----------
    $form['options']['layout'] = array(
        '#type' => 'fieldset',
        '#title' => t('Layout'),
    );
    
     $form['options']['layout']['layout_page'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Page Layout</h3>',
    );
    
    //Page Layout Container
    $form['options']['layout']['layout_page']['page_wide_layout'] = array(
        '#type' => 'textarea',
        '#title' => 'Page Style: Wide Layout ',
        '#default_value' => theme_get_setting('page_wide_layout'),
    );
    
    //Page Layout Container
    $form['options']['layout']['layout_page']['page_boxed_layout'] = array(
        '#type' => 'textarea',
        '#title' => 'Page Style: Boxed Layout',
        '#default_value' => theme_get_setting('page_boxed_layout'),
    );

    // ------ Header Settings ------
    $form['options']['layout']['header_page'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Header Page Settings</h3>',
    );
    
    $form['options']['layout']['header_page']['header_1'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Header Style 1',
        '#default_value' => theme_get_setting('header_1'),
    );
    $form['options']['layout']['header_page']['header_2'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Header Style 2',
        '#default_value' => theme_get_setting('header_2'),
    );
    $form['options']['layout']['header_page']['header_3'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Header Style 3',
        '#default_value' => theme_get_setting('header_3'),
    );
    $form['options']['layout']['header_page']['header_4'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Header Style 4',
        '#default_value' => theme_get_setting('header_4'),
    );
    $form['options']['layout']['header_page']['header_5'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Header Style 5',
        '#default_value' => theme_get_setting('header_5'),
    );

    // ------ Footer Settings ------
    $form['options']['layout']['footer_page'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Footer Page Settings</h3>',
    );
    
    $form['options']['layout']['footer_page']['footer_1'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Footer Style 1',
        '#default_value' => theme_get_setting('footer_1'),
    );
    $form['options']['layout']['footer_page']['footer_2'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Footer Style 2',
        '#default_value' => theme_get_setting('footer_2'),
    );
    $form['options']['layout']['footer_page']['footer_3'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Footer Style 3',
        '#default_value' => theme_get_setting('footer_3'),
    );
    $form['options']['layout']['footer_page']['footer_4'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Footer Style 4',
        '#default_value' => theme_get_setting('footer_4'),
    );
    $form['options']['layout']['footer_page']['footer_5'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Footer Style 5',
        '#default_value' => theme_get_setting('footer_5'),
    );
    $form['options']['layout']['footer_page']['footer_6'] = array(
        '#type' => 'textarea',
        '#title' => 'Page With Footer Style 6',
        '#default_value' => theme_get_setting('footer_6'),
    );

	// ----------- DESIGN -----------
    $form['options']['design'] = array(
        '#type' => 'fieldset',
        '#title' => 'Design',
    );

    // Layout Option
    $form['options']['design']['layout_style'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Layout Style</h3>',
    );
    
    $form['options']['design']['layout_style']['layout_option'] = array(
        '#type' => 'select',
        '#title' => 'Select a layout style:',
        '#default_value' => theme_get_setting('layout_option'),
        '#options' => array(
            'widescreen' => 'Widescreen (default)',
            'boxed' => 'Boxed',
        ),
    );

    
    // Header Option
    $form['options']['design']['header_style'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Header Style</h3>',
    );

    
    // Header Option
    $form['options']['design']['header_style']['header_option'] = array(
        '#type' => 'select',
        '#title' => 'Select a header style option:',
        '#default_value' => theme_get_setting('header_option'),
        '#options' => array(
            'header_1' => 'Header 1 (default)',
            'header_2' => 'Header 2',
            'header_3' => 'Header 3',
            'header_4' => 'Header 4',
        ),
    );
    
    // Footer Option
    $form['options']['design']['footer_style'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Footer Style</h3>',
    );
    
    // Footer Option
    $form['options']['design']['footer_style']['footer_option'] = array(
        '#type' => 'select',
        '#title' => 'Select a footer style option:',
        '#default_value' => theme_get_setting('footer_option'),
        '#options' => array(
            'footer_1' => 'Footer 1 (default)',
            'footer_2' => 'Footer 2',
            'footer_3' => 'Footer 3',
            'footer_4' => 'Footer 4',
            'footer_5' => 'Footer 5',
        ),
    );

    // Background
    $form['options']['design']['background'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Background layout</h3>',
    );
    
    // Background Type
    $form['options']['design']['background']['background_type'] = array(
        '#type' => 'select',
        '#title' => 'Background Type',
        '#default_value' => theme_get_setting('background_type'),
        '#options' => array(
            'color' => 'Background Color',
            'image' => 'Background Image (default)',
        ),
    );
    
    // Background Color
    $form['options']['design']['background']['background_color'] = array(
        '#type' => 'textfield',
        '#title' => 'Enter a background color:',
        '#default_value' => theme_get_setting('background_color'),
        '#states' => array (
          'visible' => array(
            'select[name = background_type]' => array('value' => 'color')
          )
        )
    );
    
    // Background Image
    $form['options']['design']['background']['background_image'] = array(
        '#type' => 'radios',
        '#title' => 'Select a background image:',
        '#default_value' => theme_get_setting('background_image'),
        '#options' => array(
            'item-1' => 'item',
            'item-2' => 'item',
            'item-3' => 'item',
            'item-4' => 'item',
            'item-5' => 'item',
            'item-6' => 'item',
            'item-7' => 'item',
            'item-8' => 'item',
            'item-9' => 'item',
            'item-10' => 'item',
            'item-11' => 'item',
            'item-12' => 'item',
        ),
        '#states' => array (
          'visible' => array(
            'select[name = background_type]' => array('value' => 'image')
          )
        )
    );

     //CSS
    $form['options']['design']['css'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">CSS</h3>',
    );

    // User CSS
    $form['options']['design']['css']['user_css'] = array(
        '#type' => 'textarea',
        '#title' => 'Add your own CSS',
        '#default_value' => theme_get_setting('user_css'),
    );

    //-----------LoGo Footer-------------
    $form['options']['setting_default'] = array(
        '#type'     => 'fieldset',
        '#title'    => t('Setting Footer'),
    );
    $form['options']['setting_default']['scroll_logo'] = array(
        '#type'    => 'fieldset',
		'#title' => '<div class="plus"></div><h3 class="options_heading">Image Logo Footer</h3>',
    );
    $form['options']['setting_default']['scroll_logo']['lg_checkbox'] = array(
        '#type'     => 'checkbox',
        '#title'    => 'Enable Image Logo Footer',
        '#default_value' => theme_get_setting('lg_checkbox'),

    );
    $form['options']['setting_default']['scroll_logo']['lg_wrapper'] = array(
        '#type'     => 'container',
        '#states'   => array(
            'visible'   => array(
                ':input[name=lg_checkbox]' => array('checked' => TRUE)
            )
        )
    );
    $form['options']['setting_default']['scroll_logo']['lg_wrapper']['logo_footer'] = array(
        '#type' => 'textfield',
        '#title'=> 'Image Menu',
        '#default_value' => $logo_footer,
    );
    $form['options']['setting_default']['scroll_logo']['lg_wrapper']['logo_footer_upload'] = array(
        '#type' => 'file',
        '#title' => 'Upload Logo Footer',
        '#description' => 'Upload a new Logo for Footer',
    );
	
    //enable & disable Readmore
    $form['options']['setting_default']['scroll_read'] = array(
        '#type'    => 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Enable or Disable text</h3>',
    );
    $form['options']['setting_default']['scroll_read']['r_checkbox'] = array(
        '#type'    => 'checkbox',
        '#title'   => 'Enable button readmore footer',
        '#default_value' => theme_get_setting('r_checkbox'),
    );
    $form['options']['setting_default']['scroll_read']['r_wrapper'] = array(
        '#type'     => 'container',
        '#states'   => array(
            'visible'   => array(
                ':input[name=r_checkbox]' => array('checked' => TRUE)
            )
        )
    );
    $form['options']['setting_default']['scroll_read']['r_wrapper']['read_more'] = array(
        '#type' => 'textfield',
        '#title'=> 'Url for button readmore',
        '#default_value' => theme_get_setting('read_more'),
    );
	
    //detail footer
    $form['options']['setting_default']['scroll_detail'] = array(
        '#type'    => 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Content for footer</h3>',
    );
    $form['options']['setting_default']['scroll_detail']['d_checkbox'] = array(
        '#type'    => 'checkbox',
        '#title'   => 'Enable detail footer',
        '#default_value' => theme_get_setting('d_checkbox'),
    );
    $form['options']['setting_default']['scroll_detail']['d_wrapper'] = array(
        '#type'     => 'container',
        '#states'   => array(
            'visible'   => array(
                ':input[name=d_checkbox]' => array('checked' => TRUE)
            )
        )
    );
    $form['options']['setting_default']['scroll_detail']['d_wrapper']['footer_detail'] = array(
        '#type' => 'textarea',
        '#title'=> 'Input content for footer',
        '#default_value' => theme_get_setting('footer_detail'),
    );



    // ----------- IMAGE MENU -----------
    $form['options']['custom_logo'] = array(
        '#type'     => 'fieldset',
        '#title'    => t('Setting Logo for versions'),
    );
    $form['options']['custom_logo']['imagemenu'] = array(
        '#type'    => 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Image Menu</h3>',
    );
    $form['options']['custom_logo']['imagemenu']['m_checkbox'] = array(
        '#type'     => 'checkbox',
        '#title'    => 'Enable Image Menu',
        '#default_value' => theme_get_setting('m_checkbox'),
    );
    $form['options']['custom_logo']['imagemenu']['m_wrapper'] = array(
        '#type'     => 'container',
        '#states'   => array(
            'visible'   => array(
                ':input[name=m_checkbox]' => array('checked' => TRUE)
            )
        )
    );
    $form['options']['custom_logo']['imagemenu']['m_wrapper']['image_menu'] = array(
        '#type' => 'textfield',
        '#title'=> 'Image Menu',
        '#default_value' => $image_menu,
    );
    $form['options']['custom_logo']['imagemenu']['m_wrapper']['image_menu_upload'] = array(
        '#type' => 'file',
        '#title' => 'Upload Image Menu ',
        '#description' => 'Upload a new image for Menu',
    );
	
	
	$form['options']['custom_logo']['use_logo_default'] = array(
        '#type'     => 'checkbox',
        '#title'    => 'Use only custom logo default (Use only a logo for all page)',
        '#default_value' => theme_get_setting('use_logo_default'),
    );
	//Logo Corporate
	$form['options']['custom_logo']['corporate'] = array(
        '#type'    => 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Logo Corporate Version</h3>',
    );
    $form['options']['custom_logo']['corporate']['logo_corporate'] = array(
        '#type' => 'textfield',
        '#title'=> 'Logo Corporate Version',
        '#default_value' => $logo_corporate,
    );
    $form['options']['custom_logo']['corporate']['logo_corporate_upload'] = array(
        '#type' => 'file',
        '#title' => 'Upload Logo Corporate Version',
        '#description' => 'Upload a new logo for Corporate Version',
    );
	
	//Logo Construction
	$form['options']['custom_logo']['construction'] = array(
        '#type'    => 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Logo Construction Version</h3>',
    );
    $form['options']['custom_logo']['construction']['logo_construction'] = array(
        '#type' => 'textfield',
        '#title'=> 'Logo Construction Version',
        '#default_value' => $logo_construction,
    );
    $form['options']['custom_logo']['construction']['logo_construction_upload'] = array(
        '#type' => 'file',
        '#title' => 'Upload Logo Construction Version',
        '#description' => 'Upload a new logo for Construction Version',
    );
	
	//Logo Interior
	$form['options']['custom_logo']['interior'] = array(
        '#type'    => 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Logo Interior Version</h3>',
    );
    $form['options']['custom_logo']['interior']['logo_interior'] = array(
        '#type' => 'textfield',
        '#title'=> 'Logo Interior Version',
        '#default_value' => $logo_interior,
    );
    $form['options']['custom_logo']['interior']['logo_interior_upload'] = array(
        '#type' => 'file',
        '#title' => 'Upload Logo Interior Version',
        '#description' => 'Upload a new logo for Interior Version',
    );
    
    // Logo Image for One Page
	$form['options']['custom_logo']['onepage'] = array(
        '#type'    => 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Logo Onepage Version</h3>',
    );
    $form['options']['custom_logo']['onepage']['logo_onepage'] = array(
        '#type' => 'textfield',
        '#title' => 'Path to custom logo onepage',
        '#default_value' => $logo_onepage,
        '#description' => 'The path logo image for Onepage.',
    );
	$form['options']['custom_logo']['onepage']['logo_onepage_upload'] = array(
        '#type' => 'file',
        '#title' => 'Upload Logo Image for Onepage',
        '#description' => 'Upload a new logo image for Onepage.',
    );
        

//-------------------Skill------------------------------------
    global $base_url;

    $theme_path = drupal_get_path('theme','customtheme');
    $form['options']['skin_settings'] = array(
        '#type'  	=> 'fieldset',
        '#title'  	=> 'Skin Options',
    );
    $form['options']['skin_settings']['design_skin'] = array(
        '#type' 	=> 'fieldset',
        '#title'   => '<div class="plus"></div><h3 class="options_heading">Skin Settings</h3>',
    );
    /* ================================================================================
    ================================= Skins ===========================================
    ==================================================================================*/
	$form['options']['skin_settings']['design_skin']['demo'] = array(
        '#type'          => 'select',
        '#default_value' => theme_get_setting('demo'),
        '#options'       => array(
            'default'        => t('Default'),
            'corporate'      => t('Corporate'),
            'construction'   => t('Construction'),
            'interior'     	 => t('Interior'),
        ),
        '#prefix'   =>  '<div class="formRow"><label>Choose Version</label>',
        '#suffix'   => '</div>',
        '#field_prefix' => '<div class="formRight">',
        '#field_suffix' => '</div>',
    );
	$form['options']['skin_settings']['design_skin']['skins'] = array(
        '#type'          => 'select',
        '#default_value' => theme_get_setting('skins'),
        '#options'       => array(
            'red'        => t('Red (Default)'),
            'green'      => t('Green'),
            'orange'     => t('Orange'),
            'yellow'     => t('Yellow'),
            'yellow_light'     => t('Yellow Light'),
            'blue'     	 => t('Blue'),
            'purple'     => t('Purple')
        ),
        '#prefix'   =>  '<div class="formRow"><label>Choose Color</label>',
        '#suffix'   => '</div>',
        '#field_prefix' => '<div class="formRight">',
        '#field_suffix' => '</div>',

    );
    $form['options']['skin_settings']['design_skin']['custom_skin'] = array(
        '#type' => 'container',
        '#states' => array(
            'visible' => array(
                ':input[name="skins"]' => array('value' => 'custom'),
            ),
        ),
    );
    $form['options']['skin_settings']['design_skin']['custom_skin']['skin_colorpicker'] = array(
        '#type'                 => 'textfield',
        '#default_value'        => theme_get_setting('skin_colorpicker'),
        '#attributes'           => array(
            'class'             =>  array('form-colorpicker')
        ),
        '#prefix'   =>  '<div class="formRow"><label>Custom skin with colorpicker</label>',
        '#suffix'   => '</div>',
        '#field_prefix' => '<div class="formRight">',
        '#field_suffix' => '</div>',
    );

    $form['#submit'][] = 'customtheme_settings_submit_corporate';
    $form['#submit'][] = 'customtheme_settings_submit_construction';
    $form['#submit'][] = 'customtheme_settings_submit_interior';
    $form['#submit'][] = 'customtheme_settings_submit_onepage';
    $form['#submit'][] = 'customtheme_settings_submit_imagemenu';
    $form['#submit'][] = 'customtheme_settings_submit_logo_footer';
}

function customtheme_settings_submit_corporate($form, &$form_state) {    
    // upload logo for Logo Corporate
    $previous = 'public://' . $form['options']['custom_logo']['corporate']['logo_corporate']['#default_value'];
    $file = file_save_upload('logo_corporate_upload');
    if ($file) {
        $parts = pathinfo($file->filename);
        $destination = 'public://' . $parts['basename'];
        $file->status = FILE_STATUS_PERMANENT;
        if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
            $_POST['logo_corporate'] = $form_state['values']['logo_corporate'] = $destination;
            if ($destination != $previous) {
                return;
            }
        }
    } else {
        // Avoid error when the form is submitted without specifying a new image
        $_POST['logo_corporate'] = $form_state['values']['logo_corporate'] = $previous;
    }
}
function customtheme_settings_submit_construction($form, &$form_state) {    
	// upload logo for Logo Construction
    $previous = 'public://' . $form['options']['custom_logo']['construction']['logo_construction']['#default_value'];
    $file = file_save_upload('logo_construction_upload');
    if ($file) {
        $parts = pathinfo($file->filename);
        $destination = 'public://' . $parts['basename'];
        $file->status = FILE_STATUS_PERMANENT;
        if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
            $_POST['logo_construction'] = $form_state['values']['logo_construction'] = $destination;
            if ($destination != $previous) {
                return;
            }
        }
    } else {
        // Avoid error when the form is submitted without specifying a new image
        $_POST['logo_construction'] = $form_state['values']['logo_construction'] = $previous;
    }
}
function customtheme_settings_submit_interior($form, &$form_state) {    
    // upload logo for Logo Interior
    $previous = 'public://' . $form['options']['custom_logo']['interior']['logo_interior']['#default_value'];
    $file = file_save_upload('logo_interior_upload');
    if ($file) {
        $parts = pathinfo($file->filename);
        $destination = 'public://' . $parts['basename'];
        $file->status = FILE_STATUS_PERMANENT;
        if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
            $_POST['logo_interior'] = $form_state['values']['logo_interior'] = $destination;
            if ($destination != $previous) {
                return;
            }
        }
    } else {
        // Avoid error when the form is submitted without specifying a new image
        $_POST['logo_interior'] = $form_state['values']['logo_interior'] = $previous;
    }
}
function customtheme_settings_submit_onepage($form, &$form_state) {    
    // upload logo for Logo Onepage
    $previous = 'public://' . $form['options']['custom_logo']['onepage']['logo_onepage']['#default_value'];
    $file = file_save_upload('logo_onepage_upload');
    if ($file) {
        $parts = pathinfo($file->filename);
        $destination = 'public://' . $parts['basename'];
        $file->status = FILE_STATUS_PERMANENT;
        if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
            $_POST['logo_onepage'] = $form_state['values']['logo_onepage'] = $destination;
            if ($destination != $previous) {
                return;
            }
        }
    } else {
        // Avoid error when the form is submitted without specifying a new image
        $_POST['logo_onepage'] = $form_state['values']['logo_onepage'] = $previous;
    }
}
function customtheme_settings_submit_imagemenu($form, &$form_state) {    
    //upload Image for menu
    $previous_image_menu = 'public://' . $form['options']['custom_logo']['imagemenu']['m_wrapper']['image_menu']['#default_value'];
    $file = file_save_upload('image_menu_upload');
    if ($file) {
        $parts = pathinfo($file->filename);
        $destination = 'public://' . $parts['basename'];
        $file->status = FILE_STATUS_PERMANENT;
        if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
            $_POST['image_menu'] = $form_state['values']['image_menu'] = $destination;
            if ($destination != $previous_image_menu) {
                return;
            }
        }
    } else {
        // Avoid error when the form is submitted without specifying a new image
        $_POST['image_menu'] = $form_state['values']['image_menu'] = $previous_image_menu;
    }
	
    //upload logo for footer
    $previous_logo = 'public://' . $form['options']['setting_default']['scroll_logo']['lg_wrapper']['logo_footer']['#default_value'];
    $file = file_save_upload('logo_footer_upload');
    if ($file) {
        $parts = pathinfo($file->filename);
        $destination = 'public://' . $parts['basename'];
        $file->status = FILE_STATUS_PERMANENT;
        if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
            $_POST['logo_footer'] = $form_state['values']['logo_footer'] = $destination;
            if ($destination != $previous_logo) {
                return;
            }
        }
    } else {
        // Avoid error when the form is submitted without specifying a new image
        $_POST['logo_footer'] = $form_state['values']['logo_footer'] = $previous_logo;
    }
}
function customtheme_settings_submit_logo_footer($form, &$form_state) {    
    //upload logo for footer
    $previous_logo = 'public://' . $form['options']['setting_default']['scroll_logo']['lg_wrapper']['logo_footer']['#default_value'];
    $file = file_save_upload('logo_footer_upload');
    if ($file) {
        $parts = pathinfo($file->filename);
        $destination = 'public://' . $parts['basename'];
        $file->status = FILE_STATUS_PERMANENT;
        if (file_copy($file, $destination, FILE_EXISTS_REPLACE)) {
            $_POST['logo_footer'] = $form_state['values']['logo_footer'] = $destination;
            if ($destination != $previous_logo) {
                return;
            }
        }
    } else {
        // Avoid error when the form is submitted without specifying a new image
        $_POST['logo_footer'] = $form_state['values']['logo_footer'] = $previous_logo;
    }
}

