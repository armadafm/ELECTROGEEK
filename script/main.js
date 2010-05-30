var PosArry = new Array(0);
var currDate = new Date();
var startDate = new Date();
		
function doPopulatePosArry(){
	  PosArry[0] = new Array( -5665, -5768, -5871, -5974, -6077, 0 ); 
	  PosArry[1] = new Array( -103, -206, -309, -412, -515, -618 ); 
	  PosArry[2] = new Array( -721, -824, -927, -1030, -1133, -1236 );
	  PosArry[3] = new Array( -1339, -1442, -1545, -1648, -1751, -1854 );
	  PosArry[4] = new Array( -1957, -2060, -2163, -2266, -2369, -2472 );
	  PosArry[5] = new Array( -2575, -2678, -2781, -2884, -2987, -3090 );
	  PosArry[6] = new Array( -3193, -3296, -3399, -3502, -3605, -3708 );
	  PosArry[7] = new Array( -3811, -3914, -4017, -4120, -4223, -4326 );
	  PosArry[8] = new Array( -4429, -4532, -4635, -4738, -4841, -4944 );
	  PosArry[9] = new Array( -5047, -5150, -5253, -5356, -5459, -5562 );
}
   
		    
function timer(){
	
    doPopulatePosArry();    
    //console.log(startDate)
    currDate = new Date().getTime();    
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    
    var _mmss001 = 0;
    var _mmss010 = 0;  
    var _mmss100 = 0;
    var mmssene = d.getMilliseconds().toString();
    //console.log((ene.length)); 
    if (mmssene.length>2){    
      _mmss001 = mmssene.substring(2,1);//???? 
      _mmss010 = mmssene.substring(1,1);//????  
      _mmss100 = mmssene.substring(0,1);
    } else if (mmssene.length>1){
      _mmss100 = mmssene.substring(1,1);//???? 
      _mmss010 = mmssene.substring(0,1);//????  
      _mmss100 = 0;     
    }  else {
      _mmss001 = mmssene.substring(0,1); 
      _mmss010 = 0;
      _mmss100 = 0;
    }      
    
    var _ss01 = 0;
    var _ss10 = 0;    
    var ene = d.getSeconds().toString();
    //console.log((ene.length)); 
    if (ene.length>1){    
      _ss01 = ene.substring(2,1);//????  
      _ss10 = ene.substring(0,1);
    } else {
      _ss01 = ene.substring(0,1);
      _ss10 = '0';      
    }  
    var _mm01 = 0;
    var _mm10 = 0;    
    var mene = d.getMinutes().toString();
    //console.log(('mene ' + mene + ' ' + mene.length)); 
    if (mene.length>1){    
      _mm01 = mene.substring(2,1);//????  
      _mm10 = mene.substring(0,1);
    } else {
      _mm01 = mene.substring(0,1);
      _mm10 = '0';      
    }   
    var _hh01 = 0;
    var _hh10 = 0;    
    var hene = d.getHours().toString();
    //console.log(('hene ' + hene + ' ' + hene.length)); 
    if (hene.length>1){    
      _hh01 = hene.substring(2,1);//????  
      _hh10 = hene.substring(0,1);
    } else {
      _hh01 = hene.substring(0,1);
      _hh10 = '0';      
    } 
    doTick_setmmss001(_mmss001);    
    //doTick_setmmss010(_mmss010);    
    //doTick_setmmss100(_mmss100);    
    doTick_setss01(_ss01);
    doTick_setss10(_ss10);
    doTick_setmm01(_mm01);
    doTick_setmm10(_mm10);
    doTick_sethh01(_hh01);
    doTick_sethh10(_hh10);    
    
    setTimeout('doTickInc();', 0);
      		
}


function doTickInc(){
    var par = '"#ss01"';
    setss01();
    setss10();
    var _mmss001 = setInterval('setmmss001()', 100);
    var _mmss010 = setInterval('setmmss010()', 200);
    var _mmss100 = setInterval('setmmss100()', 400);
    var _ss01 = setInterval('setss01()', 1000); 
    var _ss10 = setInterval('setss10()', 1000);
    var _mm01 = setInterval('setmm01()', 1000);
    var _mm10 = setInterval('setmm10()', 1000);
    var _hh01 = setInterval('sethh01()', 1000);
    var _hh10 = setInterval('sethh10()', 1000);    
}

