/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/cSortTable.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>SortTable Doc:</b>   <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/SortTable.html" target="_self">JSU SortTable Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>     SortTable Class <BR/>   
<b>REQUIRE:</b>          JSU: jsu.js   <BR/>
<b>First Version:</b>     ver 1.0 - Feb 2010  <BR/>
<b>Current Version:</b>   JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Oct-26  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
var SORT_TYPE={NONE:"NONE",STRING:"STRING",NUMBER:"NUMBER",DATETIME:"DATETIME"},SORT_DIR={ASC:"-1",DESC:"1",NONE:"NONE"},SORT_DEF_COGNOS=!1,SORT_DEF_COGNOS_GLOBAL_SORT_EN=!1,SORT_DEF_FMT_DATETIME="MM/dd/yyyy HH:mm:ss",SORT_DEF_PATH_IMG=JSU_PATH_IMG,SORT_DEF_IND=0,SORT_DEF_DIR=SORT_DIR.ASC,SORT_DEF_APPLY=!1,SORT_TR_CLASS_FOOTER="footer",SORT_CLASS_FOOTER_COGNOS="summary",SORT_INFO_ABSENT="",SORT_IMG_NONE_FAST="fast_sort_none.jpg",SORT_IMG_ASC_FAST="fast_sort_asc.jpg",SORT_IMG_DESC_FAST="fast_sort_desc.jpg",SORT_IMG_NONE_SLOW="slow_sort_none.jpg",SORT_IMG_ASC_SLOW="slow_sort_asc.jpg",SORT_IMG_DESC_SLOW="slow_sort_desc.jpg",SORT_IMG_NONE_DIS="disabled_sort_none.jpg",SORT_IMG_ASC_DIS="disabled_sort_asc.jpg",SORT_IMG_DESC_DIS="disabled_sort_desc.jpg",SORT_IMG_WAIT="wait.jpg",SORT_ATTR_SORT_DIR="SortDirCur",SORT_TMO_WAIT_MS=50,cSortTableElCur=null,SORT_CLASSNAME="sortimg"
cSortTable=function(t,o,r){var e="[cSortTable] "
if(jslog(JSLOG_JSU,e+JSLOG_FILE_START),this.iTblRowPerPage=0,this.iRowSortHeader=1,this.iRowHeader=1,this.bCognos=SORT_DEF_COGNOS,this.bCognosGlobalSort=SORT_DEF_COGNOS_GLOBAL_SORT_EN,this.bSortEn=!0,this.szFmtDatetime=SORT_DEF_FMT_DATETIME,this.szPathImg=SORT_DEF_PATH_IMG,this.szClassFooter=SORT_TR_CLASS_FOOTER,this.szSortHiddenId="",this.szSortPathNone="",this.szSortPathAsc="",this.szSortPathDesc="",this.szSortPathWait="",this.bMultiPage=!1,this.imgTemp=document.createElement("img"),this.arSortImg=new Array,this.tempTextSep=document.createTextNode(" "),this.szSortDecSep="",this.szSortDecSepLocale="",this.szSortGroupSepLocale=localeGetGroupSep(),this.szSortDecSepLocale=localeGetDecimalSep(),jslog(JSLOG_JSU,e+"this.szSortDecSepLocale= "+this.szSortDecSepLocale+"  this.szSortGroupSepLocale = "+this.szSortGroupSepLocale),this.iSortColInd=SORT_DEF_IND,this.szSortDir=SORT_DEF_DIR,this.szSortCol="",this.bNoStartupSortIco=!1,o.length>0&&(this.szSortCol=void 0!=o[0].col?o[0].col:""),this.selectSortCol=0,this.selectSortDir=0,this.inputSortCol=0,this.inputSortDir=0,this.inputSortHiddenCol=0,this.imgSortCur=null,this.szSortHintAsc="",this.szSortHintDesc="",this.iTblFooterRec=0,jslog(JSLOG_JSU,e+"IN szElId="+t),jslogObj(JSLOG_JSU,e+"IN arSortCol:",o,!0),void 0!=r&&(jslogObj(JSLOG_JSU,e+"objOpt",r),void 0!=r.iRowHeader&&(this.iRowHeader=r.iRowHeader,jslog(JSLOG_JSU,e+"OPTION: iRowHeader="+this.iRowHeader),void 0==r.iRowSortHeader&&(r.iRowSortHeader=r.iRowHeader)),void 0!=r.iRowSortHeader&&(this.iRowSortHeader=r.iRowSortHeader,jslog(JSLOG_JSU,e+"OPTION: iRowSortHeader="+this.iRowSortHeader),void 0==r.iRowHeader&&(r.iRowHeader=r.iRowSortHeader,this.iRowHeader=r.iRowHeader)),void 0!=r.iTblRowPerPage&&(this.iTblRowPerPage=r.iTblRowPerPage,jslog(JSLOG_JSU,e+"OPTION: iTblRowPerPage="+this.iTblRowPerPage)),void 0!=r.bCognos&&(this.bCognos=r.bCognos,jslog(JSLOG_JSU,e+"OPTION: bCognos="+this.bCognos)),void 0!=r.bCognosGlobalSort&&(this.bCognosGlobalSort=r.bCognosGlobalSort,jslog(JSLOG_JSU,e+"OPTION: bCognosGlobalSort="+this.bCognosGlobalSort)),void 0!=r.szFmtDatetime&&(this.szFmtDatetime=r.szFmtDatetime,jslog(JSLOG_JSU,e+"OPTION: szFmtDatetime="+this.szFmtDatetime)),void 0!=r.szPathImg&&(this.szPathImg=r.szPathImg,jslog(JSLOG_JSU,e+"OPTION: szPathImg="+this.szPathImg)),void 0!=r.szClassFooter&&(this.szClassFooter=r.szClassFooter,jslog(JSLOG_JSU,e+"OPTION: szClassFooter="+this.szClassFooter)),void 0!=r.bNoStartupSortIco&&(this.bNoStartupSortIco=r.bNoStartupSortIco,jslog(JSLOG_JSU,e+"OPTION: bNoStartupSortIco="+this.bNoStartupSortIco))),this.tmoSortApply=null,this.bCognos&&(this.szClassFooter=SORT_CLASS_FOOTER_COGNOS,jslog(JSLOG_JSU,e+"For COGNOS ALWAYS szClassFooter="+this.szClassFooter)),this.bCognos?this.tblSort=getElementByTag2("TABLE","tblSort",!1):this.tblSort=getElementById2(t,!0),0!=this.tblSort){var S=0
if(this.iTblFooterRec=0,void 0!=this.tblSort&&void 0!=this.tblSort.rows){for(var s=this.iRowSortHeader;s<this.tblSort.rows.length;s++){var i=this.tblSort.rows[s].firstChild.type,l=!1,a=this.tblSort.rows[s].firstChild.outerHTML,n=-1
void 0!=a&&(n=a.indexOf('type="'+this.szClassFooter+'"'),n>=0&&(l=!0))
var _=this.tblSort.rows[s].className
this.bCognos&&(_=i)
var h=l||void 0!=_&&_.indexOf(this.szClassFooter)>=0
"columnTitle"==i||h||S++,h&&(jslog(JSLOG_JSU,"Rec ["+s+"]  IS FOOTER"),this.bCognos&&(this.tblSort.rows[s].className=this.szClassFooter),this.iTblFooterRec++)}jslog(JSLOG_JSU,e+"TABLE iTblRecNum="+S+" - iRowHeader="+this.iRowHeader+" iRowSortHeader="+this.iRowSortHeader+"  iTblFooterRec="+this.iTblFooterRec+"  (rows="+this.tblSort.rows.length+")"),this.bCognos&&(this.bMultiPage=0!=this.iTblRowPerPage&&S>=this.iTblRowPerPage||isMultiPage()),jslog(JSLOG_JSU,e+"this.bMultiPage="+this.bMultiPage)}this.iTblRecNum=S
var T=""
if(this.bMultiPage?(this.szSortPathNone=this.szPathImg+(this.bCognosGlobalSort?SORT_IMG_NONE_SLOW:SORT_IMG_NONE_DIS),this.szSortPathAsc=this.szPathImg+(this.bCognosGlobalSort?SORT_IMG_ASC_SLOW:SORT_IMG_ASC_DIS),this.szSortPathDesc=this.szPathImg+(this.bCognosGlobalSort?SORT_IMG_DESC_SLOW:SORT_IMG_DESC_DIS),T=SORT_HINT_REC_NUM_PART.replace("XXX",S),this.bCognosGlobalSort?(this.szSortHintAsc=SORT_HINT_GLOBAL_ASC+"\n\n"+T,this.szSortHintDesc=SORT_HINT_GLOBAL_DESC+"\n\n"+T):(this.szSortHintAsc=SORT_HINT_DISABLED+"\n\n"+T,this.szSortHintDesc=this.szSortHintAsc)):(this.szSortPathNone=this.szPathImg+SORT_IMG_NONE_FAST,this.szSortPathAsc=this.szPathImg+SORT_IMG_ASC_FAST,this.szSortPathDesc=this.szPathImg+SORT_IMG_DESC_FAST,T=SORT_HINT_REC_NUM_ALL.replace("XXX",S),this.szSortHintAsc=SORT_HINT_ASC+"\n\n"+T,this.szSortHintDesc=SORT_HINT_DESC+"\n\n"+T),this.szSortPathWait=this.szPathImg+SORT_IMG_WAIT,jslog(JSLOG_JSU,e+"this.szSortPathNone="+this.szSortPathNone+" this.szSortPathAsc="+this.szSortPathAsc+" this.szSortPathDesc="+this.szSortPathDesc),this.bCognos){jslog(JSLOG_JSU,e+"Get select of SORT BOX Otions (e.g for Cognos)")
var O=getFW()
this.selectSortCol=O._oLstChoices_SelectSortCol,this.selectSortCol._cSortTableEl=this,this.selectSortCol.onchange=this.onchangeSortCol,this.selectSortDir=O._oLstChoices_SelectSortDir,this.selectSortDir._cSortTableEl=this,this.selectSortDir.onchange=this.onchangeSortDir,selectRemoveExtraItems(this.selectSortDir),this.inputSortCol=O._textEditBox_SortCol,this.inputSortDir=O._textEditBox_SortDir,this.inputSortHiddenCol=O._textEditBox_SortHiddenCol}jslog(JSLOG_JSU,e+"populate this.arcSortItem"),this.arcSortItem=new Array
var c=0
this.selectSortCol&&selectRemoveAll(this.selectSortCol)
for(var g=0;g<o.length;g++)void 0==o[g].col&&(o[g].col=g+1),void 0==o[g].type&&(o[g].type=SORT_TYPE.STRING),this.selectSortCol&&appendOptionLast(this.selectSortCol,o[g].col,o[g].col),c++
if(this.arSortCol=o,this.inputSortHiddenCol){var C=this.inputSortHiddenCol.value
if(jslog(JSLOG_JSU,"szSortHidden = "+C),C.length){var d=C.split(",")
this.sorttableSetHiddenCol(d)}}if(this.selectSortCol&&(jslog(JSLOG_JSU,"Align Current Sort Selection to Visible Fields"),selectSelValue(this.selectSortCol,this.inputSortCol.value),selectSelValue(this.selectSortDir,this.inputSortDir.value),jslog(JSLOG_JSU,"Init Global Val form Cognos Hidden Fields"),this.iSortColInd=this.selectSortCol.selectedIndex,this.szSortDir=this.inputSortDir.value,this.szSortCol=this.inputSortCol.value),this.tblSort&&this.sortInit(),void 0!=r&&(r.szSortCol||r.szSortDir)){var R=void 0!=r.bSortApply&&r.bSortApply
jslog(JSLOG_JSU,e+"Obtional Initial Sort is SET: SortCol="+r.szSortCol+" szSortDir="+r.szSortDir+" bSortApply="+R),this.setSort(r.szSortCol,r.szSortDir,R)}this.bMultiPage&&!this.bCognosGlobalSort&&this.sorttableDisableSort(),jslog(JSLOG_JSU,e+JSLOG_FILE_END)}},cSortTable.prototype.setSort=function(t,o,r){var e="[cSortTable.setSort] "
jslog(JSLOG_JSU,e+JSLOG_FUN_START),void 0!=r&&null!=r||(r=!0),jslog(JSLOG_JSU,e+"IN szSortCol="+t+" szSortDir="+o+" ("+SORT_DIR.ASC+"=ASC  "+SORT_DIR.DESC+"=DESC )  bResortTable="+r)
var S=this.iSortColInd
if(void 0!=t){var S=this.getSortIndFromSortCol(t)
if(0>S)return}jslog(JSLOG_JSU,e+"iSortColInd="+S)
var s=this.arSortImg[S]
if(r){var i=o==SORT_DIR.ASC?SORT_DIR.DESC:SORT_DIR.ASC
jslog(JSLOG_JSU,"simulate having for iSortColInd="+S+" The szSortDirTmp="+i+"to Obtain with resortTable the desired new szSortDir="+o),s.setAttribute(SORT_ATTR_SORT_DIR,i),this.resortTable(s)}else{var l=s.parentNode,a=l.cellIndex
a!=this.iSortColInd&&0!=this.imgSortCur&&(jslog(JSLOG_JSU,"Changed Sort column from "+this.iSortColInd+" to "+a+"   --> Reset Previous Img"),this.imgSortCur.setAttribute(SORT_ATTR_SORT_DIR,SORT_DIR.NONE),this.imgSortCur.setAttribute("title",this.szSortHintDesc),this.imgSortCur.setAttribute("src",this.szSortPathNone)),this.iSortColInd=a,this.szSortCol=this.arSortCol[this.iSortColInd].col,jslog(JSLOG_JSU,"SET iSortColInd = "+this.iSortColInd+"  szSortCol="+this.szSortCol),this.imgSortCur=s,s.setAttribute(SORT_ATTR_SORT_DIR,o),this.szSortDir=o,o==SORT_DIR.ASC?(s.setAttribute("title",this.szSortHintAsc),s.setAttribute("src",this.szSortPathAsc)):(s.setAttribute("title",this.szSortHintDesc),s.setAttribute("src",this.szSortPathDesc))}jslog(JSLOG_JSU,e+JSLOG_FUN_END)},cSortTable.prototype.sorttableSetHiddenCol=function(t){var o="[cSortTable.sorttableSetHiddenCol] "
jslog(JSLOG_JSU,o+JSLOG_FUN_START),arTrace(JSLOG_JSU,t,o+"ArColId")
var r=this.selectSortCol.selectedIndex
if(jslog(JSLOG_JSU,o+"this.selectSortCol iSelInd="+r),0>r)return void jslog(JSLOG_JSU,o+"return (iSelInd <0)")
jslog(JSLOG_JSU,o+"Prepare this.szSortHiddenId with the ColId to Hide")
var e=this.selectSortCol[r].value
jslog(JSLOG_JSU,o+"szSortIdCur="+e)
var S=!1,s=t.length
this.szSortHiddenId=""
for(var i=0;s>i;i++)this.szSortHiddenId+=t[i],this.szSortHiddenId+=",",t[i]==e&&(S=!0)
jslog(JSLOG_JSU,o+"this.szSortHiddenId ="+this.szSortHiddenId),selectRemoveAllOption(this.selectSortCol)
for(var i=0;i<this.arSortCol.length;i++){var l=this.arSortCol[i],a=l.col,n=a,_=-1==this.szSortHiddenId.indexOf(a+",")
_&&appendOptionSelLast(this.selectSortCol,n,a,a==e)}this.inputSortHiddenCol.value=this.szSortHiddenId,S&&(jslog(JSLOG_JSU,o+"Previous SortCol Has been Hidden --> Set DefaultSort (First Col Asc)"),this.selectSortCol.selectedIndex=0,this.selectSortDir.selectedIndex=0),jslog(JSLOG_JSU,o+JSLOG_FUN_END)},cSortTable.prototype.getSortCol=function(){return this.szSortCol},cSortTable.prototype.getSortDir=function(){return this.szSortDir},cSortTable.prototype.getSortDirLabel=function(){return this.selectSortDir?selectGetSelText(this.selectSortDir):this.szSortDir},cSortTable.prototype.sortInit=function(){var t="[cSortTable.sortInit] "
jslog(JSLOG_JSU,t+JSLOG_FUN_START),jslog(JSLOG_JSU,t+JSLOG_FUN_START)
if(0==this.tblSort)return jslog(JSLOG_JSU,t+"Nothing to DO: there is NOT Table to Sort in this Page",JSLOG_FUN_START)
if(jslog(JSLOG_JSU,"CURRENT SORT: iSortColInd="+this.iSortColInd+"  szSortColCur="+this.szSortCol+"  szSortDirCur="+this.szSortDir),this.tblSort.rows&&this.tblSort.rows.length>=this.iRowSortHeader)var o=this.tblSort.rows[this.iRowSortHeader-1]
if(!o)return void jslog(JSLOG_JSU,t+"Table without Rows to Sort. iRowSortHeader="+this.iRowSortHeader+"  NumRow="+this.tblSort.rows.length)
var r=o.childNodes.length,e=0
if(this.inputSortHiddenCol){for(var S=this.inputSortHiddenCol.value,s=S.split(","),i=0;i<s.length;i++)""!=s[i]&&null!=s[i]&&e++
jslog(JSLOG_JSU,t+"numColHidden="+e)}var l=this.arSortCol.length,a=l>r?r:l-e
jslog(JSLOG_JSU,t+"iColVis="+r+"  iSortColNum="+l+"  ---> iColSort="+a),jslog(JSLOG_JSU,t+" Prepare icons (arSortImg), events and set Current Sort")
for(var n=0;a>n;n++){var _=o.cells[n],h=this.tempTextSep.cloneNode(!1),T=this.imgTemp.cloneNode(!1)
T.className=SORT_CLASSNAME,T._cSortTableEl=this,T.onclick=this.onclickSortImg
var O=this.szSortDir,c=this.szSortHintDesc,g=this.szSortPathNone
n!=this.iSortColInd||this.bNoStartupSortIco?O=SORT_DIR.NONE:(this.imgSortCur=T,this.szSortDir==SORT_DIR.ASC?(g=this.szSortPathAsc,c=this.szSortHintAsc):(g=this.szSortPathDesc,c=this.szSortHintDesc)),this.bNoStartupSortIco=!1,T.setAttribute(SORT_ATTR_SORT_DIR,O),T.setAttribute("src",g),T.setAttribute("title",c),this.arSortCol[n].type!=SORT_TYPE.NONE&&(jslog(JSLOG_JSU,t+"ADD to Col  ["+n+"] the SORT IMG - Attribute ("+SORT_ATTR_SORT_DIR+") = "+O),_.appendChild(h),_.appendChild(T)),this.arSortImg[n]=T}jslog(JSLOG_JSU,t+JSLOG_FUN_END)},cSortTable.prototype.sorttableDisableSort=function(){var t="[cSortTable.sorttableDisableSort] "
if(jslog(JSLOG_JSU,t+JSLOG_FUN_START),0==this.tblSort)return void jslog(JSLOG_JSU,t+"tblSort NOT VISIBLE"+JSLOG_FUN_END)
var o=this.tblSort.getElementsByTagName("IMG")
if(null==o||!o.length)return void jslog(JSLOG_JSU,t+"ImgList is Empty. Nothing to do"+JSLOG_FUN_END)
this.bSortEn=!1
for(var r=0;r<o.length;r++){var e=o[r]
jslog(JSLOG_JSU,t+"className="+e.className),e.className==SORT_CLASSNAME&&(jslog(JSLOG_JSU,t+"Disable ImgEl["+r+"]"),e.setAttribute("title",this.szSortHintAsc))}jslog(JSLOG_JSU,t+JSLOG_FUN_END)},cSortTable.prototype.ts_sort_numeric=function(t,o){var r=cSortTableElCur.iSortColInd,e=t.cells[r],S=o.cells[r]
if(void 0==S||void 0==e)return cSortTableElCur.szSortDirCur==SORT_DIR.ASC?1:-1
if(aNumStr=ts_getInnerText(e),bNumStr=ts_getInnerText(S),0==aNumStr.length)return-1
if(0==bNumStr.length)return 1
aNum=str2Num(aNumStr,cSortTableElCur.szSortGroupSep,cSortTableElCur.szSortDecSep),bNum=str2Num(bNumStr,cSortTableElCur.szSortGroupSep,cSortTableElCur.szSortDecSep)
var s=0
return s=aNum-bNum},cSortTable.prototype.ts_sort_datetime=function(t,o){var r=cSortTableElCur.iSortColInd,e=t.cells[r],S=o.cells[r]
if(void 0==S||void 0==e)return this.szSortDir==SORT_DIR.ASC?1:-1
var s=ts_getInnerText(e),i=ts_getInnerText(S),l=getTimeFromFormat(s,cSortTableElCur.szFmtDatetime),a=getTimeFromFormat(i,cSortTableElCur.szFmtDatetime)
return l==a?0:a>l?-1:1},cSortTable.prototype.ts_sort_currency=function(t,o){var r=cSortTableElCur.iSortColInd,e=t.cells[r],S=o.cells[r]
return void 0==S||void 0==e?this.szSortDir==SORT_DIR.ASC?1:-1:(aa=ts_getInnerText(e).replace(/[^0-9.]/g,""),bb=ts_getInnerText(S).replace(/[^0-9.]/g,""),parseFloat(aa)-parseFloat(bb))},cSortTable.prototype.ts_sort_caseinsensitive=function(t,o){var r="[cSortTable.ts_sort_caseinsensitive] ",e=cSortTableElCur.iSortColInd,S=t.cells[e],s=o.cells[e]
if(void 0==s||void 0==S)return jslog(JSLOG_JSU,r+" FOOTER ROW"),this.szSortDir==SORT_DIR.ASC?1:-1
aa=ts_getInnerText(S).toLowerCase(),bb=ts_getInnerText(s).toLowerCase()
var i=0
return i=aa==bb?0:aa<bb?-1:1},cSortTable.prototype.getSortId=function(t){for(var o="[cSortTable.sorttable.getSortId] ",r=-1,e=0;e<this.arSortCol.length;e++){var S=this.arSortCol[e].col
if(-1==this.szSortHiddenId.indexOf(S+",")&&r++,r==t)return S}return showErr(o+"SW ERROR: this.iSortColInd="+this.iSortColInd+" NOT Visible  iColInd="+t,1)},cSortTable.prototype.getSortObj=function(t){for(var o="[cSortTable.getSortObj] ",r=this.getSortId(t),e=0;e<this.arSortCol.length;e++){var S=this.arSortCol[e]
if(S.col==r)return S}return showErr(o+"SW ERROR: this.iSortColInd="+this.iSortColInd+" NOT Found SortId="+r,1)},cSortTable.prototype.getSortIndFromSortCol=function(t){for(var o="[cSortTable.sorttable.getSortIndFromSortCol] ",r=0;r<this.arSortCol.length;r++){var e=this.arSortCol[r]
if(e.col==t)return r}return showErr(o+"SW ERROR: szSortCol="+t+" NOT FOUND",1)},cSortTable.prototype.resortTable=function(t){var o="[cSortTable.resortTable] "
jslog(JSLOG_JSU,o+JSLOG_FUN_START)
var r=t.parentNode,e=r.cellIndex
jslog(JSLOG_JSU,"Clicked on column="+e+"  Previous SortCol="+this.iSortColInd),e!=this.iSortColInd&&0!=this.imgSortCur&&void 0!=this.imgSortCur&&(jslog(JSLOG_JSU,"Changed Sort column from "+this.iSortColInd+" to "+e+"   --> Reset Previous Img"),this.imgSortCur.setAttribute(SORT_ATTR_SORT_DIR,SORT_DIR.NONE),this.imgSortCur.setAttribute("title",this.szSortHintDesc),this.imgSortCur.setAttribute("src",this.szSortPathNone)),this.iSortColInd=e,this.szSortCol=this.arSortCol[this.iSortColInd].col,jslog(JSLOG_JSU,"SET iSortColInd = "+this.iSortColInd+"  szSortCol="+this.szSortCol),this.imgSortCur=t
var S=t.getAttribute(SORT_ATTR_SORT_DIR)
jslog(JSLOG_JSU,o+"szAttrSortDir="+S),S==SORT_DIR.ASC?(jslog(JSLOG_JSU,o+"Previous Sort was ASC - TOGGLE to Dir=DESC"),this.szSortDir=SORT_DIR.DESC):(jslog(JSLOG_JSU,o+"Previous Sort was NOT ASC- SET Dir=ASC"),this.szSortDir=SORT_DIR.ASC),t.setAttribute("src",this.szSortPathWait),t.setAttribute("title","Please Wait..."),cSortTableElCur=this,this.tmoSortApply=setTimeout(this.sortApply,SORT_TMO_WAIT_MS),jslog(JSLOG_JSU,o+JSLOG_FUN_END)},cSortTable.prototype.headSetSortLbl=function(){var t="[cSortTable.headSetSortLbl] "
jslog(JSLOG_JSU,t+JSLOG_FUN_START)
var o=getElementById2("spanHeaSortCol",!1),r=getElementById2("spanHeaSortDir",!1)
if(0==o||0==r)return jslog(JSLOG_JSU,t+"Nothing to DO: SORTHeader is not present "+JSLOG_FUN_END)
var e=this.getSortCol(),S=this.getSortDirLabel()
spanSetText(o,e),spanSetText(r,S),jslog(JSLOG_JSU,t+JSLOG_FUN_END)},cSortTable.prototype.sortApply=function(){var t,o="[cSortTable.sortApply] ",r=new Date,e=cSortTableElCur
if(clearTimeout(e.tmoSortApply),jslog(JSLOG_JSU,o+JSLOG_FUN_START),jslog(JSLOG_JSU,o+"Doing SORT:   Current iSortColInd="+cSortTable.iSortColInd+" szSortDir="+cSortTable.szSortDir+" bMultiPage="+cSortTable.bMultiPage),e.szSortCol=e.getSortId(e.iSortColInd),e.selectSortCol&&(selectSelValue(e.selectSortCol,e.szSortCol),selectSelValue(e.selectSortDir,e.szSortDir),jslog(JSLOG_JSU,o+"save current szSortColCur="+e.szSortCol+"  and  szSortDirCur="+e.szSortDir),e.inputSortCol.value=e.szSortCol,e.inputSortDir.value=e.szSortDir),e.bCognosGlobalSort&&e.bMultiPage)return jslog(JSLOG_JSU,o+"============= GLOBAL SORT ===="),cognosActionFINISH()
jslog(JSLOG_JSU,o+"============= LOCAL SORT ====")
var S=e.imgSortCur.parentNode,s=S.cellIndex
jslog(JSLOG_JSU,o+"Clicked on column="+s+"  Previous SortCol="+e.iSortColInd)
var i=e.tblSort,l=e.getSortObj(e.iSortColInd)
if(jslog(JSLOG_JSU,"NEW Sort for cSortTableEl.iSortColInd="+e.iSortColInd+" SortId="+e.getSortId(e.iSortColInd)),jslogObj(JSLOG_JSU,"objSortCol:",l),l.type==SORT_TYPE.NUMBER)t=e.ts_sort_numeric,e.szSortGroupSep=void 0==l.groupSep?e.szSortGroupSepLocale:l.groupSep,e.szSortDecSep=void 0==l.decimalSep?e.szSortDecSepLocale:l.decimalSep,jslog(JSLOG_JSU,"sortfn = ts_sort_numeric - Using szSortGroupSep="+e.szSortGroupSep+"  szSortDecSep="+e.szSortDecSep)
else if(l.type==SORT_TYPE.STRING)t=e.ts_sort_caseinsensitive
else{if(l.type!=SORT_TYPE.DATETIME)return showErr(o+"SW ERROR: Invalid SortType="+szSortType,1)
t=e.ts_sort_datetime,e.szFmtDatetime=void 0==l.fmt?SORT_DEF_FMT_DATETIME:l.fmt,jslog(JSLOG_JSU,"sortfn = ts_sort_datetime - Using cSortTableEl.szFmtDatetime="+e.szFmtDatetime)}jslog(JSLOG_JSU,"Set the attribute in the Image to indicate the direction")
var a,n
e.szSortDir==SORT_DIR.ASC?(a=e.szSortPathAsc,n=e.szSortHintAsc):(a=e.szSortPathDesc,n=e.szSortHintDesc),jslog(JSLOG_JSU,o+"IMG setAttribute ("+SORT_ATTR_SORT_DIR+") = "+e.szSortDir),e.imgSortCur.setAttribute(SORT_ATTR_SORT_DIR,e.szSortDir),e.imgSortCur.setAttribute("src",a),e.imgSortCur.setAttribute("title",n)
var _=new Array
new Array
jslog(JSLOG_JSU,o+"Prepare newRow with the Row to Sort - We skip First HEADER Rows="+e.iRowHeader)
for(var h=e.iRowHeader,T=0;h<i.rows.length;h++,T++)_[T]=i.rows[h]
for(jslog(JSLOG_JSU,"Start Sort Ascending..."),cSortTableElCur=e,_.sort(t),jslog(JSLOG_JSU,"Sort Ascending done"),e.szSortDir==SORT_DIR.DESC&&(_.reverse(),jslog(JSLOG_JSU,"Reverse done - Sort Descending Done")),T=0;T<_.length;T++){var O=_[T].className,c=void 0!=O&&O.indexOf(e.szClassFooter)>=0
c||i.tBodies[0].appendChild(_[T])}for(T=0;T<_.length;T++){var O=_[T].className,c=void 0!=O&&O.indexOf(e.szClassFooter)>=0
c&&i.tBodies[0].appendChild(_[T])}e.bCognos&&e.headSetSortLbl(),jslogElapsedTime(JSLOG_JSU,o+"DONE in ",r),jslog(JSLOG_JSU,o+JSLOG_FUN_END)},cSortTable.prototype.getParent=function(t,o){return null==t?null:1==t.nodeType&&t.tagName.toLowerCase()==o.toLowerCase()?t:this.getParent(t.parentNode,o)},cSortTable.prototype.onchangeSortCol=function(t){var o="[cSortTable.onchangeSortCol] "
jslog(JSLOG_JSU,o+JSLOG_FUN_START)
var r=cSortTable.getSortTableElFromEv(o,t),e=selectGetSelVal(r.selectSortCol)
jslog(JSLOG_JSU,o+"Save into this.inputSortCol the selected szSortId="+e),r.inputSortCol.value=e,jslog(JSLOG_JSU,o+JSLOG_FUN_END)},cSortTable.prototype.onchangeSortDir=function(t){var o="[cSortTable.onchangeSortDir] "
jslog(JSLOG_JSU,o+JSLOG_FUN_START)
var r=cSortTable.getSortTableElFromEv(o,t),e=selectGetSelVal(r.selectSortDir)
jslog(JSLOG_JSU,o+"Save into this.inputSortDir the selected iSortDir="+e),r.inputSortDir.value=e,jslog(JSLOG_JSU,o+JSLOG_FUN_END)},cSortTable.prototype.onclickSortImg=function(t){var o="[cSortTable.onclickSortImg] "
jslog(JSLOG_JSU,o+JSLOG_FUN_START)
var r,e=cSortTable.getSortTableElFromEv(o,t),S=this.tagName
if(jslog(JSLOG_JSU,o+"this="+this+"  tagName="+S),"undefined"!=typeof S&&"IMG"==S.toUpperCase())r=this
else{if(!e.imgSortCur)return void jslog(JSLOG_ERR,o+"imgSortCur=null   CANNOT Apply workaround for IE")
jslog(JSLOG_JSU,o+"Workaround for IE Header Seleted: Use imgSortCur"),r=e.imgSortCur}e.bSortEn?e.resortTable(r):showInfo(e.szSortHintAsc),jslog(JSLOG_JSU,o+JSLOG_FUN_END)},cSortTable.getSortTableElFromEv=function(t,o){var t="[cSortTable.getSortTableElFromEv] "
jslog(JSLOG_JSU,t+JSLOG_FUN_START)
var r=cSortTable.getElement(o),e=r._cSortTableEl
return"undefined"==typeof e?showErr(t+"SW ERROR: cSortTableEl is undefined in "+t,1):jslog(JSLOG_JSU,t+"cSortTableEl.szSortPathAsc="+e.szSortPathAsc),jslog(JSLOG_JSU,t+JSLOG_FUN_END),e},cSortTable.getElement=function(t){for(var o=cSortTable.is_ie?window.event.srcElement:t.currentTarget;1!=o.nodeType||/^div$/i.test(o.tagName);)o=o.parentNode
return o},cSortTable.is_ie=/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)
