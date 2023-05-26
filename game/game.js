var context;
var ballX;
var ballY;
var ballRadius;
var score = 0;
var timer = 100;
var TIME;
var PLAY;
var cWidth;
var cHeight;
var cMinx;
var cMaxx;
var bWidth;
var bHeight;
var bStart;
var vector;
var velocity;
var ROWS;
var COLS;
var bricWidth;
var bricHeight;
var bricPadding;
var bricks;
var level = 3;
var coreHit;
var crHit;
var background = new Image();
background.src = "background.avif"
var gameoverimg = new Image();
gameoverimg.src = "gameover.avif";
var brick1 = new Image();
brick1.src = "brick1.jpeg";
var brick2 = new Image();
brick2.src = "brick2.png";
var brick3 = new Image();
brick3.src = "brick3.png";
var coffee = new Image();
coffee.src = "coffee.png";
var mission = new Image();
mission.src = "missioncomplete.jpeg";

$(document).ready(function(){
	init(5, 200);
	PLAY = setInterval(draw, 5);
	TIME = setInterval(setTime, 1000);
	$(document).mousemove(function(e){
		if(e.pageX >= cMinx && e.pageX <= cMaxx){
			bStart = e.pageX - cMinx - (bWidth/2);
		}
	})
})
function init(rad, width){
	init_backGround();
	if (level == 1) {
		init_drawBrick_lvl1();
		velocity = 1.5;	// 단계별로 초기 공 속도 설정
		crHit = 0;
		coreHit = 3;
		//width = ?;	// 단계별로 초기 바 크기 설정
	}
	else if (level == 2) {
		init_drawBrick_lvl2();
		velocity = 2;	// 단계별로 초기 공 속도 설정
		crHit = 0;
		coreHit = 5;
		//width = ?;	// 단계별로 초기 바 크기 설정
	}
	else if (level == 3) {
		init_drawBrick_lvl3();
		velocity = 2.5;	// 단계별로 초기 공 속도 설정
		crHit = 0;
		coreHit = 7;
		//width = ?;	// 단계별로 초기 바 크기 설정
	}
	init_drawBar(width);
	init_drawBall(rad);
}
function init_backGround(){
	context = $("#myCanvas")[0].getContext('2d');
	cWidth = $("#myCanvas").width();
	cHeight = $("#myCanvas").height();
	cMinx = $("#myCanvas").offset().left;
	cMaxx = cMinx + cWidth;
}
function draw(){
	context.clearRect(0,0,cWidth, cHeight);
	context.drawImage(background, 0, 0, cWidth, cHeight);
	drawBall();
	drawBar();
	drawBrick();
	drawTimenScore();
	ballReflection();
	ballX += velocity*vector[0];
	ballY += velocity*vector[1];

	if((coreHit <= crHit) || timer == 0){
		endPlay(mission);
	}

}

function ballReflection() {
	if(ballX < ballRadius || ballX > cWidth - ballRadius){
		vector[0] = -vector[0];
	}
	if(ballY < ballRadius){
		vector[1] = -vector[1];
	}else if(ballY > cHeight - ballRadius){
		if(ballX > bStart && ballX < bStart + bWidth){
			var alpha = ((bStart + (bWidth/2)) - ballX) / (bWidth / 2) * 0.3; //왼쪽: 양수, 오른쪽: 음수
			barReflection(alpha);
			ballY = cHeight - ballRadius
		}else{
			endPlay(gameoverimg);
		}
	}
	brickReflection();
}

