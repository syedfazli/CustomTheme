<?php
global $base_url;
global $theme_root;
$curr_uri = request_uri();

if (!empty($node->field_product['und'][0])) {
    $product = commerce_product_load($node->field_product['und'][0]['product_id']);
    $id = $product->product_id;
}

$single_image = '';
if (!empty($node->field_single_image['und'])) {
    $single_image = image_style_url("product_block_242x242", $node->field_single_image['und'][0]['uri']);
}
$str_att = '';
if (isset($node->field_product_attributes)):
    if(isset($node->field_product_attributes['und'])){
        foreach ($node->field_product_attributes['und'] as $att) {
            $str_att .= ' ' . strtolower($att['taxonomy_term']->name);
        }
    }
endif;

$multiple_image = array();
if (!empty($node->field_image['und'])) {
    $multiple_image = $node->field_image['und'];
}

?>

<!--product item-->
<div class="product_item <?php print $str_att; ?> w_xs_full">
    <figure class="r_corners photoframe animate_ftb long type_2 t_align_c shadow relative">
        <!--product preview-->
        <a href="#" class="d_block relative pp_wrap m_bottom_15">
            <!--hot product-->
            <?php if(theme_get_setting('demo') == 'interior' || strpos($curr_uri, 'interior-variant') || strpos($curr_uri, 'interior-landing')):?>
                <?php if (strpos($str_att,'hit')): ?>
                    <span class="hot_interior"><?php print t('HOT');?></span>
                <?php endif; ?>
                <?php if (strpos($str_att,'specials')): ?>
                    <span class="hot_interior type_2"><?php print t('SALE');?></span>
                <?php endif; ?>
            <?php else:?>
                <?php if (strpos($str_att,'hit')): ?>
                    <span class="hot_stripe"><img width="82px" height="82px" src="<?php print $theme_root; ?>/images/hot_product.png" alt=""></span>
                <?php endif; ?>
                <?php if (strpos($str_att,'specials')): ?>
                    <span class="hot_stripe type_2"><img width="82px" height="82px" src="<?php print $theme_root; ?>/images/sale_product_type_2.png" alt=""></span>
                <?php endif; ?>
            <?php endif;?>
            <img width="242px" height="242px" src="<?php print $single_image; ?>" class="tr_all_hover" alt="">
            <span role="button" data-popup="#quick_view_product_<?php echo $id ?>" class="button_type_5 box_s_none color_light r_corners tr_all_hover d_xs_none">
                <?php print t('Quick View') ?>
            </span>
        </a>
        <!--description and price of product-->
        <figcaption>
            <h5 class="m_bottom_10"><a href="<?php echo $node_url ?>" class="color_dark ellipsis"><?php print $title; ?></a></h5>
            <div class="clearfix m_bottom_15">
                <!--rating-->
                <div class="horizontal_list type_2 m_bottom_10 d_inline_b clearfix rating_list tr_all_hover">
                    <?php print render($content['field_rating']); ?>
                </div>
                <p class="scheme_color f_size_large">
                    <s><?php print render($content['product:field_regular_price']);?></s>
                    <?php print render($content['product:commerce_price']); ?>
                </p>
            </div>
            <div class="clearfix m_bottom_15 relative">
                <div class="p_left"><?php print render($content['field_product']); ?></div>
                <div class="p_right">
					<ul class="horizontal_list d_inline_b l_width_divider">
						<li class="f_md_none m_md_right_0">
							<?php if (module_exists('flag')): ?>
								<?php print flag_create_link('shop', $node->nid); ?>
							<?php endif; ?>
						</li>
					</ul>
				</div>
            </div>
        </figcaption>
    </figure>
