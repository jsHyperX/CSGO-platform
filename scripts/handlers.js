function redirect2steam() {
    window.location = "https://store.steampowered.com/login/";
}

function redirect2home() {
    window.location = "../index.html";
}

function redirect2affiliates() {
    window.location = "./dest/affiliates.html";
}

function redirect2faq() {
    window.location = "./dest/FAQ.html";
}

function redirect2provably() {
    window.location = "./dest/provably.html";
}

function redirect2support() {
    window.location = "./dest/support.html";
}

function redirect2tos() {
    window.location = "./dest/tos.html";
}

/** for creating hamburger */
function hamburger() {
    var x = document.getElementById("navId");
    if (x.className === "navbar") x.className += " responsive"; 
	else x.className = "navbar";
}

function spinner() {
// $(document).ready(function () {
	for (i = 0; i < 1; i++) {
		$(".list li").clone().appendTo(".list");
	}
	$('.button').click(function () {
		$('.window').css({
			right: "0"
		})
		$('.list li').css({
			border: '4px solid transparent'
		})
		
		function selfRandom(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		var x = selfRandom(3, 10);
		$('.list li:eq('+x+')').css({
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