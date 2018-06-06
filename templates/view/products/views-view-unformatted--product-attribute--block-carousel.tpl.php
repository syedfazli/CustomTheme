<?php
/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="clearfix">
    <ul class="horizontal_list clearfix tt_uppercase isotope_menu f_size_ex_large f_left f_xs_none m_xs_bottom_15" data-carousel-filter=".wfilter_carousel">
        <li class="active m_right_5 m_bottom_10 m_xs_bottom_5 animate_ftr"><button class="button_type_2 bg_light_color_1 r_corners tr_delay_hover tt_uppercase box_s_none" data-filter="*"><?php print t('All'); ?></button></li>
        <?php foreach ($rows as $id => $row): ?>
            <li class="m_right_5 m_bottom_10 m_xs_bottom_5 animate_ftr">
                <?php print $row; ?>
            </li>
        <?php endforeach; ?>
    </ul>
    <div class="f_right clearfix nav_buttons_wrap f_mxs_none m_mxs_bottom_5 f_xs_none">
        <button class="button_type_7 bg_cs_hover box_s_none f_size_ex_large t_align_c bg_light_color_1 f_left tr_delay_hover r_corners wfilter_prev"><i class="fa fa-angle-left"></i></button>
        <button class="button_type_7 bg_cs_hover box_s_none f_size_ex_large t_align_c bg_light_color_1 f_left m_left_5 tr_delay_hover r_corners wfilter_next"><i class="fa fa-angle-right"></i></button>
    </div>
</div>