</div>
<div class="popup_wrap d_none" id="quick_view_product_<?php echo $id ?>">
    <section class="popup r_corners shadow">
        <button class="bg_tr color_dark tr_all_hover text_cs_hover close f_size_large"><i class="fa fa-times"></i></button>
        <div class="clearfix">
            <div class="custom_scrollbar">
                <!--left popup column-->
                <div class="f_left half_column">
                    <div class="relative d_inline_b m_bottom_10 qv_preview">
                        <!--hot product-->
                        <?php if (strpos($str_att,'hit')): ?>
                        <span class="hot_stripe"><img width="82px" height="82px" src="<?php print $theme_root; ?>/images/hot_product.png" alt=""></span>
                        <?php endif; ?>
                        <?php if (strpos($str_att,'specials')): ?>
                        <span class="hot_stripe type_2"><img width="82px" height="82px" src="<?php print $theme_root; ?>/images/sale_product_type_2.png" alt=""></span>
                        <?php endif; ?>
                        <?php 
                            $single_image_popup = ' ';
                            if(!empty($node->field_single_image['und'])){
                                $single_image_popup = image_style_url("product_image_360x360",$node->field_single_image['und'][0]['uri']);
                            }
                        ?>
                        <img width="360px" height="360px" src="<?php print $single_image_popup; ?>" class="tr_all_hover" alt="">
                    </div>
                    <!--carousel-->
                    <div class="relative qv_carousel_wrap m_bottom_20">
                        <button class="button_type_11 t_align_c f_size_ex_large bg_cs_hover r_corners d_inline_middle bg_tr tr_all_hover qv_btn_prev">
                            <i class="fa fa-angle-left "></i>
                        </button>
                        <ul class="qv_carousel d_inline_middle">
                            <li data-src="<?php print $single_image_popup ?>" onclick="viewCarousel('quick_view_product_<?php echo $id ?>')">
                                <?php 
									$product_thumbnail = ' ';
									if(!empty($node->field_single_image['und'])){
										$product_thumbnail = image_style_url("product_thumbnail_110x110",$node->field_single_image['und'][0]['uri']);
									}
								?>
								<img width="110px" height="110px" src="<?php print $product_thumbnail; ?>" alt="">
                            </li>
                            <?php foreach($multiple_image as $key => $value):?>
                                <li data-src="<?php print image_style_url("product_image_360x360",$value['uri']);?>" onclick="viewCarousel('quick_view_product_<?php echo $id ?>')" >
                                    <img width="110px" height="110px" src="<?php print image_style_url("product_thumbnail_110x110",$value['uri']);?>" alt="">
                                </li>
                            <?php endforeach;?>
                        </ul>
                        <button class="button_type_11 t_align_c f_size_ex_large bg_cs_hover r_corners d_inline_middle bg_tr tr_all_hover qv_btn_next">
                            <i class="fa fa-angle-right "></i>
                        </button>
                    </div>
                    <div class="d_inline_middle"><?php print t('Share this:');?></div>
                    <div class="d_inline_middle m_left_5">
                        <!--AddThis Button BEGIN--> 
                        <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
                            <a class="addthis_button_preferred_1"></a>
                            <a class="addthis_button_preferred_2"></a>
                            <a class="addthis_button_preferred_3"></a>
                            <a class="addthis_button_preferred_4"></a>
                            <a class="addthis_button_compact"></a>
                            <a class="addthis_counter addthis_bubble_style"></a>
                        </div>
                        <!--AddThis Button END--> 
                    </div>
                </div>
                <!--right popup column-->
                <div class="f_right half_column">
                    <!--description-->
                    <h2 class="m_bottom_10"><a href="#" class="color_dark fw_medium"><?php print $title; ?></a></h2>
                    <div class="m_bottom_10">
                        <!--rating-->
                        <div class="horizontal_list d_inline_middle type_2 clearfix rating_list tr_all_hover">
                            <?php print render($content['field_rating']);?>
                        </div>
                        <div class="d_inline_middle default_t_color f_size_small m_left_5"> <?php print $node->field_rating['und'][0]['count']?> <?php print t('Review(s)');?> </div>
                    </div>
                    <hr class="m_bottom_10 divider_type_3">
                    <table class="description_table m_bottom_10">
                        <?php if(isset($content['field_product_manufacturer'])):?>
                        <tr>
                            <td><?php print t('Manufacturer:');?></td>
                            <td><?php print render($content['field_product_manufacturer']);?></td>
                        </tr>
                        <?php endif;?>
                        <?php if(isset($content['product:commerce_stock'])):?>
                            <tr>
                                <td><?php print t('Availability:');?></td>
                                <td><span class="color_green"><?php print t('in stock');?></span> <?php print render($content['product:commerce_stock']['#items'][0]['value']);?> <?php print t('item(s)');?></td>
                            </tr>
                        <?php endif;?>
                        <?php if(!empty($product->sku)):?>
                            <tr>
                                <td><?php print t('Product Code:');?></td>
                                <td><?php print $product->sku;?></td>
                            </tr>
                        <?php endif;?>
                    </table>
                    <h5 class="fw_medium m_bottom_10"><?php print t('Product Dimensions and Weight');?></h5>
                    <table class="description_table m_bottom_5">
                        <?php if(isset($content['field_product_length'])):?>
                        <tr>
                            <td><?php print t('Product Length:');?></td>
                            <td><?php print render($content['field_product_length']);?></td>
                        </tr>
                        <?php endif;?>
                        <?php if(isset($content['field_product_weight'])):?>
                            <tr>
                                <td><?php print t('Product Weight:');?></td>
                                <td><?php print render($content['field_product_weight']);?></td>
                            </tr>
                        <?php endif;?>
                        </table>
                    <?php $summary = '';
                $description = '';
                if($node->body['und'][0]['summary'] != Null){
                    $summary = $node->body['und'][0]['summary'];
                }
                if($node->body['und'][0]['value'] != Null){
                    $description = $node->body['und'][0]['value'];
                }
                ?>
                    <hr class="divider_type_3 m_bottom_10">
                    <div class="m_bottom_10">
                        <?php print $summary;?>
                    </div>
                    <hr class="divider_type_3 m_bottom_15">
                    <a href="<?php print $node_url;?>" role="button" class="d_inline_b bg_light_color_2 color_dark tr_all_hover button_type_4 r_corners"><?php print t('View Product');?></a>
                </div>
            </div>
        </div>
    </section>
</div>