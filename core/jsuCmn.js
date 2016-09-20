/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/jsuCmn.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>    JSU Common constant or base API shared by all Features <BR/>
<b>REQUIRED:</b>          NOTHING<BR/>  
<b>First Version:</b>     ver 1.0 - Jul 2007  <BR/>
<b>Current Version:</b>   JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Sep-21  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/JSUtility/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
function jsu_log(n){"function"==typeof jslog&&jslog(JSLOG_JSU,n)}function jsu_logObj(n,t){"function"==typeof jslogObj&&jslogObj(JSLOG_JSU,n,t)}function jsu_logHtml(n,t){"function"==typeof jslogHtml&&jslogHtml(JSLOG_JSU,n,t)}function jsu_getElementById2(n,t){void 0==t&&(t=!1)
var e=document.getElementById(n)
return null==e?(t&&alert("SW ERROR [jsu_getElementById2] NOT FOUND Id="+n),0):e}function jsu_elementShow(n,t,e){0!=n&&void 0!=n&&(void 0==e&&(e="block"),t?(n.style.visibility="visible",n.style.display=e):(n.style.visibility="hidden",n.style.display="none"))}function jsu_err(n){"undefined"!=typeof Popup?Popup(POPUP_TYPE.ERR,n):alert(n)}var JSU_VERSION="JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Sep-21",JSU_LOG_FUN_START="------------------------ START",JSU_LOG_FUN_END="------------------------ END"
