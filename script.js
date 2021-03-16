/*Operating System*/
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    $("#os").append("<b>Operating System: </b>" + OSName + "<br>");

/*Browser via User Agent*/
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {$("#browser").append("Opera");}
    else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        if(navigator.userAgent.indexOf("Edg") != -1) {
            $("#browser").append("Microsoft Edge");
        } else {
        $("#browser").append("Google Chrome");
        }
    }
    else if(navigator.userAgent.indexOf("Safari") != -1){$("#browser").append("Safari");}
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) {$("#browser").append("Mozilla Firefox");}
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {$("#browser").append("Microsoft Internet Explorer");}
    else {$("#browser").append("Unknown browser");}

/*Browser via ducktyping*/
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 71
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    if (isOpera == true) {$("#browserDuck").append("Opera");}
    else if (isFirefox == true) {$("#browserDuck").append("Mozilla Firefox");}
    else if (isSafari == true) {$("#browserDuck").append("Safari");}
    else if (isIE == true) {$("#browserDuck").append("Microsoft Internet Explorer");}
    else if (isEdge == true) {$("#browserDuck").append("Microsoft Edge");}
    else if (isChrome == false) {$("#browserDuck").append("Google Chrome");}
    else {$("#browserDuck").append("Unknown browser");}