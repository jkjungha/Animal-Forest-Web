var hidePage="";
var showPage="";

var corePrint=0;
var scorePrint=0;
var timePrint=0;
var star=0;

var Lv=0;
var stage=0;

var L1S1=0;
var L1S2=-1;
var L1S3=-1;

//다시 바꾸기
var L2S1=-1;
var L2S2=-1;
var L2S3=-1;

var L3S1=-1;
var L3S2=-1;
var L3S3=-1;
//---------> 디자인
var myCanvas;
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
  
	/******************************/
	/**********시작화면************/
	/*****************************/

	$("#methodButton").on("click",function(){
		hidePage= "#startPage";
		showPage = "#methodPage";
		move_to_NextPage();
	});
	$("#methodButton").mouseover(function(){
		$("#methodButton").attr("src", "methodButton_mo.png");
	});
	$("#methodButton").mouseout(function(){
		$("#methodButton").attr("src", "methodButton_n.png");
	});



	//홈화면시작버튼, 방법화면 시작버튼 둘 다 포함해서 제어
	$(".startButton").on("click",function(){
		hidePage= ".page";
		showPage = "#levelPage";
		move_to_NextPage();
	});
	$(".startButton").mouseover(function(){
		$(".startButton").attr("src", "startButton_mo.png");
	});
	$(".startButton").mouseout(function(){
		$(".startButton").attr("src", "startButton_n.png");
	});



	/******************************/
	/*********레벨 선택 화면********/
	/*****************************/
	$("#leafEasy").on("click",function(){
		hidePage= "#levelPage";
		showPage = "#easyStagePage";
		move_to_NextPage();
	});
	$("#leafEasy").mouseover(function(){
		$("#Easy").css("text-shadow", "2px 2px 4px gray");
	});
	$("#leafEasy").mouseout(function(){
		$("#Easy").css("text-shadow", "none");
	});


	$("#leafMedium").on("click",function(){
		hidePage= "#levelPage";
		showPage = "#mediumStagePage";
		move_to_NextPage();
	});
	$("#leafMedium").mouseover(function(){
		$("#Medium").css("text-shadow", "2px 2px 4px gray");
	});
	$("#leafMedium").mouseout(function(){
		$("#Medium").css("text-shadow", "none");
	});


	$("#leafHard").on("click",function(){
		hidePage= "#levelPage";
		showPage = "#hardStagePage";
		move_to_NextPage();
	});
	$("#leafHard").mouseover(function(){
		$("#Hard").css("text-shadow", "2px 2px 4px gray");
	});
	$("#leafHard").mouseout(function(){
		$("#Hard").css("text-shadow", "none");
	});

	$(".goBackButton").on("click", function(){
		hidePage= ".stagePage";
		showPage = "#levelPage";
		move_to_NextPage();
	});

	/******************************/
	/******easy-stage 선택 화면****/
	/*****************************/
	$("#easyStage1").on("click", function(){
		hidePage= ".stagePage";
		showPage = "#EasyStory1-1";
		move_to_NextPage();
	});

	$("#easyStage2").on("click", function(){
		if(L1S2!=-1){
			Lv=1;
			stage=2;
			hidePage= ".stagePage";
			showPage = "#EasyStage2Game";
			move_to_NextPage();
			myCanvas = $("#myCanvas1-2");
			START();
		}
	});
	$("#easyStage3").on("click", function(){
		if(L1S3!=-1){
			Lv=1;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#EasyStage3Game";
			move_to_NextPage();
			myCanvas = $("#myCanvas1-3");
			START();
		}
	});

	/******************************/
	/********easy: story********/
	/*****************************/
	$("#Easy1-1arr").on("click",function(){
		$("#EasyStory1-1").fadeOut(0);
		$("#EasyStory1-2").fadeIn(0);
	});

	$("#storyText1-2 p").on("click",function(){
		$("#EasyStory1-2").fadeOut(0);
		$("#EasyStory1-3").fadeIn(0);
	});


	$("#storyText1-3 p").on("click",function(){
		Lv=1;
		stage=1;
		hidePage= "#EasyStory1-3";
		showPage = "#EasyStage1Game";
		move_to_NextPage();
		myCanvas = $("#myCanvas1-1");
		START();
	});


	/******************************/
	/****medium-stage 선택 화면****/
	/*****************************/

	$("#mediumStage1").on("click", function(){
		if(L2S1!=-1){
			hidePage= ".stagePage";
			showPage = "#MediumStory1-1";
			move_to_NextPage();
		}
	});

	$("#mediumStage2").on("click", function(){
		if(L2S2!=-1){
			Lv=2;
			stage=2;
			hidePage= ".stagePage";
			showPage = "#MediumStage2Game";
			move_to_NextPage();
			myCanvas = $("#myCanvas2-2");
			START();
		}
	});
	$("#mediumStage3").on("click", function(){
		if(L2S3!=-1){
			Lv=2;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#MediumStage3Game";
			move_to_NextPage();
			myCanvas = $("#myCanvas2-3");
			START();
		}
	});

	/******************************/
	/********medium: story********/
	/*****************************/
	$("#phone_A").on("click", function(){
		hidePage= "#MediumStory1-1";
		showPage = "#MediumStory1-2";
		move_to_NextPage();
	});

	$("#phone_C").on("click", function(){
		$("#MediumStory1-1 p").show().fadeOut(3000);
	});

	$("#storyText2-2 p").on("click",function(){
		Lv=2;
		stage=1;
		hidePage= "#MediumStory1-2";
		showPage = "#MediumStage1Game";
		move_to_NextPage();
		myCanvas = $("#myCanvas2-1");
		START();
		
	});

	/******************************/
	/****hard-stage 선택 화면****/
	/*****************************/

	$("#hardStage1").on("click", function(){
		if(L3S1!=-1){
			hidePage= ".stagePage";
			showPage = "#HardStory1-1";
			move_to_NextPage();
		}
	});

	$("#hardStage2").on("click", function(){
		if(L3S2!=-1){
			Lv=3;
			stage=2;
			hidePage= ".stagePage";
			showPage = "#HardStage2Game";
			move_to_NextPage();
			myCanvas = $("#myCanvas3-2");
			START();
		}
	});

	$("#hardStage3").on("click", function(){
		if(L3S3!=-1){
			Lv=3;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#HardStage3Game";
			move_to_NextPage();
			myCanvas = $("#myCanvas3-3");
			START();
		}
	});

	/******************************/
	/********hard: story********/
	/*****************************/

	$("#goodButton").on("click", function(){
		Lv=3;
		stage=1;
		hidePage= "#HardStory1-1";
		showPage = "#HardStage1Game";
		move_to_NextPage();
		myCanvas = $("#myCanvas3-1");
		START();
	});
	$("#goodButton").mouseover(function(){
		$("#goodButton").attr("src", "goodButton_mo.png");
	});
	$("#goodButton").mouseout(function(){
		$("#goodButton").attr("src", "goodButton_n.png");
	});


	/******************************/
	/********결과창들 제어********/
	/*****************************/
	$(".clearButton").on("click", function(){
		
		scorePrint=Math.floor(Math.random() * 1000);
		timePrint=Math.floor(Math.random() * 60);
		corePrint=Math.floor(Math.random() * 2);

		set_resultPage();

		hidePage= ".gamePage";
		showPage = "#resultPage";
		move_to_NextPage();
	});

	$(".failButton").on("click", function(){
		hidePage= ".gamePage";
		showPage = "#failPage";
		move_to_NextPage();
	});

	//스코어 보여주는 창->각 난이도의 스테이지 선택창
	$("#ok_clearButton").on("click", function(){
		set_stagePage();
		hidePage="#resultPage";
		if(stage!=3){
			if(Lv==1){
				showPage="#easyStagePage";
			}
			else if(Lv==2){
				showPage="#mediumStagePage";
			}
			else if(Lv==3){
				showPage="#hardStagePage"; 
			}
		}
		else{
			set_stage3Clear();
			showPage="#stage3Clear";
		}
		move_to_NextPage();
	});

	//실패창->각 난이도의 스테이지 선택창
	$("#ok_failButton").on("click", function(){
		hidePage="#failPage";
		if(Lv==1){
			showPage="#easyStagePage";
		}
		else if(Lv==2){
			showPage="#mediumStagePage";
		}
		else if(Lv==3){
			showPage="#hardStagePage";
		}
		move_to_NextPage();
	});

	//아이템 착용 결과창->각 난이도의 스테이지 선택창
	$("#nextLevel").on("click", function(){
		hidePage="#stage3Clear"
		if(Lv==1){
			showPage="#easyStagePage";
		}
		else if(Lv==2){
			showPage="#mediumStagePage";
		}
		else if(Lv==3){
			showPage="#hardStagePage"; 
		}
		move_to_NextPage();
	});
	//--------> 디자인
  
	$(document).mousemove(function(e){
		if(e.pageX >= cMinx && e.pageX <= cMaxx){
			bStart = e.pageX - cMinx - (bWidth/2);
		}
	})
})
function START(){
	init(5, 200);
	PLAY = setInterval(draw, 5);
	TIME = setInterval(setTime, 1000);
}

