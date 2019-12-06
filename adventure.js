var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var title = document.getElementById("title");
var description = document.getElementById("description");
var sleutel = false;
var geld = 0;
var kleurGekozen = "";
var inzet;
var winst;
var mes;
var zaag;
var para = document.createElement("P");
	para.id= "geldtxt";
var btnSellKey = document.createElement("BUTTON");
	btnSellKey.id= "SellKey";
var btnSellKeyTxt = document.createElement("P");
	btnSellKeyTxt.id = "SellKeyTxt";
var inventory2 = document.createElement("IMG");
	inventory2.id = "inventoryItem2";
var score;
var scoreboard = document.createElement("P");
	scoreboard.id = "scoretxt";
var imagePlace = document.createElement("IMG");
	imagePlace.id = "imageLevel";
var levens;
var vorigLevel;
var levensTxt = document.createElement("P");
	levensTxt.id = "levensID";

var koopLevensKnop = document.createElement("BUTTON");
	koopLevensKnop.id = "levensknop";
var koopLevensKnopTxt = document.createElement("P");
	koopLevensKnopTxt.id = "levensknopTxt";
var koopLevensDiv = document.createElement("DIV");
	koopLevensDiv.id = "levensDiv";

var levengebruikt = false;
var rouletteNogEenKeer = false;


    var bgmusic = new Audio("audio/PinkPanther.mp3");
    bgmusic.loop = true;

document.getElementById("game-container").appendChild(btnSellKey);
document.getElementById("game-container").appendChild(btnSellKeyTxt);
document.getElementById("game-container").appendChild(inventory2);
document.getElementById("game-container").appendChild(scoreboard);
document.getElementById("game-container").appendChild(imagePlace);
document.getElementById("game-container").appendChild(levensTxt);
document.getElementById("game-container").appendChild(koopLevensDiv);
document.getElementById("levensDiv").appendChild(koopLevensKnop);
document.getElementById("levensDiv").appendChild(koopLevensKnopTxt);



function StartGame(){
	
	document.getElementById("SellKey").style.display = "none";
	document.getElementById("levensDiv").style.display = "none";
	document.getElementById("title").innerHTML = "The Robbery";
	document.getElementById("description").innerHTML = "Bij deze game moet je de bank overvallen zonder gepakt te worden!<br>Probeer zoveel mogelijk punten te verzamelen.";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").innerHTML = "Start";
	button2.style.display = "inline";
	document.getElementById("button3").style.display = "none";
	document.getElementById("button2").setAttribute( "onClick", "LevelOne()" );
	document.getElementById("inventoryItem").style.display = "none";
	document.getElementById("inventoryItem2").style.display = "none";
	document.getElementById("levensknop").style.display = "none";
	document.getElementById("levensknopTxt").style.display = "none";
	geld= 500;
	levens = 0;
	sleutel = false;
	mes = false;
	levengebruikt = false;
	para.innerHTML = "€ " + geld;
	document.getElementById("levensID").style.fontSize = "30px";
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	levensTxt.style.display = "inline";
	document.getElementById("levensID").style.position = "absolute";
	document.getElementById("levensID").style.top = "184px";
	document.getElementById("levensID").style.right = "280px";

	para.style.display = "inline";
	document.getElementById("game-container").appendChild(para);
	document.getElementById("geldtxt").style.position = "absolute";
	document.getElementById("geldtxt").style.top = "133px";
	document.getElementById("geldtxt").style.right = "280px";
	document.getElementById("geldtxt").style.fontSize = "30px";
	document.getElementById("inventoryItem").style.display = "inline";
	document.getElementById("inventoryItem").setAttribute("src", "images/cartoonbank.jpg");
	document.getElementById("inventoryItem").style.width = "400px";
	document.getElementById("inventoryItem").style.position = "absolute";
	document.getElementById("inventoryItem").style.left = "565px";
	document.getElementById("inventoryItem").style.top = "335px";
	document.getElementById("scoretxt").style.display = "none";
	document.getElementById("imageLevel").style.display = "none";
	score = 0;
	score = score + 1000;
	
}
StartGame();

function koopLevens(){
	document.getElementById("levensknop").style.display = "inline";
	document.getElementById("levensDiv").style.display = "inline";
	document.getElementById("levensknop").style.position = "absolute";
	document.getElementById("levensknop").style.top = "34px";
	document.getElementById("levensknop").style.right = "56px";
	document.getElementById("levensknop").style.width = "60px";
	document.getElementById("levensknop").innerHTML = "€ 2000";
	document.getElementById("levensknop").setAttribute("onClick", "levenErbij()");
	document.getElementById("levensknopTxt").style.display = "inline";
	document.getElementById("levensknopTxt").style.position = "absolute";
	document.getElementById("levensknopTxt").style.top = "7px";
	document.getElementById("levensknopTxt").style.left = "9px";
	document.getElementById("levensknopTxt").style.width = "215px";
	document.getElementById("levensknopTxt").innerHTML = "Koop een leven voor € 2000.";

	
}
function levenErbij(){
		if(geld>= 2000){
			levens = levens + 1;
			geld = geld - 2000;
			levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
			para.innerHTML = "€ " + geld;
		}else {
			alert("Je hebt niet genoeg geld.");
		}
	}
