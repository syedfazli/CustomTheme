<?php
global $base_url;
global $user;
global $theme_root;
$product = '';
if (!empty($node->field_product['und'][0])) {
    $product = commerce_product_load($node->field_product['und'][0]['product_id']);
    $id = $product->product_id;
}

$layout_mode = '';
if (!empty($node->field_product_layout_mode['und'])) {
    $layout_mode = $node->field_product_layout_mode['und'][0]['value'];
}
$single_image = ' ';
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
<?php if(!$page):?>
    <!--product item-->
    <div class="product_item <?php print $str_att; ?>">
        <figure class="r_corners photoframe shadow relative animate_ftb long">
            <!--product preview-->
            <a href="<?php echo $node_url ?>" class="d_block relative pp_wrap">
                <!--hot product-->
                <?php if(theme_get_setting('demo') == 'interior'):?>
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
                <span data-popup="#quick_view_product_<?php echo $id ?>" class="button_type_5 box_s_none color_light r_corners tr_all_hover d_xs_none"><?php print t('Quick View') ?></span>
            </a>
            <!--description and price of product-->
            <figcaption>
                <h5 class="m_bottom_10"><a href="<?php echo $node_url ?>" class="color_dark ellipsis"><?php print $title; ?></a></h5>
                <div class="clearfix">
                    <div class="scheme_color f_left f_size_large m_bottom_15">
                        <?php print render($content['product:field_regular_price']);?>
                        <?php print render($content['product:commerce_price']); ?>
                    </div>
                    <!--rating-->
                    <div class="horizontal_list f_right clearfix rating_list tr_all_hover">
                        <?php print render($content['field_rating']);?>
                    </div>
                </div>
                <div class="clearfix ">
                    <div class="f_left"><?php print render($content['field_product']);?></div>
                    <?php if (module_exists('flag')): ?>
                        <div class="f_right">
                            <?php print flag_create_link('shop', $node->nid); ?>
                        </div>
                    <?php endif; ?>
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
                            <?php if(theme_get_setting('demo') == 'interior'):?>
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
                                    <img width="110px" height="110px" src="<?php print image_style_url("product_thumbnail_110x110",$node->field_single_image['und'][0]['uri']) ?>" alt="">
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
                            </tr>
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
                        <div class="m_bottom_15">
                            <s class="v_align_b f_size_ex_large"><?php print render($content['product:field_regular_price']);?></s>
                            <span class="v_align_b f_size_big m_left_5 scheme_color fw_medium"><?php print render($content['product:commerce_price']); ?></span>
                        </div>
                        <div class="clearfix m_bottom_15 action_box">
                            <?php print render($content['field_product']);?>
                            <?php if (module_exists('flag')): ?>
                                <?php print flag_create_link('shop', $node->nid); ?>
                            <?php endif; ?>
                            <a href="<?php print $base_url.'/'.drupal_get_path_alias('contacts')?>" class="c-questions button_type_12 bg_light_color_2 tr_delay_hover d_inline_b r_corners color_dark m_left_5 p_hr_0">
                                <i class="fa fa-question-circle f_size_big"></i>
                                <span class="tooltip tr_all_hover r_corners color_dark f_size_small"><?php print t('Ask a Question');?></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
