/** @fileOverview 
========================================================================================= <BR/> 
<b>File:</b> 			core/googleAnal.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>Google Analytics Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/GoogleAnalytics.html" target="_self">JSU GoogleAnalytics Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>     JSU Google Analytics API <BR/>   
<b>REQUIRED:</b>        JSU:  jsu.css locale-core.js jsuCmn.js tooltip.js <BR/>
<b>OPTIONAL:</b>        JSU:  jslog.js dom-drag.js if you want to use jslog <BR/> 
<b>First Version:</b>     ver 1.0 - Feb 2014  <BR/>
<b>Current Version:</b>   JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Sep-29  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
function gaShortUrlList(a,t,l){var e="[googleAnal.js gaShortUrlList()] "
jsu_log(e+GALOG_FUN_START),jsu_logObj(e+"IN arObjGaList",a),jsu_logObj(e+"IN objOpt",l)
var i={iTipWidth:GA_DEF.WIDTH,iWidth:GA_DEF.WIDTH,bJQPopup:GA_DEF.JSPOPUP,szTitle:GA_LABEL.DEF_TITLE,bAllBtn:GA_DEF.ALL_LINK,szHeaderTxt:GA_LABEL.DEF_HEADER,szFooterTxt:GA_LABEL.DEF_FOOTER,bShowCbShortUrl:GA_DEF.SHOW_CB_SHORT_URL,bShowCbLongUrl:GA_DEF.SHOW_CB_LONG_URL,bShortUrl:GA_DEF.SHORT_URL,bLongUrl:GA_DEF.LONG_URL,bShortUrl:GA_DEF.SHORT_URL,bLongUrl:GA_DEF.LONG_URL,iTblMaxHeight:GA_DEF.TBL_MAX_HEIGHT,szParTime:GA_DEF.PAR_TIME}
if(void 0==l&&(l=new Object),void 0!=l.iTblMaxHeight&&(i.iTblMaxHeight=l.iTblMaxHeight),void 0!=l.iWidth&&(i.iTipWidth=l.iWidth,i.iWidth=l.iWidth),void 0!=l.bJQPopup&&(i.bJQPopup=l.bJQPopup),void 0!=l.szTitle&&(i.szTitle=l.szTitle),void 0!=l.bAllGoogleAnalLink&&(i.bAllBtn=l.bAllBtn),void 0!=l.szHeaderTxt&&(i.szHeaderTxt=l.szHeaderTxt),void 0!=l.szFooterTxt&&(i.szFooterTxt=l.szFooterTxt),void 0!=l.bShortUrl&&(i.bShortUrl=l.bShortUrl),void 0!=l.bLongUrl&&(i.bLongUrl=l.bLongUrl),void 0!=l.bShowCbShortUrl&&(i.bShowCbShortUrl=l.bShowCbShortUrl),void 0!=l.bShowCbLongUrl&&(i.bShowCbLongUrl=l.bShowCbLongUrl),void 0!=l.szParTime&&(i.szParTime=l.szParTime),jsu_logObj(e+"objOptSet",i),i.bJQPopup){if(void 0==typeof Popup||isIEPopup())return alert("SW ERROR: gaShortUrlList() with bJQPopup option set,  but JQPopup is not loaded!")
jsu_log("JQPopup MODE is required. Popup() will be open")}else i.bCloseBtn=!0,i.iTipWidth=i.iWidth
UnTip(t),jsu_log("Prepare HTML Msg with the Box Layout that will be displayed..."),ga_var.iTblWidth=i.iWidth-20,ga_var.iTblMaxHeight=i.iTblMaxHeight,ga_var.bShortUrl=i.bShortUrl,ga_var.bLongUrl=i.bLongUrl,ga_var.szParTime=i.szParTime,ga_var.arObjGaList=a
var r=new Array
r.push(GA_LABEL.FILTER_CAT_ALL)
for(var o=0;o<a.length;o++){for(var _=a[o].cat,g=!1,s=0;s<r.length&&!g;s++)r[s]==_&&(g=!0)
jsu_log(e+"szCat="+_+"  bPresent="+g),g||r.push(_)}jsu_logObj(e+"arCat=",r),ga_var.bJQPopup=i.bJQPopup,ga_var.arFilterCat=r,ga_var.iSelFilterCat=0
var n='<table class="detNoBorder">',d="",L=""
if(jsu_log("Prepare CB Short URL - bShowCbShortUrl="+i.bShowCbShortUrl),i.bShowCbShortUrl){var c=ga_var.bShortUrl?"checked":""
d='<input type="checkbox" id="cbShortUrl" '+c+' onclick="ga_onclickShortUrl();"/>Show ShortUrl '}if(jsu_log("Prepare CB Short URL - bShowCbLongUrl="+i.bShowCbLongUrl),i.bShowCbLongUrl){var A=ga_var.bLongUrl?"checked":""
L='<input style="margin-left:20px" type="checkbox" id="cbLongUrl" '+A+' onclick="ga_onclickLongUrl();" />Show LongUrl'}if(n+='<tr style="padding-top:5px;"><td class="tiplBold" width="300px" style="padding-bottom:10px">'+d+L+'</td><td class="tipr" style="padding-right:10px;padding-bottom:10px">'+i.szHeaderTxt+"</td></tr>",n+='<tr><td colspan="2"> <div id="divTblGA" style="width:'+ga_var.iTblWidth+"px;max-height:"+ga_var.iTblMaxHeight+'px;overflow:auto;border: 1px solid;"></div></td></tr><tr><td colspan="2"> <div id="divAllGA" align="left" width="100%" style="width:100%;margin-top:10px;"></div></td></tr>',""!=i.szFooterTxt){var v='<table class="note gaFooter"><tr>   <td><input class="note"></td>   <td> '+i.szFooterTxt+"</td>  </tr></table> "
n+='<tr style="padding-top:7px;padding-bottom:7px;"><td colspan="2" class="tipl">'+v+"</td></tr>"}n+="</table>",i.bJQPopup?Popup(POPUP_TYPE.INFO,n,{bShowImg:!1,szTitle:i.szTitle,iWidth:parseInt(i.iWidth)+30}):TipFix(n,t,i),ga_varTblShow(),jsu_log(e+GALOG_FUN_END)}function gaShortUrlPage(a,t){var l="[googleAnal.js gaShortUrlPage()] "
jsu_log(l+GALOG_FUN_START),jsu_log(l+"IN szShortUrl",a),jsu_logObj(l+"IN objOpt",t),void 0==t&&(t=new Object),void 0==t.szParTime&&(t.szParTime=GA_DEF.PAR_TIME),void 0==t.bNewWindow&&(t.bNewWindow=GA_DEF.NEW_WINDOW)
var e=a.replace("goo.gl","goo.gl/#analytics/goo.gl")+"/"+t.szParTime
ga_GoToURL(e,t.bNewWindow),jsu_log(l+GALOG_FUN_END)}function ga_varTblShow(){var a="[googleAnal.js ga_varTblShow()] "
jsu_log(a+GALOG_FUN_START)
var t="undefined"!=typeof cSortTable,l='<table id="tblGoogle" class="det" BORDER="2" cellspacing="0" cellpadding="5" width="100%">',e='<tr class="detTitle" >'
ga_var.bShortUrl&&(e+='<td class="tipc detTitle" width="15%">'+GA_LABEL.SHORT_URL+"</td> "),ga_var.bLongUrl&&(e+='<td class="tipc detTitle" width="30%">'+GA_LABEL.LONG_URL+"</td> "),e+='<td class="tipc detTitle" width="16%">'+GA_LABEL.CAT+'</td> <td class="tipc detTitle" width="21%">'+GA_LABEL.DESC+'</td> <td class="tipc detTitle" width="14%">'+GA_LABEL.ANAL+"</td> </tr>",l+=e,iRowHeader=2
for(var i='<select class="detFilter" id="gaCat" title="'+GA_LABEL.FILTER_CAT_TITLE+'"  style="width:100%;" onchange="ga_onchangeCat();">',r=ga_var.arFilterCat,o=0;o<r.length;o++){var _=r[o],g=o==ga_var.iSelFilterCat?"selected":"",s='\n<option class="detFilter"  value="'+_+'" '+g+" >"+_+"</option>"
i+=s}i+="\n</select>"
for(var n='<select class="detFilter" id="gaFilterTime" title="'+GA_LABEL.PAR_TIME_TITLE+'"  style="width:100%;"  onchange="ga_onchangeTime();" > ',d=[{value:GA_PAR_TIME.all_time,text:GA_LABEL.PAR_TIME_ALL},{value:GA_PAR_TIME.month,text:GA_LABEL.PAR_TIME_MONTH},{value:GA_PAR_TIME.week,text:GA_LABEL.PAR_TIME_WEEK},{value:GA_PAR_TIME.day,text:GA_LABEL.PAR_TIME_DAY},{value:GA_PAR_TIME.two_hours,text:GA_LABEL.PAR_TIME_2HOURS}],o=0;o<d.length;o++){var L=d[o],g=L.value==ga_var.szParTime?"selected":"",s='\n<option class="detFilter" 	value="'+L.value+'" '+g+" >"+L.text+"</option> "
n+=s}n+="\n</select>"
var c=0
ga_var.bShortUrl&&c++,ga_var.bLongUrl&&c++
var A='<tr class="detFilter">'
c>0&&(A+='<td class="detFilter" colSpan="'+c+'" align="right" style="font-weight:normal;padding-right:5px;"></td>'),A+='<td class="detFilter">'+i+'</td><td class="detFilter" align="right"  font-weight:normal;style="padding-right:5px;"></td><td class="detFilter">'+n+"</td></tr>",l+=A,ga_var.iVisibleLink=0,jsu_logObj(a,"iSelFilterCat ="+ga_var.iSelFilterCat)
var v=ga_var.arObjGaList,T=ga_var.arFilterCat[ga_var.iSelFilterCat]
jsu_logObj(a+"szCatSel="+T+" arFilterCat=",ga_var.arFilterCat)
for(var o=0;o<v.length;o++){var h=v[o],_=h.cat,b=0==ga_var.iSelFilterCat||_==T
if(jsu_log(a+"FilterSel="+T+"  Cur cat="+_+" --> bShow="+b),b){var u="a_ga"+ga_var.iVisibleLink
ga_var.arszIdVis[ga_var.iVisibleLink]=u
var E=h.shortUrl.replace("goo.gl","goo.gl/#analytics/goo.gl")+"/"+ga_var.szParTime,A="<tr>"
ga_var.bShortUrl&&(A+='<td class="tipc">'+h.shortUrl+"</td> "),ga_var.bLongUrl&&(A+='<td class="tipl">'+h.longUrl+"</td> "),A+='<td class="tipcBold">'+h.cat+'</td> <td class="tiplBold">'+h.desc+'</td> <td class="tipc"><a id="'+u+'" class="tipLink" href="'+E+'" target="_blank" >'+GA_LABEL.ANAL+GA_LINK_SEP+ga_var.szParTime+"</a></td> </tr>",l+=A,ga_var.iVisibleLink++}}l+="</table></td></tr>"
var G=document.getElementById("divTblGA")
if(G.innerHTML=l,jsu_logObj(a+"ga_var.iVisibleLink="+ga_var.iVisibleLink+"  ga_var.arszIdVis",ga_var.arszIdVis),ga_var.iVisibleLink>1){var S=GA_LABEL.ALL_TITLE.replace("GOOGLE_ANAL_NUM",ga_var.iVisibleLink),p="<label><b>"+S+'</b></label><a id="a_gaAll" class="tipLink" href="javascript:ga_onclickAll();">'+GA_LABEL.ANAL_ALL+GA_LINK_SEP+ga_var.szParTime+"</a>",G=document.getElementById("divAllGA")
G.innerHTML=p}if(t){jsu_log(a+"Create SortTable bShortUrl="+ga_var.bShortUrl+" ga_var.bLongUrl="+ga_var.bLongUrl)
var U=new Array
ga_var.bShortUrl&&U.push({col:GA_LABEL.SHORT_URL}),ga_var.bLongUrl&&U.push({col:GA_LABEL.LONG_URL}),U.push({col:GA_LABEL.CAT}),U.push({col:GA_LABEL.DESC}),U.push({col:GA_LABEL.ANAL})
new cSortTable("tblGoogle",U,{iRowHeader:2,iRowSortHeader:1,bNoStartupSortIco:!0})}jsu_log(a+GALOG_FUN_END)}function ga_onclickShortUrl(){var a="[googleAnal.js ga_onclickShortUrl] "
jsu_log(a+GALOG_FUN_START),ga_var.bShortUrl=!ga_var.bShortUrl,ga_varTblShow(),jsu_log(a+GALOG_FUN_END)}function ga_onclickLongUrl(){var a="[googleAnal.js ga_onclickLongUrl] "
jsu_log(a+GALOG_FUN_START),ga_var.bLongUrl=!ga_var.bLongUrl,ga_varTblShow(),jsu_log(a+GALOG_FUN_END)}function ga_onchangeCat(){var a="[googleAnal.js ga_onchangeCat()] "
jsu_log(a+GALOG_FUN_START)
var t=document.getElementById("gaCat")
ga_var.iSelFilterCat=t.selectedIndex,jsu_log(a+"iSelFilterCat="+ga_var.iSelFilterCat),ga_varTblShow(),jsu_log(a+GALOG_FUN_END)}function ga_onchangeTime(){var a="[googleAnal.js ga_onchangeTime()t] "
jsu_log(a+GALOG_FUN_START)
var t=document.getElementById("gaFilterTime")
ga_var.szParTime=t[t.selectedIndex].value,ga_var.szParTimeText=t[t.selectedIndex].text,jsu_log(a+"szParTime="+ga_var.szParTime+" szParTimeText="+ga_var.szParTimeText)
var l=ga_var.arObjGaList
jsu_log(a+"SET href for the "+l.length+" URLs that are currently displayed")
for(var e=0;e<l.length;e++){var i=l[e],r="a_ga"+e,o=document.getElementById(r)
if(null!=o){var _=i.shortUrl.replace("goo.gl","goo.gl/#analytics/goo.gl")+"/"+ga_var.szParTime
o.href=_,o.innerHTML=GA_LABEL.ANAL+GA_LINK_SEP+ga_var.szParTimeText,jsu_log(a+"szId="+r+" -  SET aEl.innerHTML "+o.innerHTML)}}var o=document.getElementById("a_gaAll")
o.innerHTML=GA_LABEL.ANAL_ALL+GA_LINK_SEP+ga_var.szParTimeText,jsu_log(a+"SET a_gaAll aEl.innerHTML="+o.innerHTML),jsu_log(a+GALOG_FUN_END)}function ga_onclickAll(){var a="[googleAnal.js ga_onclickAll()] "
jsu_log(a+GALOG_FUN_START),ga_var.iLinkClickCur=0,ga_clickSimulate(ga_var.iLinkClickCur),1==ga_var.iVisibleLink?jsu_log(a+"Only one anchor. Finish click simulation"):(jsu_log(a+"Create Timer of "+TMO_GA_CLICK_SIMUL_MS+" for Next Click Simulate"),ga_var.tmoClick=setTimeout(ga_timerClickSimul,TMO_GA_CLICK_SIMUL_MS)),jsu_log(a+GALOG_FUN_END)}function ga_clickSimulate(a){var t="[googleAnal.js ga_clickSimulate()] "
jsu_log(t+GALOG_FUN_START),jsu_logObj(t+"ga_var.iVisibleLink="+ga_var.iVisibleLink+"  ga_var.arszIdVis",ga_var.arszIdVis)
var l=ga_var.arszIdVis[a],e=document.getElementById(l)
if(jsu_log(t+"simulate Click on anchor["+a+"] with id="+l+" - href="+e.href),void 0!=e.click)jsu_log(t+"a.click is defined. We call it"),e.click()
else if(jsu_log(t+"a.click is NOT defined in this Browser"),document.createEvent){jsu_log(t+"el ["+i+"] of "+ga_var.iVisibleLink+" - We create the event to simulate the FIRST click. ")
var r=document.createEvent("MouseEvents")
r.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)
e.dispatchEvent(r)}jsu_log(t+GALOG_FUN_END)}function ga_timerClickSimul(){var a="[googleAnal.js ga_timerClickSimul()] "
jsu_log(a+GALOG_FUN_START),clearTimeout(ga_var.tmoClick),ga_clickSimulate(++ga_var.iLinkClickCur),ga_var.iLinkClickCur>=ga_var.iVisibleLink-1?jsu_log(a+"Click simulation COMPLETED for all "+ga_var.iVisibleLink+" anchors"):(jsu_log(a+"Create Timer of "+TMO_GA_CLICK_SIMUL_MS+" for Next Click Simulate"),ga_var.tmoClick=setTimeout(ga_timerClickSimul,TMO_GA_CLICK_SIMUL_MS)),jsu_log(a+GALOG_FUN_END)}function ga_GoToURL(a,t){var l="[googleAnal.js ga_GoToURL()] "
try{jsu_log(l+GALOG_FUN_START),void 0==t&&(t=!0),jsu_log(l+"bNewWindow="+t)
var e=document.getElementById(GA_HREF_HIDDEN_ID)
if(void 0==e&&(jsu_log(l+"add "+GA_HREF_HIDDEN_ID+" HIDDEN div and anchor to document.body"),divHidden=document.createElement("div"),divHidden.id=GA_DIV_HIDDEN_ID,divHidden.innerHTML=GA_HREF_HIDDEN,document.body.appendChild(divHidden),e=document.getElementById(GA_HREF_HIDDEN_ID)),e.href=a,jsu_log(l+"aEl.href="+e.href),e.target=t?"_blank":"_self",e.click)jsu_log(l+"a.click is defined. We call it"),e.click()
else if(jsu_log(l+"aEl.click is NOT defined in this Browser"),document.createEvent){jsu_log(l+"document.createEvent is defined in this Browser. We create the event to simulate the click")
var i=document.createEvent("MouseEvents")
i.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)
e.dispatchEvent(i)}jsu_log(l+GALOG_FUN_END)}catch(r){jsu_err(l+"EXCEPTION: "+r.message)}}var GA_PAR_TIME={all_time:"all_time",month:"month",week:"week",day:"day",two_hours:"two_hours"},GA_DEF={JSPOPUP:!1,ALL_LINK:!0,WIDTH:700,TBL_MAX_HEIGHT:300,SHOW_CB_SHORT_URL:!0,SHOW_CB_LONG_URL:!0,SHORT_URL:!1,LONG_URL:!1,PAR_TIME:GA_PAR_TIME.all_time,NEW_WINDOW:!0},TMO_GA_CLICK_SIMUL_MS=200,ga_var={arObjGaList:null,bShortUrl:!1,bLongUrl:!1,iTipWidth:700,iVisibleLink:0,arszIdVis:new Array,iSelFilterCat:0,szParTime:GA_PAR_TIME.all_time,iLinkClickCur:0,tmoClick:null},GA_LINK_SEP="&nbsp;&nbsp;&nbsp;",GALOG_FUN_START=" ------------- START",GALOG_FUN_END=" ------------- END",GA_DIV_HIDDEN_ID="jsuDivHidden",GA_HREF_HIDDEN_ID="jsuHrefHidden",GA_HREF_HIDDEN='<a id="'+GA_HREF_HIDDEN_ID+'" target="_self" style="display:none" href="https://goo.gl/HnNqnM" >HIDDEN</a>'
