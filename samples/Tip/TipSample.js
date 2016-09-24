// ==================================================================== CONSTANT



//var JSLOG_LEV = 31;
var JSLOG_LEV = 0;


var CSS_SEP = "-------------------------------------------------------------------------------------------";

var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>)" ;

var JSU_TIP_README='<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="550px">' +
   '<tr class="tipTitleBig"><td>README EXAMPLE</td></tr>' +
   '<tr><td class="tipl">With <b>JSU tooltip</b> you can easily implement whatever <b>Floating HTML Tip</b><BR/>' +
   '<BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:<ul>' +
   '<li><b>Fixed</b> Tips, with URL, GIF, ...</li>' +
   '<li>Tips with <b>Video</b></li>' +
   '<li>Tips with <b>Embedded HTML Page</b></li>' +
   '<li>Tips with <b>Code Prettified</b></li>' +
   '<li>...</li>' +
   '</ul></td></tr></table>';





/**
* Called when jsu is loaded
*/
function jsu_loaded(){
  // [Optional] Init jslog with JSLOG_LEV 
  // jslog_init(JSLOG_LEV);
	initSampleCmn(); // manage optional PAR show_opt, only for developer
		
}





function sample1d(event){
	var szTip='<div>' +
  '<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="550px" align="center">' +
  ' <tr><td><img height="100px" src="' + JSU_PATH_ABOUT_IMG + 'JSUDancing.gif" /></td></tr></table>' +
  JSU_TIP_README +
   '</div>';
	Tip(szTip);
	
}



function sample2a(event){
	var szTip='<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="450">' +
	'<tr><td class="tipl">Open/Close <b>Fixed Tip</b>:<ul>' +
	' <li><b>Open</b> Tip by clicking the <b>Down Arrow</b></li>' +
	' <li><b>Close</b> Tip with <b>ESC</b>, or by clicking the <b>Up Arrow</b>, or the <b>X</b> in the TopRight of the Tip, or the Optional <b>Close</b> Button if present</li>' +
	'</ul>' +
	'You can <b>Interact with Fixed Tip using the mouse</b>. For example:<ul>' +
	'<li>Click on a URL: <a class="tipLink" href="https://www.google.it" target="_blank">Google</a></li>' +
	'<li>Select Tip Text (Copy/paste)</li>' +
	'<li>Click on Buttons <input type="button" value="Click Me" onclick="showInfo(\'Hello\');">  </li>' +
	'</ul>' + 
	'In the Tip you can display whatever HTML object, also <b>GIF</b> <BR/>' +
	'<div align="center"><img height="200px" src="' + JSU_PATH_ABOUT_IMG + 'JSUDancing.gif" /></div>' +
	'</td></tr></table>';	
	TipFix(szTip,event,{
		szTitle:'Fixed Tip Sample',
		iTipMaxHeight:1000
  });
}	
	

/**
 * TipFix with VIDEO
 * @param event
 */
function sample2b1(event){
	var JSU_TIP_VIDEO=	'<iframe width="600" height="500" src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" frameborder="0" allowfullscreen></iframe>'; 
	
	TipFix(JSU_TIP_VIDEO,event,{
		iTipWidth: 620,  
		szTitle:'Fixed Tip with a Video'
	 }
	);
}


/**
 * TipFix with HTML Page
 * @param event
 */
function sample2b2(event){
	var szTipFrame =	'<iframe width="1030" height="600" src="' + JSU_SHORT_URL_DOWNLOAD_FREE +  '" ></iframe>';
	
	TipFix(szTipFrame,event,{
		 iTipWidth: 1070,
		 szTitle:'Fixed Tip containing the FREE JSU.zip Download Page',
		 bCloseBtn : false
	 }
	
	);
}




/**
 * 
 * @param event
 */
