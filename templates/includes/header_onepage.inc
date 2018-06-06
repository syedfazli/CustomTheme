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

<header id="home" class="h-onepage">
    <!--header top part-->
    <?php if ($page['topbar_1']) : ?>
        <div class="h_top_part h_top">
            <div class="container">
                <div class="row clearfix">
                    <?php print render($page['topbar_1']); ?>
                </div>
            </div>
        </div>
    <?php endif; ?>
    <div class="op-header">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-lg-2 col-sm-2 col-xs-6">
                    <?php if ($logo): ?>
						<?php 
							if(theme_get_setting('use_logo_default') == 0) {
								if(strpos($curr_uri, 'index-construction') || theme_get_setting('demo') == 'construction') { $logo = file_create_url(theme_get_setting('logo_construction')); }
								elseif(strpos($curr_uri, 'index-corporate') || theme_get_setting('demo') == 'corporate') { $logo = file_create_url(theme_get_setting('logo_corporate')); }
								elseif(strpos($curr_uri, 'interior') || theme_get_setting('demo') == 'interior') { $logo = file_create_url(theme_get_setting('logo_interior')); }
								elseif(strpos($curr_uri, 'one-page')) { $logo = file_create_url(theme_get_setting('logo_onepage')); }
							}
						?>
                        <a href="<?php print $front_page; ?>" class="logo m_xs_bottom_15 d_xs_inline_b">
                            <img src="<?php echo $logo; ?>" alt="<?php print t('Home'); ?>">
                        </a>
                    <?php elseif ($site_name || $site_slogan): ?>
                        <?php if ($site_name): ?>
                            <a href="<?php print $front_page; ?>" class="logo m_xs_bottom_15 d_xs_inline_b">
                                <?php print $site_name; ?>
                            </a>
                        <?php endif; ?>

                        <?php if ($site_slogan): ?>
                            <span id="site-slogan"<?php if ($disable_site_slogan) { print ' class="hidden"';} ?>>
                        <?php print $site_slogan; ?>
                        </span>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>
                <div class="col-md-10 col-lg-10 col-sm-10 col-xs-6">
                    <button id="menu_button" class="b-onepage r_corners centered_db d_none tr_all_hover d_xs_block m_bottom_10">
                        <span class="centered_db r_corners"></span>
                        <span class="centered_db r_corners"></span>
                        <span class="centered_db r_corners"></span>
                    </button>
                   <?php if($page['menu']):?>
                       <?php print render($page['menu']);?>
                    <?php endif;?>
                </div>
            </div>
        </div>
    </div>
</header>