function move_to_NextPage(){
	$(hidePage).fadeOut(0);
	$(showPage).fadeIn(1000);
}

//결과창 출력 
function set_resultPage(){
	var x = judge_Star();
	if(x==3){
		$("#starPrint").attr("src", "resultStar3.png");
		if(Lv==1&&stage==1&&L1S1==3){
			$("#item").attr("src", "sunglass 1.png");
		}
		else if(Lv==1&&stage==2&&L1S2==3){
			$("#item").attr("src", "flower 1.png");
		}
		else if(Lv==1&&stage==3&&L1S3==3){
			$("#item").attr("src", "umbrella 1.png");
		}
		else if(Lv==2&&stage==1&&L2S1==3){
			$("#item").attr("src", "cucumber 1.png");
		}
		else if(Lv==2&&stage==2&&L2S2==3){
			$("#item").attr("src", "rose 1.png");
		}
		else if(Lv==2&&stage==3&&L2S3==3){
			$("#item").attr("src", "boba 1.png");
		}
		else if(Lv==3&&stage==1&&L3S1==3){
			$("#item").attr("src", "ukelele 1.png");
		}
		else if(Lv==3&&stage==2&&L3S2==3){
			$("#item").attr("src", "hairpin 1.png");
		}
		else if(Lv==3&&stage==3&&L3S3==3){
			$("#item").attr("src", "sunglasses 1.png");
		}
		$("#itemBox").show()

	}
	else if(x==2){
		$("#starPrint").attr("src", "resultStar2.png");
	}
	else if(x==1){
		$("#starPrint").attr("src", "resultStar1.png");
	}
	else if(x==0){
		$("#starPrint").attr("src", "resultStar0.png");
	}
	
	$("#scorePrint").html("스코어: "+scorePrint);
	$("#timePrint").html("남은 시간: "+timePrint);
	$("#corePrint").html("코어: "+corePrint);
}