function sample3a(event){
	var szCode="//JS Code to Sort an HTML Table with JSU cSortTable: you need only one JSU API call. \n" +
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
	
	TipFixCode(szCode,event,
			 {iTipWidth:650,
		    iTipMaxHeight:600,
		    szTitle:'Tip Sample with JS Code Hightlighted'
		   });	
}




/**
 * 
 * @param event
 */
function sample3b(event){
	var szCode ='/** \n' +
	'* Class Factorial \n' +
	'* print 100 Factorial numbers \n' +
	'*/ \n' +
	'public class Factorial   \n'+
	'{   \n'+
	'	public static void main(String[] args)   \n'+
	'	{	final int NUM_FACTS = 100;   \n'+
	'		for(int i = 0; i < NUM_FACTS; i++)   \n'+
	'			System.out.println( i + "! is " + factorial(i));   \n'+
	'	}   \n'+
	'	   \n'+
	'	public static int factorial(int n)   \n'+
	'	{	int result = 1;   \n'+
	'		for(int i = 2; i <= n; i++)   \n'+
	'			result *= i;   \n'+
	'		return result;   \n'+
	'	} \n' +
	'}';

	TipFixCode(szCode,event,
			 {iTipWidth:500,
		    iTipMaxHeight:600,
		    szTitle:'Tip Sample with Java Code Hightlighted'
		   });	
}


/**
 * 
 * @param event
 */
function sample3c(event){
	sampleCode1d(event,"SAMPLE_3 Multicode Sections Highlighted");
}



//===================================================================================================
//  BELOW CODE is not strictly related to the Sort feature, but it is ONLY Related to JS Code Highlight
//===========================================================================================


var JS_CODE_3A= '//JS and HTML Code to implement SAMPLE_3 - case a) ONLY JS \n' +
'// In This case we can use TipFixCode to Hightlight the JS Code:  \n\n'+
'// ---------------------------------------------------------------------------------  \n'+
'// 1 JS) Define in JS the jsMsgCode to show in the Tip:  \n'+
'var JSU_TIP_3A=...; \n\n' +
'// ---------------------------------------------------------------------------------  \n'+
'// 2 HTML) Add an <input> with following attributes:" \n'+	
'//<input> object with: \n' +
'//  - class="tipFixCode"  type="button" \n' + 
'//  - whatever unique id \n' + 
'//  - onclick="TipFixCode()" \n'+	
'//  - objOpt = {..} Set Option \n' +
'<input type="button" class="tipFixCode"  id="sample3a" \n' +
'   onclick="TipFixCode(TIP_TIP_3A,event,{ \n' +
'      iTipWidth:1000,  \\ preferred MaxWidth  \n' +
'      iTipMaxHeight:600, \\ preferred MaxHeight \n' +
'      szTitle:\'Tip Sample with ONLY JS Code\'});" /> '; 


var JS_CODE_3B= '//JS and HTML Code to implement SAMPLE_3 - case b) JS and HTML \n' +
'// In This case we cannot use TipFixCode to Hightlight the JS Code, because there is already HTML Code in Msg \n'+
'// Instead we use TipFixMultiCode to Show the message as Plain Text, and see the HTML TAGs  \n\n'+
'// ---------------------------------------------------------------------------------  \n'+
'// 1 JS) Define in JS the szTxt to show in the Tip (with also HTML TAGs):  \n'+
'var JSU_TIP_3B=...; \n\n' +
'// ---------------------------------------------------------------------------------  \n'+
'// 2 HTML) Add an <input> with following attributes:" \n'+	
'//<input> object with: \n' +
'//  - class="tipFixCode"  type="button" \n' + 
'//  - whatever unique id \n' + 
'//  - onclick="TipFixCode()" \n'+	
'//  - objOpt = {..} Set Option \n' +
'<input type="button" class="tipFixArrow" style="color:blue;" value="Source Code" id="sample3b" \n' +
'   onclick="TipFixMultiCode(TIP_TIP_3B,event,{ \n' +
'      iMaxRow:20,  \\ preferred Row Num  \n' +
'      iMaxCol:120, \\ preferred Col Num \n' +
'      szTitle:\'Text Box with ONLY also HTML TAGs\'});" /> '; 