<?php else:?>
    <div class="clearfix m_bottom_30 t_xs_align_c">
        <div id="quick_view_product_<?php echo $id ?>" class="photoframe type_2 shadow r_corners f_left f_sm_none d_xs_inline_b product_single_preview relative m_right_30 m_bottom_5 m_sm_bottom_20 m_xs_right_0 w_mxs_full">
            <?php if(theme_get_setting('demo') == 'interior'):?>
                <?php if (strpos($str_att,'specials')): ?>
                    <span class="hot_interior type_2"><?php print t('SALE');?></span>
                <?php endif; ?>
            <?php else:?>
                <?php if (isset($product->field_regular_price['und'])): ?>
                    <span class="hot_stripe"><img width="82px" height="82px" src="<?php print $base_url . '/' . drupal_get_path('theme', 'flatastic'); ?>/images/sale_product.png" alt=""></span>
                <?php endif; ?>
            <?php endif;?>

            <div class="relative d_inline_b m_bottom_10 qv_preview d_xs_block">
                <?php
                $single_image = ' ';
                if (!empty($node->field_single_image['und'])) {
                    $single_image = $node->field_single_image['und'][0]['uri'];
                }

                ?>
                <img width="438px" height="438px" id="zoom_image" src="<?php print image_style_url("product_image_438x438",$single_image); ?>" data-zoom-image="<?php print file_create_url($single_image); ?>" class="tr_all_hover" alt="">
                <a href="<?php print $single_image; ?>" class="d_block button_type_5 r_corners tr_all_hover box_s_none color_light p_hr_0">
                    <i class="fa fa-expand"></i>
                </a>
            </div>
            <!--carousel-->
            <div class="relative qv_carousel_wrap" >
                <button class="button_type_11 bg_light_color_1 t_align_c f_size_ex_large bg_cs_hover r_corners d_inline_middle bg_tr tr_all_hover qv_btn_single_prev">
                    <i class="fa fa-angle-left "></i>
                </button>
                <ul class="qv_carousel_single d_inline_middle c-image">
                    <a href="#" onclick="viewCarousel('quick_view_product_<?php echo $id ?>')" data-image="<?php print image_style_url("product_image_438x438", $single_image); ?>" data-zoom-image="<?php print file_create_url($single_image); ?>">
                        <img width="110" height="110" src="<?php print image_style_url("product_thumbnail_110x110", $single_image); ?>" alt="">
                    </a>
                    <?php foreach ($multiple_image as $key => $value): ?>
                        <a href="#" onclick="viewCarousel('quick_view_product_<?php echo $id ?>')" data-image="<?php print image_style_url("product_image_438x438", $value['uri']); ?>" data-zoom-image="<?php print file_create_url($value['uri']); ?>"><img width="110px" height="110px" src="<?php print image_style_url("product_thumbnail_110x110", $value['uri']); ?>" alt=""></a>
                    <?php endforeach; ?>
                </ul>
                <button class="button_type_11 bg_light_color_1 t_align_c f_size_ex_large bg_cs_hover r_corners d_inline_middle bg_tr tr_all_hover qv_btn_single_next">
                    <i class="fa fa-angle-right "></i>
                </button>
            </div>
        </div>
        <div class="p_top_10 t_xs_align_l">
            <!--description-->
            <h2 class="color_dark fw_medium m_bottom_10"><?php print $title; ?></h2>
            <?php if (isset($content['field_rating'])): ?>
                <div class="m_bottom_10">
                    <ul class="horizontal_list d_inline_middle type_2 clearfix rating_list tr_all_hover">
                        <?php print render($content['field_rating']); ?>
                    </ul>

                    <div class="d_inline_middle default_t_color f_size_small m_left_5"> <?php print $node->field_rating['und'][0]['count']?> <?php print t('Review(s)');?> </div>
                </div>
            <?php endif; ?>
            <hr class="m_bottom_10 divider_type_3">
            <table class="description_table m_bottom_10">
                <?php if (isset($content['field_product_manufacturer'])): ?>
                    <tr>
                        <td><?php print t('Manufacturer:'); ?></td>
                        <td><?php print render($content['field_product_manufacturer']); ?></td>
                    </tr>
                <?php endif; ?>
                <?php if (isset($content['product:commerce_stock'])): ?>
                    <tr>
                        <td><?php print t('Availability:'); ?></td>
                        <td><span class="color_green"><?php print t('in stock'); ?></span> <?php print render($content['product:commerce_stock']['#items'][0]['value']); ?> <?php print t('item(s)'); ?></td>
                    </tr>
                <?php endif; ?>
                <?php if (!empty($product->sku)): ?>
                    <tr>
                        <td><?php print t('Product Code:'); ?></td>
                        <td><?php print $product->sku; ?></td>
                    </tr>
                <?php endif; ?>
                <?php print render($content['product:sku']);?>
            </table>
            <h5 class="fw_medium m_bottom_10"><?php print t('Product Dimensions and Weight'); ?></h5>
            <table class="description_table m_bottom_5">
                <?php if (isset($content['field_product_length'])): ?>
                    <tr>
                        <td><?php print t('Product Length:'); ?></td>
                        <td><?php print render($content['field_product_length']); ?></td>
                    </tr>
                <?php endif; ?>
                <?php if (isset($content['field_product_weight'])): ?>
                    <tr>
                        <td><?php print t('Product Weight:'); ?></td>
                        <td><?php print render($content['field_product_weight']); ?></td>
                    </tr>
                <?php endif; ?>
            </table>
            <?php
            $summary = '';
            $description = '';
            if (!empty($node->body['und'][0])) {
                $summary = $node->body['und'][0]['summary'];
                $description = $node->body['und'][0]['value'];
            }
            ?>
            <hr class="divider_type_3 m_bottom_10">
            <?php print $summary; ?>
            <hr class="divider_type_3 m_bottom_15">
            <div class="m_bottom_15">
                <div class="v_align_b f_size_ex_large p-price"><?php print render($content['product:field_regular_price']);?></div>
                <div class="v_align_b f_size_big m_left_5 scheme_color fw_medium p-price"><?php print render($content['product:commerce_price']); ?></div>
            </div>
            <div class="d_ib_offset_0 m_bottom_20 p-add-one add-cart">
                <div class="c-cart">
                    <?php print render($content['field_product']); ?>
                </div>
                <?php if (module_exists('flag')): ?>
                    <div class="custom-flag">
                        <?php print flag_create_link('shop', $node->nid); ?>

                    </div>

                    <a href="<?php print $base_url.'/'.drupal_get_path_alias('contacts')?>" class="c-questions button_type_12 bg_light_color_2 tr_delay_hover d_inline_b r_corners color_dark m_left_5 p_hr_0"><i class="fa fa-question-circle f_size_big"></i><span class="tooltip tr_all_hover r_corners color_dark f_size_small">Ask a Question</span></a>

                <?php endif; ?>

            </div>
            <?php if($layout_mode == 'style_1'):?><div class="clearfix"></div><?php endif;?>
            <div class="<?php if($layout_mode == 'style_2'): print 'full-sharethis'; else: print 'p-sharethis'; endif;?>">
                <p class="d_inline_middle"><?php print t('Share this:'); ?></p>
                <div class="d_inline_middle m_left_5 addthis_widget_container">
                    <!-- AddThis Button BEGIN -->
                    <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
                        <a class="addthis_button_preferred_1"></a>
                        <a class="addthis_button_preferred_2"></a>
                        <a class="addthis_button_preferred_3"></a>
                        <a class="addthis_button_preferred_4"></a>
                        <a class="addthis_button_compact"></a>
                        <a class="addthis_counter addthis_bubble_style"></a>
                    </div>
                    <!-- AddThis Button END -->
                </div>
            </div>

        </div>
    </div>
    <!--tabs-->
    <div class="tabs m_bottom_45">
        <!--tabs navigation-->
        <nav>
            <ul class="tabs_nav horizontal_list clearfix">
                <li class="f_xs_none"><a href="#tab-1" class="bg_light_color_1 color_dark tr_delay_hover r_corners d_block"><?php print t('Description'); ?></a></li>
                <li class="f_xs_none"><a href="#tab-2" class="bg_light_color_1 color_dark tr_delay_hover r_corners d_block"><?php print t('Specifications'); ?></a></li>
                <li class="f_xs_none"><a href="#tab-3" class="bg_light_color_1 color_dark tr_delay_hover r_corners d_block"><?php print t('Reviews'); ?></a></li>
                <li class="f_xs_none"><a href="#tab-4" class="bg_light_color_1 color_dark tr_delay_hover r_corners d_block"><?php print t('Custom Tab'); ?></a></li>
            </ul>
        </nav>
        <section class="tabs_content shadow r_corners">
            <div id="tab-1">
                <?php print $description; ?>
                <hr class="m_bottom_15">
                <?php print t('Tags:'); ?>
                <div class="p-tags">
                    <?php if (isset($content['field_product_tags'])): print render($content['field_product_tags']);
                    endif; ?>
                </div>

            </div>
            <?php if (isset($content['field_product_specifications'])): ?>
                <div id="tab-2">
                    <?php print render($content['field_product_specifications']); ?>
                </div>
            <?php endif; ?>
            <div id="tab-3">
                <div class="row clearfix">
                    <?php print render($content['comments']); ?>
                </div>
            </div>
            <div id="tab-4">
                <?php if (isset($content['field_product_custom'])): ?>
                    <div class="iframe_video_wrap">
                        <?php print render($content['field_product_custom']['#items'][0]['value']) ?>
                    </div>
                <?php endif; ?>
            </div>
        </section>
    </div>
    <?php if($layout_mode == 'style_1'):?>
        <?php print views_embed_view('product_block','related_product_3col',$node->nid); ?>
    <?php else: ?>
        <?php print views_embed_view('product_block','related_product',$node->nid); ?>
    <?php endif; ?>
    <hr class="divider_type_3 m_bottom_15">
    <a href="javascript:history.go(-1)" role="button" class="d_inline_b bg_light_color_2 color_dark tr_all_hover button_type_4 r_corners"><i class="fa fa-reply m_left_5 m_right_10 f_size_large"></i><?php print t('Back');?></a>
<?php endif;?>

