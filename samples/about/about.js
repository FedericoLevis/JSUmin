/* =========================================================================================
File:     					about.js
Author:   					Federico Levis
Last Modification:  1 Sept 2016   
Description:        API for JSU about   
REQUIRE:            JSU

DISCLAIMER
Copyright by Federico Levis - JSU https://github.com/FedericoLevis/JSU 
This file may be freely distributed under the MIT license.
========================================================================================= */

/* =============================================================================================
   						CONSTANT
============================================================================================= */

// var TMO_DOC_EMBED_STARTUP_MS = 500; 

//-------------------------- Optional PAR only for debugger 

var URL_PAR_OPT="opt"; // if 1 we see Optional Columns used to Show/Hide Column in Test
// -- Test google, used only by AllSamples.html
var URL_PAR_TEST="test"; // 0= No TEST  1.. Number of Automatic Test to execute with Test Google Button 
var URL_PAR_PERIOD="period"; // Number of second sin randfom period  default = 60 
var URL_PAR_POS="pos";  
var URL_PAR_TYPE="type";


var JSU_TIP_PLAY_VIDEO='<div style="width:300px;">Click to Show a <b>YouTube Video of this JSU feature</b>';
var JSU_TIP_BROWSER_ALL='<div style="width:500px">' +
   'This Feature is <b>Fully supported by All Browser</b><BR/>It has been successfully tested in <label class="tipGoodBold">Safari, Chrome, Firefox, Opera, IE, Android</label></div>';
var JSU_TIP_BROWSER_IE_POPUP='<div style="width:450px">' +
'IE Popup is designed ONLY for IE:<ul>' +
'<li><label class="tipGoodBold">Browser Supported: ONLY IE</label></li>' +
'<li><label class="tipErrBold">Browser NOT Supported: Safari, Chrome, Firefox, Opera, Android</li>' +
'</ul>' +
'In the browser not supported IE Popup will simply display an Alert instead of the HTML Popup'
'</div>';


var JSU_TIP_DOC="Click to Show the <b>JSU Documentation</b>";
var JSU_TIP_DOC_TIP="Click to Show the <b>JSU Tooltip Documentation</b>";
var JSU_TIP_DOC_SORT="Click to Show the <b>JSU SortTable Documentation</b>";
var JSU_TIP_DOC_VALIDATE="Click to Show the <b>JSU Validate Documentation</b>";
var JSU_TIP_DOC_IEPOPUP="Click to Show the <b>JSU IE Popup Documentation</b>";
var JSU_TIP_DOC_JQPOPUP="Click to Show the <b>JSU JQuery Popup Documentation</b>";
var JSU_TIP_DOC_LOADING="Click to Show the <b>JSU LoadingDiv Documentation</b>";
var JSU_TIP_DOC_JSLOG="Click to Show the <b>JSU JSLogDocumentation</b>";

// ---------------------------- TITLE (simple tooltip without HTML TAGS
var JSU_TITLE_BROWSER_ALL = "This Feature is Fully supported by All Browser. It has been successfully tested in Safari, Chrome, Firefox, Opera, IE, Android";
var JSU_TITLE_BROWSER_IEPOPUP = "IE Popup is designed ONLY for IE. Only IE Browser is Supported. In the browser not supported IE Popup will simply display an Alert instead of the HTML Popup. ";
//---------------------------


var JSU_EMAIL = "federico.levis@virgilio.it";  
var JSU_LONG_URL_COGNOS = "http://federicolevis.wix.com/cognos";
var JSU_LONG_URL_GITHUB = "https://github.com/FedericoLevis/JSU";
var JSU_LONG_URL_PLSQL = "https://github.com/FedericoLevis/PLSQLUtility";


var JSU_LONG_URL_COGNOS_RS = "http://federicolevis.wix.com/cognos/report-studio"
var JSU_LONG_URL_COGNOS_CEL = "http://federicolevis.wix.com/cognos/CEL"
var JSU_LONG_URL_COGNOS_BLOG = "http://federicolevis.wix.com/cognos/single-post/2015/02/05/CEL-Dynamically-Sort-a-RS-List-by-Clicking-Column-Header";

var JSU_IMG_PLAY_VIDEO = "https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png";

var JSU_SORT_CODE_H = 220;

var JSU_DISABLED = 'javascript:function() { return false; }';

var JSU_ZIP = "https://github.com/FedericoLevis/JSU/archive/master.zip";
var JSU_MIN_ZIP = "https://github.com/FedericoLevis/JSUmin/archive/master.zip";

var JSU_BUY = JSU_DISABLED; 


// ---------------------------------------
var SAMPLE_MAX_NUM=4; // Max sample per Feature in the samples
var SAMPLE_COL_ALL="ALL";


var JSU_URL_VIDEO_TIP= "https://youtu.be/Fmc6hL4prXY";
var JSU_URL_VIDEO_LOADING="https://youtu.be/0XinCNtTl1c";
var JSU_URL_VIDEO_VALIDATE="https://youtu.be/vuNOTXMknWw";

var JSU_URL_VIDEO_GA="https://youtu.be/XKwPot0aDWk";
var JSU_URL_VIDEO_GASTEPS="https://youtu.be/lTPYlw7HQIg";
var JSU_URL_VIDEO_JQPOPUP="https://youtu.be/yerZchQnP7c";
var JSU_URL_VIDEO_IEPOPUP="https://youtu.be/yDTPt1sGOOc";


// NOTE: embed is visible in the Embed Tab of Youtube Video  
// NOT Used EMBED: we prefer Direct Videu URL
// var JSU_VIDEO_FRAME_TIP  =	'<iframe width="750" height="600" src="https://www.youtube.com/embed/wpo2oM_L3ds?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 

// Samples
// --------------- FEATURE NOT FREE URL run-time calculated  
var SHORT_URL_GOOGLE = true;  // Use Google Short URL

var JSU_LONG_URL_SAMPLE_VALIDATE =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Validate/ValidateSample.html";
//var JSU_SHORT_URL_SAMPLE_LOADING  =	"https://rawgit.com/FedericoLevis/WORK/master/3/samples/Validate/ValidateSample.html";



// ------------------ JSU SITE
var JSU_URL_SITE = "http://federicolevis.wixsite.com/jsutility";
var JSU_URL_SITE_SAMPLE_ALL = JSU_URL_SITE + "/sample-all";
var JSU_URL_SITE_SAMPLE_TIP = JSU_URL_SITE + "/tooltip";
var JSU_URL_SITE_SAMPLE_VALIDATE = JSU_URL_SITE + "/validate";
var JSU_URL_SITE_SAMPLE_LOADING = JSU_URL_SITE + "/loading";
var JSU_URL_SITE_SAMPLE_GA = JSU_URL_SITE + "/ga";
var JSU_URL_SITE_SAMPLE_SORT = JSU_URL_SITE + "/sort";
var JSU_URL_SITE_SAMPLE_JSLOG = JSU_URL_SITE + "/jslog";
var JSU_URL_SITE_SAMPLE_IEPOPUP = JSU_URL_SITE + "/iepopup";
var JSU_URL_SITE_SAMPLE_JQPOPUP = JSU_URL_SITE + "/jqpopup";
var JSU_URL_SITE_DOWNLOAD = JSU_URL_SITE + "/jsu-download";
// ------------------
var JSU_LONG_URL_DOWNLOAD_PAGE_FREE  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/JSUFreeDownload.html";


var JSU_LONG_URL_SAMPLE_ALL  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/AllSamples.html";
var JSU_LONG_URL_SAMPLE_SORT  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Sort/SortSample.html";
var JSU_LONG_URL_SAMPLE_TIP  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Tip/TipSample.html";
var JSU_LONG_URL_SAMPLE_VALIDATE  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Validate/ValidateSample.html";
var JSU_LONG_URL_SAMPLE_GA  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/GoogleAnal/GoogleAnalSample.html";
var JSU_LONG_URL_SAMPLE_IEPOPUP  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/IEPopup/PopupSample.html";
var JSU_LONG_URL_SAMPLE_LOADING  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/Loading/LoadingSample.html";
var JSU_LONG_URL_SAMPLE_JSLOG  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/jslog/jslogSample.html";
var JSU_LONG_URL_SAMPLE_JQPOPUP  =	"https://rawgit.com/FedericoLevis/JSU/master/samples/JQPopup/PopupSample.html";

