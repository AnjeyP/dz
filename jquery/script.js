$(init);
function init(){
	//show characteristics
	$( '#container div img+p').each(function(index){
		$($( '#container div img+p')[index]).click(function () {
			if ( $( $( '#container div img+p+section')[index] ).is( ":hidden" ) ) {
				$( $( '#container div img+p+section')[index] ).slideDown( "slow" );
			} else {
				$( $( '#container div img+p+section')[index] ).hide('slow');
			}
		})
	})
	//price filter
	$('a:first').click(function(){
		$('#container div span').each(function(){
			if (+$(this).text().substring(0,4)>2000 && $(this).parent().is(':hidden')) $(this).parent().show();
			else if (+$(this).text().substring(0,4)>2000) $(this).parent().hide();
		})
	})

	//add/remove to/from favourites
	$('#container div span i').each(function(){
		$(this).click(function(){
			if ($(this).hasClass('fa fa-heart-o')){
				$(this).removeClass('fa fa-heart-o').addClass('fa fa-heart');
				$('#container').css('opacity','0.3');
				$('#add_message').show();
			}
			else{
				$(this).removeClass('fa fa-heart').addClass('fa fa-heart-o');
				$('#container').css('opacity','0.3');
				$('#dell_message').show();
			}
			
		})
	})
	$('#add_message i').each(function(){
		$(this).click(function(){
			$(this).parent().hide();
			$('#container').css('opacity','1');
		})
	})
	$('#dell_message i').each(function(){
		$(this).click(function(){
			$(this).parent().hide();
			$('#container').css('opacity','1');
		})
	})

	$('a:last').click(function(){
		var count=0;
		$('#container div span i').each(function(){
			if ($(this).hasClass('fa fa-heart-o')) count++;
		})
		if (count==$('#container').children().length) alert("Add something to Favourites");
		else{
			$('#container div span i').each(function(){
				if ($(this).hasClass('fa fa-heart-o') && $(this).parent().parent().is( ":hidden" )) $(this).parent().parent().show();
				else if ($(this).hasClass('fa fa-heart-o')) $(this).parent().parent().hide();

			})
		}
	})
}