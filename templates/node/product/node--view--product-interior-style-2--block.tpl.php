<?php
$single_image = ' ';
if (!empty($node->field_single_image['und'])) {
    $single_image = $node->field_single_image['und'][0]['uri'];
}

if (!empty($node->field_product['und'][0])) {
    $product = commerce_product_load($node->field_product['und'][0]['product_id']);
    $id = $product->product_id;
    $price = commerce_product_calculate_sell_price($product);
    $price_display = commerce_currency_format($price['amount'], $price['currency_code']);
}
$multi_image = '';
if(!empty($node->field_image['und'])){
    $multi_image = $node->field_image['und'][0]['uri'];
}


?>
<div class="row">
    <div class="col-sm-6">
        <div class="photoframe relative wrapper t_align_c">
            <img src="<?php print file_create_url($multi_image);?>" alt="" class="tr_all_long_hover">
        </div>
    </div>
    <div class="col-sm-6">
        <div class="wrapper t_align_c">
            <h2 class="m_bottom_20"><a href="<?php print drupal_get_path_alias('node/'.$node->nid);?>" class="color_dark ellipsis"><?php print $node->title;?></a></h2>
            <img src="<?php print file_create_url($single_image);?>" alt="" class="tr_all_long_hover">
            <div class="interior-general">
                <div class="i-price m-top-20 m-bottom-30">
                  <?php print render($content['product:field_regular_price']);?>
                    <div class="v_align_b f_size_big m_left_5 scheme_color fw_medium"> <?php print render($content['product:commerce_price']); ?></div>
                </div>
                <div class="inter-add-cart">
                    <?php print render($content['field_product']); ?>
                </div>
            </div>
        </div>
    </div>
</div>



