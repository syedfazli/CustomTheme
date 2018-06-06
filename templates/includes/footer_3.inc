
<footer id="footer" class="f-st-3">
    <div class="footer_top_part">
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 m_bottom_40 ">
                    <?php if ($page['footer_1']) : print render($page['footer_1']); endif; ?>

                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 m_bottom_40">
                    <?php if ($page['footer_2']) : print render($page['footer_2']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 m_bottom_40">
                    <?php if ($page['footer_3']) : print render($page['footer_3']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_bottom_40 m_xs_bottom_30">
                    <?php if ($page['footer_5']) : print render($page['footer_5']); endif; ?>
                </div>
            </div>
        </div>
        <?php if($page['footer_top'] || $page['footer_4']):?>
            <hr class="divider_type_4 m_bottom_25">
        <?php endif;?>
        <div class="container ">
            <div class="row clearfix">
                <?php if($page['footer_top']):?>
                    <div class="col-lg-6 col-md-6 col-sm-6 m_bottom_20 m_xs_bottom_10 f-style-1 f-style-social">
                        <?php print render($page['footer_top']);?>
                    </div>
                <?php endif;?>
                <?php if($page['footer_4']):?>
                    <div class="col-lg-6 col-md-6 col-sm-6 m_bottom_20 m_xs_bottom_30 f-style-3">
                        <?php print render($page['footer_4']);?>
                    </div>
                <?php endif;?>
            </div>
        </div>
    </div>

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