function sampleCode1a(event){
	var JS_CODE_1a_HTML = '// To add the Text FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(TextMsg)" \n'+	
	'// - onmouseout="UnTip() " \n'+	
	'// In This example: \n'+
	'<input type="button" value="Text Tip" \n' + 
	'   onmouseover="Tip(\'Simple Tooltip without HTML tags.\\nNewline is working\');" \n' +
	'   onmouseout="UnTip(event);"/>';
	
	TipFixMultiCode([{szTitle:"HTML: TipSample.html", szCode: JS_CODE_1a_HTML,  bPrettify:false}],
			                event,
			                {
		                    szTitle:"SAMPLE_1 Text tip - Source Code",
		                    iTipWidth: 700
		                    });	
}

function sampleCode1b(event){
	var JS_CODE_1b_JS = '//Define in JS a constant (e.g. JSU_TIP_HTML) with the MsgHtml to show in the Tip:  \n'+
	'var JSU_TIP_HTML="<b>Simple Tooltip</b> with <i>HTML tags</i><br/>Tip (You can use <u>whatever HTML TAG</u>";';
	
	var JS_CODE_1b_HTML = '// To add whatever HTML FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(HtmlMsg);" \n'+	
	'// - onmouseout="UnTip();" \n'+	
	'// In This example: \n'+
	'<input type="text" value="HTML Tip" style="width:60px;" \n' +
  '  onmouseover="Tip(JSU_TIP_HTML);"  \n'+	
  '  onmouseout="UnTip(event);"/>'; 
	
  // 2 Codes, both contain HTML TAGS
	TipFixMultiCode([
 	      {szTitle:"JS: TipSample.js", szCode: JS_CODE_1b_JS,  bPrettify:false},
	      {szTitle:"HTML: TipSample.html", szCode: JS_CODE_1b_HTML,  bPrettify:false}
	    ],
      event,
      { szTitle:"SAMPLE_1 HTML Tip - Source Code" , 
		    iTipWidth: 900
		  } );	
}

function sampleCode1c(event){
	var JS_CODE_1c_JS = '//Define in JS a constant (e.g. JSU_TIP_README) with the MsgHtml to show in the Tip:  \n'+
	'//In this example we built an HTML Table that will be shown in the Floating Tip: \'  \n' +
	'var JSU_TIP_README=\'<table class="tip" BORDER="2" cellspacing="0" cellpadding="2" width="550">\'  \n' +
  '  \'  <tr class="tipTitleBig"><td>README EXAMPLE</td></tr>\'  \n' +
  '  \'  <tr><td class="tipl">With <b>JSU tooltip</b> you can easily implement whatever  \n' +
  '  \'     <b>Floating HTML Tip</b><BR/>\'  \n' +
  '  \'     <BR/>Moreover you can also use many other advanced <b>JSU tooltip Features</b>:\'  \n' +
  '  \'     <ul>\'  \n' +
  '  \'       <li><b>Fixed</b> Tips, with URL, GIF, ...</li>\'  \n' +
  '  \'       <li>Tips with <b>Video</b></li>\'  \n' +
  '  \'       <li>Tips with <b>JS code</b></li>\'  \n' +
  '  \'       <li>...</li>\'  \n' +
  '  \'     </ul>\'  \n' +	
  '  \'  </td></tr>\'  \n' +	
  '  \'</table>';
	
  var JS_CODE_1c_HTML = '// To add whatever HTML FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(HtmlMsg);" \n'+	
	'// - onmouseout="UnTip();" \n'+	
	'// In This example: \n'+
	'<img type="image" src="https://rawgit.com/FedericoLevis/JSU/master/images/Readme.jpg" \n'+	
	'  align="bottom" \n'+	
  '  onmouseover="Tip(JSU_TIP_README);"  \n'+	
  '  onmouseout="UnTip(event);"/>'; 

	// 2 Codes, both contain HTML TAGS
	TipFixMultiCode([
 	      {szTitle:"JS: TipSample.js", szCode: JS_CODE_1c_JS,  bPrettify:false},
	      {szTitle:"HTML: TipSample.html", szCode: JS_CODE_1c_HTML,  bPrettify:false}
	    ],
      event,
      { 
		    szTitle:"SAMPLE_1 README Tip - Source Code",
		    iTipWidth: 800 
		   } 
	 );	
	
}