function brickReflection() {
	var row = Math.floor((ballY)/(bricHeight+bricPadding));
	var col = Math.floor((ballX + velocity*vector[0])/(bricWidth+bricPadding));

	if(row < ROWS) {
		if (bricks[row][col] != 0) {
			vector[0] = -vector[0];
		}
		if(bricks[row][col] >= 1){
			score += 10;
			bricks[row][col] -= 1;
		}
		else if(bricks[row][col] == -1){
			score += 100;
			bricks[row][col] = 0;
		}
		else if(bricks[row][col] == -2){
			bricks[row][col] = 0;
			var event = Math.floor(Math.random()*3);
			if (event == 0) {
				bWidth -= 10;
			}
			else if (event == 1) {
				velocity += 0.5;
			}
			else if (event == 2) {
				TIME -= 5;
			}
		}
		else if(bricks[row][col] == -3){
			vector[0] = -vector[0];
			crHit += 1;
			score += 5;
		}
	}

	row = Math.floor((ballY + velocity*vector[1])/(bricHeight+bricPadding));
	col = Math.floor((ballX)/(bricWidth+bricPadding));

	if(row < ROWS) {
		if (bricks[row][col] != 0) {
			vector[1] = -vector[1];
		}
		if(bricks[row][col] >= 1){
			score += 10;
			bricks[row][col] -= 1;
		}
		else if(bricks[row][col] == -1){
			score += 100;
			bricks[row][col] = 0;
		}
		else if(bricks[row][col] == -2){
			bricks[row][col] = 0;
			var event = Math.floor(Math.random()*3);
			if (event == 0) {
				bWidth -= 10;
			}
			else if (event == 1) {
				velocity += 0.5;
			}
			else if (event == 2) {
				TIME -= 5;
			}
		}
		else if(bricks[row][col] == -3){
			crHit += 1;
			score += 5;
		}
	}
}

function barReflection(alpha) {
	if (vector[0] >= 0) {
		var angle = Math.atan(vector[1]/vector[0]);
		angle = angle * (1 + alpha);
		vector = [ Math.cos(angle), -Math.sin(angle) ];
	}
	else {
		vector[0] = -vector[0]
		var angle = Math.atan(vector[1]/vector[0]);
		angle = angle * (1 - alpha);
		vector = [ -Math.cos(angle), -Math.sin(angle) ];
	}
}

function endPlay(img){
	clearInterval(PLAY);
	clearInterval(TIME);
	context.clearRect(0,0,cWidth, cHeight);
	context.drawImage(img, 0, 0, cWidth, cHeight);
	context.font = "40px Georgia";
	context.fillStyle = "white";
	context.fillText("SCORE : "+(score+ timer), cWidth/2 - 80, cHeight - 50);
}

function setTime(){
	--timer;
}

function drawTimenScore(){
	context.font = "50px Georgia";
	context.fillStyle = "white";
	context.fillText(score, cWidth - 50, cHeight - 100);
	context.font = "20px Georgia";
	context.fillText(timer,cWidth - 50, cHeight - 50);
}
function init_drawBall(rad) {
	ballRadius = rad;
	ballX = 100;
	ballY = ROWS*bricHeight + 50;
	vector = [Math.sqrt(0.5), Math.sqrt(0.5)];
}
function drawBall(){
	context.fillStyle = "white";
	context.beginPath();
	context.arc(ballX,ballY,ballRadius,0, 2.0*Math.PI, false);
	context.closePath();
	context.fill();
}
function init_drawBar(width){
	bWidth = width;
	bHeight = 10;
	bStart = cWidth/2;
}
function drawBar(){
	context.fillStyle = "#CEA800";
	context.beginPath();
	context.fillRect(bStart, cHeight- bHeight, bWidth, bHeight);
}
function init_drawBrick_lvl1(){
	ROWS = 3;
	COLS = 4;
	bricPadding = 5;
	bricWidth = (cWidth / COLS);
	bricHeight = bricWidth/3;

	scoreBrickCount = 3;
	deburfBrickCount = 0;
	doubleBrickCount = 0;
	tripleBrickCount = 0;

	bricks = new Array(ROWS);

	for (i=0;i<ROWS;i++) {
		bricks[i] = new Array(COLS);
		for(j=0;j<COLS;j++) {
			bricks[i][j] = 1;
		}
	}

	bricks[0][COLS/2] = -3;
	bricks[0][COLS/2 - 1] = -3;
	bricks[1][COLS/2] = -3;
	bricks[1][COLS/2 - 1] = -3;

	for (i = 0 ; i < scoreBrickCount ; i++){
		var ri = Math.floor(Math.random()*ROWS);
		var ci = Math.floor(Math.random()*COLS);
		if (bricks[ri][ci] == 1) {
			bricks[ri][ci] = -1;
		}
		else {
			i--;
		}
	}
}

