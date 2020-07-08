
var config = {
    apiKey: "AIzaSyDskfClu41qf-OaWQK-dnNDk1BVNb8uXi8",
    authDomain: "database-final-project-d460c.firebaseapp.com",
    databaseURL: "https://database-final-project-d460c.firebaseio.com",
    projectId: "database-final-project-d460c",
    storageBucket: "database-final-project-d460c.appspot.com",
    messagingSenderId: "806148239569",
    appId: "1:806148239569:web:7c26ca5a967b0bf8b015f0",
    measurementId: "G-HPQETCPZXL"
  };
  // Initialize Firebase
 if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

var database = firebase.database();
 

//below is belgium 16
var ref= database.ref().child('16').child('Population');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population16").innerHTML = ans;
})
var ref= database.ref().child('16').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed16").innerHTML = ans;
})
var ref= database.ref().child('16').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed16").innerHTML = "+"+ans;
})
var ref= database.ref().child('16').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered16").innerHTML = ans;
})
var ref= database.ref().child('16').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered16").innerHTML = "+"+ans;
})
var ref= database.ref().child('16').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths16").innerHTML = ans;
})
var ref= database.ref().child('16').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths16").innerHTML = "+"+ans;
})

//below is US 
var ref= database.ref().child('176').child('Population');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population176").innerHTML = ans;
})
var ref= database.ref().child('176').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed176").innerHTML = ans;
})
var ref= database.ref().child('176').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed176").innerHTML = "+"+ans;
})
var ref= database.ref().child('176').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered176").innerHTML = ans;
})
var ref= database.ref().child('176').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered176").innerHTML = "+"+ans;
})
var ref= database.ref().child('176').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths176").innerHTML = ans;
})
var ref= database.ref().child('176').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths176").innerHTML = "+"+ans;
})