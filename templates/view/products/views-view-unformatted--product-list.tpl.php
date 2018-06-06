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

<?php if(isset($_GET['mode']) && $_GET['mode'] == 'list') : ?>
	<section class="products_container list_type clearfix m_bottom_5 m_left_0 m_right_0">
		<?php foreach ($rows as $id => $row): ?>
			<?php print $row; ?>
		<?php endforeach; ?>
	</section>
<?php else :?>
	<section class="products_container category_grid clearfix m_bottom_15">
		<?php foreach ($rows as $id => $row): ?>
			<?php print $row; ?>
		<?php endforeach; ?>
	</section>
<?php endif; ?>

