function pp_show(e,t,P){var o="[Popup.js pp_show] "
jsu_log(o+"------------------- START"),jsu_log(o+"IN: szPopupType="+e),jsu_logObj(o+"IN: objOpt=",P)
var i=pp_getBrowser(),l=pp_getBrowserMode(i)
if(jsu_log(o+" szBrowser="+i+"  szBrowserMode="+l),l==POPUP_BROWSER_MODE_ALERT)return pp_showAlert(e,t)
var p=POPUP_DEF_WIDTH,_=POPUP_DEF_HEIGHT,n="scroll=no;",s=POPUP_DEF_RESIZE?"resizable=yes;":"resizable=no;"
"function"==typeof jslog&&jslogGetLogLev()>0&&(s="resizable=yes;"),null!=P&&(void 0!=P.bNewlineConversion&&P.bNewlineConversion&&(t=jsu_strReplaceAll(t,"\n","<BR/>")),void 0!=P.iWidth&&null!=P.iWidth&&P.iWidth&&(p=P.iWidth),void 0!=P.iHeight&&null!=P.iHeight&&P.iHeight&&(_=P.iHeight),void 0!=P.bScroll&&null!=P.bScroll&&P.bScroll&&(n="scroll=yes;"),void 0!=P.bResize&&P.bResize&&(s="resizable=yes;"))
var r="dialogWidth="+p+"px; dialogHeight="+_+"px; "+n+s+"center=yes;",u=new Object
u.szPopupType=e,u.iHeight=_,u.szMsgHtml=t,u.objOpt=P,u.iWidth=p,"function"==typeof jslog?u.objJslogOpt=jslogGetOpt():u.objJslogOpt={iLogLev:0}
var O=popupPathHtml+POPUP_HTML
if(jsu_logObj("parIn",u),1!=POPUP_OPACITY){var a=document.getElementsByTagName("BODY")[0],E=a.style.opacity
jsu_log("From iOpacity="+E+" To "+POPUP_OPACITY),a.style.opacity=POPUP_OPACITY}if(l==POPUP_BROWSER_MODE_POPUP){jsu_log(o+i+" url="+O+" szFeatures="+r),loadingShow(!0),u.elLoading=loadingGetEl()
var d=window.showModalDialog(O,u,r)
void 0==d&&(d=new Object,d.retBtn=POPUP_BTN.CLOSE),loadingShow(!1)}else if(l==POPUP_BROWSER_MODE_POPUP_URL){var T=window.screen.width/2-p/2,g=window.screen.height/2-_/2
r="center=yes;dialogWidth="+p+"px; dialogHeight:"+_+"px; dialogTop:"+g+"px; dialogLeft:"+T+"px;directories:no;titlebar:no;toolbar:no;location:no;status:no;menubar:no;scroll=no;resizable="+s+";",O+=obj2URIQueryString(u),jsu_log(o+i+"\nurl="+O+"\nszFeatures="+r)
var d=window.showModalDialog(O,window,r)
void 0==d&&(d=new Object,d.retBtn=POPUP_BTN.CLOSE)}return jsu_logObj("retObj",d),1!=POPUP_OPACITY&&void 0!=a&&(jsu_log("Restore iOpacity="+E),a.style.opacity=E),jsu_log(o+"-------------------"),d}function pp_showAlert(e,t){var P=new Object
P.retBtn=POPUP_BTN.CLOSE,jsu_log("[Popup.js pp_show] -------------------")
var o=msgHtml2Str(t)
return e==POPUP_TYPE.INFO||e==POPUP_TYPE.CONFIRM||e==POPUP_TYPE.ERR||e==POPUP_TYPE.WARN?(alert(o),null):(e==POPUP_TYPE.QUESTION?confirm(o)?P.retBtn=POPUP_BTN.CONFIRM:P.retBtn=POPUP_BTN.NO:alert("ERROR: PopupType="+e+" is NOT SUPPORTED with this Browser.\n\nMessage was:\n"+o),P)}function pp_getBrowser(){var e=(navigator.appName,POPUP_BROWSER_TYPE_UNKNOWN)
return"undefined"!=typeof InstallTrigger?e=POPUP_BROWSER_TYPE_FIREFOX:(navigator.appName==APP_NAME_IE||navigator.appName==APP_NAME_IE_11&&null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent))&&(e=POPUP_BROWSER_TYPE_IE),jsu_log("[Popup.js pp_getBrowser] szBrowser="+e+" -  navigator.appCodeName="+navigator.appCodeName+"  navigator.appName="+navigator.appName),e}function pp_getBrowserMode(e){return e==POPUP_BROWSER_TYPE_IE?POPUP_BROWSER_IE_MODE:e==POPUP_BROWSER_TYPE_FIREFOX?POPUP_BROWSER_FIREFOX_MODE:POPUP_BROWSER_OTHER_MODE}function pp_classInit(e){var t="[Popup.js pp_classInit] "
jsu_log(t+"-------------------")
var P=e
e==POPUP_TYPE.QUESTION_3&&(P=POPUP_TYPE.QUESTION)
var o=POPUP_TITLE_CLASS_PREFIX+P
jsu_log(t+"set PopupTblHea className="+o),jsu_getElementById2("PopupTblHea").className=o
var i=POPUP_IMG_CLASS_PREFIX+P
jsu_log(t+"set PopupImg className="+i),jsu_getElementById2("PopupImg").className=i
var l=POPUP_TBLMSG_CLASS_PREFIX+P
jsu_log(t+"set PopupTblMsg className="+l),jsu_getElementById2("PopupTblMsg").className=l,jsu_log(t+"-------------------")}function pp_idIsVisible(e){var t=jsu_getElementById2(e)
return null==t?alert("[Popup.js pp_idIsVisible] SW ERROR szId="+e+"   NOT FOUND"):"none"!=t.style.display}function pp_elShow(e,t){t?(e.style.display="inline",e.style.visibility="visible"):(e.style.display="none",e.style.visibility="hidden")}function pp_idShow(e,t){var P="[Popup.js pp_idShow] "
jsu_log(P+"szId="+e+" bShow="+t)
var o=jsu_getElementById2(e)
if(null==o)return alert(P+"SW ERROR szId="+e+"   NOT FOUND")
pp_elShow(o,t)}function pp_idHideIfRequired(e,t){t||pp_idShow(e,t)}function pp_btnInit(e){var t="[Popup.js pp_btnInit] "
jsu_log(t+"-------------------")
var P=jsu_getElementById2("PopupConfirm"),o=jsu_getElementById2("PopupNo"),i=jsu_getElementById2("PopupCancel"),l=e.szPopupType,p=l==POPUP_TYPE.QUESTION||l==POPUP_TYPE.QUESTION_3,_=l==POPUP_TYPE.QUESTION_3,n=p?POPUP_BTN_LABEL.QUESTION_CONFIRM:POPUP_BTN_LABEL.CONFIRM,s=POPUP_BTN_LABEL.QUESTION_NO,r=POPUP_BTN_LABEL.QUESTION_CANCEL
jsu_log(t+"Default Label: szConfirmLabel="+n+"   szNoLabel="+s+"   szCancelLabel="+r)
var u=e.objOpt
null!=u&&(void 0!=u.szConfirmLabel&&""!=u.szConfirmLabel&&(n=u.szConfirmLabel),void 0!=u.szNoLabel&&""!=u.szNoLabel&&(s=u.szNoLabel),void 0!=u.szCancelLabel&&""!=u.szCancelLabel&&(r=u.szCancelLabel),void 0!=u.iConfirmWidth&&0!=u.iConfirmWidth&&(P.style.width=u.iConfirmWidth+"px"),void 0!=u.iNoWidth&&0!=u.iNoWidth&&(o.style.width=u.iNoWidth+"px"),void 0!=u.iCancelWidth&&0!=u.iCancelWidth&&(i.style.width=u.iCancelWidth+"px")),jsu_log(t+"SET BTN  Label: szConfirmLabel="+n+"   szNoLabel="+s+"   szCancelLabel="+r),P.value=n,o.value=s,i.value=r,jsu_log(t+"Set Btn Visibility"),pp_elShow(o,p),pp_elShow(i,_),jsu_log(t+"-------------------")}function pp_optChoiceInit(e){var t="[Popup.js pp_optChoiceInit] "
jsu_log(t+"-------------------")
var P=e.objOpt
if(null!=P){void 0==P.bChoiceMultiSel&&(P.bChoiceMultiSel=!1),szId=P.bChoiceMultiSel?"PopupChoiceMulti":"PopupChoiceSingle",jsu_log(t+"objOpt.bChoiceMultiSel="+P.bChoiceMultiSel+"  szId="+szId),pp_idShow(szId+"Sect",!0),jsu_getElementById2(szId+"Label").innerHTML=P.szChoiceLabel
var o=jsu_getElementById2(szId+"Select")
if(P.bChoiceMultiSel){void 0!=P.iChoiceMultiSize&&null!=P.iChoiceMultiSize&&(iSize=P.iChoiceMultiSize),o.size=iSize
jsu_getElementById2("PopupSelectAll").childNodes[0].textContent=POPUP_SELECT_ALL
jsu_getElementById2("PopupDeselectAll").childNodes[0].textContent=POPUP_DESELECT_ALL}for(var i=0;i<P.arChoice.length;i++){var l=P.arChoice[i],p=new Option(l.szText,l.value)
p.dv=l.szText,p.selected=l.bSel,o[o.length]=p}var _=jsu_getElementById2("PopupChoiceMultiFS"),n=o.clientWidth+15
n<POPUP_CHOICE_FS_MIN_WIDTH&&(n=POPUP_CHOICE_FS_MIN_WIDTH),_.style.width=n+"px",jsu_log(t+"We have SET elFS.style.width="+_.style.width)}jsu_log(t+"-------------------")}function pp_optLayoutInit(e){var t="[Popup.js pp_optChoiceInit] "
jsu_log(t+PPLOG_FUN_START)
var P=POPUP_DEF_SHOW_TITLE,o=POPUP_DEF_SHOW_IMG,i=!0,l=e.objOpt
null!=l&&(jsu_logObj(t+"There are Custom Option:",l),void 0!=l.bShowTitle&&null!=l.bShowTitle&&(P=l.bShowTitle),void 0!=l.bShowImg&&null!=l.bShowImg&&(o=l.bShowImg),void 0!=l.bShowBtnSect&&null!=l.bShowBtnSect&&(i=l.bShowBtnSect)),pp_idHideIfRequired("PopupTblHea",P),pp_idHideIfRequired("PopupImg",o),pp_idHideIfRequired("PopupDivBtn",i),jsu_log(t+PPLOG_FUN_END)}function pp_promptInit(e,t){var P="[Popup.js pp_promptInit] "
if(jsu_log(P+"-------------------"),pp_idShow("PopupPromptSect",!1),e==POPUP_TYPE.PROMPT&&(pp_idShow("PopupPromptSect",!0),null!=t)){t.szPromptLabel&&t.szPromptLabel.length&&(jsu_getElementById2("PopupPromptLabel").innerHTML=t.szPromptLabel)
var o=jsu_getElementById2("PopupPromptInput")
t.szPromptValue&&t.szPromptValue.length&&(jsu_log(P+"Set Default PromptValue="+t.szPromptValue),o.value=t.szPromptValue),szPromptType=t.szPromptType?t.szPromptType:PROMPT_TYPE.STRING
var i=szPromptType==PROMPT_TYPE.NUMBER
o.setAttribute("type",szPromptType)
var l=!1,p=!1
t.iPromptWidth&&!isNaN(t.iPromptWidth)?o.setAttribute("style","width:"+t.iPromptWidth+"px;"):o.setAttribute("style","width:"+(i?POPUP_DEF_PROMPT_NUMBER_W:POPUP_DEF_PROMPT_STRING_W)+"px;"),t.iPromptMax&&!isNaN(t.iPromptMax)?(p=!0,iPromptMax=t.iPromptMax,o.setAttribute("max",iPromptMax),i||o.setAttribute("maxlength",iPromptMax)):(o.removeAttribute("max"),o.removeAttribute("maxlength")),t.iPromptMin&&!isNaN(t.iPromptMin)?(l=!0,iPromptMin=t.iPromptMin,o.setAttribute("min",iPromptMin)):o.removeAttribute("min"),o.focus()
var _=i?POPUP_PROMPT_TIP.NUMBER:POPUP_PROMPT_TIP.STRING;(l||p)&&(_=i?POPUP_PROMPT_TIP.NUMBER_RANGE:POPUP_PROMPT_TIP.STRING_RANGE,l&&p?_+="["+iPromptMin+".."+iPromptMax+"]":p?_+="[0.."+iPromptMax+"]":l&&(_+="["+iPromptMin+"..]")),o.setAttribute("title",_)}jsu_log(P+"-------------------")}function pp_getHeight(){var e=document.getElementById("PopupDivBtn"),t=e.getBoundingClientRect(),P=document.body,o=document.documentElement,i=window.pageYOffset||o.scrollTop||P.scrollTop,l=o.clientTop||P.clientTop||0,p=t.top+i-l,_=Math.round(p)+e.clientHeight
return jsu_log("[Popup.js pp_getHeight] Current iDlgH="+_),_}function getTextWidth(e,t){var P=getTextWidth.canvas||(getTextWidth.canvas=document.createElement("canvas"))
if(void 0==P||void 0==P.getContext)return 0
var o=P.getContext("2d")
return o.font=t,o.measureText(e).width}function pp_getTitle(e){var t=e.objOpt,P=t?t.szTitle:null,o=e.szPopupType
return void 0!=typeof P&&null!=P&&""!=P?P:o==POPUP_TYPE.INFO?POPUP_DEF_TITLE.INFO:o==POPUP_TYPE.WARN?POPUP_DEF_TITLE.WARN:o==POPUP_TYPE.ERR?POPUP_DEF_TITLE.ERR:o==POPUP_TYPE.CONFIRM?POPUP_DEF_TITLE.CONFIRM:o==POPUP_TYPE.CHOICE?POPUP_DEF_TITLE.CHOICE:o==POPUP_TYPE.PROMPT?POPUP_DEF_TITLE.PROMPT:o==POPUP_TYPE.QUESTION||o==POPUP_TYPE.QUESTION_3?POPUP_DEF_TITLE.QUESTION:o==POPUP_TYPE.ALARM?POPUP_DEF_TITLE.ALARM:o==POPUP_TYPE.PROMPT?POPUP_DEF_TITLE.PROMPT:void 0}function pp_ValidateInput(e){var t="[Popup.js pp_ValidateInput] "
jsu_log(t+"-------------------")
var P=e.value
jsu_log(t+"Prompt="+P)
var o=e.getAttribute("type"),i=o==PROMPT_TYPE.NUMBER,l=P?P.length:0,p=parseInt(e.getAttribute("min")),_=parseInt(e.getAttribute("max"))
isNaN(p)&&(p=null),isNaN(_)&&(_=null),i&&(P=parseInt(P))
var n=!1
if(i&&(jsu_log(t+"VALIDATION is required for PROMPT NUMBER - We check that promptValue="+P+"  is a NUMBER"),n=isNaN(P)),!n&&p&&(jsu_log(t+"VALIDATION required for iMin="+p+" - PROMPT szType="+o),i&&p>P&&(n=!0),!i&&p>l&&(n=!0)),!n&&_&&(jsu_log(t+"VALIDATION required for iMax="+_+" - PROMPT szType="+o),i&&_<P&&(n=!0),!i&&_<l&&(n=!0)),n){var s=e.getAttribute("title")
jsu_log(t+"VALIDATION ERROR for promptValue="+P+" Show Err: "+s)
var r=jsu_getElementById2("PopupPromptError")
return r.innerHTML=s,elementShow(r,!0,"inline"),e.setAttribute("class","PopupPromptError"),1}return jsu_log(t+"-------------------")}function pp_close(e){var t="[Popup.js pp_close] "
jsu_log(t+"-------------------")
var P=e&&e.retBtn==POPUP_BTN.CONFIRM
if(jsu_log(t+"bConfirm="+P),P){if(pp_idIsVisible("PopupPromptSect")){var o=jsu_getElementById2("PopupPromptInput")
if(pp_ValidateInput(o))return
e.promptValue=o.value}var i=pp_idIsVisible("PopupChoiceSingleSect"),l=pp_idIsVisible("PopupChoiceMultiSect")
if(i||l){jsu_log(t+"Get Choice Selection")
for(var p=i?"PopupChoiceSingleSelect":"PopupChoiceMultiSelect",_=jsu_getElementById2(p),n=new Array,s="",r="",u="",O=0;O<_.options.length;O++){var a=_.options[O],E={value:a.value,szText:a.text,bSel:a.selected}
a.selected&&(s+=u+a.value,r+=u+a.text,""==u&&(u=", ")),n.push(E)}e.choiceValue=s,e.choiceText=r,e.arChoice=n}}window.returnValue=e,jsu_logObj(t+"window.returnValue",window.returnValue),jsu_log(t+"-------------------"),window.close()}function pp_onClickConfirm(){pp_close({retBtn:POPUP_BTN.CONFIRM})}function pp_deselectAll(){for(var e=jsu_getElementById2("PopupChoiceMultiSelect"),t=0;t<e.options.length;t++)e.options[t].selected=!1}function pp_SelectAll(){for(var e=jsu_getElementById2("PopupChoiceMultiSelect"),t=0;t<e.options.length;t++)e.options[t].selected=!0}function pp_onResize(){var e=window.outerWidth,t=window.outerHeight
if(void 0!=e&&void 0!=t){var P=document.getElementById("PopupDiv"),o=e-16
popup_bScroll&&(o-=20),jsu_log("[Popup.js pp_onResize] Change divPopup width from ="+P.clientWidth+" to ="+o),P.style.width=o+"px"}}function pp_onClickNo(){pp_close({retBtn:POPUP_BTN.NO})}function pp_onClickCancel(){pp_close({retBtn:POPUP_BTN.CANCEL})}function pp_onLoad(){var e="[Popup.js pp_onLoad] ",t=null,P=pp_getBrowser(),o=location.search
void 0==(t=o.length?objFromURIQueryString(o):window.dialogArguments)&&(t=new Object,t.szMsgHtml="<b> This is a Test only For Developers</b><br/>We want to Try what is the minimum Height required for a Message",t.bDefWidth=!0,t.iJslogLev=7,t.iWidth=POPUP_DEF_WIDTH,t.szPopupType=POPUP_TYPE.CHOICE,t.objOpt={szChoiceLabel:"VOTE:",arChoice:[{value:1,szText:"1 - Not Good",bSel:!1},{value:2,szText:"2 - Good",bSel:!1},{value:3,szText:"3 - Very Good",bSel:!0},{value:4,szText:"4 - Excellent",bSel:!1}],bChoiceMultiSel:!0,iChoiceMultiSize:4})
var i=t.objJslogOpt
if(i&&i.iLogLev>0){var l=new Object
l.bLogTime=i.bLogTime
var p=i.szPathImg
0==p.indexOf("../")&&(p=p.substr(3)),l.szPathImg=p,jslog_init(i.iLogLev,l)}jsu_log(e+PPLOG_FUN_START)
var l=t.objOpt,_=POPUP_DEF_CLOSE_ON_ESCAPE
l&&void 0!=l.bCloseOnEscape&&(_=l.bCloseOnEscape),_&&(document.onkeydown=function(e){27===e.keyCode&&pp_close({retBtn:POPUP_BTN.CLOSE})})
var n=POPUP_DEF_RESIZE
jsu_log(e+"bResize="+n),l&&void 0!=l.bResize&&(n=l.bResize),n&&(jsu_log(e+"SET onresize"),document.body.onresize=function(){pp_onResize()}),void 0!=t.elLoading&&t.elLoading&&(jsu_log(e+"Hide Loading in Parent"),loadingShowByEl(t.elLoading,!1)),t.elLoading=null,jsu_logObj(e+"parIn",t),jsu_log(e+"set Dlg Layout -------")
var s=pp_getTitle(t),l=t.objOpt
jsu_log(e+"Set Title="+s),document.title=s,jsu_getElementById2("PopupTitle").innerHTML=s
var r=t.szPopupType
pp_classInit(r),pp_btnInit(t),r==POPUP_TYPE.CHOICE&&pp_optChoiceInit(t),pp_optLayoutInit(t),pp_promptInit(r,l),jsu_getElementById2("PopupMsg").innerHTML=t.szMsgHtml
var u=(t.szMsgHtml,POPUP_DEF_HEIGHT)
if(u=l&&l.iHeight?l.iHeight:pp_getHeight(),u>POPUP_MAX_HEIGHT&&(u=POPUP_MAX_HEIGHT),P==POPUP_BROWSER_TYPE_IE)jsu_log(e+P+" set iDlgH="+u),window.dialogHeight=u+"px"
else if(u+=8,jsu_log(e+"NOT IE set iDlgH="+u),void 0!=window.innerHeight&&(jsu_log(e+P+" Firefox set innerHeight="+u),window.innerHeight=u),void 0!=window.screen.height&&void 0!=window.screen.width){var O=window.screen.height,a=window.screen.width,E=parseInt((O-u)/2),d=parseInt((a-t.iWidth)/2)
window.moveTo(d,E)}if(popup_bScroll=null!=l&&void 0!=l.bScroll&&null!=l.bScroll&&l.bScroll){var T=document.getElementById("PopupDiv"),g=T.clientWidth
jsu_log(e+"divPopup.clientWidth="+T.clientWidth+"  divPopup.style.width="+T.style.width),g-=20,T.style.width=g+"px",jsu_log(e+"SET divPopup.clientWidth="+T.clientWidth+"  divPopup.style.width="+T.style.width),u+=20}jsu_log(e+"set iDlgH="+u),window.dialogHeight=u+"px",jsu_log(e+PPLOG_FUN_END)}function PopupSetPathHtml(e){popupPathHtml=e}function Popup(e,t,P){return pp_show(e,t,P)}function PopupChoice(e,t,P,o){var i="[Popup.js PopupChoice] "
return void 0!=o&&null!=o||(o=new Array),jsu_log(i+"szChoiceLabel="+t),o.szChoiceLabel=t,o.arChoice=P,jsu_logObj(i+"objOpt",o),pp_show(POPUP_TYPE.CHOICE,e,o)}function isIEPopup(){return!0}var POPUP_DEF_WIDTH=600,POPUP_DEF_CLOSE_ON_ESCAPE=!0,POPUP_DEF_RESIZE=!1,POPUP_OPACITY=.5,POPUP_HTML="Popup.html",POPUP_DEF_MULTICHOICE_SIZE=5,POPUP_MAX_HEIGHT=900,POPUP_BROWSER_MODE_POPUP="POPUP",POPUP_BROWSER_MODE_ALERT="ALERT",POPUP_BROWSER_MODE_POPUP_URL="POPUP_URL",POPUP_BROWSER_IE_MODE=POPUP_BROWSER_MODE_POPUP,POPUP_BROWSER_FIREFOX_MODE=POPUP_BROWSER_MODE_POPUP_URL,POPUP_BROWSER_OTHER_MODE=POPUP_BROWSER_MODE_ALERT,POPUP_DEF_SHOW_IMG=!0,POPUP_DEF_SHOW_TITLE=!0,POPUP_DEF_RESIZE=!1,POPUP_DEF_PROMPT_NUMBER_W=50,POPUP_DEF_PROMPT_STRING_W=200,PPLOG_FUN_START="-------------- START",PPLOG_FUN_END="-------------- END",POPUP_TYPE={INFO:"Info",CONFIRM:"Confirm",ERR:"Error",ALARM:"Alarm",WARN:"Warning",QUESTION:"Question",QUESTION_3:"Question_3Btn",PROMPT:"Prompt",CHOICE:"Choice"},PROMPT_TYPE={NUMBER:"number",STRING:"string"},POPUP_BTN={CLOSE:"CLOSE",CONFIRM:"CONFIRM",NO:"NO",CANCEL:"CANCEL"},POPUP_IMG_CLASS_PREFIX="PopupImg",POPUP_TBLMSG_CLASS_PREFIX="PopupTblMsg",POPUP_TITLE_CLASS_PREFIX="PopupTitle",POPUP_DEF_HEIGHT=200,POPUP_BROWSER_TYPE_IE="IE",POPUP_BROWSER_TYPE_FIREFOX="Firefox",POPUP_BROWSER_TYPE_UNKNOWN="BrowserUnknown",POPUP_CHOICE_FS_MIN_WIDTH=200,APP_NAME_FIREFOX="Netscape",APP_NAME_IE="Microsoft Internet Explorer",APP_NAME_IE_11="Netscape",popupPathHtml=JSU_PATH_POPUP_HTML,popup_bScroll=!1
