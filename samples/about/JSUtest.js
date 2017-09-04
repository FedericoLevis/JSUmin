/* ---------------------------------------------------------------------------------------------------------------------
 * 					JSU TEST  Only for developers
--------------------------------------------------------------------------------------------------------------------- */


//


// ----------------------  Possible URL parameter  type=    (e.g 
// EXample    ?test=20&period=10&type=you


// Se passati in maiuscolo fanno anche poartire in automatico il relativo Comando (Button)
var URL_PAR_TYPE_WIX="wix";
var URL_PAR_TYPE_JSU="jsu";    
var URL_PAR_TYPE_YOUTYBE="you";   // VIDEO YOU TUBE JSU
var URL_PAR_TYPE_CEL="cel";       // VIDEO CEL 
var URL_PAR_TYPE_VIDEO="video";   // VIDEO JSU e CEL


var JSU_URL_VIDEO_CEL_SHOW_HIDE_FILTER="https://youtu.be/Qg4CmxDdWJQ";   // SHOW_HIDE_FILTER
var JSU_URL_VIDEO_CEL_HYPERLINK="https://youtu.be/SuYxv1z1BMg";   // HYPERLINK
var JSU_URL_VIDEO_CEL_TOOLTIP="https://youtu.be/3P_ztyBE5KM";   // TOOLTIP
var JSU_URL_VIDEO_CEL_SHOW_HIDE_COL="https://youtu.be/PEohu3UkMMs";   // SHOW_HIDE_COL
var JSU_URL_VIDEO_CEL_MASTER_DETAIL="https://youtu.be/l4520ENQCi0";   // MASTER_DETAIL
var JSU_URL_VIDEO_CEL_CHART="https://youtu.be/3_efCgwzMg8";   // Change CHART_TYPE_SIZE
var JSU_URL_VIDEO_CEL_SORT="https://youtu.be/NLkAAwJB7RY";   // SORT




var var_test = {
		tmoTest: null,
		iTestCur:  0,
    bFrame:  false		
};


/**
 * If Test Automatic id required, start it
 * @param bFrame  true for Frame
 */
function testCheckAuto(){
	var Fn = "[about.js testCheckAuto()] ";
  //Se par_type e` passati in maiuscolo faccio anche partire in automatico il relativo Comando (Button)
	var type = url_par.type;
	
  var bAutoFrame = (type == URL_PAR_TYPE_WIX.toUpperCase() || type == URL_PAR_TYPE_JSU.toUpperCase()); 	
  var bAutoWin = (type == URL_PAR_TYPE_YOUTYBE.toUpperCase() || type == URL_PAR_TYPE_CEL.toUpperCase() || type == URL_PAR_TYPE_VIDEO.toUpperCase()); 	
	jslog (JSLOG_DEBUG, Fn + " type=" + type + " ---> bAutoFrame=" + bAutoFrame + "  bAutoWin=" + bAutoWin);
	if (bAutoFrame){
			testStart (true);
	}else if (bAutoWin){
		testStart (false);
	}
}	



/**
 * Test Google
 * @param bFrame  true for Frame
 */
function testStart(bFrame){
	var Fn = "[about.js  testStart()] ";
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_START);
	var_test.iTestCur =0;
	var_test.bFrame = bFrame;
	
	ar_test = ar_test_jsu;
	var type = (url_par.type != null) ? url_par.type : "";
	type = type.toLowerCase();
	jslog (JSLOG_DEBUG, Fn + "type=" + type);
	if (type == URL_PAR_TYPE_WIX) {
		ar_test = ar_test_wix;
	}else if (type == URL_PAR_TYPE_YOUTYBE) {
		ar_test = ar_test_you;
	}else if (type == URL_PAR_TYPE_CEL) {
		ar_test = ar_test_cel;
	}else if (type == URL_PAR_TYPE_VIDEO) {
		ar_test = ar_test_video;
	} else {
		alert ("UNKNOWN type =" + type);
	}
	
	// random enable
  for (i=0; i < ar_test.length; i++){
  	var el = ar_test[i];
  	el.bPresent = false;
		// jslogObj (JSLOG_DEBUG,Fn + "PROVA el",el);
  	if (el.iPos == 0){
			el.bPresent = true;
  	}else if (el.iPos <=  url_par.pos){
  		var iRandom = 1+ Math.floor(Math.random() * url_par.pos); //  1..url_par.pos
  		if (iRandom == 1){
  			el.bPresent = true;
  		}
  		jslog (JSLOG_DEBUG, Fn + "[" + i + "].bPresent=" + el.bPresent + " - url_par.pos="+ url_par.pos + "  iRandom=" + iRandom );
  	}
  }	
	jslogObj (JSLOG_DEBUG,Fn + "ar_test",ar_test);
	
	var iSec = Math.floor((Math.random() * url_par.period) + 1);
	jslog (JSLOG_DEBUG,Fn + "START tmo " + iSec + " sec");
	getElementById2("testDone",true).value = var_test.iTestCur;
	getElementById2("testTmo",true).value = iSec;
	var_test.tmoTest = setTimeout (testExecute,iSec * 1000);
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_END);
}



