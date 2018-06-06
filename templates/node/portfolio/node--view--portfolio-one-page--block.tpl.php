<?php
$image = ' ';
if(!empty($node->field_single_image['und'])){
    $image = $node->field_single_image['und'][0]['uri'];
}
$tid = '';
if($node->field_portfolio_categories['und']){
    $tid = $node->field_portfolio_categories['und'];
}
$category = '';
foreach($tid as $key => $value){
    $vid = taxonomy_term_load($value['tid']);
    $name = strtolower($vid->name);
    $category .= $name.' ';
}
$video = '';
if(!empty($node->field_video['und'])){
    $video = $node->field_video['und'][0]['value'];
}
?>
<div class="portfolio_item t_xs_align_c <?php print $category;?>">
    <figure class="d_xs_inline_b d_mxs_block">
        <div class="photoframe with_buttons relative shadow r_corners wrapper m_bottom_15">
            <img width="340px" height="210px" src="<?php print image_style_url('portfolio_image_340x210',$image);?>" alt="" class="tr_all_long_hover">
            <div class="open_buttons clearfix">
                <?php if(!empty($node->field_video['und'])):?>
                <div class="f_left f_size_large tr_all_hover"><a href="<?php print $video;?>" data-thumbnail="<?php print file_create_url($image);?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block jackbox" data-group="portfolio" data-title="<?php print $title;?>"><i class="fa fa-video-camera"></i></a></div>
                <?php else:?>
                <div class="f_left f_size_large tr_all_hover"><a href="<?php print file_create_url($image);?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block jackbox" data-group="portfolio" data-title="<?php print $title; ?>"><i class="fa fa-camera"></i></a></div>
                <?php endif;?>
                <div class="f_left m_left_10 f_size_large tr_all_hover"><a href="<?php print $node_url;?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block"><i class="fa fa-link"></i></a></div>
            </div>
        </div>
        <figcaption class="t_xs_align_l">
            <h4 class="m_bottom_3"><a href="<?php print drupal_get_path_alias('node/'.$node->nid);?>" class="color_dark"><b><?php print $node->title;?></b></a></h4>
            <div class="c-category">
                <?php if(isset($content['field_portfolio_categories'])): print render($content['field_portfolio_categories']); endif;?>
            </div>
        </figcaption>
    </figure>
</div>
<?php drupal_get_path_alias()?>
