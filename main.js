var slide101 = document.getElementById('slide101');
var slideGreeter = document.getElementById("slideGreeter");
var tttBoard = document.getElementById("tttBoard");
var resetBoard = document.getElementById("resetBoard");
var minHeightRequired = document.getElementById("minHeightRequired");

window.onload = function() {
	slide101.style.display = 'block';
	slide101.style.position = 'fixed';
	slide101.style.left = '-101vw';
	slide101.style.transition = '0.2s ease-in';
	slideGreeter.style.transition = '0.2s ease-in';
	setTimeout(function(){
		slide101.style.left = '0';
		slideGreeter.style.top = '35%';
	}, 500);
	setTimeout(function(){
		slide101.style.position = 'relative';
		slide101.style.margin = '0 auto';
		slide101.style.marginTop = '10px';
		slide101.style.marginBottom = '8px';
		slide101.style.width = '100%';
		slide101.style.transition = '0.9s ease-in';
	}, 600);
	setTimeout(function(){
		slideGreeter.style.transition = '0.8s linear';
		slideGreeter.style.top = '50%';
	}, 800);
	var temp = "";
	for (var i = 0; i < 9; i++) {
		temp += "<section>&nbsp;</section>";
	}
	tttBoard.innerHTML = temp;
	screenHeightCompatibilityFun();
	document.getElementsByTagName("BODY")[0].onresize = function() {
		screenHeightCompatibilityFun();
	}
}

function screenHeightCompatibilityFun () {
	// var isHeight = window.outerHeight;
	var isHeight = minHeightRequired.clientHeight;
	if (isHeight < 580) {
		minHeightRequired.style.opacity = "1";
		minHeightRequired.style.display = "block";
		minHeightRequired.innerHTML = "This game of tic-tac-toe cannot be played as the height of the screen is below the minimum height requirements. Please switch to a larger screen. Thankyou."
	} else {
		minHeightRequired.style.display = "none";
		minHeightRequired.innerHTML = "";
	}
}

slideGreeter.children[1].onclick = function() {
	slideGreeter.style.transition = '0.2s ease-in';
	resetBoard.style.transition = '0.7s ease-in';
	slideGreeter.style.top = "130%";
	setTimeout(function() {
		tttBoard.style.transition = '0.2s linear';
		tttBoard.style.top = '50%';
		resetBoard.style.opacity = "1";
	}, 200);
	setTimeout(function() {
		for (var i = 0; i < tttBoard.children.length; i++) {
			tttBoard.children[i].style.transition = '1.2s linear';
			tttBoard.children[i].style.opacity = "1";
		}
	}, 500);
}