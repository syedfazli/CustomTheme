<?php

/**
 * Define $root global variable.
 */
global $theme_root;
global $base_url;
$theme_root = base_path() . path_to_theme();


/**
 * Apply alternate UL class to Drupal tabs.
 */
function customtheme_menu_local_tasks(&$variables) {
    $output = '';

    if (!empty($variables['primary'])) {
        $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
        $variables['primary']['#prefix'] .= '<ul class="nav nav-tabs">';
        $variables['primary']['#suffix'] = '</ul>';
        $output .= drupal_render($variables['primary']);
    }
    if (!empty($variables['secondary'])) {
        $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
        $variables['secondary']['#prefix'] .= '<ul class="nav nav-tabs">';
        $variables['secondary']['#suffix'] = '</ul>';
        $output .= drupal_render($variables['secondary']);
    }

    return $output;
}

/**
 * Helper function to test for panel page config.
 */
function _is_panel_page() {
    $page = &drupal_static(__FUNCTION__);
    if (function_exists("page_manager_get_current_page")) {
        if (!isset($page)) {
            $page = page_manager_get_current_page();
        }
    }
    return $page ? $page : FALSE;
}



/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */

function customtheme_preprocess_page(&$vars, $hook) {
    drupal_add_js(drupal_get_path('theme', 'customtheme') .'/js/html5shiv.js');
    if (isset($vars['node'])) {
        $suggest = "page__{$vars['node']->type}";
        $vars['theme_hook_suggestions'][] = $suggest;
    }

    $status = drupal_get_http_header("status");
    if ($status == "404 Not Found") {
        $vars['theme_hook_suggestions'][] = 'page__404';
    }

    if (arg(0) == 'taxonomy' && arg(1) == 'term') {
        $term = taxonomy_term_load(arg(2));
        $vars['theme_hook_suggestions'][] = 'page--taxonomy--' . $term->vid;
    }

    // If this is a panel page, add template suggestions.
    if($panel_page = _is_panel_page()) {
        // Add a generic suggestion for all panel pages.
        $vars['theme_hook_suggestions'][] = 'page__panel';
        // Add the panel page machine name to the template suggestions.
        $vars['theme_hook_suggestions'][] = 'page__' . $panel_page['name'];
        // Add a body class for good measure.
        $body_classes[] = 'page-panel';
    }
}

function customtheme_preprocess_region(&$variables) {
    // Create the $content variable that templates expect.
    $variables['content'] = $variables['elements']['#children'];
    $variables['region'] = $variables['elements']['#region'];

    $variables['classes_array'][] = drupal_region_class($variables['region']);
    $variables['theme_hook_suggestions'][] = 'region__' . $variables['region'];
}


/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
function customtheme_process_block(&$variables, $hook) {
    // Drupal 7 should use a $title variable instead of $block->subject.
    $variables['title'] = $variables['block']->subject;
}

/* main ul */

function customtheme_menu_tree__main_menu($variables) {
    return '<ul class="horizontal_list main_menu clearfix">' . $variables['tree'] . '</ul>';
}

/* main li */

function customtheme_menu_link__main_menu(array $variables) {
    $element = $variables['element'];

    if (empty($element['#localized_options'])) {
        $element['#localized_options'] = array();
    }

    //Not sure if this is the cleanest method, but it should allow us to follow
    //the active-trail across menu items, based on path.
    //Get the start of the current path (e.g. admin/build/modules would be admin)
    $base_path = preg_replace('/^([A-Za-z0-9_-]+)\/(.*)/', '${1}', drupal_get_path_alias($_GET['q']));
    //Get the current link we're looking at
    $this_link = drupal_get_path_alias($element['#href']);

    $sub_menu = '';
    if ($element['#below']) {
        if($element['#title'] == 'Shop'){
            foreach ($element['#below'] as $key => $val) {
                if (is_numeric($key)) {
                    $element['#below'][$key]['#theme'] = 'menu_link__main_menu_shop';
                }
            }
            $element['#below']['#theme_wrappers'][0] = 'menu_tree__main_menu_shop';
            $sub_menu = drupal_render($element['#below']);

        }else{
            foreach ($element['#below'] as $key => $val) {
                if (is_numeric($key)) {
                    $element['#below'][$key]['#theme'] = 'menu_link__main_menu_inner';
                }
            }
            $element['#below']['#theme_wrappers'][0] = 'menu_tree__main_menu_inner';
            $sub_menu = drupal_render($element['#below']);
        }

    }
    if ($sub_menu != '') {
        //Give this menu item a unique id
        $element['#localized_options']['attributes']['class'][] = 'tr_delay_hover color_light tt_uppercase strong';
    } else {
        $element['#localized_options']['attributes']['class'][] = 'tr_delay_hover color_light tt_uppercase strong';
    }
    //shop
	if (strpos(url($element['#href']), 'nolink')) {
		$output = '<a href="javascript:void(0)" class="tr_delay_hover color_light tt_uppercase strong">' . $element['#title'] . '</a>';
	} else {
		$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	}

    $addClass = 'relative f_xs_none m_xs_bottom_5';

    return '<li class="' . $addClass . '">' . $output . $sub_menu . "</li>\n";
}

