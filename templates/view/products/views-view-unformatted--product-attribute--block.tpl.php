<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<ul class="horizontal_list clearfix tt_uppercase isotope_menu f_size_ex_large">
    <li class="active m_right_5 m_bottom_10 m_xs_bottom_5 animate_ftr">
        <button class="button_type_2 bg_light_color_1 r_corners tr_delay_hover tt_uppercase box_s_none" data-filter="*"><?php print t('All'); ?></button>
    </li>
<?php foreach ($rows as $id => $row): ?>
    <li class="m_right_5 m_bottom_10 m_xs_bottom_5 animate_ftr">
            <?php print $row; ?>
    </li>
<?php endforeach; ?>
    <li class="m_right_5 m_bottom_10 m_xs_bottom_5 animate_ftr"><button class="button_type_2 bg_light_color_1 r_corners tr_delay_hover tt_uppercase box_s_none" data-filter=".random"><?php print t('Random'); ?></button></li>
</ul>

