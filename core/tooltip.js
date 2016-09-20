/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/tooltip.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>Tip Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/Tooltip.html" target="_self">JSU Tip Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>     JSU Tip API:   Tip* UnTip*   <BR/>   
<b>REQUIRED:</b>        JSU:  jsu.css locale-core.js jsuCmn.js <BR/>
<b>OPTIONAL:</b>        JSU:  prettify: prettify-jsu.js prettify-jsu.css if you want show JS Hightlighted <BR/> 
<b>OPTIONAL:</b>        JSU:  jslog.js dom-drag.js if you want to use jslog <BR/> 
<b>First Version:</b>     ver 1.0 - Feb 2014  <BR/>
<b>Current Version:</b>   JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Sep-21  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 

*/
function Tip(t,e,i){var o="[tooltip.js Tip()] "
if(jsu_log(o+JSU_LOG_FUN_START),tt_init(),tip_type==TIP_TYPE.Fixed)return jsu_log(o+"Nothing to do: a TipFix is currently diaplyed"+JSU_LOG_FUN_END)
if(void 0==i)var i={bNL2BR:!0};(void 0==i.bNL2BR||i.bNL2BR)&&(t=tt_NL2BR(t))
void 0==e&&(e=TIP_TYPE.Floating),tip_type=e,jsu_log(o+"SET tip_type="+tip_type)
var _=tip_type==TIP_TYPE.Fixed?TIP_CFG_FIXED:TIP_CFG_FLOATING
tt_SetCfg(_),tt_showTip(t),tip_type=e,jsu_log(o+JSU_LOG_FUN_END)}function TipFix(t,e,o){var _="[tooltip.js TipFix] "
if(jsu_log(_+JSU_LOG_FUN_START),jsu_logObj(_+"IN objOpt",o),tt_init(),void 0==o)var o={bNL2BR:!0};(void 0==o.bNL2BR||o.bNL2BR)&&(t=tt_NL2BR(t)),void 0==o.bCloseBtn&&(o.bCloseBtn=TIP_DEF_CLOSE_BTN),tt_tipFix.objClass=o.objClass,tt_tipFix.yIncDelta=0
var n=""
if(o){o.szTitle&&(n=o.szTitle)
var a="",l="",r=!1
o.iTipMaxHeight&&(a="max-height: "+o.iTipMaxHeight+"px;",r=!0),l=void 0==o.iTipWidth?"max-width: "+TIP_DEF_WIDTH+"px;":"max-width: "+o.iTipWidth+"px; width:"+o.iTipWidth+"px;",r=!0
jsu_log(_+"SET style='"+a+l+"'"),t='<div id="divTipContainer" align="center" style="'+a+l+' border: 1px solid;background-color: white; overflow: auto; ">'+t+"</div>",void 0!=o.bCloseBtn&&o.bCloseBtn&&(t+='<BR/><div id="divTipMain" align="center" width="100%"><input type="button" class="tipBtnClose" value="'+TIP_BTN_CLOSE+'" title="'+TIP_BTN_CLOSE_TITLE+'" onclick="UnTipFix()" /> </div>')}TIP_CFG_FIXED.Title=n
var d=!0,s=TIP_FIXED_POS.CENTER
void 0!=o&&void 0!=o.tipFixedPos&&(s=o.tipFixedPos),jsu_log(_+"IN: tipFixedPos="+s)
var p=null
if(void 0!=o.szRefElId)p=document.getElementById(o.szRefElId),void 0==p.bTipFixOpen||0==p.bTipFixOpen?(jsu_log(_+"OPEN TipFix Over szRefElId="+o.szRefElId),p.bTipFixOpen=!0,tt_tipFix.yIncDelta=TT_ABOVE_DELTA_Y):(jsu_log(_+"CLOSE TipFix that was OPEN Over szRefElId="+o.szRefElId),d=!1)
else{var e=e||window.event
void 0!=e&&(p=e.target||e.srcElement)}if(tt_tipFix.tipImg=p,void 0!=p){var T=p.className,f=p.id
if(void 0==f||0==f.length)return tt_Err(_+"SW ERROR tipImg has id=null \n tipImg used with TipFix must have an id")
var u=!1
for(jsu_log(_+"OLD classname="+T),i=0;i<tt_arToggleClass.length;i++){var c=tt_arToggleClass[i]
T==c.Down?(T=c.Up,u=!0,jsu_log(_+"TOGGLE From "+c.Down+" TO "+c.Up)):T==c.Up&&(T=c.Down,jsu_log(_+"TOGGLE From "+c.Up+" TO "+c.Down),d=!1,u=!0)}void 0!=tt_tipFix.objClass&&void 0!=tt_tipFix.objClass.Down&&void 0!=tt_tipFix.objClass.Up&&(jsu_logObj(_+"CASE of CUSTOM objClass"+tt_tipFix.objClass),T==tt_tipFix.objClass.Up?(T=tt_tipFix.objClass.Down,u=!0,d=!1):T==tt_tipFix.objClass.Down&&(T=tt_tipFix.objClass.Up,u=!0)),u?jsu_log(_+"TOGGLE TO NEW classname="+T):jsu_logObj(_+"Current className="+T+" NOT implemented as TOGGLE IMage: SO NO IMAGE TOGGLE is DONE"),p.className=T}if(jsu_log(_+"bOpenTip="+d),d&&tip_img_fixed&&(jsu_log(_+"Particular case: Click to open a new TipFix while another is still open. So we close the TipFix that was stil open"),UnTipFix()),d&&p){jsu_log(_+"---------------------- OPEN TipFix"),tip_img_fixed=p,TIP_CFG_FIXED.Fix=[p.id,s,5],jsu_logObj(_+"SET TIP_CFG_FIXED.Fix=",TIP_CFG_FIXED.Fix),Tip(t,TIP_TYPE.Fixed,o)
var E=document.getElementById("WzTiTl"),g=E.style.width
jsu_log(_+"reduce width of the header that was "+g),iWidth=parseInt(g.replace("px",""))-6,E.style.width=iWidth+"px"}else jsu_log(_+"---------------------- CLOSE TipFix"),UnTipFix()
jsu_log(_+JSU_LOG_FUN_END)}function UnTip(){var t="[tooltip.js UnTip()] "
return jsu_log(t+JSU_LOG_FUN_START),jsu_log(t+"CURRENT tip_type="+tip_type),tip_type==TIP_TYPE.Fixed?jsu_log(t+"Nothing to do: a TipFix is still displayed"+JSU_LOG_FUN_END):(tt_init(),tt_SetCfg(TIP_CFG_FLOATING),tt_OpReHref(),tt_aV[DURATION]<0&&2&tt_iState?tt_tDurt.Timer("tt_HideInit()",-tt_aV[DURATION],!0):tt_aV[STICKY]&&2&tt_iState||tt_HideInit(),tt_RestoreImgFixed(),tip_type=TIP_TYPE.NONE,void jsu_log(t+JSU_LOG_FUN_END))}function UnTipFix(){var t="[tooltip.js UnTipFix()] "
jsu_log(t+JSU_LOG_FUN_START),jsu_log(t+"CURRENT tip_type="+tip_type),tt_SetCfg(TIP_CFG_FLOATING),tt_OpReHref(),tt_aV[DURATION]<0&&2&tt_iState?tt_tDurt.Timer("tt_HideInit()",-tt_aV[DURATION],!0):tt_aV[STICKY]&&2&tt_iState||tt_HideInit(),tt_RestoreImgFixed(),tip_type=TIP_TYPE.NONE,void 0!=tt_tipFix.tipImg&&(tt_tipFix.tipImg.bTipFixOpen=!1),jsu_log(t+JSU_LOG_FUN_END)}function TipFixCode(t,e,i){var o="[tooltip.js TipFixCode] "
if(jsu_log(o+JSU_LOG_FUN_START),void 0==i&&(i=new Object),void 0==i.szTitle&&(i.szTitle=TIP_DEF_CODE_TITLE),void 0==i.bCloseBtn&&(i.bCloseBtn=TIP_DEF_CLOSE_BTN),tt_init(),tt_isPrettifyEn()){var _='<div id="divTipJS" align="left" class="prettify" style="width:"'+i.iTipWidth+'"px;"> <pre class="prettyprint"><code>'+t+"</code></pre></div>"
TipFix(_,e,i),jsuPrettyPrint()}else TipFixTextArea(t,e,i)
jsu_log(o+JSU_LOG_FUN_END)}function TipFixMultiCode(t,e,i){var o="[tooltip.js TipFixMultiCode] "
jsu_log(o+JSU_LOG_FUN_START),jsu_logObj(o+"IN arObjCode",t),jsu_logObj(o+"IN objOpt",i),void 0==i&&(i=new Object),void 0==i.szTitle&&(i.szTitle=TIP_DEF_CODE_TITLE),void 0==i.bCloseBtn&&(i.bCloseBtn=TIP_DEF_CLOSE_BTN),void 0==i.iColNum&&(i.iColNum=TIP_DEF_COL_NUM)
i.iTipWidth-40
tt_init()
for(var _=tt_isPrettifyEn(),n='<table class="detNoBorder" >\n',a=0;a<t.length;a++){var l=t[a],r=""
void 0==l.bPrettify&&(l.bPrettify=!1),_||(l.bPrettify=!1)
var d=l.bPrettify?"prettifyCode":"",s=l.bPrettify?" prettifyTitle ":"",p='<tr><td><table class="det '+d+'" '+r+'" BORDER="2" cellspacing="0" cellpadding="2" >\n'
void 0==l.iTipMaxHeight&&(l.iTipMaxHeight=TIP_DEF_MAXH_MCODE),void 0==l.szTitle&&(l.szTitle=TIP_DEF_MCODE_TITLE),jsu_log(o+"arObjCode["+a+"] bPrettify="+l.bPrettify),p+='  <tr class="detTitle '+s+d+'"><td width="100%" class="detTitle '+s+d+'">'+l.szTitle+"</td></tr>\n",p+='  <tr class="det '+d+'" ><td class="tipl '+d+'" width="100%">\n'
var T="tipCode_"+a
if(l.bPrettify){var f=void 0==i.iTipWidth?TIP_DEF_WIDTH:i.iTipWidth,u=!1,c=i.iTipMaxHeight
if(void 0!=l.iMaxHeight&&(c=l.iMaxHeight),void 0!=c&&c>0&&(u=!0),u){var E="max-height:"+c+"px;",g="width:"+f-100+"px;",r="width:"+(f-130)+"px;"
jsu_log(o+"For code["+a+"] we have to put an extra div container - szMaxHeightCont="+E)
var O='<div style="'+E+g+' border: 1px solid; overflow: auto; background-color: white; ">    <div id="'+T+'" class="prettify" style="'+r+'"> <pre class="prettyprint"><code>'+l.szCode+"</code></pre></div></div>"
jsu_logHtml(o+"szDivPretty",O)}else var r="width:"+f+"px;",O='    <div id="'+T+'" class="prettify" style="'+r+'"> <pre class="prettyprint"><code>'+l.szCode+"</code></pre></div>\n"
p+=O}else void 0==l.iRowNum&&(l.iRowNum=tt_getHtmlRowNum(l.szCode)),p+='     <textarea id="'+T+'"  rows="'+l.iRowNum+'" cols="'+i.iColNum+'" >'+l.szCode+"</textarea>\n"
p+="   </td></tr></table>\n",n+=p,n+="</td></tr>",a<t.length-1&&(n+='<tr class="detSep"><td></td></tr>')}n+="</table>",i.bNL2BR=!1,TipFix(n,e,i),_&&jsuPrettyPrint()
var F=void 0!=i.iTipWidth?i.iTipWidth:TIP_DEF_WIDTH,f=F-40
jsu_log(o+"TipWidth="+F+" - We set "+t.length+" CodeEl with width="+f+" to adapt them to the Div Container")
for(var a=0;a<t.length;a++){var v=document.getElementById("tipCode_"+a)
v.style.width=f+"px"}jsu_log(o+JSU_LOG_FUN_END)}function TipFixTextArea(t,e,i){var o="[tooltip.js TipFixTextArea] "
jsu_log(o+JSU_LOG_FUN_START),jsu_logObj(o+"IN objOpt",i),void 0==i&&(i=new Object),void 0==i.szTitle&&(i.szTitle=TIP_DEF_TEXTBOX_TITLE),void 0==i.bCloseBtn&&(i.bCloseBtn=TIP_DEF_CLOSE_BTN),void 0==i.iColNum&&(i.iColNum=TIP_DEF_COL_NUM),void 0==i.iRowNum&&(i.iRowNum=tt_getHtmlRowNum(t)),tt_init()
var _='<textarea id="tipTextArea" rows="'+i.iRowNum+'" cols="'+i.iColNum+'" >'+t+"</textarea><BR/>"
i.bNL2BR=!1,TipFix(_,e,i)
var n=void 0!=i.iTipWidth?i.iTipWidth:TIP_DEF_WIDTH,a=n-40
jsu_log(o+"TipWidth="+n+" - We set TextArea with width="+a+" to adapt it to the Div Container")
var l=document.getElementById("tipTextArea")
l.style.width=a+"px",jsu_log(o+JSU_LOG_FUN_END)}function tt_isClassFixed(t){var e=!1,o="[tooltip.js tt_isClassFixed()] "
for(i=0;i<tt_arToggleClass.length;i++)tt_arToggleClass[i].Up==t&&(e=!0)
return void 0!=tt_tipFix.objClass&&void 0!=tt_tipFix.objClass.Down&&void 0!=tt_tipFix.objClass.Up&&t==tt_tipFix.objClass.Up&&(e=!0),jsu_log(o+"IN: szClass="+t+"  OUT bTipFix="+e),e}function tt_RestoreImgFixed(){var t="[tooltip.js tt_RestoreImgFixed()] "
if(null!=tip_img_fixed){var e=""
for(i=0;i<tt_arToggleClass.length;i++)tt_arToggleClass[i].Up==tip_img_fixed.className&&(e=tt_arToggleClass[i].Down)
void 0!=tt_tipFix.objClass&&void 0!=tt_tipFix.objClass.Down&&void 0!=tt_tipFix.objClass.Up&&tip_img_fixed.className==tt_tipFix.objClass.Up&&(e=tt_tipFix.objClass.Down),""!=e&&(jsu_log(t+"tip_img_fixed.id="+tip_img_fixed.id+" - Change className="+tip_img_fixed.className+" To "+e),tip_img_fixed.className=e),tip_img_fixed=null}}function tt_getElementById2(t,e){void 0==e&&(e=!1)
var i=document.getElementById(t)
return null==i?(e&&alert("SW ERROR [tt_getElementById2] NOT FOUND Id="+t),0):i}function tt_showTip(){var t="[tooltip.js tt_showTip()] "
jsu_log(t+JSU_LOG_FUN_START),tt_Tip(arguments,null),jsu_log(t+JSU_LOG_FUN_END)}function TagToTip(){var t=tt_GetElt(arguments[0])
t&&tt_Tip(arguments,t)}function tt_SetCfg(t){config.FollowMouse=t.FollowMouse,config.Delay=t.DelayMs,config.FadeIn=t.FadeMs,config.FadeOut=t.FadeMs,config.CenterMouse=t.CenterMouse,config.BorderStyle=t.BorderStyle,config.BorderWidth=t.BorderWidth,config.CloseBtn=t.CloseBtn,config.JumpVert=t.JumpVert,config.Title=t.Title,config.Fix=t.Fix,config.OffsetY=t.OffsetY}function tt_Extension(){return tt_ExtCmdEnum(),tt_aExt[tt_aExt.length]=this,this}function tt_SetTipPos(t,e){var i="[tooltip.js tt_SetTipPos] ",o=tt_aElt[0].style
if(TT_X_MIN>t)jsu_log(i+"change x from"+t+" to xMin="+TT_X_MIN),t=TT_X_MIN
else{var _=t+tt_w-20,n=tt_GetClientW(),a=_-n
a>0&&(t-=a,TT_X_MIN>t&&(t=TT_X_MIN),jsu_log(i+"x was too on the right. Set x="+t))}if(tt_x=t,tt_y=e,o.left=t+"px",o.top=e+"px",tt_ie56){var l=tt_aElt[tt_aElt.length-1]
l&&(l.style.left=o.left,l.style.top=o.top)}}function tt_HideInit(){if(tt_iState){if(tt_ExtCallFncs(0,"HideInit"),tt_iState&=-13,tt_flagOpa&&tt_aV[FADEOUT]&&(tt_tFade.EndTimer(),tt_opa)){var t=Math.round(tt_aV[FADEOUT]/(tt_aV[FADEINTERVAL]*(tt_aV[OPACITY]/tt_opa)))
return void tt_Fade(tt_opa,tt_opa,0,t)}tt_tHide.Timer("tt_Hide();",1,!1)}}function tt_Hide(){var t="[tooltip.js tt_tt_Hide()] "
jsu_log(t+JSU_LOG_FUN_START),tt_db&&tt_iState&&(tt_OpReHref(),2&tt_iState&&(tt_aElt[0].style.visibility="hidden",tt_ExtCallFncs(0,"Hide")),tt_tShow.EndTimer(),tt_tHide.EndTimer(),tt_tDurt.EndTimer(),tt_tFade.EndTimer(),tt_op||tt_ie||(tt_tWaitMov.EndTimer(),tt_bWait=!1),(tt_aV[CLICKCLOSE]||tt_aV[CLICKSTICKY])&&tt_RemEvtFnc(document,"mouseup",tt_OnLClick),tt_ExtCallFncs(0,"Kill"),tt_t2t&&!tt_aV[COPYCONTENT]&&tt_UnEl2Tip(),tt_iState=0,tt_over=null,tt_ResetMainDiv(),tt_aElt[tt_aElt.length-1]&&(tt_aElt[tt_aElt.length-1].style.display="none")),jsu_log(t+JSU_LOG_FUN_END)}function tt_GetElt(t){return document.getElementById?tt_getElementById2(t):document.all?document.all[t]:null}function tt_GetDivW(t){return t?t.offsetWidth||t.style.pixelWidth||0:0}function tt_GetDivH(t){return t?t.offsetHeight||t.style.pixelHeight||0:0}function tt_GetScrollX(){return window.pageXOffset||(tt_db?tt_db.scrollLeft||0:0)}function tt_GetScrollY(){return window.pageYOffset||(tt_db?tt_db.scrollTop||0:0)}function tt_GetClientW(){return tt_GetWndCliSiz("Width")}function tt_GetClientH(){return tt_GetWndCliSiz("Height")}function tt_GetEvtX(t){return t?typeof t.pageX!=tt_u?t.pageX:t.clientX+tt_GetScrollX():0}function tt_GetEvtY(t){return t?typeof t.pageY!=tt_u?t.pageY:t.clientY+tt_GetScrollY():0}function tt_AddEvtFnc(t,e,i){t&&(t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i))}function tt_RemEvtFnc(t,e,i){t&&(t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent("on"+e,i))}function tt_GetDad(t){return t.parentNode||t.parentElement||t.offsetParent}function tt_MovDomNode(t,e,i){e&&e.removeChild(t),i&&i.appendChild(t)}function tt_init(){var t="[tooltip.js tt_init] "
tt_init_done||(jsu_log(t+"Init tooltip.js"),document.onkeydown=function(t){27===t.keyCode&&UnTipFix()},tt_MkCmdEnum(),tt_Browser()&&tt_MkMainDiv()&&(tt_IsW3cBox(),tt_OpaSupport(),tt_AddEvtFnc(document,"mousemove",tt_Move),TagsToTip&&tt_SetOnloadFnc(),tt_AddEvtFnc(window,"unload",tt_Hide),tt_init_done=!0))}function tt_MkCmdEnum(){var n=0
for(var i in config)eval("window."+i.toString().toUpperCase()+" = "+n++)
tt_aV.length=n}function tt_Browser(){var n,nv,n6,w3c
n=navigator.userAgent.toLowerCase(),nv=navigator.appVersion
var szAppName=navigator.appName
if(tt_op=document.defaultView&&typeof eval("window.opera")!=tt_u,tt_ie=navigator.appName==APP_NAME_IE||navigator.appName==APP_NAME_IE_11&&null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)){var ieOld=!document.compatMode||"BackCompat"==document.compatMode
tt_db=ieOld?document.body||null:document.documentElement,tt_db&&(tt_ie56=parseFloat(nv.substring(nv.indexOf("MSIE")+5))>=5.5&&typeof document.body.style.maxHeight==tt_u)}else tt_db=document.documentElement||document.body||(document.getElementsByTagName?document.getElementsByTagName("body")[0]:null),tt_op||(n6=document.defaultView&&typeof document.defaultView.getComputedStyle!=tt_u,w3c=!n6&&document.getElementById)
if(tt_body=document.getElementsByTagName?document.getElementsByTagName("body")[0]:document.body||null,tt_ie||n6||tt_op||w3c)if(tt_body&&tt_db){if(document.attachEvent||document.addEventListener)return!0}else tt_Err("tooltip.js must be included INSIDE the body section, immediately after the opening <body> tag.")
return tt_db=null,!1}function tt_MkMainDiv(){return tt_body.insertAdjacentHTML?tt_body.insertAdjacentHTML("afterBegin",tt_MkMainDivHtm()):typeof tt_body.innerHTML!=tt_u&&document.createElement&&tt_body.appendChild&&tt_body.appendChild(tt_MkMainDivDom()),window.tt_GetMainDivRefs&&tt_GetMainDivRefs()?!0:(tt_db=null,!1)}function tt_MkMainDivHtm(){return'<div id="ttDivContainer"></div>'+(tt_ie56?'<iframe id="WzTtIfRm" src="javascript:false" scrolling="no" frameborder="0" style="filter:Alpha(opacity=0);position:absolute;top:0px;left:0px;display:none;"></iframe>':"")}function tt_MkMainDivDom(){var t=document.createElement("div")
return t&&(t.id="ttDivContainer"),t}function tt_GetMainDivRefs(){if(tt_aElt[0]=tt_GetElt("ttDivContainer"),tt_ie56&&tt_aElt[0]&&(tt_aElt[tt_aElt.length-1]=tt_GetElt("WzTtIfRm"),tt_aElt[tt_aElt.length-1]||(tt_aElt[0]=null)),tt_aElt[0]){var t=tt_aElt[0].style
return t.visibility="hidden",t.position="absolute",t.overflow="hidden",!0}return!1}function tt_ResetMainDiv(){tt_SetTipPos(0,0),tt_aElt[0].innerHTML="",tt_aElt[0].style.width="0px",tt_h=0}function tt_IsW3cBox(){var t=tt_aElt[0].style
t.padding="10px",t.width="40px",tt_bBoxOld=40==tt_GetDivW(tt_aElt[0]),t.padding="0px",tt_ResetMainDiv()}function tt_OpaSupport(){var t=tt_body.style
tt_flagOpa=typeof t.KhtmlOpacity!=tt_u?2:typeof t.KHTMLOpacity!=tt_u?3:typeof t.MozOpacity!=tt_u?4:typeof t.opacity!=tt_u?5:typeof t.filter!=tt_u?1:0}function tt_SetOnloadFnc(){if(tt_AddEvtFnc(document,"DOMContentLoaded",tt_HideSrcTags),tt_AddEvtFnc(window,"load",tt_HideSrcTags),tt_body.attachEvent&&tt_body.attachEvent("onreadystatechange",function(){"complete"==tt_body.readyState&&tt_HideSrcTags()}),/WebKit|KHTML/i.test(navigator.userAgent))var t=setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(t),tt_HideSrcTags())},10)}function tt_HideSrcTags(){window.tt_HideSrcTags&&!window.tt_HideSrcTags.done&&(window.tt_HideSrcTags.done=!0,tt_HideSrcTagsRecurs(tt_body)||tt_Err("There are HTML elements to be converted to tooltips.\nIf you want these HTML elements to be automatically hidden, you must edit tooltip.js, and set TagsToTip in the global tooltip configuration to true."))}function tt_HideSrcTagsRecurs(t){for(var e,i,o=t.childNodes||t.children||null,_=o?o.length:0;_;){if(--_,!tt_HideSrcTagsRecurs(o[_]))return!1
if(e=o[_].getAttribute?o[_].getAttribute("onmouseover")||o[_].getAttribute("onclick"):"function"==typeof o[_].onmouseover?o[_].onmouseover||o[_].onclick:null,e&&(i=e.toString().match(/TagToTip\s*\(\s*'[^'.]+'\s*[\),]/),i&&i.length&&!tt_HideSrcTag(i[0])))return!1}return!0}function tt_HideSrcTag(t){var e,i
if(e=t.replace(/.+'([^'.]+)'.+/,"$1"),i=tt_GetElt(e)){if(!TagsToTip)return!1
i.style.display="none"}else tt_Err("Invalid ID\n'"+e+"'\npassed to TagToTip(). There exists no HTML element with that ID.")
return!0}function tt_Tip(t,e){!tt_db||8&tt_iState||(tt_iState&&tt_Hide(),tt_Enabled&&(tt_t2t=e,tt_ReadCmds(t)&&(tt_iState=5,tt_AdaptConfig1(),tt_MkTipContent(t),tt_MkTipSubDivs(),tt_FormatTip(),tt_bJmpVert=!1,tt_bJmpHorz=!1,tt_maxPosX=tt_GetClientW()+tt_GetScrollX()-tt_w-1,tt_maxPosY=tt_GetClientH()+tt_GetScrollY()-tt_h-1,tt_AdaptConfig2(),tt_OverInit(),tt_ShowInit(),tt_Move())))}function tt_ReadCmds(t){var e
e=0
for(var i in config)tt_aV[e++]=config[i]
if(1&t.length){for(e=t.length-1;e>0;e-=2)tt_aV[t[e-1]]=t[e]
return!0}return tt_Err("Incorrect call of Tip() or TagToTip().\nEach command must be followed by a value."),!1}function tt_AdaptConfig1(){if(tt_ExtCallFncs(0,"LoadConfig"),tt_aV[TITLEBGCOLOR].length||(tt_aV[TITLEBGCOLOR]=tt_aV[BORDERCOLOR]),tt_aV[TITLEFONTCOLOR].length||(tt_aV[TITLEFONTCOLOR]=tt_aV[BGCOLOR]),tt_aV[TITLEFONTFACE].length||(tt_aV[TITLEFONTFACE]=tt_aV[FONTFACE]),tt_aV[TITLEFONTSIZE].length||(tt_aV[TITLEFONTSIZE]=tt_aV[FONTSIZE]),tt_aV[CLOSEBTN]){tt_aV[CLOSEBTNCOLORS]||(tt_aV[CLOSEBTNCOLORS]=new Array("","","",""))
for(var t=4;t;)--t,tt_aV[CLOSEBTNCOLORS][t].length||(tt_aV[CLOSEBTNCOLORS][t]=1&t?tt_aV[TITLEFONTCOLOR]:tt_aV[TITLEBGCOLOR])
tt_aV[TITLE].length||(tt_aV[TITLE]=" ")}100!=tt_aV[OPACITY]||typeof tt_aElt[0].style.MozOpacity==tt_u||Array.every||(tt_aV[OPACITY]=99),tt_aV[FADEIN]&&tt_flagOpa&&tt_aV[DELAY]>100&&(tt_aV[DELAY]=Math.max(tt_aV[DELAY]-tt_aV[FADEIN],100))}function tt_AdaptConfig2(){tt_aV[CENTERMOUSE]&&(tt_aV[OFFSETX]-=tt_w-(tt_aV[SHADOW]?tt_aV[SHADOWWIDTH]:0)>>1,tt_aV[JUMPHORZ]=!1)}function tt_MkTipContent(t){tt_sContent=tt_t2t?tt_aV[COPYCONTENT]?tt_t2t.innerHTML:"":t[0],tt_ExtCallFncs(0,"CreateContentString")}function tt_MkTipSubDivs(){var t="position:relative;margin:0px;padding:0px;border-width:0px;left:0px;top:0px;line-height:normal;width:auto;",e="position:relative;margin:0px;padding:0px;border-width:0px;left:0px;top:0px;line-height:normal;width:10px;",i=' cellspacing="0" cellpadding="0" border="0" style="'+t+'"><tbody style="'+t+'"><tr><td ',o="position:relative;margin:0px;padding:0px;border-width:0px;;left:0px;top:0px;line-height:normal;width:auto;"
tt_aElt[0].style.width=tt_GetClientW()+"px",tt_aElt[0].innerHTML=""+(tt_aV[TITLE].length?'<div id="WzTiTl" class="ttTitle" style="position:relative;z-index:1;"><table id="WzTiTlTb"'+i+'id="WzTiTlI" style="'+o+'">'+tt_aV[TITLE]+"</td>"+(tt_aV[CLOSEBTN]?'<td  align="right" style="'+e+';text-align:right;"><span id="WzClOsE" class="ttClose" style="position:relative;right:6px;padding-left:2px;padding-right:2px;cursor:'+(tt_ie?"hand":"pointer")+';" onmouseover="tt_OnCloseBtnOver(1)" onmouseout="tt_OnCloseBtnOver(0)" onclick="UnTipFix()">'+tt_aV[CLOSEBTNTEXT]+"</span></td>":"")+"</tr></tbody></table></div>":"")+'<div id="WzBoDy" style="position:relative;z-index:0;"><table'+i+'id="WzBoDyI" style="'+t+'">'+tt_sContent+"</td></tr>"+(tt_aV[FOOTER].length?'<tr><td class="tipfooter">'+tt_aV[FOOTER]+"</td></tr>":"")+"</tbody></table></div>"+(tt_aV[SHADOW]?'<div id="WzTtShDwR" style="position:absolute;overflow:hidden;"></div><div id="WzTtShDwB" style="position:relative;overflow:hidden;"></div>':""),tt_GetSubDivRefs(),tt_t2t&&!tt_aV[COPYCONTENT]&&tt_El2Tip(),tt_ExtCallFncs(0,"SubDivsCreated")}function tt_GetSubDivRefs(){for(var t=new Array("WzTiTl","WzTiTlTb","WzTiTlI","WzClOsE","WzBoDy","WzBoDyI","WzTtShDwB","WzTtShDwR"),e=t.length;e;--e)tt_aElt[e]=tt_GetElt(t[e-1])}function tt_FormatTip(){var t,e,i,o,_,n=tt_aV[PADDING],a=tt_aV[BORDERWIDTH],l=n+a<<1
tt_aV[TITLE].length?(i=tt_aV[TITLEPADDING],t=tt_aElt[1].style,t.background=tt_aV[TITLEBGCOLOR],t.paddingTop=t.paddingBottom=i+"px",t.paddingLeft=t.paddingRight=i+2+"px",t=tt_aElt[3].style,t.color=tt_aV[TITLEFONTCOLOR],-1==tt_aV[WIDTH]&&(t.whiteSpace="nowrap"),t.fontFamily=tt_aV[TITLEFONTFACE],t.fontSize=tt_aV[TITLEFONTSIZE],t.fontWeight="bold",t.textAlign=tt_aV[TITLEALIGN],tt_aElt[4]&&(t=tt_aElt[4].style,t.background=tt_aV[CLOSEBTNCOLORS][0],t.color=tt_aV[CLOSEBTNCOLORS][1],t.fontFamily=tt_aV[TITLEFONTFACE],t.fontSize=tt_aV[TITLEFONTSIZE],t.fontWeight="bold"),tt_aV[WIDTH]>0?tt_w=tt_aV[WIDTH]:(tt_w=tt_GetDivW(tt_aElt[3])+tt_GetDivW(tt_aElt[4]),tt_aElt[4]&&(tt_w+=n),tt_aV[WIDTH]<-1&&tt_w>-tt_aV[WIDTH]&&(tt_w=-tt_aV[WIDTH])),o=-a):(tt_w=0,o=0),t=tt_aElt[5].style,t.top=o+"px",a&&(t.borderColor=tt_aV[BORDERCOLOR],t.borderStyle=tt_aV[BORDERSTYLE],t.borderWidth=a+"px"),tt_aV[BGCOLOR].length&&(t.background=tt_aV[BGCOLOR]),tt_aV[BGIMG].length&&(t.backgroundImage="url("+tt_aV[BGIMG]+")"),t.padding=n+"px",t.textAlign=tt_aV[TEXTALIGN],tt_aV[HEIGHT]&&(t.overflow="auto",tt_aV[HEIGHT]>0?t.height=tt_aV[HEIGHT]+l+"px":tt_h=l-tt_aV[HEIGHT]),t=tt_aElt[6].style,t.color=tt_aV[FONTCOLOR],t.fontFamily=tt_aV[FONTFACE],t.fontSize=tt_aV[FONTSIZE],t.fontWeight=tt_aV[FONTWEIGHT],t.textAlign=tt_aV[TEXTALIGN],tt_aV[WIDTH]>0?e=tt_aV[WIDTH]:-1==tt_aV[WIDTH]&&tt_w?e=tt_w:(e=tt_GetDivW(tt_aElt[6]),tt_aV[WIDTH]<-1&&e>-tt_aV[WIDTH]&&(e=-tt_aV[WIDTH])),e>tt_w&&(tt_w=e),tt_w+=l,tt_aV[SHADOW]?(tt_w+=tt_aV[SHADOWWIDTH],_=Math.floor(4*tt_aV[SHADOWWIDTH]/3),t=tt_aElt[7].style,t.top=o+"px",t.left=_+"px",t.width=tt_w-_-tt_aV[SHADOWWIDTH]+"px",t.height=tt_aV[SHADOWWIDTH]+"px",t.background=tt_aV[SHADOWCOLOR],t=tt_aElt[8].style,t.top=_+"px",t.left=tt_w-tt_aV[SHADOWWIDTH]+"px",t.width=tt_aV[SHADOWWIDTH]+"px",t.background=tt_aV[SHADOWCOLOR]):_=0,tt_SetTipOpa(tt_aV[FADEIN]?0:tt_aV[OPACITY]),tt_FixSize(o,_)}function tt_FixSize(t,e){var i,o,_,n,a=tt_aV[PADDING],l=tt_aV[BORDERWIDTH]
tt_aElt[0].style.width=tt_w+"px",tt_aElt[0].style.pixelWidth=tt_w,o=tt_w-(tt_aV[SHADOW]?tt_aV[SHADOWWIDTH]:0),i=o,tt_bBoxOld||(i-=a+l<<1),tt_aElt[5].style.width=i+"px",tt_aElt[1]&&(i=o-(tt_aV[TITLEPADDING]+2<<1),tt_bBoxOld||(o=i),tt_aElt[1].style.width=o+"px",tt_aElt[2].style.width=i+"px"),tt_h&&(_=tt_GetDivH(tt_aElt[5]),_>tt_h&&(tt_bBoxOld||(tt_h-=a+l<<1),tt_aElt[5].style.height=tt_h+"px")),tt_h=tt_GetDivH(tt_aElt[0])+t,tt_aElt[8]&&(tt_aElt[8].style.height=tt_h-e+"px"),n=tt_aElt.length-1,tt_aElt[n]&&(tt_aElt[n].style.width=tt_w+"px",tt_aElt[n].style.height=tt_h+"px")}function tt_DeAlt(t){var e
if(t&&(t.alt&&(t.alt=""),t.title&&(t.title=""),e=t.childNodes||t.children||null))for(var i=e.length;i;)tt_DeAlt(e[--i])}function tt_OpDeHref(t){if(tt_op)for(tt_elDeHref&&tt_OpReHref();t;){if(t.hasAttribute&&t.hasAttribute("href")){t.t_href=t.getAttribute("href"),t.t_stats=window.status,t.removeAttribute("href"),t.style.cursor="hand",tt_AddEvtFnc(t,"mousedown",tt_OpReHref),window.status=t.t_href,tt_elDeHref=t
break}t=tt_GetDad(t)}}function tt_OpReHref(){tt_elDeHref&&(tt_elDeHref.setAttribute("href",tt_elDeHref.t_href),tt_RemEvtFnc(tt_elDeHref,"mousedown",tt_OpReHref),window.status=tt_elDeHref.t_stats,tt_elDeHref=null)}function tt_El2Tip(){var t=tt_t2t.style
tt_t2t.t_cp=t.position,tt_t2t.t_cl=t.left,tt_t2t.t_ct=t.top,tt_t2t.t_cd=t.display,tt_t2tDad=tt_GetDad(tt_t2t),tt_MovDomNode(tt_t2t,tt_t2tDad,tt_aElt[6]),t.display="block",t.position="static",t.left=t.top=t.marginLeft=t.marginTop="0px"}function tt_UnEl2Tip(){var t=tt_t2t.style
t.display=tt_t2t.t_cd,tt_MovDomNode(tt_t2t,tt_GetDad(tt_t2t),tt_t2tDad),t.position=tt_t2t.t_cp,t.left=tt_t2t.t_cl,t.top=tt_t2t.t_ct,tt_t2tDad=null}function tt_OverInit(){tt_over=window.event?window.event.target||window.event.srcElement:tt_ovr_,tt_DeAlt(tt_over),tt_OpDeHref(tt_over)}function tt_ShowInit(){tt_tShow.Timer("tt_Show()",tt_aV[DELAY],!0),(tt_aV[CLICKCLOSE]||tt_aV[CLICKSTICKY])&&tt_AddEvtFnc(document,"mouseup",tt_OnLClick)}function tt_Show(){var t=tt_aElt[0].style
t.zIndex=Math.max(window.dd&&dd.z?dd.z+2:0,1010),!tt_aV[STICKY]&&tt_aV[FOLLOWMOUSE]||(tt_iState&=-5),tt_aV[EXCLUSIVE]&&(tt_iState|=8),tt_aV[DURATION]>0&&tt_tDurt.Timer("tt_HideInit()",tt_aV[DURATION],!0),tt_ExtCallFncs(0,"Show"),t.visibility="visible",tt_iState|=2,tt_aV[FADEIN]&&tt_Fade(0,0,tt_aV[OPACITY],Math.round(tt_aV[FADEIN]/tt_aV[FADEINTERVAL])),tt_ShowIfrm()}function tt_ShowIfrm(){if(tt_ie56){var t=tt_aElt[tt_aElt.length-1]
if(t){var e=t.style
e.zIndex=tt_aElt[0].style.zIndex-1,e.display="block"}}}function tt_Move(t){if(t&&(tt_ovr_=t.target||t.srcElement),t=t||window.event,t&&(tt_musX=tt_GetEvtX(t),tt_musY=tt_GetEvtY(t)),4&tt_iState){if(!tt_op&&!tt_ie){if(tt_bWait)return
tt_bWait=!0,tt_tWaitMov.Timer("tt_bWait = false;",1,!0)}tt_aV[FIX]?(tt_iState&=-5,tt_PosFix()):tt_ExtCallFncs(t,"MoveBefore")||tt_SetTipPos(tt_Pos(0),tt_Pos(1)),tt_ExtCallFncs([tt_musX,tt_musY],"MoveAfter")}}function tt_Pos(t){var e,i,o,_,n,a,l,r,d
return t?(i=tt_aV[JUMPVERT],o=ABOVE,_=OFFSETY,n=tt_h,a=tt_maxPosY,l=tt_GetScrollY(),r=tt_musY,d=tt_bJmpVert):(i=tt_aV[JUMPHORZ],o=LEFT,_=OFFSETX,n=tt_w,a=tt_maxPosX,l=tt_GetScrollX(),r=tt_musX,d=tt_bJmpHorz),i?e=tt_aV[o]&&(!d||tt_CalcPosAlt(t)>=l+16)?tt_PosAlt(t):!tt_aV[o]&&d&&tt_CalcPosDef(t)>a-16?tt_PosAlt(t):tt_PosDef(t):(e=r,tt_aV[o]?e-=n+tt_aV[_]-(tt_aV[SHADOW]?tt_aV[SHADOWWIDTH]:0):e+=tt_aV[_]),e>a&&(e=i?tt_PosAlt(t):a),l>e&&(e=i?tt_PosDef(t):l),e}function tt_PosDef(t){return t?tt_bJmpVert=tt_aV[ABOVE]:tt_bJmpHorz=tt_aV[LEFT],tt_CalcPosDef(t)}function tt_PosAlt(t){return t?tt_bJmpVert=!tt_aV[ABOVE]:tt_bJmpHorz=!tt_aV[LEFT],tt_CalcPosAlt(t)}function tt_CalcPosDef(t){var e=t?tt_musY+tt_aV[OFFSETY]:tt_musX+tt_aV[OFFSETX]
return e}function tt_CalcPosAlt(t){var e=t?OFFSETY:OFFSETX,i=tt_aV[e]-(tt_aV[SHADOW]?tt_aV[SHADOWWIDTH]:0)
return tt_aV[e]>0&&0>=i&&(i=1),(t?tt_musY-tt_h:tt_musX-tt_w)-i}function tt_PosFix(){var t,e,i="[tooltip.js tt_PosFix] ",o=0,_=!1
if("number"==typeof tt_aV[FIX][0])o=tt_aV[FIX][0],t=tt_aV[FIX][1]
else{for("string"==typeof tt_aV[FIX][0]?el=tt_GetElt(tt_aV[FIX][0]):el=tt_aV[FIX][0],e=tt_aV[FIX][1],_=e==TIP_FIXED_POS.LEFT||e==TIP_FIXED_POS.CENTER||e==TIP_FIXED_POS.RIGHT,jsu_log(i+"iXPos="+e+" bXPosRelative="+_),_||(o=e),t=tt_aV[FIX][2],!tt_aV[ABOVE]&&el&&(t+=tt_GetDivH(el));el;el=el.offsetParent)o+=el.offsetLeft||0,t+=el.offsetTop||0
_&&(jsu_log(i+"iXPos="+e+" Calculate new iX From iX="+o+" tt_w="+tt_w),e==TIP_FIXED_POS.LEFT?o=o-tt_w+25:e==TIP_FIXED_POS.CENTER&&(o=o-tt_w/2+20))}tt_aV[ABOVE]?t-=tt_h:(jsu_log(i+"TIP BELOW: Add DeltaY="+tt_tipFix.yIncDelta),t+=tt_tipFix.yIncDelta),jsu_log(i+"SET iX="+o+"  iY="+t),tt_SetTipPos(o,t)}function tt_Fade(t,e,i,o){o&&(e+=Math.round((i-e)/o),(i>t?e>=i:i>=e)?e=i:tt_tFade.Timer("tt_Fade("+t+","+e+","+i+","+(o-1)+")",tt_aV[FADEINTERVAL],!0)),e?tt_SetTipOpa(e):tt_Hide()}function tt_SetTipOpa(t){tt_SetOpa(tt_aElt[5],t),tt_aElt[1]&&tt_SetOpa(tt_aElt[1],t),tt_aV[SHADOW]&&(t=Math.round(.8*t),tt_SetOpa(tt_aElt[7],t),tt_SetOpa(tt_aElt[8],t))}function tt_OnCloseBtnOver(t){var e=tt_aElt[4].style
t<<=1,e.background=tt_aV[CLOSEBTNCOLORS][t],e.color=tt_aV[CLOSEBTNCOLORS][t+1]}function tt_OnLClick(t){t=t||window.event,t.button&&2&t.button||t.which&&3==t.which||(tt_aV[CLICKSTICKY]&&4&tt_iState?(tt_aV[STICKY]=!0,tt_iState&=-5):tt_aV[CLICKCLOSE]&&tt_HideInit())}function tt_Int(t){var e
return isNaN(e=parseInt(t))?0:e}function tt_GetWndCliSiz(t){var e,i=window["inner"+t],o="client"+t,_="number"
if(typeof i==_){var n
return(e=document.body)&&typeof(n=e[o])==_&&n&&i>=n?n:(e=document.documentElement)&&typeof(n=e[o])==_&&n&&i>=n?n:i}return(e=document.documentElement)&&(i=e[o])?i:document.body[o]}function tt_SetOpa(t,e){var i=t.style
if(tt_opa=e,1==tt_flagOpa)if(100>e){typeof t.filtNo==tt_u&&(t.filtNo=i.filter)
var o="hidden"!=i.visibility
i.zoom="100%",o||(i.visibility="visible"),i.filter="alpha(opacity="+e+")",o||(i.visibility="hidden")}else typeof t.filtNo!=tt_u&&(i.filter=t.filtNo)
else switch(e/=100,tt_flagOpa){case 2:i.KhtmlOpacity=e
break
case 3:i.KHTMLOpacity=e
break
case 4:i.MozOpacity=e
break
case 5:i.opacity=e}}function tt_Err(t){"function"==typeof showErr?showErr(t):alert(t)}function tt_ExtCmdEnum(){var s
for(var i in config)s="window."+i.toString().toUpperCase(),eval("typeof("+s+") == tt_u")&&(eval(s+" = "+tt_aV.length),tt_aV[tt_aV.length]=null)}function tt_replaceAll(t,e,i){for(var o=t;o.indexOf(e)>=0;)o=o.replace(e,i)
return o}function tt_NL2BR(t){return tt_replaceAll(t,"\n","<BR/>")}function tt_ExtCallFncs(t,e){for(var i=!1,o=tt_aExt.length;o;){--o
var _=tt_aExt[o]["On"+e]
_&&_(t)&&(i=!0)}return i}function getMouseXY(t,e){var t=t?t:window.event
if(t.pageX||t.pageY?(posX=t.pageX,posY=t.pageY):t.clientX||t.clientY?document.body.scrollLeft||document.body.scrollTop?(posX=t.clientX+document.body.scrollLeft,posY=t.clientY+document.body.scrollTop):(posX=t.clientX+document.documentElement.scrollLeft,posY=t.clientY+document.documentElement.scrollTop):(posX=0,posY=0),e.offsetLeft||e.offsetTop)for(xOffset=e.offsetLeft,yOffset=e.offsetTop,parentObj=e.offsetParent;null!=parentObj;)xOffset+=parentObj.offsetLeft,yOffset+=parentObj.offsetTop,parentObj=parentObj.offsetParent
else e.x||e.y?(xOffset=e.x,yOffset=e.y):(xOffset=0,yOffset=0)
var i=posY-yOffset-2,o=posX-xOffset-2
return{x:o,y:i}}function tt_is_IE(){var t="Microsoft Internet Explorer",e="Netscape"
return navigator.appName==t||navigator.appName==e&&null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)}function tt_isPrettifyEn(){var t="[tooltip.js tt_isPrettifyEn()] ",e="undefined"!=typeof jsuPrettyPrint,i=!1
i=!0
var o=e&&i
return jsu_log(t+"bPrettifyLoaded="+e+" bPrettifyCode="+i+"  RETURN bPrettifyEn="+o),o}function tt_getId(t){t[0]=1e3+t[1]+(t[2]+Math.floor(Math.random()*t[3]))}function tt_getHtmlRowNum(t){var e=1+(t.match(/\n/g)||[]).length
return e>TIP_MAX_TEXT_BOX_ROW_NUM&&(e=TIP_MAX_TEXT_BOX_ROW_NUM),e}var TIP_TYPE={Floating:"Floating",Fixed:"Fixed",NONE:"NONE"},TIP_FIXED_POS={LEFT:"left",CENTER:"center",RIGHT:"right"},TIP_DEF_CLOSE_BTN=!0,TIP_DEF_WIDTH=800,TIP_DEF_COL_NUM=100,TIP_DEF_ROW_NUM=20,TIP_DEF_MAXH_MCODE=400,TIP_DEF_MCODE_TITLE="Code",TIP_DEF_TEXTBOX_TITLE="Source Code",TIP_MAX_TEXT_BOX_ROW_NUM=20,TIP_CFG_FLOATING={FollowMouse:!0,DelayMs:400,FadeMs:100,CenterMouse:!1,BorderStyle:"dotted",BorderWidth:2,CloseBtn:!1,JumpHorz:!0,JumpVert:!0,Title:"",Fix:null,OffsetY:20},TIP_CFG_FIXED={FollowMouse:!1,DelayMs:0,FadeMs:0,CenterMouse:!0,BorderStyle:"dashed",BorderWidth:3,CloseBtn:!0,JumpHorz:!1,JumpVert:!1,Title:"",Fix:null,OffsetY:0},tt_tipFix={objClass:{Down:void 0,Up:void 0},yIncDelta:0,tipImg:void 0},tt_arToggleClass=[{Down:"tipFix",Up:"tipFixUp"},{Down:"tipFixArrow",Up:"tipFixArrowUp"},{Down:"googleAnalList",Up:"googleAnalListUp"},{Down:"tipFixJS",Up:"tipFixJSUp"},{Down:"tipFixCode",Up:"tipFixCodeUp"},{Down:"jsuOpt",Up:"jsuOptUp"}],APP_NAME_FIREFOX="Netscape",APP_NAME_IE="Microsoft Internet Explorer",APP_NAME_IE_11="Netscape",config=new Object,tip_img_fixed=null,TT_X_MIN=10,TT_ABOVE_DELTA_Y=10,tt_init_done=!1,tip_type=TIP_TYPE.NONE,tt_Enabled=!0,TagsToTip=!0
config.Padding=10,config.Delay=TIP_CFG_FLOATING.DelayMs,config.Above=!1,config.BgColor="#FFFFCC",config.BgImg="",config.BorderColor="#000000",config.BorderStyle=TIP_CFG_FLOATING.BorderStyle,config.BorderWidth=TIP_CFG_FLOATING.BorderWidth,config.CenterMouse=TIP_CFG_FLOATING.CenterMouse,config.ClickClose=!1,config.ClickSticky=!1,config.CloseBtn=TIP_CFG_FLOATING.CloseBtn,config.CloseBtnColors=["	","#FFFFFF","#FF5858","#FFFFFF"],config.CloseBtnText="&nbsp;X&nbsp;",config.CopyContent=!0,config.Duration=0,config.Exclusive=!1,config.FadeIn=TIP_CFG_FLOATING.FadeMs,config.FadeOut=TIP_CFG_FLOATING.FadeMs,config.FadeInterval=30,config.Fix=TIP_CFG_FLOATING.Fix,config.FollowMouse=TIP_CFG_FLOATING.FollowMouse,config.FontColor="#000000",config.FontFace="Verdana",config.FontSize="8pt",config.FontWeight="normal",config.Height=0,config.JumpHorz=TIP_CFG_FLOATING.JumpHorz,config.JumpVert=TIP_CFG_FLOATING.JumpVert,config.Left=!1,config.OffsetX=14,config.OffsetY=TIP_CFG_FLOATING.OffsetY,config.Opacity=100,config.Shadow=!0,config.ShadowColor="#C0C0C0",config.ShadowWidth=10,config.Sticky=!1,config.TextAlign="left",config.Title=TIP_CFG_FLOATING.Title,config.TitleAlign="center",config.TitleBgColor="#000000",config.TitleFontColor="#ffffff",config.TitleFontFace="bold",config.TitleFontSize="12pt",config.TitlePadding=1,config.Footer="",config.Width=0
var tt_aElt=new Array(10),tt_aV=new Array,tt_sContent,tt_t2t,tt_t2tDad,tt_musX,tt_musY,tt_over,tt_x,tt_y,tt_w,tt_h,tt_aExt=new Array,tt_db,tt_op,tt_ie,tt_ie56,tt_bBoxOld,tt_body,tt_ovr_,tt_flagOpa,tt_maxPosX,tt_maxPosY,tt_iState=0,tt_opa,tt_bJmpVert,tt_bJmpHorz,tt_elDeHref,tt_tShow=new Number(0),tt_tHide=new Number(0),tt_tDurt=new Number(0),tt_tFade=new Number(0),tt_tWaitMov=new Number(0),tt_bWait=!1,tt_u="undefined"
Number.prototype.Timer=function(t,e,i){this.value&&!i||(this.value=window.setTimeout(t,e))},Number.prototype.EndTimer=function(){this.value&&(window.clearTimeout(this.value),this.value=0)}