function gameOver(){
	if (levens> 0){
		alert("Dit antwoord was fout, je hebt een leven minder.");
		levens = levens - 1;
		levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
		levengebruikt = true;
		vorigLevel();
	}else{
		document.getElementById("title").innerHTML = "GAME OVER";
		document.getElementById("description").innerHTML = "Klik op de knop om opnieuw te beginnen";
		document.getElementById("button1").style.display = "none";
		document.getElementById("button3").style.display = "none";
		document.getElementById("button2").innerHTML = "Opnieuw";
		document.getElementById("button2").setAttribute( "onClick", "StartGame()" );	
		document.getElementById("inventoryItem").style.display = "none";
		console.log(score);
		document.getElementById("scoretxt").style.display = "inline";
		document.getElementById("scoretxt").innerHTML = "Score: " + score;
		document.getElementById("scoretxt").style.position = "absolute";
		document.getElementById("scoretxt").style.top = "345px";
		document.getElementById("scoretxt").style.left = "690px";
		document.getElementById("scoretxt").style.fontSize = "30px";
		document.getElementById("scoretxt").style.fontWeight = "bold";
		document.getElementById("inventoryItem").style.display = "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/Police.png" );
		document.getElementById("inventoryItem").style.width = "150px";
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "256px";
		document.getElementById("inventoryItem").style.left = "418px";
		document.getElementById("imageLevel").style.display = "none";
		document.getElementById("levensknop").style.display = "none";
		document.getElementById("levensknopTxt").style.display = "none";
		document.getElementById("levensDiv").style.display = "none";


	}
}

function LevelOne(){
	bgmusic.play();
	document.getElementById("title").innerHTML = "Level 1";
	document.getElementById("description").innerHTML = "Hoe ga jij de bank binnen?<br> 1) Met geweld<br>  2) Undercover<br>  3) Een tunnel graven";
	document.getElementById("button1").setAttribute( "onClick", "LevelTwoG()" );	
	document.getElementById("button2").setAttribute( "onClick", "LevelTwoU()" );	
	document.getElementById("button3").setAttribute( "onClick", "gameOver()" );	
	document.getElementById("button1").innerHTML = "Keuze 1";
	document.getElementById("button2").innerHTML = "Keuze 2";
	document.getElementById("button3").innerHTML = "Keuze 3";
	document.getElementById("button1").style.display = "inline-block";
	document.getElementById("button3").style.display = "inline-block";
	document.getElementById("inventoryItem").style.display = "inline";
	document.getElementById("inventoryItem").setAttribute( "src", "images/bankbuiten2.jpg");
	document.getElementById("inventoryItem").style.position = "absolute";
	document.getElementById("inventoryItem").style.width = "300px";
	document.getElementById("inventoryItem").style.left = "618px";
	document.getElementById("inventoryItem").style.top = "404px";
	score = score + 500;
	vorigLevel = LevelOne;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	koopLevens();
}

