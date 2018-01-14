function validateItemOnFocus(){clearError(this,this.validateObj.validateOpt.bInstantFieldValidation),void 0!=this.fnOnFocusOrig&&this.fnOnFocusOrig()}function validateItemOnChange(e){var t="[cValidate.js validateItemOnChange()] "
jslog(JSLOG_JSU,t+JSLOG_FUN_END)
var r=new Object,a=e.tagName
jslog(JSLOG_JSU,t+"el id="+e.id+" tagName="+a)
var i=e.validateObj
if(!i.validateOpt.bInstantFieldValidation)return jslog(JSLOG_JSU,t+"Nothing to do (bInstantFieldValidation=false) "+JSLOG_FUN_END)
var n=null
"SELECT"==a?n=e.options[e.selectedIndex].value:"INPUT"==a&&(n=e.value),r[e.id]=n,jslogObj(JSLOG_JSU,"validate objValues",r)
var o=validate(r,i.constraints),s=(o.length,o[e.id]),l=void 0!=s
jslog(JSLOG_JSU,t+"szErr="+s+" bErr="+l)
var u=e.parentNode.querySelector(".validateErrLabel")
classAdd(e,"validateErr",l)
var d=i.validateOpt
if(d.bOnErrShowLabel&&(u.innerHTML=s,elementShow(u,l,"inline")),d.bOnErrShowAlarm)if("SELECT"==a){var c=input.parentNode.querySelector(".jsuAlarmingImg")
elementShow(c,l,"inline")}else alarmShowIn1El(e,l)
d.bEnphasizeItemBorder&&(jslog(JSLOG_JSU,t+"enphasize Border for Error Item"),classAdd(e,"validateItemErr",l)),jslog(JSLOG_JSU,t+JSLOG_FUN_END)}function clearError(e,t){if(void 0==t&&(t=!1),"SELECT"==e.tagName){var r=e.parentNode.querySelector(".jsuAlarmingImg")
elementShow(r,!1)}else alarmShowIn1El(e,!1)
if(!t){classAdd(e,"validateErr",!1)
var a=e.parentNode.querySelector(".validateErrLabel")
elementShow(a,!1)}classAdd(e,"validateItemErr",!1)}var VALIDATE_SUPPORTED_TAG=["INPUT","SELECT","TEXTAREA"],VALIDATE_RETCODE={OK:"OK",ERR:"ERR"},VALIDATE_DEF_OPT={bInstantFieldValidation:!0,bOnErrShowLabel:!0,bOnErrShowSect:!1,bOnErrShowPopup:!1,bOnErrShowAlarm:!1,bEnphasizeItemBorder:!0,szDateFmt:"yyyy-MM-dd",szDateTimeFmt:"yyyy-MM-dd hh:mm:ss"}
cValidate=function(e,t){var r="[cValidate.js cValidate()] "
jslog(JSLOG_JSU,r+JSLOG_FUN_START),jslogObj(JSLOG_JSU,r+"IN [objOpt]=",t),this.constraints=e
var a=new Array
for(var i in e){var n=getElementById2(i)
if(null==n)return showErr(r+"SW ERROR key="+i+"  is not a DOM id - return null from getElementById2("+i+")")
var o=n.tagName
if(checkArVal(n.tagName,VALIDATE_SUPPORTED_TAG,"SW ERROR for DOM item "+n.id+" with tagName="+o+"\nAll the constraints items must refer to a DOM item having a Supported TAG"))return 1
a.push(n)}this.arValidateEl=a,this.validateOpt={bInstantFieldValidation:VALIDATE_DEF_OPT.bInstantFieldValidation,bOnErrShowLabel:VALIDATE_DEF_OPT.bOnErrShowLabel,bOnErrShowSect:VALIDATE_DEF_OPT.bOnErrShowSect,bOnErrShowPopup:VALIDATE_DEF_OPT.bOnErrShowPopup,bOnErrShowAlarm:VALIDATE_DEF_OPT.bOnErrShowAlarm,bEnphasizeItemBorder:VALIDATE_DEF_OPT.bEnphasizeItemBorder,szDateFmt:VALIDATE_DEF_OPT.szDateFmt,szDateTimeFmt:VALIDATE_DEF_OPT.szDateTimeFmt},this.setOption(t)
for(var s=0;s<this.arValidateEl.length;s++){var n=this.arValidateEl[s]
"SELECT"==n.tagName&&this.addAlarmImg(n)
var l=e[n.id],u=l.tip
if(void 0!=u){jslog(JSLOG_JSU,r+"Add tip for item="+n.id)
var d=document.createElement("input")
classAdd(d,"validateInfo",!0),d.type="button",d.tip=u,d.onmouseover=function(){Tip(this.tip)},d.onmouseout=function(){UnTip()},n.parentNode.appendChild(d)}this.validateOpt.bEnphasizeItemBorder&&1==l.presence&&classAdd(n,"validateItemMandatory",!0)
var c=s==this.arValidateEl.length-1
this.addErrLabel(n,c)
var f=n.onfocus
void 0!=f&&(n.fnOnFocusOrig=f),n.onfocus=validateItemOnFocus,n.validateObj=this}this.arValidateEl=a,this.setErrSection(),jslog(JSLOG_JSU,r+JSLOG_FUN_END)},cValidate.prototype.setOption=function(e){var t="[cSortTable.setOption] "
if(jslog(JSLOG_JSU,t+JSLOG_FUN_START),e){jslogObj(JSLOG_JSU,t+"IN objOpt:",e)
var r=this.validateOpt
void 0!=e.szErrSectId&&(r.szErrSectId=e.szErrSectId),void 0!=e.bInstantFieldValidation&&(r.bInstantFieldValidation=e.bInstantFieldValidation),void 0!=e.bOnErrShowAlarm&&(r.bOnErrShowAlarm=e.bOnErrShowAlarm),void 0!=e.bOnErrShowLabel&&(r.bOnErrShowLabel=e.bOnErrShowLabel),void 0!=e.bOnErrShowSect&&(r.bOnErrShowSect=e.bOnErrShowSect),void 0!=e.bOnErrShowPopup&&(r.bOnErrShowPopup=e.bOnErrShowPopup),void 0!=e.bEnphasizeItemBorder&&(r.bEnphasizeItemBorder=e.bEnphasizeItemBorder),void 0!=e.szDateFmt&&(r.szDateFmt=e.szDateFmt),void 0!=e.szDateTimeFmt&&(r.szDateTimeFmt=e.szDateTimeFmt),this.validateOpt=r,jslogObj(JSLOG_JSU,t+"CURRENT validateOpt:",r)}if(validate.extend(validate.validators.datetime,{parse:function(e,t){var r=t.dateOnly?t.szDateFmt:t.szDateTimeFmt
jslog(JSLOG_JSU,"parse() date/dateTime  value="+e+" format="+r)
var a=getTimeFromFormat(e,r)
return 0==a?void 0:a},format:function(e,t){var r=t.dateOnly?t.szDateFmt:t.szDateTimeFmt
return jslog(JSLOG_JSU,"format() date/dateTime  value="+e+" format="+r),getTimeFromFormat(e,r)},options:{szDateFmt:this.validateOpt.szDateFmt,szDateTimeFmt:this.validateOpt.szDateTimeFmt}}),this.validateOpt.bInstantFieldValidation){jslog(JSLOG_JSU,t+"Add EVENTs for INSTANT Validation")
for(var a=0;a<this.arValidateEl.length;a++)this.arValidateEl[a].addEventListener("change",function(e){e.preventDefault(),validateItemOnChange(this)})}this.setErrSection()
for(var a=0;a<this.arValidateEl.length;a++){var i=this.arValidateEl[a]
clearError(i)
var n=this.constraints[i.id],o=this.validateOpt.bEnphasizeItemBorder&&1==n.presence
classAdd(i,"validateItemMandatory",o)}jslog(JSLOG_JSU,t+JSLOG_FUN_END)},cValidate.prototype.getOption=function(){return this.validateOpt},cValidate.prototype.validateApply=function(){var e="[cSortTable.validateApply] "
jslog(JSLOG_JSU,e+JSLOG_FUN_START),jslog(JSLOG_JSU,e+"Prepare objValues to Validate")
for(var t=new Object,r=0;r<this.arValidateEl.length;r++){el=this.arValidateEl[r]
var a=el.tagName,i=null
"SELECT"==a?i=el.options[el.selectedIndex].value:"INPUT"==a&&(i=el.value),t[el.id]=i}jslogObj(JSLOG_JSU,"validate objValues",t)
var n=validate(t,this.constraints)
jslogObj(JSLOG_JSU,e+"validate errors",n),this.showErrors(n||{})
var o=n?VALIDATE_RETCODE.ERR:VALIDATE_RETCODE.OK
return jslog(JSLOG_JSU,e+"retCode="+o),jslog(JSLOG_JSU,e+JSLOG_FUN_END),o},cValidate.prototype.showErrors=function(e,t){var r="[cValidate.js showErrors] "
jslog(JSLOG_JSU,r+JSLOG_FUN_START),jslog(JSLOG_JSU,r+"IN bOnlyLabel="+t),void 0==t&&(t=!1)
for(var a="",i=!1,n=this.validateOpt,o=0;o<this.arValidateEl.length;o++){var s=this.arValidateEl[o],l=s.id,u=s.parentNode.querySelector(".validateErrLabel"),d=e&&e[l]
if(null!=d){classAdd(s,"validateErr",!0)
var c=""
for(iEr=0;iEr<d.length;iEr++)iEr>0&&(c+=" - "),c+=d[iEr]
if(n.bOnErrShowLabel&&(jslog(JSLOG_JSU,r+"Id="+l+" set Err="+c),u.innerHTML=c,elementShow(u,!0,"inline")),n.bEnphasizeItemBorder&&(jslog(JSLOG_JSU,r+"enphasize Border for Error Item"),classAdd(s,"validateItemErr",!0)),!t&&n.bOnErrShowAlarm){if("SELECT"==s.tagName){var f=s.parentNode.querySelector(".jsuAlarmingImg")
elementShow(f,!0,"inline")}else alarmShowIn1El(s,!0)}a+="<li>"+c+"</li>",i=!0}else elementShow(u,!1)}if(!t)if(i){if(a='<ul type="square">'+a+"</ul>",n.bOnErrShowSect){var m='<table width="100%"><tr>  <td class="PopupImgWarning" width="80px"></td>  <td><label class="validateErrPopup">'+a+'</label></td>  </tr>  <tr ><td colspan="2" class="tipr"></td></tr></table>'
this.elErrSect.innerHTML=m,elementShow(this.elErrSect,!0)}if(n.bOnErrShowPopup){var E='<label class="validateErrPopup">'+a+"</label>",p=new Object
n.szErrPopupTitle&&(p.szTitle=n.szErrPopupTitle),Popup(POPUP_TYPE.WARN,E,p)}}else elementShow(this.elErrSect,!1)
jslog(JSLOG_JSU,r+JSLOG_FUN_END)},cValidate.prototype.setErrSection=function(){var e="[cValidate.js setErrSection()] "
if(jslog(JSLOG_JSU,e+JSLOG_FUN_START),this.validateOpt)if(this.validateOpt.szErrSectId&&(jslog(JSLOG_JSU,e+"There is SECT ERR with objOpt.szErrSectId="+this.validateOpt.szErrSectId),this.elErrSect=getElementById3(this.validateOpt.szErrSectId,!0,e)),this.validateOpt.bOnErrShowSect){if(void 0==this.elErrSect){var t=getElementById2("validateErrSect")
void 0==t?(t=document.createElement("div"),t.className="validateErrSect",document.body.insertBefore(t,document.body.firstChild)):elementShow(t,!1),this.elErrSect=t}}else this.elErrSect&&elementShow(this.elErrSect,!1)
jslog(JSLOG_JSU,e+JSLOG_FUN_END)},cValidate.prototype.addErrLabel=function(e,t){jslog(JSLOG_JSU,"[cValidate.js addErrLabel()] input.id="+e.id)
var r=e.parentNode.querySelector(".validateErrContainer")
if(void 0==r){r=document.createElement("span"),r.className="validateErrContainer",e.parentNode.appendChild(r)
var a=document.createElement("label")
a.className="validateErrLabel",a.id="validateErrLabel",r.appendChild(a)}clearError(e)},cValidate.prototype.addAlarmImg=function(e){var t="[cValidate.js addAlarmImg()] "
jslog(JSLOG_JSU,t+JSLOG_FUN_START),jslog(JSLOG_JSU,t+"input.id="+e.id)
var r=e.parentNode.querySelector(".jsuAlarmingImg")
if(void 0==r){jslog(JSLOG_JSU,t+"add the elAlarm ")
var a=document.createElement("span")
e.parentNode.appendChild(a),r=document.createElement("input"),r.type="button",r.className="jsuAlarmingImg",a.appendChild(r)}jslog(JSLOG_JSU,t+JSLOG_FUN_END)},function(e,t,r){"use strict"
var a=function(e,t,r){r=i.extend({},i.options,r)
var n,o,s=i.runValidations(e,t,r)
for(n in s)for(o in s[n])if(i.isPromise(s[n][o]))throw new Error("Use validate.async if you want support for promises")
return a.processValidationResults(s,r)},i=a
i.extend=function(e){for(var t=[].slice.call(arguments,1),r=0;r<t.length;r++){var a=t[r]
for(var i in a)e[i]=a[i]}return e},i.extend(a,{version:{major:0,minor:9,patch:0,metadata:"development",toString:function(){var e=i.format("%{major}.%{minor}.%{patch}",i.version)
return i.isEmpty(i.version.metadata)||(e+="+"+i.version.metadata),e}},Promise:"undefined"!=typeof Promise?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(e,t,r){var a,n,o,s,l,u,d,c=[];(i.isDomElement(e)||i.isJqueryElement(e))&&(e=i.collectFormValues(e))
for(a in t){o=i.getDeepObjectValue(e,a),s=i.result(t[a],o,e,a,r,t)
for(n in s){if(!(l=i.validators[n]))throw d=i.format("Unknown validator %{name}",{name:n}),new Error(d)
u=s[n],u=i.result(u,o,e,a,r,t),u&&c.push({attribute:a,value:o,validator:n,globalOptions:r,attributes:e,options:u,error:l.call(l,o,u,a,e,r)})}}return c},processValidationResults:function(e,t){var r
switch(e=i.pruneEmptyErrors(e,t),e=i.expandMultipleErrors(e,t),e=i.convertErrorMessages(e,t),t.format||"grouped"){case"detailed":break
case"flat":e=i.flattenErrorsToArray(e)
break
case"grouped":e=i.groupErrorsByAttribute(e)
for(r in e)e[r]=i.flattenErrorsToArray(e[r])
break
default:throw new Error(i.format("Unknown format %{format}",t))}return i.isEmpty(e)?void 0:e},async:function(e,t,r){r=i.extend({},i.async.options,r)
var a=r.wrapErrors||function(e){return e}
!1!==r.cleanAttributes&&(e=i.cleanAttributes(e,t))
var n=i.runValidations(e,t,r)
return new i.Promise(function(o,s){i.waitForResults(n).then(function(){var l=i.processValidationResults(n,r)
l?s(new a(l,r,e,t)):o(e)},function(e){s(e)})})},single:function(e,t,r){return r=i.extend({},i.single.options,r,{format:"flat",fullMessages:!1}),i({single:e},{single:t},r)},waitForResults:function(e){return e.reduce(function(e,t){return i.isPromise(t.error)?e.then(function(){return t.error.then(function(e){t.error=e||null},function(e){if(e instanceof Error)throw e
i.error("Rejecting promises with the result is deprecated. Please use the resolve callback instead."),t.error=e})}):e},new i.Promise(function(e){e()}))},result:function(e){var t=[].slice.call(arguments,1)
return"function"==typeof e&&(e=e.apply(null,t)),e},isNumber:function(e){return"number"==typeof e&&!isNaN(e)},isFunction:function(e){return"function"==typeof e},isInteger:function(e){return i.isNumber(e)&&e%1==0},isObject:function(e){return e===Object(e)},isDate:function(e){return e instanceof Date},isDefined:function(e){return null!==e&&void 0!==e},isPromise:function(e){return!!e&&i.isFunction(e.then)},isJqueryElement:function(e){return e&&i.isString(e.jquery)},isDomElement:function(e){return!!e&&(!(!i.isFunction(e.querySelectorAll)||!i.isFunction(e.querySelector))&&(!(!i.isObject(document)||e!==document)||("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)))},isEmpty:function(e){var t
if(!i.isDefined(e))return!0
if(i.isFunction(e))return!1
if(i.isString(e))return i.EMPTY_STRING_REGEXP.test(e)
if(i.isArray(e))return 0===e.length
if(i.isDate(e))return!1
if(i.isObject(e)){for(t in e)return!1
return!0}return!1},format:i.extend(function(e,t){return i.isString(e)?e.replace(i.format.FORMAT_REGEXP,function(e,r,a){return"%"===r?"%{"+a+"}":String(t[a])}):e},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(e){return i.isNumber(e)?100*e%1==0?""+e:parseFloat(Math.round(100*e)/100).toFixed(2):i.isArray(e)?e.map(function(e){return i.prettify(e)}).join(", "):i.isObject(e)?e.toString():(e=""+e,e.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(e,t,r){return t+" "+r.toLowerCase()}).toLowerCase())},stringifyValue:function(e){return i.prettify(e)},isString:function(e){return"string"==typeof e},isArray:function(e){return"[object Array]"==={}.toString.call(e)},contains:function(e,t){return!!i.isDefined(e)&&(i.isArray(e)?-1!==e.indexOf(t):t in e)},forEachKeyInKeypath:function(e,t,r){if(i.isString(t)){var a,n="",o=!1
for(a=0;a<t.length;++a)switch(t[a]){case".":o?(o=!1,n+="."):(e=r(e,n,!1),n="")
break
case"\\":o?(o=!1,n+="\\"):o=!0
break
default:o=!1,n+=t[a]}return r(e,n,!0)}},getDeepObjectValue:function(e,t){if(i.isObject(e))return i.forEachKeyInKeypath(e,t,function(e,t){if(i.isObject(e))return e[t]})},collectFormValues:function(e,t){var r,a,n,o,s={}
if(i.isJqueryElement(e)&&(e=e[0]),!e)return s
for(t=t||{},n=e.querySelectorAll("input[name], textarea[name]"),r=0;r<n.length;++r)a=n.item(r),i.isDefined(a.getAttribute("data-ignored"))||(o=i.sanitizeFormValue(a.value,t),"number"===a.type?o=o?+o:null:"checkbox"===a.type?a.attributes.value?a.checked||(o=s[a.name]||null):o=a.checked:"radio"===a.type&&(a.checked||(o=s[a.name]||null)),s[a.name]=o)
for(n=e.querySelectorAll("select[name]"),r=0;r<n.length;++r)a=n.item(r),o=i.sanitizeFormValue(a.options[a.selectedIndex].value,t),s[a.name]=o
return s},sanitizeFormValue:function(e,t){return t.trim&&i.isString(e)&&(e=e.trim()),!1!==t.nullify&&""===e?null:e},capitalize:function(e){return i.isString(e)?e[0].toUpperCase()+e.slice(1):e},pruneEmptyErrors:function(e){return e.filter(function(e){return!i.isEmpty(e.error)})},expandMultipleErrors:function(e){var t=[]
if(void 0!==e)for(var r=0;r<e.length;r++){var a=e[r]
if(i.isArray(a.error))for(var n=a.error,o=0;o<n.length;o++){var s=n[o]
t.push(i.extend({},a,{error:s}))}else t.push(a)}return t},convertErrorMessages:function(e,t){t=t||{}
var r=[]
if(void 0!==e)for(var a=0;a<e.length;a++){var n=e[a],o=i.result(n.error,n.value,n.attribute,n.options,n.attributes,n.globalOptions)
if(!i.isString(o))return void r.push(n)
"^"===o[0]?o=o.slice(1):!1!==t.fullMessages&&(o=i.capitalize(i.prettify(n.attribute))+" "+o),o=o.replace(/\\\^/g,"^"),o=i.format(o,{value:i.stringifyValue(n.value)}),r.push(i.extend({},n,{error:o}))}return r},groupErrorsByAttribute:function(e){var t={}
if(void 0!==e)for(var r=0;r<e.length;r++){var a=e[r],i=t[a.attribute]
i?i.push(a):t[a.attribute]=[a]}return t},flattenErrorsToArray:function(e){return e.map(function(e){return e.error})},cleanAttributes:function(e,t){function r(e,t,r){return i.isObject(e[t])?e[t]:e[t]=!!r||{}}function a(e,t){if(!i.isObject(e))return e
var r,n,o=i.extend({},e)
for(n in e)r=t[n],i.isObject(r)?o[n]=a(o[n],r):r||delete o[n]
return o}return i.isObject(t)&&i.isObject(e)?(t=function(e){var t,a={}
for(t in e)e[t]&&i.forEachKeyInKeypath(a,t,r)
return a}(t),a(e,t)):{}},exposeModule:function(e,t,r,a,i){r?(a&&a.exports&&(r=a.exports=e),r.validate=e):(t.validate=e,e.isFunction(i)&&i.amd&&i([],function(){return e}))},warn:function(e){"undefined"!=typeof console&&console.warn&&console.warn("[validate.js] "+e)},error:function(e){var t="[validate.js] "+e
"undefined"!=typeof console&&console.error&&console.error(t)},swError:function(e){var t="[validate.js] "+e
throw showErr(t),new Error(t)}}),a.validators={tip:function(e,t){},presence:function(e,t){if(t=i.extend({},this.options,t),i.isEmpty(e))return t.message||this.message||VALIDATE_MSG.cantBeBlank},length:function(e,t,r){if(!i.isEmpty(e)){t=i.extend({},this.options,t)
var a,n=t.is,o=t.maximum,s=t.minimum,l=t.tokenizer||function(e){return e},u=[]
e=l(e)
var d=e.length
return i.isNumber(d)?(i.isNumber(n)&&d!==n&&(a=t.wrongLength||this.wrongLength||VALIDATE_MSG.wrongLen,u.push(i.format(a,{count:n}))),i.isNumber(s)&&d<s&&(a=t.tooShort||this.tooShort||VALIDATE_MSG.tooShort,u.push(i.format(a,{count:s}))),i.isNumber(o)&&d>o&&(a=t.tooLong||this.tooLong||VALIDATE_MSG.tooLong,u.push(i.format(a,{count:o}))),u.length>0?t.message||u:void 0):(i.error(i.format("Attribute %{attr} has a non numeric value for `length`",{attr:r})),t.message||this.notValid||"has an incorrect length")}},numericality:function(e,t){if(!i.isEmpty(e)){t=i.extend({},this.options,t)
var r,a,n=[],o={greaterThan:function(e,t){return e>t},greaterThanOrEqualTo:function(e,t){return e>=t},equalTo:function(e,t){return e===t},lessThan:function(e,t){return e<t},lessThanOrEqualTo:function(e,t){return e<=t}}
if(!0!==t.noStrings&&i.isString(e)&&(e=+e),!i.isNumber(e))return t.message||t.notValid||this.notValid||VALIDATE_MSG.notNumber
if(t.onlyInteger&&!i.isInteger(e))return t.message||t.notInteger||this.notInteger||VALIDATE_MSG.mustBeInteger
for(r in o)if(a=t[r],i.isNumber(a)&&!o[r](e,a)){var s="not"+i.capitalize(r),l=t[s]||this[s]||VALIDATE_MSG.mustBeType
n.push(i.format(l,{count:a,type:i.prettify(r)}))}return t.odd&&e%2!=1&&n.push(t.notOdd||this.notOdd||VALIDATE_MSG.mustBeOdd),t.even&&e%2!=0&&n.push(t.notEven||this.notEven||VALIDATE_MSG.mustBeEven),n.length?t.message||n:void 0}},datetime:i.extend(function(e,t){if(i.isFunction(this.parse)&&i.isFunction(this.format)||i.swError("Both the parse and format functions needs to be set to use the datetime/date validator"),!i.isEmpty(e)){t=i.extend({},this.options,t)
var r,a=[],n=t.earliest?this.parse(t.earliest,t):NaN,o=t.latest?this.parse(t.latest,t):NaN
return e=this.parse(e,t),isNaN(e)?t.message||this.notValid||VALIDATE_MSG.validDate:(!isNaN(n)&&e<n&&(r=this.tooEarly||VALIDATE_MSG.notEarlierThanDate,r=i.format(r,{date:this.format(n,t)}),a.push(r)),!isNaN(o)&&e>o&&(r=this.tooLate||VALIDATE_MSG.notLaterThanDate,r=i.format(r,{date:this.format(o,t)}),a.push(r)),a.length?t.message||a:void 0)}},{parse:null,format:null}),date:function(e,t){return t=i.extend({},t,{dateOnly:!0}),i.validators.datetime.call(i.validators.datetime,e,t)},format:function(e,t){(i.isString(t)||t instanceof RegExp)&&(t={pattern:t}),t=i.extend({},this.options,t)
var r,a=t.message||this.message||VALIDATE_MSG.isInvalid,n=t.pattern
if(!i.isEmpty(e))return i.isString(e)?(i.isString(n)&&(n=new RegExp(t.pattern,t.flags)),r=n.exec(e),r&&r[0].length==e.length?void 0:a):a},inclusion:function(e,t){if(!i.isEmpty(e)&&(i.isArray(t)&&(t={within:t}),t=i.extend({},this.options,t),!i.contains(t.within,e))){var r=t.message||this.message||"^%{value} is not included in the list"
return i.format(r,{value:e})}},exclusion:function(e,t){if(!i.isEmpty(e)&&(i.isArray(t)&&(t={within:t}),t=i.extend({},this.options,t),i.contains(t.within,e))){var r=t.message||this.message||VALIDATE_MSG.valueRestricted
return i.format(r,{value:e})}},email:i.extend(function(e,t){t=i.extend({},this.options,t)
var r=t.message||this.message||VALIDATE_MSG.notValidMail
if(!i.isEmpty(e))return i.isString(e)&&this.PATTERN.exec(e)?void 0:r},{PATTERN:/^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i}),equality:function(e,t,r,a){if(!i.isEmpty(e)){i.isString(t)&&(t={attribute:t}),t=i.extend({},this.options,t)
var n=t.message||this.message||VALIDATE_MSG.notEqualToAttribute
if(i.isEmpty(t.attribute)||!i.isString(t.attribute))throw new Error(VALIDATE_MSG.notEmptyString)
var o=i.getDeepObjectValue(a,t.attribute)
return(t.comparator||function(e,t){return e===t})(e,o,t,r,a)?void 0:i.format(n,{attribute:i.prettify(t.attribute)})}},url:function(e,t){if(!i.isEmpty(e)){t=i.extend({},this.options,t)
var r=t.message||this.message||VALIDATE_MSG.notValidUrl,a=t.schemes||this.schemes||["http","https"],n=t.allowLocal||this.allowLocal||!1
if(!i.isString(e))return r
var o="^(?:(?:"+a.join("|")+"):\\/\\/)(?:\\S+(?::\\S*)?@)?"
o+="(?:"
var s="(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))"
n?s="(?:localhost|"+s+")":o+="(?!10(?:\\.\\d{1,3}){3})(?!127(?:\\.\\d{1,3}){3})(?!169\\.254(?:\\.\\d{1,3}){2})(?!192\\.168(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",o+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|"+s+"(?::\\d{2,5})?(?:\\/[^\\s]*)?$"
return new RegExp(o,"i").exec(e)?void 0:r}}},a.exposeModule(a,this,e,t,r)}.call(this,"undefined"!=typeof exports?exports:null,"undefined"!=typeof module?module:null,"undefined"!=typeof define?define:null)
