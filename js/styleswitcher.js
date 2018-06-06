jQuery(window).on("load",function(){
	var sw = jQuery('#styleswitcher'),
		swB = sw.children('.open_sw'),
		layout = jQuery('[class*="_layout"]'),
		sc = jQuery('#select_color'),
		hSelect = jQuery('[name="header_type"]'),
		fSelect = jQuery('[name="footer_type"]'),
		bgSelect = jQuery('select[name="bg_color"]'),
		color = jQuery('.bg_select_color'),
		image = jQuery('.bg_select_image'),
		bgImagebutton = jQuery('.bg_image_button'),
		reset = sw.find('button[type="reset"]');

	var t = setTimeout(function(){
		sw.addClass('closed');	
		clearTimeout(t);
		sw.trigger('open/close');
	},700);

	sw.on('open/close',function(){
		var $this = jQuery(this);
		swB.on('click',function(){
			$this.toggleClass('closed');
		});
	});

	sc.ColorPicker({
		color: '#232830',
		onShow: function (colpkr){
			jQuery(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			jQuery(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb){
			jQuery('body').css('background-image','none');
			jQuery('#select_color,body').css('backgroundColor', '#' + hex);
		}
	});

	sw.find('[data-layout]').on('click',function(){
		var self = jQuery(this),
		data = self.data('layout');
		self.addClass('active').siblings('[data-layout]').removeClass('active');
		if(!(self.hasClass('homepage'))){
			switch(data){
				case "wide" :
				 if(layout.hasClass('wide_layout')){
				 	break;
				 }else{
				 	layout.removeClass('boxed_layout').addClass('wide_layout');
				 	jQuery('#go_to_top').addClass('type_2');
				 }
			 	break;
			 	case "boxed" :
			 		if(layout.hasClass('boxed_layout')){
				 		break;
					}else{
						layout.removeClass('wide_layout').addClass('boxed_layout');
						jQuery('#go_to_top').removeClass('type_2');
					}
			 	break;
			}
		}else{
			switch(data){
				case "wide" :
				 	window.location.href = "index_layout_wide.html"
			 	break;
			 	case "boxed" :
			 		window.location.href = "index.html"
			 	break;
			}
		}
	});

	jQuery('.select_list').each(function(){

		var t = jQuery(this).prev('.select_title').text();
		jQuery(this).find('li').each(function(){
			var self = jQuery(this);
			if(self.text() == t){
				self.addClass('active');
			}
		});

	});

	hSelect.prev('.select_list').on('click','li:not(.active)',function(){
		var val = jQuery(this).text(),
			h = jQuery('[role="banner"]');

		jQuery(this).addClass('active').siblings().removeClass('active');

		var pathname = window.location.pathname;
        console.log(pathname);

		switch(val){
			case "Header 1" :
				document.location = pathname+'?header=header_1'
				break;
			case "Header 2" :
				document.location = pathname+'?header=header_2'
				break;
			case "Header 3" :
				document.location = pathname+'?header=header_3'
				break;
			case "Header 4" :
				document.location = pathname+'?header=header_4'
				break;
            case "Header 5" :
                document.location = pathname+'?header=header_5'
                break;
			default:
				break;
		}

		// 

		/*
		h.slideUp(function(){
			jQuery(this).html("");
			switch(val){
				case "Header 1" : 
					h.load('inc/header_1.html',function(){
						jQuery(this).removeClass('type_4 type_5').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
				case "Header 2" : 
					h.load('inc/header_2.html',function(){
						jQuery(this).removeClass('type_4').addClass('type_5').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
				case "Header 3" : 
					h.load('inc/header_3.html',function(){
						jQuery(this).removeClass('type_4 type_5').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
				case "Header 4" : 
					h.load('inc/header_4.html',function(){
						jQuery(this).removeClass('type_5').addClass('type_4').slideDown();
						window.sticky();
						jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
						jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
						window.rmenu();
					});
				break;
			}
		});
		*/

	});


	fSelect.prev('.select_list').on('click','li:not(.active)',function(){
		var val = jQuery(this).text(),
			h = jQuery('.footer_top_part'),
			body = jQuery('html,body');

		jQuery(this).addClass('active').siblings().removeClass('active');
        var pathname = window.location.pathname;
        console.log(pathname);

        switch(val){

            case "Footer 1" :
                document.location = pathname+'?footer=footer_1#footer';
                break;
            case "Footer 2" :
                document.location = pathname+'?footer=footer_2#footer';
                break;
            case "Footer 3" :
                document.location = pathname+'?footer=footer_3#footer';
                break;
            case "Footer 4" :
                document.location = pathname+'?footer=footer_4#footer';
                break;
            case "Footer 5" :
                document.location = pathname+'?footer=footer_5#footer';
                break;
            case "Footer 6" :
                document.location = pathname+'?footer=footer_6#footer';
                break;
            default:
                break;
        }
		/*h.slideUp(function(){
			jQuery(this).html("");
			switch(val){
				case "Footer 1" : 
					h.load('inc/footer_1.html',function(){
						jQuery(this).removeClass('p_vr_0').closest('#footer').removeClass('type_2');
						jQuery(this).slideDown();
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 2" : 
					h.load('inc/footer_2.html',function(){
						jQuery(this).removeClass('p_vr_0').closest('#footer').addClass('type_2');
						jQuery(this).slideDown();
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 3" : 
					h.load('inc/footer_3.html',function(){
						jQuery(this).addClass('p_vr_0').closest('#footer').removeClass('type_2');
						jQuery(this).slideDown();
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 4" : 
					h.load('inc/footer_4.html',function(){
						jQuery(this).removeClass('p_vr_0').slideDown().closest('#footer').removeClass('type_2');
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
				case "Footer 5" : 
					h.load('inc/footer_5.html',function(){
						jQuery(this).addClass('p_vr_0').slideDown().closest('#footer').addClass('type_2');
						body.animate({ scrollTop : jQuery(document).height() });
					});
				break;
			}
		});*/

	});


	bgSelect.prev('.select_list').on('click','li',function(){
		var val = jQuery(this).text();

		switch(val){

			case "Image" : 
				color.slideUp(function(){
					image.slideDown();
				});
			break;

			case "Color" : 
				image.slideUp(function(){
					color.slideDown();
				});
			break;

		}

	});
	bgImagebutton.each(function(){
		jQuery(this).css('background-image','url('+jQuery(this).data('image')+')');
	});

	bgImagebutton.on('click',function(){
		var bg = jQuery(this).data('image');
		jQuery('body').css('backgroundImage','url('+bg+')');
	});

	/*
	reset.on('click',function(){
		var h = jQuery('[role="banner"]'),
			f = jQuery('.footer_top_part');

		jQuery('body,#select_color').css({
			'backgroundImage' : 'none',
			'backgroundColor' : '#232830'
		});

		if(!(sw.find('.homepage').length)){
			layout.removeClass('boxed_layout').addClass('wide_layout');
			sw.find('[data-layout]').removeClass('active').first().addClass('active');
		}

		image.slideUp(function(){
			color.slideDown();
		});

		bgSelect.prevAll(".select_title").text('Color');
		bgSelect.prev('.select_list').children('li').removeClass('active').first().addClass('active');

		
		if(hSelect.prevAll(".select_title").text() !== "Header 1"){
			hSelect.prevAll(".select_title").text('Header 1');
			hSelect.prev('.select_list').children('li').removeClass('active').first().addClass('active');
			h.slideUp(function(){
				jQuery(this).html("");
				h.load('inc/header_1.html',function(){
					jQuery(this).removeClass('type_4').slideDown();
					window.sticky();
					jQuery('#lang_button').css3Animate(jQuery('#lang_button').next('.dropdown_list'));
					jQuery('#currency_button').css3Animate(jQuery('#currency_button').next('.dropdown_list'));
					jQuery('#shopping_button').css3Animate(jQuery('#shopping_button').next('.shopping_cart'));
					window.rmenu();
				});
			});
		}


		if(fSelect.prevAll(".select_title").text() !== "Footer 1"){
			fSelect.prevAll(".select_title").text('Footer 1');
			fSelect.prev('.select_list').children('li').removeClass('active').first().addClass('active');
			f.slideUp(function(){
				jQuery(this).html("");
				f.load('inc/footer_1.html',function(){
					jQuery(this).removeClass('p_vr_0').closest('#footer').removeClass('type_2');
					jQuery(this).slideDown();
				});
			});
		}

	});
	*/
	
});