//----------- goo.gl of FREE Features
var JSU_SHORT_URL_DOWNLOAD_FREE  =	"https://goo.gl/HnNqnM";
var JSU_SHORT_URL_SAMPLE_ALL  =	"https://goo.gl/MoY5nK";
var JSU_SHORT_URL_SAMPLE_TIP  =	"https://goo.gl/1e6ju7";
var JSU_SHORT_URL_SAMPLE_GA  =	"http://goo.gl/UzfnFK";
var JSU_SHORT_URL_SAMPLE_SORT  = "https://goo.gl/hJm8vV";
var JSU_SHORT_URL_SAMPLE_IEPOPUP  =	"https://goo.gl/1b2ely";
var JSU_SHORT_URL_SAMPLE_LOADING  =	"https://goo.gl/jttCME";
var JSU_SHORT_URL_SAMPLE_VALIDATE =	"https://goo.gl/SboNsD";
var JSU_SHORT_URL_SAMPLE_JSLOG  =	"https://goo.gl/aAtyxG";
var JSU_SHORT_URL_SAMPLE_JQPOPUP  =	"https://goo.gl/8xn5Gu";
var JSU_SHORT_URL_GITHUB = "https://goo.gl/LYDepH";
var JSU_SHORT_URL_COGNOS = "http://goo.gl/JZJSPn";
var JSU_SHORT_URL_PLSQL = "https://goo.gl/OI3eIo";
var JSU_SHORT_URL_LINKEDIN = "https://goo.gl/J9mJfh";  
//---------------------
var JSU_LONG_URL_LINKEDIN = "https://www.linkedin.com/in/federicolevis";  
	
	
//----------------------- API DOC
var JSU_LONG_URL_API  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html";
var JSU_LONG_URL_API_TIP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html";
var JSU_LONG_URL_API_GA  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/googleAnal.js/index.html";
var JSU_LONG_URL_API_LOADING  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/loadingDiv.js/index.html";
var JSU_LONG_URL_API_SORT  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/cSortTable.js/index.html";
var JSU_LONG_URL_API_VALIDATE  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/cValidate.js/index.html";
var JSU_LONG_URL_API_JSLOG  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/index.html";
var JSU_LONG_URL_API_IEPOPUP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/IEPopup.js/index.html";
var JSU_LONG_URL_API_JQPOPUP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/JQPopup.js/index.html";

var JSU_SHORT_URL_API  ="https://goo.gl/0PGnZl"

/* TBD if we need them	
var JSU_SHORT_URL_API_TIP  =	"https://goo.gl/AGKlpQ";
var JSU_SHORT_URL_API_LOADING  =	"https://goo.gl/0tIOIJ";
var JSU_SHORT_URL_API_SORT  =	"https://goo.gl/aKR7b2";
var JSU_SHORT_URL_API_VALIDATE  =	"https://goo.gl/M7LT4v";
var JSU_SHORT_URL_API_JSLOG  =	"https://goo.gl/Iobg3a";
var JSU_SHORT_URL_API_IEPOPUP  =	"https://goo.gl/iWW5cz";
var JSU_SHORT_URL_API_JQPOPUP  =	"https://goo.gl/iPqUqL";
*/


var	JSU_ID_SAMPLE_ALL=0;	
var	JSU_ID_SAMPLE_TIP=1;	
var	JSU_ID_SAMPLE_VALIDATE=2;	
var	JSU_ID_SAMPLE_LOADING=3;	
var	JSU_ID_SAMPLE_GA=4;	
var	JSU_ID_SAMPLE_SORT=5;	
var	JSU_ID_SAMPLE_JSLOG=6;	
var	JSU_ID_SAMPLE_IEPOPUP=7;	
var	JSU_ID_SAMPLE_JQPOPUP=8;	
	
	
//----------------------- FEATURE DOC
var JSU_LONG_URL_DOC  =	"https://rawgit.com/FedericoLevis/JSU/master/README.html";
var JSU_LONG_URL_DOC_SORT  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/SortTable.html";
var JSU_LONG_URL_DOC_VALIDATE  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/Validate.html";
var JSU_LONG_URL_DOC_TIP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/Tooltip.html";
var JSU_LONG_URL_DOC_GA  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/GoogleAnalytics.html";
var JSU_LONG_URL_DOC_LOADING  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/LoadingDiv.html";
var JSU_LONG_URL_DOC_JSLOG  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/jslog.html";
var JSU_LONG_URL_DOC_IEPOPUP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/IEPopup.html";
var JSU_LONG_URL_DOC_JQPOPUP  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/JQPopup.html";

//----------------------- FEATURE DOC - par for FEature Only in FULL version
var JSU_LONG_URL_DOC_GA_ONLYFULL  =	JSU_LONG_URL_DOC_GA + "#parOnlyFullJsu";


// ---- ggo.gl
var JSU_SHORT_URL_DOC  =	"https://goo.gl/JzIXW0";
var JSU_SHORT_URL_DOC_TIP  =	"https://goo.gl/AGKlpQ";
var JSU_SHORT_URL_DOC_GA  =	"http://goo.gl/UYJ5Zv";
var JSU_SHORT_URL_DOC_SORT  =	"https://goo.gl/aKR7b2";
var JSU_SHORT_URL_DOC_VALIDATE  =	"https://goo.gl/M7LT4v";
var JSU_SHORT_URL_DOC_LOADING  =	"https://goo.gl/0tIOIJ";
var JSU_SHORT_URL_DOC_JSLOG  =	"https://goo.gl/Iobg3a";
var JSU_SHORT_URL_DOC_IEPOPUP  =	"https://goo.gl/ZJBCrl";
var JSU_SHORT_URL_DOC_JQPOPUP  =	"https://goo.gl/hZ5U6M";


//
var JSU_SHORT_URL_VERSION  =	"https://goo.gl/1eIYNm";
var JSU_LONG_URL_VERSION  =	"https://rawgit.com/FedericoLevis/JSUDoc/master/JSUversion.html";

// used as Link for JSU in about
var JSU_SITE = JSU_SHORT_URL_DOC; 

//


// COMMON for all samples
var SAMPLE_MAX_NUM=4; // MAX Number of Sample
var SAMPLE_ALL="ALL";

var URL_1 = "WORK";
var URL_2 = "master";
var URL_SEP = "/";


//Div with hidden anchor
var JSU_DIV_HIDDEN_ID = "jsuDivHidden";
var JSU_HREF_HIDDEN_ID = "jsuHrefHidden";
// init to whatver href, then it will be changed run-time
var JSU_HREF_HIDDEN = '<a id="' + JSU_HREF_HIDDEN_ID +'" target="_blank" style="display:none" href="https://goo.gl/HnNqnM" >HIDDEN</a>'; 


/* =============================================================================================
    			MAIN JSU TIP:  JSU_TIP_SECT2 
 ============================================================================================= */
//Not allowed:  Reference to other Sub-Tip
//allowed:   Popup call
 
var JSU_TIP_SECT2_FEAT =  '<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="520">' +
'	  <tr class="tipTitle">' +
'		  <th class="tipTitle" colspan="4">JSU FEATURES</th>' +
'	  </tr>' +
'	  <tr class="tipTitle2">' +
'		  <td width="60px" class="tipc">Feature<BR/>Doc</td>' +
'		  <td width="330px" class="tipc">Description</td>' +
'		  <td width="60px" class="tipc">YouTube<BR/>Video Sample</td>' +
'		  <td width="70px" class="tipc">Try an Example</td>' +
'	  </tr>' +
'	  <tr >' +
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuDocTip(true);">Tooltip</a> </td>' +
'		  <td class="tipl"><b>Floating/Fixed Tips</b> with GIF, Video, Code Highlight</td>' + 
'     <td class="tipc"><a href="javascript:jsuVideoTip()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of Tooltip Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleTip();">Tooltip Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuDocValidate(true);" target="_blank">Validate</a> </td>' +
'     <td class="tipl">API for both <b>Item Validation </b> and also <b>Presentation</b> of Validation Errors</td>' + 
'     <td class="tipc"><a href="javascript:jsuVideoValidate()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of Validate Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleValidate();">Validate Sample</a></td>' +
'	  </tr>' +
'	  <tr >' + 
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuDocLoading(true);">Loading Div</a> </td>' +
'		  <td class="tipl"><b>Loading Div</b> displayed during Long Operation.</td> ' +
'     <td class="tipc"><a href="javascript:jsuVideoLoading()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of LoadingDiv Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleLoading();">LoadingDiv Sample</a></td>' +
'	  </tr>' +
'	  <tr >' +
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuDocGA(true);">Google Analytics</a> </td>' +
'		  <td class="tipl"><b>User Friendly List of Links to Google Analytics Pages</b> </td>' + 
'     <td class="tipc"><a href="javascript:jsuVideoGA()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of Google Analytics Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleGA();">Google Analytics Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuDocJSLog(true);" target="_blank">jslog</a> </td>' +
'		  <td class="tipl"><b>Log from JS Code with various LogLevel</b> into an optional Window</b></td> ' + 
'     <td class="tipc"><a href="javascript:jsuVideoJSLog()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of JSLog Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleJSlog();">JSlog Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuSort(true);" target="_blank">Table Sort</a> </td>' +
'		  <td class="tipl"><b>Sort HTML Table</b> by clicking column header</td>' + 
'     <td class="tipc"><a href="javascript:jsuVideoSort()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of SortTable Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleSort();">SortTable Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuIEPopup(true);" target="_blank">IE Popup</a> </td>' +
'		  <td class="tipl"><b>Modal/Blocking Popup</b> designed ONLY for <b>IE</b><BR/><b> </td>' + 
'     <td class="tipc"><a href="javascript:jsuVideoIEPopup()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of IE Popup Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleIEPopup();">IE Popup Sample</a></td>' +
'	  </tr>' +
'	  <tr>' +
'		  <td class="tipc"><a class="tipLink" href="javascript:jsuDocJQPopup(true);" target="_blank">JQ Popup</a> </td>' +
'		  <td class="tipl"><b>Modal Popup for whatever Browser</b><BR/><b>Not Blocking code</b> with callback function</td>' + 
'     <td class="tipc"><a href="javascript:jsuVideoJQPopup()"> <input type="button" class="playVideoSmall" title="Click to Show a YouTube Video of JQ Popup Feature"/></a></td> ' +  
'		  <td class="tipc"><a class="tipLink" href="javascript:showSampleJQPopup();">JQ Popup Sample</a></td>' +
'	  </tr>' +
'</table>';

