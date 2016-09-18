// ==================================================================== CONSTANT
// var JSLOG_LEV = 7;


 var FMT_DATETIME_TBL1 = "NNN dd, yyyy HH:mm:ss";



//==================================================================== VARIABLE

var cSortTbl1= null;  // cSortTable Object for 'tbl1' (used to change settings  with cSortTable API) 
var cSortTbl2= null;  // cSortTable Object for 'tbl2' (used to change settings  with cSortTable API) 



/**
* Called when jsu is loaded
*/
function jsu_loaded(){
	var fn = "[SortSample.js jsu_loaded()] ";
	jslog (JSLOG_INFO,fn + JSLOG_FUN_START);
	
  // [Optional] Init jslog with JSLOG_LEV 
  // jslog_init(JSLOG_LEV);
	jslog (JSLOG_INFO,fn + "Init SortTable Sample");
	initSampleCmn(); // manage optional PAR show_opt, only for developer
  sortTbl1();	
  sortTbl2();	
	jslog (JSLOG_INFO,fn + JSLOG_FUN_END);
	
}


var tmo = null;   


function sortTbl1(){
	var fn = "[SortSample.js sortTbl1()] ";
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_START);
	
  getElementById2('divTbl1').innerHTML = "<div class='jsuLoading' style='height:250px'></div>";
	jslog (JSLOG_DEBUG,fn + "Start Timeout of 300 ms to show Loading Gif");

  tmo= setTimeout(sortTbl1Tmo, 300); 
  
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_END);
}

function sortTbl1Tmo(){
	var fn = "[SortSample.js sortTbl1Tmo()] ";
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_START);
  clearTimeout (tmo);
	populateTbl1();

	jslog (JSLOG_DEBUG,fn + "create cSortTable related to Table with id='tbl1'");
	
	//You need Only 1 JSU call to set the Sort 
	//1) create cSortTable related to Table with id='tbl1' 
  cSortTbl1 = new cSortTable("tbl1",
  		 [  {col: 'Country'},  // Default type: SORT_TYPE.STRING	
  		    {col: 'Name'},  // Default type: SORT_TYPE.STRING
	        // For Date we set the FMT_DATETIME_TBL1 = "NNN dd, yyyy HH:mm:ss"
	        {col:'Date', type: SORT_TYPE.DATETIME, fmt: FMT_DATETIME_TBL1},
	        // For NUMBER  we use default separator (used creating the table)
	        {col: 'Amount', type: SORT_TYPE.NUMBER} ],  		
  				 {
  					szSortCol:"Name",   // Current SortCol (we have already Popolated the Table order by this col)
  					szSortDir:SORT_DIR.ASC, // Current SortDir (we have Popolated the Table in this way)	
  					bSortApply:false   // don't need to ReSort: it is already sorted
		 });
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_END);
}


function sortTbl2(){
	var fn = "[SortSample.js sortTbl2()] ";
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_START);

	jslog (JSLOG_DEBUG,fn + "create cSortTable related to Table with id='tbl2'");
	//You need Only 1 JSU call to set the Sort 
	//1) create cSortTable related to Table with id='tbl2' 
	cSortTbl2 = new cSortTable('tbl2', 
			 //Describe how to Sort the Table Columns 
				[{col: 'Operation', type: SORT_TYPE.NONE}, // NoSort for This Col
		    {col: 'Request Number', type: SORT_TYPE.NUMBER}, 	
		    {col: 'Insert Date', type: SORT_TYPE.DATETIME, fmt: 'dd/mm/yyyy'},
		    {col: 'State'},
		    // NUMBER. We set Separator [default = locale settings]
		    {col: 'Amount', type: SORT_TYPE.NUMBER, groupSep:',',decimalSep:'.'} ],
		   // OPTION
		   { iRowSortHeader:2,  // 2 Header Rows [default=1]
				 szClassFooter: "myFooter", // class that identify tr footer 
				 // Apply SortAsc on 'InsertDate' Column 
		     szSortCol:'Insert Date', szSortDir: SORT_DIR.ASC, bSortApply: true});
		   //Now you can Sort the Table by clicking on Colum Header
	
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_END);
}


/**
 * Populate tbl1 
 */
function populateTbl1(){
	var fn = "[SortSample.js populateTbl1()] ";
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_START);
  var iRowNum =  parseInt(selectGetSelVal (getElementById2 ("selectTbl1NumRow")));
  var szTblHtml = '<table class="det" id="tbl1" border="1" width="99%" >' +
	'<tr class="header"> <th width="25%">Country</th> <th width="25%">Name</th><th width="30%">Date</th><th width="20%">Amount</th></tr>';
  var dd = new Date();	
  var fTot = 0;
	jslog (JSLOG_DEBUG,fn + "Add " + iRowNum + " Rows to Table with id='tbl1'");
  for (var i=0; i< iRowNum;i++){
    var fNum = Math.floor((Math.random() * 10000000) + 1)/100;
    var szNum = fNum.toLocaleString();
		var szDate = formatDate (dd,FMT_DATETIME_TBL1);
		var szIndZeroPad = num2StrPad(i+1,"0",5); 
	    var szTr = '<tr class="det"><td class="det">Country '+szIndZeroPad+'</td><td class="det">Name ' + szIndZeroPad + '</td><td class="det">' + szDate + '</td><td class="det">' + szNum + '</td></tr>\n';	
		szTblHtml +=  szTr ;
		dd.setDate(dd.getDate() - 1); 	
		fTot += fNum;
  }
  // Last Row with Total
  var szNum = fTot.toLocaleString();
  var szTr = '<tr class="'  + SORT_TR_CLASS_FOOTER + '"> <td colspan="3">Total</td> <td> ' + szNum + '</td></tr>\n';
  szTblHtml += (szTr + '</table>');
  getElementById2('divTbl1').innerHTML = szTblHtml;
	jslog (JSLOG_DEBUG,fn + JSLOG_FUN_END);
}	  
  