/**
 * @param event
 * @param [szTitle] {String}
 * 
 */
function sampleCode1d(event, szTitle){
	
	if (typeof(szTitle) == "undefined"){
		szTitle = "SAMPLE_1 HTML Tip - Tip image jsuInfo";
	}
	var JS_CODE_1d_JS = '//Define in JS a constant (e.g. JSU_TIP_HTML) with the MsgHtml to show in the Tip:  \n'+
	'var JSU_TIP_HTML="...";'; 
	
	var JS_CODE_1d_HTML = '// To add whatever HTML FloatingTip to whatever HTML Item: \n'+	 
	'// - onmouseover="Tip(HtmlMsg);" \n'+	
	'// - onmouseout="UnTip();" \n'+	
	'// In This example we use the JSU class="jsuInfo": \n'+
	'<input type="button" class="jsuInfo" \n' +
  '  onmouseover="Tip(JSU_TIP_HTML);"  \n'+	
  '  onmouseout="UnTip(event);"/>'; 
	
	var JS_CODE_1d_CSS = '/*------------------------------------------------------------- \n' + 
	'Tip button for FloatingTip: <input class="jsuInfo" type="button" /> \n' + 
	'Used with JSU Tooltip API Tip() UnTip() - See <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html">JSU Tooltip API Doc</a> \n' + 
	'-------------------------------------------------------------*/ \n' +
	'input.jsuInfo{ /* Info img  */ \n' + 
	'  background:url(\'https://raw.github.com/FedericoLevis/JSU/master/images/info.png\') no-repeat center center; \n' + 
	'  background-color: #19E4DD; \n' + 
	'  height: 14px; \n' + 
	'  width: 5px; \n' + 
	'  margin-left: 2px;  \n' + 
	'  cursor: pointer; \n' + 
	'  border: 1px solid #000; \n' + 
	'} \n '; 
		
  //3 Codes: First 2 with HTML TAGS, CSS without HTML tags
 	TipFixMultiCode([
 	      {szTitle:"JS: TipSample.js", szCode: JS_CODE_1d_JS,  bPrettify:true},
	      {szTitle:"HTML: TipSample.html", szCode: JS_CODE_1d_HTML,  bPrettify:false},
 	      {szTitle:"CSS: jsu/core/jsu.css", szCode: JS_CODE_1d_CSS,  bPrettify:true}
	    ],
      event,
      {
 		   szTitle: szTitle,
 		   iTipWidth: 750 
 		   } 
 	 );	

}



