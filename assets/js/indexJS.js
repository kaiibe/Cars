var id = setInterval( "timer ()", 100 );
var id2 = setInterval( "timer2 ()", 100 );
var lr = 0;
var ud = 470;
var lr2 = 1200;
var ud2 = 700;
var blStop = false;	

$( document ).ready( function(){ 
	$(window).keyup(function(e){
		var c = e.key;
		if ( c == "w" ){
			if ( ud - 50 >= 490 ){
				ud -= 50;
				$(".car").css( "margin-top", ud );
			}
		}
		if ( c == "s" ){
			if ( ud + 50 <= 630 ){
				ud += 50;
				$(".car").css( "margin-top", ud );
			}
		}
		if ( c == "d" ){
			lr += 50;
			$(".car").css( "margin-left", lr );
		}
		if ( c == "a" ){
			if ( lr >= 10 ){
				lr -= 50;
			}else{
				lr = 0;
			}
			$(".car").css( "margin-left", lr );
		}


		if ( c == "ArrowLeft" ){
			if ( lr2 - 50 >= 0 ){
				lr2 -= 50;
			}else{
				lr2 = 1200;
			}
			$(".car2").css( "margin-left", lr2 );
		}
		if ( c == "ArrowRight" ){
			if ( lr2 + 50 <= 1200 ){
				lr2 += 50;
			}
			$(".car2").css( "margin-left", lr2 );
		}
		if ( c == "ArrowUp" ){
			if ( ud2 - 50 >= 640 ){
				ud2 -= 50;
			}
			$(".car2").css( "margin-top", ud2 );
		}
		if ( c == "ArrowDown" ){
			if ( ud2 + 50 <= 750 ){
				ud2 += 50;
			}
			$(".car2").css( "margin-top", ud2 );
		}
	});
	$(".stop").click( function() {
		if ( blStop == false ) {
			blStop = true;
			$(".stop").html("Start");
		}else{
			id = setInterval( "timer ()", 100 );
			id2 = setInterval( "timer2 ()", 100 );
			blStop = false;
			$(".stop").html("Stop");

		}
	});
});

function timer () {

	if ( blStop == true ){
		clearInterval(id);
	}

	lr += 15;

	if ( lr >= 1260 ){
		lr = 0;
	}

 	$(".car").css( "margin-left", lr );
} 

function timer2 () {

	if ( blStop == true ){
		clearInterval(id2);
	}

	lr2 -= 15;

	if ( lr2 <= 0 ){
		lr2 = 1260;
	}

 	$(".car2").css( "margin-left", lr2 );
} 







	
