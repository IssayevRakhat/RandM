var song = 0;
var playListDuration = 0;
localStorage.setItem("playListDuration", JSON.stringify(playListDuration))
function signup(e){
event.preventDefault();

var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var pass = document.getElementById('password').value;
if (username==null || username==""){  
  alert("Username can't be blank");  
  return false;  
}else if(username.length<3){  
  alert("Username must be at least 3 characters long.");  
  return false;  
  }else if(pass.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }else{

	
var user = {
	email: email,
	username: username,
	password: pass,
	
};
var json = JSON.stringify(user);
localStorage.setItem(username, json);
alert("YOU ARE SIGNED UP");
}
}

 
function signin(e){
	event.preventDefault();
	var username = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var result = document.getElementById('result');
	var user = localStorage.getItem(username);
	var data = JSON.parse(user);
	console.log(data);

	if(user==null){
		result.innerHTML = 'wrong username';
	}else if((username == data.username)&&(pass == data.password)){
		window.confirm("Logged in");
		window.open("RAM.html","_self");
		
	}else{
		result.innerHTML = 'wrong password';
	}
	
}
function addFavourite1() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 180;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added:" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"Alley",
     author:"JONY",
     genre:"Pop music",
     rating:"80",
     dateAndTime:datetime,
 	duration:180}


localStorage.setItem(song,JSON.stringify(fav));
alert("Song ALLEY was added to Favourites");
}

function addFavourite2() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 154;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"Yaar Yaar",
     author:"Amar Singh",
     genre:"Pop music",
     rating:"7",
 dateAndTime:datetime,
duration:154}
localStorage.setItem(song,JSON.stringify(fav));
alert("Song YAAR YAAR was added to Favourites");
}
function addFavourite3() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 154;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"?????? ????????????????",
     author:"Artik & Asti",
     genre:"Rap music",
     rating:"9",
 dateAndTime:datetime,
duration:132}
localStorage.setItem(song,JSON.stringify(fav));
alert("Song ?????? ???????????????? was added to Favourites");
}
function addFavourite4() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 154;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"Azazel",
     author:"Khalif",
     genre:"Rock music",
     rating:"9",
 dateAndTime:datetime,
duration:154}
localStorage.setItem(song,JSON.stringify(fav));
alert("Song AZAZEL was added to Favourites");
}
function addFavourite5() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 154;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"????????????",
     author:"JONY",
     genre:"POP",
     rating:"8",
 dateAndTime:datetime,
duration:143}
localStorage.setItem(song,JSON.stringify(fav));
alert("Song ???????????? was added to Favourites");
}
function addFavourite6() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 154;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"?????????????? ???????? ???? ??????-????????",
     author:"Gayazovs Brothers",
     genre:"Rock music",
     rating:"6",
 dateAndTime:datetime,
duration:176}
localStorage.setItem(song,JSON.stringify(fav));
alert("Song ?????????????? ???????? ???? ??????-???????? was added to Favourites");
}
function addFavourite7() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 154;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"??????????????",
     author:"Rauf & Faik",
     genre:"Pop music",
     rating:"6",
 dateAndTime:datetime,
duration:164}
localStorage.setItem(song,JSON.stringify(fav));
alert("Song ?????????????? was added to Favourites");
}
function addFavourite8() {
	song++;
	var playList = parseInt(JSON.parse(localStorage.getItem("playListDuration")), 10);
	playList += 154;
	localStorage.setItem("playListDuration", JSON.stringify(playList));
	var currentdate = new Date(); 
var datetime = "Was added: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let fav=
     {name:"Disco",
     author:"DD RECORDS",
     genre:"Pop music",
     rating:"9",
 dateAndTime:datetime,
duration:173}
localStorage.setItem(song,JSON.stringify(fav));
alert("Song DISCO was added to Favourites");
}