function setmmss001(){
    currDate = new Date().getTime();   
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _mmss001 = 0;
    var _mmss010 = 0;
    var _mmss100 = 0;
    var mmssene = d.getMilliseconds().toString();
    //console.log((mmssene.length)); 
    _mmss001 = mmssene.substring(0,1);    
    //console.log(' '+mmss10+' - '+mmssene); //console.log(' '+mmss1+' - '+mmssene);
   doTick_setmmss001(_mmss001);
   //console.log(d.getSeconds()+'  -  ' + ss10 + ''+ss01)
}


function doTick_setmmss001(value){
    setTimeout('doTick_Milliseconds001_step1("'+value+'")', 100);    
    setTimeout('doTick_Milliseconds001_step3("'+value+'")', 200); 
    setTimeout('doTick_Milliseconds001_step6("'+value+'")', 300);
}


function doTick_Milliseconds001_step1(index){
	//console.log(index);
	$('#secondsmilli001').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}
function doTick_Milliseconds001_step3(index){
	//console.log(index);
	$('#secondsmilli001').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}
function doTick_Milliseconds001_step6(index){
	//console.log(index);
	$('#secondsmilli001').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}

function setmmss010(){
    currDate = new Date().getTime();  
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _mmss010 = 0;
    var _mmssene = d.getMilliseconds().toString();
    //console.log((_mmssene+'    '+_mmssene.substring(2,1))); 
    if (_mmssene.length>0){
      if (_mmssene.length>1){
        //console.log(_mmssene.length);
    	_mmss010 = _mmssene.substring(2,1);
    	} else {
    		_mmss010 = _mmssene.substring(0,1);
    	}
    }
    //console.log(_mmssene+'  -  '+_mmss010);
   doTick_setmmss010(_mmss010);
   //console.log(d.getSeconds()+'  -  ' + ss10 + ''+ss01)
}


function doTick_setmmss010(value){
    setTimeout('doTick_Milliseconds010_step1("'+value+'")', 10);  
    setTimeout('doTick_Milliseconds010_step2("'+value+'")', 75);  
    setTimeout('doTick_Milliseconds010_step3("'+value+'")', 125);  
 
}

