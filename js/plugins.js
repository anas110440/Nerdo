// JavaScript Document
/*global $, document, window*/

$(document).ready(function (){


	var scrollButton = $("#scroll-top");
	
	$(window).scroll(function ()
	{
		
		if($(this).scrollTop()>=700)
			{
				scrollButton.show();
			}else{
				scrollButton.hide();

			}
			});
	scrollButton.click(function (){
			$("html,body").animate({ scrollTop : 0 }, 600 );
		});

	$("#butt").click(function (){
		$("#inpu").toggle(1000);
		
	});
	
	$("#header1").click(function (){
		$("#serv1").fadeToggle(1000,function (){
			$("#img1").toggle();
		});
		
	});
	
	$("#header2").click(function (){
		$("#serv2").fadeToggle(1000,function (){
			$("#img2").toggle();

		});
		
	});
	
	$("#header3").click(function (){
		$("#serv3").fadeToggle(1000,function (){
			$("#img3").toggle();
		});
		
	});
	
	$("#header4").click(function (){
		$("#serv4").fadeToggle(1000,function (){
			$("#img4").toggle();
		});
		
	});
	
	$("#header5").click(function(){
		$("#serv5").fadeToggle(1000,function(){
			$("#img5").toggle();
		});
		
	});
		$(".sunny").click(function (){
			$(this).fadeToggle(1000,function (){
				$(".moon").fadeToggle(1000);
			});
		});
		
		$(".moon").click(function (){
			$(this).fadeToggle(1000,function (){
				$(".sunny").fadeToggle(1000);
			});
		});
	
	var moon = 	$(".moon");
	moon.click(function (){
		$("link[href*='theam']").attr("href",$(this).attr("data-value"));
	});
	
	var sunny = 	$(".sunny");
	sunny.click(function (){
	$("link[href*='theam']").attr("href",$(this).attr("data-value"));
	});
	
});
/*
$("#load").load(function() {
	
	$("body").css("overflow","auto");
	
	$(".loading .spinner").fadeOut(2000,function(){
		$(this).parent().fadeOut(2000,function(){
			$(this).remove();
		});
	});
});
*/