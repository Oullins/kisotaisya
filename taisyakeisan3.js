function onClick(){
	var value1=parseFloat(document.getElementById("taiju").value);
	var value2=parseFloat(document.getElementById("sintyo").value);
	var value3=parseFloat(document.getElementById("taion").value);
	var value4=parseFloat(document.getElementById("situon").value);
	var value5=parseFloat(document.getElementById("jikan").value);
hoge=document.getElementsByName('maker')
if (hoge[0].checked){
var value6=parseFloat(document.getElementById("mets").value);
} else if (hoge[1].checked){
var value6=parseFloat(document.getElementById("mets2").value);
} else if (hoge[2].checked){
var value6=parseFloat(document.getElementById("mets3").value);
} else if (hoge[3].checked){
var value6=parseFloat(document.getElementById("mets4").value);
} else{
var value6=parseFloat(document.getElementById("mets5").value);
}

	var result1 = Math.round(10*value1 /(value2/100)**2)/10;
	var result2 = Math.round(24*value2**0.725 * value1**0.425 *0.007184 *0.8* 4.88*10**(-8)* ((273+value3)**4-(273+value4)**4))
	var result3 = Math.round((value1*15+200*(value3-36.8))/1000/24*580*24)
	var result4 = Math.round((value6-1)*value1*value5*1.05)
	document.querySelector('.result1').innerHTML = result1;
	document.querySelector('.result2').innerHTML = result2;
	document.querySelector('.result3').innerHTML = result3;
	document.querySelector('.result4').innerHTML = result4;
}

function formSwitch(){
hoge=document.getElementsByName('maker')
if (hoge[0].checked){
//1つ目がチェックされたら
document.getElementById('A').style.display="";
document.getElementById('B').style.display="none";
document.getElementById('C').style.display="none";
document.getElementById('D').style.display="none";
document.getElementById('E').style.display="none";
} else if (hoge[1].checked){
document.getElementById('A').style.display="none";
document.getElementById('B').style.display="";
document.getElementById('C').style.display="none";
document.getElementById('D').style.display="none";
document.getElementById('E').style.display="none";
} else if (hoge[2].checked){
document.getElementById('A').style.display="none";
document.getElementById('B').style.display="none";
document.getElementById('C').style.display="";
document.getElementById('D').style.display="none";
document.getElementById('E').style.display="none";
} else if (hoge[3].checked){
document.getElementById('A').style.display="none";
document.getElementById('B').style.display="none";
document.getElementById('C').style.display="none";
document.getElementById('D').style.display="";
document.getElementById('E').style.display="none";
} else {
document.getElementById('A').style.display="none";
document.getElementById('B').style.display="none";
document.getElementById('C').style.display="none";
document.getElementById('D').style.display="none";
document.getElementById('E').style.display="";
}
}
window.addEventListener('load',formSwitch());
