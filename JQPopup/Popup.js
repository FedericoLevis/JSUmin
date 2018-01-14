function pp_Show(e,t,o){var P="[Popup.js pp_Show] "
jsu_log(P+JSU_LOG_FUN_START),jsu_log(P+"IN: szPopupType="+e),jsu_logObj(P+"IN: objOpt=",o),jsu_logHtml(P+"IN: szMsgHtml=",t),pp_Init()
var i=POPUP_DEF_WIDTH,p="auto",l=POPUP_DEF_MODAL,_=POPUP_DEF_RESIZE,s=POPUP_DEF_SHOW_IMG,n=POPUP_DEF_CLOSE_ON_ESCAPE,u=POPUP_DEF_POSITION
jslogGetLogLev()>0&&(_=!0)
var r=jQuery("#PopupDiv")
r[0].fnCallback=void 0
var a=void 0!=o&&null!=o,c=!0
a&&(void 0!=o.bNewlineConversion&&o.bNewlineConversion&&(t=jsu_strReplaceAll(t,"\n","<BR/>")),void 0!=o.iWidth&&null!=o.iWidth&&o.iWidth&&(i=o.iWidth),void 0!=o.iHeight&&null!=o.iHeight&&(p=o.iHeight),void 0!=o.position&&(u=o.position),void 0!=o.bModal&&null!=o.bModal&&(l=o.bModal),void 0!=o.bResize&&null!=o.bResize&&(_=o.bResize),void 0!=o.bShowImg&&null!=o.bShowImg&&(s=o.bShowImg),void 0!=o.bCloseOnEscape&&null!=o.bCloseOnEscape&&(n=o.bCloseOnEscape),void 0!=o.bShowBtnSect&&null!=o.bShowBtnSect&&(c=o.bShowBtnSect),void 0!=o.fnCallback&&(jsu_log(P+"fnCallback is defined"),r[0].fnCallback=o.fnCallback)),r.dialog("destroy")
var d=pp_getTitle(e,o),O=null
if(c)var O=pp_GetBtn(e,o)
jsu_logObj(P+"buttons",O),r.dialog({autoOpen:!1,modal:l,dialogClass:"PopupDialog",title:d,position:u,resizable:_,width:i,height:p,minHeight:POPUP_MSG_MIN_HEIGHT,closeOnEscape:n,buttons:O,close:function(e,t){pp_OnClose(e)}})
for(var T=["#PopupConfirm","#PopupNo","#PopupCancel"],E=0;E<T.length;E++){var I=jQuery(T[E])[0]
I&&(I.className="PopupBtn")}pp_ClassInit(e,r),pp_idShow("PopupImg",s),pp_ChoiceInit(e,o),pp_PromptInit(e,o),jQuery("#PopupMsg").html(t),jQuery("#PopupDiv").dialog("open"),jsu_log(P+JSU_LOG_FUN_END)}function pp_Init(){var e="[Popup.js pp_Init] "
jsu_log(e+JSU_LOG_FUN_START),null==document.getElementById("PopupDiv")&&(jsu_log(e+"'PopupDiv' NOT present - we add it to document"),jQuery("body,html").append(POPUP_DIV_EMPTY))
var t=jQuery("#PopupDiv")
t.hide(),t.html(POPUP_DIV_HTML),t.dialog({autoOpen:!1}),jsu_log(e+JSU_LOG_FUN_END)}function pp_ClassInit(e,t){var o="[Popup.js pp_ClassInit] "
jsu_log(o+JSU_LOG_FUN_START)
var P=e
e==POPUP_TYPE.QUESTION_3&&(P=POPUP_TYPE.QUESTION)
var i=POPUP_TITLE_CLASS_PREFIX+P
jsu_log(o+"set PopupTblHea className="+i),jsu_getElementById2("PopupTblHea").className=i
var p=t.siblings(".ui-dialog-titlebar")[0],l=i+" "+p.className
p.className=l,p.style.backgroundColor=jQuery("#PopupTblHea").css("background-color"),p.style.textAlign="center",p.style.fontSize=jQuery("#PopupTblHea").css("font-size"),p.style.fontWeight=jQuery("#PopupTblHea").css("font-weight"),p.style.color=jQuery("#PopupTblHea").css("color")
var _=POPUP_IMG_CLASS_PREFIX+P
jsu_log(o+"set PopupImg className="+_),jsu_getElementById2("PopupImg").className=_
var s=POPUP_TBLMSG_CLASS_PREFIX+P
jsu_log(o+"set PopupTblMsg className="+s),jsu_getElementById2("PopupTblMsg").className=s,jsu_log(o+JSU_LOG_FUN_END)}function pp_idIsVisible(e){var t=jsu_getElementById2(e)
return null==t?alert("[Popup.js pp_idIsVisible] SW ERROR szId="+e+"   NOT FOUND"):"none"!=t.style.display}function pp_idShow(e,t){var o="#"+e,P=jQuery(o)
t?P.show():P.hide()}function pp_GetBtn(e,t){var o="[Popup.js pp_BtnInit] "
jsu_log(o+JSU_LOG_FUN_START)
var P=e==POPUP_TYPE.QUESTION||e==POPUP_TYPE.QUESTION_3,i=(POPUP_TYPE.QUESTION_3,void 0!=t&&null!=t),p=P?POPUP_BTN_LABEL.QUESTION_CONFIRM:POPUP_BTN_LABEL.CONFIRM,l=POPUP_BTN_LABEL.QUESTION_NO,_=POPUP_BTN_LABEL.QUESTION_CANCEL
jsu_log(o+"Default Label: szConfirmLabel="+p+"   szNoLabel="+l+"   szCancelLabel="+_),null!=t&&(void 0!=t.szConfirmLabel&&""!=t.szConfirmLabel&&(p=t.szConfirmLabel),void 0!=t.szNoLabel&&""!=t.szNoLabel&&(l=t.szNoLabel),void 0!=t.szCancelLabel&&""!=t.szCancelLabel&&(_=t.szCancelLabel))
var s={text:p,id:"PopupConfirm",click:function(){pp_OnClickConfirm()}}
i&&void 0!=t.iConfirmWidth&&null!=t.iConfirmWidth?s.width=t.iConfirmWidth:s.width=POPUP_DEF_BTN_WIDTH
var n={text:l,id:"PopupNo",click:function(){pp_OnClickNo()}}
i&&void 0!=t.iNoWidth&&null!=t.iNoWidth?n.width=t.iNoWidth:n.width=POPUP_DEF_BTN_WIDTH
var u={text:_,id:"PopupCancel",click:function(){pp_OnClickCancel()}}
i&&void 0!=t.iCancelWidth&&null!=t.iCancelWidth?u.width=t.iCancelWidth:u.width=POPUP_DEF_BTN_WIDTH
var r=new Object
return r.confirm=s,e==POPUP_TYPE.QUESTION?r.no=n:e==POPUP_TYPE.QUESTION_3?(r.no=n,r.cancel=u):e!=POPUP_TYPE.CHOICE&&e!=POPUP_TYPE.PROMPT||(r.cancel=u),jsu_log(o+JSU_LOG_FUN_END),r}function pp_ChoiceInit(e,t){var o="[Popup.js pp_ChoiceInit] "
if(jsu_log(o+JSU_LOG_FUN_START),pp_idShow("PopupChoiceMultiSect",!1),pp_idShow("PopupChoiceSingle",!1),e==POPUP_TYPE.CHOICE&&null!=t){jsu_log(o+"objOpt.bChoiceMultiSel="+t.bChoiceMultiSel),szId=t.bChoiceMultiSel?"PopupChoiceMulti":"PopupChoiceSingle",pp_idShow(szId+"Sect",!0),jsu_getElementById2(szId+"Label").innerHTML=t.szChoiceLabel
var P=jsu_getElementById2(szId+"Select")
if(t.bChoiceMultiSel){void 0!=t.iChoiceMultiSize&&null!=t.iChoiceMultiSize&&(iSize=t.iChoiceMultiSize),P.size=iSize
jsu_getElementById2("PopupSelectAll").childNodes[0].textContent=POPUP_SELECT_ALL
jsu_getElementById2("PopupDeselectAll").childNodes[0].textContent=POPUP_DESELECT_ALL}for(var i=0;i<t.arChoice.length;i++){var p=t.arChoice[i],l=new Option(p.szText,p.value)
l.dv=p.szText,l.selected=p.bSel,P[P.length]=l}var _=jsu_getElementById2("PopupChoiceMultiFS"),s=P.clientWidth+15
s<POPUP_FS_CHOICE_MIN_WIDTH&&(s=POPUP_FS_CHOICE_MIN_WIDTH),_.style.width=s+"px",jsu_log(o+"We have SET elFS.style.width="+_.style.width)}jsu_log(o+JSU_LOG_FUN_END)}function pp_PromptInit(e,t){var o="[Popup.js pp_PromptInit] "
if(jsu_log(o+JSU_LOG_FUN_START),pp_idShow("PopupPromptSect",!1),e==POPUP_TYPE.PROMPT&&(pp_idShow("PopupPromptSect",!0),null!=t)){t.szPromptLabel&&t.szPromptLabel.length&&(jsu_getElementById2("PopupPromptLabel").innerHTML=t.szPromptLabel)
var P=jsu_getElementById2("PopupPromptInput")
t.szPromptValue&&t.szPromptValue.length&&(jsu_log(o+"Set Default PromptValue="+t.szPromptValue),P.value=t.szPromptValue),szPromptType=t.szPromptType?t.szPromptType:PROMPT_TYPE.STRING
var i=szPromptType==PROMPT_TYPE.NUMBER
P.setAttribute("type",szPromptType)
var p=!1,l=!1
t.iPromptWidth&&!isNaN(t.iPromptWidth)?P.setAttribute("style","width:"+t.iPromptWidth+"px;"):P.setAttribute("style","width:"+(i?POPUP_DEF_PROMPT_NUMBER_W:POPUP_DEF_PROMPT_STRING_W)+"px;"),t.iPromptMax&&!isNaN(t.iPromptMax)?(l=!0,iPromptMax=t.iPromptMax,P.setAttribute("max",iPromptMax),i||P.setAttribute("maxlength",iPromptMax)):(P.removeAttribute("max"),P.removeAttribute("maxlength")),t.iPromptMin&&!isNaN(t.iPromptMin)?(p=!0,iPromptMin=t.iPromptMin,P.setAttribute("min",iPromptMin)):P.removeAttribute("min"),P.focus()
var _=i?POPUP_PROMPT_TIP.NUMBER:POPUP_PROMPT_TIP.STRING;(p||l)&&(_=i?POPUP_PROMPT_TIP.NUMBER_RANGE:POPUP_PROMPT_TIP.STRING_RANGE,p&&l?_+="["+iPromptMin+".."+iPromptMax+"]":l?_+="[0.."+iPromptMax+"]":p&&(_+="["+iPromptMin+"..]")),P.setAttribute("title",_)}jsu_log(o+JSU_LOG_FUN_END)}function getTextWidth(e,t){var o=getTextWidth.canvas||(getTextWidth.canvas=document.createElement("canvas"))
if(void 0==o||void 0==o.getContext)return 0
var P=o.getContext("2d")
return P.font=t,P.measureText(e).width}function pp_getTitle(e,t){var o=t?t.szTitle:null
return void 0!=typeof o&&null!=o&&""!=o?o:e==POPUP_TYPE.INFO?POPUP_DEF_TITLE.INFO:e==POPUP_TYPE.WARN?POPUP_DEF_TITLE.WARN:e==POPUP_TYPE.ERR?POPUP_DEF_TITLE.ERR:e==POPUP_TYPE.ALARM?POPUP_DEF_TITLE.ALARM:e==POPUP_TYPE.CONFIRM?POPUP_DEF_TITLE.CONFIRM:e==POPUP_TYPE.PROMPT?POPUP_DEF_TITLE.PROMPT:e==POPUP_TYPE.CHOICE?POPUP_DEF_TITLE.CHOICE:e==POPUP_TYPE.QUESTION||e==POPUP_TYPE.QUESTION_3?POPUP_DEF_TITLE.QUESTION:void 0}function pp_ValidateInput(e){var t="[Popup.js pp_ValidateInput] "
jsu_log(t+JSU_LOG_FUN_START)
var o=e.value
jsu_log(t+"Prompt="+o)
var P=e.getAttribute("type"),i=P==PROMPT_TYPE.NUMBER,p=o?o.length:0,l=parseInt(e.getAttribute("min")),_=parseInt(e.getAttribute("max"))
isNaN(l)&&(l=null),isNaN(_)&&(_=null),i&&(o=parseInt(o))
var s=!1
if(i&&(jsu_log(t+"VALIDATION is required for PROMPT NUMBER - We check that promptValue="+o+"  is a NUMBER"),s=isNaN(o)),!s&&l&&(jsu_log(t+"VALIDATION required for iMin="+l+" - PROMPT szType="+P),i&&l>o&&(s=!0),!i&&l>p&&(s=!0)),!s&&_&&(jsu_log(t+"VALIDATION required for iMax="+_+" - PROMPT szType="+P),i&&_<o&&(s=!0),!i&&_<p&&(s=!0)),s){var n=e.getAttribute("title")
jsu_log(t+"VALIDATION ERROR for promptValue="+o+" Show Err: "+n)
var u=jsu_getElementById2("PopupPromptError")
return u.innerHTML=n,elementShow(u,!0,"inline"),e.setAttribute("class","PopupPromptError"),1}return jsu_log(t+JSU_LOG_FUN_END)}function pp_OnClose(e){var t="[Popup.js pp_OnClose] "
jsu_log(t+JSU_LOG_FUN_START),e.originalEvent&&(jsu_log(t+"Clicking on dialog box X or ESC"),pp_Close({retBtn:POPUP_BTN.CLOSE})),jsu_log(t+JSU_LOG_FUN_END)}function pp_Close(e){var t="[Popup.js pp_Close] "
jsu_log(t+JSU_LOG_FUN_START)
var o=e&&e.retBtn==POPUP_BTN.CONFIRM
if(jsu_log(t+"bConfirm="+o),o){if(pp_idIsVisible("PopupPromptSect")){var P=jsu_getElementById2("PopupPromptInput")
if(pp_ValidateInput(P))return
e.promptValue=P.value}var i=pp_idIsVisible("PopupChoiceSingleSect"),p=pp_idIsVisible("PopupChoiceMultiSect")
if(i||p){jsu_log(t+"Get Choice Selection")
for(var l=i?"PopupChoiceSingleSelect":"PopupChoiceMultiSelect",_=jsu_getElementById2(l),s=new Array,n="",u="",r="",a=0;a<_.options.length;a++){var c=_.options[a],d={value:c.value,szText:c.text,bSel:c.selected}
c.selected&&(n+=r+c.value,u+=r+c.text,""==r&&(r=", ")),s.push(d)}e.choiceValue=n,e.choiceText=u,e.arChoice=s}}jsu_logObj(t+"retObj",e)
var O=jQuery("#PopupDiv")
jsu_log(t+"close and destroy Dialog")
var T=O[0].fnCallback
O.dialog("destroy"),"function"==typeof UnTip&&UnTip(),void 0!=T&&(jsu_log(t+"call fncallback"),T(e)),jsu_log(t+JSU_LOG_FUN_END)}function pp_OnFocusPromptInput(){jsu_getElementById2("PopupPromptInput").setAttribute("class","PopupPromptInput")
var e=jsu_getElementById2("PopupPromptError")
elementShow(e,!1)}function pp_OnClickConfirm(){pp_Close({retBtn:POPUP_BTN.CONFIRM})}function pp_DeselectAll(){for(var e=jsu_getElementById2("PopupChoiceMultiSelect"),t=0;t<e.options.length;t++)e.options[t].selected=!1}function pp_getId(e){e[0]=1e3+e[1]+(e[2]+Math.floor(Math.random()*e[3]))}function pp_SelectAll(){for(var e=jsu_getElementById2("PopupChoiceMultiSelect"),t=0;t<e.options.length;t++)e.options[t].selected=!0}function pp_OnClickNo(){pp_Close({retBtn:POPUP_BTN.NO})}function pp_OnClickCancel(){pp_Close({retBtn:POPUP_BTN.CANCEL})}function pp_OnResize(e,t){var o="[Popup.js pp_onResize] "
try{var P=jQuery("#PopupMsg")
jsu_log(o)
var i=(P.dialog("option","width"),P[0].offsetWidth),p=P[0].offsetHeight
void 0!=i&&void 0!=p&&jsu_log(o+"Window size: width="+i+", height="+p)}catch(e){jsu_log(o+"EXCEPTION "+e.message)}}function Popup(e,t,o){return pp_Show(e,t,o)}function PopupChoice(e,t,o,P){return void 0!=P&&null!=P||(P=new Array),P.szChoiceLabel=t,P.arChoice=o,pp_Show(POPUP_TYPE.CHOICE,e,P)}function isIEPopup(){return!1}var POPUP_TYPE={INFO:"Info",CONFIRM:"Confirm",ERR:"Error",ALARM:"Alarm",WARN:"Warning",QUESTION:"Question",QUESTION_3:"Question_3Btn",PROMPT:"Prompt",CHOICE:"Choice"},PROMPT_TYPE={NUMBER:"number",STRING:"string"},POPUP_BTN={CLOSE:"CLOSE",CONFIRM:"CONFIRM",NO:"NO",CANCEL:"CANCEL"},POPUP_DEF_WIDTH=600,POPUP_DEF_MULTICHOICE_SIZE=5,POPUP_DEF_SHOW_IMG=!0,POPUP_DEF_RESIZE=!0,POPUP_DEF_CLOSE_ON_ESCAPE=!0,POPUP_DEF_MODAL=!0,POPUP_DEF_POSITION={my:"center",at:"center"},POPUP_DEF_PROMPT_NUMBER_W=50,POPUP_DEF_PROMPT_STRING_W=200,POPUP_DEF_BTN_WIDTH=120,POPUP_IMG_CLASS_PREFIX="PopupImg",POPUP_TBLMSG_CLASS_PREFIX="PopupTblMsg",POPUP_TITLE_CLASS_PREFIX="PopupTitle",POPUP_MSG_MIN_HEIGHT=160,POPUP_FS_CHOICE_MIN_WIDTH=200,POPUP_DIV_EMPTY='<div id="PopupDiv" class="Popup" style="display:none;"></div> ',POPUP_DIV_HTML='<table id="PopupTblHea" class="PopupTitleInfo" style="display:none" width="100%" >      <tr><td id="PopupTitle" class="PopupTitle" width="100%">INFORMATION</td>  </tr>    </table>      <table id="PopupTblMsg" class="PopupTblMsgInfo" style="min-height:80px;" width="100%">      <tr>        <td id="PopupImg" class="PopupImgConfirm" height="100%" width="80px">        </td>        <td>          <table class="PopupMsg">            <tr>              <td id="PopupMsg" class="PopupMsg" >              </td>            </tr>            <tr>              \x3c!--    Section for  PopupPrompt   --\x3e               <td id="PopupPromptSect" class="PopupPrompt" style="display:none">                 <table>                   <tr>                     <td><label id="PopupPromptLabel" class="PopupPrompt"></label></td>                     <td><input id="PopupPromptInput" class="PopupPrompt" onfocus="pp_OnFocusPromptInput();"/></td>                   </tr>                   <tr>                     <td></td>                     <td><label id="PopupPromptError" class="PopupPromptError"/></td>                   </tr>                 </table>               </td>            </tr>            <tr>              \x3c!--    Section for  PopupChoice Single   --\x3e               <td id="PopupChoiceSingleSect" class="PopupChoiceSingle" style="display:none">                 <label id="PopupChoiceSingleLabel" class="PopupChoiceSingle">Choice:</label>                 <select id="PopupChoiceSingleSelect" class="PopupChoiceSingle"></select>                 </td>            </tr>            <tr>              \x3c!--    Section for  PopupChoice Multi   --\x3e               <td id="PopupChoiceMultiSect" class="PopupChoiceMulti" style="display:none;text-align:center;">                     <fieldset id="PopupChoiceMultiFS" class="PopupChoiceMulti">                       <legend id="PopupChoiceMultiLabel" class="PopupChoiceMulti">Multi</legend>                       <select id="PopupChoiceMultiSelect" class="PopupChoiceMulti" multiple=true></select>                       <div style="margin-top:10px; margin-bottom:10px;">                          <a id="PopupSelectAll" href="javascript:pp_SelectAll();" class="Popup">SELECT All</a>                          <a id="PopupDeselectAll" href="javascript:pp_DeselectAll();" class="Popup" style="padding-left:15px;">DESELECT All</a>                       </div>                     </fieldset>                </td>            </tr>            <tr><td class="tipr" id="pp_f"></td></tr>          </table>        </td>      </tr>    </table>',jsPopup_bScroll=!1
