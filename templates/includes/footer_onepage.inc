<footer id="footer" class="type_2">
    <div class="footer_top_part p_vr_0">
        <div class="container">
            <div class="t_align_c m_bottom_20 f-style-1">
                <?php if($page['footer_top']):?>
                    <?php print render($page['footer_top']);?>
                <?php endif;?>
            </div>
        </div>
        <hr class="divider_type_4 m_bottom_50">
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_7']) : print render($page['footer_7']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_2']) : print render($page['footer_2']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_8']) : print render($page['footer_8']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_4']) : print render($page['footer_4']); endif; ?>
                </div>
            </div>
        </div></div>
    <!--copyright part-->
    <div class="footer_bottom_part">
        <div class="container clearfix t_mxs_align_c">
            <?php
            if ($page['footer_bottom']) :
                print render($page['footer_bottom']);
            endif;
            ?>
        </div>
    </div>
</footer>