/**
 * Get current setting and Set Sort In Tbl1 or Tbl2
 */
function tblSetSort() {
	var szTbl = selectGetSelVal(getElementById2 ("selectTblSetSort"));
	var cSort = (szTbl == 'tbl1') ? cSortTbl1 : cSortTbl2;  
	// Get the Settings
	var szSortCol = selectGetSelVal(getElementById2 ("selectSortCol"));
	var iSortDir = parseInt(selectGetSelVal(getElementById2 ("selectSortDir")));
	// Set SortCol=szSortCol    
	// Example szSortCol = 'Name'         iSortDir=SORT_DIR.DESC
	cSort.setSort (szSortCol,iSortDir);
}	  



function onchangeSelectTblSetSort(){
	var arColTbl1 = ["Country","Name","Date","Amount"];
	var arColTbl2 = ["Request Number","Insert Date","State","Amount"];
	
	var szTbl = selectGetSelVal(getElementById2 ("selectTblSetSort"));
	var arCol = (szTbl == 'tbl1') ? arColTbl1 : arColTbl2;
	var selectSortCol = getElementById2 ("selectSortCol");
	selectRemoveAll (selectSortCol);
	for (var i = 0; i < arCol.length; i++){
		appendOptionLast (selectSortCol,arCol[i],arCol[i]);
	}
}


function tblGetSortCol() {
	var szTbl = selectGetSelVal(getElementById2 ("selectTblGetSort"));
	var cSort = (szTbl == 'tbl1') ? cSortTbl1 : cSortTbl2;
	var szSortCol = cSort.getSortCol ();
  showInfo ("Current SortCol: <b>" + szSortCol + "</b>");
}	  

function tblGetSortDir() {
	var szTbl = selectGetSelVal(getElementById2 ("selectTblGetSort"));
	var cSort = (szTbl == 'tbl1') ? cSortTbl1 : cSortTbl2;
	// Get Current SortDirection as  SORT_DIR.ASC or SORT_DIR.DESC   
	var iSortDir =  cSort.getSortDir ();
	// Get Current SortDirection as Label: Ascending (A..Z) or Descending (Z..Z)   
  var szSortDir =  (iSortDir == SORT_DIR.ASC) ? "Ascending (A..Z)" : "Descending (Z..A)";
  showInfo ("Current SortDir: <b>" + szSortDir + "</b>");
}	  



//===================================================================================================
//  BELOW CODE is not strictly related to the Sort feature, but it is ONLY Related to JS Code Highlight
//===========================================================================================

var JS_CODE_SORT_TBL1= "//SORT SAMPLE_1: One JSU call is enough to set the Sort: \n" +
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


var JS_CODE_SORT_TBL2= "//SORT SAMPLE_2: One JSU call is enough to set the Sort: \n" +
"// 1) create cSortTable related to Table with id='tbl2' \n" +
"var cSortTbl1 = new cSortTable('tbl2', \n" +
" //Describe how to Sort the Table Columns \n" +
"[{col: 'Operation', type: SORT_TYPE.NONE}, // NoSort for This Col \n" +
"    {col: 'Request Number', type: SORT_TYPE.NUMBER}, \n" +
"    {col: 'Insert Date', type: SORT_TYPE.DATETIME, fmt: 'dd/mm/yyyy'},\n" +
"    {col: 'State'},\n" +
"    // NUMBER. We set Separator [default = locale settings]\n" +
"    {col: 'Amount', type: SORT_TYPE.NUMBER, groupSep:',',decimalSep:'.'} ],\n" +
"   // OPTION \n" +
"   { iRowSortHeader:2,  // 2 Header Rows [default=1]\n" +
"     szClassFooter: 'myFooter', // class that identify tr footer \n"+ 
"     // Apply SortAsc on 'Insert Date' Column \n" +
"     szSortCol:'Insert Date', szSortDir: SORT_DIR.ASC, bSortApply: true\n" +
"});\n" +
"//Now you can Sort the Table by clicking on Colum Header ";


var JS_CODE_SET_SORT= "// Set SortCol and SortDirection  \n"+   
"// Example szSortCol = 'Name'         iSortDir=SORT_DIR.DESC \n" +
"cSort.setSort (szSortCol,iSortDir); "; 

var JS_CODE_GET_SORT_COL= "// Get Current SortColn  \n"+   
"var szSortCol =  cSort.getSortCol (); ";

var JS_CODE_GET_SORT_DIR= "// Get Current SortDirection:  SORT_DIR.ASC or SORT_DIR.DESC \n"+   
"var iSortDir =  cSort.getSortDir (); ";






