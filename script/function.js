// JavaScript Document



$(window).scroll(function() {
	var currentScroll = $(document).scrollTop();
	//var scrbody = $('scrollr-body');
	var herocont = $('.hero-container img');
	
	var scrollby = currentScroll/10;
	var barr = document.getElementById('navibar');
	
	
	console.log($('.hero-container').height() - currentScroll);
	
	
	if(($('.hero-container').height() - currentScroll)>-2){
	barr.style.top = ($('.hero-container').height() - currentScroll - 20) + 'px';
} else {
	barr.style.top = 0 + 'px';
}
	
	
	
	
	
	
	if(currentScroll > $('.hero-container').offset().top -$(window).height()) {
		
	var	offset = currentScroll - $('.sam').offset().top + $(window).height() -350;
	
		if(offset> 0 ){
		herocont.each( function(i) {
		//	console.log(i);
			if(i == 4){
			
		$('.hero-container img').eq(4).css({
		'transform' : 'translateY('+ currentScroll/20+'%)'
			
			
		});
			}else
				{
					
		$('.hero-container img').eq(i).css({
		'transform' : 'translateY(-'+ scrollby/i*10 +'%)'
			
			
		});
				}
	   });
		}
	}
	


});