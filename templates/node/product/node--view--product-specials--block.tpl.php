<?php
$single_image = ' ';
if (!empty($node->field_single_image['und'])) {
    $single_image = image_style_url("product_block_242x242", $node->field_single_image['und'][0]['uri']);
}

if (!empty($node->field_product['und'][0])) {
    $product = commerce_product_load($node->field_product['und'][0]['product_id']);
    $id = $product->product_id;
}
?>

<div class="specials_item">
    <a href="<?php print $node_url;?>" class="d_block d_xs_inline_b wrapper m_bottom_20">
        <img width="242px" height="242px" class="tr_all_long_hover" src="<?php print $single_image;?>" alt="">
    </a>
    <h5 class="m_bottom_10"><a href="<?php print $node_url;?>" class="color_dark ellipsis"><?php print $title;?></a></h5>
    <p class="f_size_large m_bottom_15">
        <s><?php print render($content['product:field_regular_price']);?></s>
        <span class="scheme_color"><?php print render($content['product:commerce_price']); ?></span></p>
    <?php print render($content['field_product']); ?>
</div>
