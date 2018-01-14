![about] | By [Federico Levis]
---------|-----------
----

JSU 
========

``JSU`` **JS Utility Plugin**: Tooltip, Validate, Popup, SortTable, JSLog, LoadingDiv, Google Analytics and other features ...  
 - [Try JSU Samples]
 - [JSU Web Site]

Table of Contents
-----------------

  *  <a href="#1-jsu-features">1) JSU Features</a> 
    *  <a href="#11-jsu-core-features">1.1) JSU Core Features</a> 
    *  <a href="#12-jsu-jquery-features">1.2) JSU jquery Features</a> 
    *  <a href="#13-jsu-popup-plugin-choice">1.3) JSU Popup Plugin Choice</a> 
  *  <a href="#2-jsu-samples-videos-documentation">2) JSU Samples, Videos, Documentation</a> 
  *  <a href="#3-download-and-installation">3) Download and Installation</a> 
  *  <a href="#4-jsu-configuration">4) JSU CONFIGURATION</a> 
    *  <a href="#41-jsu-configuration-requirejs">4.1) JSU CONFIGURATION: require.js</a> 
    *  <a href="#42-jsu-configuration-include-each-js-file">4.2) JSU CONFIGURATION: include each JS FILE</a> 
  *  <a href="#5-jsu-version">5) JSU Version</a> 
  *  <a href="#6-license">6) License</a> 

  
<span id="1-jsu-features"></span>
# 1) JSU Features
**JSU** is a Lightweight JavaScript Utility library with the main goal of simplifing developer design. 
  - Most of the JSU Features API are in PURE JS code: for <a href="#11-jsu-core-features">JSU Core Features</a> **No other plugin is required**
  - **Examples, documentation and Video provided for each JSU feature** (see <a href="#2-jsu-samples-videos-documentation">2) JSU Samples, Videos, Documentation</a>.  From  the [Main JSU Samples] you can reach all the other samples and JSU Feature documentation
  - **Very Powerful and Simple to use**: maximum 1 or 2 JS calls are required to get all the power and flexibilty of the JSU feature 
  - **Very Simple and flexible JSU configuration** with require.js or including manually the required JSU Files (see <a href="#4-jsu-configuration">4) JSU CONFIGURATION</a> ; you can also easily **switch between Comment/Minified JSU** with a single code line modification in jsu.js.  
  - **Localization support**: all the displayed messages are isolated in local/LAN/locale-core.js. You can easily select the desired language simply including the proper locale file (see par 2 ). Default JSU locale is English (local/EN/locale-core.js)  
  - **CSS support** : if required you can easily customize presentation modifying JSU CSS files ([jsu.css])
  - **All modern browsers are supported**: IE9+, Firefox 3+, Chrome, Safari, Opera... 
  **NOTE**: [IE Popup] is the only exception, because it is specifically designed only for IE; instead of [IE Popup] you should use [jquery Popup] when it is required Cross Browser compatibility.
  
  
<span id="11-jsu-core-features"></span>
## 1.1) JSU CORE Features 
``Pure JS Plugins, No Requirement``  
  - [Tooltip]: Many **HTML Tooltips** options: **Floating/Fixed Tips** with GIF, Video, Code Highlight (JS, CSS, Java, Shell,...) <a href="https://youtu.be/Fmc6hL4prXY" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [Validate]: **Validate Items** with many constraints/options. Show Validate Errors in Red Items or Section, Popup ... <a href="https://youtu.be/vuNOTXMknWw" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [LoadingDiv]:  **Loading Div** to be displayed during Long Operation. Many Options provided: Loading Gif, Title, Message, ElapsedSec... <a href="https://youtu.be/0XinCNtTl1c" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [Google Analytics]:  JSU API to build in few minutes a **User Friendly List of Links to Google Analytics**  <a href="https://youtu.be/XKwPot0aDWk" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [JSLog]: **Log** from JS Code into an optional Window: log Text, Object, JSON, Time Elapsed ... <a href="https://youtu.be/nmonU5wnJjI" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [SortTable]:  **Sort HTML Table** by clicking column header <a href="https://youtu.be/cLfEFYIhFDc" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  - [IE Popup]: **HTML Modal Popup** designed only for **IE** (the feature is based on *IE ShowModalDialog API*). This feature can be useful if you need **Blocking Code implementation** (like alert) and if only IE is the browser required. 
   In other browser (Firefox, Chrome,...) **IE Popup API** will simply dispaly the messages in Alert instead of an HTML Popup.  <a href="https://youtu.be/yDTPt1sGOOc" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
  
