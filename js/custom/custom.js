
jQuery(document).ready(function() {
    // Add class contact form
    jQuery('.contact-form .form-text,.contact-form .form-textarea').addClass('f_size_medium m_bottom_10 r_corners full_width');
    jQuery('.contact-form .form-submit').addClass('m-top-20 button_type_4 r_corners mw_0 tr_all_hover color_dark bg_light_color_2');

    // Add class newsletter form
    jQuery('.block-newsletter .form-submit').addClass('m-top-20 button_type_8 r_corners bg_scheme_color color_light tr_all_hover');
    
    //Add class menu
    jQuery('.main_menu .active').parent().addClass('current');
    jQuery('.main_menu .active').removeClass('active');

    var container = jQuery('.slider-revolution');
    container.find('.tp-leftarrow').append('<i class="fa fa-angle-left"></i>');
    container.find('.tp-rightarrow').append('<i class="fa fa-angle-right"></i>');

    // Out of Stock
    jQuery('.out-of-stock').val('Out of Stock');
	
	jQuery('.pager-load-more .next a').html('Load More');



  /*  jQuery('.qv_carousel_single a.p-img img').click(function(){
        var src = jQuery(this).attr('src');
        jQuery('.qv_preview img').attr('src',src);
    });*/

    
});

function viewCarousel(quick_view_product_id){
//    alert(quick_view_product_id);
    var pr = jQuery('#'+quick_view_product_id+' .qv_preview > img');
//    $('.popup_wrap .qv_carousel').on('click','li:not(.active)',function(){
            jQuery(this).addClass('active').parent().siblings().children('li').removeClass('active');
            var src = jQuery(this).data('src');
            if(!(jQuery('html').hasClass('ie9'))){
                    pr.addClass('hide');
                    setTimeout(function(){
                            pr.attr('src',src).removeClass('hide');
                    },400);
            }else{
                    pr.attr('src',src);
            }
            jQuery('#'+quick_view_product_id+' [class*="qv_carousel"]').each(function(){
                    var pr = jQuery(this).closest('.qv_carousel_wrap').prev('.qv_preview').children('img');
                    jQuery(this).on('click','li',function(){
                            var src = jQuery(this).data('src');
                            if(!(jQuery('html').hasClass('ie9'))){
                                    pr.addClass('hide');
                                    setTimeout(function(){
                                            pr.attr('src',src).removeClass('hide');
                                    },400);
                            }else{
                            pr.attr('src',src);
                            }
                    });
            });
//    });
}
(function($){
    $(document).ready(function(){

        $('#block-menu-menu-taxonomy-menu .categories_list > li:first-child > a').click();
        $('.view-product-interior-style-2 .views-row-even .col-sm-6:first-child').addClass('col-sm-push-6');
        $('.view-product-interior-style-2 .views-row-even .col-sm-6:last-child').addClass('col-sm-pull-6');
        //Scrool To
        $('nav#navigation-onepage a[href*=#]:not([href=#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('.sect_' + this.hash.slice(1));
                if (target.length) {
                    var scrollto = target.offset().top - 170;
                    $('html,body').animate({
                        scrollTop: scrollto
                    }, 1000);
                    return false;
                }
            }
        });
        $('.contact-wrapper .align-center a[href*=#]:not([href=#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('.sect_' + this.hash.slice(1));
                if (target.length) {
                    var scrollto = target.offset().top - 170;
                    $('html,body').animate({
                        scrollTop: scrollto
                    }, 1000);
                    return false;
                }
            }
        });
        var stickyNavTop = $('body').offset().top;
        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop && !$('.h-onepage').hasClass('fixed_header')) {
                $('.op-header').addClass('fixed_header');
                $('.h_top').addClass('fixed_header');

            } else if (scrollTop <= stickyNavTop + 15) {
                $('.h_top').removeClass('fixed_header');
                $('.op-header').removeClass('fixed_header');
            }
        };

        if ($('.h-onepage').length > 0) {
            $(window).scroll(function () {
                stickyNav();
            });
        }
        $('.navigation-onepage a').on('click', function() {
            $('.navigation-onepage a').removeClass('current');
            $(this).addClass('current');

        });
//reponsive menu onepage
        $('.b-onepage').click(function(){
            $('.navigation-onepage').toggle(800);
            $(this).toggleClass('active');

        })



    })


})(jQuery);