//Message on the right of the Table of Features
var JSU_TIP_SECT2_MSG = '<a class="tipLink" href="'+ JSU_SITE +'" target="_blank">JSU</a> is a <b>JavaScript Utility</b>  library very Lightweight, powerful and simply to use:' +
'<ul type="square">' +
'<li><b>Easy to Install/Test</b>: download JSU ZIP and try samples in jsu/samples</li>'+ 
'<li><b>Simple to include in your project</b> with only one JS load instruction: <b>requires.js loads plugin/jsu.js </b></li>'+ 
'<li><b>No dependencies</b> for all the JSU Features (<b>Pure JS code</b>) with the only exception of JQ Popup (requiring jquuery, jquery-ui)</li>'+ 
'<li><b>All modern browsers are supported</b>: IE9+, Firefox 3+, Chrome,... </li>'+ 
'<li><b>Many Examples provided</b> for each JSU feature, with all the <b> relative JSU code calls explained in Fixed Tips</b></li>'+ 
'<li><b>Feature Documentation and JSDoc API</b> for each feature</li>'+ 
'<li><b>Very Powerful and Simple to use</b>: only 1 or maximum 2 JS instructions are required for each JSU features </li>'+ 
'<li><b>Localization support</b>: all the messages are isolated in local/<b><i>LAN</i></b>/locale-core.js  </li>'+
'<li><b>CSS support (jsu.css)</b> with powerful CSSDoc with graphical CSS preview</li>' +
'</ul>';


// All the Section with Table of Features and Message
var JSU_TIP_SECT2 = '<table class="jsuAboutMsg" width="100%" style="margin-top:15px;margin-bottom:15px;">' +
'<tr>' +
'  <td width="50%">' + JSU_TIP_SECT2_FEAT + '</td>' +
'  <td width="50%" class="tipl"  style="padding-left:5px;padding-right:5px;font-size:11px;">' + JSU_TIP_SECT2_MSG + '</td>' +
'</tr>' +
'</table>';



/* =============================================================================================
   						GLOBAL VAR
============================================================================================= */
//TRUE if there is URL par opt=1

var url_par = {
	doc : undefined,
	bTest: false, // TRUE if we are in Test mode
	test : 1000,
	pos: 1, // 0 solo iPos=0  1= iPos=0 piu` quelli con 1 fatti random     2= iPos=0 piu` quelli con 1 e 2 fatti random
	period: 40,
	type: '', // default
	opt : undefined
};


var tmo_resize = null;



/* =============================================================================================
									GLOBAL API
============================================================================================= */


/**
 * JSU About Popup Example
 */
function showJsuPopupAbout(){

		var szMsg = '<table class="tip" BORDER="1" cellspacing="0" cellpadding="2" width="950px">' +
	  '  <tr width="350px" class="jsuAbout jsuAboutHea">' +
	  '    <td><table class="tipNoBorder" width="100%"><tr>' +
	  '      <td width="250px" align="center" class="jsuAboutTitle"> <img class="jsuAboutTitle" src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/jsuAboutTitle.png"/></td> ' +
	  '      <td width="350px"><table class="tipNoBorder" width="100%"><tr>' +
	  '        <td align="right" width="33%"><img class="jsuAboutJust" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutJust.gif"/></td>' +
	  '        <td align="center" width="33%"><img class="jsuAboutSimple" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutSimple.gif"/></td>' +
	  '        <td align="left" width="33%"><img class="jsuAboutUse" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutUse.gif"/></td>' +
	  '      </tr></table></td> ' +
	  '    </tr></table></td>' +
	  '  </tr>' +
	  '  <tr class="jsuAboutMsg"><td class="tipl" >' + JSU_TIP_SECT2 + '</td></tr> ' +
	  '</table>';
  Popup(POPUP_TYPE.INFO, szMsg,	{ bShowImg: false, szTitle: "JSU ABOUT", iWidth: 960, position: {at: "top"}});
}



/**
 * Show the TipFix for all JSU Feature 
 * @param event
 * @param [bShowAllSample] {Boolean} def true
 */
function aboutTipFixJSU(event,bShowAllSample){
	var Fn = "[about.js aboutTipFixJSU] ";
	if (bShowAllSample == undefined){
		bShowAllSample = true;
	}
	// for JSUDoc we disable the choice
	// var szLocation = window.n + ""; 
	// var bJSUDoc = szLocation.indexOf ("JSUDoc") >= 0;
	
	var szMsg = '<table class="tip" BORDER="1" cellspacing="0" cellpadding="2" width="900px">' +
  '  <tr class="jsuAbout jsuAboutHea">' +
  '    <td >' +
  '      <table class="jsuHeaderNoBorder"  width="100%">' +
  '        <tr>' +
  '          <td  align="left" class="jsuAboutTitle" width="40%"> <img class="jsuAboutTitle" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutTitle.png"/></td> ' +
  '          <td  align="left" class="jsuAboutTitle" width="27%">' +
  '            <table class="tipNoBorder" width="100%">' +
  '		           <tr><td class="tipl jsuVersion">' + JSU_VERSION +  '</td></tr>' +
  '		           <tr><td class="tipl"><a class="tipLink" href="'+ JSU_URL_SITE +'" target="_blank">JSU Web SITE</a> </td></tr>' +
  '		           <tr><td class="tipl"><a class="tipLink" href="'+ JSU_SHORT_URL_DOC +'" target="_blank">JSU documentation</a> </td></tr>';
	if (bShowAllSample){
		szMsg = szMsg +	
	   '		       <tr><td class="tipl"><a class="tipLink" href="'+ JSU_SHORT_URL_SAMPLE_ALL +'" target="_blank">JSU: All Samples</a> </td></tr>';
	}
	szMsg = szMsg +  '        </table>' +
  '         </td>' +
  '          <td align="right" class="jsuAboutTitle" width="33%">' + 
  '            <table class="tipNoBorder" width="100%">' +
  '             <tr>' +
  '              <td align="right" width="42%"><img class="jsuAboutJust" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutJust.gif"/></td>' +
  '              <td align="center" width="16%"><img class="jsuAboutSimple" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutSimple.gif"/></td>' +
  '              <td align="left" width="42%"><img class="jsuAboutUse" src="'  + JSU_PATH_ABOUT_IMG + 'jsuAboutUse.gif"/></td>' +
  '             </tr>' +
  '            </table>' +
  '          </td> ' +
  '       </tr>' +
  '      </table>' +
  '    </td>' +
  '  </tr>' +
  '  <tr class="jsuAboutMsg"><td class="tipl">' + JSU_TIP_SECT2  + '</td></tr> ' +
  '  <tr class="jsuAbout jsuAboutFooter" >' +
  ' </tr></table>';
	TipFix (szMsg,event,{iTipWidth:920, szTitle: "JSU: JS Utility FEATURES"});	
}

/**
 * Tip for Author(title)
 */
