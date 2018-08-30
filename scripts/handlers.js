
/** for creating hamburger */
function hamburger() {
    var x = document.getElementById("navId");
    if (x.className === "navbar") x.className += " responsive"; 
	else x.className = "navbar";
}

function spinner() {
// $(document).ready(function () {
	for (i = 0; i < 1; i++) {
		$(".list a").clone().appendTo(".list");
	}
	$('.button').click(function () {
		$('.window').css({
			right: "0"
		})
		$('.list a').css({
			border: '4px solid transparent'
		})
		
		function selfRandom(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		var x = selfRandom(3, 10);
		$('.list a:eq('+x+')').css({
			border:'4px solid #00ba00'
		})
		$('.window').animate({
			right: ((x*130)+(x*8-12)-119)
		}, 10000);
	});
}

var option = {
	speed : 10,
	duration : 3,
	stopImageNumber : 0,
	startCallback : function() {
		console.log('start');
	},
	slowDownCallback : function() {
		console.log('slowDown');
	},
	stopCallback : function($stopElm) {
		console.log('stop');
	}
}
$('button.button').roulette(option);