/* main ul */

function customtheme_menu_tree__main_menu_inner($variables) {
    return '<div class="sub_menu_wrap top_arrow d_xs_none type_2 tr_all_hover clearfix r_corners"><ul class="sub_menu">' . $variables['tree'] . '</ul></div>';
}

function customtheme_menu_tree__main_menu_shop($variables) {
    $m_enable = theme_get_setting('m_checkbox');
    $theme_root = base_path() . path_to_theme();

    if($m_enable == 1){
        $image_mega_menu = file_create_url(theme_get_setting('image_menu'));
        $image_mega_menu_display = '<li><img width="250px" height="275px" src='.$image_mega_menu.' class="d_sm_none f_right m_bottom_10" alt="" ></li>';
        return '<div class="sub_menu_wrap top_arrow d_xs_none tr_all_hover clearfix r_corners w_xs_auto"><ul class="mega_menu">' . $variables['tree'] . $image_mega_menu_display . '</ul></div>';
    }else{
        return '<div class="sub_menu_wrap top_arrow d_xs_none tr_all_hover clearfix r_corners w_xs_auto"><ul class="mega_menu">' . $variables['tree'] . '</ul></div>';
    }

}
function customtheme_menu_link__main_menu_shop(array $variables) {
    $element = $variables['element'];

    if (empty($element['#localized_options'])) {
        $element['#localized_options'] = array();
    }

    //Not sure if this is the cleanest method, but it should allow us to follow
    //the active-trail across menu items, based on path.
    //Get the start of the current path (e.g. admin/build/modules would be admin)
    $base_path = preg_replace('/^([A-Za-z0-9_-]+)\/(.*)/', '${1}', drupal_get_path_alias($_GET['q']));

    //Get the current link we're looking at
    $this_link = drupal_get_path_alias($element['#href']);


    $sub_menu = '';
    if ($element['#below']) {
        foreach ($element['#below'] as $key => $val) {
            if (is_numeric($key)) {
                $element['#below'][$key]['#theme'] = 'menu_link__main_menu_inner';
            }
        }
        $element['#below']['#theme_wrappers'][0] = 'menu_tree__main_menu_shop_inner';
        $sub_menu = drupal_render($element['#below']);
    }
    if ($sub_menu != '') {
        //Give this menu item a unique id
        $element['#localized_options']['attributes']['class'][] = 'color_dark m_left_20 m_bottom_5 m_top_5 d_inline_b';
    } else {
        $element['#localized_options']['attributes']['class'][] = 'color_dark m_left_20 m_bottom_5 m_top_5 d_inline_b';
    }
    if (strpos(url($element['#href']), 'nolink')) {
		$output = '<a href="javascript:void(0)" class="color_dark m_left_20 m_bottom_5 m_top_5 d_inline_b">' . $element['#title'] . '</a>';
	} else {
		$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	}

    //return '<li class="' . $addClass . '"' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
    return '<li class = "f_left f_xs_none">' . $output . $sub_menu . "</li>\n";
}