function aboutTipAuthor(event){
	var szTip = '<div style="width=800px"><table class="tip" BORDER="1" cellspacing="0" cellpadding="2" width="100%">' +
  '  <tr>' +
  '    <td width="230px" align="left"> <img width="230px" src="'  + JSU_PATH_ABOUT_IMG + 'FedericoLevis.jpg"/></td> ' +
  '    <td ><table class="tipNoBorder" width="100%">' +
  '      <tr><td align="left"><label class="tipTitleBig">Federico Levis</label></td><tr/>' +
  '      <tr><td align="left">SW Engineer - Developer, Architect & Team Leader specialist in:<BR/>' +
  '              Java, JS, DB, SQL, PL/SQL, Cognos, C++, Perl & Unix Script</td><tr/>' +
  '      <tr><td ><table class="tipNoBorder" width="100%">' +
  '        <tr>' +
  '          <td width="180px" class="tipl"><label class="tipTitle">Linkedin CV: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="' +  JSU_SHORT_URL_LINKEDIN  + '" target="_blank">' + JSU_LONG_URL_LINKEDIN +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tipTitle">Email: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="mailto:' +  JSU_EMAIL  + '" target="_blank">' + JSU_EMAIL +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tipTitle">JSU: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="' +  JSU_SHORT_URL_DOC  + '" target="_blank">' + JSU_LONG_URL_DOC +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tipTitle">Cognos CEL Plugin: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href="' +  JSU_SHORT_URL_COGNOS  + '" target="_blank">' + JSU_LONG_URL_COGNOS +  '</a> </td>'+
  '        <tr/>' +
  '        <tr>' +
  '          <td class="tipl"><label class="tipTitle">PL/SQL LOG Package: </label></td>'+
  '          <td class="tipl"><a class="tipLink" href=" 	' +  JSU_SHORT_URL_PLSQL  + '" target="_blank">' + JSU_LONG_URL_PLSQL +  '</a> </td>'+
  '        <tr/>' +
  '      </table></td></tr>' +
  '    </table></td> ' +
  '  </tr>' +
  '  </table></div> ';
	
	
	TipFix (szTip,event,{szTitle:'JSU AUTHOR',iTipWidth:830});	
}






/* ================================================================================== 
                                      TIP for Validate
================================================================================== */ 

var JSU_TABLE_VALIDATE_OPT = '	 <table class="tip" BORDER="2" cellpadding="2" width="900px">'+
'				  <tr class="tipTitle"><td colspan="4">cValidate OPTION</td></tr>'+
'				  <tr class="tipTitle2">'+
'				  <td width ="10%">OPTION</td>'+
'				  <td width ="10%">DEFAULT</td>'+
'				  <td width ="80%">DESCRIPTION</td>'+
'     </tr>  '+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowLabel</b></td>'+
'				  <td><i>true</i></td>'+
'				  <td class="tipl"><b>if true</b>: if <label class="jsuAPI">validateApply</label> generates Validate Errors, it shows an error label on the right of the Item</td>'+
'     </tr>'+
'	    <tr class="tip">'+
'				  <td><b>bInstantFieldValidation</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>If true</b>: Each Item is Instantly validated on the relative onChange Event</td>'+
'				</tr>'+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowSect</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>if true</b>: if <label class="jsuAPI">validateApply</label> generates Validate Errors, it shows a Section in The Top will All the Errors</td>'+
'     </tr>'+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowPopup</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>If true</b>: if <label class="jsuAPI">validateApply</label> generates Validate Errors, it shows a Popup with the Error Description</td>'+
'     </tr>'+
'     <tr class="tip">'+
'				  <td><b>bOnErrShowAlarm</b></td>'+
'				  <td><i>false</i></b></td>'+
'				  <td class="tipl"><b>If true</b>: On Single Item Validate Error, it shows an AlarmGif in the Item</td>'+
'	      </tr>'+
'				<tr class="tip">'+
'						  <td><b>bEnphasizeItemBorder</b></td>'+
'						  <td><i>true</i></b></td>'+
'						  <td class="tipl"><b>If true</b>: Mandatory or Error item are Enphasized with bigger border (Red for Validation Error cases)</td>'+
'				</tr>'+
'		</table>';

/**
 * Tip Info for Validate
 * 
 */
function onclickValidateFeature(event, bShowTrySample){
	if (bShowTrySample == undefined){
		bShowTrySample = true;
	}
	var szMsg = '<ul type="square">' +
    '<li><label class="jsuAPI">JSU cValidate (cValidate.js)</label> is based on <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> constraints Validator, encoded with <b>compact JSON constraints</b>: all the <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> features are supported and well documentated. '+
    'Example of <b>cValidate.js JSON constraints</b>: Date, Email, Equality, Exclusion, Format, Inclusion, Length, Numerically, URL, .. (see  documentaion: <a class="tipLink" href="https://validatejs.org/#validators" target="_blank">validate.js Validators</a>)</li>'+
    '<li><label class="jsuAPI">cValidate</label> has a <b>Very Simple Interface</b> allowing many flexible and powerful options with only 2 calls:</li>' +
    '  <ul type="none">' +
    '    <li><b>1) Init cValidate with Item constraints and options:</b> <i>cValidateObj1 = new <label class="jsuAPI">cValidate(contraints,objOpt);</label></i><BR/>' +
    '    &nbsp;&nbsp;&nbsp;&nbsp;After point 1) the item Validation and Options (e.g. Instant Validation, Tips,..) are automatically managed by cValidate.js</li>' +
    '    <li><b>2) Apply All Validate Items,</b> for example in the onclick event of Submit/Apply button: <i> var retCode = cValidateObj1.<label class="jsuAPI">validateApply();</label></i></li>' +
    '  </ul>' +
    '<li><b>Many Validation Options</b> are available and can be selected alone or together in whatever combination: ' +
    JSU_TABLE_VALIDATE_OPT + '<BR/></li>' + 
    '<li><b>Many Presentation Options</b> are available (if required they can be easily customized in CSS):' +
    '  <ul type="none">' +
    '    <li><b>1) Enphasize Mandatory Item</b> with a different border (CSS default: double border)</b></li>' +
    '    <li><b>2) Enphasize Error Item</b> with a different border (CSS default: Red border)</b></li>' +
    '    <li><b>3) Display HTML Tip (JSU Tooltip)</b> on the right of the Item to validate</li>' +
    '    <li><b>...</b></li>' +
    '  </ul>' +
    '<li><b>cValidate.js take care of everything:</b> Not only Validation but also all previous options are available <b>without any additional code</b> required: you simply have to set the desired options.</b></li>' +
    '<li><b>Different Validate Groups</b> can be managed separatly in the same page: each cValidate instance in independent, also in the same page</li>'+ 
    '<li><b>Multi language support</b> (<i>jsu/locale/...</i>)</li>' +
    '<li><b>CSS support</b> (<i>jsu/core/core.css</i>): if required you can easily customize presentation</li>' +
    '<li><b>All modern browsers are supported</b>(IE9+, Firefox 3+, Chrome, ...)</li>'+ 
	  '<li><b>No external dependencies</b> at all (pure JS code)</b></li>'+ 
	'</ul>';
	if (bShowTrySample){
	   szMsg += 	'&nbsp;&nbsp;<a class="tipLink" href="javascript:showSampleValidate();" target="_blank">Try JSU cValidate Sample</a><BR/>&nbsp; ';
	}
	
	TipFix (szMsg,event,{szTitle:"JSU cValidate", iTipWidth: 1000,bCloseBtn: true});
}



/* ================================================================================== 
			TIP for Loading
================================================================================== */ 


/**
* Tip Info for Loading
* 
*/
function onclickLoadingFeature(event, bShowTrySample){
	if (bShowTrySample == undefined){
			bShowTrySample = true;
	}
	var szMsg = '<ul type="square">' +
	'<li><label class="jsuAPI">JSU cLoading (cLoading.js)</label> is based on <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> constraints Validator, encoded with <b>compact JSON constraints</b>: all the <a class="tipLink" href="https://validatejs.org/#overview" target="_blank">validate.js</a> features are supported and well documentated. '+
	'Example of <b>cLoading.js JSON constraints</b>: Date, Email, Equality, Exclusion, Format, Inclusion, Length, Numerically, URL, .. (see  documentaion: <a class="tipLink" href="https://validatejs.org/#validators" target="_blank">validate.js Validators</a>)</li>'+
	'<li><label class="jsuAPI">cLoading</label> has a <b>Very Simple Interface</b> allowing many flexible and powerful options with only 2 calls:</li>' +
	'  <ul type="none">' +
	'    <li><b>1) Init cLoading with Item constraints and options:</b> <i>cLoadingObj1 = new <label class="jsuAPI">cLoading(contraints,objOpt);</label></i><BR/>' +
	'    &nbsp;&nbsp;&nbsp;&nbsp;After point 1) the item Validation and Options (e.g. Instant Validation, Tips,..) are automatically managed by cLoading.js</li>' +
	'    <li><b>2) Apply All Loading Items,</b> for example in the onclick event of Submit/Apply button: <i> var retCode = cLoadingObj1.<label class="jsuAPI">validateApply();</label></i></li>' +
	'  </ul>' +
	'<li><b>Many Validation Options</b> are available and can be selected alone or together in whatever combination: ' +
	JSU_TABLE_LOADING_OPT + '<BR/></li>' + 
	'<li><b>Many Presentation Options</b> are available (if required they can be easily customized in CSS):' +
	'  <ul type="none">' +
	'    <li><b>1) Enphasize Mandatory Item</b> with a different border (CSS default: double border)</b></li>' +
	'    <li><b>2) Enphasize Error Item</b> with a different border (CSS default: Red border)</b></li>' +
	'    <li><b>3) Display HTML Tip (JSU Tooltip)</b> on the right of the Item to validate</li>' +
	'    <li><b>...</b></li>' +
	'  </ul>' +
	'<li><b>cLoading.js take care of everything:</b> Not only Validation but also all previous options are available <b>without any additional code</b> required: you simply have to set the desired options.</b></li>' +
	'<li><b>Different Loading Groups</b> can be managed separatly in the same page: each cLoading instance in independent, also in the same page</li>'+ 
	'<li><b>Multi language support</b> (<i>jsu/locale/...</i>)</li>' +
	'<li><b>CSS support</b> (<i>jsu/core/core.css</i>): if required you can easily customize presentation</li>' +
	'<li><b>All modern browsers are supported</b>(IE9+, Firefox 3+, Chrome, ...)</li>'+ 
	'<li><b>No external dependencies</b> at all (pure JS code)</b></li>'+ 
	'</ul>';
	if (bShowTrySample){
		szMsg += 	'&nbsp;&nbsp;<a class="tipLink" href="' + JSU_SHORT_URL_SAMPLE_LOADING + '" target="_blank">Try JSU cLoading Sample</a><BR/>&nbsp; ';
	}

	TipFix (szMsg,event,{szTitle:"JSU cLoading", iTipWidth: 1000,bCloseBtn: true});
}





