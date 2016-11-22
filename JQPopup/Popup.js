/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			JQPopup/Popup.js  <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>JSPopup Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/JSPopup.html" target="_self">JSU JSPopup Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>       jquery Popup API, generic for ALL Browsers (IE, Mozilla, Chrome, ..) <BR/>                               
<b>REQUIRED:</b>          From JSU: <ul>
                            <li><b>jsu/externalPlugin/jquery:</b> jquery-ui.css jquery.js jquery-ui.js </li>
                            <li><b>CSS:</b> jsu.css </li>
                            <li><b>JS</b> jsuCmn.js  util.js </li>
                            <li><b>OPTIONAL JS:</b> jslog.js, dom-drag.js (required only to enable jslog)</li>
                          </ul>
<b>First Version:</b>     1.0 Jan 2015  <BR/>
<b>Current Version:</b>   1.8 Jul 2016    <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
function pp_Show(t,e,o){var P="[Popup.js pp_Show] "
jsu_log(P+JSU_LOG_FUN_START),jsu_log(P+"IN: szPopupType="+t),jsu_logObj(P+"IN: objOpt=",o),jsu_logHtml(P+"IN: szMsgHtml=",e),pp_Init(),e=jsu_strReplaceAll(e,"\n","<BR/>")
var p=POPUP_DEF_WIDTH,i="auto",l=POPUP_DEF_MODAL,_=POPUP_DEF_RESIZE,s=POPUP_DEF_SHOW_IMG,u=POPUP_DEF_CLOSE_ON_ESCAPE,n=POPUP_DEF_POSITION,r=jslogGetLogLev()>0
r&&(_=!0)
var a=jQuery("#PopupDiv")
a[0].fnCallback=void 0
var c=void 0!=o&&null!=o,d=!0
c&&(void 0!=o.iWidth&&null!=o.iWidth&&o.iWidth&&(p=o.iWidth),void 0!=o.iHeight&&null!=o.iHeight&&(i=o.iHeight),void 0!=o.position&&(n=o.position),void 0!=o.bModal&&null!=o.bModal&&(l=o.bModal),void 0!=o.bResize&&null!=o.bResize&&(_=o.bResize),void 0!=o.bShowImg&&null!=o.bShowImg&&(s=o.bShowImg),void 0!=o.bCloseOnEscape&&null!=o.bCloseOnEscape&&(u=o.bCloseOnEscape),void 0!=o.bShowBtnSect&&null!=o.bShowBtnSect&&(d=o.bShowBtnSect),void 0!=o.fnCallback&&(jsu_log(P+"fnCallback is defined"),a[0].fnCallback=o.fnCallback)),a.dialog("destroy")
var O=pp_getTitle(t,o),T=null
if(d)var T=pp_GetBtn(t,o)
jsu_logObj(P+"buttons",T),a.dialog({autoOpen:!1,modal:l,dialogClass:"PopupDialog",title:O,position:n,resizable:_,width:p,height:i,minHeight:POPUP_MSG_MIN_HEIGHT,closeOnEscape:u,buttons:T,close:function(t,e){pp_OnClose(t)}})
for(var E=["#PopupConfirm","#PopupNo","#PopupCancel"],I=0;I<E.length;I++){var S=jQuery(E[I])[0]
S&&(S.className="PopupBtn")}pp_ClassInit(t,a),pp_idShow("PopupImg",s),pp_ChoiceInit(t,o),pp_PromptInit(t,o)
var C=jQuery("#PopupMsg")
C.html(e),jQuery("#PopupDiv").dialog("open"),jsu_log(P+JSU_LOG_FUN_END)}function pp_Init(){var t="[Popup.js pp_Init] "
jsu_log(t+JSU_LOG_FUN_START)
var e=document.getElementById("PopupDiv")
null==e&&(jsu_log(t+"'PopupDiv' NOT present - we add it to document"),jQuery("body,html").append(POPUP_DIV_EMPTY))
var o=jQuery("#PopupDiv")
o.hide(),o.html(POPUP_DIV_HTML),o.dialog({autoOpen:!1}),jsu_log(t+JSU_LOG_FUN_END)}function pp_ClassInit(t,e){var o="[Popup.js pp_ClassInit] "
jsu_log(o+JSU_LOG_FUN_START)
var P=t
t==POPUP_TYPE.QUESTION_3&&(P=POPUP_TYPE.QUESTION)
var p=POPUP_TITLE_CLASS_PREFIX+P
jsu_log(o+"set PopupTblHea className="+p),jsu_getElementById2("PopupTblHea").className=p
var i=e.siblings(".ui-dialog-titlebar")[0],l=p+" "+i.className
i.className=l,i.style.backgroundColor=jQuery("#PopupTblHea").css("background-color"),i.style.textAlign="center",i.style.fontSize=jQuery("#PopupTblHea").css("font-size"),i.style.fontWeight=jQuery("#PopupTblHea").css("font-weight"),i.style.color=jQuery("#PopupTblHea").css("color")
var _=POPUP_IMG_CLASS_PREFIX+P
jsu_log(o+"set PopupImg className="+_),jsu_getElementById2("PopupImg").className=_
var s=POPUP_TBLMSG_CLASS_PREFIX+P
jsu_log(o+"set PopupTblMsg className="+s),jsu_getElementById2("PopupTblMsg").className=s,jsu_log(o+JSU_LOG_FUN_END)}function pp_idIsVisible(t){var e="[Popup.js pp_idIsVisible] ",o=jsu_getElementById2(t)
return null==o?alert(e+"SW ERROR szId="+t+"   NOT FOUND"):"none"!=o.style.display}function pp_idShow(t,e){var o="#"+t,P=jQuery(o)
e?P.show():P.hide()}function pp_GetBtn(t,e){var o="[Popup.js pp_BtnInit] "
jsu_log(o+JSU_LOG_FUN_START)
var P=t==POPUP_TYPE.QUESTION||t==POPUP_TYPE.QUESTION_3,p=(t==POPUP_TYPE.QUESTION_3,void 0!=e&&null!=e),i=P?POPUP_BTN_LABEL.QUESTION_CONFIRM:POPUP_BTN_LABEL.CONFIRM,l=POPUP_BTN_LABEL.QUESTION_NO,_=POPUP_BTN_LABEL.QUESTION_CANCEL
jsu_log(o+"Default Label: szConfirmLabel="+i+"   szNoLabel="+l+"   szCancelLabel="+_),null!=e&&(void 0!=e.szConfirmLabel&&""!=e.szConfirmLabel&&(i=e.szConfirmLabel),void 0!=e.szNoLabel&&""!=e.szNoLabel&&(l=e.szNoLabel),void 0!=e.szCancelLabel&&""!=e.szCancelLabel&&(_=e.szCancelLabel))
var s={text:i,id:"PopupConfirm",click:function(){pp_OnClickConfirm()}}
p&&void 0!=e.iConfirmWidth&&null!=e.iConfirmWidth?s.width=e.iConfirmWidth:s.width=POPUP_DEF_BTN_WIDTH
var u={text:l,id:"PopupNo",click:function(){pp_OnClickNo()}}
p&&void 0!=e.iNoWidth&&null!=e.iNoWidth?u.width=e.iNoWidth:u.width=POPUP_DEF_BTN_WIDTH
var n={text:_,id:"PopupCancel",click:function(){pp_OnClickCancel()}}
p&&void 0!=e.iCancelWidth&&null!=e.iCancelWidth?n.width=e.iCancelWidth:n.width=POPUP_DEF_BTN_WIDTH
var r=new Object
return r.confirm=s,t==POPUP_TYPE.QUESTION?r.no=u:t==POPUP_TYPE.QUESTION_3?(r.no=u,r.cancel=n):t!=POPUP_TYPE.CHOICE&&t!=POPUP_TYPE.PROMPT||(r.cancel=n),jsu_log(o+JSU_LOG_FUN_END),r}function pp_ChoiceInit(t,e){var o="[Popup.js pp_ChoiceInit] "
if(jsu_log(o+JSU_LOG_FUN_START),pp_idShow("PopupChoiceMultiSect",!1),pp_idShow("PopupChoiceSingle",!1),t==POPUP_TYPE.CHOICE&&null!=e){jsu_log(o+"objOpt.bChoiceMultiSel="+e.bChoiceMultiSel),szId=e.bChoiceMultiSel?"PopupChoiceMulti":"PopupChoiceSingle",pp_idShow(szId+"Sect",!0),jsu_getElementById2(szId+"Label").innerHTML=e.szChoiceLabel
var P=jsu_getElementById2(szId+"Select")
if(e.bChoiceMultiSel){void 0!=e.iChoiceMultiSize&&null!=e.iChoiceMultiSize&&(iSize=e.iChoiceMultiSize),P.size=iSize
var p=jsu_getElementById2("PopupSelectAll")
p.childNodes[0].textContent=POPUP_SELECT_ALL
var i=jsu_getElementById2("PopupDeselectAll")
i.childNodes[0].textContent=POPUP_DESELECT_ALL}for(var l=0;l<e.arChoice.length;l++){var _=e.arChoice[l],s=new Option(_.szText,_.value)
s.dv=_.szText,s.selected=_.bSel,P[P.length]=s}var u=jsu_getElementById2("PopupChoiceMultiFS"),n=P.clientWidth+15
POPUP_FS_CHOICE_MIN_WIDTH>n&&(n=POPUP_FS_CHOICE_MIN_WIDTH),u.style.width=n+"px",jsu_log(o+"We have SET elFS.style.width="+u.style.width)}jsu_log(o+JSU_LOG_FUN_END)}function pp_PromptInit(t,e){var o="[Popup.js pp_PromptInit] "
if(jsu_log(o+JSU_LOG_FUN_START),pp_idShow("PopupPromptSect",!1),t==POPUP_TYPE.PROMPT&&(pp_idShow("PopupPromptSect",!0),null!=e)){e.szPromptLabel&&e.szPromptLabel.length&&(jsu_getElementById2("PopupPromptLabel").innerHTML=e.szPromptLabel)
var P=jsu_getElementById2("PopupPromptInput")
e.szPromptValue&&e.szPromptValue.length&&(jsu_log(o+"Set Default PromptValue="+e.szPromptValue),P.value=e.szPromptValue),szPromptType=e.szPromptType?e.szPromptType:PROMPT_TYPE.STRING
var p=szPromptType==PROMPT_TYPE.NUMBER
P.setAttribute("type",szPromptType)
var i=!1,l=!1
e.iPromptWidth&&!isNaN(e.iPromptWidth)?P.setAttribute("style","width:"+e.iPromptWidth+"px;"):P.setAttribute("style","width:"+(p?POPUP_DEF_PROMPT_NUMBER_W:POPUP_DEF_PROMPT_STRING_W)+"px;"),e.iPromptMax&&!isNaN(e.iPromptMax)?(l=!0,iPromptMax=e.iPromptMax,P.setAttribute("max",iPromptMax),p||P.setAttribute("maxlength",iPromptMax)):(P.removeAttribute("max"),P.removeAttribute("maxlength")),e.iPromptMin&&!isNaN(e.iPromptMin)?(i=!0,iPromptMin=e.iPromptMin,P.setAttribute("min",iPromptMin)):P.removeAttribute("min"),P.focus()
var _=p?POPUP_PROMPT_TIP.NUMBER:POPUP_PROMPT_TIP.STRING;(i||l)&&(_=p?POPUP_PROMPT_TIP.NUMBER_RANGE:POPUP_PROMPT_TIP.STRING_RANGE,i&&l?_+="["+iPromptMin+".."+iPromptMax+"]":l?_+="[0.."+iPromptMax+"]":i&&(_+="["+iPromptMin+"..]")),P.setAttribute("title",_)}jsu_log(o+JSU_LOG_FUN_END)}function getTextWidth(t,e){var o=getTextWidth.canvas||(getTextWidth.canvas=document.createElement("canvas"))
if(void 0==o||void 0==o.getContext)return 0
var P=o.getContext("2d")
P.font=e
var p=P.measureText(t)
return p.width}function pp_getTitle(t,e){var o=e?e.szTitle:null
return void 0!=typeof o&&null!=o&&""!=o?o:t==POPUP_TYPE.INFO?POPUP_DEF_TITLE.INFO:t==POPUP_TYPE.WARN?POPUP_DEF_TITLE.WARN:t==POPUP_TYPE.ERR?POPUP_DEF_TITLE.ERR:t==POPUP_TYPE.ALARM?POPUP_DEF_TITLE.ALARM:t==POPUP_TYPE.CONFIRM?POPUP_DEF_TITLE.CONFIRM:t==POPUP_TYPE.PROMPT?POPUP_DEF_TITLE.PROMPT:t==POPUP_TYPE.CHOICE?POPUP_DEF_TITLE.CHOICE:t==POPUP_TYPE.QUESTION||t==POPUP_TYPE.QUESTION_3?POPUP_DEF_TITLE.QUESTION:void 0}function pp_ValidateInput(t){var e="[Popup.js pp_ValidateInput] "
jsu_log(e+JSU_LOG_FUN_START)
var o=t.value
jsu_log(e+"Prompt="+o)
var P=t.getAttribute("type"),p=P==PROMPT_TYPE.NUMBER,i=o?o.length:0,l=parseInt(t.getAttribute("min")),_=parseInt(t.getAttribute("max"))
isNaN(l)&&(l=null),isNaN(_)&&(_=null),p&&(o=parseInt(o))
var s=!1
if(p&&(jsu_log(e+"VALIDATION is required for PROMPT NUMBER - We check that promptValue="+o+"  is a NUMBER"),s=isNaN(o)),!s&&l&&(jsu_log(e+"VALIDATION required for iMin="+l+" - PROMPT szType="+P),p&&l>o&&(s=!0),!p&&l>i&&(s=!0)),!s&&_&&(jsu_log(e+"VALIDATION required for iMax="+_+" - PROMPT szType="+P),p&&o>_&&(s=!0),!p&&i>_&&(s=!0)),s){var u=t.getAttribute("title")
jsu_log(e+"VALIDATION ERROR for promptValue="+o+" Show Err: "+u)
var n=jsu_getElementById2("PopupPromptError")
return n.innerHTML=u,elementShow(n,!0,"inline"),t.setAttribute("class","PopupPromptError"),1}return jsu_log(e+JSU_LOG_FUN_END)}function pp_OnClose(t){var e="[Popup.js pp_OnClose] "
jsu_log(e+JSU_LOG_FUN_START),t.originalEvent&&(jsu_log(e+"Clicking on dialog box X or ESC"),pp_Close({retBtn:POPUP_BTN.CLOSE})),jsu_log(e+JSU_LOG_FUN_END)}function pp_Close(t){var e="[Popup.js pp_Close] "
jsu_log(e+JSU_LOG_FUN_START)
var o=t&&t.retBtn==POPUP_BTN.CONFIRM
if(jsu_log(e+"bConfirm="+o),o){var P=pp_idIsVisible("PopupPromptSect")
if(P){var p=jsu_getElementById2("PopupPromptInput")
if(pp_ValidateInput(p))return
t.promptValue=p.value}var i=pp_idIsVisible("PopupChoiceSingleSect"),l=pp_idIsVisible("PopupChoiceMultiSect")
if(i||l){jsu_log(e+"Get Choice Selection")
for(var _=i?"PopupChoiceSingleSelect":"PopupChoiceMultiSelect",s=jsu_getElementById2(_),u=new Array,n="",r="",a="",c=0;c<s.options.length;c++){var d=s.options[c],O={value:d.value,szText:d.text,bSel:d.selected}
d.selected&&(n+=a+d.value,r+=a+d.text,""==a&&(a=", ")),u.push(O)}t.choiceValue=n,t.choiceText=r,t.arChoice=u}}jsu_logObj(e+"retObj",t)
var T=jQuery("#PopupDiv")
jsu_log(e+"close and destroy Dialog")
var E=T[0].fnCallback
T.dialog("destroy"),"function"==typeof UnTip&&UnTip(),void 0!=E&&(jsu_log(e+"call fncallback"),E(t)),jsu_log(e+JSU_LOG_FUN_END)}function pp_OnFocusPromptInput(){var t=jsu_getElementById2("PopupPromptInput")
t.setAttribute("class","PopupPromptInput")
var e=jsu_getElementById2("PopupPromptError")
elementShow(e,!1)}function pp_OnClickConfirm(){pp_Close({retBtn:POPUP_BTN.CONFIRM})}function pp_DeselectAll(){for(var t=jsu_getElementById2("PopupChoiceMultiSelect"),e=0;e<t.options.length;e++)t.options[e].selected=!1}function pp_getId(t){t[0]=1e3+t[1]+(t[2]+Math.floor(Math.random()*t[3]))}function pp_SelectAll(){for(var t=jsu_getElementById2("PopupChoiceMultiSelect"),e=0;e<t.options.length;e++)t.options[e].selected=!0}function pp_OnClickNo(){pp_Close({retBtn:POPUP_BTN.NO})}function pp_OnClickCancel(){pp_Close({retBtn:POPUP_BTN.CANCEL})}function pp_OnResize(t,e){var o="[Popup.js pp_onResize] "
try{var P=jQuery("#PopupMsg")
jsu_log(o)
var p=(P.dialog("option","width"),P[0].offsetWidth),i=P[0].offsetHeight
void 0!=p&&void 0!=i&&jsu_log(o+"Window size: width="+p+", height="+i)}catch(l){jsu_log(o+"EXCEPTION "+l.message)}}function Popup(t,e,o){return pp_Show(t,e,o)}function PopupChoice(t,e,o,P){return void 0!=P&&null!=P||(P=new Array),P.szChoiceLabel=e,P.arChoice=o,pp_Show(POPUP_TYPE.CHOICE,t,P)}function isIEPopup(){return!1}var POPUP_TYPE={INFO:"Info",CONFIRM:"Confirm",ERR:"Error",ALARM:"Alarm",WARN:"Warning",QUESTION:"Question",QUESTION_3:"Question_3Btn",PROMPT:"Prompt",CHOICE:"Choice"},PROMPT_TYPE={NUMBER:"number",STRING:"string"},POPUP_BTN={CLOSE:"CLOSE",CONFIRM:"CONFIRM",NO:"NO",CANCEL:"CANCEL"},POPUP_DEF_WIDTH=600,POPUP_DEF_MULTICHOICE_SIZE=5,POPUP_DEF_SHOW_IMG=!0,POPUP_DEF_RESIZE=!0,POPUP_DEF_CLOSE_ON_ESCAPE=!0,POPUP_DEF_MODAL=!0,POPUP_DEF_POSITION={my:"center",at:"center"},POPUP_DEF_PROMPT_NUMBER_W=50,POPUP_DEF_PROMPT_STRING_W=200,POPUP_DEF_BTN_WIDTH=120,POPUP_IMG_CLASS_PREFIX="PopupImg",POPUP_TBLMSG_CLASS_PREFIX="PopupTblMsg",POPUP_TITLE_CLASS_PREFIX="PopupTitle",POPUP_MSG_MIN_HEIGHT=160,POPUP_FS_CHOICE_MIN_WIDTH=200,POPUP_DIV_EMPTY='<div id="PopupDiv" class="Popup" style="display:none;"></div> ',POPUP_DIV_HTML='<table id="PopupTblHea" class="PopupTitleInfo" style="display:none" width="100%" >      <tr><td id="PopupTitle" class="PopupTitle" width="100%">INFORMATION</td>  </tr>    </table>      <table id="PopupTblMsg" class="PopupTblMsgInfo" style="min-height:80px;" width="100%">      <tr>        <td id="PopupImg" class="PopupImgConfirm" height="100%" width="80px">        </td>        <td>          <table class="PopupMsg">            <tr>              <td id="PopupMsg" class="PopupMsg" >              </td>            </tr>            <tr>              <!--    Section for  PopupPrompt   -->               <td id="PopupPromptSect" class="PopupPrompt" style="display:none">                 <table>                   <tr>                     <td><label id="PopupPromptLabel" class="PopupPrompt"></label></td>                     <td><input id="PopupPromptInput" class="PopupPrompt" onfocus="pp_OnFocusPromptInput();"/></td>                   </tr>                   <tr>                     <td></td>                     <td><label id="PopupPromptError" class="PopupPromptError"/></td>                   </tr>                 </table>               </td>            </tr>            <tr>              <!--    Section for  PopupChoice Single   -->               <td id="PopupChoiceSingleSect" class="PopupChoiceSingle" style="display:none">                 <label id="PopupChoiceSingleLabel" class="PopupChoiceSingle">Choice:</label>                 <select id="PopupChoiceSingleSelect" class="PopupChoiceSingle"></select>                 </td>            </tr>            <tr>              <!--    Section for  PopupChoice Multi   -->               <td id="PopupChoiceMultiSect" class="PopupChoiceMulti" style="display:none;text-align:center;">                     <fieldset id="PopupChoiceMultiFS" class="PopupChoiceMulti">                       <legend id="PopupChoiceMultiLabel" class="PopupChoiceMulti">Multi</legend>                       <select id="PopupChoiceMultiSelect" class="PopupChoiceMulti" multiple=true></select>                       <div style="margin-top:10px; margin-bottom:10px;">                          <a id="PopupSelectAll" href="javascript:pp_SelectAll();" class="Popup">SELECT All</a>                          <a id="PopupDeselectAll" href="javascript:pp_DeselectAll();" class="Popup" style="padding-left:15px;">DESELECT All</a>                       </div>                     </fieldset>                </td>            </tr>            <tr><td class="tipr" id="pp_f"></td></tr>          </table>        </td>      </tr>    </table>',jsPopup_bScroll=!1
