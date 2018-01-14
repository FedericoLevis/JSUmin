function replaceAll(e,t,n){if(void 0===e)return""
for(;e.indexOf(t)>-1;)e=e.replace(t,n)
return e}function obj2Html(e){var t=JSON.stringify(e,null,4)
return t=replaceAll(t,"\n","<BR/>"),replaceAll(t,"    ","&nbsp;&nbsp;")}function msgHtml2Str(e){var t=e.replace(/<BR\/>/gi,"\n")
t=t.replace(/<ul/gi,"\n<ul"),t=t.replace(/<li>/gi," • "),t=t.replace(/<li /gi," • <li "),t=t.replace(/<\/li>/gi,"\n"),t=t.replace(/<\/ul>/gi,"\n"),t=t.replace(/<th /gi,"\n<th "),t=t.replace(/<th>/gi,"\n<th>"),t=t.replace(/<tr /gi,"\n ․ <tr "),t=t.replace(/<tr>/gi,"\n ․ "),t=t.replace(/<\/td>/gi," - "),t=t.replace(/<[^>]*>?/gm,"")
for(var n=["a","A","e","E","u","U","o","O","i","I"],l=["grave","acute","tilde","dierese"],r=0;r<n.length;r++)for(var o=0;o<l.length;o++){var i="&"+n[r]+l[o]+";",s=n[r]+"`"
t=strReplaceAll(t,i,s)}return t}function popupIsDefined(){return"function"==typeof Popup}function showAlert(e,t){return alert(msgHtml2Str(e)),t}function showInfo(e,t){jslog(JSLOG_INFO,e),popupIsDefined()?Popup(POPUP_TYPE.INFO,e,t):showAlert(e,0)}function showWarn(e,t,n){return jslog(JSLOG_INFO,e),popupIsDefined()?Popup(POPUP_TYPE.WARN,e,n):showAlert(e,t),t}function showErr(e,t,n){return jslog(JSLOG_ERR,e),void 0==t&&(t=1),popupIsDefined()?Popup(POPUP_TYPE.ERR,e,n):showAlert(e,t),t}function showErrIfRequired(e,t,n){return e&&showErr(t,n),n}function getBrowser(){var e=(navigator.appName,BROWSER_TYPE.OTHER)
return"undefined"!=typeof InstallTrigger?e=BROWSER_TYPE.FIREFOX:(navigator.appName==APP_NAME_IE||navigator.appName==APP_NAME_IE_11&&null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent))&&(e=BROWSER_TYPE.IE),jslog(JSLOG_TEST,"[Popup.js PopupGetBrowser] szBrowser="+e+" -  navigator.appCodeName="+navigator.appCodeName+"  navigator.appName="+navigator.appName),e}function isFirefox(){return getBrowser()==BROWSER_TYPE.FIREFOX}function isInIframe(){try{return window.self!==window.top}catch(e){return!0}}function isIE(){return getBrowser()==BROWSER_TYPE.IE}function cookieSetVar(e,t){document.cookie=e+"="+t,alert("document.cookie="+document.cookie)}function cookieGetVar(e){var t=e+"="
alert("document.cookie="+document.cookie)
for(var n=document.cookie.split(";"),l=0;l<n.length;l++){for(var r=n[l];" "==r.charAt(0);)r=r.substring(1)
if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}function getElementById2(e,t){void 0==t&&(t=!1)
var n=document.getElementById(e)
return null==n?(t&&SW_DEBUG_ENABLE&&alert("SW ERROR [util.js getElementById2] NOT FOUND Id="+e),0):n}function getElementById3(e,t,n){var l=document.getElementById(e)
return null==l?(t&&showErr("SW ERROR [util.js getElementById3] NOT FOUND Id="+e),0):l}function getElementById(e){return getElementById2(e,!0)}function getElementByTag2(e,t,n){return getElementBySpanId2(t,e,n)}function getFirstFsByBlock(e,t){var n=getElementById2(e,t)
if(!n)return 0
try{var l=n.getElementsByTagName("FIELDSET")
return l.length?l[0]:0}catch(e){}t&&jslog(JSLOG_ERR,"[util.js getFieldset2] NOT FOUND FiledSet in Block="+e)}function getElementBySpanId2(e,t,n){if("button"==t.toLowerCase()){var l=getButtonBySpanId2(e,n)
if(l)return l}var r="[util.js getElementBySpanId2] ",o=document.getElementById(e)
if(null==o)return showErrIfRequired(n,r+" NOT FOUND SpanId="+e,0)
var i=o.getElementsByTagName(t)
return null!=i&&i.length?i[i.length-1]:showErrIfRequired(n,r+" NOT FOUND Elements with Tag="+t+" for SpanId="+e,0)}function getElementOfClassBySpanId2(e,t,n,l){var r="[util.js getElementOfClassBySpanId2] ",o=document.getElementById(e)
if(null==o)return showErrIfRequired(l,r+" NOT FOUND SpanId="+e,0)
var i=o.getElementsByTagName(t)
if(null==i||!i.length)return showErrIfRequired(l,r+" NOT FOUND Elements with Tag="+t+" for SpanId="+e,0)
for(var s=!1,a=0,u=0;!s&&u<i.length;u++)a=i[u],a.className==n&&(s=!0)
return s?a:showErrIfRequired(l,r+" NOT FOUND Elements with Tag="+t+" and Class="+n+" for SpanId="+e,0)}function getBlockBySpanId2(e,t){var n=getElementById2(e,t)
return n?n.firstChild:0}function getButtonBySpanId2(e,t){var n="[util.js getButtonBySpanId2] "
jslog(JSLOG_JSU,n+JSLOG_FUN_START),jslog(JSLOG_JSU,n+"IN: SpanId="+e+'"')
var l=document.getElementById(e)
if(null==l)return showErrIfRequired(t,n+" NOT FOUND SpanId="+e,0)
var r=l.getElementsByTagName("INPUT")
if(null!=r&&r.length||(r=l.getElementsByTagName("BUTTON")),null==r||!r.length)return showErrIfRequired(t,n+" NOT FOUND Elements with Tag=INPUT/BUTTON for SpanId="+e,0)
for(var o=0;o<r.length;o++)try{if("button"==r[o].type.toLowerCase())return jslog(JSLOG_JSU,n+"OUT: El  Id="+r[o].id+"  Name="+r[o].name),r[o]}catch(e){}return showErrIfRequired(t,n+" NOT FOUND Button for SpanId="+e,0),0}function getFieldset2(e,t){var n="[util.js getFieldset2] "
try{for(var l=document.getElementsByTagName("FIELDSET"),r=0;r<l.length;r++){var o=l[r],i=o.firstChild
if(i){if("LEGEND"==i.tagName){var s=String(i.innerHTML)
if(s.split(e).length>1)return jslog(JSLOG_JSU,n+"FOUND  Caption="+e+" in textContent="+s),l[r]}}}}catch(e){}return t&&jslog(JSLOG_ERR,n+"NOT FOUND Caption="+e),0}function getFieldset(e){return getFieldset2(e,!1)}function localeGetGroupSep(){var e=1234,t=e.toLocaleString(),n=t.charAt(1)
return"2"==n&&(n=""),jslog(JSLOG_JSU,"[util.js localeGetGroupSep] GroupSeparetor="+n),n}function localeGetDecimalSep(){var e="[util.js localeGetDecimalSep] ",t=1.23,n=t.toLocaleString(),l=n.charAt(1)
return"2"==l&&(l=".",jslog(JSLOG_ERR,e+"DecimalSeparetor NOT found. Used default = "+l)),jslog(JSLOG_JSU,e+"DecimalSeparetor="+l),l}function strReplaceAll(e,t,n){for(var l=e;l.indexOf(t)>=0;)l=l.replace(t,n)
return l}function str2Num(e,t,n){if(NumStr2=e,void 0!==t&&t.length)for(;NumStr2.indexOf(t)>-1;)NumStr2=NumStr2.replace(t,"")
return void 0!==n&&"."!=n&&(NumStr2=NumStr2.replace(n,".")),Num=parseFloat(NumStr2),isNaN(Num)&&(Num=0),Num}function num2StrPad(e,t,n){var l=n-e.toString().length+1
return Array(+(l>0&&l)).join("0")+e}function html2Str(e){var t=new String("")
e=strReplaceAll(e,"&nbsp;"," ")
for(var n=0;n<e.length;n++){var l=e.charCodeAt(n),r=e.charAt(n)
l==NBSP_CODE&&(r=" "),t+=r}return t}function objSerialize(e){return JSON.stringify(e,null,0)}function objDeserialize(e){return void 0==e||0==e.length?new Object:JSON.parse(e)}function obj2URI(e){return encodeURIComponent(objSerialize(e))}function objFromURI(e){var t,n=e
if(void 0==n||0==n.length)t=new Object
else{var n=decodeURIComponent(e)
t=objDeserialize(n)}return t}function obj2URIQueryString(e){var t=encodeURIComponent(objSerialize(e))
return t.length?"?"+t:""}function objFromURIQueryString(e){return e.length?objFromURI(e.substr(1)):null}function selectGetFirstIndWithVal(e,t){var n="[util.js selectGetFirstIndWithVal] "
if(!e)return jslog(JSLOG_JSU,n+" Select is NULL!"),-1
for(i=0;i<e.options.length;i++)if(Opt=e[i],Opt.value.indexOf(t)>-1)return jslog(JSLOG_JSU,n+" Value="+t+"  First contained in opt["+i+"]"),i
return jslog(JSLOG_JSU,n+" Value="+t+"  is not contained in any opt of select"),-1}function select2ar(e,t){for(i=0;i<t.length;i++)t.pop()
if(!e)return jslog(JSLOG_JSU,"[util.js select2ar]  Select is NULL!"),-1
for(i=0;i<e.options.length;i++)Opt=e[i],t[i]=new cOpt(Opt.text,Opt.value)
return t.length}function select2arFromInd(e,t,n){var l="[util.js select2arFromInd] "
for(jslog(JSLOG_JSU,l+JSLOG_FUN_START),jslog(JSLOG_JSU,l+" IN iSelectStartInd="+t),i=0;i<n.length;i++)n.pop()
if(!e)return jslog(JSLOG_JSU,l+" Select is NULL!"),-1
for(iAr=0,i=t;i<e.options.length;i++,iAr++)Opt=e[i],n[iAr]=new cOpt(Opt.text,Opt.value)
return jslog(JSLOG_JSU,l+" RETURN _ArOpt.length="+n.length),jslog(JSLOG_JSU,l+JSLOG_FUN_END),n.length}function select2arTillInd(e,t,n){var l="[util.js select2arFromInd] "
for(jslog(JSLOG_JSU,l+JSLOG_FUN_START),jslog(JSLOG_JSU,l+" IN iSelectEndInd="+t),i=0;i<n.length;i++)n.pop()
if(!e)return jslog(JSLOG_JSU,l+" Select is NULL!"),-1
for(iAr=0,i=0;i<e.options.length&&i<=t;i++,iAr++)Opt=e[i],n[iAr]=new cOpt(Opt.text,Opt.value)
return jslog(JSLOG_JSU,l+" RETURN _ArOpt.length="+n.length),jslog(JSLOG_JSU,l+JSLOG_FUN_END),n.length}function selectGetSelectedNum(e){if(!e)return jslog(JSLOG_ERR,"[util.js selectGetSelectedNum]  Select is NULL!"),-1
for(var t=0,n=e.options.length,l=0;l<n;l++){e[l].selected&&t++}return t}function selectGetTextFromValue(e,t,n){var l="[util.js selectGetTextFromValue] "
if(!e)return jslog(JSLOG_JSU,l+" Select is NULL - RETURN DefText="+n),n
for(var r=0;r<e.options.length;r++){if(html2Str(e[r].value)==t){var o=html2Str(e[r].text)
return jslog(JSLOG_JSU,l+"Value="+t+"  FOUND - RETURN Text="+o),o}}return jslog(JSLOG_JSU,l+" Value="+t+"  NOT FOUND - RETURN DefText="+n),n}function selectRemoveAllOption(e){if(0!=e)for(i=e.length-1;i>=0;i--)e[i]=null}function selectRemoveOption(e,t){if(0!=e)for(i=e.length-1;i>=t;i--)e[i]=null}function selectSelValue(e,t){var n="[util.js selectSelValue] "
if(!e)return jslog(JSLOG_ERR,n+" Select is NULL!"),-1
for(var l=0;l<e.options.length;l++){var r=e[l]
if(html2Str(r.value)==t)return r.selected=!0,e.selectedIndex=l,l}return jslog(JSLOG_JSU,n+" NOT FOUND Value="+t+"  in "+e.name),-1}function selectRemoveCognosEl(e){removeExtraItems(e)}function selectRemoveValue(e,t){var n="[util.js selectRemoveValue] "
if(!e)return jslog(JSLOG_ERR,n+" Select is NULL!"),-1
for(var l=0;l<e.options.length;l++){var r=e[l]
if(html2Str(r.value)==t)return jslog(JSLOG_JSU,n+" Found Value="+t+"  in "+e.name+"   Text="+r.text+"\n SelInd="+l+"      NOW REMOVING IT"),e[l]=null,l}return jslog(JSLOG_JSU,n+" NOT FOUND Value="+t+"  in "+e.name),-1}function selectRemoveAll(e){var t=0
if(!e)return jslog(JSLOG_ERR,"[util.js selectRemoveAll]  Select is NULL!"),-1
for(t=e.length-1;t>=0;t--)e[t]=null}function selectIsMulti(e){return e.multiple}function selectRemoveExtraItems(e){if(e&&!(e.options.length<1))try{if(e.childNodes[1].text.match("----"))return e.remove(1),e.remove(0),e.removeAttribute("hasLabel"),void jslog(JSLOG_JSU,"[util.js selectGetTextFromValue] Succesfully Removed 2 Extra Items from Select "+e.name)}catch(e){}}function selectSelText(e,t){var n="[util.js selectSelText] "
if(!e)return jslog(JSLOG_ERR,n+" Select is NULL!"),-1
for(var l=0;l<e.options.length;l++){var r=e[l]
if(html2Str(r.text)==t)return jslog(JSLOG_JSU,n+" SELECT Found Text="+t+"  in "+e.name+"\nValue="+r.value+"\nRETURN SelInd="+l),r.selected=!0,l}return jslog(JSLOG_JSU,n+" NOT FOUND Text="+t+"  in "+e.name),-1}function selectGetTextOfValue(e,t){var n="[util.js selectGetTextOfValue] "
if(!e)return jslog(JSLOG_ERR,n+" Select is NULL!"),"Select is NULL"
for(var l=0;l<e.options.length;l++){var r=e[l]
if(html2Str(r.value)==t){var o=html2Str(r.text)
return jslog(JSLOG_JSU,n+" Found Value="+t+"   Text="+o),o}}return t+" NOT FOUND"}function selectGetValueOfText(e,t){var n=html2Str(t),l="[util.js selectGetValueOfText] "
if(!e)return jslog(JSLOG_ERR,l+" Select is NULL!"),"Select is NULL"
for(var r=0;r<e.options.length;r++){var o=e[r]
if(html2Str(o.text)==n){var i=html2Str(o.value)
return jslog(JSLOG_JSU,l+" Found Text="+n+"   Value="+i),i}}return t+" NOT FOUND"}function selectGelSelectedStatus(e,t){if(!e)return jslog(JSLOG_ERR,"[util.js selectSelValue]  Select is NULL!"),!1
for(var n=0;n<e.options.length;n++){var l=e[n]
if(html2Str(l.value)==t)return l.selected}return!1}function selectGetDesc(e){for(var t=new String("name: "+e.name+"\n\ntext      value\n\n"),n=0;n<e.options.length;n++){var l=e[n]
t+=new String("\n"+l.text+"     "+l.value)}return t}function appendOptionLast(e,t,n){var l=new Option(t,n)
e[e.length]=l,l.dv=t}function appendOptionSelLast(e,t,n,l){if(appendOptionLast(e,t,n),l){e[e.length-1].selected=!0}}function selectGetList(e,t){if(!e)return jslog(JSLOG_JSU,"[util.js selectGetList] Select =0 NOTHING to DO")
t.length=0
for(var n=0,l=0;l<e.options.length;l++){var r=e.options[l]
t[n++]=r.value}return t.length}function selectGetSelList(e,t){if(!e)return jslog(JSLOG_JSU,"[util.js selectGetSelList] Select =0 NOTHING to DO")
t.length=0
for(var n=0,l=0;l<e.options.length;l++){var r=e.options[l]
r.selected&&(t[n++]=r.value)}return t.length}function selectGetSelNum(e){var t="[util.js selectGetSelNum] ",n=0
if(!e)return jslog(JSLOG_JSU,t+"Select =0 NOTHING to DO"),0
for(var l=0;l<e.options.length;l++){e.options[l].selected&&n++}return jslog(JSLOG_JSU,t+"  return  iSelNum="+n),n}function selectGetOptNum(e){return e?e.options.length:(jslog(JSLOG_JSU,"[util.js selectGetOptNum ] Select =0  return 0"),0)}function selectGetNumFilterEl(e){var t=selectGetSelNum(e)
if(t<0)return 0
var n=t>0?t:e.options.length
return jslog(JSLOG_JSU,"[util.js selectGetNumFilterEl] iSelNNum="+t+"  return  iNumFilterEl="+n),n}function selectGetSelLabels(e){var t="",n=!0
if(!e)return jslog(JSLOG_JSU,"[util.js selectGetSelList] Select =0 NOTHING to DO")
for(var l=0;l<e.options.length;l++){var r=e.options[l]
r.selected&&(n?(t=r.text,n=!1):t=t+", "+r.text)}return t}function selectGetSelValues(e,t){var n="",l=!0
if(void 0==t&&(t=!1),!e)return jslog(JSLOG_JSU,"[util.js selectGetSelValues] Select =0 NOTHING to DO")
for(var r=0;r<e.options.length;r++){var o=e.options[r]
if(o.selected){var i=o.value
t&&(i="'"+i+"'"),l?(n=i,l=!1):n=n+", "+i}}return n}function selectGetValues(e,t){var n="",l=!0
if(void 0==t&&(t=!1),!e)return jslog(JSLOG_JSU,"[util.js selectGetValues] Select =0 NOTHING to DO")
for(var r=0;r<e.options.length;r++){var o=e.options[r],i=o.value
t&&(i="'"+i+"'"),l?(n=i,l=!1):n=n+", "+i}return n}function selectDeselectAll(e){if(!e)return jslog(JSLOG_JSU,"[util.js selectDeselectAll] Select =0 NOTHING to DO");-1!=e.selectedIndex&&(e.selectedIndex=-1)}function selectSelectAll(e){if(!e)return jslog(JSLOG_JSU,"[util.js selectSelectAll] Select =0 NOTHING to DO")
for(var t=0;t<e.options.length;t++){e.options[t].selected=!0}}function selectGetSelVal(e,t){var n=SELECT_NOVALUE_SEL
if(void 0==t&&(t=!1),!e)return n
var l=e.selectedIndex
return l<0?n:(n=html2Str(e.options[l].value),t&&n.length&&(n="'"+n+"'"),n)}function selectGetSelText(e){var t=SELECT_NOVALUE_SEL
if(!e)return t
var n=e.selectedIndex
return n<0?t:html2Str(e.options[n].text)}function selectPopulate(e,t,n){if(null!=e&&0!=e)for(var l=0;l<t.length;l++){var r=t[l],o=r[0]==n
appendOptionSelLast(e,r[1],r[0],o)}}function selectAddFilterCond(e,t,n){var l=n.length<4?" ":" AND ",r="[util.js selectAddFilterCond] "
jslog(JSLOG_JSU,r+JSLOG_FUN_START),jslog(JSLOG_JSU,r+"IN: szFilter="+n)
var o=new Array,i=(new Array,selectGetSelList(e,o))
return 1==i?n+=l+t+" = "+o[0]:i>1&&(n+=l+t+" IN ("+ar2List(o)+")"),jslog(JSLOG_JSU,r+"OUT: szFilter="+n),jslog(JSLOG_JSU,r+JSLOG_FUN_END),n}function getSelAllEl(e,t,n){var l="[util.js getSelAllEl] "
jslog(JSLOG_JSU,l+JSLOG_FUN_START),jslog(JSLOG_JSU,l+"IN szBlockId="+e)
var r=0,o=document.getElementById(e)
return null==o?showErrIfRequired(n,l+" NOT FOUND BlockId="+e,1):(ElList=o.getElementsByTagName("A"),null==ElList||2!=ElList.length?showErrIfRequired(n,l+" NOT FOUND the 2 Elements with Tag A for BlockId="+e,1):(t[r++]=ElList[0],t[r++]=ElList[1],jslog(JSLOG_JSU,l+JSLOG_FUN_END),0))}function filterSelAllEl2R(e,t){var n="[util.js filterSelAllEl2R] "
jslog(JSLOG_JSU,n+JSLOG_FUN_START),jslog(JSLOG_JSU,n+"IN szFilterNameId="+e)
var l=new Array
getSelAllEl("blockFilter"+e,l,t)
var r=new Array("spanSelectAll"+e,"spanDeselectAll"+e)
for(iAr=0;iAr<2;iAr++){getElementById2(r[iAr],t).appendChild(l[iAr]),l[iAr].style.fontSize="8pt"}return 0}function setCursorWait(e){var t=e?"wait":"default"
document.body.style.cursor=t
for(var n=new Array("IMG","TD","INPUT","BUTTON","SELECT"),l=0;l<n.length;l++)for(var r=n[l],o=document.getElementsByTagName(r),i=0;i<o.length;i++){var s=o[i]
s.style.cursor=t}}function loadingShowIn1ElId(e,t){loadingShowIn1El(getElementById2(e,!0),t)}function loadingShowIn1El(e,t){e&&classAdd(e,"jsuLoadingEl",t)}function loadingGetEl(){return getElementById2(ID_DIV_LOADING_IMG,!1)}function loadingShowByEl(e,t){e&&(classAdd(e,"jsuLoading",t),elementShow(e,t))}function loadingShow(e){setCursorWait(e)
var t=getElementById2(ID_DIV_LOADING_IMG,!1)
t&&(classAdd(t,"jsuLoading",e),elementShow(t,e))}function alarmShowIn1ElId(e,t){return alarmShowIn1El(getElementById2(e,!0),t)}function alarmShowIn1El(e,t){return e&&classAdd(e,"jsuAlarmingEl",t),1}function classAdd(e,t,n){var l=e.className
void 0==l&&(l="")
var r=l.indexOf(t)>=0
n?r||(l=""==l?t:l+" "+t):(l=l.replace(" "+t,""),l=l.replace(t,"")),e.className=l}function ts_getInnerText(e){if("string"==typeof e)return e
if(void 0===e)return e
if(e.innerText)return e.innerText
for(var t="",n=e.childNodes,l=n.length,r=0;r<l;r++)switch(n[r].nodeType){case 1:t+=ts_getInnerText(n[r])
break
case 3:t+=n[r].nodeValue}return t}function elementShowBySpan(e,t){var n=getElementById2(e,!1)
n&&elementShow(n,t)}function elementIsVisibleBySpan(e){var t=!1,n=getElementById2(e,!1)
return n&&(t="hidden"!=n.style.visibility),t}function elementShow(e,t,n){0!=e&&void 0!=e&&(void 0==n&&(n="block"),t?(e.style.visibility="visible",e.style.display=n):(e.style.visibility="hidden",e.style.display="none"))}function elementShowById(e,t,n){elementShow(getElementById2(e,!1),t,n)}function elementGetWinCoords(e){var t=e.getBoundingClientRect(),n=document.body,l=document.documentElement,r=window.pageYOffset||l.scrollTop||n.scrollTop,o=window.pageXOffset||l.scrollLeft||n.scrollLeft,i=l.clientTop||n.clientTop||0,s=l.clientLeft||n.clientLeft||0,a=t.top+r-i,u=t.left+o-s
return{top:Math.round(a),left:Math.round(u),height:e.clientHeight,width:e.clientWidth}}function addLoadEvent(e){var t=window.onload
"function"!=typeof window.onload?window.onload=e:window.onload=function(){t(),e()}}function createCookie(e,t,n){var l=""
if(n){var r=new Date
r.setTime(r.getTime()+24*n*60*60*1e3),l="; expires="+r.toGMTString()}try{document.cookie=e+"="+t+l+"; path=/"}catch(e){}}function readCookie(e){var t=e+"="
try{for(var n=document.cookie.split(";"),l=0;l<n.length;l++){for(var r=n[l];" "==r.charAt(0);)r=r.substring(1,r.length)
if(0==r.indexOf(t))return r.substring(t.length,r.length)}}catch(e){}return null}function eraseCookie(e){createCookie(e,"",-1)}function getRequestParameter(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")
var t="[util.js \\?&]"+e+"=([^&#]*)",n=new RegExp(t),l=unescape(window.location.href),r=n.exec(l)
return null==r?"":r[1]}function getElementsWithSameId(e){for(var t=[],n=document.getElementById(e);n;)t.push(n),n.id="",n=document.getElementById(e)
for(var l=0;l<t.length;l++)t[l].id=e
return t}function spanSetTextById(e,t,n){var l=getElementById2(e,n)
l&&spanSetText(l,t)}function spanGetTextById(e,t){var n=getElementById2(e,t)
return n?spanGetText(n):"szSpanId="+e+"  NOT FOUND"}function spanSetText(e,t){e&&(e.firstChild.innerHTML=t)}function spanGetText(e){return 0==e||0==e.firstChild?"":e.firstChild.innerHTML.replace("&nbsp;","")}function blockSetPad(e,t){var n=getBlockBySpanId2(e,!0)
return 0==n?showErr("[util.js blockSetPad] NOT Find szBlock="+e,1):(n.style.padding=t,0)}function blockRangeReset(e,t){var n="[util.js blockRangeReset] "
jslog(JSLOG_JSU,n+JSLOG_FUN_START),jslog(JSLOG_JSU,n+" IN: szBlock="+e)
var l=document.getElementById(e)
if(null==l)return showErrIfRequired(t,n+" NOT FOUND szBlock="+e,1)
var r=l.getElementsByTagName("INPUT")
if(null==r||!r.length)return showErrIfRequired(t,n+" NOT FOUND Elements with Tag INPUT for szBlock="+e,1)
for(var o=(r.length,new Array),i=new Array,s=0,a=0,u=0;u<r.length;u++){var c=r[u]
"radio"==c.type?o[s++]=c:"text"==c.type&&(i[a++]=c)}return jslog(JSLOG_JSU,n+" Found "+s+" RB  and "+a+" TEXT"),4!=s||2!=a?(jslog(JSLOG_JSU,n+" Wrong Number of RB or TEXT, cannot continue"),1):(o[1].checked=!0,o[3].checked=!0,i[0].value="",i[1].value="",jslog(JSLOG_JSU,n+JSLOG_FUN_END),0)}function ar2List(e){var t="",n=e.length
if(!n)return t
t=e[0]
for(var l=1;l<n;l++)t+=","+e[l]
return t}function arTrace(e,t,n){var l=t.length
jslog(e,n+".length = "+l)
for(var r=0;r<l;r++)jslog(e,n+"[util.js "+r+"] = "+t[r])}function selectCheckNumItem(e,t,n,l,r,o){var i="[util.js filterCheckNumItem] "
if(jslog(JSLOG_JSU,i+JSLOG_FUN_START),0==n)return showErr("Fn="+i+" Select is null",1)
var s=n.type
if("undefined"==s||"select-multiple"!=s)return jslog(JSLOG_JSU,i+"NOTHING to CHECK: szFilterName="+e+" Is Not select-multiple. (select has select.type="+s+")"),0
var a=selectGetSelectedNum(n)
if(0==a&&o&&(a=n.options.length,jslog(JSLOG_JSU,i+"0 Selected - We set iSel = NumOfOptions="+a)),jslog(JSLOG_JSU,"szFilterName="+e+" iSelNum="+a+" iMinItem="+l+" iMaxItem="+r),a>r||a<l){var u=ERR_FILTER_MAX_ITEM_1+a+ERR_FILTER_MAX_ITEM_2+e+ERR_FILTER_MAX_ITEM_3+l+".."+r+"]"
return 0==l&&(u+=ERR_FILTER_MAX_ITEM_4+e+ERR_FILTER_MAX_ITEM_5+t+ERR_FILTER_MAX_ITEM_6),showErr(u,1)}return jslog(JSLOG_JSU,i+JSLOG_FUN_END),0}function cOpt(e,t){this.text=e,this.value=t}function showDebugFields(e){var t=["SPAN","DIV"]
jslog(JSLOG_INFO,"showDebugFields bShow="+e)
for(var n=0;n<t.length;n++)for(var l=document.getElementsByTagName(t[n]),r=0;r<l.length;r++){var o=l[r]
"debug"!=o.id&&"debug"!=o.className||elementShow(o,e)}}function checkObjDefined(e,t){return e?0:showErr("SW ERROR: "+t+" undefined",1)}function checkArVal(e,t,n){for(var l=0;l<t.length;l++)if(e==t[l])return 0
for(var r="ERROR:\n Value="+e+"\nIS NOT one of the Possible Values: [ ",l=0;l<t.length;l++)r+=t[l],l<t.length-1&&(r+=" , ")
return r+=" ]",void 0!=n&&(r+="\n\n"+n),showErr(r,1)}function sqlCondSelect(e,t,n,l){var r=""
if(void 0==l&&(l=!0),r=l?selectIsMulti(t)?selectGetSelValues(t,n):selectGetSelVal(t,n):selectGetValues(t,n),r.length){r=r.indexOf(",")>0?e+" IN ("+r+")":e+" = "+r}return jslog(JSLOG_JSU,"[util.js sqlCondSelect] OUT szSql: "+r),r}function sqlCondFromToDate(e,t,n){var l="[util.js sqlCondFromTo] ",r=""
jslog(JSLOG_TEST,l+JSLOG_FUN_START)
var o=promptDateGetVal(t),i=promptDateGetVal(n),s=o.length>0,a=i.length>0,u=""
s&&(u=e+" >= TO_DATE('"+o+"','YYYY-MM-DD')")
var c=""
return a&&(c=e+" <= TO_DATE('"+i+"','YYYY-MM-DD')"),s&&a?r=u+" AND "+c:s?r=u:a&&(r=c),jslog(JSLOG_TEST,l+"return szSql="+r),jslog(JSLOG_TEST,l+JSLOG_FUN_END),r}function sqlAddCond(e,t,n){return e.length>0&&t.length>0?e+" AND "+t:t.length>0?t:e}function urlGetParVal(e){var t
return(t=new RegExp("[?&]"+encodeURIComponent(e)+"=([^&]*)").exec(location.search))?decodeURIComponent(t[1]):""}function utilSetLanMsg(e){lan_msg=e,jslog(JSLOG_INFO,"[util.js utilSetLanMsg] lan_msg="+lan_msg)}function dateIsoGetFirstDayCurYear(){return(new Date).getFullYear()+"-01-01"}function dateIsoGetLastDayLastYear(){return(new Date).getFullYear()-1+"-12-31"}function dateIsoGetCurDay(){var e=new Date,t=e.getMonth()+1,n=t>=10?""+t:"0"+t,l=e.getDate(),r=l>=10?""+l:"0"+l
return e.getFullYear()+"-"+n+"-"+r}function arPmtFromSelect(e){var t="[util.arPmtFromSelect] "
jslog(JSLOG_JSU,t+JSLOG_FILE_START)
var n=e.options.length
jslog(JSLOG_JSU,t+"iOptNum="+n)
for(var l=new Array,r=0;r<n;r++){var o=e.options[r],i=new Object,s=o.value.split(SELECT_VALUE_ID_SEP)
i.szId1=s[0],i.szId2=s[1],i.szTxt2=o.text,l.push(i)}return jslog(JSLOG_JSU,t+"return arAll.length= "+l.length),jslog(JSLOG_JSU,t+JSLOG_FILE_END),l}function arPmt2Select(e,t,n,l){var r="[util.arPmt2Select] "
jslog(JSLOG_JSU,r+JSLOG_FILE_START)
var o=e.length
jslog(JSLOG_JSU,r+"IN szId1="+t+"  arPmt with Len="+o)
var i=l?2:0
jslog(JSLOG_JSU,r+"Clear selectPmt bTutti="+l+" iPreserveFirstN="+i),selectRemoveOption(n,i),jslog(JSLOG_JSU,r+"INSERT Entry matching szId1="+t)
for(var s=0;s<o;s++){var a=e[s]
a.szId1==t?(jslog(JSLOG_JSU,r+"["+s+"]="+a.szId1+" - ADDED: "+a.szId2+" "+a.szTxt2),appendOptionLast(n,a.szTxt2,a.szId2)):jslog(JSLOG_TRACE,r+"["+s+"]="+a.szId1+" - NOT ADDED: "+a.szId2+" "+a.szTxt2)}n.selectedIndex=0,n.disabled=!1,jslog(JSLOG_JSU,r+JSLOG_FILE_END)}function mapVal1ToVal2(e,t,n){for(var l=null,r=!1,o="",i=0;!r&&i<e.length;i++){var s=e[i][0],a=e[i][1]
s==t?(l=a,r=1):(i>0&&(o+=" , "),o+=a)}return!r&&n&&showErr("SW ERROR: "+t+" NOT FOUND in the List of Possible Values [ "+o+" ]",-1),l}function tipAddEvent(e){for(var t=["IMG","INPUT"],n=0;n<t.length;n++)for(var l=document.getelementsByTagName(t[n]),r=0;r<l.length;r++){for(var o=l[r],i=o.className,s=!1,a=0;!s&&a<e.length;a++)i==i[a]&&(s=!0)
s&&(o.onmouseover=function(){Tip(this.tip)},o.onmouseout=function(){UnTip()})}}var SW_DEBUG_ENABLE=0,LAN_MSG_EN="EN",LAN_MSG_ITA="ITA",lan_msg=LAN_MSG_EN,SELECT_VALUE_ID_SEP=".",SELECT_NOVALUE_SEL="-1",TAG_SELECT="SELECT",ID_PREFIX_SELECT="selectList",ID_DIV_LOADING_IMG="jsuLoading",APP_NAME_FIREFOX="Netscape",APP_NAME_IE="Microsoft Internet Explorer",NBSP_CODE=160,DEF_COGNOS_GROUP_SEP=",",DEF_COGNOS_DECIMAL_SEP=".",VAL_CB_CHECKED="1",VAL_CB_UNCHECKED="0",BROWSER_TYPE={IE:"IE",FIREFOX:"FIREFOX",OTHER:"OTHER"}
