
<?php 
$image = ' ';
$full_image=' ';

$index = $view->row_index;


if(!empty($node->field_single_image['und'])){
    $full_image = $node->field_single_image['und'][0]['uri'];
}
$width = '';
$random = rand(1,3);
switch ($index) {
    case '0':
    case '5':
        $image = image_style_url('portfolio_image_438x314',$full_image);
        $width = 'm_width_1';
        break;
    case '1':
    case '3':
    case '6':
    case '8':
        $image = image_style_url('portfolio_image_303x132',$full_image);
        $width = 'm_width_2';
        break;
    case '2':
    case '4':
    case '7':
    case '9':
        $width = 'm_width_3';
        $image = image_style_url('portfolio_image_207x127',$full_image);
        break;
    default:
        # code...
        break;
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
$full_image_url = file_create_url($full_image);
$video = '';
if(!empty($node->field_video['und'])){
    $video = $node->field_video['und'][0]['value'];
}
?>
<div class="portfolio_item t_xs_align_c <?php print $category;?> <?php print $width;?>">
    <figure class="d_xs_inline_b d_mxs_block">
        <div class="photoframe with_buttons relative shadow r_corners wrapper">
            <img style="max-height: 346px"  src="<?php print $image;?>" alt="" class="tr_all_long_hover">
            <div class="open_buttons clearfix">
                <?php if(!empty($node->field_video['und'])):?>
                <div class="f_left f_size_large tr_all_hover"><a href="<?php print $video;?>" data-thumbnail="<?php print $full_image_url; ?>  " role="button" class="color_light button_type_13 r_corners box_s_none d_block jackbox" data-group="portfolio" data-title="<?php print $title;?>"><i class="fa fa-video-camera"></i></a></div>
                <?php else:?>
                <div class="f_left f_size_large tr_all_hover"><a href="<?php print $full_image_url;?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block jackbox" data-group="portfolio" data-title="<?php print $title; ?>"><i class="fa fa-camera"></i></a></div>
                <?php endif;?>

                <div class="f_left m_left_10 f_size_large tr_all_hover">
                    <a href="<?php print $node_url;?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block"><i class="fa fa-link"></i></a>
                </div>
            </div>
        </div>
    </figure>
</div>
