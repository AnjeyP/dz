$(init);
function init(){
	$( 'div p:first').click(function () {
		if ( $( "section:first" ).is( ":hidden" ) ) {
			$( "section:first" ).slideDown( "slow" );
		} else {
			$( "section:first" ).hide('slow');
		}
	})
	$('a:first').click(function(){
		$('#container div span').each(function(){
			if (+$(this).text().substring(0,4)>2000 && $(this).parent().is(':hidden')) $(this).parent().show();
			else if (+$(this).text().substring(0,4)>2000) $(this).parent().hide();
		})
	})
	$('#container div span i').each(function(){
		$(this).click(function(){
			$(this).removeClass('fa fa-heart-o').addClass('fa fa-heart');
			$(this).parent().parent().css('opacity','0.3');
			$('#message').show();
		})
	})
	$('#message div:last').each(function(){
		$(this).click(function(){
			$(this).parent().hide();	
		})
	})
	$('a:last').click(function(){
		$('#container div i').each(function(){
			if ($(this).hasClass('fa fa-heart-o')) $(this).parent().hide();
			
		})
	})
}