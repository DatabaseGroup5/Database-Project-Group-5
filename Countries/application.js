var config = {

  };
  // Initialize Firebase
 if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

var database = firebase.database();
 
var ref= database.ref().child('0').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population0").innerHTML = ans;
})
var ref= database.ref().child('0').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed0").innerHTML = ans;
})
var ref= database.ref().child('0').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed0").innerHTML = "+"+ans;
})
var ref= database.ref().child('0').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered0").innerHTML = ans;
})
var ref= database.ref().child('0').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered0").innerHTML = "+"+ans;
})
var ref= database.ref().child('0').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths0").innerHTML = ans;
})
var ref= database.ref().child('0').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths0").innerHTML = "+"+ans;
})
var ref= database.ref().child('1').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population1").innerHTML = ans;
})
var ref= database.ref().child('1').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed1").innerHTML = ans;
})
var ref= database.ref().child('1').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed1").innerHTML = "+"+ans;
})
var ref= database.ref().child('1').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered1").innerHTML = ans;
})
var ref= database.ref().child('1').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered1").innerHTML = "+"+ans;
})
var ref= database.ref().child('1').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths1").innerHTML = ans;
})
var ref= database.ref().child('1').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths1").innerHTML = "+"+ans;
})
var ref= database.ref().child('2').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population2").innerHTML = ans;
})
var ref= database.ref().child('2').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed2").innerHTML = ans;
})
var ref= database.ref().child('2').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed2").innerHTML = "+"+ans;
})
var ref= database.ref().child('2').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered2").innerHTML = ans;
})
var ref= database.ref().child('2').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered2").innerHTML = "+"+ans;
})
var ref= database.ref().child('2').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths2").innerHTML = ans;
})
var ref= database.ref().child('2').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths2").innerHTML = "+"+ans;
})
var ref= database.ref().child('3').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population3").innerHTML = ans;
})
var ref= database.ref().child('3').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed3").innerHTML = ans;
})
var ref= database.ref().child('3').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed3").innerHTML = "+"+ans;
})
var ref= database.ref().child('3').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered3").innerHTML = ans;
})
var ref= database.ref().child('3').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered3").innerHTML = "+"+ans;
})
var ref= database.ref().child('3').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths3").innerHTML = ans;
})
var ref= database.ref().child('3').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths3").innerHTML = "+"+ans;
})
var ref= database.ref().child('4').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population4").innerHTML = ans;
})
var ref= database.ref().child('4').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed4").innerHTML = ans;
})
var ref= database.ref().child('4').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed4").innerHTML = "+"+ans;
})
var ref= database.ref().child('4').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered4").innerHTML = ans;
})
var ref= database.ref().child('4').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered4").innerHTML = "+"+ans;
})
var ref= database.ref().child('4').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths4").innerHTML = ans;
})
var ref= database.ref().child('4').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths4").innerHTML = "+"+ans;
})
var ref= database.ref().child('5').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population5").innerHTML = ans;
})
var ref= database.ref().child('5').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed5").innerHTML = ans;
})
var ref= database.ref().child('5').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed5").innerHTML = "+"+ans;
})
var ref= database.ref().child('5').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered5").innerHTML = ans;
})
var ref= database.ref().child('5').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered5").innerHTML = "+"+ans;
})
var ref= database.ref().child('5').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths5").innerHTML = ans;
})
var ref= database.ref().child('5').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths5").innerHTML = "+"+ans;
})
var ref= database.ref().child('6').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population6").innerHTML = ans;
})
var ref= database.ref().child('6').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed6").innerHTML = ans;
})
var ref= database.ref().child('6').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed6").innerHTML = "+"+ans;
})
var ref= database.ref().child('6').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered6").innerHTML = ans;
})
var ref= database.ref().child('6').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered6").innerHTML = "+"+ans;
})
var ref= database.ref().child('6').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths6").innerHTML = ans;
})
var ref= database.ref().child('6').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths6").innerHTML = "+"+ans;
})
var ref= database.ref().child('7').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population7").innerHTML = ans;
})
var ref= database.ref().child('7').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed7").innerHTML = ans;
})
var ref= database.ref().child('7').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed7").innerHTML = "+"+ans;
})
var ref= database.ref().child('7').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered7").innerHTML = ans;
})
var ref= database.ref().child('7').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered7").innerHTML = "+"+ans;
})
var ref= database.ref().child('7').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths7").innerHTML = ans;
})
var ref= database.ref().child('7').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths7").innerHTML = "+"+ans;
})
var ref= database.ref().child('8').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population8").innerHTML = ans;
})
var ref= database.ref().child('8').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed8").innerHTML = ans;
})
var ref= database.ref().child('8').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed8").innerHTML = "+"+ans;
})
var ref= database.ref().child('8').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered8").innerHTML = ans;
})
var ref= database.ref().child('8').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered8").innerHTML = "+"+ans;
})
var ref= database.ref().child('8').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths8").innerHTML = ans;
})
var ref= database.ref().child('8').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths8").innerHTML = "+"+ans;
})
var ref= database.ref().child('9').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population9").innerHTML = ans;
})
var ref= database.ref().child('9').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed9").innerHTML = ans;
})
var ref= database.ref().child('9').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed9").innerHTML = "+"+ans;
})
var ref= database.ref().child('9').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered9").innerHTML = ans;
})
var ref= database.ref().child('9').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered9").innerHTML = "+"+ans;
})
var ref= database.ref().child('9').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths9").innerHTML = ans;
})
var ref= database.ref().child('9').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths9").innerHTML = "+"+ans;
})
var ref= database.ref().child('10').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population10").innerHTML = ans;
})
var ref= database.ref().child('10').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed10").innerHTML = ans;
})
var ref= database.ref().child('10').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed10").innerHTML = "+"+ans;
})
var ref= database.ref().child('10').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered10").innerHTML = ans;
})
var ref= database.ref().child('10').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered10").innerHTML = "+"+ans;
})
var ref= database.ref().child('10').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths10").innerHTML = ans;
})
var ref= database.ref().child('10').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths10").innerHTML = "+"+ans;
})
var ref= database.ref().child('11').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population11").innerHTML = ans;
})
var ref= database.ref().child('11').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed11").innerHTML = ans;
})
var ref= database.ref().child('11').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed11").innerHTML = "+"+ans;
})
var ref= database.ref().child('11').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered11").innerHTML = ans;
})
var ref= database.ref().child('11').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered11").innerHTML = "+"+ans;
})
var ref= database.ref().child('11').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths11").innerHTML = ans;
})
var ref= database.ref().child('11').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths11").innerHTML = "+"+ans;
})
var ref= database.ref().child('12').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population12").innerHTML = ans;
})
var ref= database.ref().child('12').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed12").innerHTML = ans;
})
var ref= database.ref().child('12').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed12").innerHTML = "+"+ans;
})
var ref= database.ref().child('12').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered12").innerHTML = ans;
})
var ref= database.ref().child('12').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered12").innerHTML = "+"+ans;
})
var ref= database.ref().child('12').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths12").innerHTML = ans;
})
var ref= database.ref().child('12').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths12").innerHTML = "+"+ans;
})
var ref= database.ref().child('13').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population13").innerHTML = ans;
})
var ref= database.ref().child('13').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed13").innerHTML = ans;
})
var ref= database.ref().child('13').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed13").innerHTML = "+"+ans;
})
var ref= database.ref().child('13').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered13").innerHTML = ans;
})
var ref= database.ref().child('13').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered13").innerHTML = "+"+ans;
})
var ref= database.ref().child('13').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths13").innerHTML = ans;
})
var ref= database.ref().child('13').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths13").innerHTML = "+"+ans;
})
var ref= database.ref().child('14').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population14").innerHTML = ans;
})
var ref= database.ref().child('14').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed14").innerHTML = ans;
})
var ref= database.ref().child('14').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed14").innerHTML = "+"+ans;
})
var ref= database.ref().child('14').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered14").innerHTML = ans;
})
var ref= database.ref().child('14').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered14").innerHTML = "+"+ans;
})
var ref= database.ref().child('14').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths14").innerHTML = ans;
})
var ref= database.ref().child('14').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths14").innerHTML = "+"+ans;
})
var ref= database.ref().child('15').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population15").innerHTML = ans;
})
var ref= database.ref().child('15').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed15").innerHTML = ans;
})
var ref= database.ref().child('15').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed15").innerHTML = "+"+ans;
})
var ref= database.ref().child('15').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered15").innerHTML = ans;
})
var ref= database.ref().child('15').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered15").innerHTML = "+"+ans;
})
var ref= database.ref().child('15').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths15").innerHTML = ans;
})
var ref= database.ref().child('15').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths15").innerHTML = "+"+ans;
})
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
var ref= database.ref().child('17').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population17").innerHTML = ans;
})
var ref= database.ref().child('17').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed17").innerHTML = ans;
})
var ref= database.ref().child('17').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed17").innerHTML = "+"+ans;
})
var ref= database.ref().child('17').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered17").innerHTML = ans;
})
var ref= database.ref().child('17').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered17").innerHTML = "+"+ans;
})
var ref= database.ref().child('17').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths17").innerHTML = ans;
})
var ref= database.ref().child('17').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths17").innerHTML = "+"+ans;
})
var ref= database.ref().child('18').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population18").innerHTML = ans;
})
var ref= database.ref().child('18').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed18").innerHTML = ans;
})
var ref= database.ref().child('18').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed18").innerHTML = "+"+ans;
})
var ref= database.ref().child('18').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered18").innerHTML = ans;
})
var ref= database.ref().child('18').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered18").innerHTML = "+"+ans;
})
var ref= database.ref().child('18').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths18").innerHTML = ans;
})
var ref= database.ref().child('18').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths18").innerHTML = "+"+ans;
})
var ref= database.ref().child('19').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population19").innerHTML = ans;
})
var ref= database.ref().child('19').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed19").innerHTML = ans;
})
var ref= database.ref().child('19').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed19").innerHTML = "+"+ans;
})
var ref= database.ref().child('19').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered19").innerHTML = ans;
})
var ref= database.ref().child('19').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered19").innerHTML = "+"+ans;
})
var ref= database.ref().child('19').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths19").innerHTML = ans;
})
var ref= database.ref().child('19').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths19").innerHTML = "+"+ans;
})
var ref= database.ref().child('20').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population20").innerHTML = ans;
})
var ref= database.ref().child('20').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed20").innerHTML = ans;
})
var ref= database.ref().child('20').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed20").innerHTML = "+"+ans;
})
var ref= database.ref().child('20').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered20").innerHTML = ans;
})
var ref= database.ref().child('20').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered20").innerHTML = "+"+ans;
})
var ref= database.ref().child('20').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths20").innerHTML = ans;
})
var ref= database.ref().child('20').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths20").innerHTML = "+"+ans;
})
var ref= database.ref().child('21').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population21").innerHTML = ans;
})
var ref= database.ref().child('21').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed21").innerHTML = ans;
})
var ref= database.ref().child('21').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed21").innerHTML = "+"+ans;
})
var ref= database.ref().child('21').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered21").innerHTML = ans;
})
var ref= database.ref().child('21').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered21").innerHTML = "+"+ans;
})
var ref= database.ref().child('21').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths21").innerHTML = ans;
})
var ref= database.ref().child('21').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths21").innerHTML = "+"+ans;
})
var ref= database.ref().child('22').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population22").innerHTML = ans;
})
var ref= database.ref().child('22').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed22").innerHTML = ans;
})
var ref= database.ref().child('22').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed22").innerHTML = "+"+ans;
})
var ref= database.ref().child('22').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered22").innerHTML = ans;
})
var ref= database.ref().child('22').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered22").innerHTML = "+"+ans;
})
var ref= database.ref().child('22').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths22").innerHTML = ans;
})
var ref= database.ref().child('22').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths22").innerHTML = "+"+ans;
})
var ref= database.ref().child('23').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population23").innerHTML = ans;
})
var ref= database.ref().child('23').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed23").innerHTML = ans;
})
var ref= database.ref().child('23').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed23").innerHTML = "+"+ans;
})
var ref= database.ref().child('23').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered23").innerHTML = ans;
})
var ref= database.ref().child('23').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered23").innerHTML = "+"+ans;
})
var ref= database.ref().child('23').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths23").innerHTML = ans;
})
var ref= database.ref().child('23').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths23").innerHTML = "+"+ans;
})
var ref= database.ref().child('24').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population24").innerHTML = ans;
})
var ref= database.ref().child('24').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed24").innerHTML = ans;
})
var ref= database.ref().child('24').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed24").innerHTML = "+"+ans;
})
var ref= database.ref().child('24').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered24").innerHTML = ans;
})
var ref= database.ref().child('24').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered24").innerHTML = "+"+ans;
})
var ref= database.ref().child('24').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths24").innerHTML = ans;
})
var ref= database.ref().child('24').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths24").innerHTML = "+"+ans;
})
var ref= database.ref().child('25').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population25").innerHTML = ans;
})
var ref= database.ref().child('25').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed25").innerHTML = ans;
})
var ref= database.ref().child('25').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed25").innerHTML = "+"+ans;
})
var ref= database.ref().child('25').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered25").innerHTML = ans;
})
var ref= database.ref().child('25').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered25").innerHTML = "+"+ans;
})
var ref= database.ref().child('25').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths25").innerHTML = ans;
})
var ref= database.ref().child('25').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths25").innerHTML = "+"+ans;
})
var ref= database.ref().child('26').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population26").innerHTML = ans;
})
var ref= database.ref().child('26').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed26").innerHTML = ans;
})
var ref= database.ref().child('26').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed26").innerHTML = "+"+ans;
})
var ref= database.ref().child('26').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered26").innerHTML = ans;
})
var ref= database.ref().child('26').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered26").innerHTML = "+"+ans;
})
var ref= database.ref().child('26').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths26").innerHTML = ans;
})
var ref= database.ref().child('26').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths26").innerHTML = "+"+ans;
})
var ref= database.ref().child('27').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population27").innerHTML = ans;
})
var ref= database.ref().child('27').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed27").innerHTML = ans;
})
var ref= database.ref().child('27').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed27").innerHTML = "+"+ans;
})
var ref= database.ref().child('27').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered27").innerHTML = ans;
})
var ref= database.ref().child('27').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered27").innerHTML = "+"+ans;
})
var ref= database.ref().child('27').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths27").innerHTML = ans;
})
var ref= database.ref().child('27').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths27").innerHTML = "+"+ans;
})
var ref= database.ref().child('28').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population28").innerHTML = ans;
})
var ref= database.ref().child('28').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed28").innerHTML = ans;
})
var ref= database.ref().child('28').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed28").innerHTML = "+"+ans;
})
var ref= database.ref().child('28').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered28").innerHTML = ans;
})
var ref= database.ref().child('28').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered28").innerHTML = "+"+ans;
})
var ref= database.ref().child('28').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths28").innerHTML = ans;
})
var ref= database.ref().child('28').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths28").innerHTML = "+"+ans;
})
var ref= database.ref().child('29').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population29").innerHTML = ans;
})
var ref= database.ref().child('29').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed29").innerHTML = ans;
})
var ref= database.ref().child('29').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed29").innerHTML = "+"+ans;
})
var ref= database.ref().child('29').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered29").innerHTML = ans;
})
var ref= database.ref().child('29').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered29").innerHTML = "+"+ans;
})
var ref= database.ref().child('29').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths29").innerHTML = ans;
})
var ref= database.ref().child('29').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths29").innerHTML = "+"+ans;
})
var ref= database.ref().child('30').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population30").innerHTML = ans;
})
var ref= database.ref().child('30').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed30").innerHTML = ans;
})
var ref= database.ref().child('30').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed30").innerHTML = "+"+ans;
})
var ref= database.ref().child('30').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered30").innerHTML = ans;
})
var ref= database.ref().child('30').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered30").innerHTML = "+"+ans;
})
var ref= database.ref().child('30').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths30").innerHTML = ans;
})
var ref= database.ref().child('30').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths30").innerHTML = "+"+ans;
})
var ref= database.ref().child('31').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population31").innerHTML = ans;
})
var ref= database.ref().child('31').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed31").innerHTML = ans;
})
var ref= database.ref().child('31').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed31").innerHTML = "+"+ans;
})
var ref= database.ref().child('31').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered31").innerHTML = ans;
})
var ref= database.ref().child('31').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered31").innerHTML = "+"+ans;
})
var ref= database.ref().child('31').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths31").innerHTML = ans;
})
var ref= database.ref().child('31').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths31").innerHTML = "+"+ans;
})
var ref= database.ref().child('32').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population32").innerHTML = ans;
})
var ref= database.ref().child('32').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed32").innerHTML = ans;
})
var ref= database.ref().child('32').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed32").innerHTML = "+"+ans;
})
var ref= database.ref().child('32').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered32").innerHTML = ans;
})
var ref= database.ref().child('32').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered32").innerHTML = "+"+ans;
})
var ref= database.ref().child('32').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths32").innerHTML = ans;
})
var ref= database.ref().child('32').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths32").innerHTML = "+"+ans;
})
var ref= database.ref().child('33').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population33").innerHTML = ans;
})
var ref= database.ref().child('33').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed33").innerHTML = ans;
})
var ref= database.ref().child('33').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed33").innerHTML = "+"+ans;
})
var ref= database.ref().child('33').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered33").innerHTML = ans;
})
var ref= database.ref().child('33').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered33").innerHTML = "+"+ans;
})
var ref= database.ref().child('33').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths33").innerHTML = ans;
})
var ref= database.ref().child('33').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths33").innerHTML = "+"+ans;
})
var ref= database.ref().child('34').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population34").innerHTML = ans;
})
var ref= database.ref().child('34').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed34").innerHTML = ans;
})
var ref= database.ref().child('34').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed34").innerHTML = "+"+ans;
})
var ref= database.ref().child('34').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered34").innerHTML = ans;
})
var ref= database.ref().child('34').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered34").innerHTML = "+"+ans;
})
var ref= database.ref().child('34').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths34").innerHTML = ans;
})
var ref= database.ref().child('34').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths34").innerHTML = "+"+ans;
})
var ref= database.ref().child('35').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population35").innerHTML = ans;
})
var ref= database.ref().child('35').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed35").innerHTML = ans;
})
var ref= database.ref().child('35').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed35").innerHTML = "+"+ans;
})
var ref= database.ref().child('35').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered35").innerHTML = ans;
})
var ref= database.ref().child('35').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered35").innerHTML = "+"+ans;
})
var ref= database.ref().child('35').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths35").innerHTML = ans;
})
var ref= database.ref().child('35').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths35").innerHTML = "+"+ans;
})
var ref= database.ref().child('36').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population36").innerHTML = ans;
})
var ref= database.ref().child('36').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed36").innerHTML = ans;
})
var ref= database.ref().child('36').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed36").innerHTML = "+"+ans;
})
var ref= database.ref().child('36').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered36").innerHTML = ans;
})
var ref= database.ref().child('36').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered36").innerHTML = "+"+ans;
})
var ref= database.ref().child('36').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths36").innerHTML = ans;
})
var ref= database.ref().child('36').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths36").innerHTML = "+"+ans;
})
var ref= database.ref().child('37').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population37").innerHTML = ans;
})
var ref= database.ref().child('37').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed37").innerHTML = ans;
})
var ref= database.ref().child('37').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed37").innerHTML = "+"+ans;
})
var ref= database.ref().child('37').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered37").innerHTML = ans;
})
var ref= database.ref().child('37').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered37").innerHTML = "+"+ans;
})
var ref= database.ref().child('37').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths37").innerHTML = ans;
})
var ref= database.ref().child('37').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths37").innerHTML = "+"+ans;
})
var ref= database.ref().child('38').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population38").innerHTML = ans;
})
var ref= database.ref().child('38').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed38").innerHTML = ans;
})
var ref= database.ref().child('38').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed38").innerHTML = "+"+ans;
})
var ref= database.ref().child('38').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered38").innerHTML = ans;
})
var ref= database.ref().child('38').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered38").innerHTML = "+"+ans;
})
var ref= database.ref().child('38').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths38").innerHTML = ans;
})
var ref= database.ref().child('38').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths38").innerHTML = "+"+ans;
})
var ref= database.ref().child('39').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population39").innerHTML = ans;
})
var ref= database.ref().child('39').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed39").innerHTML = ans;
})
var ref= database.ref().child('39').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed39").innerHTML = "+"+ans;
})
var ref= database.ref().child('39').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered39").innerHTML = ans;
})
var ref= database.ref().child('39').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered39").innerHTML = "+"+ans;
})
var ref= database.ref().child('39').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths39").innerHTML = ans;
})
var ref= database.ref().child('39').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths39").innerHTML = "+"+ans;
})
var ref= database.ref().child('40').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population40").innerHTML = ans;
})
var ref= database.ref().child('40').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed40").innerHTML = ans;
})
var ref= database.ref().child('40').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed40").innerHTML = "+"+ans;
})
var ref= database.ref().child('40').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered40").innerHTML = ans;
})
var ref= database.ref().child('40').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered40").innerHTML = "+"+ans;
})
var ref= database.ref().child('40').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths40").innerHTML = ans;
})
var ref= database.ref().child('40').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths40").innerHTML = "+"+ans;
})
var ref= database.ref().child('41').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population41").innerHTML = ans;
})
var ref= database.ref().child('41').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed41").innerHTML = ans;
})
var ref= database.ref().child('41').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed41").innerHTML = "+"+ans;
})
var ref= database.ref().child('41').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered41").innerHTML = ans;
})
var ref= database.ref().child('41').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered41").innerHTML = "+"+ans;
})
var ref= database.ref().child('41').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths41").innerHTML = ans;
})
var ref= database.ref().child('41').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths41").innerHTML = "+"+ans;
})
var ref= database.ref().child('42').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population42").innerHTML = ans;
})
var ref= database.ref().child('42').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed42").innerHTML = ans;
})
var ref= database.ref().child('42').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed42").innerHTML = "+"+ans;
})
var ref= database.ref().child('42').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered42").innerHTML = ans;
})
var ref= database.ref().child('42').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered42").innerHTML = "+"+ans;
})
var ref= database.ref().child('42').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths42").innerHTML = ans;
})
var ref= database.ref().child('42').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths42").innerHTML = "+"+ans;
})
var ref= database.ref().child('43').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population43").innerHTML = ans;
})
var ref= database.ref().child('43').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed43").innerHTML = ans;
})
var ref= database.ref().child('43').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed43").innerHTML = "+"+ans;
})
var ref= database.ref().child('43').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered43").innerHTML = ans;
})
var ref= database.ref().child('43').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered43").innerHTML = "+"+ans;
})
var ref= database.ref().child('43').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths43").innerHTML = ans;
})
var ref= database.ref().child('43').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths43").innerHTML = "+"+ans;
})
var ref= database.ref().child('44').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population44").innerHTML = ans;
})
var ref= database.ref().child('44').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed44").innerHTML = ans;
})
var ref= database.ref().child('44').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed44").innerHTML = "+"+ans;
})
var ref= database.ref().child('44').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered44").innerHTML = ans;
})
var ref= database.ref().child('44').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered44").innerHTML = "+"+ans;
})
var ref= database.ref().child('44').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths44").innerHTML = ans;
})
var ref= database.ref().child('44').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths44").innerHTML = "+"+ans;
})
var ref= database.ref().child('45').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population45").innerHTML = ans;
})
var ref= database.ref().child('45').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed45").innerHTML = ans;
})
var ref= database.ref().child('45').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed45").innerHTML = "+"+ans;
})
var ref= database.ref().child('45').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered45").innerHTML = ans;
})
var ref= database.ref().child('45').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered45").innerHTML = "+"+ans;
})
var ref= database.ref().child('45').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths45").innerHTML = ans;
})
var ref= database.ref().child('45').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths45").innerHTML = "+"+ans;
})
var ref= database.ref().child('46').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population46").innerHTML = ans;
})
var ref= database.ref().child('46').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed46").innerHTML = ans;
})
var ref= database.ref().child('46').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed46").innerHTML = "+"+ans;
})
var ref= database.ref().child('46').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered46").innerHTML = ans;
})
var ref= database.ref().child('46').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered46").innerHTML = "+"+ans;
})
var ref= database.ref().child('46').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths46").innerHTML = ans;
})
var ref= database.ref().child('46').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths46").innerHTML = "+"+ans;
})
var ref= database.ref().child('47').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population47").innerHTML = ans;
})
var ref= database.ref().child('47').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed47").innerHTML = ans;
})
var ref= database.ref().child('47').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed47").innerHTML = "+"+ans;
})
var ref= database.ref().child('47').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered47").innerHTML = ans;
})
var ref= database.ref().child('47').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered47").innerHTML = "+"+ans;
})
var ref= database.ref().child('47').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths47").innerHTML = ans;
})
var ref= database.ref().child('47').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths47").innerHTML = "+"+ans;
})
var ref= database.ref().child('48').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population48").innerHTML = ans;
})
var ref= database.ref().child('48').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed48").innerHTML = ans;
})
var ref= database.ref().child('48').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed48").innerHTML = "+"+ans;
})
var ref= database.ref().child('48').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered48").innerHTML = ans;
})
var ref= database.ref().child('48').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered48").innerHTML = "+"+ans;
})
var ref= database.ref().child('48').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths48").innerHTML = ans;
})
var ref= database.ref().child('48').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths48").innerHTML = "+"+ans;
})
var ref= database.ref().child('49').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population49").innerHTML = ans;
})
var ref= database.ref().child('49').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed49").innerHTML = ans;
})
var ref= database.ref().child('49').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed49").innerHTML = "+"+ans;
})
var ref= database.ref().child('49').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered49").innerHTML = ans;
})
var ref= database.ref().child('49').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered49").innerHTML = "+"+ans;
})
var ref= database.ref().child('49').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths49").innerHTML = ans;
})
var ref= database.ref().child('49').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths49").innerHTML = "+"+ans;
})
var ref= database.ref().child('50').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population50").innerHTML = ans;
})
var ref= database.ref().child('50').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed50").innerHTML = ans;
})
var ref= database.ref().child('50').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed50").innerHTML = "+"+ans;
})
var ref= database.ref().child('50').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered50").innerHTML = ans;
})
var ref= database.ref().child('50').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered50").innerHTML = "+"+ans;
})
var ref= database.ref().child('50').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths50").innerHTML = ans;
})
var ref= database.ref().child('50').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths50").innerHTML = "+"+ans;
})
var ref= database.ref().child('51').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population51").innerHTML = ans;
})
var ref= database.ref().child('51').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed51").innerHTML = ans;
})
var ref= database.ref().child('51').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed51").innerHTML = "+"+ans;
})
var ref= database.ref().child('51').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered51").innerHTML = ans;
})
var ref= database.ref().child('51').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered51").innerHTML = "+"+ans;
})
var ref= database.ref().child('51').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths51").innerHTML = ans;
})
var ref= database.ref().child('51').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths51").innerHTML = "+"+ans;
})
var ref= database.ref().child('52').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population52").innerHTML = ans;
})
var ref= database.ref().child('52').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed52").innerHTML = ans;
})
var ref= database.ref().child('52').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed52").innerHTML = "+"+ans;
})
var ref= database.ref().child('52').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered52").innerHTML = ans;
})
var ref= database.ref().child('52').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered52").innerHTML = "+"+ans;
})
var ref= database.ref().child('52').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths52").innerHTML = ans;
})
var ref= database.ref().child('52').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths52").innerHTML = "+"+ans;
})
var ref= database.ref().child('53').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population53").innerHTML = ans;
})
var ref= database.ref().child('53').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed53").innerHTML = ans;
})
var ref= database.ref().child('53').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed53").innerHTML = "+"+ans;
})
var ref= database.ref().child('53').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered53").innerHTML = ans;
})
var ref= database.ref().child('53').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered53").innerHTML = "+"+ans;
})
var ref= database.ref().child('53').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths53").innerHTML = ans;
})
var ref= database.ref().child('53').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths53").innerHTML = "+"+ans;
})
var ref= database.ref().child('54').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population54").innerHTML = ans;
})
var ref= database.ref().child('54').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed54").innerHTML = ans;
})
var ref= database.ref().child('54').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed54").innerHTML = "+"+ans;
})
var ref= database.ref().child('54').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered54").innerHTML = ans;
})
var ref= database.ref().child('54').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered54").innerHTML = "+"+ans;
})
var ref= database.ref().child('54').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths54").innerHTML = ans;
})
var ref= database.ref().child('54').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths54").innerHTML = "+"+ans;
})
var ref= database.ref().child('55').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population55").innerHTML = ans;
})
var ref= database.ref().child('55').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed55").innerHTML = ans;
})
var ref= database.ref().child('55').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed55").innerHTML = "+"+ans;
})
var ref= database.ref().child('55').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered55").innerHTML = ans;
})
var ref= database.ref().child('55').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered55").innerHTML = "+"+ans;
})
var ref= database.ref().child('55').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths55").innerHTML = ans;
})
var ref= database.ref().child('55').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths55").innerHTML = "+"+ans;
})
var ref= database.ref().child('56').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population56").innerHTML = ans;
})
var ref= database.ref().child('56').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed56").innerHTML = ans;
})
var ref= database.ref().child('56').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed56").innerHTML = "+"+ans;
})
var ref= database.ref().child('56').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered56").innerHTML = ans;
})
var ref= database.ref().child('56').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered56").innerHTML = "+"+ans;
})
var ref= database.ref().child('56').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths56").innerHTML = ans;
})
var ref= database.ref().child('56').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths56").innerHTML = "+"+ans;
})
var ref= database.ref().child('57').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population57").innerHTML = ans;
})
var ref= database.ref().child('57').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed57").innerHTML = ans;
})
var ref= database.ref().child('57').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed57").innerHTML = "+"+ans;
})
var ref= database.ref().child('57').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered57").innerHTML = ans;
})
var ref= database.ref().child('57').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered57").innerHTML = "+"+ans;
})
var ref= database.ref().child('57').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths57").innerHTML = ans;
})
var ref= database.ref().child('57').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths57").innerHTML = "+"+ans;
})
var ref= database.ref().child('58').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population58").innerHTML = ans;
})
var ref= database.ref().child('58').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed58").innerHTML = ans;
})
var ref= database.ref().child('58').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed58").innerHTML = "+"+ans;
})
var ref= database.ref().child('58').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered58").innerHTML = ans;
})
var ref= database.ref().child('58').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered58").innerHTML = "+"+ans;
})
var ref= database.ref().child('58').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths58").innerHTML = ans;
})
var ref= database.ref().child('58').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths58").innerHTML = "+"+ans;
})
var ref= database.ref().child('59').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population59").innerHTML = ans;
})
var ref= database.ref().child('59').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed59").innerHTML = ans;
})
var ref= database.ref().child('59').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed59").innerHTML = "+"+ans;
})
var ref= database.ref().child('59').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered59").innerHTML = ans;
})
var ref= database.ref().child('59').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered59").innerHTML = "+"+ans;
})
var ref= database.ref().child('59').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths59").innerHTML = ans;
})
var ref= database.ref().child('59').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths59").innerHTML = "+"+ans;
})
var ref= database.ref().child('60').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population60").innerHTML = ans;
})
var ref= database.ref().child('60').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed60").innerHTML = ans;
})
var ref= database.ref().child('60').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed60").innerHTML = "+"+ans;
})
var ref= database.ref().child('60').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered60").innerHTML = ans;
})
var ref= database.ref().child('60').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered60").innerHTML = "+"+ans;
})
var ref= database.ref().child('60').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths60").innerHTML = ans;
})
var ref= database.ref().child('60').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths60").innerHTML = "+"+ans;
})
var ref= database.ref().child('61').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population61").innerHTML = ans;
})
var ref= database.ref().child('61').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed61").innerHTML = ans;
})
var ref= database.ref().child('61').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed61").innerHTML = "+"+ans;
})
var ref= database.ref().child('61').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered61").innerHTML = ans;
})
var ref= database.ref().child('61').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered61").innerHTML = "+"+ans;
})
var ref= database.ref().child('61').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths61").innerHTML = ans;
})
var ref= database.ref().child('61').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths61").innerHTML = "+"+ans;
})
var ref= database.ref().child('62').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population62").innerHTML = ans;
})
var ref= database.ref().child('62').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed62").innerHTML = ans;
})
var ref= database.ref().child('62').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed62").innerHTML = "+"+ans;
})
var ref= database.ref().child('62').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered62").innerHTML = ans;
})
var ref= database.ref().child('62').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered62").innerHTML = "+"+ans;
})
var ref= database.ref().child('62').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths62").innerHTML = ans;
})
var ref= database.ref().child('62').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths62").innerHTML = "+"+ans;
})
var ref= database.ref().child('63').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population63").innerHTML = ans;
})
var ref= database.ref().child('63').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed63").innerHTML = ans;
})
var ref= database.ref().child('63').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed63").innerHTML = "+"+ans;
})
var ref= database.ref().child('63').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered63").innerHTML = ans;
})
var ref= database.ref().child('63').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered63").innerHTML = "+"+ans;
})
var ref= database.ref().child('63').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths63").innerHTML = ans;
})
var ref= database.ref().child('63').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths63").innerHTML = "+"+ans;
})
var ref= database.ref().child('64').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population64").innerHTML = ans;
})
var ref= database.ref().child('64').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed64").innerHTML = ans;
})
var ref= database.ref().child('64').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed64").innerHTML = "+"+ans;
})
var ref= database.ref().child('64').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered64").innerHTML = ans;
})
var ref= database.ref().child('64').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered64").innerHTML = "+"+ans;
})
var ref= database.ref().child('64').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths64").innerHTML = ans;
})
var ref= database.ref().child('64').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths64").innerHTML = "+"+ans;
})
var ref= database.ref().child('65').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population65").innerHTML = ans;
})
var ref= database.ref().child('65').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed65").innerHTML = ans;
})
var ref= database.ref().child('65').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed65").innerHTML = "+"+ans;
})
var ref= database.ref().child('65').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered65").innerHTML = ans;
})
var ref= database.ref().child('65').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered65").innerHTML = "+"+ans;
})
var ref= database.ref().child('65').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths65").innerHTML = ans;
})
var ref= database.ref().child('65').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths65").innerHTML = "+"+ans;
})
var ref= database.ref().child('66').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population66").innerHTML = ans;
})
var ref= database.ref().child('66').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed66").innerHTML = ans;
})
var ref= database.ref().child('66').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed66").innerHTML = "+"+ans;
})
var ref= database.ref().child('66').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered66").innerHTML = ans;
})
var ref= database.ref().child('66').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered66").innerHTML = "+"+ans;
})
var ref= database.ref().child('66').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths66").innerHTML = ans;
})
var ref= database.ref().child('66').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths66").innerHTML = "+"+ans;
})
var ref= database.ref().child('67').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population67").innerHTML = ans;
})
var ref= database.ref().child('67').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed67").innerHTML = ans;
})
var ref= database.ref().child('67').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed67").innerHTML = "+"+ans;
})
var ref= database.ref().child('67').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered67").innerHTML = ans;
})
var ref= database.ref().child('67').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered67").innerHTML = "+"+ans;
})
var ref= database.ref().child('67').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths67").innerHTML = ans;
})
var ref= database.ref().child('67').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths67").innerHTML = "+"+ans;
})
var ref= database.ref().child('68').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population68").innerHTML = ans;
})
var ref= database.ref().child('68').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed68").innerHTML = ans;
})
var ref= database.ref().child('68').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed68").innerHTML = "+"+ans;
})
var ref= database.ref().child('68').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered68").innerHTML = ans;
})
var ref= database.ref().child('68').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered68").innerHTML = "+"+ans;
})
var ref= database.ref().child('68').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths68").innerHTML = ans;
})
var ref= database.ref().child('68').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths68").innerHTML = "+"+ans;
})
var ref= database.ref().child('69').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population69").innerHTML = ans;
})
var ref= database.ref().child('69').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed69").innerHTML = ans;
})
var ref= database.ref().child('69').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed69").innerHTML = "+"+ans;
})
var ref= database.ref().child('69').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered69").innerHTML = ans;
})
var ref= database.ref().child('69').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered69").innerHTML = "+"+ans;
})
var ref= database.ref().child('69').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths69").innerHTML = ans;
})
var ref= database.ref().child('69').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths69").innerHTML = "+"+ans;
})
var ref= database.ref().child('70').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population70").innerHTML = ans;
})
var ref= database.ref().child('70').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed70").innerHTML = ans;
})
var ref= database.ref().child('70').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed70").innerHTML = "+"+ans;
})
var ref= database.ref().child('70').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered70").innerHTML = ans;
})
var ref= database.ref().child('70').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered70").innerHTML = "+"+ans;
})
var ref= database.ref().child('70').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths70").innerHTML = ans;
})
var ref= database.ref().child('70').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths70").innerHTML = "+"+ans;
})
var ref= database.ref().child('71').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population71").innerHTML = ans;
})
var ref= database.ref().child('71').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed71").innerHTML = ans;
})
var ref= database.ref().child('71').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed71").innerHTML = "+"+ans;
})
var ref= database.ref().child('71').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered71").innerHTML = ans;
})
var ref= database.ref().child('71').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered71").innerHTML = "+"+ans;
})
var ref= database.ref().child('71').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths71").innerHTML = ans;
})
var ref= database.ref().child('71').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths71").innerHTML = "+"+ans;
})
var ref= database.ref().child('72').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population72").innerHTML = ans;
})
var ref= database.ref().child('72').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed72").innerHTML = ans;
})
var ref= database.ref().child('72').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed72").innerHTML = "+"+ans;
})
var ref= database.ref().child('72').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered72").innerHTML = ans;
})
var ref= database.ref().child('72').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered72").innerHTML = "+"+ans;
})
var ref= database.ref().child('72').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths72").innerHTML = ans;
})
var ref= database.ref().child('72').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths72").innerHTML = "+"+ans;
})
var ref= database.ref().child('73').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population73").innerHTML = ans;
})
var ref= database.ref().child('73').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed73").innerHTML = ans;
})
var ref= database.ref().child('73').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed73").innerHTML = "+"+ans;
})
var ref= database.ref().child('73').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered73").innerHTML = ans;
})
var ref= database.ref().child('73').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered73").innerHTML = "+"+ans;
})
var ref= database.ref().child('73').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths73").innerHTML = ans;
})
var ref= database.ref().child('73').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths73").innerHTML = "+"+ans;
})
var ref= database.ref().child('74').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population74").innerHTML = ans;
})
var ref= database.ref().child('74').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed74").innerHTML = ans;
})
var ref= database.ref().child('74').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed74").innerHTML = "+"+ans;
})
var ref= database.ref().child('74').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered74").innerHTML = ans;
})
var ref= database.ref().child('74').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered74").innerHTML = "+"+ans;
})
var ref= database.ref().child('74').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths74").innerHTML = ans;
})
var ref= database.ref().child('74').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths74").innerHTML = "+"+ans;
})
var ref= database.ref().child('75').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population75").innerHTML = ans;
})
var ref= database.ref().child('75').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed75").innerHTML = ans;
})
var ref= database.ref().child('75').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed75").innerHTML = "+"+ans;
})
var ref= database.ref().child('75').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered75").innerHTML = ans;
})
var ref= database.ref().child('75').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered75").innerHTML = "+"+ans;
})
var ref= database.ref().child('75').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths75").innerHTML = ans;
})
var ref= database.ref().child('75').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths75").innerHTML = "+"+ans;
})
var ref= database.ref().child('76').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population76").innerHTML = ans;
})
var ref= database.ref().child('76').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed76").innerHTML = ans;
})
var ref= database.ref().child('76').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed76").innerHTML = "+"+ans;
})
var ref= database.ref().child('76').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered76").innerHTML = ans;
})
var ref= database.ref().child('76').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered76").innerHTML = "+"+ans;
})
var ref= database.ref().child('76').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths76").innerHTML = ans;
})
var ref= database.ref().child('76').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths76").innerHTML = "+"+ans;
})
var ref= database.ref().child('77').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population77").innerHTML = ans;
})
var ref= database.ref().child('77').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed77").innerHTML = ans;
})
var ref= database.ref().child('77').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed77").innerHTML = "+"+ans;
})
var ref= database.ref().child('77').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered77").innerHTML = ans;
})
var ref= database.ref().child('77').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered77").innerHTML = "+"+ans;
})
var ref= database.ref().child('77').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths77").innerHTML = ans;
})
var ref= database.ref().child('77').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths77").innerHTML = "+"+ans;
})
var ref= database.ref().child('78').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population78").innerHTML = ans;
})
var ref= database.ref().child('78').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed78").innerHTML = ans;
})
var ref= database.ref().child('78').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed78").innerHTML = "+"+ans;
})
var ref= database.ref().child('78').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered78").innerHTML = ans;
})
var ref= database.ref().child('78').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered78").innerHTML = "+"+ans;
})
var ref= database.ref().child('78').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths78").innerHTML = ans;
})
var ref= database.ref().child('78').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths78").innerHTML = "+"+ans;
})
var ref= database.ref().child('79').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population79").innerHTML = ans;
})
var ref= database.ref().child('79').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed79").innerHTML = ans;
})
var ref= database.ref().child('79').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed79").innerHTML = "+"+ans;
})
var ref= database.ref().child('79').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered79").innerHTML = ans;
})
var ref= database.ref().child('79').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered79").innerHTML = "+"+ans;
})
var ref= database.ref().child('79').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths79").innerHTML = ans;
})
var ref= database.ref().child('79').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths79").innerHTML = "+"+ans;
})
var ref= database.ref().child('80').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population80").innerHTML = ans;
})
var ref= database.ref().child('80').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed80").innerHTML = ans;
})
var ref= database.ref().child('80').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed80").innerHTML = "+"+ans;
})
var ref= database.ref().child('80').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered80").innerHTML = ans;
})
var ref= database.ref().child('80').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered80").innerHTML = "+"+ans;
})
var ref= database.ref().child('80').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths80").innerHTML = ans;
})
var ref= database.ref().child('80').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths80").innerHTML = "+"+ans;
})
var ref= database.ref().child('81').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population81").innerHTML = ans;
})
var ref= database.ref().child('81').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed81").innerHTML = ans;
})
var ref= database.ref().child('81').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed81").innerHTML = "+"+ans;
})
var ref= database.ref().child('81').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered81").innerHTML = ans;
})
var ref= database.ref().child('81').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered81").innerHTML = "+"+ans;
})
var ref= database.ref().child('81').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths81").innerHTML = ans;
})
var ref= database.ref().child('81').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths81").innerHTML = "+"+ans;
})
var ref= database.ref().child('82').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population82").innerHTML = ans;
})
var ref= database.ref().child('82').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed82").innerHTML = ans;
})
var ref= database.ref().child('82').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed82").innerHTML = "+"+ans;
})
var ref= database.ref().child('82').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered82").innerHTML = ans;
})
var ref= database.ref().child('82').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered82").innerHTML = "+"+ans;
})
var ref= database.ref().child('82').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths82").innerHTML = ans;
})
var ref= database.ref().child('82').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths82").innerHTML = "+"+ans;
})
var ref= database.ref().child('83').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population83").innerHTML = ans;
})
var ref= database.ref().child('83').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed83").innerHTML = ans;
})
var ref= database.ref().child('83').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed83").innerHTML = "+"+ans;
})
var ref= database.ref().child('83').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered83").innerHTML = ans;
})
var ref= database.ref().child('83').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered83").innerHTML = "+"+ans;
})
var ref= database.ref().child('83').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths83").innerHTML = ans;
})
var ref= database.ref().child('83').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths83").innerHTML = "+"+ans;
})
var ref= database.ref().child('84').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population84").innerHTML = ans;
})
var ref= database.ref().child('84').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed84").innerHTML = ans;
})
var ref= database.ref().child('84').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed84").innerHTML = "+"+ans;
})
var ref= database.ref().child('84').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered84").innerHTML = ans;
})
var ref= database.ref().child('84').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered84").innerHTML = "+"+ans;
})
var ref= database.ref().child('84').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths84").innerHTML = ans;
})
var ref= database.ref().child('84').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths84").innerHTML = "+"+ans;
})
var ref= database.ref().child('85').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population85").innerHTML = ans;
})
var ref= database.ref().child('85').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed85").innerHTML = ans;
})
var ref= database.ref().child('85').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed85").innerHTML = "+"+ans;
})
var ref= database.ref().child('85').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered85").innerHTML = ans;
})
var ref= database.ref().child('85').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered85").innerHTML = "+"+ans;
})
var ref= database.ref().child('85').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths85").innerHTML = ans;
})
var ref= database.ref().child('85').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths85").innerHTML = "+"+ans;
})
var ref= database.ref().child('86').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population86").innerHTML = ans;
})
var ref= database.ref().child('86').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed86").innerHTML = ans;
})
var ref= database.ref().child('86').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed86").innerHTML = "+"+ans;
})
var ref= database.ref().child('86').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered86").innerHTML = ans;
})
var ref= database.ref().child('86').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered86").innerHTML = "+"+ans;
})
var ref= database.ref().child('86').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths86").innerHTML = ans;
})
var ref= database.ref().child('86').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths86").innerHTML = "+"+ans;
})
var ref= database.ref().child('87').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population87").innerHTML = ans;
})
var ref= database.ref().child('87').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed87").innerHTML = ans;
})
var ref= database.ref().child('87').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed87").innerHTML = "+"+ans;
})
var ref= database.ref().child('87').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered87").innerHTML = ans;
})
var ref= database.ref().child('87').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered87").innerHTML = "+"+ans;
})
var ref= database.ref().child('87').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths87").innerHTML = ans;
})
var ref= database.ref().child('87').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths87").innerHTML = "+"+ans;
})
var ref= database.ref().child('88').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population88").innerHTML = ans;
})
var ref= database.ref().child('88').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed88").innerHTML = ans;
})
var ref= database.ref().child('88').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed88").innerHTML = "+"+ans;
})
var ref= database.ref().child('88').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered88").innerHTML = ans;
})
var ref= database.ref().child('88').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered88").innerHTML = "+"+ans;
})
var ref= database.ref().child('88').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths88").innerHTML = ans;
})
var ref= database.ref().child('88').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths88").innerHTML = "+"+ans;
})
var ref= database.ref().child('89').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population89").innerHTML = ans;
})
var ref= database.ref().child('89').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed89").innerHTML = ans;
})
var ref= database.ref().child('89').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed89").innerHTML = "+"+ans;
})
var ref= database.ref().child('89').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered89").innerHTML = ans;
})
var ref= database.ref().child('89').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered89").innerHTML = "+"+ans;
})
var ref= database.ref().child('89').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths89").innerHTML = ans;
})
var ref= database.ref().child('89').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths89").innerHTML = "+"+ans;
})
var ref= database.ref().child('90').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population90").innerHTML = ans;
})
var ref= database.ref().child('90').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed90").innerHTML = ans;
})
var ref= database.ref().child('90').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed90").innerHTML = "+"+ans;
})
var ref= database.ref().child('90').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered90").innerHTML = ans;
})
var ref= database.ref().child('90').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered90").innerHTML = "+"+ans;
})
var ref= database.ref().child('90').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths90").innerHTML = ans;
})
var ref= database.ref().child('90').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths90").innerHTML = "+"+ans;
})
var ref= database.ref().child('91').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population91").innerHTML = ans;
})
var ref= database.ref().child('91').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed91").innerHTML = ans;
})
var ref= database.ref().child('91').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed91").innerHTML = "+"+ans;
})
var ref= database.ref().child('91').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered91").innerHTML = ans;
})
var ref= database.ref().child('91').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered91").innerHTML = "+"+ans;
})
var ref= database.ref().child('91').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths91").innerHTML = ans;
})
var ref= database.ref().child('91').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths91").innerHTML = "+"+ans;
})
var ref= database.ref().child('92').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population92").innerHTML = ans;
})
var ref= database.ref().child('92').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed92").innerHTML = ans;
})
var ref= database.ref().child('92').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed92").innerHTML = "+"+ans;
})
var ref= database.ref().child('92').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered92").innerHTML = ans;
})
var ref= database.ref().child('92').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered92").innerHTML = "+"+ans;
})
var ref= database.ref().child('92').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths92").innerHTML = ans;
})
var ref= database.ref().child('92').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths92").innerHTML = "+"+ans;
})
var ref= database.ref().child('93').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population93").innerHTML = ans;
})
var ref= database.ref().child('93').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed93").innerHTML = ans;
})
var ref= database.ref().child('93').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed93").innerHTML = "+"+ans;
})
var ref= database.ref().child('93').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered93").innerHTML = ans;
})
var ref= database.ref().child('93').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered93").innerHTML = "+"+ans;
})
var ref= database.ref().child('93').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths93").innerHTML = ans;
})
var ref= database.ref().child('93').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths93").innerHTML = "+"+ans;
})
var ref= database.ref().child('94').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population94").innerHTML = ans;
})
var ref= database.ref().child('94').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed94").innerHTML = ans;
})
var ref= database.ref().child('94').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed94").innerHTML = "+"+ans;
})
var ref= database.ref().child('94').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered94").innerHTML = ans;
})
var ref= database.ref().child('94').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered94").innerHTML = "+"+ans;
})
var ref= database.ref().child('94').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths94").innerHTML = ans;
})
var ref= database.ref().child('94').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths94").innerHTML = "+"+ans;
})
var ref= database.ref().child('95').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population95").innerHTML = ans;
})
var ref= database.ref().child('95').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed95").innerHTML = ans;
})
var ref= database.ref().child('95').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed95").innerHTML = "+"+ans;
})
var ref= database.ref().child('95').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered95").innerHTML = ans;
})
var ref= database.ref().child('95').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered95").innerHTML = "+"+ans;
})
var ref= database.ref().child('95').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths95").innerHTML = ans;
})
var ref= database.ref().child('95').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths95").innerHTML = "+"+ans;
})
var ref= database.ref().child('96').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population96").innerHTML = ans;
})
var ref= database.ref().child('96').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed96").innerHTML = ans;
})
var ref= database.ref().child('96').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed96").innerHTML = "+"+ans;
})
var ref= database.ref().child('96').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered96").innerHTML = ans;
})
var ref= database.ref().child('96').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered96").innerHTML = "+"+ans;
})
var ref= database.ref().child('96').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths96").innerHTML = ans;
})
var ref= database.ref().child('96').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths96").innerHTML = "+"+ans;
})
var ref= database.ref().child('97').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population97").innerHTML = ans;
})
var ref= database.ref().child('97').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed97").innerHTML = ans;
})
var ref= database.ref().child('97').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed97").innerHTML = "+"+ans;
})
var ref= database.ref().child('97').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered97").innerHTML = ans;
})
var ref= database.ref().child('97').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered97").innerHTML = "+"+ans;
})
var ref= database.ref().child('97').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths97").innerHTML = ans;
})
var ref= database.ref().child('97').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths97").innerHTML = "+"+ans;
})
var ref= database.ref().child('98').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population98").innerHTML = ans;
})
var ref= database.ref().child('98').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed98").innerHTML = ans;
})
var ref= database.ref().child('98').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed98").innerHTML = "+"+ans;
})
var ref= database.ref().child('98').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered98").innerHTML = ans;
})
var ref= database.ref().child('98').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered98").innerHTML = "+"+ans;
})
var ref= database.ref().child('98').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths98").innerHTML = ans;
})
var ref= database.ref().child('98').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths98").innerHTML = "+"+ans;
})
var ref= database.ref().child('99').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population99").innerHTML = ans;
})
var ref= database.ref().child('99').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed99").innerHTML = ans;
})
var ref= database.ref().child('99').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed99").innerHTML = "+"+ans;
})
var ref= database.ref().child('99').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered99").innerHTML = ans;
})
var ref= database.ref().child('99').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered99").innerHTML = "+"+ans;
})
var ref= database.ref().child('99').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths99").innerHTML = ans;
})
var ref= database.ref().child('99').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths99").innerHTML = "+"+ans;
})
var ref= database.ref().child('100').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population100").innerHTML = ans;
})
var ref= database.ref().child('100').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed100").innerHTML = ans;
})
var ref= database.ref().child('100').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed100").innerHTML = "+"+ans;
})
var ref= database.ref().child('100').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered100").innerHTML = ans;
})
var ref= database.ref().child('100').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered100").innerHTML = "+"+ans;
})
var ref= database.ref().child('100').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths100").innerHTML = ans;
})
var ref= database.ref().child('100').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths100").innerHTML = "+"+ans;
})
var ref= database.ref().child('101').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population101").innerHTML = ans;
})
var ref= database.ref().child('101').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed101").innerHTML = ans;
})
var ref= database.ref().child('101').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed101").innerHTML = "+"+ans;
})
var ref= database.ref().child('101').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered101").innerHTML = ans;
})
var ref= database.ref().child('101').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered101").innerHTML = "+"+ans;
})
var ref= database.ref().child('101').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths101").innerHTML = ans;
})
var ref= database.ref().child('101').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths101").innerHTML = "+"+ans;
})
var ref= database.ref().child('102').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population102").innerHTML = ans;
})
var ref= database.ref().child('102').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed102").innerHTML = ans;
})
var ref= database.ref().child('102').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed102").innerHTML = "+"+ans;
})
var ref= database.ref().child('102').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered102").innerHTML = ans;
})
var ref= database.ref().child('102').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered102").innerHTML = "+"+ans;
})
var ref= database.ref().child('102').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths102").innerHTML = ans;
})
var ref= database.ref().child('102').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths102").innerHTML = "+"+ans;
})
var ref= database.ref().child('103').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population103").innerHTML = ans;
})
var ref= database.ref().child('103').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed103").innerHTML = ans;
})
var ref= database.ref().child('103').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed103").innerHTML = "+"+ans;
})
var ref= database.ref().child('103').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered103").innerHTML = ans;
})
var ref= database.ref().child('103').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered103").innerHTML = "+"+ans;
})
var ref= database.ref().child('103').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths103").innerHTML = ans;
})
var ref= database.ref().child('103').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths103").innerHTML = "+"+ans;
})
var ref= database.ref().child('104').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population104").innerHTML = ans;
})
var ref= database.ref().child('104').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed104").innerHTML = ans;
})
var ref= database.ref().child('104').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed104").innerHTML = "+"+ans;
})
var ref= database.ref().child('104').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered104").innerHTML = ans;
})
var ref= database.ref().child('104').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered104").innerHTML = "+"+ans;
})
var ref= database.ref().child('104').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths104").innerHTML = ans;
})
var ref= database.ref().child('104').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths104").innerHTML = "+"+ans;
})
var ref= database.ref().child('105').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population105").innerHTML = ans;
})
var ref= database.ref().child('105').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed105").innerHTML = ans;
})
var ref= database.ref().child('105').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed105").innerHTML = "+"+ans;
})
var ref= database.ref().child('105').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered105").innerHTML = ans;
})
var ref= database.ref().child('105').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered105").innerHTML = "+"+ans;
})
var ref= database.ref().child('105').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths105").innerHTML = ans;
})
var ref= database.ref().child('105').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths105").innerHTML = "+"+ans;
})
var ref= database.ref().child('106').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population106").innerHTML = ans;
})
var ref= database.ref().child('106').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed106").innerHTML = ans;
})
var ref= database.ref().child('106').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed106").innerHTML = "+"+ans;
})
var ref= database.ref().child('106').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered106").innerHTML = ans;
})
var ref= database.ref().child('106').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered106").innerHTML = "+"+ans;
})
var ref= database.ref().child('106').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths106").innerHTML = ans;
})
var ref= database.ref().child('106').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths106").innerHTML = "+"+ans;
})
var ref= database.ref().child('107').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population107").innerHTML = ans;
})
var ref= database.ref().child('107').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed107").innerHTML = ans;
})
var ref= database.ref().child('107').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed107").innerHTML = "+"+ans;
})
var ref= database.ref().child('107').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered107").innerHTML = ans;
})
var ref= database.ref().child('107').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered107").innerHTML = "+"+ans;
})
var ref= database.ref().child('107').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths107").innerHTML = ans;
})
var ref= database.ref().child('107').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths107").innerHTML = "+"+ans;
})
var ref= database.ref().child('108').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population108").innerHTML = ans;
})
var ref= database.ref().child('108').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed108").innerHTML = ans;
})
var ref= database.ref().child('108').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed108").innerHTML = "+"+ans;
})
var ref= database.ref().child('108').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered108").innerHTML = ans;
})
var ref= database.ref().child('108').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered108").innerHTML = "+"+ans;
})
var ref= database.ref().child('108').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths108").innerHTML = ans;
})
var ref= database.ref().child('108').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths108").innerHTML = "+"+ans;
})
var ref= database.ref().child('109').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population109").innerHTML = ans;
})
var ref= database.ref().child('109').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed109").innerHTML = ans;
})
var ref= database.ref().child('109').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed109").innerHTML = "+"+ans;
})
var ref= database.ref().child('109').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered109").innerHTML = ans;
})
var ref= database.ref().child('109').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered109").innerHTML = "+"+ans;
})
var ref= database.ref().child('109').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths109").innerHTML = ans;
})
var ref= database.ref().child('109').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths109").innerHTML = "+"+ans;
})
var ref= database.ref().child('110').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population110").innerHTML = ans;
})
var ref= database.ref().child('110').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed110").innerHTML = ans;
})
var ref= database.ref().child('110').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed110").innerHTML = "+"+ans;
})
var ref= database.ref().child('110').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered110").innerHTML = ans;
})
var ref= database.ref().child('110').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered110").innerHTML = "+"+ans;
})
var ref= database.ref().child('110').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths110").innerHTML = ans;
})
var ref= database.ref().child('110').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths110").innerHTML = "+"+ans;
})
var ref= database.ref().child('111').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population111").innerHTML = ans;
})
var ref= database.ref().child('111').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed111").innerHTML = ans;
})
var ref= database.ref().child('111').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed111").innerHTML = "+"+ans;
})
var ref= database.ref().child('111').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered111").innerHTML = ans;
})
var ref= database.ref().child('111').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered111").innerHTML = "+"+ans;
})
var ref= database.ref().child('111').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths111").innerHTML = ans;
})
var ref= database.ref().child('111').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths111").innerHTML = "+"+ans;
})
var ref= database.ref().child('112').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population112").innerHTML = ans;
})
var ref= database.ref().child('112').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed112").innerHTML = ans;
})
var ref= database.ref().child('112').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed112").innerHTML = "+"+ans;
})
var ref= database.ref().child('112').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered112").innerHTML = ans;
})
var ref= database.ref().child('112').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered112").innerHTML = "+"+ans;
})
var ref= database.ref().child('112').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths112").innerHTML = ans;
})
var ref= database.ref().child('112').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths112").innerHTML = "+"+ans;
})
var ref= database.ref().child('113').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population113").innerHTML = ans;
})
var ref= database.ref().child('113').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed113").innerHTML = ans;
})
var ref= database.ref().child('113').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed113").innerHTML = "+"+ans;
})
var ref= database.ref().child('113').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered113").innerHTML = ans;
})
var ref= database.ref().child('113').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered113").innerHTML = "+"+ans;
})
var ref= database.ref().child('113').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths113").innerHTML = ans;
})
var ref= database.ref().child('113').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths113").innerHTML = "+"+ans;
})
var ref= database.ref().child('114').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population114").innerHTML = ans;
})
var ref= database.ref().child('114').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed114").innerHTML = ans;
})
var ref= database.ref().child('114').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed114").innerHTML = "+"+ans;
})
var ref= database.ref().child('114').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered114").innerHTML = ans;
})
var ref= database.ref().child('114').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered114").innerHTML = "+"+ans;
})
var ref= database.ref().child('114').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths114").innerHTML = ans;
})
var ref= database.ref().child('114').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths114").innerHTML = "+"+ans;
})
var ref= database.ref().child('115').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population115").innerHTML = ans;
})
var ref= database.ref().child('115').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed115").innerHTML = ans;
})
var ref= database.ref().child('115').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed115").innerHTML = "+"+ans;
})
var ref= database.ref().child('115').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered115").innerHTML = ans;
})
var ref= database.ref().child('115').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered115").innerHTML = "+"+ans;
})
var ref= database.ref().child('115').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths115").innerHTML = ans;
})
var ref= database.ref().child('115').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths115").innerHTML = "+"+ans;
})
var ref= database.ref().child('116').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population116").innerHTML = ans;
})
var ref= database.ref().child('116').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed116").innerHTML = ans;
})
var ref= database.ref().child('116').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed116").innerHTML = "+"+ans;
})
var ref= database.ref().child('116').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered116").innerHTML = ans;
})
var ref= database.ref().child('116').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered116").innerHTML = "+"+ans;
})
var ref= database.ref().child('116').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths116").innerHTML = ans;
})
var ref= database.ref().child('116').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths116").innerHTML = "+"+ans;
})
var ref= database.ref().child('117').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population117").innerHTML = ans;
})
var ref= database.ref().child('117').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed117").innerHTML = ans;
})
var ref= database.ref().child('117').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed117").innerHTML = "+"+ans;
})
var ref= database.ref().child('117').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered117").innerHTML = ans;
})
var ref= database.ref().child('117').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered117").innerHTML = "+"+ans;
})
var ref= database.ref().child('117').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths117").innerHTML = ans;
})
var ref= database.ref().child('117').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths117").innerHTML = "+"+ans;
})
var ref= database.ref().child('118').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population118").innerHTML = ans;
})
var ref= database.ref().child('118').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed118").innerHTML = ans;
})
var ref= database.ref().child('118').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed118").innerHTML = "+"+ans;
})
var ref= database.ref().child('118').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered118").innerHTML = ans;
})
var ref= database.ref().child('118').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered118").innerHTML = "+"+ans;
})
var ref= database.ref().child('118').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths118").innerHTML = ans;
})
var ref= database.ref().child('118').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths118").innerHTML = "+"+ans;
})
var ref= database.ref().child('119').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population119").innerHTML = ans;
})
var ref= database.ref().child('119').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed119").innerHTML = ans;
})
var ref= database.ref().child('119').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed119").innerHTML = "+"+ans;
})
var ref= database.ref().child('119').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered119").innerHTML = ans;
})
var ref= database.ref().child('119').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered119").innerHTML = "+"+ans;
})
var ref= database.ref().child('119').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths119").innerHTML = ans;
})
var ref= database.ref().child('119').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths119").innerHTML = "+"+ans;
})
var ref= database.ref().child('120').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population120").innerHTML = ans;
})
var ref= database.ref().child('120').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed120").innerHTML = ans;
})
var ref= database.ref().child('120').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed120").innerHTML = "+"+ans;
})
var ref= database.ref().child('120').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered120").innerHTML = ans;
})
var ref= database.ref().child('120').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered120").innerHTML = "+"+ans;
})
var ref= database.ref().child('120').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths120").innerHTML = ans;
})
var ref= database.ref().child('120').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths120").innerHTML = "+"+ans;
})
var ref= database.ref().child('121').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population121").innerHTML = ans;
})
var ref= database.ref().child('121').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed121").innerHTML = ans;
})
var ref= database.ref().child('121').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed121").innerHTML = "+"+ans;
})
var ref= database.ref().child('121').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered121").innerHTML = ans;
})
var ref= database.ref().child('121').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered121").innerHTML = "+"+ans;
})
var ref= database.ref().child('121').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths121").innerHTML = ans;
})
var ref= database.ref().child('121').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths121").innerHTML = "+"+ans;
})
var ref= database.ref().child('122').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population122").innerHTML = ans;
})
var ref= database.ref().child('122').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed122").innerHTML = ans;
})
var ref= database.ref().child('122').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed122").innerHTML = "+"+ans;
})
var ref= database.ref().child('122').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered122").innerHTML = ans;
})
var ref= database.ref().child('122').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered122").innerHTML = "+"+ans;
})
var ref= database.ref().child('122').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths122").innerHTML = ans;
})
var ref= database.ref().child('122').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths122").innerHTML = "+"+ans;
})
var ref= database.ref().child('123').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population123").innerHTML = ans;
})
var ref= database.ref().child('123').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed123").innerHTML = ans;
})
var ref= database.ref().child('123').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed123").innerHTML = "+"+ans;
})
var ref= database.ref().child('123').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered123").innerHTML = ans;
})
var ref= database.ref().child('123').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered123").innerHTML = "+"+ans;
})
var ref= database.ref().child('123').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths123").innerHTML = ans;
})
var ref= database.ref().child('123').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths123").innerHTML = "+"+ans;
})
var ref= database.ref().child('124').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population124").innerHTML = ans;
})
var ref= database.ref().child('124').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed124").innerHTML = ans;
})
var ref= database.ref().child('124').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed124").innerHTML = "+"+ans;
})
var ref= database.ref().child('124').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered124").innerHTML = ans;
})
var ref= database.ref().child('124').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered124").innerHTML = "+"+ans;
})
var ref= database.ref().child('124').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths124").innerHTML = ans;
})
var ref= database.ref().child('124').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths124").innerHTML = "+"+ans;
})
var ref= database.ref().child('125').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population125").innerHTML = ans;
})
var ref= database.ref().child('125').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed125").innerHTML = ans;
})
var ref= database.ref().child('125').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed125").innerHTML = "+"+ans;
})
var ref= database.ref().child('125').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered125").innerHTML = ans;
})
var ref= database.ref().child('125').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered125").innerHTML = "+"+ans;
})
var ref= database.ref().child('125').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths125").innerHTML = ans;
})
var ref= database.ref().child('125').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths125").innerHTML = "+"+ans;
})
var ref= database.ref().child('126').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population126").innerHTML = ans;
})
var ref= database.ref().child('126').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed126").innerHTML = ans;
})
var ref= database.ref().child('126').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed126").innerHTML = "+"+ans;
})
var ref= database.ref().child('126').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered126").innerHTML = ans;
})
var ref= database.ref().child('126').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered126").innerHTML = "+"+ans;
})
var ref= database.ref().child('126').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths126").innerHTML = ans;
})
var ref= database.ref().child('126').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths126").innerHTML = "+"+ans;
})
var ref= database.ref().child('127').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population127").innerHTML = ans;
})
var ref= database.ref().child('127').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed127").innerHTML = ans;
})
var ref= database.ref().child('127').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed127").innerHTML = "+"+ans;
})
var ref= database.ref().child('127').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered127").innerHTML = ans;
})
var ref= database.ref().child('127').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered127").innerHTML = "+"+ans;
})
var ref= database.ref().child('127').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths127").innerHTML = ans;
})
var ref= database.ref().child('127').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths127").innerHTML = "+"+ans;
})
var ref= database.ref().child('128').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population128").innerHTML = ans;
})
var ref= database.ref().child('128').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed128").innerHTML = ans;
})
var ref= database.ref().child('128').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed128").innerHTML = "+"+ans;
})
var ref= database.ref().child('128').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered128").innerHTML = ans;
})
var ref= database.ref().child('128').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered128").innerHTML = "+"+ans;
})
var ref= database.ref().child('128').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths128").innerHTML = ans;
})
var ref= database.ref().child('128').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths128").innerHTML = "+"+ans;
})
var ref= database.ref().child('129').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population129").innerHTML = ans;
})
var ref= database.ref().child('129').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed129").innerHTML = ans;
})
var ref= database.ref().child('129').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed129").innerHTML = "+"+ans;
})
var ref= database.ref().child('129').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered129").innerHTML = ans;
})
var ref= database.ref().child('129').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered129").innerHTML = "+"+ans;
})
var ref= database.ref().child('129').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths129").innerHTML = ans;
})
var ref= database.ref().child('129').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths129").innerHTML = "+"+ans;
})
var ref= database.ref().child('130').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population130").innerHTML = ans;
})
var ref= database.ref().child('130').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed130").innerHTML = ans;
})
var ref= database.ref().child('130').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed130").innerHTML = "+"+ans;
})
var ref= database.ref().child('130').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered130").innerHTML = ans;
})
var ref= database.ref().child('130').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered130").innerHTML = "+"+ans;
})
var ref= database.ref().child('130').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths130").innerHTML = ans;
})
var ref= database.ref().child('130').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths130").innerHTML = "+"+ans;
})
var ref= database.ref().child('131').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population131").innerHTML = ans;
})
var ref= database.ref().child('131').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed131").innerHTML = ans;
})
var ref= database.ref().child('131').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed131").innerHTML = "+"+ans;
})
var ref= database.ref().child('131').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered131").innerHTML = ans;
})
var ref= database.ref().child('131').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered131").innerHTML = "+"+ans;
})
var ref= database.ref().child('131').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths131").innerHTML = ans;
})
var ref= database.ref().child('131').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths131").innerHTML = "+"+ans;
})
var ref= database.ref().child('132').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population132").innerHTML = ans;
})
var ref= database.ref().child('132').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed132").innerHTML = ans;
})
var ref= database.ref().child('132').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed132").innerHTML = "+"+ans;
})
var ref= database.ref().child('132').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered132").innerHTML = ans;
})
var ref= database.ref().child('132').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered132").innerHTML = "+"+ans;
})
var ref= database.ref().child('132').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths132").innerHTML = ans;
})
var ref= database.ref().child('132').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths132").innerHTML = "+"+ans;
})
var ref= database.ref().child('133').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population133").innerHTML = ans;
})
var ref= database.ref().child('133').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed133").innerHTML = ans;
})
var ref= database.ref().child('133').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed133").innerHTML = "+"+ans;
})
var ref= database.ref().child('133').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered133").innerHTML = ans;
})
var ref= database.ref().child('133').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered133").innerHTML = "+"+ans;
})
var ref= database.ref().child('133').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths133").innerHTML = ans;
})
var ref= database.ref().child('133').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths133").innerHTML = "+"+ans;
})
var ref= database.ref().child('134').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population134").innerHTML = ans;
})
var ref= database.ref().child('134').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed134").innerHTML = ans;
})
var ref= database.ref().child('134').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed134").innerHTML = "+"+ans;
})
var ref= database.ref().child('134').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered134").innerHTML = ans;
})
var ref= database.ref().child('134').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered134").innerHTML = "+"+ans;
})
var ref= database.ref().child('134').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths134").innerHTML = ans;
})
var ref= database.ref().child('134').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths134").innerHTML = "+"+ans;
})
var ref= database.ref().child('135').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population135").innerHTML = ans;
})
var ref= database.ref().child('135').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed135").innerHTML = ans;
})
var ref= database.ref().child('135').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed135").innerHTML = "+"+ans;
})
var ref= database.ref().child('135').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered135").innerHTML = ans;
})
var ref= database.ref().child('135').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered135").innerHTML = "+"+ans;
})
var ref= database.ref().child('135').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths135").innerHTML = ans;
})
var ref= database.ref().child('135').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths135").innerHTML = "+"+ans;
})
var ref= database.ref().child('136').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population136").innerHTML = ans;
})
var ref= database.ref().child('136').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed136").innerHTML = ans;
})
var ref= database.ref().child('136').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed136").innerHTML = "+"+ans;
})
var ref= database.ref().child('136').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered136").innerHTML = ans;
})
var ref= database.ref().child('136').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered136").innerHTML = "+"+ans;
})
var ref= database.ref().child('136').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths136").innerHTML = ans;
})
var ref= database.ref().child('136').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths136").innerHTML = "+"+ans;
})
var ref= database.ref().child('137').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population137").innerHTML = ans;
})
var ref= database.ref().child('137').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed137").innerHTML = ans;
})
var ref= database.ref().child('137').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed137").innerHTML = "+"+ans;
})
var ref= database.ref().child('137').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered137").innerHTML = ans;
})
var ref= database.ref().child('137').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered137").innerHTML = "+"+ans;
})
var ref= database.ref().child('137').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths137").innerHTML = ans;
})
var ref= database.ref().child('137').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths137").innerHTML = "+"+ans;
})
var ref= database.ref().child('138').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population138").innerHTML = ans;
})
var ref= database.ref().child('138').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed138").innerHTML = ans;
})
var ref= database.ref().child('138').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed138").innerHTML = "+"+ans;
})
var ref= database.ref().child('138').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered138").innerHTML = ans;
})
var ref= database.ref().child('138').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered138").innerHTML = "+"+ans;
})
var ref= database.ref().child('138').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths138").innerHTML = ans;
})
var ref= database.ref().child('138').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths138").innerHTML = "+"+ans;
})
var ref= database.ref().child('139').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population139").innerHTML = ans;
})
var ref= database.ref().child('139').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed139").innerHTML = ans;
})
var ref= database.ref().child('139').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed139").innerHTML = "+"+ans;
})
var ref= database.ref().child('139').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered139").innerHTML = ans;
})
var ref= database.ref().child('139').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered139").innerHTML = "+"+ans;
})
var ref= database.ref().child('139').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths139").innerHTML = ans;
})
var ref= database.ref().child('139').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths139").innerHTML = "+"+ans;
})
var ref= database.ref().child('140').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population140").innerHTML = ans;
})
var ref= database.ref().child('140').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed140").innerHTML = ans;
})
var ref= database.ref().child('140').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed140").innerHTML = "+"+ans;
})
var ref= database.ref().child('140').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered140").innerHTML = ans;
})
var ref= database.ref().child('140').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered140").innerHTML = "+"+ans;
})
var ref= database.ref().child('140').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths140").innerHTML = ans;
})
var ref= database.ref().child('140').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths140").innerHTML = "+"+ans;
})
var ref= database.ref().child('141').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population141").innerHTML = ans;
})
var ref= database.ref().child('141').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed141").innerHTML = ans;
})
var ref= database.ref().child('141').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed141").innerHTML = "+"+ans;
})
var ref= database.ref().child('141').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered141").innerHTML = ans;
})
var ref= database.ref().child('141').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered141").innerHTML = "+"+ans;
})
var ref= database.ref().child('141').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths141").innerHTML = ans;
})
var ref= database.ref().child('141').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths141").innerHTML = "+"+ans;
})
var ref= database.ref().child('142').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population142").innerHTML = ans;
})
var ref= database.ref().child('142').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed142").innerHTML = ans;
})
var ref= database.ref().child('142').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed142").innerHTML = "+"+ans;
})
var ref= database.ref().child('142').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered142").innerHTML = ans;
})
var ref= database.ref().child('142').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered142").innerHTML = "+"+ans;
})
var ref= database.ref().child('142').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths142").innerHTML = ans;
})
var ref= database.ref().child('142').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths142").innerHTML = "+"+ans;
})
var ref= database.ref().child('143').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population143").innerHTML = ans;
})
var ref= database.ref().child('143').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed143").innerHTML = ans;
})
var ref= database.ref().child('143').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed143").innerHTML = "+"+ans;
})
var ref= database.ref().child('143').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered143").innerHTML = ans;
})
var ref= database.ref().child('143').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered143").innerHTML = "+"+ans;
})
var ref= database.ref().child('143').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths143").innerHTML = ans;
})
var ref= database.ref().child('143').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths143").innerHTML = "+"+ans;
})
var ref= database.ref().child('144').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population144").innerHTML = ans;
})
var ref= database.ref().child('144').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed144").innerHTML = ans;
})
var ref= database.ref().child('144').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed144").innerHTML = "+"+ans;
})
var ref= database.ref().child('144').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered144").innerHTML = ans;
})
var ref= database.ref().child('144').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered144").innerHTML = "+"+ans;
})
var ref= database.ref().child('144').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths144").innerHTML = ans;
})
var ref= database.ref().child('144').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths144").innerHTML = "+"+ans;
})
var ref= database.ref().child('145').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population145").innerHTML = ans;
})
var ref= database.ref().child('145').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed145").innerHTML = ans;
})
var ref= database.ref().child('145').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed145").innerHTML = "+"+ans;
})
var ref= database.ref().child('145').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered145").innerHTML = ans;
})
var ref= database.ref().child('145').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered145").innerHTML = "+"+ans;
})
var ref= database.ref().child('145').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths145").innerHTML = ans;
})
var ref= database.ref().child('145').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths145").innerHTML = "+"+ans;
})
var ref= database.ref().child('146').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population146").innerHTML = ans;
})
var ref= database.ref().child('146').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed146").innerHTML = ans;
})
var ref= database.ref().child('146').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed146").innerHTML = "+"+ans;
})
var ref= database.ref().child('146').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered146").innerHTML = ans;
})
var ref= database.ref().child('146').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered146").innerHTML = "+"+ans;
})
var ref= database.ref().child('146').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths146").innerHTML = ans;
})
var ref= database.ref().child('146').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths146").innerHTML = "+"+ans;
})
var ref= database.ref().child('147').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population147").innerHTML = ans;
})
var ref= database.ref().child('147').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed147").innerHTML = ans;
})
var ref= database.ref().child('147').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed147").innerHTML = "+"+ans;
})
var ref= database.ref().child('147').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered147").innerHTML = ans;
})
var ref= database.ref().child('147').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered147").innerHTML = "+"+ans;
})
var ref= database.ref().child('147').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths147").innerHTML = ans;
})
var ref= database.ref().child('147').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths147").innerHTML = "+"+ans;
})
var ref= database.ref().child('148').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population148").innerHTML = ans;
})
var ref= database.ref().child('148').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed148").innerHTML = ans;
})
var ref= database.ref().child('148').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed148").innerHTML = "+"+ans;
})
var ref= database.ref().child('148').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered148").innerHTML = ans;
})
var ref= database.ref().child('148').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered148").innerHTML = "+"+ans;
})
var ref= database.ref().child('148').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths148").innerHTML = ans;
})
var ref= database.ref().child('148').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths148").innerHTML = "+"+ans;
})
var ref= database.ref().child('149').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population149").innerHTML = ans;
})
var ref= database.ref().child('149').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed149").innerHTML = ans;
})
var ref= database.ref().child('149').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed149").innerHTML = "+"+ans;
})
var ref= database.ref().child('149').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered149").innerHTML = ans;
})
var ref= database.ref().child('149').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered149").innerHTML = "+"+ans;
})
var ref= database.ref().child('149').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths149").innerHTML = ans;
})
var ref= database.ref().child('149').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths149").innerHTML = "+"+ans;
})
var ref= database.ref().child('150').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population150").innerHTML = ans;
})
var ref= database.ref().child('150').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed150").innerHTML = ans;
})
var ref= database.ref().child('150').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed150").innerHTML = "+"+ans;
})
var ref= database.ref().child('150').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered150").innerHTML = ans;
})
var ref= database.ref().child('150').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered150").innerHTML = "+"+ans;
})
var ref= database.ref().child('150').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths150").innerHTML = ans;
})
var ref= database.ref().child('150').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths150").innerHTML = "+"+ans;
})
var ref= database.ref().child('151').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population151").innerHTML = ans;
})
var ref= database.ref().child('151').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed151").innerHTML = ans;
})
var ref= database.ref().child('151').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed151").innerHTML = "+"+ans;
})
var ref= database.ref().child('151').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered151").innerHTML = ans;
})
var ref= database.ref().child('151').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered151").innerHTML = "+"+ans;
})
var ref= database.ref().child('151').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths151").innerHTML = ans;
})
var ref= database.ref().child('151').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths151").innerHTML = "+"+ans;
})
var ref= database.ref().child('152').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population152").innerHTML = ans;
})
var ref= database.ref().child('152').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed152").innerHTML = ans;
})
var ref= database.ref().child('152').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed152").innerHTML = "+"+ans;
})
var ref= database.ref().child('152').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered152").innerHTML = ans;
})
var ref= database.ref().child('152').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered152").innerHTML = "+"+ans;
})
var ref= database.ref().child('152').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths152").innerHTML = ans;
})
var ref= database.ref().child('152').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths152").innerHTML = "+"+ans;
})
var ref= database.ref().child('153').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population153").innerHTML = ans;
})
var ref= database.ref().child('153').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed153").innerHTML = ans;
})
var ref= database.ref().child('153').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed153").innerHTML = "+"+ans;
})
var ref= database.ref().child('153').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered153").innerHTML = ans;
})
var ref= database.ref().child('153').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered153").innerHTML = "+"+ans;
})
var ref= database.ref().child('153').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths153").innerHTML = ans;
})
var ref= database.ref().child('153').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths153").innerHTML = "+"+ans;
})
var ref= database.ref().child('154').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population154").innerHTML = ans;
})
var ref= database.ref().child('154').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed154").innerHTML = ans;
})
var ref= database.ref().child('154').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed154").innerHTML = "+"+ans;
})
var ref= database.ref().child('154').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered154").innerHTML = ans;
})
var ref= database.ref().child('154').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered154").innerHTML = "+"+ans;
})
var ref= database.ref().child('154').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths154").innerHTML = ans;
})
var ref= database.ref().child('154').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths154").innerHTML = "+"+ans;
})
var ref= database.ref().child('155').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population155").innerHTML = ans;
})
var ref= database.ref().child('155').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed155").innerHTML = ans;
})
var ref= database.ref().child('155').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed155").innerHTML = "+"+ans;
})
var ref= database.ref().child('155').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered155").innerHTML = ans;
})
var ref= database.ref().child('155').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered155").innerHTML = "+"+ans;
})
var ref= database.ref().child('155').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths155").innerHTML = ans;
})
var ref= database.ref().child('155').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths155").innerHTML = "+"+ans;
})
var ref= database.ref().child('156').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population156").innerHTML = ans;
})
var ref= database.ref().child('156').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed156").innerHTML = ans;
})
var ref= database.ref().child('156').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed156").innerHTML = "+"+ans;
})
var ref= database.ref().child('156').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered156").innerHTML = ans;
})
var ref= database.ref().child('156').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered156").innerHTML = "+"+ans;
})
var ref= database.ref().child('156').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths156").innerHTML = ans;
})
var ref= database.ref().child('156').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths156").innerHTML = "+"+ans;
})
var ref= database.ref().child('157').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population157").innerHTML = ans;
})
var ref= database.ref().child('157').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed157").innerHTML = ans;
})
var ref= database.ref().child('157').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed157").innerHTML = "+"+ans;
})
var ref= database.ref().child('157').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered157").innerHTML = ans;
})
var ref= database.ref().child('157').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered157").innerHTML = "+"+ans;
})
var ref= database.ref().child('157').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths157").innerHTML = ans;
})
var ref= database.ref().child('157').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths157").innerHTML = "+"+ans;
})
var ref= database.ref().child('158').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population158").innerHTML = ans;
})
var ref= database.ref().child('158').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed158").innerHTML = ans;
})
var ref= database.ref().child('158').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed158").innerHTML = "+"+ans;
})
var ref= database.ref().child('158').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered158").innerHTML = ans;
})
var ref= database.ref().child('158').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered158").innerHTML = "+"+ans;
})
var ref= database.ref().child('158').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths158").innerHTML = ans;
})
var ref= database.ref().child('158').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths158").innerHTML = "+"+ans;
})
var ref= database.ref().child('159').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population159").innerHTML = ans;
})
var ref= database.ref().child('159').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed159").innerHTML = ans;
})
var ref= database.ref().child('159').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed159").innerHTML = "+"+ans;
})
var ref= database.ref().child('159').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered159").innerHTML = ans;
})
var ref= database.ref().child('159').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered159").innerHTML = "+"+ans;
})
var ref= database.ref().child('159').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths159").innerHTML = ans;
})
var ref= database.ref().child('159').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths159").innerHTML = "+"+ans;
})
var ref= database.ref().child('160').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population160").innerHTML = ans;
})
var ref= database.ref().child('160').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed160").innerHTML = ans;
})
var ref= database.ref().child('160').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed160").innerHTML = "+"+ans;
})
var ref= database.ref().child('160').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered160").innerHTML = ans;
})
var ref= database.ref().child('160').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered160").innerHTML = "+"+ans;
})
var ref= database.ref().child('160').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths160").innerHTML = ans;
})
var ref= database.ref().child('160').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths160").innerHTML = "+"+ans;
})
var ref= database.ref().child('161').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population161").innerHTML = ans;
})
var ref= database.ref().child('161').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed161").innerHTML = ans;
})
var ref= database.ref().child('161').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed161").innerHTML = "+"+ans;
})
var ref= database.ref().child('161').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered161").innerHTML = ans;
})
var ref= database.ref().child('161').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered161").innerHTML = "+"+ans;
})
var ref= database.ref().child('161').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths161").innerHTML = ans;
})
var ref= database.ref().child('161').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths161").innerHTML = "+"+ans;
})
var ref= database.ref().child('162').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population162").innerHTML = ans;
})
var ref= database.ref().child('162').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed162").innerHTML = ans;
})
var ref= database.ref().child('162').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed162").innerHTML = "+"+ans;
})
var ref= database.ref().child('162').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered162").innerHTML = ans;
})
var ref= database.ref().child('162').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered162").innerHTML = "+"+ans;
})
var ref= database.ref().child('162').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths162").innerHTML = ans;
})
var ref= database.ref().child('162').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths162").innerHTML = "+"+ans;
})
var ref= database.ref().child('163').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population163").innerHTML = ans;
})
var ref= database.ref().child('163').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed163").innerHTML = ans;
})
var ref= database.ref().child('163').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed163").innerHTML = "+"+ans;
})
var ref= database.ref().child('163').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered163").innerHTML = ans;
})
var ref= database.ref().child('163').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered163").innerHTML = "+"+ans;
})
var ref= database.ref().child('163').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths163").innerHTML = ans;
})
var ref= database.ref().child('163').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths163").innerHTML = "+"+ans;
})
var ref= database.ref().child('164').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population164").innerHTML = ans;
})
var ref= database.ref().child('164').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed164").innerHTML = ans;
})
var ref= database.ref().child('164').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed164").innerHTML = "+"+ans;
})
var ref= database.ref().child('164').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered164").innerHTML = ans;
})
var ref= database.ref().child('164').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered164").innerHTML = "+"+ans;
})
var ref= database.ref().child('164').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths164").innerHTML = ans;
})
var ref= database.ref().child('164').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths164").innerHTML = "+"+ans;
})
var ref= database.ref().child('165').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population165").innerHTML = ans;
})
var ref= database.ref().child('165').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed165").innerHTML = ans;
})
var ref= database.ref().child('165').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed165").innerHTML = "+"+ans;
})
var ref= database.ref().child('165').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered165").innerHTML = ans;
})
var ref= database.ref().child('165').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered165").innerHTML = "+"+ans;
})
var ref= database.ref().child('165').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths165").innerHTML = ans;
})
var ref= database.ref().child('165').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths165").innerHTML = "+"+ans;
})
var ref= database.ref().child('166').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population166").innerHTML = ans;
})
var ref= database.ref().child('166').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed166").innerHTML = ans;
})
var ref= database.ref().child('166').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed166").innerHTML = "+"+ans;
})
var ref= database.ref().child('166').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered166").innerHTML = ans;
})
var ref= database.ref().child('166').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered166").innerHTML = "+"+ans;
})
var ref= database.ref().child('166').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths166").innerHTML = ans;
})
var ref= database.ref().child('166').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths166").innerHTML = "+"+ans;
})
var ref= database.ref().child('167').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population167").innerHTML = ans;
})
var ref= database.ref().child('167').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed167").innerHTML = ans;
})
var ref= database.ref().child('167').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed167").innerHTML = "+"+ans;
})
var ref= database.ref().child('167').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered167").innerHTML = ans;
})
var ref= database.ref().child('167').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered167").innerHTML = "+"+ans;
})
var ref= database.ref().child('167').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths167").innerHTML = ans;
})
var ref= database.ref().child('167').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths167").innerHTML = "+"+ans;
})
var ref= database.ref().child('168').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population168").innerHTML = ans;
})
var ref= database.ref().child('168').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed168").innerHTML = ans;
})
var ref= database.ref().child('168').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed168").innerHTML = "+"+ans;
})
var ref= database.ref().child('168').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered168").innerHTML = ans;
})
var ref= database.ref().child('168').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered168").innerHTML = "+"+ans;
})
var ref= database.ref().child('168').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths168").innerHTML = ans;
})
var ref= database.ref().child('168').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths168").innerHTML = "+"+ans;
})
var ref= database.ref().child('169').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population169").innerHTML = ans;
})
var ref= database.ref().child('169').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed169").innerHTML = ans;
})
var ref= database.ref().child('169').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed169").innerHTML = "+"+ans;
})
var ref= database.ref().child('169').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered169").innerHTML = ans;
})
var ref= database.ref().child('169').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered169").innerHTML = "+"+ans;
})
var ref= database.ref().child('169').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths169").innerHTML = ans;
})
var ref= database.ref().child('169').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths169").innerHTML = "+"+ans;
})
var ref= database.ref().child('170').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population170").innerHTML = ans;
})
var ref= database.ref().child('170').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed170").innerHTML = ans;
})
var ref= database.ref().child('170').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed170").innerHTML = "+"+ans;
})
var ref= database.ref().child('170').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered170").innerHTML = ans;
})
var ref= database.ref().child('170').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered170").innerHTML = "+"+ans;
})
var ref= database.ref().child('170').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths170").innerHTML = ans;
})
var ref= database.ref().child('170').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths170").innerHTML = "+"+ans;
})
var ref= database.ref().child('171').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population171").innerHTML = ans;
})
var ref= database.ref().child('171').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed171").innerHTML = ans;
})
var ref= database.ref().child('171').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed171").innerHTML = "+"+ans;
})
var ref= database.ref().child('171').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered171").innerHTML = ans;
})
var ref= database.ref().child('171').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered171").innerHTML = "+"+ans;
})
var ref= database.ref().child('171').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths171").innerHTML = ans;
})
var ref= database.ref().child('171').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths171").innerHTML = "+"+ans;
})
var ref= database.ref().child('172').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population172").innerHTML = ans;
})
var ref= database.ref().child('172').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed172").innerHTML = ans;
})
var ref= database.ref().child('172').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed172").innerHTML = "+"+ans;
})
var ref= database.ref().child('172').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered172").innerHTML = ans;
})
var ref= database.ref().child('172').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered172").innerHTML = "+"+ans;
})
var ref= database.ref().child('172').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths172").innerHTML = ans;
})
var ref= database.ref().child('172').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths172").innerHTML = "+"+ans;
})
var ref= database.ref().child('173').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population173").innerHTML = ans;
})
var ref= database.ref().child('173').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed173").innerHTML = ans;
})
var ref= database.ref().child('173').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed173").innerHTML = "+"+ans;
})
var ref= database.ref().child('173').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered173").innerHTML = ans;
})
var ref= database.ref().child('173').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered173").innerHTML = "+"+ans;
})
var ref= database.ref().child('173').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths173").innerHTML = ans;
})
var ref= database.ref().child('173').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths173").innerHTML = "+"+ans;
})
var ref= database.ref().child('174').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population174").innerHTML = ans;
})
var ref= database.ref().child('174').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed174").innerHTML = ans;
})
var ref= database.ref().child('174').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed174").innerHTML = "+"+ans;
})
var ref= database.ref().child('174').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered174").innerHTML = ans;
})
var ref= database.ref().child('174').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered174").innerHTML = "+"+ans;
})
var ref= database.ref().child('174').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths174").innerHTML = ans;
})
var ref= database.ref().child('174').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths174").innerHTML = "+"+ans;
})
var ref= database.ref().child('175').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population175").innerHTML = ans;
})
var ref= database.ref().child('175').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed175").innerHTML = ans;
})
var ref= database.ref().child('175').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed175").innerHTML = "+"+ans;
})
var ref= database.ref().child('175').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered175").innerHTML = ans;
})
var ref= database.ref().child('175').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered175").innerHTML = "+"+ans;
})
var ref= database.ref().child('175').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths175").innerHTML = ans;
})
var ref= database.ref().child('175').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths175").innerHTML = "+"+ans;
})
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
var ref= database.ref().child('177').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population177").innerHTML = ans;
})
var ref= database.ref().child('177').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed177").innerHTML = ans;
})
var ref= database.ref().child('177').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed177").innerHTML = "+"+ans;
})
var ref= database.ref().child('177').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered177").innerHTML = ans;
})
var ref= database.ref().child('177').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered177").innerHTML = "+"+ans;
})
var ref= database.ref().child('177').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths177").innerHTML = ans;
})
var ref= database.ref().child('177').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths177").innerHTML = "+"+ans;
})
var ref= database.ref().child('178').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population178").innerHTML = ans;
})
var ref= database.ref().child('178').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed178").innerHTML = ans;
})
var ref= database.ref().child('178').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed178").innerHTML = "+"+ans;
})
var ref= database.ref().child('178').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered178").innerHTML = ans;
})
var ref= database.ref().child('178').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered178").innerHTML = "+"+ans;
})
var ref= database.ref().child('178').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths178").innerHTML = ans;
})
var ref= database.ref().child('178').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths178").innerHTML = "+"+ans;
})
var ref= database.ref().child('179').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population179").innerHTML = ans;
})
var ref= database.ref().child('179').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed179").innerHTML = ans;
})
var ref= database.ref().child('179').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed179").innerHTML = "+"+ans;
})
var ref= database.ref().child('179').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered179").innerHTML = ans;
})
var ref= database.ref().child('179').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered179").innerHTML = "+"+ans;
})
var ref= database.ref().child('179').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths179").innerHTML = ans;
})
var ref= database.ref().child('179').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths179").innerHTML = "+"+ans;
})
var ref= database.ref().child('180').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population180").innerHTML = ans;
})
var ref= database.ref().child('180').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed180").innerHTML = ans;
})
var ref= database.ref().child('180').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed180").innerHTML = "+"+ans;
})
var ref= database.ref().child('180').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered180").innerHTML = ans;
})
var ref= database.ref().child('180').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered180").innerHTML = "+"+ans;
})
var ref= database.ref().child('180').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths180").innerHTML = ans;
})
var ref= database.ref().child('180').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths180").innerHTML = "+"+ans;
})
var ref= database.ref().child('181').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population181").innerHTML = ans;
})
var ref= database.ref().child('181').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed181").innerHTML = ans;
})
var ref= database.ref().child('181').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed181").innerHTML = "+"+ans;
})
var ref= database.ref().child('181').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered181").innerHTML = ans;
})
var ref= database.ref().child('181').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered181").innerHTML = "+"+ans;
})
var ref= database.ref().child('181').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths181").innerHTML = ans;
})
var ref= database.ref().child('181').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths181").innerHTML = "+"+ans;
})
var ref= database.ref().child('182').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population182").innerHTML = ans;
})
var ref= database.ref().child('182').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed182").innerHTML = ans;
})
var ref= database.ref().child('182').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed182").innerHTML = "+"+ans;
})
var ref= database.ref().child('182').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered182").innerHTML = ans;
})
var ref= database.ref().child('182').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered182").innerHTML = "+"+ans;
})
var ref= database.ref().child('182').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths182").innerHTML = ans;
})
var ref= database.ref().child('182').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths182").innerHTML = "+"+ans;
})

var ref= database.ref().child('183').child('Population');
ref.on('value', function(snapshot){ 
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("Population183").innerHTML = ans;
})
var ref= database.ref().child('183').child('Total Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalConfirmed183").innerHTML = ans;
})
var ref= database.ref().child('183').child('Today Confirmed');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayConfirmed183").innerHTML = "+"+ans;
})
var ref= database.ref().child('183').child('Total Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalRecovered183").innerHTML = ans;
})
var ref= database.ref().child('183').child('Today Recovered');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayRecovered183").innerHTML = "+"+ans;
})
var ref= database.ref().child('183').child('Total Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TotalDeaths183").innerHTML = ans;
})
var ref= database.ref().child('183').child('Today Deaths');
ref.on('value', function(snapshot){
	var ans= JSON.stringify(snapshot.val());
	document.getElementById("TodayDeaths183").innerHTML = "+"+ans;
})
