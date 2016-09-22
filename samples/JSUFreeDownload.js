var URL_PAR_HIDE_BTN="hideBtn"; // pass hideBtn=1 to hide Download Buttons

/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog
  // jslog_init(JSLOG_LEV);
	var fn = "[JSUFreeDownaload.js jsuLoaded()] ";
	jslog (JSLOG_JSU,fn + JSLOG_FUN_START);

	//-----------------------------------------------------------
	var szHideBtn = urlGetParVal (URL_PAR_HIDE_BTN);
	if (szHideBtn == "1"){
		jslog (JSLOG_DEBUG,fn + "Hide Btn because URL PAR " + URL_PAR_HIDE_BTN + "=" + szHideBtn);
    elementShowById ("tblBtnDownload",false);
	}
};



