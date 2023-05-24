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

$(window).on("load", function(){
	//$("video").prop("muted", "false");
	/*
	function videoAutoPlay(){
    	if($('.video').length){
    		var video = $('.layer-video').find('video');
    		$('.play-video').click();
    		video.get(0).currentTime = 0;
    		video.get(0).play();
    	}
    }
	videoAutoPlay();
	*/
})

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
		}
	});
	$("#easyStage3").on("click", function(){
		if(L1S3!=-1){
			Lv=1;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#EasyStage3Game";
			move_to_NextPage();
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
		}
	});
	$("#mediumStage3").on("click", function(){
		if(L2S3!=-1){
			Lv=2;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#MediumStage3Game";
			move_to_NextPage();
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
		}
	});

	$("#hardStage3").on("click", function(){
		if(L3S3!=-1){
			Lv=3;
			stage=3;
			hidePage= ".stagePage";
			showPage = "#HardStage3Game";
			move_to_NextPage();
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
})

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