function onClick(){
	var value1=parseFloat(document.getElementById("taiju").value);
	var value2=parseFloat(document.getElementById("sintyo").value);
	var value3=parseFloat(document.getElementById("taion").value);
	var value4=parseFloat(document.getElementById("situon").value);
	var value5=parseFloat(document.getElementById("jikan").value);
	var value6=parseFloat(document.getElementById("mets").value);
	var result1 = Math.round(10*value1 /(value2/100)**2)/10;
	var result2 = Math.round(24*value2**0.725 * value1**0.425 *0.007184 *0.8* 4.88*10**(-8)* ((273+value3)**4-(273+value4)**4))
	var result3 = Math.round((value1*15+200*(value3-36.8))/1000/24*580*24)
	var result4 = Math.round((value6-1)*value1*value5*1.05)
	document.querySelector('.result1').innerHTML = result1;
	document.querySelector('.result2').innerHTML = result2;
	document.querySelector('.result3').innerHTML = result3;
	document.querySelector('.result4').innerHTML = result4;
}