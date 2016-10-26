/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/loadingDiv.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>LoadingDiv Doc:</b>   <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/LoadingDiv.html" target="_self">JSU LoadingDiv Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>    JSU LoadingDiv API:  loadingDivShow loadingDivHide <BR/>
<b>REQUIRED:</b>        JSU:  jsu.css locale-core.js jsuCmn.js <BR/>
<b>OPTIONAL:</b>        JSU: jslog.js, dom-drag.js to use also jslog <BR/>
<b>First Version:</b>     ver 1.0 - Jul 2007  <BR/>
<b>Current Version:</b>   JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Oct-26  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/JSUtility/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
function ld_getScrollEl(){var l="[loadingDiv.js ld_getScrollEl()] "
return"undefined"!=typeof InstallTrigger||navigator.appName==LOADING_APP_NAME_IE||navigator.appName==LOADING_APP_NAME_IE_11&&null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)?(jsu_log(l+"Firefox/IE"),document.documentElement):(jsu_log(l+"NOT Firefox/IE (e.g CHROME)"),document.body)}function loadingDivCancel(){loadingDivHide(),void 0!=var_ld_div.fnCancelCallback&&var_ld_div.fnCancelCallback()}function loadingDivTmo(){var l=new Date,e=Math.round((l.getTime()-var_ld_div.iStartTime)/1e3)
var_ld_div.elFooter.innerHTML=LOADING_DIV_MSG.startTime+var_ld_div.szStartTime+LOADING_DIV_MSG.elapsed+e+LOADING_DIV_MSG.sec}function loadingDivShow(l){var e="[loadingDiv.js loadingDivStart()] "
if(jsu_log(e+JSU_LOG_FUN_START),var_ld_div.tmoElapsedSec&&clearTimeout(var_ld_div.tmoElapsedSec),void 0==l)var l=LOADING_DIV_DEF_OPT
else void 0==l.szTitleHtml&&(l.szTitleHtml=LOADING_DIV_DEF.szTitleHtml),void 0==l.bShowGif&&(l.bShowGif=LOADING_DIV_DEF.bShowGif),void 0==l.szUrlGif&&(l.szUrlGif=LOADING_DIV_DEF.szUrlGif),void 0==l.bShowElapsedSec&&(l.bShowElapsedSec=LOADING_DIV_DEF.bShowElapsedSec),void 0==l.bResetElapsedSec&&(l.bResetElapsedSec=LOADING_DIV_DEF.bResetElapsedSec),void 0==l.iDivWidth&&(l.iDivWidth=LOADING_DIV_DEF.iDivWidth),void 0==l.iGifWidth&&(l.iGifWidth=LOADING_DIV_DEF.iGifWidth),void 0==l.szBackgroundColor&&(l.szBackgroundColor=LOADING_DIV_DEF.szBackgroundColor),void 0==l.bShowCancel&&(l.bShowCancel=LOADING_DIV_DEF.bShowCancel),void 0==l.szCancelLabel&&(l.szCancelLabel=LOADING_DIV_DEF.szCancelLabel),void 0==l.szMsgHtml&&(l.szMsgHtml=LOADING_DIV_DEF.szMsgHtml),void 0==l.bRecalcBestPos&&(l.bRecalcBestPos=LOADING_DIV_DEF.bRecalcBestPos)
var_ld_div.fnCancelCallback=l.fnCancelCallback,jsu_logObj(e+"objOpt",l)
var i=jsu_getElementById2("loadingDivMain",!1)
i&&document.body.removeChild(i),jsu_log(e+"add JSU_LOADING_DIV to document.body"),i=document.createElement("div"),i.id="loadingDivMain",i.innerHTML=JSU_LOADING_DIV,document.body.appendChild(i)
var o=jsu_getElementById2("loadingDiv")
null!=l.iDivWidth&&(o.style.width=l.iDivWidth+"px"),jsu_log(e+"Set Visible element depending on objOpt")
var d=jsu_getElementById2("loadingDivTitle"),t=l.szTitleHtml&&""!=l.szTitleHtml
jsu_elementShow(d,t,""),t&&(d.innerHTML=l.szTitleHtml)
var a=jsu_getElementById2("loadingDivMsg",!1)
if(a){var n=LOADING_DIV_MSG.working
l.szMsgHtml&&""!=l.szMsgHtml&&(n=l.szMsgHtml),a.innerHTML=n
var s=jsu_getElementById2("loadingDivBtn")
s.value=l.szCancelLabel,jsu_elementShow(jsu_getElementById2("loadingDivBtnTd"),l.bShowCancel,"")
var r=jsu_getElementById2("loadingDivGif")
void 0!=l.szUrlGif&&""!=l.szUrlGif&&(r.style.backgroundImage="url('"+l.szUrlGif+"')"),null!=l.iDivWidth&&(r.style.width=l.iGifWidth+"px"),jsu_elementShow(jsu_getElementById2("loadingDivTdGif"),l.bShowGif,""),l.szBackgroundColor&&""!=l.szBackgroundColor&&(o.style.backgroundColor=l.szBackgroundColor,jsu_getElementById2("loadingDivMsg").style.backgroundColor=l.szBackgroundColor,jsu_getElementById2("loadingDivTdGif").style.backgroundColor=l.szBackgroundColor,jsu_getElementById2("loadingDivBtnTd").style.backgroundColor=l.szBackgroundColor)
var v=void 0!=l.bShowElapsedSec&&l.bShowElapsedSec
if(jsu_elementShow(d,t,""),var_ld_div.elFooter=jsu_getElementById2("loadingDivFooter"),jsu_elementShow(var_ld_div.elFooter,v,""),v){if(l.bResetElapsedSec){jsu_log(e+"Start Timeout for Elapsedsec")
var _=new Date
var_ld_div.iStartTime=_.getTime(),var_ld_div.szStartTime=num2StrPad(_.getHours(),"0",2)+":"+num2StrPad(_.getMinutes(),"0",2)+":"+num2StrPad(_.getSeconds(),"0",2)}loadingDivTmo(),var_ld_div.tmoElapsedSec=setInterval(loadingDivTmo,1e3)}if(l.bRecalcBestPos){jsu_log(e+"Recalculate Best Postion")
var c=jsu_getElementById2("loadingDivContainer",!0),D=ld_getScrollEl(),g=D.scrollHeight,u=D.scrollWidth,E=D.scrollLeft,I=D.scrollTop,m=window.innerWidth,S=window.innerHeight
jsu_log(e+"scroll: xScroll="+E+" yScroll="+I+" wScroll="+u+" hScroll="+g),jsu_log(e+"Client: wClient="+m+" hClient="+S),c.style.height=g+100+"px",c.style.width=u+100+"px"
var p=(100+u-m)/2,f=(100+g-S)/2
jsu_log(e+"SET NEW SCROLL ="+p+" y="+f),p>0?(var_ld_div.prev.scrollLeft=D.scrollLeft,D.scrollLeft=p):var_ld_div.prev.scrollLeft=-1,f>0?(var_ld_div.prev.scrollTop=D.scrollTop,D.scrollTop=f):var_ld_div.prev.scrollTop=-1,var_ld_div.prev.scroll=D.scroll,D.scroll="no",void 0!=document.documentElement?(var_ld_div.prev.overflow=document.documentElement.style.overflow,document.documentElement.style.overflow="hidden"):var_ld_div.prev.overflow=null}jsu_elementShow(i,!0),jsu_elementShow(o,!0),jsu_log(e+JSU_LOG_FUN_END)}}function loadingDivHide(){var l="[loadingDiv.js loadingDivHide()] "
jsu_log(l+JSU_LOG_FUN_START),var_ld_div.tmoElapsedSec&&clearTimeout(var_ld_div.tmoElapsedSec)
var e=ld_getScrollEl();-1!=var_ld_div.prev.scrollLeft&&(jsu_log(l+"RESTORE scrollLeft="+var_ld_div.prev.scrollLeft),e.scrollLeft=var_ld_div.prev.scrollLeft),-1!=var_ld_div.prev.scrollTop&&(jsu_log(l+"RESTORE scrollTop="+var_ld_div.prev.scrollTop),e.scrollTop=var_ld_div.prev.scrollTop),e.scroll=var_ld_div.prev.scroll,null!=var_ld_div.prev.overflow&&void 0!=document.documentElement&&(document.documentElement.style.overflow=var_ld_div.prev.overflow)
var i=jsu_getElementById2("loadingDivContainer",!1)
jsu_elementShow(i,!1),jsu_log(l+JSU_LOG_FUN_END)}var LOADING_DIV_DEF={szTitleHtml:"",szMsgHtml:"",bShowGif:!0,szUrlGif:"",bShowElapsedSec:!1,bResetElapsedSec:!0,iDivWidth:null,iGifWidth:null,bShowCancel:!1,szCancelLabel:"Cancel",szBackgroundColor:null,bRecalcBestPos:!0},LOADING_DIV_DEF_OPT={szTitleHtml:LOADING_DIV_DEF.szTitle,szMsgHtml:LOADING_DIV_DEF.szMsgHtml,bShowGif:LOADING_DIV_DEF.bShowGif,szUrlGif:LOADING_DIV_DEF.szUrlGif,bShowElapsedSec:LOADING_DIV_DEF.bShowElapsedSec,bResetElapsedSec:LOADING_DIV_DEF.bResetElapsedSec,iDivWidth:LOADING_DIV_DEF.iDivWidth,iGifWidth:LOADING_DIV_DEF.iGifWidth,bShowCancel:LOADING_DIV_DEF.bShowCancel,szCancelLabel:"",szBackgroundColor:LOADING_DIV_DEF.szBackgroundColor,fnCancelCallback:null,bRecalcBestPos:!0},JSU_LOADING_DIV='<div id="loadingDivContainer" class="loadingDivContainer" >  <table width="100%" height="100%">    <tr> <td align="center" valign="center">      <div  id="loadingDiv" class="loadingDiv">         <table id="loadingDivTable" class="loadingDiv" width="100%"  style="z-index: 110;">            <tr class="loadingDivTitle">              <td colspan="2" id="loadingDivTitle" class="loadingDivTitle" >Title Test</td>            </tr>            <tr>               <td id="loadingDivTdGif" align="left" width="80px">                <div id="loadingDivGif" class="loadingDivGif"> </div>              </td>               <td id="loadingDivMsg" class="loadingDivMsg" align="left" style="padding-left:0px">                 <b>Working</b></BR>Please Wait...              </td>            </tr>            <tr>               <td colspan="2" align="center" class="loadingDivBtn" id="loadingDivBtnTd"  >                 <input type="button" class="loadingDivBtn" id="loadingDivBtn" value="Stop" onclick="loadingDivCancel();" />               </td>            </tr>            <tr>               <td colspan="2" id="loadingDivFooter" class="loadingDivFooter" style="display:none">                 Elapsed Time: 10 sec               </td>            </tr>        </table>      </div>    </td> </tr>  </table></div>',var_ld_div={elFooter:null,tmoElapsedSec:null,iElapsedSec:0,fnCancelCallback:null,prev:{scrollLeft:0,scrollTop:0,scroll:0,overflow:"auto"}},LOADING_APP_NAME_IE="Microsoft Internet Explorer",LOADING_APP_NAME_IE_11="Netscape"
