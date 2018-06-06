<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<section class="products_container clearfix m_bottom_25 m_sm_bottom_15">
<?php foreach ($rows as $id => $row): ?>
  <!--<div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>-->
    <?php print $row; ?>
  <!--</div>-->
<?php endforeach; ?>
</section>
