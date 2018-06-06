<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
    <div class="d_table full_width d_xs_block">
        <div class="d_table_cell v_align_m d_xs_block m_xs_bottom_15">
            <h2 class="tt_uppercase color_dark">3 Column Portfolio</h2>
        </div>
        <div class="d_table_cell v_align_m t_align_r d_xs_block">
            <div class="custom_select relative color_dark portfolio_filter d_inline_b t_align_l d_xs_block">
                <div class="select_title type_2 r_corners relative mw_0">Sort Porfolio</div>
                <ul id="filter_portfolio" class="select_list d_none"></ul>
                <select>
                    <?php $taxonomy = taxonomy_vocabulary_machine_name_load('portfolio_categories');
                          $vid = taxonomy_get_tree($taxonomy->vid);
                            kpr($vid);die;
                    ?>
                    <option data-filter="*" value="All">All</option>
                    <option data-filter=".fashion" value="Fashion">Fashion</option>
                    <option data-filter=".portraits" value="Portraits">Portraits</option>
                    <option data-filter=".people" value="People">People</option>
                    <option data-filter=".cities" value="Cities">Cities</option>
                    <option data-filter=".nature" value="Nature">Nature</option>
                </select>
            </div>
        </div>
    </div>
<section class="portfolio_isotope_container three_columns">
<?php foreach ($rows as $id => $row): ?>
    <?php print $row; ?>
<?php endforeach; ?>
</section>