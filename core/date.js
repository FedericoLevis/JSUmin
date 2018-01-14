function LZ(e){return(e<0||e>9?"":"0")+e}function isDate(e,t){return 0!=getTimeFromFormat(e,t)}function compareDates(e,t,r,n){if(jslog(JSLOG_TEST,"[compareDates] IN szDate1="+e+"  szDate2="+t+"   szFormat="+r),0==e.length&&0==t.length)return 0
if(0==e.length)return 2
if(0==t.length)return 1
var a=getTimeFromFormat(e,r)
if(0==a)return n&&showErr(e+"\n\n"+ERR_DATE_FMT+r,-2),-2
var l=getTimeFromFormat(t,r)
return 0==l?(n&&showErr(t+"\n\n"+ERR_DATE_FMT+r,-2),-2):a>l?1:a<l?2:0}function szDateChangeFmt(e,t,r,n){var a="[szDateChangeFmt] ",l=""
if(jslog(JSLOG_TEST,a+JSLOG_FUN_START),jslog(JSLOG_TEST,a+"IN szDate1="+e+"  szFmt1="+t+" szFmt2="+r),t==r)return e
if(0==e.length)return jslog(JSLOG_TEST,"OUT: szDate2="+l),l
var g=getTimeFromFormat(e,t)
if(0==g)return n&&showErr(e+"\n\n"+ERR_DATE_FMT+t,1),jslog(JSLOG_TEST,"OUT: szDate2="+l),l
var s=new Date
s.setTime(g)
var l=formatDate(s,r)
return jslog(JSLOG_TEST,"OUT: szDate2="+l),jslog(JSLOG_TEST,a+JSLOG_FUN_END),l}function formatDate(e,t){t+=""
var r,n="",a=0,l="",g="",s=e.getYear()+"",i=e.getMonth()+1,u=e.getDate(),o=e.getDay(),r=e.getHours(),M=e.getMinutes(),h=e.getSeconds(),f=new Object
for(s.length<4&&(s=""+(s-0+1900)),f.y=""+s,f.yyyy=s,f.yy=s.substring(2,4),f.M=i,f.MM=LZ(i),f.MMM=MONTH_NAMES[i-1],f.NNN=MONTH_NAMES[i+11],f.d=u,f.dd=LZ(u),f.E=DAY_NAMES[o+7],f.EE=DAY_NAMES[o],f.H=r,f.HH=LZ(r),f.h=0==r?12:r>12?r-12:r,f.hh=LZ(f.h),f.K=r>11?r-12:r,f.k=r+1,f.KK=LZ(f.K),f.kk=LZ(f.k),f.a=r>11?"PM":"AM",f.m=M,f.mm=LZ(M),f.s=h,f.ss=LZ(h);a<t.length;){for(l=t.charAt(a),g="";t.charAt(a)==l&&a<t.length;)g+=t.charAt(a++)
null!=f[g]?n+=f[g]:n+=g}return n}function _isInteger(e){for(var t="1234567890",r=0;r<e.length;r++)if(-1==t.indexOf(e.charAt(r)))return!1
return!0}function _getInt(e,t,r,n){for(var a=n;a>=r;a--){var l=e.substring(t,t+a)
if(l.length<r)return null
if(_isInteger(l))return l}return null}function getTimeFromFormat(e,t){e+=""
for(var r=e.length,n=!1,a=e.length-1;!n&&a--;a>=0){" "!=e.charAt(a)?n=!0:r--}if(t+="",r<2)return 0
for(var l,g,s=0,i=0,u="",o="",M=new Date,h=M.getYear(),f=M.getMonth()+1,m=1,y=0,T=0,A=0,_="",d=!1;i<t.length&&!d;){for(u=t.charAt(i),o="";t.charAt(i)==u&&i<t.length;)o+=t.charAt(i++)
if(s!=r||" "!=o&&"  "!=o&&"HH"!=o&&"H"!=o&&"HH"!=o&&"H"!=o&&"KK"!=o&&"K"!=o&&"kk"!=o&&"k"!=o&&"mm"!=o&&"m"!=o&&"ss"!=o&&"s"!=o&&"a"!=o)if("yyyy"==o||"yy"==o||"y"==o){if("yyyy"==o&&(l=4,g=4),"yy"==o&&(l=2,g=2),"y"==o&&(l=2,g=4),null==(h=_getInt(e,s,l,g)))return 0
s+=h.length,2==h.length&&(h=h>70?h-0+1900:h-0+2e3)}else if("MMM"==o||"NNN"==o){f=0
for(var a=0;a<MONTH_NAMES.length;a++){var F=MONTH_NAMES[a]
if(e.substring(s,s+F.length).toLowerCase()==F.toLowerCase()&&("MMM"==o||"NNN"==o&&a>11)){f=a+1,f>12&&(f-=12),s+=F.length
break}}if(f<1||f>12)return 0}else if("EE"==o||"E"==o)for(var a=0;a<DAY_NAMES.length;a++){var E=DAY_NAMES[a]
if(e.substring(s,s+E.length).toLowerCase()==E.toLowerCase()){s+=E.length
break}}else if("MM"==o||"M"==o){if(null==(f=_getInt(e,s,o.length,2))||f<1||f>12)return 0
s+=f.length}else if("dd"==o||"d"==o){if(null==(m=_getInt(e,s,o.length,2))||m<1||m>31)return 0
s+=m.length}else if("hh"==o||"h"==o){if(null==(y=_getInt(e,s,o.length,2))||y<1||y>12)return 0
s+=y.length}else if("HH"==o||"H"==o){if(null==(y=_getInt(e,s,o.length,2))||y<0||y>23)return 0
s+=y.length}else if("KK"==o||"K"==o){if(null==(y=_getInt(e,s,o.length,2))||y<0||y>11)return 0
s+=y.length}else if("kk"==o||"k"==o){if(null==(y=_getInt(e,s,o.length,2))||y<1||y>24)return 0
s+=y.length,y--}else if("mm"==o||"m"==o){if(null==(T=_getInt(e,s,o.length,2))||T<0||T>59)return 0
s+=T.length}else if("ss"==o||"s"==o){if(null==(A=_getInt(e,s,o.length,2))||A<0||A>59)return 0
s+=A.length}else if("a"==o){if("am"==e.substring(s,s+2).toLowerCase())_="AM"
else{if("pm"!=e.substring(s,s+2).toLowerCase())return 0
_="PM"}s+=2}else{if(e.substring(s,s+o.length)!=o)return jslog(JSLOG_INFO,"LEN ERROR"),0
s+=o.length}else d=!0}if(s!=r)return 0
if(2==f)if(h%4==0&&h%100!=0||h%400==0){if(m>29)return 0}else if(m>28)return 0
return(4==f||6==f||9==f||11==f)&&m>30?0:(y<12&&"PM"==_?y=y-0+12:y>11&&"AM"==_&&(y-=12),new Date(h,f-1,m,y,T,A).getTime())}function parseDate(e){var t=2==arguments.length&&arguments[1]
generalFormats=new Array("y-M-d","MMM d, y","MMM d,y","y-MMM-d","d-MMM-y","MMM d"),monthFirst=new Array("M/d/y","M-d-y","M.d.y","MMM-d","M/d","M-d"),dateFirst=new Array("d/M/y","d-M-y","d.M.y","d-MMM","d/M","d-M")
for(var r=new Array("generalFormats",t?"dateFirst":"monthFirst",t?"monthFirst":"dateFirst"),n=null,a=0;a<r.length;a++)for(var l=window[r[a]],g=0;g<l.length;g++)if(0!=(n=getTimeFromFormat(e,l[g])))return new Date(n)
return null}function getDateFromFormat(e,t){return getTimeFromFormat(e,t)}var MONTH_NAMES=new Array("January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),DAY_NAMES=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sun","Mon","Tue","Wed","Thu","Fri","Sat")
