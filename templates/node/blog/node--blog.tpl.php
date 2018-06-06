<?php
global $theme_root;
$curr_uri = request_uri();
$array_curr_uri = explode('/', $curr_uri);
if (isset($node->field_single_image['und'])) {
    $imagePath = $node->field_single_image['und'][0]['uri'];
}else{
    $imagePath = file_build_uri('1000x1000');
}
?>
<?php if(!$page):?>
    <article class="m_bottom_20 clearfix">
        <a href="<?php print $node_url?>" class="photoframe d_block d_xs_inline_b f_xs_none wrapper shadow f_left m_right_20 m_bottom_10 r_corners">
            <img width="350px" height="220px" src="<?php print image_style_url('blog_list',$imagePath);?>" class="tr_all_long_hover" alt="">
        </a>
        <div class="mini_post_content">
            <h4 class="m_bottom_5"><a href="<?php print $node_url?>" class="color_dark fw_medium"><?php print $title;?></a></h4>
            <div class="f_size_medium m_bottom_10"> <?php print format_date($node->created, 'custom', 'F d, Y'); ?> <a href="#" class="color_dark"><?php print $comment_count;?> comments</a>, on <?php print flatastic_format_comma_field('field_blog_categories', $node); ?></div>
            <hr>
            <div class="rating_min_article">
                <p class="f_size_medium d_inline_middle d_sm_block d_xs_inline_middle"><?php print t('Rate this item');?></p>
                <!--rating-->
                <ul class="horizontal_list d_inline_middle type_2 clearfix rating_list tr_all_hover m_left_5 m_sm_left_0">
                    <?php if(isset($content['field_rating'])): print render($content['field_rating']); endif;?>
                </ul>
            </div>
            <hr class="m_bottom_15">
            <?php if(isset($content['body'])): print render($content['body']); endif;?>
            <a href="<?php print $node_url;?>" class="tt_uppercase f_size_large"><?php print t('Read More');?></a>
        </div>
    </article>
    <hr class="divider_type_3 m_bottom_30">
<?php else:?>
    <article class="m_bottom_15">
        <div class="row clearfix m_bottom_15">
            <div class="col-lg-9 col-md-9 col-sm-8">
                <h2 class="m_bottom_5 color_dark fw_medium m_xs_bottom_10"><?php print $title; ?></h2>
                <p class="f_size_medium">
                    <?php print format_date($node->created, 'custom', 'F d, Y'); ?>, <a href="<?php print $node_url; ?>#comments" class="color_dark"><?php print $comment_count; ?> comments</a>, on <?php print flatastic_format_comma_field('field_blog_categories', $node); ?>
                </p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 t_align_r t_xs_align_l">
                <p class="f_size_medium d_xs_inline_middle"><?php print t('Rate this item');?></p>
                <!--rating-->
                <?php if(isset($content['field_rating'])): print render($content['field_rating']); endif;?>
            </div>
        </div>
        <a href="<?php echo $node_url; ?>" class="d_block photoframe r_corners wrapper shadow m_bottom_15">
            <img src="<?php echo file_create_url($imagePath); ?>" class="tr_all_long_hover" alt="">
        </a>
        <!--post content-->
        <?php
        hide($content['field_single_image']);
        hide($content['field_blog_categories']);
        ?>
        <?php if(isset($content['body'])): print render($content['body']); endif;?>
    </article>
    <div class="m_bottom_30">
        <p class="d_inline_middle"><?php print t('Share this:');?></p>
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
    <hr class="divider_type_3 m_bottom_10">
    <div class = "b-category">
        <div class="m_bottom_10"><?php print t('More in this category:');?>   <?php print views_embed_view('related_blog','block',$node->nid);?></div>

    </div>
    <hr class="divider_type_3 m_bottom_45">
    <!--comments-->
    <?php if ($comment == COMMENT_NODE_OPEN) : ?>
        <?php  print render($content['comments']); ?>
    <?php endif; ?>
<?php endif;?>