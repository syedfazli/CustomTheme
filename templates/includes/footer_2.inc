
<footer id="footer" class="type_2">
    <div class="footer_top_part">
        <?php if ($page['footer_top']):?>
            <div class="container t_align_c m_bottom_20 f-style-1 f-style-social">
                <?php print render($page['footer_top']);?>
            </div>
            <hr class="divider_type_4 m_bottom_50">
        <?php endif; ?>
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-6 m_xs_bottom_30 a-style">
                    <?php if ($page['footer_1']) : print render($page['footer_1']); endif; ?>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-6 m_xs_bottom_30">
                    <?php if ($page['footer_2']) : print render($page['footer_2']); endif; ?>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 m_xs_bottom_30">
                    <?php if ($page['footer_3']) : print render($page['footer_3']); endif; ?>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 m_xs_bottom_30">
                    <?php if ($page['footer_4']) : print render($page['footer_5']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4">
                    <?php if ($page['footer_5']) : print render($page['footer_6']); endif; ?>
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