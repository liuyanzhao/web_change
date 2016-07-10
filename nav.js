$(function(){
		$('#nav>.container>li').hover(function(){
			$(this).children('ul').stop().slideToggle();
		})
	})
	$(function(){
		$('span').mouseover(function(){
			$(this).addClass('current01').siblings().removeClass();
			$('.more ul').eq($(this).index()).addClass('current').siblings().removeClass();
		})
		$('span').mouseout(function(){
			$(this).removeClass('current01');
		})
	})