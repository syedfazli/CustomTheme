<?php
global $base_url;
global $theme_root;
$curr_uri = request_uri();

$single_image = ' ';
if (!empty($node->field_single_image['und'])) {
    $single_image = image_style_url('blog_latest_80x80',$node->field_single_image['und'][0]['uri']);
}
$str_att = '';
if (isset($node->field_product_attributes)):
    if(isset($node->field_product_attributes['und'])){
        foreach ($node->field_product_attributes['und'] as $att) {
            $str_att .= ' ' . strtolower($att['taxonomy_term']->name);
        }
    }
endif;

?>
<div class="clearfix m_bottom_15">
    <img  src="<?php print $single_image;?>" alt="" class="f_left m_right_15 m_sm_bottom_10 f_sm_none f_xs_left m_xs_bottom_0">
    <a href="<?php print $node_url;?>" class="color_dark d_block bt_link"><?php print $title;?></a>
    <?php if(isset($content['field_rating'])):?>
    <?php endif;?>
    <?php if(isset($content['product:field_regular_price'])):?>
    <?php print render($content['product:field_regular_price']);?>
    <?php endif;?>
    <?php if(isset($content['product:commerce_price'])):?>
    <?php print render($content['product:commerce_price']); ?>
    <?php endif;?>
</div>
<hr class="m_bottom_15">