function featureNotReady(){
  Popup (POPUP_TYPE.INFO,'This Feature is still UNDER WORK: it will be available in few weeks');
}




/**
 * The download BTN in all Pages, that Open the DownLOad Page
 */
function downloadJsu(event){
	var fn = "[about.js downloadJsu()] ";
	jslog(JSLOG_DEBUG, fn + JSLOG_FUN_START);
	
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'DownloadFree',
	  eventAction: 'BtnView',
	  eventLabel: 'OpenPage'
	});

	UnTip();
	if (isIE()){
		// To Manage Wix
		jsuGoToURL(JSU_URL_SITE_DOWNLOAD,false);
	}else {
		var iHeight = (isFirefox()) ? 560 : 510;
		var szTipFrame =	'<iframe width="850" height="' + iHeight + '" src="' + JSU_SHORT_URL_DOWNLOAD_FREE + '" ></iframe>'; 
		TipFix(szTipFrame,event,{
			 iTipWidth: 890,
			 szTitle:'JSU Download',
			 objClass: {Down: 'downloadJsu', Up: 'downloadJsuUp'},  // we pass the Custom Classes used
			 bCloseBtn : false
		 }
		);
	}	
	jslog(JSLOG_DEBUG, fn + JSLOG_FUN_END);
	
}

/**
 * Tip for button to change Display and set Site
 */
function siteDisplayTip(){
	var szTip = "";
	var szClassName = getElementById2('siteDisplay').className;
	if (szClassName == 'siteDisplay'){
		szTip = '<div style="width:400px">This page is currently displayed in <b>a dedicated Browser Windows</b><BR/><BR/>' +
	  'Click this button to show this page <b>in the JSU SITE</b>' + 
	  '</div>';
	}else {
		szTip = '<div style="width:400px">This page is currently displayed in <b>JSU SITE</b><BR/><BR/>' +
		  'Click the button on the left to show this page with<BR/><b>FULL SIZE in a dedicated Browser Window</b>' + 
		  '</div>';
	}
  Tip (szTip);  	
}

/**
 * Tip for button to change Display and set Site
 */
function browserDisplayTip(){
	var szTip = "";
	var szClassName = getElementById2('browserDisplay').className;
	if (szClassName == 'browserDisplay'){
		szTip = '<div style="width:400px">This page is currently displayed in <b>JSU SITE</b><BR/><BR/>' +
	  'Click this button to show this page with<BR/><b>FULL SIZE in a dedicated Browser Window</b>' + 
	  '</div>';
	}else {
		szTip = '<div style="width:400px">This page is currently displayed in <b>a dedicated Browser Windows</b><BR/><BR/>' +
	  'Click the button on the right to show this page <b>in the JSU SITE</b>' + 
	  '</div>';
	}
  Tip (szTip);  	
}


/**
* Tip for Button DownloadJsu 
* 
* @param event
*/
function downloadJsuTip(event){
  Tip ('Click to Go to the Page of <b>JSU FREE Download</b>');  	
}

/**
* Tip for Donate Button  
* 
* @param event
*/
function donateTip(event){
	var szTip = '<div width="600px"><table class="tipNoBorder" align="left" width="100%"> ' +
' <tr> ' +
'	  <td width="100%" align="left"> ' +
 ' JSU is a <b>FREE NO-Profit project</b>.<BR/>' +
 'If it was useful for your job, <b>You can Contribute to JSU Evolution with your Donation</b><BR/>' +
 '  </td> ' +
 ' </tr>' +
 ' <tr>' +
 ' <td align="center" width=600px" colspan="2"><img src="'  + JSU_PATH_ABOUT_IMG + 'thanks.gif"/></td>' +
 ' </tr>' +
 '</table></div>';

  Tip (szTip);  	
}



/**
* Tip for Donate Button in Download Page  
* 
* @param event
*/
function donateDownalodTip(event){
	var szTip = '<div width="400px"><table class="tipNoBorder" align="left" width="100%"> ' +
' <tr> ' +
'	  <td width="100%" align="center"> ' +
 ' <b>You can click and choose your Donation if You want to Contribute to JSU Project</b><BR/>' +
 '  </td> ' +
 ' </tr>' +
 ' <tr>' +
 ' <td align="center" width=400px" colspan="2"><img src="'  + JSU_PATH_ABOUT_IMG + 'thanks.gif"/></td>' +
 ' </tr>' +
 '</table></div>';

  Tip (szTip);  	
}




/**
* Execute the download of JSU FULL
* 
* @param event
*/
function downloadJsuExecute(event){
	var Fn = "[about.js downloadJsuExecute()] ";
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_START);
	UnTip();
	jslog (JSLOG_DEBUG,Fn + "send event ");
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'DownloadJsu',
	  eventAction: 'JSU-master.zip',
	  eventLabel: 'JSU-master.zip'
	});

	ga('send', 'pageview');  // Send now the pageview click
	
	jslog (JSLOG_DEBUG,Fn + "URL = " + JSU_ZIP);
	if (isFirefox()){
		window.location = JSU_ZIP; 
	}else {
		jsuGoToURL(JSU_ZIP, true);
	}
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_END);
		
}


/**
 * 
 */
function windowClose() {
  window.open('','_parent','');
  window.close();
}

/**
* Execute the download of JSU Min
* 
* @param event
*/
function downloadJsuMinExecute(event){
	var Fn = "[about.js downloadJsuMinExecute()] ";
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_START);
	UnTip();
	jslog (JSLOG_DEBUG,Fn + "send event ");
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'DownloadJsuMin',
	  eventAction: 'JSUmin-master.zip',
	  eventLabel: 'JSUmin-master.zip'
	});

	ga('send', 'pageview');  // Send now the pageview click
	
	jslog (JSLOG_DEBUG,Fn + "URL = " + JSU_MIN_ZIP);
	if (isFirefox()){
		window.location = JSU_MIN_ZIP; 
	}else {
		jsuGoToURL(JSU_MIN_ZIP, true);
	}
	jslog (JSLOG_DEBUG,Fn + JSLOG_FUN_END);
		
}



/*=======================================================================================
 *   URl for DOC
=======================================================================================*/

/**
 * Open window with JSU Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDoc(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC,bNewWindow);
}


/**
 * Open window with Validate Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocValidate(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
  jsuGoToURL(JSU_SHORT_URL_DOC_VALIDATE,bNewWindow);
}

/**
 * Open window with Tip Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocTip(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC_TIP,bNewWindow);
}

/**
 * Open window with GA Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocGA(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC_GA,bNewWindow);
}


/**
 * Open window with SortTable Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocSort(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC_SORT,bNewWindow);
}
/**
 * Open window with Loading Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocLoading(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC_LOADING,bNewWindow);
}

/**
 * Open window with JSLOG Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocJSLog(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC_JSLOG,bNewWindow);
}
/**
 * Open window with IEPopup Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocIEPopup(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC_IEPOPUP,bNewWindow);
}
/**
 * Open window with JQPopup Documentation
 * @param [bNewWindow] {Boolean} default true
 */
function jsuDocJQPopup(bNewWindow){
	if (bNewWindow == undefined){
		bNewWindow = true;
	}
	jsuGoToURL(JSU_SHORT_URL_DOC_JQPOPUP,bNewWindow);
}





/*=======================================================================
 *    COMMON FOR ALL SAMPLES
 ======================================================================= */

/**
 * show only the COLUMN selected
 */