/**
 * Execute the Test
 */
function testExecute(){
	var Fn = "[about.js testExecute()] ";
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_START);
	// URL under TEST
	// iCountReq determina la frequenza. Piu` e` alto meno e` frequente
	var szUrl = testGetNext();
	if (var_test.bFrame){
		UnTip();
		var szTipFrame =	'<iframe width="1200" height="100" src="' + szUrl + '" ></iframe>'; 
		TipFix(szTipFrame,null,{
			 iTipWidth: 1200,
			 szTitle:szUrl,
			 objClass: {Down: 'downloadJsu', Up: 'downloadJsuUp'},  // we pass the Custom Classes used
			 bCloseBtn : false,
			 szRefElId : 'downloadJsu' 
		 }
		);
		
	}else {
		jsuGoToURL(szUrl, true);
	}
	clearTimeout (var_test.tmoTest);
	var_test.iTestCur++ ;
	getElementById2("testDone",true).value = var_test.iTestCur;
	getElementById2("testURL",true).value = szUrl;
	if (var_test.iTestCur > url_par.test){
		alert ("FINE Test - Executed=" + var_test.iTestCur);
	}else {
		var iSec = Math.floor((Math.random() * url_par.period) + 1);
		getElementById2("testTmo",true).value = iSec;
		var_test.tmoTest = setTimeout (testExecute,iSec * 1000);
	}		
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_END);
}



// -------------- PARAMETRO pos    default=1
//// 0 solo iPos=0  1= iPos=0 piu` quelli con 1 fatti random     2= iPos=0 piu` quelli con 1 e 2 fatti random
// 


// wix
var ar_test_wix = [// --------------- random se iPos>=1
              {iCountReq:4,iPos:0, szName:'Cognos',szURL:JSU_LONG_URL_COGNOS, iCountCur:0, iClickDone:0},
              {iCountReq:3,iPos:0, szName:'CognosRS',szURL:JSU_LONG_URL_COGNOS_RS, iCountCur:0, iClickDone:0},
              {iCountReq:4,iPos:0, szName:'CognosCEL',szURL:JSU_LONG_URL_COGNOS_CEL, iCountCur:0, iClickDone:0},
              {iCountReq:5,iPos:0, szName:'CognosBLOG',szURL:JSU_LONG_URL_COGNOS_BLOG, iCountCur:0, iClickDone:0}
                            
              ];


var ar_test_you = [// --------------- random se iPos>=1
                   {iCountReq:4,iPos:0, szName:'Tooltip',szURL:JSU_URL_VIDEO_TIP, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'Validate',szURL:JSU_URL_VIDEO_VALIDATE, iCountCur:0, iClickDone:0},
                   {iCountReq:2,iPos:0, szName:'Loading',szURL:JSU_URL_VIDEO_LOADING, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'GA',szURL:JSU_URL_VIDEO_GA, iCountCur:0, iClickDone:0},
                   {iCountReq:4,iPos:0, szName:'GASteps',szURL:JSU_URL_VIDEO_GASTEPS, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'Sort',szURL:JSU_URL_VIDEO_SORT, iCountCur:0, iClickDone:0},
                   {iCountReq:5,iPos:0, szName:'JSLog',szURL:JSU_URL_VIDEO_JSLOG, iCountCur:0, iClickDone:0},
                   {iCountReq:6,iPos:0, szName:'IEPopup',szURL:JSU_URL_VIDEO_IEPOPUP, iCountCur:0, iClickDone:0},
                   {iCountReq:2,iPos:0, szName:'JQPopup',szURL:JSU_URL_VIDEO_JQPOPUP, iCountCur:0, iClickDone:0}
                   ];



