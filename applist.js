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
 
var ref= database.ref().child('184').child('Country1');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1841").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('184').child('Country2');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1842").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('184').child('Country3');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1843").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('184').child('Country1n');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1841n").innerHTML = ans;
})
var ref= database.ref().child('184').child('Country2n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1842n").innerHTML = ans;
})
var ref= database.ref().child('184').child('Country3n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1843n").innerHTML = ans;
})

var ref= database.ref().child('185').child('Country1');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1851").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('185').child('Country2');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1852").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('185').child('Country3');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1853").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('185').child('Country1n');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1851n").innerHTML = ans;
})
var ref= database.ref().child('185').child('Country2n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1852n").innerHTML = ans;
})
var ref= database.ref().child('185').child('Country3n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1853n").innerHTML = ans;
})

var ref= database.ref().child('186').child('Country1');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1861").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('186').child('Country2');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1862").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('186').child('Country3');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1863").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('186').child('Country1n');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1861n").innerHTML = ans;
})
var ref= database.ref().child('186').child('Country2n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1862n").innerHTML = ans;
})
var ref= database.ref().child('186').child('Country3n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1863n").innerHTML = ans;
})

var ref= database.ref().child('187').child('Country1');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1871").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('187').child('Country2');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1872").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('187').child('Country3');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1873").innerHTML = ans.slice(1,-1);
})
var ref= database.ref().child('187').child('Country1n');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1871n").innerHTML = ans;
})
var ref= database.ref().child('187').child('Country2n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1872n").innerHTML = ans;
})
var ref= database.ref().child('187').child('Country3n');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Country1873n").innerHTML = ans;
})