function onchangeShowCol(){
	var fn = "onchangeShowCol() ";
	var szVal = selectGetSelVal(getElementById2("selectShowCol"));
	jslog (JSLOG_DEBUG, fn + "szVal=" + szVal);
	for (var iRow=0; iRow<=SAMPLE_MAX_NUM; iRow++){
		for (var iCol=1; iCol<=2; iCol++){
			var szColId = "col_" + iRow + "_" + iCol;
			jslog (JSLOG_DEBUG, fn + "szColId=" + szColId + "  bShow=" + bShow);
			var el = getElementById2(szColId,false);
			if (el){
				var bShow = (szVal == SAMPLE_COL_ALL ||  szVal == iCol+"");
				el.style.display = (bShow) ? "" : "none";
				el.style.visibility = bShow;
			}else{
				jslog (JSLOG_DEBUG, fn + "szColId=" + szColId + "  NOT PRESENT in THIS Feature sample");
			}
		}
	}
}

/*
 * show only the sample selected
 */
function onchange_sample(){
	var fn = "onchange_sample ";
	var szVal = selectGetSelVal(getElementById2("selectSample"));
	jslog (JSLOG_JSU, fn + "szVal=" + szVal);
	for (var i=1; i<=SAMPLE_MAX_NUM; i++){
		var bShow = (szVal == SAMPLE_ALL ||  szVal == i+"");
		var elTr = getElementById2("tr_sample_" + i, false);
		if (elTr){
			jslog (JSLOG_JSU, fn + "tr i=" + i + "  bShow=" + bShow);
			elTr.style.display = (bShow) ? "" : "none";
			elTr.style.visibility = bShow;
		}
	}
}




/*
 * Common init par all samples, Called by all samples
 *  - Manage optional URL PAR show_opt, useful only for developers. 
 *  - show label of FREE Limits if we are in FREE JSU
 *  - ....
 * GLOBAL
 *  url_par   set in this routine 
 */
function initSampleCmn(){
	var fn = "[about.js initSampleCmn()] ";
	jslog (JSLOG_JSU,fn + JSLOG_FUN_START);

	if (isInIframe()){
		// WE are in iframe (we are in SITE). Switch Current display selected
		getElementById2('browserDisplay').className = 'browserDisplay';
		getElementById2('siteDisplay').className = 'siteDisplaySel';
	}
	try{

		//-----------------------------------------------------------
		var szParOpt = urlGetParVal (URL_PAR_OPT);
		jslog (JSLOG_DEBUG,fn + "URL PAR " + URL_PAR_OPT + "=" + szParOpt);
		if (szParOpt != ""){
			url_par.opt = szParOpt;
			jslog (JSLOG_JSU,fn + "show selectShowCol");
			elementShow (getElementById2("selectShowCol"),true,"inline");
			// URL
			var szLocation = window.n + ""; 
			var bJsLog = szLocation.indexOf ("jslogSample") > 0;
			// set preferred size to prepare YouTube Video 
			if (bJsLog){
			  window.moveTo(85, 34);
			  window.resizeTo(1200, 800);
			}else{
			  window.moveTo(85, 34);
			  window.resizeTo(800+35, 620+170);
			}
		}	
	// var URL_PAR_TEST="test"; // 0= No TEST  1.. Number of Automatic Test to execute with Test Google Button 
	// var URL_PAR_PERIOD="period"; // Number of second sin randfom period  default = 60
		var iParTest = urlGetParVal (URL_PAR_TEST);
		// jslog (JSLOG_JSU,fn + "URL:  " + URL_PAR_TEST + "=" + iParTest);
		url_par.bTest = (iParTest != undefined &&  iParTest != "");
		// jslog (JSLOG_JSU,fn + "url_par.bTest=" + url_par.bTest);
		elementShow(getElementById2("test",false), url_par.bTest);
		if (url_par.bTest){
			url_par.test = parseInt(iParTest);
			// Create test Div and add it di body
			jslog (JSLOG_INFO,fn + "ADD divTest");
			var szDivTest = '<div id="test">' + 
			'  <input  type="button" value="TEST Frame" onclick="testStart(true);" />&nbsp; &nbsp; &nbsp; <input  type="button" value="TEST Window" onclick="testStart(false);" /> <BR/>' +  
			'  Tmo(sec):<input  with="50px" id="testTmo" readonly value="0" />&nbsp; Test <input  with="50px" id="testDone" readonly value="0" />&nbsp;URL:<input  with="50px" id="testURL" readonly width="100px" />' + 
			'  <div id="divTestOut">' + 
			'  </div>' + 
			'</div>';
			var divTest = document.createElement("div");
		  divTest.innerHTML = szDivTest;
			document.body.appendChild(divTest);
			
		}
		var iParPeriod = urlGetParVal (URL_PAR_PERIOD);
		if (iParPeriod != undefined &&  iParPeriod != ""){
			url_par.period = parseInt(iParPeriod);
			jslog (JSLOG_DEBUG,fn + "URL:  " + URL_PAR_PERIOD + "=" + iParPeriod );
		}
		var iParPos = urlGetParVal (URL_PAR_POS);
		if (iParPos != undefined &&  iParPos != ""){
			url_par.pos = parseInt(iParPos);
			jslog (JSLOG_DEBUG,fn + "URL:  " + URL_PAR_POS + "=" + iParPos );
		}
		var szParType = urlGetParVal (URL_PAR_TYPE);
		if (szParType != undefined &&  szParType != ""){
			url_par.type = szParType;
			jslog (JSLOG_DEBUG,fn + "URL:  " + URL_PAR_TYPE + "=" + szParType );
		}
		jslogObj (JSLOG_DEBUG,"url_par",url_par);
	}catch (e) {
		jslog (JSLOG_ERR,fn + "Exception: " + e.message);
	}
	
	jslog (JSLOG_JSU,fn + JSLOG_FUN_END);
	
	//
}

/**
 * 
 * @returns  b_par_opt {Boolean}  TRUE if there is URL par opt=1
 */
function is_par_opt (){
	return (url_par.opt != undefined);
}


/**
 * 
 * @returns  {Boolean}  TRUE if current page is a sample
 */
function isJsuSample(){
	var szLocation = window.location + ""; 
	return (szLocation.indexOf ("samples") > 0);
}


/**
 * Click on Buutton browserDisplay
 * @param iSampleId JSU_ID_SAMPLE_TIP,....
 */
function onclickBrowserDisplay (iSampleId){
	var elBrowserDisplay = getElementById2('browserDisplay');
	var szClassName = elBrowserDisplay.className;
	if (szClassName == 'browserDisplaySel'){
		return; //Nothing To Do: already Selected
	}else {
		// SWITCH. Display Browser
		var szUrl = "";
		switch (iSampleId){
	    case JSU_ID_SAMPLE_ALL:
	  	  szUrl = JSU_SHORT_URL_SAMPLE_ALL;
		    break;
		  case JSU_ID_SAMPLE_TIP:
		  	szUrl = JSU_SHORT_URL_SAMPLE_TIP;
			  break;
		  case JSU_ID_SAMPLE_VALIDATE:
		  	szUrl = JSU_SHORT_URL_SAMPLE_VALIDATE;
			  break;
		  case JSU_ID_SAMPLE_LOADING:
		  	szUrl = JSU_SHORT_URL_SAMPLE_LOADING;
			  break;
		  case JSU_ID_SAMPLE_GA:
		  	szUrl = JSU_SHORT_URL_SAMPLE_GA;
			  break;
		  case JSU_ID_SAMPLE_SORT:
		  	szUrl = JSU_SHORT_URL_SAMPLE_SORT;
			  break;
		  case JSU_ID_SAMPLE_JQPOPUP:
		  	szUrl = JSU_SHORT_URL_SAMPLE_JQPOPUP;
			break;
          default:
            return;          
		}
		jsuGoToURL(szUrl,true);
		
	}
}

/**
 * Click on Button browserDisplay
 * @param iSampleId JSU_ID_SAMPLE_TIP,....
 */
function onclickSiteDisplay (iSampleId){
	var elSiteDisplay = getElementById2('siteDisplay');
	var szClassName = elSiteDisplay.className;
	if (szClassName == 'siteDisplaySel'){
		return; //Nothing To Do: already Selected
	}else {
		// SWITCH. Display Site
		var szUrl = "";
		switch (iSampleId){
	    case JSU_ID_SAMPLE_ALL:
	  	  szUrl = JSU_URL_SITE_SAMPLE_ALL;
		    break;
		  case JSU_ID_SAMPLE_TIP:
		  	szUrl = JSU_URL_SITE_SAMPLE_TIP;
			  break;
		  case JSU_ID_SAMPLE_VALIDATE:
		  	szUrl = JSU_URL_SITE_SAMPLE_VALIDATE;
			  break;
		  case JSU_ID_SAMPLE_LOADING:
		  	szUrl = JSU_URL_SITE_SAMPLE_LOADING;
			  break;
		  case JSU_ID_SAMPLE_GA:
		  	szUrl = JSU_URL_SITE_SAMPLE_GA;
			  break;
		  case JSU_ID_SAMPLE_SORT:
		  	szUrl = JSU_URL_SITE_SAMPLE_SORT;
			  break;
		  case JSU_ID_SAMPLE_JQPOPUP:
		  	szUrl = JSU_URL_SITE_SAMPLE_JQPOPUP;
			break;
          default:
            return;          
		}
		jsuGoToURL(szUrl,true);
	}
}



