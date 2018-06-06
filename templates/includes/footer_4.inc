<footer id="footer">
    <div class="footer_top_part">
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 m_bottom_40">
                    <?php if ($page['footer_1']) : print render($page['footer_1']); endif; ?>

                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 m_bottom_40">
                    <?php if ($page['footer_7']) : print render($page['footer_7']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 m_bottom_40">
                    <?php if ($page['footer_4']) : print render($page['footer_4']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 m_bottom_40">
                    <?php if ($page['footer_6']) : print render($page['footer_6']); endif; ?>
                </div>
            </div>
        </div>
        <hr class="divider_type_4 m_bottom_50 m_xs_bottom_30">
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_2']) : print render($page['footer_2']); endif; ?>

                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_3']) : print render($page['footer_3']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_5']) : print render($page['footer_5']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
                    <?php if ($page['footer_top']) : print render($page['footer_top']); endif; ?>
                </div>
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