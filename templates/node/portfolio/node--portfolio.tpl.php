<?php
global $theme_root;
global $base_url;

$image = array();
if(!empty($node->field_multiple_images['und'])){
    $image = $node->field_multiple_images['und'];
}
$layout_mode = '';
if(isset($content['field_portfolio_layout_mode'])){
    $layout_mode = $content['field_portfolio_layout_mode']['#items'][0]['value'];
}

$single_image = ' ';
if(!empty($node->field_single_image['und'])){
    $single_image = image_style_url('blog_list', $node->field_single_image['und'][0]['uri']);
}
?>
<?php if(!$page):?>
    <article class="m_bottom_20 clearfix">
        <a href="#" class="photoframe d_block d_xs_inline_b f_xs_none wrapper shadow f_left m_right_20 m_bottom_10 r_corners">
            <img width="350px" height="220px" src="<?php print $single_image;?>" class="tr_all_long_hover" alt="">
        </a>
        <div class="mini_post_content">
            <h4 class="m_bottom_5"><a href="<?php print $node_url?>" class="color_dark fw_medium"><?php print $title;?></a></h4>
            <p class="f_size_medium m_bottom_10"><?php print format_date($node->created,'custom','F j, Y');?>, on <?php print flatastic_format_comma_field('field_portfolio_categories', $node); ?></p>
            <hr>
            <hr class="m_bottom_15">
            <p class="m_bottom_10"><?php if(isset($content['body'])): print render($content['body']); endif;?></p>
            <a href="<?php print $node_url;?>" class="tt_uppercase f_size_large"><?php print t('Read More');?></a>
        </div>
    </article>
    <hr class="divider_type_3 m_bottom_30">