var ar_test_cel = [// --------------- random se iPos>=1  (piu` e` bassa piu` frequentemente viene mostrato)
                   {iCountReq:2,iPos:0, szName:'JSU_URL_VIDEO_CEL_SORT',szURL:JSU_URL_VIDEO_CEL_SORT, iCountCur:0, iClickDone:0},
                   {iCountReq:2,iPos:0, szName:'JSU_URL_VIDEO_CEL_HYPERLINK',szURL:JSU_URL_VIDEO_CEL_HYPERLINK, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'JSU_URL_VIDEO_CEL_TOOLTIP',szURL:JSU_URL_VIDEO_CEL_TOOLTIP, iCountCur:0, iClickDone:0},
                   {iCountReq:6,iPos:0, szName:'JSU_URL_VIDEO_CEL_SHOW_HIDE_COL',szURL:JSU_URL_VIDEO_CEL_SHOW_HIDE_COL, iCountCur:0, iClickDone:0},
                   {iCountReq:4,iPos:0, szName:'JSU_URL_VIDEO_CEL_MASTER_DETAIL',szURL:JSU_URL_VIDEO_CEL_MASTER_DETAIL, iCountCur:0, iClickDone:0},
                   {iCountReq:6,iPos:0, szName:'JSU_URL_VIDEO_CEL_SHOW_HIDE_FILTER',szURL:JSU_URL_VIDEO_CEL_SHOW_HIDE_FILTER, iCountCur:0, iClickDone:0},
                   {iCountReq:4,iPos:0, szName:'JSU_URL_VIDEO_CEL_CHART',szURL:JSU_URL_VIDEO_CEL_CHART, iCountCur:0, iClickDone:0}
                   ];


var ar_test_video = [// --------------- random se iPos>=1 (piu` e` bassa piu` frequentemente viene mostrato)
                   {iCountReq:4,iPos:0, szName:'Tooltip',szURL:JSU_URL_VIDEO_TIP, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'Validate',szURL:JSU_URL_VIDEO_VALIDATE, iCountCur:0, iClickDone:0},
                   {iCountReq:2,iPos:0, szName:'Loading',szURL:JSU_URL_VIDEO_LOADING, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'GA',szURL:JSU_URL_VIDEO_GA, iCountCur:0, iClickDone:0},
                   {iCountReq:4,iPos:0, szName:'GASteps',szURL:JSU_URL_VIDEO_GASTEPS, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'Sort',szURL:JSU_URL_VIDEO_SORT, iCountCur:0, iClickDone:0},
                   {iCountReq:5,iPos:0, szName:'JSLog',szURL:JSU_URL_VIDEO_JSLOG, iCountCur:0, iClickDone:0},
                   {iCountReq:6,iPos:0, szName:'IEPopup',szURL:JSU_URL_VIDEO_IEPOPUP, iCountCur:0, iClickDone:0},
                   {iCountReq:2,iPos:0, szName:'JQPopup',szURL:JSU_URL_VIDEO_JQPOPUP, iCountCur:0, iClickDone:0},
                   {iCountReq:2,iPos:0, szName:'JSU_URL_VIDEO_CEL_SORT',szURL:JSU_URL_VIDEO_CEL_SORT, iCountCur:0, iClickDone:0},
                   {iCountReq:2,iPos:0, szName:'JSU_URL_VIDEO_CEL_HYPERLINK',szURL:JSU_URL_VIDEO_CEL_HYPERLINK, iCountCur:0, iClickDone:0},
                   {iCountReq:3,iPos:0, szName:'JSU_URL_VIDEO_CEL_TOOLTIP',szURL:JSU_URL_VIDEO_CEL_TOOLTIP, iCountCur:0, iClickDone:0},
                   {iCountReq:6,iPos:0, szName:'JSU_URL_VIDEO_CEL_SHOW_HIDE_COL',szURL:JSU_URL_VIDEO_CEL_SHOW_HIDE_COL, iCountCur:0, iClickDone:0},
                   {iCountReq:4,iPos:0, szName:'JSU_URL_VIDEO_CEL_MASTER_DETAIL',szURL:JSU_URL_VIDEO_CEL_MASTER_DETAIL, iCountCur:0, iClickDone:0},
                   {iCountReq:6,iPos:0, szName:'JSU_URL_VIDEO_CEL_SHOW_HIDE_FILTER',szURL:JSU_URL_VIDEO_CEL_SHOW_HIDE_FILTER, iCountCur:0, iClickDone:0},
                   {iCountReq:4,iPos:0, szName:'JSU_URL_VIDEO_CEL_CHART',szURL:JSU_URL_VIDEO_CEL_CHART, iCountCur:0, iClickDone:0}
                   ];