function sampleCode3aTmp(event){
	var JS_CODE_2a_JS = '//Define in JS a constant (e.g. TIP_FIXED_SAMPLE) with the MsgHtml (with GIF, button, link,...) to show in the Tip.  \n'+
	'var TIP_FIXED_SAMPLE=...; ';
	
	var JS_CODE_2a_HTML = '// In This example we add the FixedTip to an <input> "button" with the JSU class "tipFix":  \n'+	 
	'//<input> object with: \n' +
	'//  - class="tipFix"  type="button" \n' + 
	'//  - whatever unique id \n' + 
	'//  - onclick="TipFix(szHtml,event,objOpt)" \n'+	
	'//  - objOpt = {..} Optional Option \n' +
	'<input type="button" class="tipFix"  id="tipFixSample" \n' +
	'   onclick="TipFix(TIP_FIXED_SAMPLE,event,{ \n' +
	'      iTipMaxHeight:1000, \n' +
	'      szTitle:\'Fixed Tip Sample\'});" /> '; 

	
	var JS_CODE_2a_CSS = '/*' + CSS_SEP +  '\n' + 
	'Tip button for FixedTip - ' +
	'see JSU Tooltip API TipFix()  <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html">JSU Tooltip API Doc</a> \n' + 
	'input.tipFix <input class="tipFix" type="button" style="margin-left:5px;margin-right:50px" /> ' +
	'input.tipFixUp <input style="margin-left:5px" class="tipFixUp" type="button" />   \n' + 
	CSS_SEP + '*/ \n' +
	'input.tipFix, input.tipFixUp{  /* Fields Common for input.tipFix and input.tipFixUp */  \n' + 
	'    height: 20px; \n' + 
	'    width: 13px; \n' + 
	'    border: 1px solid #000; \n' + 
	'    font-weight: bold; \n' + 
	'    cursor: pointer; \n' + 
	'    margin-left: 4px;  \n' + 
	'} \n' + 
	' \n' + 
	'input.tipFix{ /* Specific field of input.tipFix. Image= ? with arrow Down */ \n' + 
	'    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFix.png) no-repeat center center; \n' + 
	'} \n' + 
	' \n' + 
	'input.tipFixUp{ /* Specific field of input.tipFixUp. Image= ? with arrow Up   */ \n' + 
	'    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixUp.png) no-repeat center center; \n' + 
	'} \n '; 
	
  // Show 3 Code Sections : we want to prettify Msg1 and Msg3 (for Msg2 we want to see the HTML TAGS as Plain Text)
	TipFixMultiCode([
 	      {szTitle:"JS: TipSample.js", szCode: JS_CODE_2a_JS,  bPrettify:true},
	      {szTitle:"HTML: TipSample.html", szCode: JS_CODE_2a_HTML,  bPrettify:false, iRowNum:6},
	      {szTitle:"CSS: jsu/core/jsu.css", szCode: JS_CODE_2a_CSS,  bPrettify:true, iMaxHeight: 250 }
	    ],
      event,
      { 
		    szTitle:"SAMPLE_2 FixedTip with GIF, button, link - Source Code" ,
		    iTipWidth: 800} );	
}



function sampleCode2a(event){
	var szTip = '//Define the MsgHtml with whatever HTML Tag (also JPG, GIF, ...) \n'+
	  'var szTip = \'... \'; \n'+
	  '// Show The FixedTip \n'+
    'TipFix(szTip,event,{ \n'+
	  '  szTitle:\'Fixed Tip Sample\', \n'+
	  '  iTipMaxHeight:800 \n'+
    ' });';
	// 2 Codes, both contain HTML TAGS
	TipFixCode(szTip, event,
      { 
		    szTitle:"SAMPLE_2 Fixed Tip - Source Code",
		    iTipWidth: 400 
		  } 
	 );	
}  


