/** @fileOverview
========================================================================================= <BR/> 
<b>File:</b> 			core/date.js <BR/>
<b>Author:</b>     		<a href="https://www.linkedin.com/in/federicolevis" target="_self">Federico Levis</a> <BR/>
<b>LoadingDiv Doc:</b>   <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/LoadingDiv.html" target="_self">JSU LoadingDiv Documentation</a> <BR/>
<b>JSU API Doc:</b> <a href="https://rawgit.com/FedericoLevis/JSUDoc/master/JSUAPI.html" target="_self">JSU API Documentation</a> <BR/>
<b>Description:</b>     common JSU date API 
<BR/>   ------------------------------------------------------------------
<BR/>   These functions use the same 'format' strings as the 
<BR/>   java.text.SimpleDateFormat class, with minor exceptions.
<BR/>   The format string consists of the following abbreviations:
<BR/>   
<BR/>   Field        | Full Form          | Short Form
<BR/>   -------------+--------------------+-----------------------
<BR/>   Year         | yyyy (4 digits)    | yy (2 digits), y (2 or 4 digits)
<BR/>   Month        | MMM (name or abbr.)| MM (2 digits), M (1 or 2 digits)
<BR/>                | NNN (abbr.)        |
<BR/>   Day of Month | dd (2 digits)      | d (1 or 2 digits)
<BR/>   Day of Week  | EE (name)          | E (abbr)
<BR/>   Hour (1-12)  | hh (2 digits)      | h (1 or 2 digits)
<BR/>   Hour (0-23)  | HH (2 digits)      | H (1 or 2 digits)
<BR/>   Hour (0-11)  | KK (2 digits)      | K (1 or 2 digits)
<BR/>   Hour (1-24)  | kk (2 digits)      | k (1 or 2 digits)
<BR/>   Minute       | mm (2 digits)      | m (1 or 2 digits)
<BR/>   Second       | ss (2 digits)      | s (1 or 2 digits)
<BR/>   AM/PM        | a                  |
<BR/>  
<BR/>    ----- Examples
<BR/>     NNN dd, yyyy HH:mm:ss
<BR/>     yyyy-MM-dd
<BR/>  
<BR/>   NOTE THE DIFFERENCE BETWEEN MM and mm! Month=MM, not mm!
<BR/>   Examples:
<BR/>    "MMM d, y" matches: January 01, 2000
<BR/>                        Dec 1, 1900
<BR/>                        Nov 20, 00
<BR/>    "M/d/yy"   matches: 01/20/00
<BR/>                        9/2/00
<BR/>    "MMM dd, yyyy hh:mm:ssa" matches: "January 01, 2000 12:30:45AM"
<BR/>   ------------------------------------------------------------------
<BR/>
<b>REQUIRE:</b>            JSU: jslog.js dom-drag.js   <BR/>
<b>First Version:</b>     ver 1.0 - Jul 2007  <BR/>
<b>Current Version:</b>   JSU v. 1.8 &nbsp;&nbsp;&nbsp;2016-Sep-29  <BR/>
<BR/>-----------------------------------------------------------------------------------<BR/>
<b>DISCLAIMER</b>  <BR/>
Copyright by Federico Levis - <a href="https://github.com/JSUtility/JSU" target="_self">JSU</a> <BR/> 
This file may be freely distributed under the MIT license.   <BR/>
========================================================================================= <BR/> 
*/
function LZ(e){return(0>e||e>9?"":"0")+e}function isDate(e,t){var r=getTimeFromFormat(e,t)
return 0!=r}function compareDates(e,t,r,n){var a="[compareDates] "
if(jslog(JSLOG_TEST,a+"IN szDate1="+e+"  szDate2="+t+"   szFormat="+r),0==e.length&&0==t.length)return 0
if(0==e.length)return 2
if(0==t.length)return 1
var l=getTimeFromFormat(e,r)
if(0==l)return n&&showErr(e+"\n\n"+ERR_DATE_FMT+r,-2),-2
var g=getTimeFromFormat(t,r)
return 0==g?(n&&showErr(t+"\n\n"+ERR_DATE_FMT+r,-2),-2):l>g?1:g>l?2:0}function szDateChangeFmt(e,t,r,n){var a="[szDateChangeFmt] ",l=""
if(jslog(JSLOG_TEST,a+JSLOG_FUN_START),jslog(JSLOG_TEST,a+"IN szDate1="+e+"  szFmt1="+t+" szFmt2="+r),t==r)return e
if(0==e.length)return jslog(JSLOG_TEST,"OUT: szDate2="+l),l
var g=getTimeFromFormat(e,t)
if(0==g)return n&&showErr(e+"\n\n"+ERR_DATE_FMT+t,1),jslog(JSLOG_TEST,"OUT: szDate2="+l),l
var s=new Date
s.setTime(g)
var l=formatDate(s,r)
return jslog(JSLOG_TEST,"OUT: szDate2="+l),jslog(JSLOG_TEST,a+JSLOG_FUN_END),l}function formatDate(e,t){t+=""
var r,n="",a=0,l="",g="",s=e.getYear()+"",i=e.getMonth()+1,u=e.getDate(),o=e.getDay(),r=e.getHours(),M=e.getMinutes(),h=e.getSeconds(),f=new Object
for(s.length<4&&(s=""+(s-0+1900)),f.y=""+s,f.yyyy=s,f.yy=s.substring(2,4),f.M=i,f.MM=LZ(i),f.MMM=MONTH_NAMES[i-1],f.NNN=MONTH_NAMES[i+11],f.d=u,f.dd=LZ(u),f.E=DAY_NAMES[o+7],f.EE=DAY_NAMES[o],f.H=r,f.HH=LZ(r),0==r?f.h=12:r>12?f.h=r-12:f.h=r,f.hh=LZ(f.h),r>11?f.K=r-12:f.K=r,f.k=r+1,f.KK=LZ(f.K),f.kk=LZ(f.k),r>11?f.a="PM":f.a="AM",f.m=M,f.mm=LZ(M),f.s=h,f.ss=LZ(h);a<t.length;){for(l=t.charAt(a),g="";t.charAt(a)==l&&a<t.length;)g+=t.charAt(a++)
n+=null!=f[g]?f[g]:g}return n}function _isInteger(e){for(var t="1234567890",r=0;r<e.length;r++)if(-1==t.indexOf(e.charAt(r)))return!1
return!0}function _getInt(e,t,r,n){for(var a=n;a>=r;a--){var l=e.substring(t,t+a)
if(l.length<r)return null
if(_isInteger(l))return l}return null}function getTimeFromFormat(e,t){e+=""
for(var r=e.length,n=!1,a=e.length-1;!n&&a--;a>=0){var l=e.charAt(a)
" "!=l?n=!0:r--}if(t+="",2>r)return 0
for(var g,s,i=0,u=0,o="",M="",h=new Date,f=h.getYear(),m=h.getMonth()+1,y=1,T=0,A=0,_=0,d="",F=!1;u<t.length&&!F;){for(o=t.charAt(u),M="";t.charAt(u)==o&&u<t.length;)M+=t.charAt(u++)
if(i!=r||" "!=M&&"  "!=M&&"HH"!=M&&"H"!=M&&"HH"!=M&&"H"!=M&&"KK"!=M&&"K"!=M&&"kk"!=M&&"k"!=M&&"mm"!=M&&"m"!=M&&"ss"!=M&&"s"!=M&&"a"!=M)if("yyyy"==M||"yy"==M||"y"==M){if("yyyy"==M&&(g=4,s=4),"yy"==M&&(g=2,s=2),"y"==M&&(g=2,s=4),f=_getInt(e,i,g,s),null==f)return 0
i+=f.length,2==f.length&&(f=f>70?1900+(f-0):2e3+(f-0))}else if("MMM"==M||"NNN"==M){m=0
for(var a=0;a<MONTH_NAMES.length;a++){var E=MONTH_NAMES[a]
if(e.substring(i,i+E.length).toLowerCase()==E.toLowerCase()&&("MMM"==M||"NNN"==M&&a>11)){m=a+1,m>12&&(m-=12),i+=E.length
break}}if(1>m||m>12)return 0}else if("EE"==M||"E"==M)for(var a=0;a<DAY_NAMES.length;a++){var S=DAY_NAMES[a]
if(e.substring(i,i+S.length).toLowerCase()==S.toLowerCase()){i+=S.length
break}}else if("MM"==M||"M"==M){if(m=_getInt(e,i,M.length,2),null==m||1>m||m>12)return 0
i+=m.length}else if("dd"==M||"d"==M){if(y=_getInt(e,i,M.length,2),null==y||1>y||y>31)return 0
i+=y.length}else if("hh"==M||"h"==M){if(T=_getInt(e,i,M.length,2),null==T||1>T||T>12)return 0
i+=T.length}else if("HH"==M||"H"==M){if(T=_getInt(e,i,M.length,2),null==T||0>T||T>23)return 0
i+=T.length}else if("KK"==M||"K"==M){if(T=_getInt(e,i,M.length,2),null==T||0>T||T>11)return 0
i+=T.length}else if("kk"==M||"k"==M){if(T=_getInt(e,i,M.length,2),null==T||1>T||T>24)return 0
i+=T.length,T--}else if("mm"==M||"m"==M){if(A=_getInt(e,i,M.length,2),null==A||0>A||A>59)return 0
i+=A.length}else if("ss"==M||"s"==M){if(_=_getInt(e,i,M.length,2),null==_||0>_||_>59)return 0
i+=_.length}else if("a"==M){if("am"==e.substring(i,i+2).toLowerCase())d="AM"
else{if("pm"!=e.substring(i,i+2).toLowerCase())return 0
d="PM"}i+=2}else{if(e.substring(i,i+M.length)!=M)return jslog(JSLOG_INFO,"LEN ERROR"),0
i+=M.length}else F=!0}if(i!=r)return 0
if(2==m)if(f%4==0&&f%100!=0||f%400==0){if(y>29)return 0}else if(y>28)return 0
if((4==m||6==m||9==m||11==m)&&y>30)return 0
12>T&&"PM"==d?T=T-0+12:T>11&&"AM"==d&&(T-=12)
var N=new Date(f,m-1,y,T,A,_)
return N.getTime()}function parseDate(e){var t=2==arguments.length?arguments[1]:!1
generalFormats=new Array("y-M-d","MMM d, y","MMM d,y","y-MMM-d","d-MMM-y","MMM d"),monthFirst=new Array("M/d/y","M-d-y","M.d.y","MMM-d","M/d","M-d"),dateFirst=new Array("d/M/y","d-M-y","d.M.y","d-MMM","d/M","d-M")
for(var r=new Array("generalFormats",t?"dateFirst":"monthFirst",t?"monthFirst":"dateFirst"),n=null,a=0;a<r.length;a++)for(var l=window[r[a]],g=0;g<l.length;g++)if(n=getTimeFromFormat(e,l[g]),0!=n)return new Date(n)
return null}function getDateFromFormat(e,t){return getTimeFromFormat(e,t)}var MONTH_NAMES=new Array("January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),DAY_NAMES=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sun","Mon","Tue","Wed","Thu","Fri","Sat")