//별 몇개 얻었는지 계산
function judge_Star(){
	star=0;
	if(scorePrint>=500){
		star++;
	}
	if(timePrint>=20){
		star++;
	}
	if(corePrint==1){
		star++;
	}

	if(L1S1<star&&Lv==1&&stage==1){
		L1S1=star;
	}
	else if(L1S2<star&&Lv==1&&stage==2){
		L1S2=star;
	}
	else if(L1S3<star&&Lv==1&&stage==3){
		L1S3=star;
	}
	else if(L2S1<star&&Lv==2&&stage==1){
		L2S1=star;
	}
	else if(L2S2<star&&Lv==2&&stage==2){
		L2S2=star;
	}
	else if(L2S3<star&&Lv==2&&stage==3){
		L2S3=star;
	}
	else if(L3S1<star&&Lv==3&&stage==1){
		L3S1=star;
	}
	else if(L3S2<star&&Lv==3&&stage==2){
		L3S2=star;
	}
	else if(L3S3<star&&Lv==3&&stage==3){
		L3S3=star;
	}

	return star;
}


//stage클리어 여부에 따른 이미지 변경 
function set_stagePage(){
	if(Lv==1&&stage==1){
		if(L1S2==-1){
			L1S2=0;
			$("#easyStage2").attr("src", "Stage2Open.png");
		}
		else{
			if((L1S1+L1S2+L1S3>=6)&&(L2S1==-1)){
				L2S1=0;
				$("#mediumStage1").attr("src", "Stage1Open.png");
			}
		}

		if(L1S1==3){
			$("#easyStage1").attr("src", "Stage1Star3.png");
		}
		else if(L1S1==2){
			$("#easyStage1").attr("src", "Stage1Star2.png");
		}
		else if(L1S1==1){
			$("#easyStage1").attr("src", "Stage1Star1.png");
		}
	}

	if(Lv==1&&stage==2){
		if(L1S3==-1){
			L1S3=0;
			$("#easyStage3").attr("src", "Stage3Open.png");
		}
		else{
			if((L1S1+L1S2+L1S3>=6)&&(L2S1==-1)){
				L2S1=0;
				$("#mediumStage1").attr("src", "Stage1Open.png");
			}
		}

		if(L1S2==3){
			$("#easyStage2").attr("src", "Stage2Star3.png");
		}
		else if(L1S2==2){
			$("#easyStage2").attr("src", "Stage2Star2.png");
		}
		else if(L1S2==1){
			$("#easyStage2").attr("src", "Stage2Star1.png");
		}
	}

	if(Lv==1&&stage==3){
		if((L1S1+L1S2+L1S3>=6)&&(L2S1==-1)){
			L2S1=0;
			$("#mediumStage1").attr("src", "Stage1Open.png");
		}

		if(L1S3==3){
			$("#easyStage3").attr("src", "Stage3Star3.png");
		}
		else if(L1S3==2){
			$("#easyStage3").attr("src", "Stage3Star2.png");
		}
		else if(L1S3==1){
			$("#easyStage3").attr("src", "Stage3Star1.png");
		}
	}



	if(Lv==2&&stage==1){
		if(L2S2==-1){
			L2S2=0;
			$("#mediumStage2").attr("src", "Stage2Open.png");
		}
		else{
			if((L2S1+L2S2+L2S3>=6)&&(L3S1==-1)){
				L3S1=0;
				$("#hardStage1").attr("src", "Stage1Open.png");
			}
		}

		if(L2S1==3){
			$("#mediumStage1").attr("src", "Stage1Star3.png");
		}
		else if(L2S1==2){
			$("#mediumStage1").attr("src", "Stage1Star2.png");
		}
		else if(L2S1==1){
			$("#mediumStage1").attr("src", "Stage1Star1.png");
		}
	}

	if(Lv==2&&stage==2){
		if(L2S3==-1){
			L2S3=0;
			$("#mediumStage3").attr("src", "Stage3Open.png");
		}
		else{
			if((L2S1+L2S2+L2S3>=6)&&(L3S1==-1)){
				L3S1=0;
				$("#hardStage1").attr("src", "Stage1Open.png");
			}
		}

		if(L2S2==3){
			$("#mediumStage2").attr("src", "Stage2Star3.png");
		}
		else if(L2S2==2){
			$("#mediumStage2").attr("src", "Stage2Star2.png");
		}
		else if(L2S2==1){
			$("#mediumStage2").attr("src", "Stage2Star1.png");
		}
	}

	if(Lv==2&&stage==3){
		if(L2S1+L2S2+L2S3>=6&&(L3S1==-1)){
			L3S1=0;
			$("#hardStage1").attr("src", "Stage1Open.png");
		}

		if(L2S3==3){
			$("#mediumStage3").attr("src", "Stage3Star3.png");
		}
		else if(L2S3==2){
			$("#mediumStage3").attr("src", "Stage3Star2.png");
		}
		else if(L2S3==1){
			$("#mediumStage3").attr("src", "Stage3Star1.png");
		}
	}

	if(Lv==3&&stage==1){
		if(L3S2==-1){
			L3S2=0;
			$("#hardStage2").attr("src", "Stage2Open.png");
		}

		if(L3S1==3){
			$("#hardStage1").attr("src", "Stage1Star3.png");
		}
		else if(L3S1==2){
			$("#hardStage1").attr("src", "Stage1Star2.png");
		}
		else if(L3S1==1){
			$("#hardStage1").attr("src", "Stage1Star1.png");
		}
	}

	if(Lv==3&&stage==2){
		if(L3S3==-1){
			L3S3=0;
			$("#hardStage3").attr("src", "Stage3Open.png");
		}
		if(L3S2==3){
			$("#hardStage2").attr("src", "Stage2Star3.png");
		}
		else if(L3S2==2){
			$("#hardStage2").attr("src", "Stage2Star2.png");
		}
		else if(L3S2==1){
			$("#hardStage2").attr("src", "Stage2Star1.png");
		}
	}

	if(Lv==3&&stage==3){

		if(L3S3==3){
			$("#hardStage3").attr("src", "Stage3Star3.png");
		}
		else if(L3S3==2){
			$("#hardStage3").attr("src", "Stage3Star2.png");
		}
		else if(L3S3==1){
			$("#hardStage3").attr("src", "Stage3Star1.png");
		}
	}

}