/* main li */
function customtheme_menu_tree__main_menu_shop_inner($variables){
    return '<ul class="sub_menu">' . $variables['tree'] . '</ul>';
}
function customtheme_menu_link__main_menu_inner(array $variables) {
    $element = $variables['element'];

    if (empty($element['#localized_options'])) {
        $element['#localized_options'] = array();
    }

    //Not sure if this is the cleanest method, but it should allow us to follow
    //the active-trail across menu items, based on path.
    //Get the start of the current path (e.g. admin/build/modules would be admin)
    $base_path = preg_replace('/^([A-Za-z0-9_-]+)\/(.*)/', '${1}', drupal_get_path_alias($_GET['q']));

    //Get the current link we're looking at
    $this_link = drupal_get_path_alias($element['#href']);

    $sub_menu = '';
    if ($element['#below']) {
        foreach ($element['#below'] as $key => $val) {
            if (is_numeric($key)) {
                $element['#below'][$key]['#theme'] = 'menu_link__main_menu_inner';
            }
        }
        $element['#below']['#theme_wrappers'][0] = 'menu_tree__main_menu_inner';
        $sub_menu = drupal_render($element['#below']);
    }
    if ($sub_menu != '') {
        //Give this menu item a unique id
        $element['#localized_options']['attributes']['class'][] = 'color_dark tr_delay_hover';
    } else {
        $element['#localized_options']['attributes']['class'][] = 'color_dark tr_delay_hover';
    }
    if (strpos(url($element['#href']), 'nolink')) {
		$output = '<a href="javascript:void(0)" class="color_dark tr_delay_hover">' . $element['#title'] . '</a>';
	} else {
		$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	}

    return '<li>' . $output . $sub_menu . "</li>\n";
}
/*taxonomy menu*/
function customtheme_menu_tree__menu_taxonomy_menu($variables) {
    return '<div class="widget_content"><ul class="categories_list">' . $variables['tree'] . '</ul></div>';
}
function customtheme_menu_link__menu_taxonomy_menu(array $variables){
    $element = $variables['element'];

    if (empty($element['#localized_options'])) {
        $element['#localized_options'] = array();
    }

    //Not sure if this is the cleanest method, but it should allow us to follow
    //the active-trail across menu items, based on path.
    //Get the start of the current path (e.g. admin/build/modules would be admin)
    $base_path = preg_replace('/^([A-Za-z0-9_-]+)\/(.*)/', '${1}', drupal_get_path_alias($_GET['q']));

    //Get the current link we're looking at
    $this_link = drupal_get_path_alias($element['#href']);

    $sub_menu = '';
    if ($element['#below']) {
        foreach ($element['#below'] as $key => $val) {
            if (is_numeric($key)) {
                $element['#below'][$key]['#theme'] = 'menu_link__menu_taxonomy_menu_inner';
            }
        }
        $element['#below']['#theme_wrappers'][0] = 'menu_tree__menu_taxonomy_menu_inner';
        $sub_menu = drupal_render($element['#below']);
    }

    if ($sub_menu != '') {
        //Give this menu item a unique id
        $element['#localized_options']['attributes']['class'][] = 's-parent f_size_large d_block relative color_dark';
        $customclass = 's-parent f_size_large d_block relative color_dark';
    } else {
        $element['#localized_options']['attributes']['class'][] = 'p-parent f_size_large d_block relative color_dark';
        $customclass = 'p-parent f_size_large d_block relative color_dark';
    }

    if (strpos(url($element['#href']), 'nolink')) {
		$output = '<a href="javascript:void(0)" class="'.$customclass.'">' . $element['#title'] . '</a>';
	} else {
		$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	}

    $addClass = '';
    return '<li class="' . $addClass . '">' . $output . $sub_menu . "</li>\n";
}
function customtheme_menu_tree__menu_taxonomy_menu_inner($variables) {
    return '<ul class = "d_none">' . $variables['tree'] . '</ul>';
}

