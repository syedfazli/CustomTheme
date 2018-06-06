<?php 
    global $theme_root; 
    $curr_uri = request_uri();
?>


<div id="styleswitcher" class="bg_light_color_3 shadow">
    <button class="color_light open_sw"><i class="fa fa-cogs"></i></button>
    <h3 class="color_dark m_bottom_20">Style Switcher</h3>
    <p class="m_bottom_5">Layout type</p>
    <div class="clearfix m_bottom_15">
        <button data-layout="wide" class="f_left bg_light_color_1 button_type_4 r_corners tr_all_hover box_s_none mw_0 f_size_medium layout_wide"><?php print t('WIDE');?></button>
        <button data-layout="boxed" class="f_left m_left_5 bg_light_color_1 button_type_4 r_corners tr_all_hover box_s_none mw_0 f_size_medium layout_boxed"><?php print t('BOXED');?></button>
    </div>
    <p class="m_bottom_5">Header style</p>
    <div class="custom_select relative f_size_medium m_bottom_15">
        <div class="select_title type_2 r_corners relative mw_0">Header 1</div>
        <ul class="select_list d_none"></ul>
        <select name="header_type">
            <option <?php if(isset($_GET['header']) && $_GET['header'] == 'header_1') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['header']) && !empty($_GET['header'])) { echo str_replace($_GET['header'], 'header_1', $curr_uri); } elseif(empty($_GET['footer']) && empty($_GET['layout'])) { echo $curr_uri.'?header=header_1'; } else { echo $curr_uri.'&header=header_1'; } ?>">Header 1</option>
            <option <?php if(isset($_GET['header']) && $_GET['header'] == 'header_2') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['header']) && !empty($_GET['header'])) { echo str_replace($_GET['header'], 'header_2', $curr_uri); } elseif(empty($_GET['footer']) && empty($_GET['layout'])) { echo $curr_uri.'?header=header_2'; } else { echo $curr_uri.'&header=header_2'; } ?>">Header 2</option>
            <option <?php if(isset($_GET['header']) && $_GET['header'] == 'header_3') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['header']) && !empty($_GET['header'])) { echo str_replace($_GET['header'], 'header_3', $curr_uri); } elseif(empty($_GET['footer']) && empty($_GET['layout'])) { echo $curr_uri.'?header=header_3'; } else { echo $curr_uri.'&header=header_3'; } ?>">Header 3</option>
            <option <?php if(isset($_GET['header']) && $_GET['header'] == 'header_4') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['header']) && !empty($_GET['header'])) { echo str_replace($_GET['header'], 'header_4', $curr_uri); } elseif(empty($_GET['footer']) && empty($_GET['layout'])) { echo $curr_uri.'?header=header_4'; } else { echo $curr_uri.'&header=header_4'; } ?>">Header 4</option>
            <option <?php if(isset($_GET['header']) && $_GET['header'] == 'header_5') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['header']) && !empty($_GET['header'])) { echo str_replace($_GET['header'], 'header_5', $curr_uri); } elseif(empty($_GET['footer']) && empty($_GET['layout'])) { echo $curr_uri.'?header=header_5'; } else { echo $curr_uri.'&header=header_5'; } ?>">Header 5</option>
        </select>
    </div>
    <p class="m_bottom_5">Footer style</p>
    <div class="custom_select relative f_size_medium m_bottom_15">
        <div class="select_title type_2 r_corners relative mw_0">Footer 1</div>
        <ul class="select_list d_none"></ul>
        <select name="footer_type">
            <option <?php if(isset($_GET['footer']) && $_GET['footer'] == 'footer_1') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['footer']) && !empty($_GET['footer'])) { echo str_replace($_GET['footer'], 'footer_1', $curr_uri); } elseif(empty($_GET['header']) && empty($_GET['layout'])) { echo $curr_uri.'?footer=footer_1'; } else { echo $curr_uri.'&footer=footer_1'; } ?>">Footer 1</option>
            <option <?php if(isset($_GET['footer']) && $_GET['footer'] == 'footer_2') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['footer']) && !empty($_GET['footer'])) { echo str_replace($_GET['footer'], 'footer_2', $curr_uri); } elseif(empty($_GET['header']) && empty($_GET['layout'])) { echo $curr_uri.'?footer=footer_2'; } else { echo $curr_uri.'&footer=footer_2'; } ?>">Footer 2</option>
            <option <?php if(isset($_GET['footer']) && $_GET['footer'] == 'footer_3') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['footer']) && !empty($_GET['footer'])) { echo str_replace($_GET['footer'], 'footer_3', $curr_uri); } elseif(empty($_GET['header']) && empty($_GET['layout'])) { echo $curr_uri.'?footer=footer_3'; } else { echo $curr_uri.'&footer=footer_3'; } ?>">Footer 3</option>
            <option <?php if(isset($_GET['footer']) && $_GET['footer'] == 'footer_4') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['footer']) && !empty($_GET['footer'])) { echo str_replace($_GET['footer'], 'footer_4', $curr_uri); } elseif(empty($_GET['header']) && empty($_GET['layout'])) { echo $curr_uri.'?footer=footer_4'; } else { echo $curr_uri.'&footer=footer_4'; } ?>">Footer 4</option>
            <option <?php if(isset($_GET['footer']) && $_GET['footer'] == 'footer_5') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['footer']) && !empty($_GET['footer'])) { echo str_replace($_GET['footer'], 'footer_5', $curr_uri); } elseif(empty($_GET['header']) && empty($_GET['layout'])) { echo $curr_uri.'?footer=footer_5'; } else { echo $curr_uri.'&footer=footer_5'; } ?>">Footer 5</option>
            <option <?php if(isset($_GET['footer']) && $_GET['footer'] == 'footer_6') { echo 'selected="selected"'; } ?> value="<?php if(isset($_GET['footer']) && !empty($_GET['footer'])) { echo str_replace($_GET['footer'], 'footer_6', $curr_uri); } elseif(empty($_GET['header']) && empty($_GET['layout'])) { echo $curr_uri.'?footer=footer_6'; } else { echo $curr_uri.'&footer=footer_6'; } ?>">Footer 6</option>
        </select>
    </div>
    <p class="m_bottom_5">Background for boxed layout</p>
    <div class="custom_select relative f_size_medium m_bottom_10">
        <div class="select_title type_2 r_corners relative mw_0">Color</div>
        <ul class="select_list d_none"></ul>
        <select name="bg_color">
            <option value="Image">Image</option>
            <option value="Color">Color</option>
        </select>
    </div>
    <div class="m_bottom_20 bg_select_color">
        <p class="d_inline_middle">Background :</p><button class="d_inline_middle r_corners m_left_10" id="select_color"></button>
    </div>
    <div class="m_bottom_20 bg_select_image d_none">
        <p class="d_inline_middle m_right_10 m_bottom_5">Background image:</p>
        <button class="d_inline_middle bg_image_button r_corners m_right_5 m_bottom_5" data-image="<?php echo $theme_root; ?>/images/patterns/item-3.png"></button>
        <button class="d_inline_middle bg_image_button r_corners m_right_5 m_bottom_5" data-image="<?php echo $theme_root; ?>/images/patterns/item-8.png"></button>
    </div>
    <button type="reset" class="button_type_4 r_corners tr_all_hover color_dark mw_0 bg_light_color_2">Reset</button>
</div>