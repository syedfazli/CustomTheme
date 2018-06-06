<?php
global $base_url;

$single_image = ' ';
if (!empty($node->field_single_image['und'])) {
	$single_image = image_style_url("clients_165x80", $node->field_single_image['und'][0]['uri']);
}
?>
    <div class="m-top-30 bg_light_color_3 r_corners shadow manufacturers">
        <img width="165px" height="80px" class="f_left m_right_20 m_sm_bottom_5" src="<?php print $single_image;?>" alt="">
        <?php if(isset($content['body'])): print render($content['body']); endif;?>
        <div class="clearfix">
            <ul class="horizontal_list d_inline_b l_width_divider">
                <li class="m_right_15"><a href="<?php print render($content['field_website']['#items'][0]['value']);?>" class="color_dark"><?php print $content['field_website']['#title'];?></a></li>
                <li class="m_right_15"><a href="<?php print $base_url.'/'.drupal_get_path_alias('manufacturers');?>" class="color_dark"><?php print t('Manufacturer Page');?></a></li>
                <li class="m_right_15"><a href="<?php print $base_url.'/'.drupal_get_path_alias('manufacturers');?>" class="color_dark"><?php print t('View All Manufacturer Products');?></a></li>
            </ul>
        </div>
    </div>