function customtheme_menu_link__menu_taxonomy_menu_inner(array $variables){
    $element = $variables['element'];

    if (empty($element['#localized_options'])) {
        $element['#localized_options'] = array();
    }

    //Not sure if this is the cleanest method, but it should allow us to follow
    //the active-trail across menu items, based on path.
    //Get the start of the current path (e.g. admin/build/modules would be admin)
    $base_path = preg_replace('/^([A-Za-z0-9_-]+)\/(.*)/', '${1}', drupal_get_path_alias($_GET['q']));

    //Get the current link we're looking at
    $this_link = drupal_get_path_alias($element['#href']);

    $sub_menu = '';
    if ($element['#below']) {
        foreach ($element['#below'] as $key => $val) {
            if (is_numeric($key)) {
                $element['#below'][$key]['#theme'] = 'menu_link__menu_taxonomy_menu_inner';
            }
        }
        $element['#below']['#theme_wrappers'][0] = 'menu_tree__menu_taxonomy_menu_inner';
        $sub_menu = drupal_render($element['#below']);
    }
    if ($sub_menu != '') {
        //Give this menu item a unique id
        $element['#localized_options']['attributes']['class'][] = 's-parent f_size_large d_block relative color_dark';
        $class = 's-parent f_size_large d_block relative color_dark';
    } else {
        $element['#localized_options']['attributes']['class'][] = 'p-parent f_size_large d_block relative color_dark';
        $class = 'p-parent f_size_large d_block relative color_dark';
    }
    if (strpos(url($element['#href']), 'nolink')) {
		$output = '<a href="javascript:void(0)" class="nolink">' . $element['#title'] . '</a>';
	} else {
		$output = l($element['#title'], $element['#href'], $element['#localized_options']);
	}

    return '<li>' . $output . $sub_menu . "</li>\n";
}

function customtheme_form_contact_site_form_alter(&$form, $form_state) {


    $form['name'] = array('#type' => 'textfield',
        '#title' => t(''),
        '#maxlength' => 255,
        '#required' => TRUE,
        '#placeholder' => 'Your Name',
        '#weight' => 1,
        '#class' => 'f_size_medium m_bottom_10 r_corners full_width',
    );
    $form['mail'] = array('#type' => 'textfield',
        '#title' => t(''),
        '#maxlength' => 255,
        '#required' => TRUE,
        '#placeholder' => t('Email'),
        '#weight' => 2,
    );
    $form['subject'] = array('#type' => 'textfield',
        '#title' => t(''),
        '#maxlength' => 255,
        '#required' => FALSE,
        '#placeholder' => t('Subject'),
        '#weight' => 3,
    );
    $form['message'] = array(
        '#type' => 'textarea',
        '#title' => t(''),
        '#placeholder' => t('Message'),
        '#weight' => 5,
    );
    $form['copy']['#access'] = FALSE;
    $form['submit'] = array(
        '#type' => 'submit',
        '#value' => t('Send'),
        '#weight' => 6,
    );
}

