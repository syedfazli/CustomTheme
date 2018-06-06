<?php
global $theme_root;
global $base_url;
global $user;
$curr_uri = request_uri();
$array_curr_uri = explode('/', $curr_uri);
$data = arg(0);
?>

<!--[if (lt IE 9) | IE 9]>
    <div style="background:#fff;padding:8px 0 10px;">
    <div class="container" style="width:1170px;"><div class="row wrapper"><div class="clearfix" style="padding:9px 0 0;float:left;width:83%;"><i class="fa fa-exclamation-triangle scheme_color f_left m_right_10" style="font-size:25px;color:#e74c3c;"></i><b style="color:#e74c3c;">Attention! This page may not display correctly.</b> <b>You are using an outdated version of Internet Explorer. For a faster, safer browsing experience.</b></div><div class="t_align_r" style="float:left;width:16%;"><a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode" class="button_type_4 r_corners bg_scheme_color color_light d_inline_b t_align_c" target="_blank" style="margin-bottom:2px;">Update Now!</a></div></div></div></div>
<![endif]-->
<!--markup header-->
<header role="banner" class="type_5">
    <!--header top part-->
    <?php if ($page['topbar_2']) : ?>
    <div class="h_top_part">
        <div class="container">
            <div class="row clearfix">
                <?php print render($page['topbar_2']); ?>
            </div>
        </div>
    </div>
    <?php endif; ?>
    <!--header bottom part-->
    <div class="h_bot_part">
        <div class="menu_wrap">
            <div class="container">
                <div class="clearfix row">
                    <?php if ($logo): ?>
						<div class="col-lg-2 t_md_align_c m_md_bottom_15">
							<?php 
								if(theme_get_setting('use_logo_default') == 0) {
									if(strpos($curr_uri, 'index-construction') || theme_get_setting('demo') == 'construction') { $logo = file_create_url(theme_get_setting('logo_construction')); }
									elseif(strpos($curr_uri, 'index-corporate') || theme_get_setting('demo') == 'corporate') { $logo = file_create_url(theme_get_setting('logo_corporate')); }
									elseif(strpos($curr_uri, 'interior-variant') || strpos($curr_uri, 'interior-landing') || theme_get_setting('demo') == 'interior') { $logo = file_create_url(theme_get_setting('logo_interior')); }
									elseif(strpos($curr_uri, 'one-page')) { $logo = file_create_url(theme_get_setting('logo_onepage')); }
								}
							?>
							<a href="<?php print $front_page; ?>" class="logo d_md_inline_b">
								<img width="auto" height="auto" src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>">
							</a>
						</div>
					<?php endif; ?>
                    <div class="col-lg-10 clearfix t_sm_align_c">
                        <div class="clearfix t_sm_align_l f_left f_sm_none relative s_form_wrap m_sm_bottom_15 p_xs_hr_0 m_xs_bottom_5">
                            <!--button for responsive menu-->
                            <button id="menu_button" class="r_corners centered_db d_none tr_all_hover d_xs_block m_xs_bottom_5">
                                <span class="centered_db r_corners"></span>
                                <span class="centered_db r_corners"></span>
                                <span class="centered_db r_corners"></span>
                            </button>
                            <!--main menu-->
                            <nav role="navigation" class="f_left f_xs_none d_xs_none m_right_35 m_md_right_30 m_sm_right_0">    
                                <?php print render($page['menu']); ?>
                            </nav>
                            <button class="f_right search_button tr_all_hover f_xs_none d_xs_none">
                                <i class="fa fa-search"></i>
                            </button>
                            <!--search form-->
                            <div class="searchform_wrap type_2 bg_tr tf_xs_none tr_all_hover w_inherit">
                                <div class="container vc_child h_inherit relative w_inherit">
                                    <?php
                                    $block = module_invoke('search', 'block_view', 'form');
                                    print render($block['content']);
                                    ?>
                                    <button class="close_search_form tr_all_hover d_xs_none color_dark">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul class="f_right horizontal_list d_sm_inline_b f_sm_none clearfix t_align_l site_settings">
                            <!--like-->
                            <?php if(module_exists('flag')):
                            $wishlist = flag_get_user_flags('node');
                            $count_wishlist = 0;
                            if(isset($wishlist['shop'])){
                                $count_wishlist = count($wishlist['shop']);
                            }
                            ?>
                            <li class="relative">
                                <a role="button" href="<?php print $base_url.'/'.drupal_get_path_alias('wishlist');?>" class="button_type_1 color_dark d_block bg_light_color_1 r_corners tr_delay_hover box_s_none"><i class="fa fa-heart-o f_size_ex_large"></i><span class="count circle t_align_c"><?php print $count_wishlist;?></span></a>
                            </li>
                            <?php endif;?>
                            <!--shopping cart-->
                                <?php if($page['cart']): ?>
                                    <?php $order = commerce_cart_order_load($user->uid);
                                    $quantity = 0;
									$total_price = '$0';
									if ($order) {
                                        $wrapper = entity_metadata_wrapper('commerce_order', $order);
                                        $line_items = $wrapper->commerce_line_items;
                                        $quantity = commerce_line_items_quantity($line_items, commerce_product_line_item_types());
                                        $total = commerce_line_items_total($line_items);
                                        $currency = commerce_currency_load($total['currency_code']);
                                        $total_price = commerce_currency_format($total['amount'],$total['currency_code']);
                                    }?>
                                    <li class="m_left_5 relative container3d" id="shopping_button">
                                        <a role="button" href="#" class="button_type_3 color_light bg_scheme_color d_block r_corners tr_delay_hover box_s_none">
                                            <span class="d_inline_middle shop_icon m_mxs_right_0">
                                                <i class="fa fa-shopping-cart"></i>
                                                <span class="count tr_delay_hover type_2 circle t_align_c"><?php print $quantity;?></span>
                                            </span>
                                            <b class="d_mxs_none"><?php print $total_price; ?></b>
                                        </a>
                                        <div class="shopping_cart top_arrow tr_all_hover r_corners">
                                            <?php print render($page['cart']); ?>
                                        </div>
                                    </li>
                                <?php endif; ?>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="divider_type_6">
        </div>
    </div>
</header>