function sampleCode2b1(event){
	var JS_CODE_2b1_JS = '/* Define in JS a constant (e.g. JSU_TIP_VIDEO) with the MsgHtml containing the <iframe> format \n'+  
	' to show the Video in the Tip.  \n'+
	' For example to show a youtube video use the relative "embed src" available in its YouTube page: \n'+
	'*/ \n' +
	'var JSU_TIP_VIDEO=	\'<iframe width="600" height="500" \n'+
	'     src="https://www.youtube.com/embed/SuYxv1z1BMg?version=3&vq=hd720&autoplay=1" \n'+
	'     frameborder="0" allowfullscreen></iframe>\';'; 
	
	var JS_CODE_2b1_HTML = '// In This example we add the Video FixedTip to an <input> "button" with the JSU class "tipFixArrow":  \n'+	 
	'//  - class="tipFix"  type="button" \n' + 
	'//  - whatever unique id \n' + 
	'//  - onclick="TipFix(szHtml,event,objOpt)" \n'+	
	'//  - objOpt = {..} Set the desired Option \n' +
	' <input type="button" class="tipFixArrow" value="Show Video" id="tipSample2b1" \n'+	
	'  onclick="TipFix(JSU_TIP_VIDEO,event,{ \n' +
	'     iTipWidth: 650,  \n' +  
	'     szTitle:\'Fixed Tip with a Video\' \n' +
	'   });" /> ';

	var JS_CODE_2b1_CSS = '/*' + CSS_SEP +  '\n' + 
		'Tip button for FixedTip with an Up/Down Arrow:\n' +
		'input.tipFixArrow: <input class="tipFixArrow" value="Example" type="button" style="margin-left:5px;margin-right:50px" /> \n' +
		'input.tipFixArrowUp: <input style="margin-left:5px" value="Example" class="tipFixArrowUp" type="button" />   \n' + 
		'Used with JSU Tooltip API TipFix() - See <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html">JSU Tooltip API Doc</a> \n' + 
		CSS_SEP + '*/ \n' +
		  'input.tipFixArrow, input.tipFixArrowUp {  /* Common fields  */ \n' + 
			'    height: 20px; \n' + 
			'    padding-right: 30px; \n' + 
			'    border: 1px solid #000; \n' + 
			'    font-weight: bold; \n' + 
			'    cursor: pointer; \n' + 
			'} \n' + 
			' \n' + 
			'input.tipFixArrow { /* specific image for tipFixArrow */  \n' + 
			'    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrow.png)\n' +
			'                no-repeat right center; \n' + 
			'} \n' + 
			'input.tipFixArrowUp { /* specific image for tipFixArrowUp */ \n' + 
			'    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrowUp.png)\n' +
			'                no-repeat right center; \n' + 
			'}'; 
				
  // 3 Codes: First 2 with HTML TAGS, CSS without HTML tags
	TipFixMultiCode([
 	      {szTitle:"JS: TipSample.js", szCode: JS_CODE_2b1_JS,  bPrettify: false},
	      {szTitle:"HTML: TipSample.html", szCode: JS_CODE_2b1_HTML,  bPrettify: false},
	      {szTitle:"CSS: jsu/core/jsu.css", szCode: JS_CODE_2b1_CSS,  bPrettify: true}
	    ],
      event,
      {
		   szTitle:"FixedTip with VIDEO - Source Code" ,
		   iTipWidth: 800,
		   iTipMaxHeight: 600
		  } 
	);	
}


