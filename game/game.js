var hidePage="";
var showPage="";

var audio;

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
var score;
var timer;
var TIME;
var PLAY;
var GAMEDELAY;
var delayTime;
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
var w;
var h;
var bricPadding;
var bricks;
var coreHit;
var crHit;
var background = new Image();
var gameoverimg = new Image();
gameoverimg.src = "gameover.avif";
var brick1 = new Image();
brick1.src = "brick1.png";
var brick2 = new Image();
brick2.src = "brick2.png";
var brick3 = new Image();
brick3.src = "brick3.png";
var corebrick = new Image();
corebrick.src = "corebrick.png";
var present = new Image();
present.src = "present.png";
var ball = new Image();
ball.src = "peach.png";
var ceiling = new Image();
ceiling.src = "";
var scoreimg = new Image();
scoreimg.src = "score.png";
var settings = new Image();
settings.src = "settings.png";

$(document).ready(function(){
	/******************************/
	/**********시작화면************/
	/*****************************/

	$("video").on("click",function(){
		$("video").prop("muted", false);
	});

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
	$(".goBackButton").mouseover(function(){
		$(".goBackButton").attr("src", "goBackButton_mo.png");
	});
	$(".goBackButton").mouseout(function(){
		$(".goBackButton").attr("src", "goBackButton_n.png");
	});

	/******************************/
	/******easy-stage 선택 화면****/
	/*****************************/
	$("#easyStage1").on("click", function(){
		hidePage= ".stagePage";
		showPage = "#EasyStory1-1";
		move_to_NextPage();
		$("video").prop("muted", true);
		audio = new Audio("easy.mp3");
		audio.play();
	});

	$("#easyStage2").on("click", function(){
		if(L1S2!=-1){
			Lv=1;
			stage=2;
			hidePage= ".stagePage";
			showPage = "#EasyStage2Game";
			myCanvas = $("#myCanvas1-2");
			background.src = "easyStage2BG.png";
			move_to_NextPage();
			START();
			$("video").prop("muted", true);
			audio = new Audio("easy.mp3");
			audio.play();
		}
	});
	$("#easyStage3").on("click", function(){
		if(L1S3!=-1){
			Lv=1;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#EasyStage3Game";
			myCanvas = $("#myCanvas1-3");
			background.src = "easyStage3BG.png";
			move_to_NextPage();
			START();
			$("video").prop("muted", true);
			audio = new Audio("easy.mp3");
			audio.play();
		}
	});


	/******************************/
	/********easy: story********/
	/*****************************/
	$("#Easy1-1arr").on("click",function(){
		$("#EasyStory1-1").fadeOut(0);
		$("#EasyStory1-2").fadeIn(0);
	});

	$(".arrow").mouseover(function(){
		$(".arrow").attr("src","arrow_mo.png");
	});

	$(".arrow").mouseout(function(){
		$(".arrow").attr("src","arrow.png");
	});

	$("#storyText1-2 p").on("click",function(){
		$("#EasyStory1-2").fadeOut(0);
		$("#EasyStory1-3").fadeIn(0);
	});

	$(".ST p:first-child").mouseover(function(){
		$(".ST p:first-child").css("font-weight","bold");
	})

	$(".ST p:first-child").mouseout(function(){
		$(".ST p:first-child").css("font-weight","normal");
	})

	$(".ST p:last-child").mouseover(function(){
		$(".ST p:last-child").css("font-weight","bold");
	})

	$(".ST p:last-child").mouseout(function(){
		$(".ST p:last-child").css("font-weight","normal");
	})

	$("#storyText1-3 p").on("click",function(){
		Lv=1;
		stage=1;
		hidePage= "#EasyStory1-3";
		showPage = "#EasyStage1Game";
		myCanvas = $("#myCanvas1-1");
		background.src = "easyStage1BG.png";
		move_to_NextPage();
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
			audio.src="middle.mp3";
			audio.play();
		}
	});

	$("#mediumStage2").on("click", function(){
		if(L2S2!=-1){
			Lv=2;
			stage=2;
			hidePage= ".stagePage";
			showPage = "#MediumStage2Game";
			myCanvas = $("#myCanvas2-2");
			background.src = "mediumStage2BG.png";
			move_to_NextPage();
			START();
			audio.src="middle.mp3";
			audio.play();
		}
	});
	$("#mediumStage3").on("click", function(){
		if(L2S3!=-1){
			Lv=2;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#MediumStage3Game";
			myCanvas = $("#myCanvas2-3");
			background.src = "mediumStage3BG.png";
			move_to_NextPage();
			START();
			audio.src="middle.mp3";
			audio.play();
		}
	});

	/******************************/
	/********medium: story********/
	/*****************************/
	$("#phone_A").on("click", function(){
		$("#mediumStoryB").show();
	})
	$("#phone_A").mouseover(function(){
		$("#phone_A").attr("src","medium1-1phone_A_mo.png");
	});
	$("#phone_A").mouseout(function(){
		$("#phone_A").attr("src","medium1-1phone_A_n.png");
	});


	$("#storyText2-1 p").on("click", function(){
		hidePage= "#MediumStory1-1";
		showPage = "#MediumStory1-2";
		move_to_NextPage();
	});

	$("#phone_C").on("click", function(){
		$("#MediumStory1-1>p").show().fadeOut(3000);
	});
	$("#phone_C").mouseover(function(){
		$("#phone_C").attr("src","medium1-1phone_C_mo.png");
	});
	$("#phone_C").mouseout(function(){
		$("#phone_C").attr("src","medium1-1phone_C_n.png");
	});

	$("#storyText2-2 p").on("click",function(){
		Lv=2;
		stage=1;
		hidePage= "#MediumStory1-2";
		showPage = "#MediumStage1Game";
		myCanvas = $("#myCanvas2-1");
		background.src = "mediumStage1BG.png";
		move_to_NextPage();
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
			audio.src="hard.mp3";
			audio.play();
		}
	});

	$("#hardStage2").on("click", function(){
		if(L3S2!=-1){
			Lv=3;
			stage=2;
			hidePage= ".stagePage";
			showPage = "#HardStage2Game";
			myCanvas = $("#myCanvas3-2");
			background.src = "hardStage2BG.png";
			move_to_NextPage();
			START();
			audio.src="hard.mp3";
			audio.play();
		}
	});

	$("#hardStage3").on("click", function(){
		if(L3S3!=-1){
			Lv=3;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#HardStage3Game";
			myCanvas = $("#myCanvas3-3");
			background.src = "hardStage3BG.png";
			move_to_NextPage();
			START();
			audio.src="hard.mp3";
			audio.play();
		}
	});

	/******************************/
	/********hard: story********/
	/*****************************/

	$("#msgButton").on("click", function(){
		hidePage= "#HardStory1-1";
		showPage = "#HardStory1-2";
		move_to_NextPage();
		setTimeout(function(){
			$("#hardStoryB").show();
		}, 3000);
	});

	$("#msgButton").mouseover(function(){
		$("#msgButton").attr("src", "msgButton_mo.png");
	});

	$("#msgButton").mouseout(function(){
		$("#msgButton").attr("src", "msgButton_n.png");
	});

	$("#storyText3-1 p").on("click", function(){
		Lv=3;
		stage=1;
		hidePage= "#HardStory1-2";
		showPage = "#HardStage1Game";
		myCanvas = $("#myCanvas3-1");
		background.src = "hardStage1BG.png";
		move_to_NextPage();
		START();
	});

	/******************************/
	/********결과창들 제어********/
	/*****************************/
	//-------------->game system

	//스코어 보여주는 창->각 난이도의 스테이지 선택창
	$("#ok_clearButton").on("click", function(){
		$("#item").attr("src", "");
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
		audio.pause();
		move_to_NextPage();
	});
	$("#ok_clearButton").mouseover(function(){
		$("#ok_clearButton").attr("src","okayButton_mo.png");
	})
	$("#ok_clearButton").mouseout(function(){
		$("#ok_clearButton").attr("src","okayButton_n.png");
	})

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
		audio.pause();
		move_to_NextPage();
	});
	$("#ok_failButton").mouseover(function(){
		$("#ok_failButton").attr("src","okayButton_mo.png");
	})
	$("#ok_failButton").mouseout(function(){
		$("#ok_failButton").attr("src","okayButton_n.png");
	})


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
	init();
	draw();
	delayTime = 3;
	PLAY = setInterval(draw, 5);
	TIME = setInterval(setTime, 1000);
	GAMEDELAY = setInterval(delay, 1000);
}

