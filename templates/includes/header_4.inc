<?php
global $theme_root;
global $base_url;
global $user;
global $language ;
$curr_uri = request_uri();
$array_curr_uri = explode('/', $curr_uri);
$data = arg(0);
?>

<!--[if (lt IE 9) | IE 9]>
    <div style="background:#fff;padding:8px 0 10px;">
    <div class="container" style="width:1170px;"><div class="row wrapper"><div class="clearfix" style="padding:9px 0 0;float:left;width:83%;"><i class="fa fa-exclamation-triangle scheme_color f_left m_right_10" style="font-size:25px;color:#e74c3c;"></i><b style="color:#e74c3c;">Attention! This page may not display correctly.</b> <b>You are using an outdated version of Internet Explorer. For a faster, safer browsing experience.</b></div><div class="t_align_r" style="float:left;width:16%;"><a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode" class="button_type_4 r_corners bg_scheme_color color_light d_inline_b t_align_c" target="_blank" style="margin-bottom:2px;">Update Now!</a></div></div></div></div>
<![endif]-->
<!--markup header type 2-->
<header class="type_4" role="banner">
    <!--header top part-->
    <?php if ($page['topbar_4']) : ?>
    <div class="h_top_part type_2">
        <div class="container">
            <div class="row clearfix">
                <?php print render($page['topbar_4']); ?>
            </div>
        </div>
    </div>
    <?php endif; ?>
    <!--header bottom part-->
    <div class="h_bot_part type_2 container">
        <div class="clearfix row">
            <div class="col-lg-4 col-md-5 col-sm-4 t_xs_align_c m_xs_bottom_15">
                <ul class="horizontal_list clearfix t_align_l site_settings type_2 d_xs_inline_b">
                    <li class="container3d relative">
                        <a role="button" href="#" class="color_dark" id="lang_button">
                            <img class="d_inline_middle m_right_10" width="19" height="12" src="<?php print $base_url; ?>/sites/all/modules/languageicons/flags/<?php print $language->language ?>.png" alt=""><?php print $language->name; ?>
                        </a>
                        <?php if ($page['language']) : ?>
                            <div class="dropdown_list type_2 top_arrow color_light">
                                <?php print render($page['language']); ?>
                            </div>
                        <?php endif; ?>
                    </li>
                    <?php $currency = commerce_currency_load(commerce_multicurrency_get_user_currency_code()); ?>
                    <li class="m_left_20 relative container3d">
                    <a role="button" href="#" class="color_dark" id="currency_button"><span class="scheme_color"><?php print $currency['symbol']; ?></span> <?php print $currency['major_unit']; ?></a>
                    <?php if ($page['currency']) : ?>
                        <div class="dropdown_list type_2 top_arrow color_light">
                            <?php print render($page['currency']); ?>
                        </div>
                    <?php endif; ?>
                </li>
                </ul>
                <?php if ($page['link_header_4']) : ?>
                    <?php print render($page['link_header_4']); ?>
                <?php endif; ?>
            </div>
            <div class="col-lg-8 col-md-7 col-sm-8 clearfix t_xs_align_c">
                <div class="relative f_left s_form_wrap_2">
                    <?php if ($logo): ?>
						<?php 
							if(theme_get_setting('use_logo_default') == 0) {
								if(strpos($curr_uri, 'index-construction') || theme_get_setting('demo') == 'construction') { $logo = file_create_url(theme_get_setting('logo_construction')); }
								elseif(strpos($curr_uri, 'index-corporate') || theme_get_setting('demo') == 'corporate') { $logo = file_create_url(theme_get_setting('logo_corporate')); }
								elseif(strpos($curr_uri, 'interior-variant') || strpos($curr_uri, 'interior-landing') || theme_get_setting('demo') == 'interior') { $logo = file_create_url(theme_get_setting('logo_interior')); }
								elseif(strpos($curr_uri, 'one-page')) { $logo = file_create_url(theme_get_setting('logo_onepage')); }
							}
						?>
						<a href="<?php print $front_page; ?>" class="logo m_xs_bottom_10 d_inline_b">
							<img width="auto" height="auto" src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>">
						</a>
					<?php endif; ?>
                    <div class="searchform_wrap m_xs_bottom_10 type_3 bg_tr tf_xs_none tr_all_hover w_inherit p_hr_0">
                        <div id="search-header-4" class="vc_child h_inherit relative w_inherit">
                            <?php
                                $block = module_invoke('search', 'block_view', 'form');
                                print render($block['content']);
                            ?>
                            <button class="close_search_form tr_all_hover d_xs_none color_dark">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <button class="f_right search_button tr_all_hover d_xs_none">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                <ul class="d_inline_b horizontal_list clearfix t_align_l f_right f_xs_none site_settings">
                    <!--like-->
                    <?php if(module_exists('flag')):
                    $wishlist = flag_get_user_flags('node');
                    $count_wishlist = 0;
                    if(isset($wishlist['shop'])){
                        $count_wishlist = count($wishlist['shop']);
                    }
                    ?>
                    <li class="m_left_5 relative">
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
    <!--main menu container-->
    <div class="<?php if($data == 'index_construction'): print 'bg-menu-home5'; endif;?> menu_wrap type_3 relative ">
        <div class="container clearfix t_align_c">
            <!--button for responsive menu-->
            <button id="menu_button" class="r_corners centered_db d_none tr_all_hover d_xs_block m_bottom_10">
                <span class="centered_db r_corners"></span>
                <span class="centered_db r_corners"></span>
                <span class="centered_db r_corners"></span>
            </button>
            <!--main menu-->
            <nav role="navigation" class="d_xs_none d_inline_b t_align_l">  
                <?php print render($page['menu']); ?>
            </nav>
        </div>
    </div>
</header>