<?php
global $theme_root;
$curr_uri = request_uri();
$array_curr_uri = explode('/', $curr_uri);
$data = arg(0);
foreach ($array_curr_uri as $k => $v) {
    if ($v == '') {
        unset($array_curr_uri[$k]);
    }
}
array_push($array_curr_uri, $data);

$arrayTypeSettings = array(
    'page_wide_layout', 'page_boxed_layout',
    'header_1', 'header_2', 'header_3', 'header_4','header_5',
    'footer_1', 'footer_2', 'footer_3', 'footer_4', 'footer_5', 'footer_6'
);

$count = 1;
foreach ($arrayTypeSettings as $type) {
    $var1 = 'page_style' . $count;
    $var2 = 'arrayPageStyle' . $count;
    $var3 = 'getPageStyle' . $count;

    $$var1 = theme_get_setting($type);
    $$var1 = str_replace(" ", "", $$var1);
    $$var2 = explode(',', $$var1);
    $count++;

    $$var3 = array_intersect($$var2, $array_curr_uri);
}
$is_page_header = false;
$is_page_footer = false;
for ($i = 3; $i <= 7; $i++) {
    $header_page = 'getPageStyle' . $i;
    if (count($$header_page) > 0) {
        $header_option_page = 'header_' . ($i - 2);
        $is_page_header = true;
        break;
    }
}
for ($i = 8; $i <= 13; $i++) {
    $footer_page = 'getPageStyle' . $i;
    if (count($$footer_page) > 0) {
        $footer_option_page = 'footer_' . ($i - 7);
        $is_page_footer = true;
        break;
    }
}
?>
<?php
if (count($getPageStyle1) > 0) {
    $layout_option = 'wide_layout';
} elseif (count($getPageStyle2) > 0) {
    $layout_option = 'boxed_layout';
} else {
    if (theme_get_setting('layout_option') == 'boxed') {
        $layout_option = 'boxed_layout';
    } else {
        $layout_option = 'wide_layout';
    }
}
?>

<div class="<?php echo $layout_option; ?> relative w_xs_auto">

    <?php if ($data == 'one-page'): ?>
        <?php require_once("includes/header_onepage.inc"); ?>
    <?php else: ?>
        <?php
        if (isset($_GET['header'])) {
            $header_option = $_GET['header'];
        } elseif ($is_page_header) {
            $header_option = $header_option_page;
        } else {
            $header_option = theme_get_setting('header_option');
        }
        switch ($header_option):
            case 'header_1':
                require_once("includes/header_1.inc");
                break;
            case 'header_2':
                require_once("includes/header_2.inc");
                break;
            case 'header_3':
                require_once("includes/header_3.inc");
                break;
            case 'header_4':
                require_once("includes/header_4.inc");
                break;
            case 'header_5':
                require_once("includes/header_5.inc");
                break;
            default;
                break;
        endswitch;
        ?>
    <?php endif; ?>

    <?php if (theme_get_setting('breadcrumbs') == 1): ?>
        <?php if ($breadcrumb && $title): ?>
            <div class="breadcrumbs">
                <div class="container">
                    <?php print $breadcrumb; ?>
                </div>
            </div>
        <?php endif; ?>
    <?php endif; ?>

    <!-- Message -->
    <?php if ($data != 'one-page'): ?>
    <div class="message">
        <div class="container">
            <?php print $messages;  ?>
        </div>
    </div>
    <?php endif; ?>
    <?php if (isset($page['sidebar_slider'])&&isset($page['slider'])&&!empty($page['sidebar_slider'])): ?>
        <div class="container">
            <div class="row clearfix">
                <!--slider-->
                <div class="col-lg-9 col-md-9 col-sm-9 m_xs_bottom_30 slider_left">
                    <?php print render($page['slider']); ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 t_xs_align_c s_banners">
                    <?php print render($page['sidebar_slider']); ?>
                </div>
            </div>
        </div>        
    <?php else: ?>
        <?php if(isset($page['slider'])): ?>
            <?php print render($page['slider']); ?>
        <?php endif; ?>
    <?php endif; ?>
    <!--content-->
    <div class="page_content_offset <?php if($data == 'index-corporate' || $data == 'index-construction'): print 'p_bottom_0 ' ; endif;?> <?php if($data == 'index-construction'): print 'custom-bg-main' ; endif;?>">
        <?php if($data == 'one-page' || $data == 'index-corporate' || $data == 'index-construction' || $data == 'interior-variant-1' || $data == 'interior-landing'):?>
            <?php print render($page['content']); ?>

        <?php else: ?>
            <div class="container">
                <?php if ($page['right_sidebar']): ?>
                    <div class="row clearfix">
                        <div class="col-lg-9 col-md-9 col-sm-9 m_xs_bottom_30">
                            <?php if(isset($title)): ?>
                                <h2 class="tt_uppercase color_dark m_bottom_20"><?php print $title; ?></h2>
                            <?php endif; ?>
                            <?php if ($tabs = render($tabs)): ?>
                                <div class="main-tabs">
                                    <?php //print render($tabs); ?>
                                </div>
                            <?php endif; ?>
                            <?php print render($page['content']); ?>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <?php if ($page['right_sidebar']): ?>
                                <?php print render($page['right_sidebar']); ?>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php else: ?>
                    <?php if ($tabs = render($tabs)): ?>
                        <div class="main-tabs">
                            <?php print render($tabs); ?>
                        </div>
                    <?php endif; ?>
                    <?php print render($page['content']); ?>

                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
    <?php if($data == 'one-page'):?>
        <?php require_once("includes/footer_onepage.inc");?>
        <?php else:?>
        <?php
        if (isset($_GET['footer'])) {
            $footer_option = $_GET['footer'];
        } elseif ($is_page_footer) {
            $footer_option = $footer_option_page;
        } else {
            $footer_option = theme_get_setting('footer_option');
        }
        switch ($footer_option):
            case 'footer_1':
                require_once("includes/footer_1.inc");
                break;
            case 'footer_2':
                require_once("includes/footer_2.inc");
                break;
            case 'footer_3':
                require_once("includes/footer_3.inc");
                break;
            case 'footer_4':
                require_once("includes/footer_4.inc");
                break;
            case 'footer_5':
                require_once("includes/footer_5.inc");
                break;
            case 'footer_6':
                require_once("includes/footer_6.inc");
                break;
            default;
                break;
        endswitch;
        ?>
    <?php endif;?>


</div>
<?php
if (theme_get_setting('social_widget') == 1):
    if ($page['social_widget']) :
        print render($page['social_widget']);
    endif;
endif;
?>