## 1.2) JSU jquery Features
``jquery Popup (required: jquery, jquery-ui)``  
JSU JQUERY Features are not *Pure JS plugin* like previous one, but they require **jquery and jquery-ui** (provided in the JSU.ZIP):
  - [jquery Popup]: **HTML Modal Popup API working in all Browser** - Popup Buttons (YES, NO,..) use **callback implementation**  <a href="https://youtu.be/yerZchQnP7c" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  

  
## 1.3) JSU Popup Plugin Choice
``Choice between [IE Popup] (PURE JS) or [jquery Popup] (required: jquery, jquery-ui)``  
Id you want to use **JSU Popup API**, the generic solution of [jquery Popup] is recommended for Cross Browser compatibility. 
However in some cases you could prefer [IE Popup] features:
  - If only IE Browser is required or if your JS code is based on CODE Blocking and you want to replace your existing alert with Popup
  - If you do not want to load jquery and jquery-ui  
Whatever is your choice (IE Popup or jquery Popup), we underline that you can easily switch from one choice to the other: you simply have to  change one line in JSU configuration (see <a href="#4-jsu-configuration">4) JSU CONFIGURATION</a>). You do not need changing your  **API Popup** calls because they have exactly the same interface   
(See [IE Popup API] and [jquery Popup API] )
  


# 2) JSU Samples, Videos, Documentation
----

JSU CONTENT        | LINK
---------------|-----------
**SAMPLES**    | [Main JSU Samples]
**DOC**        | [JSU Documentation]
**API DOC**    | [JSU API Documentation]
**CSS DOC**    | [JSU CSS Documentation]

  - All previous links are connected each other: from one link you can reach the others.
  - Each Feature has its specific sample with the detailed explanation of the JS API calls; in the FREE Version some samples can be reached only by by the [Main JSU Samples]
  - Each Feature has also its specific Documentation, API Documentation and Demo Video:
  
Sample              |Feature Documentation |   API Documentation    | VIDEO of the FEATURE
--------------------|---------------|-------------------------------|---------------------
[Tooltip Sample]    | [Tooltip]    |  [Tooltip API] |  <a href="https://youtu.be/Fmc6hL4prXY" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[Validate Sample]  | [Validate]    |  [Validate API] |  <a href="https://youtu.be/vuNOTXMknWw" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[LoadingDiv Sample]  | [LoadingDiv]    |  [LoadingDiv API] |  <a href="https://youtu.be/0XinCNtTl1c" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[Google Analytics Sample]  | [Google Analytics]    |  [Google Analytics API] |  <a href="https://youtu.be/XKwPot0aDWk" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[JSLog Sample]  |[JSlog]    |  [JSlog API] |  <a href="https://youtu.be/nmonU5wnJjI" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[SortTable Sample] |  [SortTable]  | [SortTable API] |  <a href="https://youtu.be/cLfEFYIhFDc" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[IE Popup Sample] | [IE Popup] | [IE Popup API] |  <a href="https://youtu.be/yDTPt1sGOOc" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  
[jquery Popup Sample]  | [jquery Popup]    |  [jquery Popup API] |  <a href="https://youtu.be/yerZchQnP7c" target="_blank"> <img src="https://rawgit.com/FedericoLevis/images/master/jsuAbout/PlayVideo.png" alt="Click to See the Video" width="100" height="20" border="2" /></a>  

Each of the previous link can be reached by the [Main JSU Samples] or by the specific samples 

  
# 3) Download and Installation
----
You have 2 [JSU Download Options]: 
  - **JSU minified version** 
  - **JSU Development version** with Source plenty of comments and with Samples
After downloading JSU.zip, unzip it and everything is ready to be used. With **JSU Development version** you can immediately try the JSU sample in your unzipped *jsu/samples* directory


 
# 4) JSU CONFIGURATION
----

You can choose between 2 options:

## 4.1) JSU CONFIGURATION: require.js
``OPTION A) LOAD ALL JSU JS with require.js``
Previous samples loads all JSU CORE features together with require.js using following 2 pre-defined data-main files:
  - **pluging/jsu.js**  for only JSU CORE  Features (no Plugin required)
  - **pluging/jsu-jq.js**  for ALL JSU Features (jquery.js and jquery-ui.js are loaded) 

 
```javascript
<link rel="stylesheet" href="https://rawgit.com/FedericoLevis/JSU/master/core/jsu.css" type="text/css">
<script data-main="https://rawgit.com/FedericoLevis/JSU/master/plugin/jsu.js" src="https://rawgit.com/FedericoLevis/JSU/master/core/require.js"></script>
``` 
*Load all JSU CORE Features from GitHub Repository *
 
  
```javascript
<link rel="stylesheet" href="../../core/jsu.css" type="text/css">
<script  data-main="../../plugin/jsu.js" src="../../core/require.js"></script>
``` 
*Alternative way to Load JSU CORE from a JSU sample, if downloaded locally *