function move_to_NextPage(){
	$(hidePage).fadeOut(0);
	$(showPage).fadeIn(1000);
}


//결과창 출력 
function set_resultPage(){
	var x = judge_Star();
	if(Lv==1&&stage==1){
		$("#resultPage .background").attr("src","easyStage1BG.png");
	}
	else if(Lv==1&&stage==2){
		$("#resultPage .background").attr("src","easyStage2BG.png");
	}	
	else if(Lv==1&&stage==3){
		$("#resultPage .background").attr("src","easyStage3BG.png");
	}
	else if(Lv==2&&stage==1){
		$("#resultPage .background").attr("src","mediumStage1BG.png");
	}
	else if(Lv==2&&stage==2){
		$("#resultPage .background").attr("src","mediumStage2BG.png");
	}
	else if(Lv==2&&stage==3){
		$("#resultPage .background").attr("src","mediumStage3BG.png");
	}
	else if(Lv==3&&stage==1){
		$("#resultPage .background").attr("src","hardStage1BG.png");
	}
	else if(Lv==3&&stage==2){
		$("#resultPage .background").attr("src","hardStage2BG.png");
	}
	else if(Lv==3&&stage==3){
		$("#resultPage .background").attr("src","hardStage3BG.png");
	}


	if(x==3){
		$("#starPrint").attr("src", "resultStar3.png");
		if(Lv==1&&stage==1){
			if(L1S1==3){
				$("#item").attr({"src": "sunglass 1.png", "height" : "120px"});
			}
		}
		else if(Lv==1&&stage==2){
			if(L1S2==3){
				$("#item").attr({"src": "flower 1.png", "height" : "120px"});
			}
		}
		else if(Lv==1&&stage==3){
			if(L1S3==3){
				$("#item").attr({"src": "watermelon 1.png", "height" : "120px"});
			}
		}
		else if(Lv==2&&stage==1){
			if(L2S1==3){
				$("#item").attr({"src": "cucumber 1.png", "height" : "120px"});
			}
		}
		else if(Lv==2&&stage==2){
			if(L2S2==3){
				$("#item").attr({"src": "boba 1.png", "height" : "120px"});
			}
		}
		else if(Lv==2&&stage==3){
			if(L2S3==3){
				$("#item").attr({"src": "rose 2.png", "height" : "120px"});
			}
		}
		else if(Lv==3&&stage==1){
			if(L3S1==3){
				$("#item").attr({"src": "ukelele 1.png", "height" : "120px"});
			}
		}
		else if(Lv==3&&stage==2){
			if(L3S2==3){
				$("#item").attr({"src": "hairpin 1.png", "height" : "120px"});
			}
		}
		else if(Lv==3&&stage==3){
			if(L3S3==3){
				$("#item").attr({"src": "umbrella 1.png" ,"height" : "80px"});
			}
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
	
	$("#scorePrint").html("스코어: "+score);
	$("#timePrint").html("남은 시간: "+timer);
}


//별 몇개 얻었는지 계산
function judge_Star(){
	star=0;
	if(score>=500){
		star++;
	}
	if(timer>=20){
		star++;
	}
	if(coreHit <= crHit){
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
			$("#easyStage1Star").attr("src", "resultStar3.png");
		}
		else if(L1S1==2){
			$("#easyStage1Star").attr("src", "resultStar2.png");
		}
		else if(L1S1==1){
			$("#easyStage1Star").attr("src", "resultStar1.png");
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
			$("#easyStage2Star").attr("src", "resultStar3.png");
		}
		else if(L1S2==2){
			$("#easyStage2Star").attr("src", "resultStar2.png");
		}
		else if(L1S2==1){
			$("#easyStage2Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==1&&stage==3){
		if((L1S1+L1S2+L1S3>=6)&&(L2S1==-1)){
			L2S1=0;
			$("#mediumStage1").attr("src", "Stage1Open.png");
		}

		if(L1S3==3){
			$("#easyStage3Star").attr("src", "resultStar3.png");
		}
		else if(L1S3==2){
			$("#easyStage3Star").attr("src", "resultStar2.png");
		}
		else if(L1S3==1){
			$("#easyStage3Star").attr("src", "resultStar1.png");
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
			$("#mediumStage1Star").attr("src", "resultStar3.png");
		}
		else if(L2S1==2){
			$("#mediumStage1Star").attr("src", "resultStar2.png");
		}
		else if(L2S1==1){
			$("#mediumStage1Star").attr("src", "resultStar1.png");
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
			$("#mediumStage2Star").attr("src", "resultStar3.png");
		}
		else if(L2S2==2){
			$("#mediumStage2Star").attr("src", "resultStar2.png");
		}
		else if(L2S2==1){
			$("#mediumStage2Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==2&&stage==3){
		if((L2S1+L2S2+L2S3>=6)&&(L3S1==-1)){
			L3S1=0;
			$("#hardStage1").attr("src", "Stage1Open.png");
		}

		if(L2S3==3){
			$("#mediumStage3Star").attr("src", "resultStar3.png");
		}
		else if(L2S3==2){
			$("#mediumStage3Star").attr("src", "resultStar2.png");
		}
		else if(L2S3==1){
			$("#mediumStage3Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==3&&stage==1){
		if(L3S2==-1){
			L3S2=0;
			$("#hardStage2").attr("src", "Stage2Open.png");
		}

		if(L3S1==3){
			$("#hardStage1Star").attr("src", "resultStar3.png");
		}
		else if(L3S1==2){
			$("#hardStage1Star").attr("src", "resultStar2.png");
		}
		else if(L3S1==1){
			$("#hardStage1Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==3&&stage==2){
		if(L3S3==-1){
			L3S3=0;
			$("#hardStage3").attr("src", "Stage3Open.png");
		}

		if(L3S2==3){
			$("#hardStage2Star").attr("src", "resultStar3.png");
		}
		else if(L3S2==2){
			$("#hardStage2Star").attr("src", "resultStar2.png");
		}
		else if(L3S2==1){
			$("#hardStage2Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==3&&stage==3){

		if(L3S3==3){
			$("#hardStage3Star").attr("src", "resultStar3.png");
		}
		else if(L3S3==2){
			$("#hardStage3Star").attr("src", "resultStar2.png");
		}
		else if(L3S1==1){
			$("#hardStage3Star").attr("src", "resultStar1.png");
		}
	}
	
}


//캐릭터 아이템 착용 창 컨트롤
function set_stage3Clear(){
	$(".wearItem").css("display","none");
	if(Lv==1){
		$("#stage3Clear .background").attr("src","easyFinBG.png");
		if(L1S1<3&&L1S2<3&&L1S3<3){
			$("#fashion").attr("src","neoguul.png");
			$("#stage3Clear .A").attr("src","finNgA.png");
		}
		else{
			$("#fashion").attr("src","boy 1.png");
			$("#stage3Clear .A").attr("src","finNaA.png");
		}
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
		$("#stage3Clear .background").attr("src","mediumFinBG.png");
		if(L2S1<3&&L2S2<3&&L2S3<3){
			$("#fashion").attr("src","neoguul.png");
			$("#stage3Clear .A").attr("src","finNgA.png");
		}
		else{
			$("#fashion").attr("src","boy 1.png");
			$("#stage3Clear .A").attr("src","finNaA.png");
		}
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
		$("#stage3Clear .background").attr("src","hardFinBG.png");
		if(L3S1<3&&L3S2<3&&L3S3<3){
			$("#fashion").attr("src","neoguul.png");
			$("#stage3Clear .A").attr("src","finNgA.png");
		}
		else{
			$("#fashion").attr("src","boy 1.png");
			$("#stage3Clear .A").attr("src","finNaA.png");
		}
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
function init(){
	init_backGround();
	score = 0;
	timer = 100;
	if (stage == 1) {
		init_drawBrick_lvl1();
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 3;	// 코어벽돌을 맞춰야하는 횟수
	}
	else if (stage == 2) {
		init_drawBrick_lvl2();
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 5;	// 코어벽돌을 맞춰야하는 횟수
	}
	else if (stage == 3) {
		init_drawBrick_lvl3();
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 7;	// 코어벽돌을 맞춰야하는 횟수
	}
	if (Lv == 1) {
		velocity = 1.5;	// 단계별로 초기 공 속도 설정
		init_drawBar(400);	// 단계별로 초기 바 크기 설정
		init_drawBall(20);
	}
	else if (Lv== 2) {
		velocity = 2;	// 단계별로 초기 공 속도 설정
		init_drawBar(300);	// 단계별로 초기 바 크기 설정
		init_drawBall(20);
	}
	else if (Lv == 3) {
		velocity = 2.5;	// 단계별로 초기 공 속도 설정
		init_drawBar(200);	// 단계별로 초기 바 크기 설정
		init_drawBall(20);
	}
}
function init_backGround() {
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
	drawCeiling();
	drawTimenScore();
	ballReflection();
	drawSettings();
	if (delayTime == 0) {
		ballX += velocity*vector[0];
		ballY += velocity*vector[1];
	}
	if((coreHit <= crHit) || timer == 0){
		endPlay("#resultPage");
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
			var alpha = ((bStart + (bWidth/2)) - ballX) / (bWidth / 2) * 0.8; //왼쪽: 양수, 오른쪽: 음수
			barReflection(alpha);
			ballY = cHeight - ballRadius
		}else{
			endPlay("#failPage");
		}
	}
	if(ballY <= h){
		vector[1] = -vector[1];
	}
	if(ballX + ballRadius  >= w && ballY + ballRadius >= h){
		brickReflection();
	}
}

function brickReflection() {
	var row = Math.floor((ballY + ballRadius - h)/bricHeight);
	var col = Math.floor((ballX + ballRadius - w + velocity*vector[0])/bricWidth);

	if(row < ROWS && col < COLS && (row >= 0 && col >= 0)) {
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
				bWidth -= 30;
			}
			else if (event == 1) {
				velocity += 1;
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

	row = Math.floor((ballY + ballRadius - h + velocity*vector[1])/bricHeight);
	col = Math.floor((ballX + ballRadius - w)/bricWidth);
	

	if(row < ROWS && col < COLS && (row >= 0 && col >= 0)) {
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

function delay() {
	delayTime -= 1;
	if (delayTime == 0) {
		clearInterval(GAMEDELAY);
	}
}

function endPlay(sp){
	audio.pause();

	set_resultPage();

	hidePage= ".gamePage";
	showPage = sp;
	if(showPage == "#resultPage"){
		audio.src="success.mp3";
	}else if (showPage == "#failPage"){
		audio.src="fail.mp3";
	}
	move_to_NextPage();

	audio.play();
	clearInterval(PLAY);
	clearInterval(TIME);
}

function setTime(){
	if (delayTime == 0) {
		--timer;
	}
}
function drawSettings(){
	var set = $("#settings");
	var contxt = set[0].getContext('2d');
	contxt.drawImage(settings, 0, 0, set.width(), set.height());
}
function drawTimenScore(){
	var set = $("#scoredata");
	var contxt = set[0].getContext('2d');
	contxt.drawImage(scoreimg, 950,0, 180, 150);
	contxt.font = "40px KoreanSDNRM";
	contxt.fillStyle = "#FEED9F";
	contxt.textAlign = "center";
	contxt.fillText(score, cWidth - 87 ,cHeight - 700);
	if (delayTime != 0) {
		context.font = "80px Georgia";
		context.fillStyle = "white";
		context.fillText(delayTime, cWidth/2 - 20, cHeight/2 - 50);
	}
}
function init_drawBall(rad) {
	ballRadius = rad;
	ballX = bStart + bWidth/2;
	ballY = cHeight - ballRadius - bHeight - 20;
	vector = [Math.sqrt(0.5), Math.sqrt(0.5)];
}
function drawBall(){
	context.drawImage(ball, ballX - ballRadius, ballY - ballRadius, ballRadius*2, ballRadius*2);
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
function drawCeiling(){
	context.fillStyle = "#603000";
	context.beginPath();
	context.fillRect(0, 0, cWidth, h);
}
function init_drawBrick_lvl1(){
	ROWS = 3;
	COLS = 4;
	bricPadding = 10;
	w = 100;
	h = 120;
	bricWidth = (cWidth - 2*w)/COLS;
	bricHeight = (cHeight - 2*h - 200)/ROWS;

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
	bricPadding = 10;
	w = 100;
	h = 120;
	bricWidth = (cWidth - 2*w)/COLS;
	bricHeight = (cHeight - 2*h - 120)/ROWS;

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
	bricPadding = 10;
	w = 100;
	h = 120;
	bricWidth = (cWidth - 2*w)/COLS;
	bricHeight = (cHeight - 2*h - 50)/ROWS;

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
				context.drawImage(brick3, w+j*bricWidth, h+i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == 2){
				context.drawImage(brick2, w+j*bricWidth, h+i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == 1){
				context.drawImage(brick1, w+j*bricWidth, h+i*bricHeight,  bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == -1){
				context.drawImage(present, w+j*bricWidth, h+i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == -2){
				context.drawImage(present, w+j*bricWidth, h+i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}
		}
	}

	context.drawImage(corebrick, w+(COLS/2-1)*bricWidth, h, bricWidth*2 - bricPadding, bricHeight*2 - bricPadding);

}