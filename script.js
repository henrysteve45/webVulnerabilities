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
    else {$("#browser").append("<span class='text-danger'>Unknown browser</span>");}

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
    else {$("#browserDuck").append("<span class='text-danger'>Unknown browser</span>");}

/*Plugins installed*/
    var x = navigator.plugins.length; 
    var txt = "<br>";
    if (x == 0) {
        $("#plugins").append("<span class='text-warning'>No plugins available or your plugins are hidden.</span>");
    } else {
        for(var i=0;i<x;i++)
        {
          txt+=navigator.plugins[i].name + "<br>"; 
        }
        $("#plugins").append(txt);
    }

/*CPU info*/
    $("#cpu").append(navigator.hardwareConcurrency + " core(s)");

/*Battery info*/
try {
    navigator.getBattery().then(function(battery) {
        var level = Math.round(battery.level*100);
        $("#battery").append("Your battery percentage is: " + level + "%.");
        if (level == 100) {
            $("#battery").append("<p>Your battery is fully charged!</p>");
        } else if (level >= 75 && level <= 99) {
            $("#battery").append("<p>Your device is almost fully charged!</p>");
        } else if (level >= 30 && level < 75) {
            $("#battery").append("<p>You will need to charge your device later.</p>");
        } else if (level >= 15 && level < 30) {
            $("#battery").append("<p>You need to charge your device.</p>");
        } else {
            $("#battery").append("<p>Your battery is critically low!</p>");
        }
    })
} catch (error) {
    console.error(error);
    $("#battery").append("<p class='text-warning'>You are not using a battery or your browser does not support this feature.</p>");
}

/*IP address*/
function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  $("#ip").append(ip);
});

/*connection*/
$("#conSpeed").append(navigator.connection.downlink + " Mbits per second");
$("#conType").append(navigator.connection.effectiveType);