function showSampleJQPopup(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_JQPOPUP,bNewWindow);
}

function showSampleValidate(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_VALIDATE,bNewWindow);
}



/*
 * 
 */
function showSampleLoading(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_LOADING,bNewWindow);
}


/*
 * 
 */
function showSampleSort(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_SORT,bNewWindow);
}
/*
 * 
 */
function showSampleTip(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_TIP,bNewWindow);
}

/*
 * 
 */
function showSampleGA(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_GA,bNewWindow);
}

/*
 * 
 */
function showSampleJSlog(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_JSLOG,bNewWindow);
}

/*
 * 
 */
function showSampleIEPopup(bNewWindow){
	if (typeof(bNewWindow) == "undefined"){bNewWindow = isInIframe();}
	jsuGoToURL(JSU_SHORT_URL_SAMPLE_IEPOPUP,bNewWindow);
}



/**
 * 
 * @param szVideoFrame
 * @param szTitle
 * @param iWidth
 * @returns
 */
function jsuVideo(szVideoFrame,szTitle,iWidth){
	Popup(POPUP_TYPE.INFO, szVideoFrame, {bShowImg:false,iWidth:iWidth,position:{at: "top"}, szTitle: szTitle});

}

function jsuVideoTip(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	jsuGoToURL(JSU_URL_VIDEO_TIP,bNewWindow);
}


function jsuVideoLoading(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	jsuGoToURL(JSU_URL_VIDEO_LOADING,bNewWindow);
}

function jsuVideoGA(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	jsuGoToURL(JSU_URL_VIDEO_GA,bNewWindow);
}

function jsuVideoGASteps(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	jsuGoToURL(JSU_URL_VIDEO_GASTEPS,bNewWindow);
}


function jsuVideoSort(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	featureNotReady();
	/*
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_FRAME_SORT,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "Sort Table Sample"});
  */    
}




function jsuVideojslog(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	featureNotReady();
	/*
  Popup(POPUP_TYPE.INFO, JSU_VIDEO_FRAME_JSLOG,
      {bShowImg:false,iWidth:650,position:{at: "top"}, szTitle: "JSLog Sample"});
  */    
}



function jsuVideoJQPopup(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	jsuGoToURL(JSU_URL_VIDEO_JQPOPUP,bNewWindow);
}

function jsuVideoIEPopup(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	jsuGoToURL(JSU_URL_VIDEO_IEPOPUP,bNewWindow);
}


function jsuVideoValidate(bNewWindow){
	if (typeof(bNewWindow) == "undefined") {bNewWindow= true;}
	jsuGoToURL(JSU_URL_VIDEO_VALIDATE,bNewWindow);
}



/**
 * Show a FixedTip with the Link to JSU Google Analytics
 * @param event
 */