<?php else:?>


    <?php if($layout_mode == 'style_1'):?>
        <div class="page_content_offset">
        <div class="container">
        <div class="d_table full_width d_xs_block m_bottom_25">
            <div class="d_table_cell v_align_m d_xs_block m_xs_bottom_15">
                <h2 class="tt_uppercase color_dark"><?php print $title;?></h2>
            </div>
            <div class="d_table_cell v_align_m t_align_r d_xs_block">
                <div class="d_inline_b d_xs_block clearfix">
                    <?php if(isset($content['flippy_pager']['#list']['prev']) && $content['flippy_pager']['#list']['prev'] != False):?>
                        <a href="<?php print $base_url.'/'.drupal_get_path_alias('node/'.$content['flippy_pager']['#list']['prev']['nid']);?>" class="button_type_7 bg_light_color_1 color_dark tr_delay_hover r_corners mw_0 box_s_none bg_cs_hover f_left d_inline_b f_size_large t_align_c vc_child"><i class="fa fa-angle-left m_left_0 m_right_0 d_inline_middle"></i></a>
                    <?php endif;?>
                    <button class="button_type_7 bg_light_color_1 color_dark tr_delay_hover r_corners mw_0 box_s_none bg_cs_hover f_left m_left_5"><i class="fa fa-th m_left_0 m_right_0"></i></button>
                    <?php if(isset($content['flippy_pager']['#list']['next']) && $content['flippy_pager']['#list']['next'] != False):?>
                        <a href="<?php print $base_url.'/'.drupal_get_path_alias('node/'.$content['flippy_pager']['#list']['next']['nid']);?>" class="button_type_7 bg_light_color_1 color_dark tr_delay_hover r_corners mw_0 box_s_none bg_cs_hover f_left d_inline_b vc_child f_size_large t_align_c m_left_5"><i class="fa fa-angle-right m_left_0 m_right_0 d_inline_middle"></i></a>
                    <?php endif;?>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <section class="col-lg-8 col-md-8 col-sm-8">
                <?php  for($i=0; $i<count($image); $i++):
                    $image_url = file_create_url($image[$i]['uri']);
                    ?>
                    <div class="photoframe r_corners shadow wrapper m_bottom_30 <?php if($i == count($image)-1){ echo 'm_bottom_45'; } ?>">
                        <img src="<?php print $image_url;?>" alt="" class="tr_all_long_hover">
                    </div>
                <?php endfor;?>
            </section>
            <aside class="col-lg-4 col-md-4 col-sm-4 m_xs_bottom_30">
                <h5 class="fw_medium m_bottom_10"><?php print t('About Portfolio');?></h5>
                <?php if(isset($content['body'])): ?>
                <div class="m_bottom_15">
                     <?php print render($content['body']); ?> 
                </div>
                <?php endif;?>
                <table class="about_project full_width m_bottom_10">
                    <tr>
                        <td><?php print t('Date:')?></td>
                        <td><?php print format_date($node->created,'custom','F j, Y');?></td>
                    </tr>
                    <?php if(isset($content['field_client'])):?>
                        <tr>
                            <td><?php print t('Client:');?></td>
                            <td><?php print render($content['field_client']);?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_services'])):?>
                        <tr>
                            <td><?php print t('Services:');?></td>
                            <td><?php print render($content['field_services']);?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_skills'])):?>
                        <tr>
                            <td><?php print t('Skills:');?></td>
                            <td><?php print render($content['field_skills']); ?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_portfolio_categories'])):?>
                        <tr>
                            <td><?php print t('Category:');?></td>
                            <td><?php print render($content['field_portfolio_categories']);?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_tag'])):?>
                        <tr>
                            <td><?php print t('Tags:');?></td>
                            <td><?php print render($content['field_tag']);?></td>
                        </tr>
                    <?php endif;?>
                </table>
                <a href="<?php print $base_url.'/portfolio-two-columns';?>" class="color_dark fw_medium d_inline_b m_bottom_25"><i class="fa fa-external-link d_inline_middle m_right_10"></i><?php print t('Launch Project');?></a><br>
                <p class="d_inline_middle m_md_bottom_5"><?php print t('Share this:');?></p>
                <div class="d_inline_middle m_left_5 m_md_left_0 addthis_widget_container">
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
            </aside>
        </div>
            <?php print views_embed_view('related_portfolio','block_related',$node->nid);?>
        </div>
        </div>
    <?php elseif($layout_mode == 'style_2'):?>
        <!--slider-->
        <div class="flexslider portfolio">
            <ul class="slides">
                <?php for($i=0; $i<count($image); $i++): ?>
                    <li>
                        <img width="1356px" height="342px" src="<?php print image_style_url('portfolio_image_1356x342',$image[$i]['uri']);?>" alt="" 
                        <?php if($i==count($image)-1): ?>
                            data-custom-thumb="<?php print image_style_url('portfolio_image_1356x342',$image[0]['uri']);?>"
                        <?php else: ?>
                            data-custom-thumb="<?php print image_style_url('portfolio_image_1356x342',$image[$i+1]['uri']);?>"
                        <?php endif;?>


                        >
                    </li>
                <?php endfor;?>
            </ul>
        </div>
        <div class="page_content_offset">
        <div class="container">
        <div class="d_table full_width d_xs_block m_bottom_15">
            <div class="d_table_cell v_align_m d_xs_block m_xs_bottom_15">
                <h2 class="tt_uppercase color_dark"><?php print $title;?></h2>
            </div>
            <div class="d_table_cell v_align_m t_align_r d_xs_block">
                <div class="d_inline_b d_xs_block clearfix">
                    <?php if(isset($content['flippy_pager']['#list']['prev']) && $content['flippy_pager']['#list']['prev'] != False):?>
                        <a href="<?php print $base_url.'/'.drupal_get_path_alias('node/'.$content['flippy_pager']['#list']['prev']['nid']);?>" class="button_type_7 bg_light_color_1 color_dark tr_delay_hover r_corners mw_0 box_s_none bg_cs_hover f_left d_inline_b f_size_large t_align_c vc_child"><i class="fa fa-angle-left m_left_0 m_right_0 d_inline_middle"></i></a>
                    <?php endif;?>
                    <button class="button_type_7 bg_light_color_1 color_dark tr_delay_hover r_corners mw_0 box_s_none bg_cs_hover f_left m_left_5"><i class="fa fa-th m_left_0 m_right_0"></i></button>
                    <?php if(isset($content['flippy_pager']['#list']['next']) && $content['flippy_pager']['#list']['next'] != False):?>
                        <a href="<?php print $base_url.'/'.drupal_get_path_alias('node/'.$content['flippy_pager']['#list']['next']['nid']);?>" class="button_type_7 bg_light_color_1 color_dark tr_delay_hover r_corners mw_0 box_s_none bg_cs_hover f_left d_inline_b vc_child f_size_large t_align_c m_left_5"><i class="fa fa-angle-right m_left_0 m_right_0 d_inline_middle"></i></a>
                    <?php endif;?>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <section class="col-lg-8 col-md-8 col-sm-8 m_bottom_50">
                <h5 class="fw_medium m_bottom_10"><?php print t('About Portfolio');?></h5>
                <?php if(isset($content['body'])): ?>
                <div class="m_bottom_15">
                     <?php print render($content['body']); ?> 
                </div>
                <?php endif;?>
                <a href="<?php print $base_url.'/portfolio-two-columns';?>" class="color_dark fw_medium d_inline_b m_bottom_20"><i class="fa fa-external-link d_inline_middle m_right_10"></i><?php print t('Launch Project');?></a><br>
                <p class="d_inline_middle m_md_bottom_5"><?php print t('Share this:');?></p>
                <div class="d_inline_middle m_left_5 m_md_left_0 addthis_widget_container">
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
            </section>
            <aside class="col-lg-4 col-md-4 col-sm-4 m_xs_bottom_30">

                <table class="about_project full_width m_bottom_10">
                    <tr>
                        <td><?php print t('Date:')?></td>
                        <td><?php print format_date($node->created,'custom','F j, Y');?></td>
                    </tr>
                    <?php if(isset($content['field_client'])):?>
                        <tr>
                            <td><?php print t('Client:');?></td>
                            <td><?php print render($content['field_client']);?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_services'])):?>
                        <tr>
                            <td><?php print t('Services:');?></td>
                            <td><?php print render($content['field_services']);?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_skills'])):?>
                        <tr>
                            <td><?php print t('Skills:');?></td>
                            <td><?php print render($content['field_skills']); ?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_portfolio_categories'])):?>
                        <tr>
                            <td><?php print t('Category:');?></td>
                            <td><?php print render($content['field_portfolio_categories']);?></td>
                        </tr>
                    <?php endif;?>
                    <?php if(isset($content['field_tag'])):?>
                        <tr>
                            <td><?php print t('Tags:');?></td>
                            <td><?php print render($content['field_tag']);?></td>
                        </tr>
                    <?php endif;?>
                </table>
            </aside>
        </div>
            <?php if($page['content_bottom']):?>
                <?php print render($page['content_bottom']);?>
            <?php endif;?>
            <?php print views_embed_view('related_portfolio','block_related',$node->nid);?>
        </div>
        </div>

        </div>
        </div>
    <?php endif;?>


<?php endif;?>