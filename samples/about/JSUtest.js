/* ---------------------------------------------------------------------------------------------------------------------
 * 					JSU TEST  Only for developers
--------------------------------------------------------------------------------------------------------------------- */



var URL_PAR_TYPE_WIX="wix";
var URL_PAR_TYPE_JSU="jsu";
var URL_PAR_TYPE_YOUTYBE="you";



var var_test = {
		tmoTest: null,
		iTestCur:  0,
    bFrame:  false		
};


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
	jslog (JSLOG_DEBUG, Fn + "url_par.type=" + url_par.type);
	if (url_par.type == URL_PAR_TYPE_WIX) {
		ar_test = ar_test_wix;
	}else if (url_par.type == URL_PAR_TYPE_YOUTYBE) {
		ar_test = ar_test_you;
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

// wix
var ar_test_wix = [// --------------- random se iPos>=1
              {iCountReq:6,iPos:0, szName:'Cognos',szURL:JSU_LONG_URL_COGNOS, iCountCur:0, iClickDone:0},
              {iCountReq:8,iPos:0, szName:'CognosRS',szURL:JSU_LONG_URL_COGNOS_RS, iCountCur:0, iClickDone:0},
              {iCountReq:9,iPos:0, szName:'CognosCEL',szURL:JSU_LONG_URL_COGNOS_CEL, iCountCur:0, iClickDone:0},
              {iCountReq:7,iPos:0, szName:'CognosBLOG',szURL:JSU_LONG_URL_COGNOS_BLOG, iCountCur:0, iClickDone:0}
                            
              ];


var ar_test_you = [// --------------- random se iPos>=1
                   {iCountReq:4,iPos:0, szName:'Tooltip',szURL:JSU_URL_VIDEO_TIP, iCountCur:0, iClickDone:0},
                   {iCountReq:6,iPos:0, szName:'Validate',szURL:JSU_URL_VIDEO_VALIDATE, iCountCur:0, iClickDone:0},
                   {iCountReq:7,iPos:0, szName:'Loading',szURL:JSU_URL_VIDEO_LOADING, iCountCur:0, iClickDone:0}
                   ];


// quelli con iPos=0 ci sono sempre. Poi vengono considerato solo quelli con iPos <= par_check, e fatto random
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

