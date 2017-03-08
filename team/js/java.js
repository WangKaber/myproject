
$(document).ready(function(){

	$(window).scroll(function(e) {
		if($(this).scrollTop() > 0){
			$('#header').css({
				'width': '100%',
				'position': 'fixed',
				'height': '75px',
				'z-index': '10',
				'background-color': 'rgba(255, 255, 255, 0.9)'
			});
			$('.header-logo').css({
				'width': '75%',
				'height': '75%'
			});
			$('#nav').css('line-height', '75px');
			$('#content').css('padding-top', '100px');
		}
		else{
			$('#header').css('height', '100px');
			$('.header-logo').css({
				'width': '100%',
				'height': '100%'
			});
			$('#nav').css('line-height', '100px');
		}
		if($(this).scrollTop() > 100){
			$('#go-top').show(500);
		}
		else{
			$('#go-top').hide(500);
		}
	});
  
  $('#go-top').click(function(e){
    
    e.preventDefault();
    
    //$(document).scrollTop(offset.top);
    
    $('html, body').animate({scrollTop: 0});
    
  });
  
});