function customtheme_form_alter(&$form, &$form_state, $form_id) {
    //Newletter
    if(stristr($form_id,'simplenews_block_form')){
        $form['mail']['#attributes']['placeholder'] = t('Type your e-mail');
        $form['submit']['#attributes']['class'][] = 'button_type_8 r_corners bg_scheme_color color_light tr_all_hover';
    }

    if($form_id == 'newsletter_subscribe_form'){
        $form['email']['#attributes']['placeholder'] = t('Your email address');
       unset($form['email']['#default_value']);
    }
    if($form_id == 'newsletter_manage_subscriptions_form'){
        $form['submit']['#attributes']['class'][] = 'form-submit ajax-processed m-20 button_type_8 r_corners bg_scheme_color color_light tr_all_hover';
        $form['#attributes']['class'][] = 'm-newletter';
    }
    //login
    if(stristr($form_id,'user')){
        $form['actions']['submit']['#attributes']['class'][] = 'button_type_3 color_light bg_scheme_color  r_corners tr_delay_hover box_s_none form-submit';

    }

    //Search Advance
    if($form_id == 'search_form'){
        $form['#attributes']['class'][] = 'c-search';
        $form['basic']['submit']['#attributes']['class'][] = 'button_type_3 color_light bg_scheme_color  r_corners tr_delay_hover box_s_none form-submit';
        $form['basic']['keys']['#attributes']['class'][] = 'locality commerce-stripe-locality r_corners form-text required';
        $form['advanced']['submit']['#attributes']['class'][] = 'button_type_3 color_light bg_scheme_color  r_corners tr_delay_hover box_s_none form-submit';
    }

    if($form_id == 'commerce_checkout_form_checkout'){
        //checkout
        $form['cart_contents']['cart_contents_view']['#prefix'] = '<div class = "table_type_4  full_width r_corners wraper shadow t_align_l t_xs_align_c m_bottom_30">';
        $form['cart_contents']['cart_contents_view']['#suffix'] = '</div>';
        $form['customer_profile_billing']['#attributes']['class'][] = 'bs_inner_offsets bg_light_color_3 shadow r_corners m_bottom_45 m-top-50';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']['#prefix'] = '<div class = "m_bottom_15">';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']['#suffix'] = '</div>';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']['#attributes']['class'][] = 'select_title type_2 r_corners relative color_dark mw_0';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']['name_line']['#attributes']['class'][] = 'r_corners full_width';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']['name_line']['#prefix'] = '<div class = "m_bottom_15">';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']['name_line']['#suffix'] = '<//div>';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['street_block']['thoroughfare']['#prefix'] = '<div class = "m_bottom_15">';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['street_block']['thoroughfare']['#suffix'] = '</div>';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['street_block']['thoroughfare']['#attributes']['class'][] = 'r_corners full_width';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['street_block']['premise']['#prefix'] = '<div class = "m_bottom_15">';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['street_block']['premise']['#suffix'] = '</div>';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['street_block']['premise']['#attributes']['class'][] = 'r_corners full_width';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['locality_block']['locality']['#attributes']['class'][] = 'r_corners full_width';
        $form['customer_profile_billing']['caommerce_customer_address']['und'][0]['locality_block']['#prefix'] = '<div class = "m_bottom_15">';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['locality_block']['#suffix'] = '</div>';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['locality_block']['postal_code']['#attributes']['class'][] = 'r_corners full_width';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['locality_block']['dependent_locality']['#attributes']['class'][] = 'r_corners full_width';
        $form['customer_profile_billing']['commerce_customer_address']['und'][0]['locality_block']['administrative_area']['#attributes']['class'][] = 'select_title type_2 r_corners relative color_dark mw_0';
        $form['buttons']['continue']['#attributes']['class'][] = 'button_type_6 bg_scheme_color f_size_large r_corners tr_all_hover color_light m_bottom_20';
        $form['buttons']['cancel']['#attributes']['class'][] = 'button_type_6 bg_scheme_color f_size_large r_corners tr_all_hover color_light m_bottom_20';
    }
    if($form_id == 'views_form_commerce_cart_form_default'){
        //Cart

        $form['output']['#prefix'] = '<div class = "table_type_4 full_width r_corners wraper shadow t_align_l t_xs_align_c m_bottom_30">';
        $form['output']['#suffix'] = '</div>';
        $form['actions']['submit']['#attributes']['class'][] = 'button_type_6 bg_scheme_color f_size_large r_corners tr_all_hover color_light m_bottom_20';
        $form['actions']['submit']['#prefix'] = '<div class = "c-submit">';
        $form['actions']['submit']['#suffix'] = '</div>';
        $form['actions']['checkout']['#prefix'] = '<div class = "c-checkout">';
        $form['actions']['checkout']['#suffix'] = '</div>';
        $form['actions']['checkout']['#attributes']['class'][] = 'button_type_6 bg_scheme_color f_size_large r_corners tr_all_hover color_light m_bottom_20';
    }
    if($form_id == 'commerce_checkout_form_review'){

        $form['checkout_review']['#prefix'] = '<div class = "table_type_4 full_width r_corners wraper shadow t_align_l t_xs_align_c m_bottom_30">';
        $form['checkout_review']['#suffix'] = '</div>';
        $form['buttons']['continue']['#prefix'] = '<div class = "r-continue">';
        $form['buttons']['continue']['#suffix'] = '</div>';
        $form['buttons']['back']['#prefix'] = '<div class = "r-back">';
        $form['buttons']['back']['#suffix'] = '<div>';
        $form['buttons']['continue']['#attributes']['class'][] = 'button_type_6 bg_scheme_color f_size_large r_corners tr_all_hover color_light m_bottom_20';
        $form['buttons']['back']['#attributes']['class'][] = 'button_type_6 bg_scheme_color f_size_large r_corners tr_all_hover color_light m_bottom_20';
        //kpr($form);
    }
    if ($form_id == 'search_block_form') {
        $form['#attributes']['class'][] = 'd_inline_middle full_width';
        $form['#attributes']['role'] = 'search';
        $form['search_block_form']['#default_value'] = t('Type text and hit enter'); // Set a default value for the textfield
        $form['search_block_form']['#attributes']['class'][] = 'f_size_large';

        // Add extra attributes to the text box
        $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Type text and hit enter';}";
        $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Type text and hit enter') {this.value = '';}";
        // Prevent user from searching the default text
        $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Type text and hit enter'){ alert('Please enter a search'); return false; }";

        // Alternative (HTML5) placeholder attribute instead of using the javascript
        $form['search_block_form']['#attributes']['placeholder'] = t('Type text and hit enter');
    }
    if($form_id == 'comment_node_blog_form'){
        //Add class for comment node blog

        $form['actions']['submit']['#prefix'] = '<div class = "f-save">';
        $form['actions']['submit']['#suffix'] = '</div>';
        $form['actions']['preview']['#prefix']	= '<div class = "f-preview">';
        $form['actions']['preview']['#suffix']	= '</div>';
        $form['actions']['submit']['#attributes']['class'][] = 'r_corners button_type_4 bg_light_color_2 mw_0 color_dark tr_all_hover';
        $form['actions']['preview']['#attributes']['class'][] = 'r_corners button_type_4 bg_light_color_2 mw_0 color_dark tr_all_hover';
        $form['#attributes']['class'][] = 'bs_inner_offsets full_width bg_light_color_3 r_corners shadow m_xs_bottom_30';
        $form['subject']['#prefix'] = '<div class = "m_bottom_15">';
        $form['subject']['#suffix'] = '</div>';
        $form['subject']['#attributes']['class'][] = 'r_corners full_width';
        $form['comment_body']['#prefix'] = '<div class = "m_bottom_15">';
        $form['comment_body']['#suffix'] = '</div>';
        $form['field_website']['und']['#prefix'] = '<div class = "f-website">';
        $form['field_website']['und']['#suffix'] = "</div>";

    }
    if($form_id == 'comment_node_product_display_form'){

        hide($form['subject']);
        $form['actions']['submit']['#prefix'] = '<div class="p-save">';
        $form['actions']['submit']['#suffix'] = '</div>';
        $form['actions']['submit']['#attributes']['class'][] = 'r_corners button_type_4 tr_all_hover mw_0 color_dark bg_light_color_2';
        $form['actions']['preview']['#prefix'] = '<div class="p-preview">';
        $form['actions']['preview']['#suffix'] = '</div>';
        $form['actions']['preview']['#attributes']['class'][] = 'r_corners button_type_4 tr_all_hover mw_0 color_dark bg_light_color_2';
    }
    if(stristr($form_id,'commerce_cart_add_to_cart_form')){

        //Add class submit cart
        $form['quantity']['#attributes']['class'][''] = 'f-left';
        $form['quantity']['#title'] = t('Quantity &nbsp;&nbsp;:&nbsp;');
        $form['quantity']['#prefix'] = '<div class="p-quantity m_bottom_20">';
        $form['quantity']['#suffix'] = '</div>';
        $form['submit']['#attributes']['class'][''] = 'button_type_4 bg_scheme_color r_corners tr_all_hover color_light mw_0 m_sm_bottom_0 d_sm_inline_middle';
        $form['submit']['#attributes']['value'][''] = t('Add to Cart');
    }




    if(substr($form_id, 0, 28) == 'uc_product_add_to_cart_form_') {
        $form['qty'] = array(
            '#type' => 'textfield',
            '#type' => 'textfield',
            '#title' => t(''),
            '#default_value' => '1',
        );
        $form['qty']['#attributes']['class'][] = 'form-control';
    }
    if ($form_id == 'contact_site_form') {
        $form['#attributes']['class'][] = 'mini';
        $form['subject']['#attributes']['class'][] = 'f_size_medium m_bottom_10 r_corners full_width';
        $form['name']['#attributes']['class'][] = 'f_size_medium m_bottom_10 r_corners full_width';
        $form['mail']['#attributes']['class'][] = 'f_size_medium m_bottom_10 r_corners full_width';
        $form['message']['#attributes']['class'][] = 'f_size_medium m_bottom_10 r_corners full_width';
        $form['form-submit']['#attributes']['class'][] = 'button_type_4 r_corners mw_0 tr_all_hover color_dark bg_light_color_2 m-top-10';
    }
    
}