function LevelTwoG(){
	document.getElementById("title").innerHTML = "Level 2";
	description.innerHTML = "Je gaat de bank binnen met geweld<br> 1) Je breekt de bank binnen met explosieven<br>2) Je neemt een geweer mee<br> 3) Je neemt een boxbeugel mee";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "LevelThreeGLeven()");
	button3.setAttribute( "onClick", "gameOver()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 500;
	document.getElementById("imageLevel").setAttribute( "src", "images/wapens.png")
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "380px";
	document.getElementById("imageLevel").style.left = "580px";
	document.getElementById("imageLevel").style.width = "400px";
	vorigLevel = LevelTwoG;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function LevelThreeGLeven(){
	levens = levens  + 1;
	alert("Je hebt een leven gekregen");
	LevelThreeG();
}

function LevelThreeG(){
	document.getElementById("title").innerHTML = "Level 3";
	description.innerHTML = "Je ziet een bewaker, wat doe je?<br> 1) Wurg de bewaker<br> 2) Probeer de bewaker te ontwijken<br> 3) Schiet hem dood";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "gameOver()");
	button3.setAttribute( "onClick", "LevelFourG()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 500;
	document.getElementById("imageLevel").setAttribute( "src", "images/bewaker2.png")
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "208px";
	document.getElementById("imageLevel").style.left = "363px";
	document.getElementById("imageLevel").style.width = "200px";
	vorigLevel = LevelThreeG;
	console.log(vorigLevel);
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}


function LevelFourG(){
	document.getElementById("title").innerHTML = "Level 4";
	description.innerHTML = "Je ziet een sleutel liggen en een paar munten,<br> pak de sleutel en het geld op.";
	button1.setAttribute( "onClick", "getSleutel()");
	button2.setAttribute( "onClick", "LevelFiveG()");
	button3.style.display = "none";
	button1.innerHTML = "Sleutel";
	console.log(sleutel);
	button2.innerHTML = "Verder";
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 550;
	document.getElementById("imageLevel").setAttribute( "src", "images/grondsleutelmunten.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "319px";
	document.getElementById("imageLevel").style.left = "525px";
	document.getElementById("imageLevel").style.width = "500px";
	vorigLevel = LevelFourG;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function getSleutel(){
	sleutel = true;
	document.getElementById("imageLevel").setAttribute( "src", "images/grond2.png");
	document.getElementById("imageLevel").style.top = "334px";
	if(sleutel == true){
	button1.style.display = "none";
	}
	geld= geld + randomGeld();
}

function LevelFiveG(){
	document.getElementById("title").innerHTML = "Level 5";
	document.getElementById("button1").innerHTML = "Keuze 1";
	document.getElementById("button2").innerHTML = "Keuze 2";
	document.getElementById("button3").innerHTML = "Keuze 3";
	button3.style.display = "inline";
	button1.style.display = "inline";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "LevelSixG()");
	description.innerHTML = "Je komt aan bij de kluis, hoe ga je deze openmaken?<br>1) Door hem te kraken<br>2) Door de kluis op te blazen<br> 3) Gebruik je sleutel";
	button3.setAttribute( "onClick", "LevelFiveG()");
	document.getElementById("inventoryItem").style.display = "none";
	document.getElementById("imageLevel").setAttribute( "src", "images/kluis2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "223px";
	document.getElementById("imageLevel").style.left = "251px";
	document.getElementById("imageLevel").style.width = "400px";
	vorigLevel = LevelFiveG;
	score = score + 550;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	if(sleutel==true){
		button3.setAttribute( "onClick", "LevelSixGSleutel()");
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
	}else {
		alert("Je hebt geen sleutel");
	}
	para.innerHTML = "€ " + geld;
	document.getElementById("game-container").appendChild(para);
}

function LevelSixG(){
	title.innerHTML = "Level 6";
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	button1.setAttribute( "onClick", "LevelSix2GLevens()" );
	button2.setAttribute( "onClick", "gameOver()" );
	button3.setAttribute( "onClick", "gameOver()" );
	description.innerHTML = "De kluis gaat open, maar het alarm gaat af.<br> Welke kleur draad moet hij doorknippen om het alarm te stoppen<br>1) Blauw<br>2) Geel<br>3) Groen";
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 600;
	document.getElementById("imageLevel").setAttribute( "src", "images/alarm2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "387px";
	document.getElementById("imageLevel").style.left = "648px";
	document.getElementById("imageLevel").style.width = "250px";
	vorigLevel = LevelSixG;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	if(sleutel ==true){
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
	}
}

function LevelSix2GLevens(){
	levens = levens  + 1;
	alert("Je hebt een leven gekregen");
	LevelSix2G();
}

function LevelSix2G(){
	title.innerHTML = "Level 6.2";
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	button1.setAttribute( "onClick", "gameOver()" );
	button2.setAttribute( "onClick", "LevelSevenG()" );
	button3.setAttribute( "onClick", "gameOver()" );
	description.innerHTML = "Je bent in de kluis en het alarm is gestopt.<br>Hoe neem je het goud mee?<br>1) Met een rugzak<br>2) Met boodschappentassen<br> 3) In je broekzakken";
	document.getElementById("inventoryItem").style.display = "none";
	document.getElementById("imageLevel").setAttribute( "src", "images/openkluis2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "409px";
	document.getElementById("imageLevel").style.left = "648px";
	document.getElementById("imageLevel").style.width = "230px";
	vorigLevel = LevelSix2G;
	score = score + 600;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	if(sleutel ==true){
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
	}
}

function LevelSixGSleutel(){
	sleutel = false;
	title.innerHTML = "Level 6";
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	button1.setAttribute( "onClick", "gameOver()" );
	button2.setAttribute( "onClick", "LevelSevenGLevens()" );
	button3.setAttribute( "onClick", "gameOver()" );
	description.innerHTML = "De kluis gaat open, het alarm is niet afgegaan door de sleutel.<br>Hoe neem je het goud mee?<br>1) Met een rugzak<br>2) Met boodschappentassen<br> 3) In je broekzakken";
	document.getElementById("inventoryItem").style.display = "none";
	document.getElementById("imageLevel").setAttribute( "src", "images/openkluis2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "409px";
	document.getElementById("imageLevel").style.left = "648px";
	document.getElementById("imageLevel").style.width = "230px";
	vorigLevel = LevelSixGSleutel;
	score = score + 600;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}
function LevelSevenGLevens(){
	levens = levens  + 1;
	alert("Je hebt een leven gekregen");
	LevelSevenG();
}

function LevelSevenG(){
	title.innerHTML = "Level 7";
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	button1.style.display ="inline";
	button3.style.display ="inline";
	button1.setAttribute( "onClick", "LevelEightG()" );
	button2.setAttribute( "onClick", "gameOver()" );
	button3.setAttribute( "onClick", "gameOver()" );
	description.innerHTML = "Je hebt alle buit bij je hoe verlaat je de bank?<br>1) Via de achteruitgang<br>2) Via het dak<br>3) Via de hoofdingang";
	document.getElementById("inventoryItem").style.display = "none";
	document.getElementById("imageLevel").setAttribute( "src", "images/geldtassen2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "383px";
	document.getElementById("imageLevel").style.left = "639px";
	document.getElementById("imageLevel").style.width = "265px";
	score = score + 650;
	vorigLevel = LevelSevenG;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	if(sleutel ==true){
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
	}
}

function colorRed(){
	kleurGekozen = "Red";
	button1.setAttribute( "onClick", "");
	button2.style.display = "none";
	button3.style.display = "inline";
	
}

function colorBlack(){
	kleurGekozen = "Black";
	button1.style.display = "none";
	button2.setAttribute( "onClick", "");
	button3.style.display = "inline";
}

function Inleggen(){
	inzet = 5000;
	if( geld <5000){
		alert("Je hebt niet genoeg geld");
		button2.style.display = "inline";
		button2.innerHTML = "Verder";
		button2.setAttribute( "onClick", "LevelNineG()" );
	}else{
		button1.style.display = "none";
		button3.style.display = "none";
		button2.style.display = "inline";
		button2.innerHTML = "Verder";
	 	if(kleurGekozen == randomColor()){
			winst = 2 * Number(inzet);
			geld = Number(geld) + Number(winst);
			alert("Je hebt gewonnen, je wint € " + winst);
		}else{
			geld -= inzet;
			alert("Je hebt verloren, je verliest € " + inzet);
		}
		console.log(winst);
		button2.setAttribute( "onClick", "LevelNineG()" );
		para.innerHTML = "€ " + geld;
		button1.style.display = "inline";
		button1.innerHTML = "Roulette";
		button1.setAttribute( "onClick", "LevelEightG()");
	}
	
}
	
function LevelEightG(){
	if (rouletteNogEenKeer== true){
		title.innerHTML = "Level 8";
		button1.innerHTML = "Red";
		button2.innerHTML = "Black";
		button3.innerHTML = "€5000";
		button1.setAttribute( "onClick", "colorRed()" );
		button2.setAttribute( "onClick", "colorBlack()" );
		button3.setAttribute( "onClick", "Inleggen()" );
		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";
		description.innerHTML = "Je ben veilig de bank uitgekomen en je gaat naar het casino.<br>Je gaat roulette doen.<br>";
		para.innerHTML = "€ " + geld;
		levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
		document.getElementById("game-container").appendChild(para);
		document.getElementById("geldtxt").style.position = "absolute";
		document.getElementById("geldtxt").style.top = "133px";
		document.getElementById("geldtxt").style.right = "280px";
		document.getElementById("inventoryItem").style.display = "none";
		vorigLevel = LevelEightG;
		document.getElementById("imageLevel").setAttribute( "src", "images/casino2.png");
		document.getElementById("imageLevel").style.display = "inline";
		document.getElementById("imageLevel").style.position = "absolute";
		document.getElementById("imageLevel").style.top = "335px";
		document.getElementById("imageLevel").style.left = "607px";
		document.getElementById("imageLevel").style.width = "300px";
		if(sleutel ==true){
			document.getElementById("inventoryItem").style.display= "inline";
			document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
			document.getElementById("inventoryItem").style.position = "absolute";
			document.getElementById("inventoryItem").style.top = "90px";
			document.getElementById("inventoryItem").style.left = "280px";
			document.getElementById("inventoryItem").style.width = "80px";
		}
	}else{
		alert("Je bent de bank uitgekomen je krijgt €20000.");
		title.innerHTML = "Level 8";
		geld= geld + 20000;
		button1.innerHTML = "Red";
		button2.innerHTML = "Black";
		button3.innerHTML = "€5000";
		button1.setAttribute( "onClick", "colorRed()" );
		button2.setAttribute( "onClick", "colorBlack()" );
		button3.setAttribute( "onClick", "Inleggen()" );
		button1.style.display = "inline";
		button2.style.display = "inline";
		button3.style.display = "none";
		description.innerHTML = "Je ben veilig de bank uitgekomen en je gaat naar het casino.<br>Je gaat roulette doen.<br>";
		score = score + 700;
		para.innerHTML = "€ " + geld;
		levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
		document.getElementById("game-container").appendChild(para);
		document.getElementById("geldtxt").style.position = "absolute";
		document.getElementById("geldtxt").style.top = "133px";
		document.getElementById("geldtxt").style.right = "280px";
		document.getElementById("inventoryItem").style.display = "none";
		vorigLevel = LevelEightG;
		document.getElementById("imageLevel").setAttribute( "src", "images/casino2.png");
		document.getElementById("imageLevel").style.display = "inline";
		document.getElementById("imageLevel").style.position = "absolute";
		document.getElementById("imageLevel").style.top = "335px";
		document.getElementById("imageLevel").style.left = "607px";
		document.getElementById("imageLevel").style.width = "300px";
		rouletteNogEenKeer = true;
		if(sleutel ==true){
			document.getElementById("inventoryItem").style.display= "inline";
			document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
			document.getElementById("inventoryItem").style.position = "absolute";
			document.getElementById("inventoryItem").style.top = "90px";
			document.getElementById("inventoryItem").style.left = "280px";
			document.getElementById("inventoryItem").style.width = "80px";
		}
	}
	
}

function LevelNineG(){
	title.innerHTML = "Level 9";
	button1.innerHTML = "Ja";
	button2.innerHTML = "Nee";
	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "none";
	button1.setAttribute( "onClick", "WelMes()");
	button2.setAttribute( "onClick", "LevelTenG()");
	description.innerHTML = "Je loopt van het casino naar huis en ziet onderweg een mes liggen.<br>Neem je hem mee?";
	document.getElementById("inventoryItem").style.display = "none";
	document.getElementById("imageLevel").setAttribute( "src", "images/grondmes.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "335px";
	document.getElementById("imageLevel").style.left = "607px";
	document.getElementById("imageLevel").style.width = "300px";
	vorigLevel = LevelNineG;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	score = score + 700;
	if(sleutel ==true){
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
	}
}

function WelMes(){
	mes = true;
	LevelTenG();
	console.log(mes);
	document.getElementById("game-container").appendChild(inventory2);
	document.getElementById("inventoryItem2").setAttribute( "src", "images/mes2.png" );
	document.getElementById("inventoryItem2").style.display = "inline";
	document.getElementById("inventoryItem2").style.position = "absolute";
	document.getElementById("inventoryItem2").style.width = "132px";

	if(sleutel==true){
		document.getElementById("inventoryItem2").style.top = "105px";
		document.getElementById("inventoryItem2").style.left = "360px";
	}
	else{
		document.getElementById("inventoryItem2").style.top = "105px";
		document.getElementById("inventoryItem2").style.left = "275px";
	}


}

function LevelTenG(){
	title.innerHTML = "Level 10";
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "inline";
	para.innenHTML = "€ " + geld;
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "Win()");
	button3.setAttribute( "onClick", "buyKnife()");
	description.innerHTML = "Je bent bijna thuis maar er komt een groep jongeren op je af.<br>Ze willen vechten met je, wat doe je?<br>1) Gebruik je vuisten<br> 2) Gebruik je mes<br><span id=testtxt> 3) Koop een mes voor €10000<span>";
	document.getElementById("inventoryItem").style.display = "none";
	document.getElementById("imageLevel").setAttribute( "src", "images/jongeren.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "256px";
	document.getElementById("imageLevel").style.left = "316px";
	document.getElementById("imageLevel").style.width = "300px";
	score = score + 750;
	vorigLevel = LevelTenG;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	if(geld<10000){
		button3.setAttribute( "onClick", "NoMoney()" );
	}
	if(mes == false){
		button2.setAttribute( "onClick", "");
		button2.innerHTML ="Je hebt geen mes";
	}
	if(sleutel ==true){
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";		
		btnSellKey.innerHTML = "€15000";
		btnSellKeyTxt.innerHTML = "Verkoop je sleutel hier voor €15000!";
		document.getElementById("game-container").appendChild(btnSellKey);
		document.getElementById("game-container").appendChild(btnSellKeyTxt);
		document.getElementById("SellKey").setAttribute( "onClick", "SellingKey()" );
		document.getElementById("SellKey").style.display = "inline";
		document.getElementById("SellKey").style.position = "absolute";
		document.getElementById("SellKey").style.top = "448px";
		document.getElementById("SellKey").style.left = "725px";
		document.getElementById("SellKeyTxt").style.position = "absolute";
		document.getElementById("SellKeyTxt").style.top = "427px";
		document.getElementById("SellKeyTxt").style.left = "647px";
		document.getElementById("SellKeyTxt").style.display = "inline";
		document.getElementById("scoretxt").style.fontWeight = "bold";
		
	}
	if(mes==true){
		document.getElementById("testtxt").style.display="none";
		button3.style.display = "none";
	}
}

function SellingKey(){
	geld = Number(geld) + 15000;
	steutel = false;
	para.innerHTML = "€ " + geld;
	document.getElementById("geldtxt").style.display = "inline";
	document.getElementById("SellKey").style.display = "none";
	document.getElementById("SellKeyTxt").style.display = "none";
	document.getElementById("inventoryItem").style.display = "none";
	if(mes == true){
		document.getElementById("inventoryItem2").style.top = "105px";
		document.getElementById("inventoryItem2").style.left = "275px";
	}
}

function NoMoney(){
	alert("Je hebt niet genoeg geld");
}

function buyKnife(){
	geld = geld - 10000;
	mes = true;
	LevelTenG();
	button3.style.display = "none";
	para.innerHTML = "€ " + geld;
}

function Win(){
	if(zaag==false){
		alert("Je hebt geen zaag");
		LevelElevenU();
	}else{
		document.getElementById("SellKey").style.display = "none";
		document.getElementById("SellKeyTxt").style.display = "none";
		title.innerHTML = "Gewonnen";
		description.innerHTML = "Je hebt de bank overvallen en bent veilig thuis gekomen.";
		button1.innerHTML = "Opnieuw";
		button2.style.display = "none";
		button3.style.display = "none";
		button1.setAttribute( "onClick", "StartGame()");
		document.getElementById("inventoryItem").style.display="none";
		document.getElementById("inventoryItem2").style.display="none";
		para.innerHTML = "€ " + geld;
		levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
		score = score + (Number(geld) * 3);
		score = score + 1200;
		score = score + (Number(levens) * 6000);
		document.getElementById("scoretxt").style.display = "inline";
		document.getElementById("scoretxt").innerHTML = "Score: " + score;
		document.getElementById("scoretxt").style.position = "absolute";
		document.getElementById("scoretxt").style.top = "345px";
		document.getElementById("scoretxt").style.left = "690px";
		document.getElementById("scoretxt").style.fontSize = "30px";
		document.getElementById("imageLevel").setAttribute( "src", "images/win.png");
		document.getElementById("imageLevel").style.display = "inline";
		document.getElementById("imageLevel").style.position = "absolute";
		document.getElementById("imageLevel").style.top = "256px";
		document.getElementById("imageLevel").style.left = "316px";
		document.getElementById("imageLevel").style.width = "300px";
		document.getElementById("levensknop").style.display = "none";
		document.getElementById("levensknopTxt").style.display = "none";
		document.getElementById("levensDiv").style.display = "none";

		

	}
	
}

function LevelTwoU(){
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	document.getElementById("title").innerHTML = "Level 2";
	description.innerHTML = "Je gaat undercover de bank binnen.<br> 1) Je verkleedt je als een medewerker<br>2) Je verkleedt je als een bewaker<br> 3) Je verkleedt je als een schoonmaker";
	button1.setAttribute( "onClick", "LevelThreeU()");
	button2.setAttribute( "onClick", "gameOver()");
	button3.setAttribute( "onClick", "gameOver()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 700;
	document.getElementById("imageLevel").setAttribute( "src", "images/undercover.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "227px";
	document.getElementById("imageLevel").style.left = "316px";
	document.getElementById("imageLevel").style.width = "234px";
	vorigLevel = LevelTwoU;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function LevelThreeU(){
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	document.getElementById("title").innerHTML = "Level 3";
	description.innerHTML = "Hoe kom je aan de sleutel van de kluis?<br> 1) Een sleutel stelen van een bewaker<br>2) De sleutel stelen uit het kantoor van de Directeur<br> 3) De sleutel vragen aan een medewerker";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "LevelFourULevens()");
	button3.setAttribute( "onClick", "gameOver()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 700;
	document.getElementById("imageLevel").setAttribute( "src", "images/kluisslot.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "340px";
	document.getElementById("imageLevel").style.left = "978px";
	document.getElementById("imageLevel").style.width = "300px";
	vorigLevel = LevelThreeU;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function LevelFourULevens(){
	levens = levens  + 1;
	alert("Je hebt een leven gekregen");
	LevelFourU();
}

function LevelFourU(){
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	document.getElementById("title").innerHTML = "Level 4";
	description.innerHTML = "Je wilt naar het kantoor maar de gangen lijken wel een doolhof,<br> welke kant ga je op?<br> 1) Links<br>2) Rechtdoor<br> 3) Rechts";
	button1.setAttribute( "onClick", "LevelFiveU()");
	button2.setAttribute( "onClick", "gameOver()");
	button3.setAttribute( "onClick", "gameOver()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 750;
	document.getElementById("imageLevel").setAttribute( "src", "images/gangen.jpg");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "413px";
	document.getElementById("imageLevel").style.left = "617px";
	document.getElementById("imageLevel").style.width = "300px";
	vorigLevel = LevelFourU;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function LevelFiveU(){
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	document.getElementById("title").innerHTML = "Level 5";
	description.innerHTML = "Je komt aan bij het kantoor, maar de directeur ligt te slapen.<br>Hoe kom je het kantoor binnen?<br> 1) Zachtjes de deur openen<br>2) De directeur uit zijn kantoor lokken<br> 3) Via het openstaande raam";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "gameOver()");
	button3.setAttribute( "onClick", "LevelSixU()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 850;
	document.getElementById("imageLevel").setAttribute( "src", "images/slapendeDirecteur.jpg");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "317px";
	document.getElementById("imageLevel").style.left = "295px";
	document.getElementById("imageLevel").style.width = "285px";
	vorigLevel = LevelFiveU;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function LevelSixU(){
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	document.getElementById("title").innerHTML = "Level 6";
	description.innerHTML = "Je moet de sleutel gaan zoeken, waar ga je zoeken?<br> 1) In de kasten<br>2) In de bureau kastjes<br> 3) In de jas zoeken van de directeur";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "LevelSevenU()");
	button3.setAttribute( "onClick", "gameOver()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 800;
	document.getElementById("imageLevel").setAttribute( "src", "images/kantoor3.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "391px";
	document.getElementById("imageLevel").style.left = "617px";
	document.getElementById("imageLevel").style.width = "300px";
	vorigLevel = LevelSixU;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function LevelSevenU(){
	if(levengebruikt == true){
		button1.innerHTML = "Keuze 1";
		button2.innerHTML = "Keuze 2";
		button3.innerHTML = "Keuze 3";
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
		document.getElementById("title").innerHTML = "Level 7";
		description.innerHTML = "Je hebt de sleutel maar je hoort een bewaker aan komen lopen<br>Wat ga je doen?<br> 1) Verstoppen onder het bureau<br>2) Verstoppen in een kast <br> 3) Verstoppen achter de deur";
		button1.setAttribute( "onClick", "LevelEightULevens()");
		button2.setAttribute( "onClick", "gameOver()");
		button3.setAttribute( "onClick", "gameOver()");
		document.getElementById("imageLevel").setAttribute( "src", "images/bewaker2.png");
		document.getElementById("imageLevel").style.display = "inline";
		document.getElementById("imageLevel").style.position = "absolute";
		document.getElementById("imageLevel").style.top = "207px";
		document.getElementById("imageLevel").style.left = "313px";
		document.getElementById("imageLevel").style.width = "258px";
		vorigLevel = LevelSevenU;
		levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	}else{
		button1.innerHTML = "Keuze 1";
		button2.innerHTML = "Keuze 2";
		button3.innerHTML = "Keuze 3";
		alert("Je hebt de sleutel gevonden!");
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
		document.getElementById("title").innerHTML = "Level 7";
		description.innerHTML = "Je hebt de sleutel maar je hoort een bewaker aan komen lopen<br>Wat ga je doen?<br> 1) Verstoppen onder het bureau<br>2) Verstoppen in een kast <br> 3) Verstoppen achter de deur";
		button1.setAttribute( "onClick", "LevelEightULevens()");
		button2.setAttribute( "onClick", "gameOver()");
		button3.setAttribute( "onClick", "gameOver()");
		score = score + 800;
		document.getElementById("imageLevel").setAttribute( "src", "images/bewaker2.png");
		document.getElementById("imageLevel").style.display = "inline";
		document.getElementById("imageLevel").style.position = "absolute";
		document.getElementById("imageLevel").style.top = "207px";
		document.getElementById("imageLevel").style.left = "313px";
		document.getElementById("imageLevel").style.width = "258px";
		vorigLevel = LevelSevenU;
		levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	}
}

function LevelEightULevens(){
	levens = levens  + 1;
	alert("Je hebt een leven gekregen");
	LevelEightU();
}
	
function LevelEightU(){
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	document.getElementById("title").innerHTML = "Level 8";
	description.innerHTML = "De bewaker liep langs en zag je niet. Je gaat op weg naar de kluis.<br> Hoe maak je de kluis open?<br> 1) Je probeert de kluis te kraken<br>2) Je gebruikt je sleutel<br> 3) Je wacht tot iemand de kluis ingaat en je volgt hem";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "LevelNineU()");
	button3.setAttribute( "onClick", "gameOver()");
	score = score + 850;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	vorigLevel = LevelEightU;
	document.getElementById("imageLevel").setAttribute( "src", "images/kluis2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "312px";
	document.getElementById("imageLevel").style.left = "238px";
	document.getElementById("imageLevel").style.width = "365px";
	if(sleutel==true){
		document.getElementById("inventoryItem").style.display= "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/key.png" );
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "90px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
	}
}

function LevelNineU(){
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	button1.style.display ="inline";
	button2.style.display ="inline";
	button3.style.display ="inline";
	document.getElementById("title").innerHTML = "Level 9";
	description.innerHTML = "Hoe neem je de buit mee?<br> 1) Verdeeld over 2 boodschappentassen<br>2) In je broekzakken<br> 3) In een rugzak";
	button1.setAttribute( "onClick", "LevelTenU()");
	button2.setAttribute( "onClick", "gameOver()");
	button3.setAttribute( "onClick", "gameOver()");
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 900;
	document.getElementById("imageLevel").setAttribute( "src", "images/geldtassen2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "372px";
	document.getElementById("imageLevel").style.left = "932px";
	document.getElementById("imageLevel").style.width = "288px";
	vorigLevel = LevelNineU;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function LevelTenU(){
	geld = geld + 15000;
	para.innerHTML = "€ " + geld;
	alert("Je hebt €15000 door het overvallen van de bank gekregen, ga naar huis.")
	document.getElementById("title").innerHTML = "Level 10";
	description.innerHTML = "Je ziet een zaag en wat geld liggen op je weg naar huis.<br> Neem je het mee?<br> 1) Ja<br>2) Nee";
	button1.setAttribute( "onClick", "giveZaag()");
	button2.setAttribute( "onClick", "geenZaag()");
	button3.setAttribute( "onClick", "LevelElevenU()");
	button3.style.display = "none";
	button1.innerHTML = "Ja";
	button2.innerHTML = "Nee";
	button3.innerHTML = "Verder";
	document.getElementById("inventoryItem").style.display = "none";
	score = score + 950;
	document.getElementById("imageLevel").setAttribute( "src", "images/grondzaagenmunten.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "370px";
	document.getElementById("imageLevel").style.left = "566px";
	document.getElementById("imageLevel").style.width = "411px";
	vorigLevel = LevelTenU;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
}

function giveZaag(){
	zaag = true;
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "inline";
	document.getElementById("inventoryItem").style.display = "inline";
	document.getElementById("inventoryItem").setAttribute( "src", "images/zaag4.png");
	document.getElementById("inventoryItem").style.position = "absolute";
	document.getElementById("inventoryItem").style.top = "115px";
	document.getElementById("inventoryItem").style.left = "280px";
	document.getElementById("inventoryItem").style.width = "80px";
	geld= geld + randomGeld();
	para.innerHTML = "€ " + geld;
	if (zaag == true){
		document.getElementById("imageLevel").setAttribute( "src", "images/grond2.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "379px";
	document.getElementById("imageLevel").style.left = "566px";
	document.getElementById("imageLevel").style.width = "411px";
	}
}

function geenZaag(){
	zaag = false;
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "inline";

}

function LevelElevenU(){
	document.getElementById("title").innerHTML = "Level 11";
	description.innerHTML = "Je komt een hek tegen en de politie is op zoek naar je.<br>Hoe kom je hier langs?<br> 1) Probeer over het hek te klimmen<br>2) Probeer het hek door te trappen<br>3) Gebruik een zaag";
	button1.setAttribute( "onClick", "gameOver()");
	button2.setAttribute( "onClick", "gameOver()");
	button3.setAttribute( "onClick", "Win()");
	button1.style.display = "inline";
	button2.style.display = "inline";
	button3.style.display = "inline";
	button1.innerHTML = "Keuze 1";
	button2.innerHTML = "Keuze 2";
	button3.innerHTML = "Keuze 3";
	score = score + 1000;
	levensTxt.innerHTML = "<span id=hartje>\u2764</span> " + levens;
	vorigLevel = LevelElevenU;
	document.getElementById("imageLevel").setAttribute( "src", "images/hek3.png");
	document.getElementById("imageLevel").style.display = "inline";
	document.getElementById("imageLevel").style.position = "absolute";
	document.getElementById("imageLevel").style.top = "419px";
	document.getElementById("imageLevel").style.left = "562px";
	document.getElementById("imageLevel").style.width = "411px";
	if(zaag == true){
		document.getElementById("inventoryItem").style.display = "inline";
		document.getElementById("inventoryItem").setAttribute( "src", "images/zaag4.png");
		document.getElementById("inventoryItem").style.position = "absolute";
		document.getElementById("inventoryItem").style.top = "115px";
		document.getElementById("inventoryItem").style.left = "280px";
		document.getElementById("inventoryItem").style.width = "80px";
	}else{
		document.getElementById("inventoryItem").style.display = "none";
	}
}


function randomColor(){
	return roulette[Math.floor(Math.random()*roulette.length)];
}

var roulette = ["Black", "Red"];

function randomGeld(){
	return randomGeldSleutel[Math.floor(Math.random()*randomGeldSleutel.length)];
}

var randomGeldSleutel = [345, 924, 435, 603, 538, 738, 678, 492, 932, 1134, 592, 374, 458, 659, 893, 932, 623, 959, 1209, 1284 ];