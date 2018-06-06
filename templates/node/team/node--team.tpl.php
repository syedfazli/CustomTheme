<?php
$single_image = ' ';
if (!empty($node->field_single_image['und'])) {
    $single_image = image_style_url("blog_latest_80x80", $node->field_single_image['und'][0]['uri']);
}

?>

<div class="a-wrapper">
    <img width="80px" height="80px" class="f_left m_right_20 m_sm_bottom_5" src="<?php print $single_image;?>" alt="">
    <div class="t-content">
        <?php if(isset($content['body'])): print render($content['body']); endif;?>
    </div>
</div>

