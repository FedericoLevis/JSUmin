/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/cValidate.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>Validate Doc:</b>   For Validate Documentation see:<ul>
                          <li><a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/Validate.html" target="_self">JSU Validate Documentation</a> </li>
                          <li><a href="http://validatejs.org" target="_self">validate.js</a> </li>
                        </ul>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>      Validate Class <BR/>   
<b>REQUIRE:</b>          JSU: jsu.js   <BR/>
<b>First Version:</b>    ver 1.0 - Feb 2015  <BR/>
<b>Current Version:</b>  JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Oct-26  <BR/>
<b>NOTES:</b> <BR/>
  1) Incorporated and Modified validate.js by Nicklas Ansman http://validatejs.org: <BR/>
     -  add LOCALE Support. <BR/>
     -  add supoort for tip<BR/>
     - showErr instead of throw  <BR/>
  2)  We have added many other features, described in JSU documentation <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/FedericoLevis/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
function validateItemOnFocus(){clearError(this,this.validateObj.validateOpt.bInstantFieldValidation),void 0!=this.fnOnFocusOrig&&this.fnOnFocusOrig()}function validateItemOnChange(e){var t="[cValidate.js validateItemOnChange()] "
jslog(JSLOG_JSU,t+JSLOG_FUN_END)
var r=new Object,a=e.tagName
jslog(JSLOG_JSU,t+"el id="+e.id+" tagName="+a)
var n=e.validateObj
if(!n.validateOpt.bInstantFieldValidation)return jslog(JSLOG_JSU,t+"Nothing to do (bInstantFieldValidation=false) "+JSLOG_FUN_END)
var i=null
"SELECT"==a?i=e.options[e.selectedIndex].value:"INPUT"==a&&(i=e.value),r[e.id]=i,jslogObj(JSLOG_JSU,"validate objValues",r)
var o=validate(r,n.constraints),s=(o.length>0,o[e.id]),l=void 0!=s
jslog(JSLOG_JSU,t+"szErr="+s+" bErr="+l)
var u=e.parentNode.querySelector(".validateErrLabel")
classAdd(e,"validateErr",l)
var d=n.validateOpt
if(d.bOnErrShowLabel&&(u.innerHTML=s,elementShow(u,l,"inline")),d.bOnErrShowAlarm)if("SELECT"==a){var c=input.parentNode.querySelector(".jsuAlarmingImg")
elementShow(c,l,"inline")}else alarmShowIn1El(e,l)
d.bEnphasizeItemBorder&&(jslog(JSLOG_JSU,t+"enphasize Border for Error Item"),classAdd(e,"validateItemErr",l)),jslog(JSLOG_JSU,t+JSLOG_FUN_END)}function clearError(e,t){void 0==t&&(t=!1)
var r=e.tagName
if("SELECT"==r){var a=e.parentNode.querySelector(".jsuAlarmingImg")
elementShow(a,!1)}else alarmShowIn1El(e,!1)
if(!t){classAdd(e,"validateErr",!1)
var n=e.parentNode.querySelector(".validateErrLabel")
elementShow(n,!1)}classAdd(e,"validateItemErr",!1)}var VALIDATE_SUPPORTED_TAG=["INPUT","SELECT","TEXTAREA"],VALIDATE_RETCODE={OK:"OK",ERR:"ERR"},VALIDATE_DEF_OPT={bInstantFieldValidation:!0,bOnErrShowLabel:!0,bOnErrShowSect:!1,bOnErrShowPopup:!1,bOnErrShowAlarm:!1,bEnphasizeItemBorder:!0,szDateFmt:"yyyy-MM-dd",szDateTimeFmt:"yyyy-MM-dd hh:mm:ss"}
cValidate=function(e,t){var r="[cValidate.js cValidate()] "
jslog(JSLOG_JSU,r+JSLOG_FUN_START),jslogObj(JSLOG_JSU,r+"IN [objOpt]=",t),this.constraints=e
var a=new Array
for(var n in e){var i=getElementById2(n)
if(null==i)return showErr(r+"SW ERROR key="+n+"  is not a DOM id - return null from getElementById2("+n+")")
var o=i.tagName
if(checkArVal(i.tagName,VALIDATE_SUPPORTED_TAG,"SW ERROR for DOM item "+i.id+" with tagName="+o+"\nAll the constraints items must refer to a DOM item having a Supported TAG"))return 1
a.push(i)}this.arValidateEl=a,this.validateOpt={bInstantFieldValidation:VALIDATE_DEF_OPT.bInstantFieldValidation,bOnErrShowLabel:VALIDATE_DEF_OPT.bOnErrShowLabel,bOnErrShowSect:VALIDATE_DEF_OPT.bOnErrShowSect,bOnErrShowPopup:VALIDATE_DEF_OPT.bOnErrShowPopup,bOnErrShowAlarm:VALIDATE_DEF_OPT.bOnErrShowAlarm,bEnphasizeItemBorder:VALIDATE_DEF_OPT.bEnphasizeItemBorder,szDateFmt:VALIDATE_DEF_OPT.szDateFmt,szDateTimeFmt:VALIDATE_DEF_OPT.szDateTimeFmt},this.setOption(t)
for(var s=0;s<this.arValidateEl.length;s++){var i=this.arValidateEl[s]
"SELECT"==i.tagName&&this.addAlarmImg(i)
var l=e[i.id],u=l.tip
if(void 0!=u){jslog(JSLOG_JSU,r+"Add tip for item="+i.id)
var d=document.createElement("input")
classAdd(d,"validateInfo",!0),d.type="button",d.tip=u,d.onmouseover=function(){Tip(this.tip)},d.onmouseout=function(){UnTip()},i.parentNode.appendChild(d)}this.validateOpt.bEnphasizeItemBorder&&1==l.presence&&classAdd(i,"validateItemMandatory",!0)
var c=s==this.arValidateEl.length-1
this.addErrLabel(i,c)
var f=i.onfocus
void 0!=f&&(i.fnOnFocusOrig=f),i.onfocus=validateItemOnFocus,i.validateObj=this}this.arValidateEl=a,this.setErrSection(),jslog(JSLOG_JSU,r+JSLOG_FUN_END)},cValidate.prototype.setOption=function(e){var t="[cSortTable.setOption] "
if(jslog(JSLOG_JSU,t+JSLOG_FUN_START),e){jslogObj(JSLOG_JSU,t+"IN objOpt:",e)
var r=this.validateOpt
void 0!=e.szErrSectId&&(r.szErrSectId=e.szErrSectId),void 0!=e.bInstantFieldValidation&&(r.bInstantFieldValidation=e.bInstantFieldValidation),void 0!=e.bOnErrShowAlarm&&(r.bOnErrShowAlarm=e.bOnErrShowAlarm),void 0!=e.bOnErrShowLabel&&(r.bOnErrShowLabel=e.bOnErrShowLabel),void 0!=e.bOnErrShowSect&&(r.bOnErrShowSect=e.bOnErrShowSect),void 0!=e.bOnErrShowPopup&&(r.bOnErrShowPopup=e.bOnErrShowPopup),void 0!=e.bEnphasizeItemBorder&&(r.bEnphasizeItemBorder=e.bEnphasizeItemBorder),void 0!=e.szDateFmt&&(r.szDateFmt=e.szDateFmt),void 0!=e.szDateTimeFmt&&(r.szDateTimeFmt=e.szDateTimeFmt),this.validateOpt=r,jslogObj(JSLOG_JSU,t+"CURRENT validateOpt:",r)}if(validate.extend(validate.validators.datetime,{parse:function(e,t){var r=t.dateOnly?t.szDateFmt:t.szDateTimeFmt
jslog(JSLOG_JSU,"parse() date/dateTime  value="+e+" format="+r)
var a=getTimeFromFormat(e,r)
return 0==a?void 0:a},format:function(e,t){var r=t.dateOnly?t.szDateFmt:t.szDateTimeFmt
return jslog(JSLOG_JSU,"format() date/dateTime  value="+e+" format="+r),getTimeFromFormat(e,r)},options:{szDateFmt:this.validateOpt.szDateFmt,szDateTimeFmt:this.validateOpt.szDateTimeFmt}}),this.validateOpt.bInstantFieldValidation){jslog(JSLOG_JSU,t+"Add EVENTs for INSTANT Validation")
for(var a=0;a<this.arValidateEl.length;a++)this.arValidateEl[a].addEventListener("change",function(e){e.preventDefault(),validateItemOnChange(this)})}this.setErrSection()
for(var a=0;a<this.arValidateEl.length;a++){var n=this.arValidateEl[a]
clearError(n)
var i=this.constraints[n.id],o=this.validateOpt.bEnphasizeItemBorder&&1==i.presence
classAdd(n,"validateItemMandatory",o)}jslog(JSLOG_JSU,t+JSLOG_FUN_END)},cValidate.prototype.getOption=function(){return this.validateOpt},cValidate.prototype.validateApply=function(){var e="[cSortTable.validateApply] "
jslog(JSLOG_JSU,e+JSLOG_FUN_START),jslog(JSLOG_JSU,e+"Prepare objValues to Validate")
for(var t=new Object,r=0;r<this.arValidateEl.length;r++){el=this.arValidateEl[r]
var a=el.tagName,n=null
"SELECT"==a?n=el.options[el.selectedIndex].value:"INPUT"==a&&(n=el.value),t[el.id]=n}jslogObj(JSLOG_JSU,"validate objValues",t)
var i=validate(t,this.constraints)
jslogObj(JSLOG_JSU,e+"validate errors",i),this.showErrors(i||{})
var o=i?VALIDATE_RETCODE.ERR:VALIDATE_RETCODE.OK
return jslog(JSLOG_JSU,e+"retCode="+o),jslog(JSLOG_JSU,e+JSLOG_FUN_END),o},cValidate.prototype.showErrors=function(e,t){var r="[cValidate.js showErrors] "
jslog(JSLOG_JSU,r+JSLOG_FUN_START),jslog(JSLOG_JSU,r+"IN bOnlyLabel="+t),void 0==t&&(t=!1)
for(var a="",n=!1,i=this.validateOpt,o=0;o<this.arValidateEl.length;o++){var s=this.arValidateEl[o],l=s.id,u=s.parentNode.querySelector(".validateErrLabel"),d=e&&e[l],c=null!=d
if(c){classAdd(s,"validateErr",!0)
var f=""
for(iEr=0;iEr<d.length;iEr++)iEr>0&&(f+=" - "),f+=d[iEr]
if(i.bOnErrShowLabel&&(jslog(JSLOG_JSU,r+"Id="+l+" set Err="+f),u.innerHTML=f,elementShow(u,!0,"inline")),i.bEnphasizeItemBorder&&(jslog(JSLOG_JSU,r+"enphasize Border for Error Item"),classAdd(s,"validateItemErr",!0)),!t&&i.bOnErrShowAlarm){var m=s.tagName
if("SELECT"==m){var E=s.parentNode.querySelector(".jsuAlarmingImg")
elementShow(E,!0,"inline")}else alarmShowIn1El(s,!0)}a+="<li>"+f+"</li>",n=!0}else elementShow(u,!1)}if(!t)if(n){var p=""
if(a='<ul type="square">'+a+"</ul>",i.bOnErrShowSect){var h='<table width="100%"><tr>  <td class="PopupImgWarning" width="80px"></td>  <td><label class="validateErrPopup">'+a+'</label></td>  </tr>  <tr ><td colspan="2" class="tipr">'+p+"</td></tr></table>"
this.elErrSect.innerHTML=h,elementShow(this.elErrSect,!0)}if(i.bOnErrShowPopup){var S='<label class="validateErrPopup">'+a+"</label>",v=new Object
i.szErrPopupTitle&&(v.szTitle=i.szErrPopupTitle),Popup(POPUP_TYPE.WARN,S,v)}}else elementShow(this.elErrSect,!1)
jslog(JSLOG_JSU,r+JSLOG_FUN_END)},cValidate.prototype.setErrSection=function(){var e="[cValidate.js setErrSection()] "
if(jslog(JSLOG_JSU,e+JSLOG_FUN_START),this.validateOpt)if(this.validateOpt.szErrSectId&&(jslog(JSLOG_JSU,e+"There is SECT ERR with objOpt.szErrSectId="+this.validateOpt.szErrSectId),this.elErrSect=getElementById3(this.validateOpt.szErrSectId,!0,e)),this.validateOpt.bOnErrShowSect){if(void 0==this.elErrSect){var t=getElementById2("validateErrSect")
void 0==t?(t=document.createElement("div"),t.className="validateErrSect",document.body.insertBefore(t,document.body.firstChild)):elementShow(t,!1),this.elErrSect=t}}else this.elErrSect&&elementShow(this.elErrSect,!1)
jslog(JSLOG_JSU,e+JSLOG_FUN_END)},cValidate.prototype.addErrLabel=function(e,t){var r="[cValidate.js addErrLabel()] "
jslog(JSLOG_JSU,r+"input.id="+e.id)
var a=e.parentNode.querySelector(".validateErrContainer")
if(void 0==a){a=document.createElement("span"),a.className="validateErrContainer",e.parentNode.appendChild(a)
var n=document.createElement("label")
n.className="validateErrLabel",n.id="validateErrLabel",a.appendChild(n)}clearError(e)},cValidate.prototype.addAlarmImg=function(e){var t="[cValidate.js addAlarmImg()] "
jslog(JSLOG_JSU,t+JSLOG_FUN_START),jslog(JSLOG_JSU,t+"input.id="+e.id)
var r=e.parentNode.querySelector(".jsuAlarmingImg")
if(void 0==r){jslog(JSLOG_JSU,t+"add the elAlarm ")
var a=document.createElement("span")
e.parentNode.appendChild(a),r=document.createElement("input"),r.type="button",r.className="jsuAlarmingImg",a.appendChild(r)}jslog(JSLOG_JSU,t+JSLOG_FUN_END)},function(e,t,r){"use strict"
var a=function(e,t,r){r=n.extend({},n.options,r)
var i,o,s=n.runValidations(e,t,r)
for(i in s)for(o in s[i])if(n.isPromise(s[i][o]))throw new Error("Use validate.async if you want support for promises")
return a.processValidationResults(s,r)},n=a
n.extend=function(e){for(var t=[].slice.call(arguments,1),r=0;r<t.length;r++){var a=t[r]
for(var n in a)e[n]=a[n]}return e},n.extend(a,{version:{major:0,minor:9,patch:0,metadata:"development",toString:function(){var e=n.format("%{major}.%{minor}.%{patch}",n.version)
return n.isEmpty(n.version.metadata)||(e+="+"+n.version.metadata),e}},Promise:"undefined"!=typeof Promise?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(e,t,r){var a,i,o,s,l,u,d,c=[];(n.isDomElement(e)||n.isJqueryElement(e))&&(e=n.collectFormValues(e))
for(a in t){o=n.getDeepObjectValue(e,a),s=n.result(t[a],o,e,a,r,t)
for(i in s){if(l=n.validators[i],!l)throw d=n.format("Unknown validator %{name}",{name:i}),new Error(d)
u=s[i],u=n.result(u,o,e,a,r,t),u&&c.push({attribute:a,value:o,validator:i,globalOptions:r,attributes:e,options:u,error:l.call(l,o,u,a,e,r)})}}return c},processValidationResults:function(e,t){var r
switch(e=n.pruneEmptyErrors(e,t),e=n.expandMultipleErrors(e,t),e=n.convertErrorMessages(e,t),t.format||"grouped"){case"detailed":break
case"flat":e=n.flattenErrorsToArray(e)
break
case"grouped":e=n.groupErrorsByAttribute(e)
for(r in e)e[r]=n.flattenErrorsToArray(e[r])
break
default:throw new Error(n.format("Unknown format %{format}",t))}return n.isEmpty(e)?void 0:e},async:function(e,t,r){r=n.extend({},n.async.options,r)
var a=r.wrapErrors||function(e){return e}
r.cleanAttributes!==!1&&(e=n.cleanAttributes(e,t))
var i=n.runValidations(e,t,r)
return new n.Promise(function(o,s){n.waitForResults(i).then(function(){var l=n.processValidationResults(i,r)
l?s(new a(l,r,e,t)):o(e)},function(e){s(e)})})},single:function(e,t,r){return r=n.extend({},n.single.options,r,{format:"flat",fullMessages:!1}),n({single:e},{single:t},r)},waitForResults:function(e){return e.reduce(function(e,t){return n.isPromise(t.error)?e.then(function(){return t.error.then(function(e){t.error=e||null},function(e){if(e instanceof Error)throw e
n.error("Rejecting promises with the result is deprecated. Please use the resolve callback instead."),t.error=e})}):e},new n.Promise(function(e){e()}))},result:function(e){var t=[].slice.call(arguments,1)
return"function"==typeof e&&(e=e.apply(null,t)),e},isNumber:function(e){return"number"==typeof e&&!isNaN(e)},isFunction:function(e){return"function"==typeof e},isInteger:function(e){return n.isNumber(e)&&e%1===0},isObject:function(e){return e===Object(e)},isDate:function(e){return e instanceof Date},isDefined:function(e){return null!==e&&void 0!==e},isPromise:function(e){return!!e&&n.isFunction(e.then)},isJqueryElement:function(e){return e&&n.isString(e.jquery)},isDomElement:function(e){return e&&n.isFunction(e.querySelectorAll)&&n.isFunction(e.querySelector)?n.isObject(document)&&e===document?!0:"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName:!1},isEmpty:function(e){var t
if(!n.isDefined(e))return!0
if(n.isFunction(e))return!1
if(n.isString(e))return n.EMPTY_STRING_REGEXP.test(e)
if(n.isArray(e))return 0===e.length
if(n.isDate(e))return!1
if(n.isObject(e)){for(t in e)return!1
return!0}return!1},format:n.extend(function(e,t){return n.isString(e)?e.replace(n.format.FORMAT_REGEXP,function(e,r,a){return"%"===r?"%{"+a+"}":String(t[a])}):e},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(e){return n.isNumber(e)?100*e%1===0?""+e:parseFloat(Math.round(100*e)/100).toFixed(2):n.isArray(e)?e.map(function(e){return n.prettify(e)}).join(", "):n.isObject(e)?e.toString():(e=""+e,e.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(e,t,r){return""+t+" "+r.toLowerCase()}).toLowerCase())},stringifyValue:function(e){return n.prettify(e)},isString:function(e){return"string"==typeof e},isArray:function(e){return"[object Array]"==={}.toString.call(e)},contains:function(e,t){return n.isDefined(e)?n.isArray(e)?-1!==e.indexOf(t):t in e:!1},forEachKeyInKeypath:function(e,t,r){if(n.isString(t)){var a,i="",o=!1
for(a=0;a<t.length;++a)switch(t[a]){case".":o?(o=!1,i+="."):(e=r(e,i,!1),i="")
break
case"\\":o?(o=!1,i+="\\"):o=!0
break
default:o=!1,i+=t[a]}return r(e,i,!0)}},getDeepObjectValue:function(e,t){return n.isObject(e)?n.forEachKeyInKeypath(e,t,function(e,t){return n.isObject(e)?e[t]:void 0}):void 0},collectFormValues:function(e,t){var r,a,i,o,s={}
if(n.isJqueryElement(e)&&(e=e[0]),!e)return s
for(t=t||{},i=e.querySelectorAll("input[name], textarea[name]"),r=0;r<i.length;++r)a=i.item(r),n.isDefined(a.getAttribute("data-ignored"))||(o=n.sanitizeFormValue(a.value,t),"number"===a.type?o=o?+o:null:"checkbox"===a.type?a.attributes.value?a.checked||(o=s[a.name]||null):o=a.checked:"radio"===a.type&&(a.checked||(o=s[a.name]||null)),s[a.name]=o)
for(i=e.querySelectorAll("select[name]"),r=0;r<i.length;++r)a=i.item(r),o=n.sanitizeFormValue(a.options[a.selectedIndex].value,t),s[a.name]=o
return s},sanitizeFormValue:function(e,t){return t.trim&&n.isString(e)&&(e=e.trim()),t.nullify!==!1&&""===e?null:e},capitalize:function(e){return n.isString(e)?e[0].toUpperCase()+e.slice(1):e},pruneEmptyErrors:function(e){return e.filter(function(e){return!n.isEmpty(e.error)})},expandMultipleErrors:function(e){var t=[]
if("undefined"!=typeof e)for(var r=0;r<e.length;r++){var a=e[r]
if(n.isArray(a.error))for(var i=a.error,o=0;o<i.length;o++){var s=i[o]
t.push(n.extend({},a,{error:s}))}else t.push(a)}return t},convertErrorMessages:function(e,t){t=t||{}
var r=[]
if("undefined"!=typeof e)for(var a=0;a<e.length;a++){var i=e[a],o=n.result(i.error,i.value,i.attribute,i.options,i.attributes,i.globalOptions)
if(!n.isString(o))return void r.push(i)
"^"===o[0]?o=o.slice(1):t.fullMessages!==!1&&(o=n.capitalize(n.prettify(i.attribute))+" "+o),o=o.replace(/\\\^/g,"^"),o=n.format(o,{value:n.stringifyValue(i.value)}),r.push(n.extend({},i,{error:o}))}return r},groupErrorsByAttribute:function(e){var t={}
if("undefined"!=typeof e)for(var r=0;r<e.length;r++){var a=e[r],n=t[a.attribute]
n?n.push(a):t[a.attribute]=[a]}return t},flattenErrorsToArray:function(e){return e.map(function(e){return e.error})},cleanAttributes:function(e,t){function r(e,t,r){return n.isObject(e[t])?e[t]:e[t]=r?!0:{}}function a(e){var t,a={}
for(t in e)e[t]&&n.forEachKeyInKeypath(a,t,r)
return a}function i(e,t){if(!n.isObject(e))return e
var r,a,o=n.extend({},e)
for(a in e)r=t[a],n.isObject(r)?o[a]=i(o[a],r):r||delete o[a]
return o}return n.isObject(t)&&n.isObject(e)?(t=a(t),i(e,t)):{}},exposeModule:function(e,t,r,a,n){r?(a&&a.exports&&(r=a.exports=e),r.validate=e):(t.validate=e,e.isFunction(n)&&n.amd&&n([],function(){return e}))},warn:function(e){"undefined"!=typeof console&&console.warn&&console.warn("[validate.js] "+e)},error:function(e){var t="[validate.js] "+e
"undefined"!=typeof console&&console.error&&console.error(t)},swError:function(e){var t="[validate.js] "+e
throw showErr(t),new Error(t)}}),a.validators={tip:function(e,t){},presence:function(e,t){return t=n.extend({},this.options,t),n.isEmpty(e)?t.message||this.message||VALIDATE_MSG.cantBeBlank:void 0},length:function(e,t,r){if(!n.isEmpty(e)){t=n.extend({},this.options,t)
var a,i=t.is,o=t.maximum,s=t.minimum,l=t.tokenizer||function(e){return e},u=[]
e=l(e)
var d=e.length
return n.isNumber(d)?(n.isNumber(i)&&d!==i&&(a=t.wrongLength||this.wrongLength||VALIDATE_MSG.wrongLen,u.push(n.format(a,{count:i}))),n.isNumber(s)&&s>d&&(a=t.tooShort||this.tooShort||VALIDATE_MSG.tooShort,u.push(n.format(a,{count:s}))),n.isNumber(o)&&d>o&&(a=t.tooLong||this.tooLong||VALIDATE_MSG.tooLong,u.push(n.format(a,{count:o}))),u.length>0?t.message||u:void 0):(n.error(n.format("Attribute %{attr} has a non numeric value for `length`",{attr:r})),t.message||this.notValid||"has an incorrect length")}},numericality:function(e,t){if(!n.isEmpty(e)){t=n.extend({},this.options,t)
var r,a,i=[],o={greaterThan:function(e,t){return e>t},greaterThanOrEqualTo:function(e,t){return e>=t},equalTo:function(e,t){return e===t},lessThan:function(e,t){return t>e},lessThanOrEqualTo:function(e,t){return t>=e}}
if(t.noStrings!==!0&&n.isString(e)&&(e=+e),!n.isNumber(e))return t.message||t.notValid||this.notValid||VALIDATE_MSG.notNumber
if(t.onlyInteger&&!n.isInteger(e))return t.message||t.notInteger||this.notInteger||VALIDATE_MSG.mustBeInteger
for(r in o)if(a=t[r],n.isNumber(a)&&!o[r](e,a)){var s="not"+n.capitalize(r),l=t[s]||this[s]||VALIDATE_MSG.mustBeType
i.push(n.format(l,{count:a,type:n.prettify(r)}))}return t.odd&&e%2!==1&&i.push(t.notOdd||this.notOdd||VALIDATE_MSG.mustBeOdd),t.even&&e%2!==0&&i.push(t.notEven||this.notEven||VALIDATE_MSG.mustBeEven),i.length?t.message||i:void 0}},datetime:n.extend(function(e,t){if(n.isFunction(this.parse)&&n.isFunction(this.format)||n.swError("Both the parse and format functions needs to be set to use the datetime/date validator"),!n.isEmpty(e)){t=n.extend({},this.options,t)
var r,a=[],i=t.earliest?this.parse(t.earliest,t):NaN,o=t.latest?this.parse(t.latest,t):NaN
return e=this.parse(e,t),isNaN(e)?t.message||this.notValid||VALIDATE_MSG.validDate:(!isNaN(i)&&i>e&&(r=this.tooEarly||VALIDATE_MSG.notEarlierThanDate,r=n.format(r,{date:this.format(i,t)}),a.push(r)),!isNaN(o)&&e>o&&(r=this.tooLate||VALIDATE_MSG.notLaterThanDate,r=n.format(r,{date:this.format(o,t)}),a.push(r)),a.length?t.message||a:void 0)}},{parse:null,format:null}),date:function(e,t){return t=n.extend({},t,{dateOnly:!0}),n.validators.datetime.call(n.validators.datetime,e,t)},format:function(e,t){(n.isString(t)||t instanceof RegExp)&&(t={pattern:t}),t=n.extend({},this.options,t)
var r,a=t.message||this.message||VALIDATE_MSG.isInvalid,i=t.pattern
return n.isEmpty(e)?void 0:n.isString(e)?(n.isString(i)&&(i=new RegExp(t.pattern,t.flags)),r=i.exec(e),r&&r[0].length==e.length?void 0:a):a},inclusion:function(e,t){if(!n.isEmpty(e)&&(n.isArray(t)&&(t={within:t}),t=n.extend({},this.options,t),!n.contains(t.within,e))){var r=t.message||this.message||"^%{value} is not included in the list"
return n.format(r,{value:e})}},exclusion:function(e,t){if(!n.isEmpty(e)&&(n.isArray(t)&&(t={within:t}),t=n.extend({},this.options,t),n.contains(t.within,e))){var r=t.message||this.message||VALIDATE_MSG.valueRestricted
return n.format(r,{value:e})}},email:n.extend(function(e,t){t=n.extend({},this.options,t)
var r=t.message||this.message||VALIDATE_MSG.notValidMail
if(!n.isEmpty(e))return n.isString(e)&&this.PATTERN.exec(e)?void 0:r},{PATTERN:/^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i}),equality:function(e,t,r,a){if(!n.isEmpty(e)){n.isString(t)&&(t={attribute:t}),t=n.extend({},this.options,t)
var i=t.message||this.message||VALIDATE_MSG.notEqualToAttribute
if(n.isEmpty(t.attribute)||!n.isString(t.attribute))throw new Error(VALIDATE_MSG.notEmptyString)
var o=n.getDeepObjectValue(a,t.attribute),s=t.comparator||function(e,t){return e===t}
return s(e,o,t,r,a)?void 0:n.format(i,{attribute:n.prettify(t.attribute)})}},url:function(e,t){if(!n.isEmpty(e)){t=n.extend({},this.options,t)
var r=t.message||this.message||VALIDATE_MSG.notValidUrl,a=t.schemes||this.schemes||["http","https"],i=t.allowLocal||this.allowLocal||!1
if(!n.isString(e))return r
var o="^(?:(?:"+a.join("|")+"):\\/\\/)(?:\\S+(?::\\S*)?@)?"
o+="(?:"
var s="(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))"
i?s="(?:localhost|"+s+")":o+="(?!10(?:\\.\\d{1,3}){3})(?!127(?:\\.\\d{1,3}){3})(?!169\\.254(?:\\.\\d{1,3}){2})(?!192\\.168(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",o+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|"+s+"(?::\\d{2,5})?(?:\\/[^\\s]*)?$"
var l=new RegExp(o,"i")
return l.exec(e)?void 0:r}}},a.exposeModule(a,this,e,t,r)}.call(this,"undefined"!=typeof exports?exports:null,"undefined"!=typeof module?module:null,"undefined"!=typeof define?define:null)