/**
 * Define breadcrumb in theme templates.
 */
function customtheme_breadcrumb($variables) {
    $breadcrumb = $variables['breadcrumb'];

    if (!empty($breadcrumb)) {
        // Provide a navigational heading to give context for breadcrumb links to
        // screen-reader users. Make the heading invisible with .element-invisible.
        $crumbs = '<ul class="horizontal_list clearfix bc_list f_size_medium">';
        $array_size = count($breadcrumb);
        if ($array_size > 1) {
            $array_size = $array_size - 1;
        }
        $i = 0;
        while ($i < $array_size) {
            $crumbs .= '<li class="m_right_10 current">';
            $crumbs .= $breadcrumb[$i] . '<i class="fa fa-angle-right d_inline_middle m_left_10"></i>';
            $crumbs .= '</li>';
            $i++;
        }
        $crumbs .= '<li>'.drupal_get_title() . '</li></ul>';
        return $crumbs;
    }
}

function customtheme_format_comma_field($field_category, $node, $limit = NULL) {

    if (module_exists('i18n_taxonomy')) {
        $language = i18n_language();
    }

    $category_arr = array();
    $category = '';
    $field = field_get_items('node', $node, $field_category);

    if (!empty($field)) {
        foreach ($field as $item) {
            $term = taxonomy_term_load($item['tid']);


            if ($term) {
                if (module_exists('i18n_taxonomy')) {
                    $term_name = i18n_taxonomy_term_name($term, $language->language);

                    // $term_desc = tagclouds_i18n_taxonomy_term_description($term, $language->language);
                } else {
                    $term_name = $term->name;
                    //$term_desc = $term->description;
                }

                $category_arr[] = l($term_name, 'taxonomy/term/' . $item['tid']);
            }

            if ($limit) {
                if (count($category_arr) == $limit) {
                    $category = implode(', ', $category_arr);
                    return $category;
                }
            }
        }
    }
    $category = implode(', ', $category_arr);

    return $category;
}
//Pagination
function customtheme_pagination($node, $mode = 'n') {
    if (!function_exists('prev_next_nid')) {
        return NULL;
    }

    if(isset($node->nid)) {
        switch ($mode) {
            case 'p':
                $n_nid = prev_next_nid($node->nid, 'prev');
                $link_text = "Previous post";
                break;

            case 'n':
                $n_nid = prev_next_nid($node->nid, 'next');
                $link_text = "Next post";
                break;

            default:
                return NULL;
        }

        if ($n_nid) {
            $n_node = '';
            $n_node = node_load($n_nid);

            switch ($n_node->type) {
                case 'art_portfolio':
                    $id = $n_node->nid;
                    return $id;

                case 'blog':
                    $id = $n_node->nid;
                    return $id;

                case 'our_team':
                    $id = $n_node->nid;
                    return $id;

                case 'our_services':
                    $id = $n_node->nid;
                    return $id;

                case 'testimonial':
                    $id = $n_node->nid;
                    return $id;

                case 'article':
                    $html = l($link_text, 'node/' . $n_node->nid);
                    return $html;
            }
        }
    }
}

