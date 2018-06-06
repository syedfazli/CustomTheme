<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */

$iframe = '';
if(!empty($row->field_field_video) && isset($fields['field_video'])){
    $iframe = $row->field_field_video[0]['raw']['value'];
}
global $base_url
?>
    <figure class="d_xs_inline_b d_mxs_block">
        <div class="photoframe with_buttons relative shadow r_corners wrapper m_bottom_15">
            <?php if(isset($fields['field_single_image'])):?>
            <img src="<?php print strip_tags($fields['field_single_image']->content);?>" class="tr_all_long_hover">
            <?php endif;?>
            <div class="open_buttons clearfix">
                <?php if(!empty($row->field_field_video) && isset($fields['field_video'])):?>
                    <div class="f_left f_size_large tr_all_hover"><a href="<?php print $iframe;?>" data-thumbnail="<?php print strip_tags($fields['field_single_image_1']->content);?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block jackbox" data-group="portfolio" data-title="<?php print $row->node_title;?>"><i class="fa fa-video-camera"></i></a></div>
                <?php else:?>
                    <div class="f_left f_size_large tr_all_hover"><a href="<?php print strip_tags($fields['field_single_image_1']->content);?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block jackbox" data-group="portfolio" data-title="<?php print $row->node_title;?>"><i class="fa fa-camera"></i></a></div>
                <?php endif;?>
                <div class="f_left m_left_10 f_size_large tr_all_hover"><a href="<?php print $base_url.'/'.drupal_get_path_alias('node/'.$row->nid);?>" role="button" class="color_light button_type_13 r_corners box_s_none d_block"><i class="fa fa-link"></i></a></div>
            </div>
        </div>
        <figcaption class="t_xs_align_l">
                <?php if(isset($fields['title'])): print $fields['title']->content; endif;?>
                <?php if(isset($fields['field_portfolio_categories'])): print $fields['field_portfolio_categories']->content; endif;?>
        </figcaption>
    </figure>


<?php unset($fields['title']);?>
<?php unset($fields['field_portfolio_categories']);?>
<?php unset($fields['field_single_image']);?>
<?php unset($fields['field_single_image_1']);?>
<?php unset($fields['field_video']);?>

<?php foreach ($fields as $id => $field): ?>
    <?php if (!empty($field->separator)): ?>
        <?php print $field->separator; ?>
    <?php endif; ?>
    <?php print $field->wrapper_prefix; ?>
    <?php print $field->label_html; ?>
    <?php print $field->content; ?>
    <?php print $field->wrapper_suffix; ?>
<?php endforeach; ?>