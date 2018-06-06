jQuery(document).ready(function ($) {

	$("#edit-layout-style .fieldset-wrapper").hide();
	$("#edit-layout-style .fieldset-legend").click(function(){
		$("#edit-layout-style .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-layout-style .plus').toggleClass('minus');
	});
	
	$("#edit-header-style .fieldset-wrapper").hide();
	$("#edit-header-style .fieldset-legend").click(function(){
		$("#edit-header-style .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-header-style .plus').toggleClass('minus');
	});
	
	$("#edit-footer-style .fieldset-wrapper").hide();
	$("#edit-footer-style .fieldset-legend").click(function(){
		$("#edit-footer-style .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-footer-style .plus').toggleClass('minus');
	});
	
	
	$("#edit-background .fieldset-wrapper").hide();
	$("#edit-background .fieldset-legend").click(function(){
		$("#edit-background .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-background .plus').toggleClass('minus');
	});
	
	$("#edit-css .fieldset-wrapper").hide();
	$("#edit-css .fieldset-legend").click(function(){
		$("#edit-css .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-css .plus').toggleClass('minus');
	});

	$("#edit-layout-page .fieldset-wrapper").hide();
	$("#edit-layout-page .fieldset-legend").click(function(){
		$("#edit-layout-page .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-layout-page .plus').toggleClass('minus');
	});

	$("#edit-header-page .fieldset-wrapper").hide();
	$("#edit-header-page .fieldset-legend").click(function(){
		$("#edit-header-page .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-header-page .plus').toggleClass('minus');
	});

	$("#edit-footer-page .fieldset-wrapper").hide();
	$("#edit-footer-page .fieldset-legend").click(function(){
		$("#edit-footer-page .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-footer-page .plus').toggleClass('minus');
	});
  
	$("#edit-scroll-logo .fieldset-wrapper").hide();
	$("#edit-scroll-logo .fieldset-legend").click(function(){
		$("#edit-scroll-logo .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-scroll-logo .plus').toggleClass('minus');
	});
	
	$("#edit-scroll-read .fieldset-wrapper").hide();
	$("#edit-scroll-read .fieldset-legend").click(function(){
		$("#edit-scroll-read .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-scroll-read .plus').toggleClass('minus');
	});
	
	$("#edit-scroll-detail .fieldset-wrapper").hide();
	$("#edit-scroll-detail .fieldset-legend").click(function(){
		$("#edit-scroll-detail .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-scroll-detail .plus').toggleClass('minus');
	});
	
	$("#edit-imagemenu .fieldset-wrapper").hide();
	$("#edit-imagemenu .fieldset-legend").click(function(){
		$("#edit-imagemenu .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-imagemenu .plus').toggleClass('minus');
	});
	
	$("#edit-corporate .fieldset-wrapper").hide();
	$("#edit-corporate .fieldset-legend").click(function(){
		$("#edit-corporate .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-corporate .plus').toggleClass('minus');
	});
	
	$("#edit-construction .fieldset-wrapper").hide();
	$("#edit-construction .fieldset-legend").click(function(){
		$("#edit-construction .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-construction .plus').toggleClass('minus');
	});
	
	$("#edit-interior .fieldset-wrapper").hide();
	$("#edit-interior .fieldset-legend").click(function(){
		$("#edit-interior .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-interior .plus').toggleClass('minus');
	});
	
	$("#edit-onepage .fieldset-wrapper").hide();
	$("#edit-onepage .fieldset-legend").click(function(){
		$("#edit-onepage .fieldset-wrapper").slideToggle("slow");
		$(this).toggleClass("active");
		$('#edit-onepage .plus').toggleClass('minus');
	});
});