/**
 * Overrides theme_item_list().
 */
function customtheme_item_list($vars) {
    if (isset($vars['attributes']['class']) && is_array($vars['attributes']['class']) && in_array('pager', $vars['attributes']['class'])) {
        foreach ($vars['items'] as $i => &$item) {
            if (in_array('pager-current', $item['class'])) {
                $item['data'] = '<a class="scheme_color" href="javascript: void(0);"><span>' . $item['data'] . '</span></a>';
            } elseif (in_array('pager-item', $item['class'])) {
                $item['class'] = array('page-numbers');
                $item['data'] = $item['data'];

            } elseif (in_array('pager-next', $item['class'])) {
                $data = explode(' ',$item['data']);
                $data_display = explode('>',$data[1]);
                $item['class'] = array('next page-numbers');
                $item['data'] = '<a role="button" '.$data_display[0].' class="f_size_large button_type_10 color_dark d_inline_middle bg_cs_hover bg_light_color_1 t_align_c tr_delay_hover r_corners box_s_none"><i class="fa fa-angle-right"></i></a>';

            } elseif (in_array('pager-last', $item['class'])) {
                $item['class'] = array('page-numbers');
                $item['data'] = '<a role="button" '.$data_display[0].' class="f_size_large button_type_10 color_dark d_inline_middle bg_cs_hover bg_light_color_1 t_align_c tr_delay_hover r_corners box_s_none"><i class="fa fa-angle-double-right"></i></a>';;;
            } elseif (in_array('pager-first', $item['class'])) {
                $data = explode(' ',$item['data']);
                $data_display = explode('>',$data[1]);
                $item['class'] = array('page-numbers first');
                $item['data'] =  '<a role="button" '.$data_display[0].' class="f_size_large button_type_10 color_dark d_inline_middle bg_cs_hover bg_light_color_1 t_align_c tr_delay_hover r_corners box_s_none"><i class="fa fa-angle-double-left"></i></a>';;
            } elseif (in_array('pager-previous', $item['class'])) {
                $data = explode(' ',$item['data']);
                $data_display = explode('>',$data[1]);
                $item['class'] = array('prev page-numbers');
                $item['data'] =  '<a role="button" '.$data_display[0].' class="f_size_large button_type_10 color_dark d_inline_middle bg_cs_hover bg_light_color_1 t_align_c tr_delay_hover r_corners box_s_none"><i class="fa fa-angle-left"></i></a>';
            } elseif (in_array('pager-ellipsis', $item['class'])) {
                $item['class'] = array('disabled');
                $item['data'] = $item['data'];
            }
        }
        return '<div class = "row clearfix m_xs_bottom_30"><div class="custom-pagination">' . theme_item_list($vars) . '</div></div>';
    }
    return theme_item_list($vars);
}