function doTick_Milliseconds010_step1(index){
	//console.log(index);
	$('#secondsmilli010').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Milliseconds010_step2(index){
	//console.log(index);
	$('#secondsmilli010').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Milliseconds010_step3(index){
	//console.log(index);
	$('#secondsmilli010').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}


function setmmss100(){
    currDate = new Date().getTime();  
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _mmss001 = 0;
    var _mmss010 = 0;
    var _mmss100 = 0;
    var mmssene = d.getMilliseconds().toString();
    //console.log((mmssene.length)); 
    if (mmssene.length>2){    
      _mmss001 = mmssene.substring(2,1);//???? 
      _mmss010 = mmssene.substring(1,1);//????  
      _mmss100 = mmssene.substring(0,1);
    } else if (mmssene.length>1){
      _mmss100 = mmssene.substring(1,1);//???? 
      _mmss010 = mmssene.substring(0,1);//????  
      _mmss100 = 0;     
    }  else {
      _mmss001 = mmssene.substring(0,1); 
      _mmss010 = 0;
      _mmss100 = 0;
    }  
    //console.log(' '+mmss10+' - '+mmssene); //console.log(' '+mmss1+' - '+mmssene);
   doTick_setmmss100(_mmss100);
   //console.log(d.getSeconds()+'  -  ' + ss10 + ''+ss01)
}


function doTick_setmmss100(value){
    setTimeout('doTick_Milliseconds100_step1("'+value+'")', 100); 
    //setTimeout('doTick_Milliseconds100_step2("'+value+'")', 200);
    setTimeout('doTick_Milliseconds100_step3("'+value+'")', 200);
    //setTimeout('doTick_Milliseconds100_step4("'+value+'")', 400);
    //setTimeout('doTick_Milliseconds100_step5("'+value+'")', 500);
    setTimeout('doTick_Milliseconds100_step6("'+value+'")', 300);
}

function doTick_Milliseconds100_step1(index){
	$('#secondsmilli100').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Milliseconds100_step2(index){
	$('#secondsmilli100').css( {backgroundPosition: "0 "+PosArry[index][1]+"px"} ).show();
}

function doTick_Milliseconds100_step3(index){
	$('#secondsmilli100').css( {backgroundPosition: "0 "+PosArry[index][2]+"px"} ).show();
}

function doTick_Milliseconds100_step4(index){
	$('#secondsmilli100').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Milliseconds100_step5(index){
	$('#secondsmilli100').css( {backgroundPosition: "0 "+PosArry[index][4]+"px"} ).show();
}

function doTick_Milliseconds100_step6(index){
	$('#secondsmilli100').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}



function setss01(){
    currDate = new Date().getTime();     
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _ss01 = 0;
    var ene = d.getSeconds().toString();
    //console.log((ene.length)); 
    if (ene.length>1){      
      _ss01 = ene.substring(2,1);//????
    } else {
      _ss01 = ene.substring(0,1);    
    }
    //console.log(' '+ss10+' - '+ene); //console.log(' '+ss1+' - '+ene);
   doTick_setss01(_ss01);
   //console.log(d.getSeconds()+'  -  ' + ss10 + ''+ss01)
}


function doTick_setss01(value){
    setTimeout('doTick_Seconds01_step1("'+value+'")', 150);  
    setTimeout('doTick_Seconds01_step2("'+value+'")', 300);    
    setTimeout('doTick_Seconds01_step3("'+value+'")', 450);   
    setTimeout('doTick_Seconds01_step4("'+value+'")', 600);   
    setTimeout('doTick_Seconds01_step5("'+value+'")', 750);         
    setTimeout('doTick_Seconds01_step6("'+value+'")', 900);    
}


function doTick_Seconds01_step1(index){
	$('#seconds01').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Seconds01_step2(index){
	$('#seconds01').css( {backgroundPosition: "0 "+PosArry[index][1]+"px"} ).show();
}

function doTick_Seconds01_step3(index){
	$('#seconds01').css( {backgroundPosition: "0 "+PosArry[index][2]+"px"} ).show();
}

function doTick_Seconds01_step4(index){
	$('#seconds01').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Seconds01_step5(index){
	$('#seconds01').css( {backgroundPosition: "0 "+PosArry[index][4]+"px"} ).show();
}

function doTick_Seconds01_step6(index){
	$('#seconds01').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}


function setss10(){
    currDate = new Date().getTime();     
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _ss01 = 0;
    var _ss10 = 0;    
    var ene = d.getSeconds().toString();
    //console.log((ene.length)); 
    if (ene.length>1){    
      _ss01 = ene.substring(2,1);//????  
      _ss10 = ene.substring(0,1);
    } else {
      _ss01 = ene.substring(0,1);
      _ss10 = '0';      
    }
    //console.log(' '+ss10+' - '+ene); //console.log(' '+ss1+' - '+ene);
   if (_ss01=='0'){
     doTick_setss10(_ss10);
     //console.log(_ss01)
   }
}

function doTick_setss10(value){
    setTimeout('doTick_Seconds10_step1("'+value+'")', 150);  
    setTimeout('doTick_Seconds10_step2("'+value+'")', 300);    
    setTimeout('doTick_Seconds10_step3("'+value+'")', 450);   
    setTimeout('doTick_Seconds10_step4("'+value+'")', 600);   
    setTimeout('doTick_Seconds10_step5("'+value+'")', 750);         
    setTimeout('doTick_Seconds10_step6("'+value+'")', 900);    
}


function doTick_Seconds10_step1(index){
	$('#seconds10').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Seconds10_step2(index){
	$('#seconds10').css( {backgroundPosition: "0 "+PosArry[index][1]+"px"} ).show();
}

function doTick_Seconds10_step3(index){
	$('#seconds10').css( {backgroundPosition: "0 "+PosArry[index][2]+"px"} ).show();
}

function doTick_Seconds10_step4(index){
	$('#seconds10').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Seconds10_step5(index){
	$('#seconds10').css( {backgroundPosition: "0 "+PosArry[index][4]+"px"} ).show();
}

function doTick_Seconds10_step6(index){
	$('#seconds10').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}


function setmm01(){
    currDate = new Date().getTime();      
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _ss01 = 0;
    var _mm01 = 0; 
    
    var sene = d.getSeconds().toString();
    //console.log((sene.length)); 
    if (sene.length>1){    
      _ss01 = sene.substring(2,1);//????  
      _ss10 = sene.substring(0,1);
    } else {
      _ss01 = sene.substring(0,1);
      _ss10 = '0';      
    }    
    
    var mene = d.getMinutes().toString();
    //console.log((mene.length)); 
    if (mene.length>1){      
      _mm01 = mene.substring(2,1);//????
    } else {
      _mm01 = mene.substring(0,1);    
    }
    //console.clear();
    //console.log('?'+_mm01+_ss10+_ss01+' - '+mene); 
    
    if ((_ss10=='0')&&(_ss01=='0')){
      doTick_setmm01(_mm01);
    }    
}


function doTick_setmm01(value){
    setTimeout('doTick_Minutes01_step1("'+value+'")', 150);  
    setTimeout('doTick_Minutes01_step2("'+value+'")', 300);    
    setTimeout('doTick_Minutes01_step3("'+value+'")', 450);   
    setTimeout('doTick_Minutes01_step4("'+value+'")', 600);   
    setTimeout('doTick_Minutes01_step5("'+value+'")', 750);         
    setTimeout('doTick_Minutes01_step6("'+value+'")', 900);    
}


function doTick_Minutes01_step1(index){
	$('#minutes01').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Minutes01_step2(index){
	$('#minutes01').css( {backgroundPosition: "0 "+PosArry[index][1]+"px"} ).show();
}

function doTick_Minutes01_step3(index){
	$('#minutes01').css( {backgroundPosition: "0 "+PosArry[index][2]+"px"} ).show();
}

function doTick_Minutes01_step4(index){
	$('#minutes01').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Minutes01_step5(index){
	$('#minutes01').css( {backgroundPosition: "0 "+PosArry[index][4]+"px"} ).show();
}

function doTick_Minutes01_step6(index){
	$('#minutes01').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}



function setmm10(){
    currDate = new Date().getTime();     
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _mm01 = 0;
    var _mm10 = 0;
    var sene = d.getSeconds().toString();
    //console.log((sene.length)); 
    if (sene.length>1){    
      _ss01 = sene.substring(2,1);//????  
      _ss10 = sene.substring(0,1);
    } else {
      _ss01 = sene.substring(0,1);
      _ss10 = '0';      
    }    
        
    var ene = d.getMinutes().toString();
    //console.log((ene.length)); 
    if (ene.length>1){    
      _mm01 = ene.substring(2,1);//????  
      _mm10 = ene.substring(0,1);
    } else {
      _mm01 = ene.substring(0,1);
      _mm10 = '0';      
    }
    //console.log(_mm10+_mm01+_ss10+_ss01); 
    
    if ((_mm01=='0')&&(_ss10=='0')&&(_ss01=='0')){
      doTick_setmm10(_mm10);
    }      
    
}

function doTick_setmm10(value){
    setTimeout('doTick_Minutes10_step1("'+value+'")', 150);  
    setTimeout('doTick_Minutes10_step2("'+value+'")', 300);    
    setTimeout('doTick_Minutes10_step3("'+value+'")', 450);   
    setTimeout('doTick_Minutes10_step4("'+value+'")', 600);   
    setTimeout('doTick_Minutes10_step5("'+value+'")', 750);         
    setTimeout('doTick_Minutes10_step6("'+value+'")', 900);    
}


function doTick_Minutes10_step1(index){
	$('#minutes10').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Minutes10_step2(index){
	$('#minutes10').css( {backgroundPosition: "0 "+PosArry[index][1]+"px"} ).show();
}

function doTick_Minutes10_step3(index){
	$('#minutes10').css( {backgroundPosition: "0 "+PosArry[index][2]+"px"} ).show();
}

function doTick_Minutes10_step4(index){
	$('#minutes10').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Minutes10_step5(index){
	$('#minutes10').css( {backgroundPosition: "0 "+PosArry[index][4]+"px"} ).show();
}

function doTick_Minutes10_step6(index){
	$('#minutes10').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}



function sethh01(){
    currDate = new Date().getTime();     
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _hh01 = 0;
    
    var sene = d.getSeconds().toString();
    //console.log((sene.length)); 
    if (sene.length>1){    
      _ss01 = sene.substring(2,1);//????  
      _ss10 = sene.substring(0,1);
    } else {
      _ss01 = sene.substring(0,1);
      _ss10 = '0';      
    }     
    
    var mene = d.getMinutes().toString();
    //console.log((mene.length)); 
    if (mene.length>1){    
      _mm01 = mene.substring(2,1);//????  
      _mm10 = mene.substring(0,1);
    } else {
      _mm01 = mene.substring(0,1);
      _mm10 = '0';      
    }
    
    var hene = d.getHours().toString();
    //console.log((hene.length)); 
    if (hene.length>1){      
      _hh01 = hene.substring(2,1);//????
    } else {
      _hh01 = hene.substring(0,1);    
    }
    //console.log('?'+_hh01+_mm10+_mm01+_ss10+_ss01);
   
    
    if ((_mm10=='0')&&(_mm01=='0')&&(_ss10=='0')&&(_ss01=='0')){
      doTick_sethh01(_hh01);
    }    
}


function doTick_sethh01(value){
    setTimeout('doTick_Hours01_step1("'+value+'")', 150);  
    setTimeout('doTick_Hours01_step2("'+value+'")', 300);    
    setTimeout('doTick_Hours01_step3("'+value+'")', 450);   
    setTimeout('doTick_Hours01_step4("'+value+'")', 600);   
    setTimeout('doTick_Hours01_step5("'+value+'")', 750);         
    setTimeout('doTick_Hours01_step6("'+value+'")', 900);    
}


function doTick_Hours01_step1(index){
	$('#hours01').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Hours01_step2(index){
	$('#hours01').css( {backgroundPosition: "0 "+PosArry[index][1]+"px"} ).show();
}

function doTick_Hours01_step3(index){
	$('#hours01').css( {backgroundPosition: "0 "+PosArry[index][2]+"px"} ).show();
}

function doTick_Hours01_step4(index){
	$('#hours01').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Hours01_step5(index){
	$('#hours01').css( {backgroundPosition: "0 "+PosArry[index][4]+"px"} ).show();
}

function doTick_Hours01_step6(index){
	$('#hours01').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}



function sethh10(){
    currDate = new Date().getTime();  
    var d = new Date(currDate - startDate + (startDate.getTimezoneOffset()*60000));
    var _hh01 = 0;
    var _hh10 = 0;  
    
    var sene = d.getSeconds().toString();
    //console.log((sene.length)); 
    if (sene.length>1){    
      _ss01 = sene.substring(2,1);//????  
      _ss10 = sene.substring(0,1);
    } else {
      _ss01 = sene.substring(0,1);
      _ss10 = '0';      
    }     
    
    var mene = d.getMinutes().toString();
    //console.log((mene.length)); 
    if (mene.length>1){    
      _mm01 = mene.substring(2,1);//????  
      _mm10 = mene.substring(0,1);
    } else {
      _mm01 = mene.substring(0,1);
      _mm10 = '0';      
    }
        
    var hene = d.getHours().toString();
    //console.log((hene.length)); 
    if (hene.length>1){    
      _hh01 = hene.substring(2,1);//????  
      _hh10 = hene.substring(0,1);
    } else {
      _hh01 = hene.substring(0,1);
      _hh10 = '0';      
    }
    //console.log('sethh10 '+_hh10+' - '+hene); //console.log(' '+_hh01+' - '+hene);   

    
    
    //console.log(_hh10+_hh01+_mm10+_mm01+_ss10+_ss01);
   
    
    if ((_hh01=='0')&&(_mm10=='0')&&(_mm01=='0')&&(_ss10=='0')&&(_ss01=='0')){
      doTick_sethh10(_hh10);
    }     
}

function doTick_sethh10(value){
    setTimeout('doTick_Hours10_step1("'+value+'")', 150);  
    setTimeout('doTick_Hours10_step2("'+value+'")', 300);    
    setTimeout('doTick_Hours10_step3("'+value+'")', 450);   
    setTimeout('doTick_Hours10_step4("'+value+'")', 600);   
    setTimeout('doTick_Hours10_step5("'+value+'")', 750);         
    setTimeout('doTick_Hours10_step6("'+value+'")', 900);    
}


function doTick_Hours10_step1(index){
	$('#hours10').css( {backgroundPosition: "0 "+PosArry[index][0]+"px"} ).show();
}

function doTick_Hours10_step2(index){
	$('#hours10').css( {backgroundPosition: "0 "+PosArry[index][1]+"px"} ).show();
}

function doTick_Hours10_step3(index){
	$('#hours10').css( {backgroundPosition: "0 "+PosArry[index][2]+"px"} ).show();
}

function doTick_Hours10_step4(index){
	$('#hours10').css( {backgroundPosition: "0 "+PosArry[index][3]+"px"} ).show();
}

function doTick_Hours10_step5(index){
	$('#hours10').css( {backgroundPosition: "0 "+PosArry[index][4]+"px"} ).show();
}

function doTick_Hours10_step6(index){
	$('#hours10').css( {backgroundPosition: "0 "+PosArry[index][5]+"px"} ).show();
}