function jsuGoogleAnalList (event){
	var Fn = "[about.js jsuGoogleAnalList()] ";
	var GA_CAT_DOWN = "JSU DOWNLOAD";
	var GA_CAT_SAMPLE = "JSU SAMPLES";
	var GA_CAT_DOC = "JSU DOC";
	jslog (JSLOG_JSU,Fn + JSLOG_FUN_START);
  UnTip(event);	
  
  // Prepare arObjGoogleAnal: only shortUrl is mandatory  
  // In this case we populate all fields
  var arObjGaList = [
       {shortUrl: JSU_SHORT_URL_DOWNLOAD_FREE, longUrl: JSU_LONG_URL_DOWNLOAD_PAGE_FREE , cat:GA_CAT_DOWN,desc:'Download JSU.ZIP FREE'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_ALL, longUrl: JSU_LONG_URL_SAMPLE_ALL,cat:GA_CAT_SAMPLE, desc:'Main JSU Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_TIP, longUrl: JSU_LONG_URL_SAMPLE_TIP,cat:GA_CAT_SAMPLE, desc:'Tooltip Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_VALIDATE, longUrl: JSU_LONG_URL_SAMPLE_VALIDATE,cat:GA_CAT_SAMPLE, desc:'Validate Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_LOADING, longUrl: JSU_LONG_URL_SAMPLE_LOADING, cat:GA_CAT_SAMPLE,desc:'LoadingDiv Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_GA, longUrl: JSU_LONG_URL_SAMPLE_GA,cat:GA_CAT_SAMPLE, desc:'Google Analytics Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_JSLOG, longUrl: JSU_LONG_URL_SAMPLE_JSLOG, cat:GA_CAT_SAMPLE,desc:'JSLog Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_SORT, longUrl: JSU_LONG_URL_SAMPLE_SORT, cat:GA_CAT_SAMPLE, desc:'SortTable Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_IEPOPUP, longUrl: JSU_LONG_URL_SAMPLE_IEPOPUP, cat:GA_CAT_SAMPLE,desc:'IE Popup Sample'},
       {shortUrl: JSU_SHORT_URL_SAMPLE_JQPOPUP, longUrl: JSU_LONG_URL_SAMPLE_JQPOPUP, cat:GA_CAT_SAMPLE,desc:'JQ Popup Sample'},
       // --------------------------
       {shortUrl: JSU_SHORT_URL_DOC, longUrl: JSU_LONG_URL_DOC, cat:GA_CAT_DOC,desc:'JSU Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_TIP, longUrl: JSU_LONG_URL_DOC_TIP, cat:GA_CAT_DOC,desc:'JSU Tooltip Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_VALIDATE, longUrl: JSU_LONG_URL_DOC_VALIDATE, cat:GA_CAT_DOC,desc:'JSU Google Analytics Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_LOADING, longUrl: JSU_LONG_URL_DOC_LOADING, cat:GA_CAT_DOC,desc:'JSU Google Analytics Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_GA, longUrl: JSU_LONG_URL_DOC_GA, cat:GA_CAT_DOC,desc:'JSU Tooltip Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_JSLOG, longUrl: JSU_LONG_URL_DOC_JSLOG, cat:GA_CAT_DOC,desc:'JSU JSLog Doc'},
       {shortUrl: JSU_SHORT_URL_DOC_SORT, longUrl: JSU_LONG_URL_DOC_SORT, cat:GA_CAT_DOC,desc:'JSU SortTable Documentation'},
       {shortUrl: JSU_SHORT_URL_DOC_IEPOPUP, longUrl: JSU_LONG_URL_DOC_IEPOPUP, cat:GA_CAT_DOC,desc:'JSU IE Popup Doc'},
       {shortUrl: JSU_SHORT_URL_DOC_JQPOPUP, longUrl: JSU_LONG_URL_DOC_JQPOPUP, cat:GA_CAT_DOC,desc:'JSU JQ Popup Doc'}
       
     ];
  // show the TipFix with the List of Link
  gaShortUrlList(arObjGaList,event,{
    	bShortUrl: false,   // ShortUrl not visible at startup
    	bLongUrl: false,  // LongUrl not visible at startup
    	szTitle:'JSU Google Analitycs',
    	iWidth: 800  // Tip Width   
    });
  
  
	jslog (JSLOG_JSU,Fn + JSLOG_FUN_END);
	
}

/**
 * Show GoogleAnalyticList FloatingTip
 * @param event
 */
function jsuGoogleAnalListTip (event){
	var szTip='<div style="width:500px;" align="left">Click to show a Box with Links to the '+
     '<b>JSU Google Analytics</b>: <BR/>Number of <b>JSU Downloads</b>, Number of <b>access to Samples, Documentation,</b> ...</div>';
	
	Tip (szTip);
}


/**
 * Show GoogleAnalytic Free FloatingTip
 * @param event
 */
function jsuGoogleAnalFreeTip (event){
	var szTip='<div style="width:300px;" align="left">Click to show <b>Google Analytics Page</b><BR/>' + 
     'with the <b>Number of JSU downloads</b></div>';
	Tip (szTip);
}

/**
 * GoTo GoogleAnalytic Page relative to Free download Numbers
 * @param event
 */
function jsuGoogleAnalFree (event){
	var fn = "[about.js jsuGoogleAnalFree()] ";
	jslog (JSLOG_JSU,fn + JSLOG_FUN_START);
	UnTip();
	
	// if test mode we show last 2 hours else all time
	var szParTime = (url_par.bTest ) ? GA_PAR_TIME.two_hours:  GA_PAR_TIME.all_time;
	jslog(JSLOG_DEBUG,fn + "url_par.bTest=" + url_par.bTest + " szParTime="+ szParTime);
	gaShortUrlPage (JSU_SHORT_URL_DOWNLOAD_FREE ,
			{
		  bNewWindow: true,
		  szParTime: szParTime
		  });	
	
	jslog (JSLOG_JSU,fn + JSLOG_FUN_END);
}

/**
 * Show GoogleAnalytic Pay FloatingTip
 * @param event
 */
function jsuGoogleAnalPayTip (event){
	var szTip='<div style="width:300px;" align="left">Click to show <b>Google Analytics Page</b><BR/>' + 
     'with the number of <b>FULL JSU.zip downloads</b></div>';
	Tip (szTip);
}

/**
 * GoTo GoogleAnalytic Page relative to Pay download Numbers
 * @param event
 */
function jsuGoogleAnalPay(event){
	UnTip();
	// jsuGoToURL(JSU_SHORT_URL_DOWNLOAD_PAY +'.info' ,true);
	featureNotReady();
}



function jsuTipPlayVideo(event){
	Tip (JSU_TIP_PLAY_VIDEO);
}
function jsuTipBrowserAll(event){
	Tip (JSU_TIP_BROWSER_ALL);
}
function jsuTipBrowserIEPopup(event){
	Tip (JSU_TIP_BROWSER_IE_POPUP);
}
function jsuTipOptDemo(event){
	Tip (JSU_TIP_OPT_DEMO);
}
function jsuTipUrlOptDemo(event){
	Tip (JSU_TIP_URL_OPT_DEMO);
}
function jsuTipOptFree(event){
	Tip (JSU_TIP_OPT_FREE);
}
function jsuTipUrlOptFree(event){
	Tip (JSU_TIP_URL_OPT_FREE);
}


/**
 * 
 * @param arDis
 * @param arOpt
 * @param arUrlOpt
 * @param bDemo  {Boolean}  True for Demo, falkse for FREE Versione 
 */
function jsuOptDisable(arDis,arOpt, arUrlOpt,bDemo){
	var fn = "[about.js jsuOptDisable] ";
	jslog (JSLOG_DEBUG,fn + "JSU FREE: mark some Option as not enabled");
	for (var i=0; i< arDis.length; i++){
		var el = getElementById2(arDis[i], true);
		if (el){
  		el.disabled = true;
  		el.onmouseover = ((bDemo) ? jsuTipOptDemo : jsuTipOptFree);
  		el.onmouseout = UnTip;
		}
	}
	for (var i=0; i< arOpt.length; i++){
		var el = getElementById2(arOpt[i], true);
		if (el){
		  el.className = 'jsuParAbsent';
  		el.onmouseover = ((bDemo) ? jsuTipOptDemo : jsuTipOptFree);
  		el.onmouseout = UnTip;
		}  
	}
	for (var i=0; i< arUrlOpt.length; i++){
		var el = getElementById2(arUrlOpt[i], true);
		if (el){
  		el.onmouseover = ((bDemo) ? jsuTipUrlOptDemo : jsuTipUrlOptFree) ;
  		el.onmouseout = UnTip;
		}
	}
	
}


/**
 * Called by HTML Doc 
 * @param event
 */
function tipFixLimitInJSUFree(event){
	var szTip="//JS Code to Sort an HTML Table with JSU cSortTable: you need only one JSU API call. \n" +
	"// 1) create cSortTable related to Table with id='tbl1' \n" +
	"var cSortTbl1 = new cSortTable('tbl1', \n" +
	" //Describe how to Sort the Table Columns \n" +
	"  [{col: 'Country'},  // Default type: SORT_TYPE.STRING \n"+  	
	"   {col: 'Name'},  // Default type: SORT_TYPE.STRING \n"+
	"   // For Date we set the FMT_DATETIME_TBL1 = 'NNN dd, yyyy HH:mm:ss' \n"+
	"   {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},\n"+
	"   // For NUMBER  we use default separator (used creating the table)\n"+
	"   {col: 'Amount', type: SORT_TYPE.NUMBER} ],\n"+  		
	"   // OPTION \n" +
	"     {szSortCol:'Name',   // Current SortCol (we have already Popolated the Table order by this col)\n"+
	"     szSortDir:SORT_DIR.ASC, // Current SortDir (we have Popolated the Table in this way)	\n"+
	"     bSortApply:false   //  Table is already sorted\n"+
	"});\n" +
	"//Now you can Sort the Table by clicking on Colum Header ";
	
	TipFixCode(szTip,event,
				 {iTipWidth:1000,
			    iTipMaxHeight:600,
			    szTitle:'TipFixCode Sample - JS Code is not Hightlighted in FREE Version'
			   });	
}



/*===================================================================================
 *  Fake Click
===================================================================================*/


function fakeClick(event, anchorObj) {
  if (anchorObj.click) {
    anchorObj.click();
  } else if(document.createEvent) {
    if(event.target !== anchorObj) {
      var evt = document.createEvent("MouseEvents"); 
      evt.initMouseEvent("click", true, true, window, 
          0, 0, 0, 0, 0, false, false, false, false, 0, null); 
      var allowDefault = anchorObj.dispatchEvent(evt);
      // you can check allowDefault for false to see if
      // any handler called evt.preventDefault().
      // Firefox will *not* redirect to anchorObj.href
      // for you. However every other browser will.
    }
  }
}

/**
 * WE use an Hidden a tag, for compatibility with MObile (instead of using window.open)
 * 
 * @param szUrl
 * @param [bNewWindow] {Boolean} default true
 * @returns
 */
function jsuGoToURL(szUrl,bNewWindow){
	var fn = "[about.js jsuGoToURL()] ";
	if (bNewWindow == undefined){  bNewWindow= false;}
	try{
		jslog (JSLOG_JSU,fn + JSLOG_FUN_START);
		UnTip(); // UnTip if required
		if (bNewWindow == undefined){
			bNewWindow = true;
		}
		jslog (JSLOG_JSU,fn + "bNewWindow=" + bNewWindow);
		var aEl = document.getElementById(JSU_HREF_HIDDEN_ID);
		if (aEl == undefined){
			jslog(JSLOG_DEBUG,fn + "add " + JSU_HREF_HIDDEN_ID + " HIDDEN div and anchor to document.body");
			divHidden = document.createElement("div");
			divHidden.id = JSU_DIV_HIDDEN_ID;		
			divHidden.innerHTML = JSU_HREF_HIDDEN;
			document.body.appendChild(divHidden);
			aEl = document.getElementById(JSU_HREF_HIDDEN_ID);
		}
		aEl.href = szUrl;
		jslog (JSLOG_JSU,fn + "aEl.href=" + aEl.href);
		aEl.target = (bNewWindow)? "_blank" : "_self";
	  if (aEl.click){
			jslog (JSLOG_JSU,fn + "a.click is defined. We call it");
			aEl.click();
	  } else {
			jslog (JSLOG_JSU,fn + "a.click is NOT defined in this Browser");
	  	if(document.createEvent) {
	  		// e.g SAFARI
				jslog (JSLOG_JSU,fn + "document.createEvent is defined in this Browser. We create the event to simulate the click");
	      var evt = document.createEvent("MouseEvents"); 
	      evt.initMouseEvent("click", true, true, window, 
	          0, 0, 0, 0, 0, false, false, false, false, 0, null); 
	      var allowDefault = aEl.dispatchEvent(evt);
	      // you can check allowDefault for false to see if
	      // any handler called evt.preventDefault().
	      // Firefox will *not* redirect to anchorObj.href
	      // for you. However every other browser will.
	  	}
	  }
	}catch (e){
		jslog (JSLOG_ERR,fn + "EXCEPTION: " + e.message);
	}	
}





/**
 * Show SEc withh Error for apr not present in FREE JSU
 * 
 * @param szIdSectErr       Id of Sect Err to display
 * @param szErr
 * @param szUrlDoc  Url of Document to go to see Feature
 */
function errFreeJsu(szIdSectErr,szErr){
	var szSectMsg = '<table width="100%"><tr>' +
  '  <td class="PopupImgWarning" style="padding-top:10px;" width="80px"></td>' +
  '  <td class="tipl errSample">' + szErr + '</td>' +
  '</tr>' +
  '<tr>' +
  ' <td></td>' +
  ' <td style="color:black">' +
  '  For the details see: ' +
   '<a class="tipLink" href="javascript:showJSUVersionParLimit();">JSU Options available only in FULL Version</a>' +  
  ' </td></tr></table>';
	var elErrSect = getElementById2(szIdSectErr,true);
	elErrSect.innerHTML = szSectMsg;
	elementShow (elErrSect,true);
}

/**
 * 
 * @param szTrackingId
 */
function jsuGACreate(szTrackingId){
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create',szTrackingId , 'auto');
}