/**
 * Overrides theme_pager_link().
 */
function customtheme_pager_link($variables) {
    $text = $variables['text'];
    $page_new = $variables['page_new'];
    $element = $variables['element'];
    $parameters = $variables['parameters'];
    $attributes = $variables['attributes'];

    $page = isset($_GET['page']) ? $_GET['page'] : '';
    if ($new_page = implode(',', pager_load_array($page_new[$element], $element, explode(',', $page)))) {
        $parameters['page'] = $new_page;
    }

    $query = array();
    if (count($parameters)) {
        $query = drupal_get_query_parameters($parameters, array());
    }
    if ($query_pager = pager_get_query_parameters()) {
        $query = array_merge($query, $query_pager);
    }

    // Set each pager link title
    if (!isset($attributes['title'])) {
        static $titles = NULL;
        if (!isset($titles)) {
            $titles = array(
                t('Â«') => t('Go to first page'),
                t('â€¹') => t('Go to previous page'),
                t('â€º') => t('Go to next page'),
                t('Â»') => t('Go to last page'),
            );
        }
        if (isset($titles[$text])) {
            $attributes['title'] = $titles[$text];
        } elseif (is_numeric($text)) {
            $attributes['title'] = t('Go to page @number', array('@number' => $text));
        }
    }

    // @todo l() cannot be used here, since it adds an 'active' class based on the
    //   path only (which is always the current path for pager links). Apparently,
    //   none of the pager links is active at any time - but it should still be
    //   possible to use l() here.
    // @see http://drupal.org/node/1410574
    $attributes['href'] = url($_GET['q'], array('query' => $query));
    return '<a' . drupal_attributes($attributes) . '><span>' . check_plain($text) . '</span></a>';
}

function customtheme_user_css() {
    echo "<!-- User defined CSS -->";
    echo "<style type='text/css'>";
    echo theme_get_setting('user_css');
    echo "</style>";
    echo "<!-- End user defined CSS -->";
}

function customtheme_panels_default_style_render_region($vars) {
    $output = '';
    $output .= implode('', $vars['panes']);
    return $output;
}

function customtheme_comment_view_alter(&$build) {
    // Remove the <a id="xxx"></a> links from the comment which are solved
    $build['#prefix'] = preg_replace("/<\\/?a(\\s+.*|>)/", "", $build['#prefix']);
}