function init_drawBrick_lvl2(){
	ROWS = 4;
	COLS = 6;
	bricPadding = 5;
	bricWidth = (cWidth / COLS);
	bricHeight = bricWidth/3;

	scoreBrickCount = 7;
	deburfBrickCount = 0;
	doubleBrickCount = 8;
	tripleBrickCount = 0;

	bricks = new Array(ROWS);

	for (i=0;i<ROWS;i++) {
		bricks[i] = new Array(COLS);
		for(j=0;j<COLS;j++) {
			bricks[i][j] = 1;
		}
	}

	bricks[0][COLS/2] = -3;
	bricks[0][COLS/2 - 1] = -3;
	bricks[1][COLS/2] = -3;
	bricks[1][COLS/2 - 1] = -3;

	for (i = 0 ; i < scoreBrickCount ; i++){
		var ri = Math.floor(Math.random()*ROWS);
		var ci = Math.floor(Math.random()*COLS);
		if (bricks[ri][ci] == 1) {
			bricks[ri][ci] = -1;
		}
		else {
			i--;
		}
	}

	for (i = 0 ; i < doubleBrickCount ; i++){
		var ri = Math.floor(Math.random()*ROWS);
		var ci = Math.floor(Math.random()*COLS);
		if (bricks[ri][ci] == 1) {
			bricks[ri][ci] = 2;
		}
		else {
			i--;
		}
	}
}

function init_drawBrick_lvl3(){
	ROWS = 6;
	COLS = 8;
	bricPadding = 5;
	bricWidth = (cWidth / COLS);
	bricHeight = bricWidth/3;

	scoreBrickCount = 9;
	deburfBrickCount = 5;
	doubleBrickCount = 10;
	tripleBrickCount = 6;

	bricks = new Array(ROWS);

	for (i=0;i<ROWS;i++) {
		bricks[i] = new Array(COLS);
		for(j=0;j<COLS;j++) {
			bricks[i][j] = 1;
		}
	}

	bricks[0][COLS/2] = -3;
	bricks[0][COLS/2 - 1] = -3;
	bricks[1][COLS/2] = -3;
	bricks[1][COLS/2 - 1] = -3;

	for (i = 0 ; i < scoreBrickCount ; i++){
		var ri = Math.floor(Math.random()*ROWS);
		var ci = Math.floor(Math.random()*COLS);
		if (bricks[ri][ci] == 1) {
			bricks[ri][ci] = -1;
		}
		else {
			i--;
		}
	}

	for (i = 0 ; i < doubleBrickCount ; i++){
		var ri = Math.floor(Math.random()*ROWS);
		var ci = Math.floor(Math.random()*COLS);
		if (bricks[ri][ci] == 1) {
			bricks[ri][ci] = 2;
		}
		else {
			i--;
		}
	}

	for (i = 0 ; i < tripleBrickCount ; i++){
		var ri = Math.floor(Math.random()*ROWS);
		var ci = Math.floor(Math.random()*COLS);
		if (bricks[ri][ci] == 1) {
			bricks[ri][ci] = 3;
		}
		else {
			i--;
		} 
	}

	for (i = 0 ; i < deburfBrickCount ; i++){
		var ri = Math.floor(Math.random()*ROWS);
		var ci = Math.floor(Math.random()*COLS);
		if (bricks[ri][ci] == 1) {
			bricks[ri][ci] = -2;
		}
		else {
			i--;
		}
	}
}

function drawBrick(){
	for(i=0;i<ROWS;i++){
		for(j=0;j<COLS;j++){
			if(bricks[i][j] == 3){
				context.drawImage(brick3, j*bricWidth, i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == 2){
				context.drawImage(brick2, j*bricWidth, i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == 1){
				context.drawImage(brick1, j*bricWidth, i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == -1){
				context.drawImage(coffee, j*bricWidth+(bricWidth-bricHeight)/2, i*bricHeight, bricHeight - bricPadding, bricHeight - bricPadding);
			}
		}
	}
}