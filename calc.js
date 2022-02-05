function calc(){

	var goukei = 0;
	var mets   = 0;
	var mets_arr_cnt=0;
	
	//体重入力チェック
	if (document.eecalc.weight.value == "0"){
		alert("体重を入力してください");
		document.eecalc.weight.focus();
		return;
	}else{
		//eval str が半角数字である場合に、それを Number型に変換
		var wt = eval(document.eecalc.weight.value);
	}

	
	for (i=1; i<document.eecalc.length-1; i++){

		mets = mets_data[mets_arr_cnt];
		mets_arr_cnt = mets_arr_cnt + 1;	

	    if (document.eecalc.elements[i].checked){
	    	i=i+1;
	    	
			if (document.eecalc.elements[i].value==""){
				alert("チェック箇所の時間（分）を入力してください");
				document.eecalc.weight.focus();
				return;
			}	    	
		    	
	    	var hour = eval(document.eecalc.elements[i].value)/60;
	    	var kcal = Math.floor(1.05*wt*mets*hour)
	    	
	    	i=i+1;
	    	document.eecalc.elements[i].value = kcal;
	    	
	    	goukei = goukei + kcal;
	    }else{
	    	i=i+2;
		}
	}
	
	document.eecalc.goukei.value = goukei;
	document.eecalc.g.value = goukei/7;
}


//カロリー比較
function calc_kcal(){

	var goukei = 0;
	var mets   = 0;
	var mets_arr_cnt=0;
	
	//体重入力チェック
	if (document.eecalc.weight.value == "0"){
		alert("体重を入力してください");
		document.eecalc.weight.focus();
		return;
	}else{
		//eval str が半角数字である場合に、それを Number型に変換
		var wt = eval(document.eecalc.weight.value);
	}

	
	for (i=1; i<document.eecalc.length-1; i++){

		mets = mets_act[mets_arr_cnt][0];
		mets_arr_cnt = mets_arr_cnt + 1;	

	    if (document.eecalc.elements[i].checked){
	    	i=i+1;
	    	
			if (document.eecalc.elements[i].value==""){
				alert("チェック箇所の時間（分）を入力してください");
				document.eecalc.weight.focus();
				return;
			}	    	
		    	
	    	var hour = eval(document.eecalc.elements[i].value)/60;
	    	var kcal = Math.floor(1.05*wt*mets*hour)
	    	
	    	i=i+1;
	    	document.eecalc.elements[i].value = kcal;
	    	
	    	goukei = goukei + kcal;
	    	document.eecalc.goukei.value = goukei;
	    	
	    	document.eecalc.fat.value = Math.floor((1000*goukei)/7000*100)/100;
	    	
			document.eecalc.rice.value = Math.floor(goukei/250*100)/100;
			document.eecalc.bread.value = Math.floor(goukei/200*100)/100;
			
			//ウォーキング
			hour = goukei/(1.05*document.eecalc.weight.value*4.5);
			hour = Math.floor(hour*100)/100;
			document.eecalc.time_wh.value =  hour;
			document.eecalc.time_wm.value = Math.floor(60 * hour* 10) / 10;

	    }else{
	    	i=i+2;
		}
	}


}