You can **easily modify jsu.js or jsu-jq.js** to automatically modify the language and the jsuVersion (**minified or commented**) of all JSU files loaded

```javascript
...
// decomment only jsuVersion the version that you want to use
var jsuVersion ="";       // JSU with Comment 
// var jsuVersion = "/Minify"      // JSU Minified
requirejs.config({
    baseUrl: JSU_PATH_BASE,
	// Path relative to baseUrl
    paths: {
        'core': 'core' + jsuVersion,
        'lan': 'locale/EN',
//      'lan': 'locale/ITA',     // For Italian Language
...
``` 
*jsu.js with English language*

For example see [JSU Tooltip Loading with require.js jsu.js - TipSample.html]

## 4.2) JSU CONFIGURATION: include each JS FILE
``OPTION B) Manually list the js to load``
If you prefer you can manually load the required JSU css and js. 

```javascript
  <!--  JSU -->
  <link rel="stylesheet" href="../../core/jsu.css" type="text/css">
  <script type="text/javascript" src="../../core/tooltip.js" ></script>
  <script type="text/javascript" src="../../locale/EN/locale-core.js" ></script>
``` 

For example see [JSU Tooltip Loading with file List - TipSimple.html]

  
# 5) JSU Version
----

JSU v 1.10 
Last Update: 2018-Jan-14


# 6) License
----

MIT


----

![JSUDancing]  | [Try JSU Samples]
---------------|-----------

   [JSU Documentation]: <https://goo.gl/JzIXW0>
   [Federico Levis]: <https://goo.gl/J9mJfh> 
   [Try JSU Samples]: <https://goo.gl/MoY5nK>
   [Main JSU Samples]: <https://goo.gl/MoY5nK>
   [Tooltip Sample]: <https://goo.gl/1e6ju7>  
   [Google Analytics Sample]: <http://goo.gl/UzfnFK>  
   [SortTable Sample]: <https://goo.gl/hJm8vV>  
   [LoadingDiv Sample]: <https://goo.gl/jttCME>  
   [JSLog Sample]: <https://goo.gl/aAtyxG>  
   [IE Popup Sample]: <https://goo.gl/u2zTRz>  
   [Validate Sample]: <https://goo.gl/SboNsD>  
   [jquery Popup Sample]: <https://goo.gl/aAtyxG>  
     
   [JSU API Documentation]: <https://goo.gl/0PGnZl>
   [JSU CSS Documentation]: <https://rawgit.com/FedericoLevis/JSUDoc/master/CSSDoc/index.html>
   
   [about]: <https://rawgit.com/FedericoLevis/images/master/jsuAbout/jsuAboutTitle.png>
   [JSUDancing]: <https://rawgit.com/FedericoLevis/images/master/jsuAbout/JSUDancing.gif>

   [Tooltip]: <https://goo.gl/AGKlpQ>
   [Validate]: <https://goo.gl/M7LT4v>
   [Google Analytics]: <http://goo.gl/UYJ5Zv>
   [jquery Popup]: <https://goo.gl/iPqUqL>  
   [SortTable]: <https://goo.gl/aKR7b2>
   [LoadingDiv]: <https://goo.gl/0tIOIJ>
   [JSLog]: <https://goo.gl/Iobg3a>
   [IE Popup]: <https://goo.gl/ZJBCrl>

   [Tooltip API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/tooltip.js/index.html>
   [Google Analytics API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/HTML/googleAnal.js/index.html>
   [Validate API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cValidate.js/index.html>
   [SortTable API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/cSortTable.js/index.html>
   [LoadingDiv API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/loadingDiv.js/index.html>
   [JSLog API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/jslog.js/index.html>
   [IE Popup API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/IEPopup.js/index.html>
   [jquery Popup API]: <https://rawgit.com/FedericoLevis/JSUDoc/master/JSPopup.js/index.html>  
   [JSU Tooltip Loading with require.js jsu.js - TipSample.html]: <https://github.com/FedericoLevis/JSU/blob/master/samples/Tip/TipSample.html>
   [JSU Tooltip Loading with file List - TipSimple.html]: <https://github.com/FedericoLevis/JSU/blob/master/samples/Tip/TipSimple.html>
   [jsu.css]: <https://rawgit.com/FedericoLevis/JSUDoc/master/CSSDoc/index.html>
   [JSU Web Site]: <http://federicolevis.wixsite.com/jsutility>
   [JSU Download Options]: <https://goo.gl/HnNqnM> 