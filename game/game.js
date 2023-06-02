var hidePage="";
var showPage="";

var audio;

var star=0;

var Lv=0;
var stage=0;

var openedStage = [[0,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var scoreLV = [400, 800, 1200];

var failcheck = false;
var AUDIO = true;


//---------> 디자인
var barcolor = "#FFFFFF";
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
var STARTIMER = false;
var STARCOREHIT = false;
var STARSCORE = false;
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
var scorebrick = new Image();
scorebrick.src = "scorebrick.png";
var deburfbrick = new Image();
deburfbrick.src = "deburfbrick.png";
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
	$(".goToStart").on("click", function(){
		hidePage= "#levelPage";
		showPage = "#startPage";
		move_to_NextPage();
	});

	$(".methodArrow").on("click", function(){
		hidePage= "#methodPage";
		showPage = "#startPage";
		move_to_NextPage();
	});

	$(".goToStart").mouseover(function(){
		$(".goToStart").attr("src", "goBackButton_mo.png");
	});
	$(".goToStart").mouseout(function(){
		$(".goToStart").attr("src", "goBackButton_n.png");
	});
	$("#easyStage1").mouseover(function(){
		$(".stage1Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#easyStage1").mouseout(function(){
		$(".stage1Text").css("text-shadow", "none");
	})
	$("#easyStage2").mouseover(function(){
		$(".stage2Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#easyStage2").mouseout(function(){
		$(".stage2Text").css("text-shadow", "none");
	})
	$("#easyStage3").mouseover(function(){
		$(".stage3Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#easyStage3").mouseout(function(){
		$(".stage3Text").css("text-shadow", "none");
	})
	$("#mediumStage1").mouseover(function(){
		$(".stage1Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#mediumStage1").mouseout(function(){
		$(".stage1Text").css("text-shadow", "none");
	})
	$("#mediumStage2").mouseover(function(){
		$(".stage2Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#mediumStage2").mouseout(function(){
		$(".stage2Text").css("text-shadow", "none");
	})
	$("#mediumStage3").mouseover(function(){
		$(".stage3Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#mediumStage3").mouseout(function(){
		$(".stage3Text").css("text-shadow", "none");
	})
	$("#hardStage1").mouseover(function(){
		$(".stage1Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#hardStage1").mouseout(function(){
		$(".stage1Text").css("text-shadow", "none");
	})
	$("#hardStage2").mouseover(function(){
		$(".stage2Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#hardStage2").mouseout(function(){
		$(".stage2Text").css("text-shadow", "none");
	})
	$("#hardStage3").mouseover(function(){
		$(".stage3Text").css("text-shadow", "2px 2px 4px gray");
	})
	$("#hardStage3").mouseout(function(){
		$(".stage3Text").css("text-shadow", "none");
	})

	/******************************/
	/******easy-stage 선택 화면****/
	/*****************************/
	$("#easyStage1").on("click", function(){
		hidePage= ".stagePage";
		showPage = "#EasyStory1-1";
		move_to_NextPage();
	});

	$("#easyStage2").on("click", function(){
		if(openedStage[0][1]!=-1){
			Lv=1;
			stage=2;
			hidePage= ".stagePage";
			PLAY_1(2);
		}
	});
	$("#easyStage3").on("click", function(){
		if(openedStage[0][2]!=-1){
			Lv=1;
			stage=3;
			hidePage= ".stagePage";
			PLAY_1(3);
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
		PLAY_1(1);
	});


	/******************************/
	/****medium-stage 선택 화면****/
	/*****************************/

	$("#mediumStage1").on("click", function(){
		if(openedStage[1][0]!=-1){
			hidePage= ".stagePage";
			showPage = "#MediumStory1-1";
			move_to_NextPage();
		}
	});

	$("#mediumStage2").on("click", function(){
		if(openedStage[1][1]!=-1){
			Lv=2;
			stage=2;
			hidePage= ".stagePage";
			PLAY_2(2);
		}
	});
	$("#mediumStage3").on("click", function(){
		if(openedStage[1][2]!=-1){
			Lv=2;
			stage=3;
			hidePage= ".stagePage";
			PLAY_2(3);
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
		$("#mediumStoryB").fadeOut(0);
		PLAY_2(1);
	});

	/******************************/
	/****hard-stage 선택 화면****/
	/*****************************/

	$("#hardStage1").on("click", function(){
		if(openedStage[2][0]!=-1){
			hidePage= ".stagePage";
			showPage = "#HardStory1-1";
			move_to_NextPage();
		}
	});

	$("#hardStage2").on("click", function(){
		if(openedStage[2][1]!=-1){
			Lv=3;
			stage=2;
			hidePage= ".stagePage";
			PLAY_3(2);
		}
	});

	$("#hardStage3").on("click", function(){
		if(openedStage[2][2]!=-1){
			Lv=3;
			stage=3;
			hidePage= ".stagePage";
			PLAY_3(3);
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
		hidePage = "#HardStory1-2"
		$("#hardStoryB").fadeOut(0);
		PLAY_3(1);
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
		/*
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
		else{*/

		set_stage3Clear();
		showPage="#stage3Clear";
		//}
		if(AUDIO){
			audio.pause();
		}
		$("video").prop("muted", false);
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
		failcheck=true;
		set_stage3Clear();
		showPage="#stage3Clear";
		if(AUDIO){
			audio.pause();
		}
		$("video").prop("muted", false);
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
		hidePage="#stage3Clear";
		//if($("#fashion").src == "neoguul.png"){
		if(failcheck==true){
			if(Lv==1){
				if(stage == 1){
					failcheck=false;
					PLAY_1(1);
				}else if(stage ==2){
					failcheck=false;
					PLAY_1(2);
				}else if(stage == 3){
					failcheck=false;
					PLAY_1(3);
				}
			}else if(Lv==2){
				if(stage == 1){
					failcheck=false;
					PLAY_2(1);
				}else if(stage ==2){
					failcheck=false;
					PLAY_2(2);
				}else if(stage == 3){
					failcheck=false;
					PLAY_2(3);
				}
			}else if(Lv==3){
				if(stage == 1){
					failcheck=false;
					PLAY_3(1);
				}else if(stage ==2){
					failcheck=false;
					PLAY_3(2);
				}else if(stage == 3){
					failcheck=false;
					PLAY_3(3);
				}
			}
		}else{
			if(Lv==1){
				if(stage==3){
					if(openedStage[0][0]+openedStage[0][1]+openedStage[0][2]>=7){
						hidePage = "#stage3Clear";
						showPage = "#MediumStory1-1";
						move_to_NextPage();
					}
					else{
						$("#stage3Clear>p").show().fadeOut(3000);
					}
				}
				else{
					if(stage==1){
						Lv=1;
						stage=2;
						PLAY_1(2);
					}
					else if(stage==2){
						Lv=1;
						stage=3;
						PLAY_1(3);
					}
				}
			}else if(Lv==2){
				if(stage==3){
					if(openedStage[1][0]+openedStage[1][1]+openedStage[1][2]>=7){
						hidePage = "#stage3Clear";
						showPage = "#HardStory1-1";
						move_to_NextPage();
					}
					else{
						$("#stage3Clear>p").show().fadeOut(3000);
					}
				}
				else{
					if(stage==1){
						Lv=2;
						stage=2;
						PLAY_2(2);
					}
					else if(stage==2){
						PLAY_2(3);
						Lv=2;
						stage=3;
					}
				}
			}else if(Lv==3){
				if(stage==1){
					Lv=3;
					stage=2;
					PLAY_3(2);
				}
				else if(stage==2){
					Lv=3;
					stage=3;
					PLAY_3(3);
				}         
			}

		}
	});

	$("#noNextLevel").on("click", function(){
		hidePage="#stage3Clear";
		if(Lv==1){
			failcheck=false;
			showPage="#easyStagePage";
		}
		else if(Lv==2){
			failcheck=false;
			showPage="#mediumStagePage";
		}
		else if(Lv==3){
			failcheck=false;
			showPage="#hardStagePage"; 
		}
		move_to_NextPage();
	});
	//--------> 디자인
	/*****환경설정*****/
	$(".settings").on("click", function(){
		hidePage = ".gamePage";
		showPage = ".settingsPage";
		PAUSE();
		move_to_NextPage();
	});
	$(".settingsBack").mouseover(function(){
		$(".settingsBack").attr("src", "goBackButton_mo.png");
	});
	$(".settingsBack").mouseout(function(){
		$(".settingsBack").attr("src", "goBackButton_n.png");
	});
	$(".settingsBack").on("click", function() {
		hidePage = ".settingsPage";
		if(Lv==1){
			if(stage==1){
				showPage="#EasyStage1Game";
			}
			else if(stage==2){
				showPage="#EasyStage2Game";
			}
			else if(stage==3){
				showPage="#EasyStage3Game";
			}
		}
		else if(Lv==2){
			if(stage==1){
				showPage="#MediumStage1Game";
			}
			else if(stage==2){
				showPage="#MediumStage2Game";
			}
			else if(stage==3){
				showPage="#MediumStage3Game";
			}
		}
		else if(Lv==3){
			if(stage==1){
				showPage="#HardStage1Game";
			}
			else if(stage==2){
				showPage="#HardStage2Game";
			}
			else if(stage==3){
				showPage="#HardStage3Game";
			}
		}
		move_to_NextPage();
		RESTART();
	})
	$("#fingerp").css("display", "inline");
	$("#finger4").css("display", "inline");
	$("#fingeron").css("display", "inline");
	//공 모양
	$("#cherry").on("click", function(){
		ball.src = "cherry.png";
		$(".ballsize .finger").css("display", "none");
		$("#fingerc").css("display", "inline");
	})
	$("#orange").on("click", function(){
		ball.src = "orange.png";
		$(".ballsize .finger").css("display", "none");
		$("#fingero").css("display", "inline");
	})
	$("#peach").on("click", function(){
		ball.src = "peach.png";
		$(".ballsize .finger").css("display", "none");
		$("#fingerp").css("display", "inline");
	})
	$("#apple").on("click", function(){
		ball.src = "apple.png";
		$(".ballsize .finger").css("display", "none");
		$("#fingera").css("display", "inline");
	})

	//바 색깔
	$("#color4").on("click", function(){
		barcolor = "#FFFFFF";
		$(".barcolor .finger").css("display", "none");
		$("#finger4").css("display", "inline");
	})
	$("#color5").on("click", function(){
		barcolor = "#FF528C";
		$(".barcolor .finger").css("display", "none");
		$("#finger5").css("display", "inline");
	})
	$("#color6").on("click", function(){
		barcolor = "#0099FF";
		$(".barcolor .finger").css("display", "none");
		$("#finger6").css("display", "inline");
	})
	$("#color7").on("click", function(){
		barcolor = "#FFB800";
		$(".barcolor .finger").css("display", "none");
		$("#finger7").css("display", "inline");
	})

	//뮤트 기능 
	$("#switchon").on("click", function(){
		audio.play();
		if(!AUDIO){
			AUDIO = !AUDIO;
		}
		$(".musicmute .finger").css("display", "none");
		$("#fingeron").css("display", "inline");
	})
	$("#switchoff").on("click", function(){
		audio.pause();
		if(AUDIO){
			AUDIO = !AUDIO;
		}
		$(".musicmute .finger").css("display", "none");
		$("#fingeroff").css("display", "inline");
	})

	$(document).mousemove(function(e){
		if(e.pageX >= cMinx && e.pageX <= cMaxx){
			bStart = e.pageX - cMinx - (bWidth/2);
		}
	})
})
function PLAY_1(s){
	$("video").prop("muted", true);
	showPage = "#EasyStage"+s+"Game";
	myCanvas = $("#myCanvas1-"+s);
	background.src = "easyStage"+s+"BG.png";
	move_to_NextPage();
	START();
	audio = new Audio("easy.mp3");
	if(AUDIO){
		audio.play();
	}
}
function PLAY_2(s){
	$("video").prop("muted", true);
	showPage = "#MediumStage"+s+"Game";
	myCanvas = $("#myCanvas2-"+s);
	background.src = "mediumStage"+s+"BG.png";
	move_to_NextPage();
	START();
	audio =new Audio("middle.mp3");
	if(AUDIO){
		audio.play();
	}
}
function PLAY_3(s){
	$("video").prop("muted", true);
	showPage = "#HardStage"+s+"Game";
	myCanvas = $("#myCanvas3-"+s);
	background.src = "hardStage"+s+"BG.png";
	move_to_NextPage();
	START();
	audio = new Audio("hard.mp3");
	if(AUDIO){
		audio.play();
	}
}
function PAUSE() {
	clearInterval(PLAY);
	clearInterval(TIME);
	clearInterval(GAMEDELAY);
}
function RESTART(){
	delayTime = 3;
	PLAY = setInterval(draw, 5);
	TIME = setInterval(setTime, 1000);
	GAMEDELAY = setInterval(delay, 1000);
}
function START(){
	init();
	STARSCORE = false;
	STARCOREHIT = false;
	STARTIMER = false;
	delayTime = 3;
	$(".gameStar").attr("src","resultStar0.png");
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


	if(x>=1){
		if(Lv==1&&stage==1){
			if(openedStage[0][0]>=1){
				$("#item").attr({"src": "sunglass 1.png", "height" : "120px"});
			}
		}
		else if(Lv==1&&stage==2){
			if(openedStage[0][1]>=1){
				$("#item").attr({"src": "flower 1.png", "height" : "120px"});
			}
		}
		else if(Lv==1&&stage==3){
			if(openedStage[0][2]>=1){
				$("#item").attr({"src": "watermelon 1.png", "height" : "120px"});
			}
		}
		else if(Lv==2&&stage==1){
			if(openedStage[1][0]>=1){
				$("#item").attr({"src": "cucumber 1.png", "height" : "120px"});
			}
		}
		else if(Lv==2&&stage==2){
			if(openedStage[1][1]>=1){
				$("#item").attr({"src": "boba 1.png", "height" : "120px"});
			}
		}
		else if(Lv==2&&stage==3){
			if(openedStage[1][2]>=1){
				$("#item").attr({"src": "rose 2.png", "height" : "120px"});
			}
		}
		else if(Lv==3&&stage==1){
			if(openedStage[2][0]>=1){
				$("#item").attr({"src": "ukelele 1.png", "height" : "120px"});
			}
		}
		else if(Lv==3&&stage==2){
			if(openedStage[2][1]>=1){
				$("#item").attr({"src": "hairpin 1.png", "height" : "120px"});
			}
		}
		else if(Lv==3&&stage==3){
			if(openedStage[2][2]>=1){
				$("#item").attr({"src": "umbrella 1.png" ,"height" : "80px"});
			}
		}
		$("#itemBox").show();
		if(x==3){
			$("#starPrint").attr("src", "resultStar3.png");
		}else if(x==2){
			$("#starPrint").attr("src", "resultStar2.png");
		}else if(x==1){
			$("#starPrint").attr("src", "resultStar1.png");
		}

	}
	else if(x==0){
		$("#starPrint").attr("src", "resultStar0.png");
	}

	$("#scorePrint").html("스코어: "+score);
	$("#timePrint").html("남은 시간: "+timer);
}
function add_Star(){
	if($(".gameStar").attr("src") == "resultStar0.png"){
		$(".gameStar").attr("src", "resultStar1.png");
	}else if($(".gameStar").attr("src") == "resultStar1.png"){
		$(".gameStar").attr("src", "resultStar2.png");
	}else if($(".gameStar").attr("src") == "resultStar2.png"){
		$(".gameStar").attr("src", "resultStar3.png");
	}
}
function StarTimer(){
	if(timer>0 && !STARTIMER){
		add_Star();
		STARTIMER = true;
	}
}
function StarCorehit(){
	if(coreHit <= crHit && !STARCOREHIT){
		add_Star();
		STARCOREHIT = true;
	}
}
function StarScore(){
	if(Lv==1&&score>=scoreLV[0] && !STARSCORE){
		add_Star();
		STARSCORE = true;
	}
	if(Lv==2&&score>=scoreLV[1] && !STARSCORE){
		add_Star();
		STARSCORE = true;
	}
	if(Lv==3&&score>=scoreLV[2] && !STARSCORE){
		add_Star();
		STARSCORE = true;
	}
}
//별 몇개 얻었는지 계산
function judge_Star(){
	star=0;
	if(timer>=0){
		star++;
	}
	if(coreHit <= crHit){
		star++;
	}

	if(Lv==1&&stage==1){
		if(score>=scoreLV[0]){
			star++;
		}
		if(openedStage[0][0]<star){
			openedStage[0][0]=star;
		}
	}
	else if(Lv==1&&stage==2){
		if(score>=scoreLV[0]){
			star++;
		}
		if(openedStage[0][1]<star){
			openedStage[0][1]=star;
		}
	}
	else if(Lv==1&&stage==3){
		if(score>=scoreLV[0]){
			star++;
		}
		if(openedStage[0][2]<star){
			openedStage[0][2]=star;
		}
	}
	else if(Lv==2&&stage==1){
		if(score>=scoreLV[1]){
			star++;
		}
		if(openedStage[1][0]<star){
			openedStage[1][0]=star;
		}
	}
	else if(Lv==2&&stage==2){
		if(score>=scoreLV[1]){
			star++;
		}
		if(openedStage[1][1]<star){
			openedStage[1][1]=star;
		}
	}
	else if(Lv==2&&stage==3){
		if(score>=scoreLV[1]){
			star++;
		}
		if(openedStage[1][2]<star){
			openedStage[1][2]=star;
		}
	}
	else if(Lv==3&&stage==1){
		if(score>=scoreLV[2]){
			star++;
		}
		if(openedStage[2][0]<star){
			openedStage[2][0]=star;
		}
	}
	else if(Lv==3&&stage==2){
		if(score>=scoreLV[2]){
			star++;
		}
		if(openedStage[2][1]<star){
			openedStage[2][1]=star;
		}
	}
	else if(Lv==3&&stage==3){
		if(score>=scoreLV[2]){
			star++;
		}
		if(openedStage[2][2]<star){
			openedStage[2][2]=star;
		}
	}

	return star;
}


//stage클리어 여부에 따른 오픈 페이지
function set_stagePage(){
	if(Lv==1&&stage==1){
		if(openedStage[0][1]==-1){
			openedStage[0][1]=0;
			$("#easyStage2").attr("src", "Stage2Open.png");
		}
		else{
			if((openedStage[0][0]+openedStage[0][1]+openedStage[0][2]>=7)&&(openedStage[1][0]==-1)){
				openedStage[1][0]=0;
				$("#mediumStage1").attr("src", "Stage1Open.png");
			}
		}

		if(openedStage[0][0]==3){
			$("#easyStage1Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[0][0]==2){
			$("#easyStage1Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[0][0]==1){
			$("#easyStage1Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==1&&stage==2){
		if(openedStage[0][2]==-1){
			openedStage[0][2]=0;
			$("#easyStage3").attr("src", "Stage3Open.png");
		}
		else{
			if((openedStage[0][0]+openedStage[0][1]+openedStage[0][2]>=7)&&(openedStage[1][0]==-1)){
				openedStage[1][0]=0;
				$("#mediumStage1").attr("src", "Stage1Open.png");
			}
		}

		if(openedStage[0][1]==3){
			$("#easyStage2Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[0][1]==2){
			$("#easyStage2Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[0][1]==1){
			$("#easyStage2Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==1&&stage==3){
		if((openedStage[0][0]+openedStage[0][1]+openedStage[0][2]>=7)&&(openedStage[1][0]==-1)){
			openedStage[1][0]=0;
			$("#mediumStage1").attr("src", "Stage1Open.png");
		}

		if(openedStage[0][2]==3){
			$("#easyStage3Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[0][2]==2){
			$("#easyStage3Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[0][2]==1){
			$("#easyStage3Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==2&&stage==1){
		if(openedStage[1][1]==-1){
			openedStage[1][1]=0;
			$("#mediumStage2").attr("src", "Stage2Open.png");
		}
		else{
			if((openedStage[1][0]+openedStage[1][1]+openedStage[1][2]>=7)&&(openedStage[2][0]==-1)){
				openedStage[2][0]=0;
				$("#hardStage1").attr("src", "Stage1Open.png");
			}
		}

		if(openedStage[1][0]==3){
			$("#mediumStage1Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[1][0]==2){
			$("#mediumStage1Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[1][0]==1){
			$("#mediumStage1Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==2&&stage==2){
		if(openedStage[1][2]==-1){
			openedStage[1][2]=0;
			$("#mediumStage3").attr("src", "Stage3Open.png");
		}
		else{
			if((openedStage[1][0]+openedStage[1][1]+openedStage[1][2]>=7)&&(openedStage[2][0]==-1)){
				openedStage[2][0]=0;
				$("#hardStage1").attr("src", "Stage1Open.png");
			}
		}

		if(openedStage[1][1]==3){
			$("#mediumStage2Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[1][1]==2){
			$("#mediumStage2Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[1][1]==1){
			$("#mediumStage2Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==2&&stage==3){
		if((openedStage[1][0]+openedStage[1][1]+openedStage[1][2]>=7)&&(openedStage[2][0]==-1)){
			openedStage[2][0]=0;
			$("#hardStage1").attr("src", "Stage1Open.png");
		}

		if(openedStage[1][2]==3){
			$("#mediumStage3Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[1][2]==2){
			$("#mediumStage3Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[1][2]==1){
			$("#mediumStage3Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==3&&stage==1){
		if(openedStage[2][1]==-1){
			openedStage[2][1]=0;
			$("#hardStage2").attr("src", "Stage2Open.png");
		}

		if(openedStage[2][0]==3){
			$("#hardStage1Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[2][0]==2){
			$("#hardStage1Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[2][0]==1){
			$("#hardStage1Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==3&&stage==2){
		if(openedStage[2][2]==-1){
			openedStage[2][2]=0;
			$("#hardStage3").attr("src", "Stage3Open.png");
		}

		if(openedStage[2][1]==3){
			$("#hardStage2Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[2][1]==2){
			$("#hardStage2Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[2][1]==1){
			$("#hardStage2Star").attr("src", "resultStar1.png");
		}
	}

	if(Lv==3&&stage==3){

		if(openedStage[2][2]==3){
			$("#hardStage3Star").attr("src", "resultStar3.png");
		}
		else if(openedStage[2][2]==2){
			$("#hardStage3Star").attr("src", "resultStar2.png");
		}
		else if(openedStage[2][2]==1){
			$("#hardStage3Star").attr("src", "resultStar1.png");
		}
	}

}


//캐릭터 아이템 착용 창 컨트롤
function set_stage3Clear(){
	$(".wearItem").css("display","none");
	if(Lv==1){
		if((openedStage[0][0]>=1||openedStage[0][1]>=1||openedStage[0][2]>=1)&&failcheck==false){
			$("#fashion").attr("src","boy 1.png");
			$("#nextLevel").html("다음 단계 플레이하기");
			if(openedStage[0][0]>=1){
				$("#stage3Clear .background").attr("src","easy-1FinBG.png");
				$("#stage3Clear .A").attr("src","easy-1-Na.png");
				$("#item-1-1").css("display","block");
			}
			if(openedStage[0][1]>=1){
				$("#stage3Clear .background").attr("src","easy-2FinBG.png");
				$("#stage3Clear .A").attr("src","easy-2-Na.png");
				$("#item-1-2").css("display","block");
			}
			if(openedStage[0][2]>=1){
				$("#stage3Clear .background").attr("src","easy-3FinBG.png");
				$("#stage3Clear .A").attr("src","easy-3-Na.png");
				$("#item-1-3").css("display","block");
			}
		}
		else{
			$("#stage3Clear .background").attr("src","easy-3FinBG.png");
			$("#fashion").attr("src","neoguul.png");
			$("#nextLevel").html("다시 플레이하기");
			$("#stage3Clear .A").attr("src","finNgA.png");
		}
	}
	else if(Lv==2){
		if((openedStage[1][0]>=1||openedStage[1][1]>=1||openedStage[1][2]>=1)&&failcheck==false){
			$("#fashion").attr("src","boy 1.png");
			$("#nextLevel").html("다음 단계 플레이하기");
			if(openedStage[1][0]>=1){
				$("#stage3Clear .background").attr("src","medium-1FinBG.png");
				$("#stage3Clear .A").attr("src","medium-1-Na.png");
				$("#item-2-1").css("display","block");
			}
			if(openedStage[1][1]>=1){
				$("#stage3Clear .background").attr("src","medium-2FinBG.png");
				$("#stage3Clear .A").attr("src","medium-2-Na.png");
				$("#item-2-2").css("display","block");
			}
			if(openedStage[1][2]>=1){
				$("#stage3Clear .background").attr("src","medium-3FinBG.png");
				$("#stage3Clear .A").attr("src","medium-3-Na.png");
				$("#item-2-3").css("display","block");
			}
		}else{
			$("#stage3Clear .background").attr("src","medium-3FinBG.png");
			$("#fashion").attr("src","neoguul.png");
			$("#nextLevel").html("다시 플레이하기");
			$("#stage3Clear .A").attr("src","finNgA.png");
		}
	}
	else if(Lv==3){
		if((openedStage[2][0]>=1||openedStage[2][1]>=1||openedStage[2][2]>=1)&&failcheck==false){
			$("#fashion").attr("src","boy 1.png");
			$("#nextLevel").html("");
			if(openedStage[2][0]>=1){
				$("#stage3Clear .background").attr("src","hard-1FinBG.png");
				$("#nextLevel").html("다음 단계 플레이하기");
				$("#stage3Clear .A").attr("src","hard-1-Na.png");
				$("#item-3-1").css("display","block");
			}
			if(openedStage[2][1]>=1){
				$("#stage3Clear .background").attr("src","hard-2FinBG.png");
				$("#nextLevel").html("다음 단계 플레이하기");
				$("#stage3Clear .A").attr("src","hard-2-Na.png");
				$("#item-3-2").css("display","block");
			}
			if(openedStage[2][2]>=1){
				$("#stage3Clear .background").attr("src","hard-3FinBG.png");
				$("#nextLevel").html("");
				$("#stage3Clear .A").attr("src","hard-3-Na.png");
				$("#item-3-3").css("display","block");
			}
		}else{
			$("#stage3Clear .background").attr("src","hard-3FinBG.png");
			$("#fashion").attr("src","neoguul.png");
			$("#nextLevel").html("다시 플레이하기");
			$("#stage3Clear .A").attr("src","finNgA.png");
		}
	}
}
//------> 디자인
function init(){
	init_backGround();
	score = 0;
	if (Lv == 1) {
		velocity = 2;	// 단계별로 초기 공 속도 설정
		init_drawBar(400);	// 단계별로 초기 바 크기 설정
		init_drawBall(30);
		init_drawBrick_lvl1();
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 3;	// 코어벽돌을 맞춰야하는 횟수
	}
	else if (Lv== 2) {
		velocity = 3;	// 단계별로 초기 공 속도 설정
		init_drawBar(300);	// 단계별로 초기 바 크기 설정
		init_drawBall(30);
		init_drawBrick_lvl2();
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 5;	// 코어벽돌을 맞춰야하는 횟수
	}
	else if (Lv == 3) {
		velocity = 4;	// 단계별로 초기 공 속도 설정
		init_drawBar(200);	// 단계별로 초기 바 크기 설정
		init_drawBall(30);
		init_drawBrick_lvl3();
		crHit = 0;		// 유저가 코어 맞춘 횟수 초기화
		coreHit = 7;	// 코어벽돌을 맞춰야하는 횟수
	}
}
function init_backGround() {
	context = myCanvas[0].getContext('2d');
	cWidth = myCanvas.width();
	cHeight = myCanvas.height();
	cMinx = myCanvas.offset().left;
	cMaxx = cMinx + cWidth;
}
function draw() {
	context.clearRect(0,0,cWidth, cHeight);
	context.drawImage(background, 0, 0, cWidth, cHeight);
	drawBall();
	drawBar();
	drawBrick();
	drawCeiling();
	drawTimenScore();
	ballReflection();

	StarScore();
	StarTimer();
	StarCorehit();

	if (delayTime == 0) {
		ballX += velocity*vector[0];
		ballY += velocity*vector[1];
	}

	if(timer <= 0){
		endPlay("#resultPage");
	}
	if(coreHit <= crHit){
		if(Lv==1 && score >= scoreLV[0]){
			endPlay("#resultPage");
		}else if(Lv==2 && score >= scoreLV[1]){
			endPlay("#resultPage");
		}else if(Lv==3 && score >= scoreLV[2]){
			endPlay("#resultPage");
		}
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
	var row = Math.floor((ballY + ballRadius/2 - h)/bricHeight);
	if (vector[0] > 0) {
		var col = Math.floor((ballX + ballRadius/2 - w + velocity*vector[0])/bricWidth);
	}
	else {
		var col = Math.floor((ballX - ballRadius/2 - w + velocity*vector[0])/bricWidth);
	}

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
				timer -= 5;
			}
		}
		else if(bricks[row][col] == -3){
			crHit += 1;
			score += 5;
			if (crHit == coreHit) {
				bricks[0][COLS/2] = 0;
				bricks[0][COLS/2 - 1] = 0;
				bricks[1][COLS/2] = 0;
				bricks[1][COLS/2 - 1] = 0;
			}
		}
	}

	col = Math.floor((ballX + ballRadius/2 - w)/bricWidth);
	if (vector[1] > 0) {
		row = Math.floor((ballY + ballRadius/2 - h + velocity*vector[1])/bricHeight);
	}
	else {
		row = Math.floor((ballY - ballRadius/2 - h + velocity*vector[1])/bricHeight);
	}
	
	

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
				timer -= 5;
			}
		}
		else if(bricks[row][col] == -3){
			crHit += 1;
			score += 5;
			if (crHit == coreHit) {
				bricks[0][COLS/2] = 0;
				bricks[0][COLS/2 - 1] = 0;
				bricks[1][COLS/2] = 0;
				bricks[1][COLS/2 - 1] = 0;
			}
		}
	}
}

function barReflection(alpha) {
	if (vector[0] >= 0) {
		var angle = Math.atan(vector[1]/vector[0]);
		angle = angle * (1 + alpha);
		if (Math.abs(angle) < Math.PI/6) {
			angle = Math.PI/6;
		}
		vector = [ Math.cos(angle), -Math.sin(angle) ];
	}
	else {
		vector[0] = -vector[0]
		var angle = Math.atan(vector[1]/vector[0]);
		angle = angle * (1 - alpha);
		if (Math.abs(angle) < Math.PI/6) {
			angle = Math.PI/6;
		}
		vector = [ -Math.cos(angle), -Math.sin(angle) ];
	}
}

function delay() {
	delayTime -= 1;
	if (delayTime <= 0) {
		clearInterval(GAMEDELAY);
	}
}

function endPlay(sp){
	if(AUDIO){
		audio.pause();
	}

	hidePage= ".gamePage";
	showPage = sp;
	if(showPage == "#resultPage"){
		set_resultPage();
		audio.src="success.mp3";
	}else if (showPage == "#failPage"){
		audio.src="fail.mp3";
	}
	move_to_NextPage();

	if(AUDIO){
		audio.play();
	}
	clearInterval(PLAY);
	clearInterval(TIME);
	clearInterval(GAMEDELAY);
}

function setTime(){
	if (delayTime == 0) {
		--timer;
	}
}
function drawTimenScore(){
	context.drawImage(scoreimg,cWidth - 200 ,cHeight - 775, 200, 150);
	context.font = "35px KoreanSDNRM";
	if(Lv==3){
		context.font = "30px KoreanSDNRM";
	}
	context.fillStyle = "#FEED9F";
	context.textAlign = "center";
	context.fillText(score + "/" + scoreLV[Lv-1], cWidth - 102 ,cHeight - 680);
	context.font = "70px KoreanSDNRM";
	context.fillStyle = "#FEED9F";
	context.textAlign = "center";
	var min = Math.floor(timer/60);
	context.fillText(min+" : "+String(timer%60).padStart(2,'0'), cWidth - 700 ,cHeight - 687);
	if (delayTime > 0) {
		context.font = "80px Georgia";
		context.fillStyle = "white";
		context.fillText(delayTime, cWidth/2, cHeight/2 +30);
	}
	if (crHit < coreHit) {
		context.font = "40px KoreanSDNRM";
		context.fillStyle = "#FEED9F";
		context.textAlign = "center";
		context.fillText(crHit + "/" + coreHit , cWidth/2 , 150);
	}
}
function init_drawBall(rad) {
	ballRadius = rad;
	ballX = cWidth/2;
	ballY = cHeight - 200;
	vector = [0, 1];
}
function drawBall(){
	context.drawImage(ball, ballX - ballRadius, ballY - ballRadius, ballRadius*2, ballRadius*2);
}
function init_drawBar(width){
	bWidth = width;
	bHeight = 20;
	bStart = cWidth/2;
}
function drawBar(){
	roundRect(bStart, cHeight- bHeight, bWidth, bHeight, 10);
}
function roundRect(x, y, width, height, radius) {
	var r = x + width;
	var b = y + height;
	context.beginPath();
	context.fillStyle = barcolor;
	context.moveTo(x+radius, y);
	context.lineTo(r-radius, y);
	context.quadraticCurveTo(r, y, r, y+radius);
	context.lineTo(r, b-radius);
	context.quadraticCurveTo(r, b, r-radius, b);
	context.lineTo(x+radius, b);
	context.quadraticCurveTo(x, b, x, b-radius);
	context.lineTo(x, y+radius);
	context.quadraticCurveTo(x, y, x+radius, y);
	context.stroke();
	context.fill();
}
function drawCeiling(){
	context.fillStyle = "#837156";
	context.beginPath();
	context.fillRect(0, 0, cWidth, h);
}
function init_drawBrick_lvl1(){
	timer = 60 + (stage-1) * 5;
	// timer =2;
	ROWS = 2+stage;
	COLS = 6;
	bricPadding = 5;
	w = 100;
	h = 120;
	bricWidth = (cWidth - 2*w)/COLS;
	bricHeight = bricWidth/2;

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
	timer = 80 + (stage-1) * 10;
	ROWS = 5+stage;
	COLS = 8;
	bricPadding = 3;
	w = 100;
	h = 120;
	bricWidth = (cWidth - 2*w)/COLS;
	bricHeight = bricWidth/2;

	scoreBrickCount = 7;
	deburfBrickCount = 0;
	doubleBrickCount = 15;
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
	timer = 100 + (stage-1) * 10;
	ROWS = 7+stage;
	COLS = 10;
	bricPadding = 2;
	w = 100;
	h = 120;
	bricWidth = (cWidth - 2*w)/COLS;
	bricHeight = bricWidth/2;

	scoreBrickCount = 10;
	deburfBrickCount = 5;
	doubleBrickCount = 30;
	tripleBrickCount = 10;

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
				context.drawImage(scorebrick, w+j*bricWidth, h+i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}else if(bricks[i][j] == -2){
				context.drawImage(deburfbrick, w+j*bricWidth, h+i*bricHeight, bricWidth - bricPadding, bricHeight - bricPadding);
			}
		}
	}

	if (crHit < coreHit) {
		context.drawImage(corebrick, w+(COLS/2-1)*bricWidth, h, bricWidth*2 - bricPadding, bricHeight*2 - bricPadding);
	}

}