function sampleCode2b2(event){
	var JS_CODE_2b2_JS = '/*Define in JS the function the call TipFix, \n'+
	'  passing the MsgHtml with the <iframe> with the Page URL  \n'+
	'  For example to show the JSU download page https://goo.gl/HnNqnM \n'+
	' */ \n ' +
	'function sample2b2(event){ \n' +
	' var szTipFrame =	\'<iframe width="1030" height="600" src="https://goo.gl/HnNqnM" ></iframe>\';  \n' +
	'	TipFix(szTipFrame,event,{ \n' +
	'		 iTipWidth: 1070, \n' +
	'		 szTitle:\'Fixed Tip containing the FREE JSU.zip Download Page\', \n' +
	'	  bCloseBtn : false \n' +
	'	 } \n' +
	'}';

	var JS_CODE_2b2_HTML = '/*In This example we add the HTMLPage FixedTip to an <input> "button" with the JSU class "tipFixArrow":  \n'+	 
	' - class="tipFix"  type="button" \n' + 
	' - whatever unique id \n' + 
	' - onclick="sample2b2(event)" \n'+
	' */ \n ' +
	' <input type="button" class="tipFixArrow" value="Show HTML Page" id="tipSample2b2" \n'+	
	'  onclick="sample2b2(event)" /> ';

	var JS_CODE_2b2_CSS = '/*' + CSS_SEP +  '\n' + 
		'Tip button for FixedTip with an Up/Down Arrow:\n' +
		'input.tipFixArrow: <input class="tipFixArrow" value="Example" type="button" style="margin-left:5px;margin-right:50px" /> \n' +
		'input.tipFixArrowUp: <input style="margin-left:5px" value="Example" class="tipFixArrowUp" type="button" />   \n' + 
		'Used with JSU Tooltip API TipFix() - See <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/tooltip.js/index.html">JSU Tooltip API Doc</a> \n' + 
		CSS_SEP + '*/ \n' +
		  'input.tipFixArrow, input.tipFixArrowUp {  /* Common fields  */ \n' + 
			'    height: 20px; \n' + 
			'    padding-right: 30px; \n' + 
			'    border: 1px solid #000; \n' + 
			'    font-weight: bold; \n' + 
			'    cursor: pointer; \n' + 
			'} \n' + 
			' \n' + 
			'input.tipFixArrow { /* specific image for tipFixArrow */  \n' + 
			'    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrow.png) no-repeat right center; \n' + 
			'} \n' + 
			'input.tipFixArrowUp { /* specific image for tipFixArrowUp */ \n' + 
			'    background: #E0E0E0 url(https://raw.github.com/FedericoLevis/JSU/master/images/tipFixArrowUp.png) no-repeat right center; \n' + 
			'}'; 
				
  // 3 Codes: First 2 with HTML TAGS, CSS without HTML tags
	TipFixMultiCode([
 	      {szTitle:"JS: TipSample.js", szCode: JS_CODE_2b2_JS,  bPrettify: false},
	      {szTitle:"HTML: TipSample.html", szCode: JS_CODE_2b2_HTML,  bPrettify: false},
	      {szTitle:"CSS: jsu/core/jsu.css", szCode: JS_CODE_2b2_CSS,  bPrettify: true}
	    ],
      event,
      { 
		    szTitle:"SAMPLE_2 FixedTip with Embedded HTML Page - Source Code" , 
		    iTipWidth: 850,
			  iTipMaxHeight: 600
		  } );	
}



function sampleCode3a(event){
  var szTip = '// Prepare szCode Msg with the code to be displayed  Hightlighted \n' +
  'var szCode = \'...\'; \n' +
  '  // show the code Hightlighted \n' +
  '  TipFixCode(szCode,event, \n' +
  '		 {iTipWidth:1000, \n' +
  '	    iTipMaxHeight:600, \n' +
  '	    szTitle:\'Tip Sample with JS Code Hightlighted\' \n' +
  '	   });';
  TipFixCode(szTip,event,{
  	 szTitle:"JS Code of SAMPLE 3a or 3b"
  	 });
}


function sampleCode3c(event){
    var szTip = '// Prepare 3 szCode Msg with the 3 code sections to be disaplayed together\n' +
    'var JS_CODE_2a_JS = \'...\'; \n' +
    'var JS_CODE_2a_HTML = \'...\'; \n' +
    'var JS_CODE_2a_CSS = \'...\'; \n' +
    '// Show 3 Code Sections: \n' +
    '//  - Msg1 and Msg3 prettified  \n' + 
    '//  - Msg2 not prettified to see the HTML TAGS as Plain Text  \n' +
    '	TipFixMultiCode([ \n' +
    ' 	      {szTitle:"JS: TipSample.js", szCode: JS_CODE_2a_JS,  bPrettify:true}, \n' +
    '	      {szTitle:"HTML: TipSample.html", szCode: JS_CODE_2a_HTML,  bPrettify:false, iRowNum:6}, \n' +
    '	      {szTitle:"CSS: jsu/core/jsu.css", szCode: JS_CODE_2a_CSS,  bPrettify:true, iMaxHeight: 250 } \n' +
    '	    ], \n' +
    '      event, \n' +
    '      {szTitle:"FixedTip with GIF, button, link - Source Code" , iTipWidth: 1100} );	';
    TipFixCode(szTip,event,{
    	 szTitle:"JS Code of SAMPLE 3c"
    });
  
  
}