// quelli con iPos=0 ci sono sempre. Poi vengono considerato solo quelli con iPos <= pos passato , e fatto random
// iCountReq  e` il contatore richiesto. Piu` e` basso, piu` spesso viene chiamato il relativo URL
var ar_test_jsu = [{iCountReq:4,iPos:0,szName:'DownloadFree',szURL:JSU_SHORT_URL_DOWNLOAD_FREE, iCountCur:0, iClickDone:0},
               // --------------- random se iPos>=1
              {iCountReq:7,iPos:1,szName:'SampleAll',szURL:JSU_SHORT_URL_SAMPLE_ALL, iCountCur:0, iClickDone:0},
              {iCountReq:7,iPos:1,szName:'SampleTIP',szURL:JSU_SHORT_URL_SAMPLE_TIP, iCountCur:0, iClickDone:0},
              {iCountReq:5,iPos:1,szName:'SampleValidate',szURL:JSU_SHORT_URL_SAMPLE_VALIDATE, iCountCur:0, iClickDone:0},
              {iCountReq:5,iPos:1,szName:'SampleJQPopup',szURL:JSU_SHORT_URL_SAMPLE_JQPOPUP, iCountCur:0, iClickDone:0},
              {iCountReq:8,iPos:1, szName:'SampleGA',szURL:JSU_SHORT_URL_SAMPLE_GA, iCountCur:0, iClickDone:0},
              {iCountReq:9,iPos:1, szName:'SampleLOADING',szURL:JSU_SHORT_URL_SAMPLE_LOADING, iCountCur:0, iClickDone:0},
              {iCountReq:6,iPos:1, szName:'SampleSORT',szURL:JSU_SHORT_URL_SAMPLE_SORT, iCountCur:0, iClickDone:0},
              {iCountReq:5,iPos:1, szName:'DocIEPOPUP',szURL:JSU_SHORT_URL_DOC_IEPOPUP, iCountCur:0, iClickDone:0},
              {iCountReq:8,iPos:1, szName:'DocAll',szURL:JSU_SHORT_URL_DOC, iCountCur:0, iClickDone:0},
              {iCountReq:7,iPos:1, szName:'DocTIP',szURL:JSU_SHORT_URL_DOC_TIP, iCountCur:0, iClickDone:0},
              {iCountReq:8,iPos:1, szName:'DocGA',szURL:JSU_SHORT_URL_DOC_GA, iCountCur:0, iClickDone:0},
              {iCountReq:7,iPos:1, szName:'DocLOADING',szURL:JSU_SHORT_URL_DOC_LOADING, iCountCur:0, iClickDone:0},
              {iCountReq:8,iPos:1, szName:'DocSORT',szURL:JSU_SHORT_URL_DOC_SORT, iCountCur:0, iClickDone:0},
              {iCountReq:6,iPos:1, szName:'DocIEPOPUP',szURL:JSU_SHORT_URL_DOC_IEPOPUP, iCountCur:0, iClickDone:0}
              ];


var ar_test = ar_test_jsu; // init

/**
 * 
 */
function testGetNext(){
	
	var fn = "[about.js testGetNext()] ";
	
	for (;;){
		var i = Math.floor(Math.random() * ar_test.length); // get number in range [0..arTestUrl.length]
		var el = ar_test[i];
		if (el.bPresent){
			if (++el.iCountCur >= el.iCountReq){
				el.iClickDone++;
				el.iCountCur=0;
				// jslogClear ();
				jslogObj (JSLOG_DEBUG,"Current=" +i, el);
				// jslogObj (JSLOG_DEBUG,"arTest", ar_test);
				// PRINT
				var szTbl = '<table class="det" width="500px">' +
				  '<tr class= "detTitle">' +
				  '  <td width="20px" class="tipl">Index</td>' +
				  '  <td width="120px" class="tipl">Name</td>' +
				  '  <td width="50px" class="tipl">CLICK</td>' +
				  '  <td width="40pxpx" class="tipl">Count</td>' +
				  '  <td width="40pxpx" class="tipl">Req</td>' +
				  '</tr>';
				for (var k=0; k< ar_test.length; k++){
					var elPrint = ar_test[k];
					if (elPrint.bPresent){
						
					var szRow = '<td class="tipr">' + k + '</td>' +
					'<td class="tipl">' + elPrint.szName + '</td>' +
				  '  <td class="tiprBold">' + elPrint.iClickDone + '</td>' +
				  '  <td class="tipr">' + elPrint.iCountCur + '</td>' +
				  '  <td class="tipr">' + elPrint.iCountReq + '</td>' +
				  '</tr>';
					szTbl += szRow;
					}
				}
				szTbl += '</tr></table>';
				var div = getElementById2 ('divTestOut');
				divTestOut.innerHTML = szTbl;
				jslog (JSLOG_DEBUG,fn + "return szURL" + el.szURL);
				return el.szURL;
			}
		}	
	}
}