//캐릭터 아이템 착용 창 컨트롤
function set_stage3Clear(){
	$(".wearItem").css("display","none");
	if(Lv==1){
		if(L1S1==3){
			$("#item-1-1").css("display","block");
		}
		if(L1S2==3){
			$("#item-1-2").css("display","block");
		}
		if(L1S3==3){
			$("#item-1-3").css("display","block");
		}
	}
	else if(Lv==2){
		if(L2S1==3){
			$("#item-2-1").css("display","block");
		}
		if(L2S2==3){
			$("#item-2-2").css("display","block");
		}
		if(L2S3==3){
			$("#item-2-3").css("display","block");
		}
	}
	else if(Lv==3){
		if(L3S1==3){
			$("#item-3-1").css("display","block");
		}
		if(L3S2==3){
			$("#item-3-2").css("display","block");
		}
		if(L3S3==3){
			$("#item-3-3").css("display","block");
		}
	}
}
//------> 디자인
function init(rad, width){
  
	init_backGround();
	if (level == 1) {
		init_drawBrick_lvl1();
		velocity = 1.5;	// 단계별로 초기 공 속도 설정
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 3;	// 코어벽돌을 맞춰야하는 횟수
		//width = ?;	// 단계별로 초기 바 크기 설정
	}
	else if (level == 2) {
		init_drawBrick_lvl2();
		velocity = 2;	// 단계별로 초기 공 속도 설정
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 5;	// 코어벽돌을 맞춰야하는 횟수
		//width = ?;	// 단계별로 초기 바 크기 설정
	}
	else if (level == 3) {
		init_drawBrick_lvl3();
		velocity = 2.5;	// 단계별로 초기 공 속도 설정
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 7;	// 코어벽돌을 맞춰야하는 횟수
		//width = ?;	// 단계별로 초기 바 크기 설정
	}
	init_drawBar(width);
	init_drawBall(rad);
}
function init_backGround(){
	context = myCanvas[0].getContext('2d');
	cWidth = myCanvas.width();
	cHeight = myCanvas.height();
	cMinx = myCanvas.offset().left;
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
			var alpha = ((bStart + (bWidth/2)) - ballX) / (bWidth / 2) * 0.5; //왼쪽: 양수, 오른쪽: 음수
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
		if (Math.abs(angle) < Math.PI/6) {
			angle = Math.PI/6
		}
		vector = [ Math.cos(angle), -Math.sin(angle) ];
	}
	else {
		vector[0] = -vector[0]
		var angle = Math.atan(vector[1]/vector[0]);
		angle = angle * (1 - alpha);
		if (Math.abs(angle) < Math.PI/6) {
			angle = Math.PI/6
		}
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
			}else if(bricks[i][j] == -2){
				context.drawImage(coffee, j*bricWidth+(bricWidth-bricHeight)/2, i*bricHeight, bricHeight - bricPadding, bricHeight - bricPadding);
			}
		}
	}
}