/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/jsuCmn.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>    JSU Common constant or base API shared by all Features <BR/>
<b>REQUIRED:</b>          NOTHING<BR/>  
<b>First Version:</b>     ver 1.0 - Jul 2007  <BR/>
<b>Current Version:</b>   JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Oct-09  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/JSUtility/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
function jsu_log(t){"function"==typeof jslog&&jslog(JSLOG_JSU,t)}function jsu_logObj(t,n){"function"==typeof jslogObj&&jslogObj(JSLOG_JSU,t,n)}function jsu_logHtml(t,n){"function"==typeof jslogHtml&&jslogHtml(JSLOG_JSU,t,n)}function jsu_getElementById2(t,n){void 0==n&&(n=!1)
var o=document.getElementById(t)
return null==o?(n&&alert("SW ERROR [jsu_getElementById2] NOT FOUND Id="+t),0):o}function jsu_elementShow(t,n,o){0!=t&&void 0!=t&&(void 0==o&&(o="block"),n?(t.style.visibility="visible",t.style.display=o):(t.style.visibility="hidden",t.style.display="none"))}function jsu_err(t){"undefined"!=typeof Popup?Popup(POPUP_TYPE.ERR,t):alert(t)}var JSU_VERSION="JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Oct-09",JSU_LOG_FUN_START="------------------------ START",JSU_LOG_FUN_END="------------------------ END"
