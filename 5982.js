(function(){try{var f=document.createElement("script");f.type="text/javascript";f.async=!0;f.src="//cdn12.lemnisk.co/smt/smthandler.php?account_id=VIZVRM5982";var h=document.createElement("script");h.type="text/javascript";h.async=!0;h.src="//cdn25.lemnisk.co/ssp/IN_ACKO_DMP/sw/sw_registration.js";var g=document.createElement("script");g.type="text/javascript";g.async=!0;g.src="//cdn25.lemnisk.co/ssp/banners/images/common/images/bfsi/ads/ads.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(f,e);e.parentNode.insertBefore(h,e);e.parentNode.insertBefore(g,e);f.onload=function(){try{pixel.parse()}catch(a){}};f.onreadystatechange=function(){if("complete"==f.readyState||"loaded"==f.readyState){try{pixel.parse()}catch(a){}}}}catch(h){}})();(function(b){var a={};a.bpconf=[{cid:"5982",suffixImpressionId:"BNP",defaultWidth:1,defaultHeight:1,iframeUrl:"",locatorDivId:"bp_5982_DmpSlotId64",isDefault:false,customXhttp:null,abl:"//cdn25.vzeesp.com/ssp/IN_ACKO_DMP/bp/fallback_B_64.html",dl:"//cdn25.lemnisk.co/ssp/IN_ACKO_DMP/bp/fallback_64.html",iid:null,divId:"bp_ifrm",iframeId:"bp_iframe",domain:"//mu-ax-n.lemnisk.co/bp",slotId:"64",defaultRenderTimeout:3000,resizeTimer:null,resizeTimeout:50},{cid:"5982",suffixImpressionId:"BNP",defaultWidth:1,defaultHeight:1,iframeUrl:"",locatorDivId:"bp_5982_DmpSlotId65",isDefault:false,customXhttp:null,abl:"//cdn25.vzeesp.com/ssp/IN_ACKO_DMP/bp/fallback_B_65.html",dl:"//cdn25.lemnisk.co/ssp/IN_ACKO_DMP/bp/fallback_65.html",iid:null,divId:"bp_ifrm",iframeId:"bp_iframe",domain:"//mu-ax-n.lemnisk.co/bp",slotId:"65",defaultRenderTimeout:3000,resizeTimer:null,resizeTimeout:50},{cid:"5982",suffixImpressionId:"BNP",defaultWidth:1,defaultHeight:1,iframeUrl:"",locatorDivId:"bp_5982_DmpSlotId66",isDefault:false,customXhttp:null,abl:"//cdn25.vzeesp.com/ssp/IN_ACKO_DMP/bp/fallback_B_66.html",dl:"//cdn25.lemnisk.co/ssp/IN_ACKO_DMP/bp/fallback_66.html",iid:null,divId:"bp_ifrm",iframeId:"bp_iframe",domain:"//mu-ax-n.lemnisk.co/bp",slotId:"66",defaultRenderTimeout:3000,resizeTimer:null,resizeTimeout:50}];a.globalConfig={suffixImpressionId:"BNP",activeBp:[],missingDivs:[],intervalId:null};a.getiid=function(d){var h,c,g,f;var e=function(k,j){var i=parseInt(new Date().getTime(),16);while(k.length<j){k=k+((Math.floor(Math.random()*i)).toString(16))}k=k.slice(k.length-j);return k};h=parseInt(new Date().getTime()/1000,10).toString(16);c=parseInt(new Date().getTime()/1000,16);g=(Math.floor(Math.random()*c)).toString(16);h=e(h,8);g=e(g,15);f=a.bpconf[d].cid+h+g+a.globalConfig.suffixImpressionId;return f};a.attachWindowEventListeners=function(){var d=[{event:"resize",handler:a.handleOnResizeEvent},{event:"orientationchange",handler:a.handleOnResizeEvent}];for(var c=0;c<d.length;c++){b.addEventListener(d[c].event,d[c].handler,false)}};a.handleOnResizeEvent=function(){a.globalConfig.activeBp.forEach(function(c,f){var e=a.bpconf[c];var d,g=document.getElementById(e.iframeId);if(g&&g.contentWindow&&g.contentWindow.displayItems&&g.contentWindow.displayItems.getIframeDimensions){d=g.contentWindow.displayItems.getIframeDimensions(document.body.clientWidth);g.setAttribute("width",d.width);g.setAttribute("height",d.height)}else{e.resizeTimer=setTimeout(function(){a.handleOnResizeEvent()},e.resizeTimeout)}})};a.firstPartyCookie=function(g){var c,f;if(!g){return""}c=document.cookie;f=c.split(";");for(var e in f){if(f.hasOwnProperty(e)){var d=f[e].match(/\s*(.*)=(.*)/);if(d){if(d[1]===g&&d[2]){return d[2]}}}}return""};a.constructIframeUrl=function(d){var c=a.bpconf[d];c.isDefault=false;c.iframeUrl=c.domain+"?sid="+c.slotId+"&force_adv_id=VIZVRM"+c.cid+"&rid="+c.iid+"&sfpc="+a.firstPartyCookie("_vz")+"&loc="+encodeURIComponent(b.location)+"&rfr="+encodeURIComponent(document.referrer)+a.isFirstTime()+a.getUTMparams();return};a.isFirstTime=function(){return a.firstPartyCookie("_vz")?"":"&ftu=1"};a.getUTMparams=function(){var d=new RegExp("(?:\\?|&)(utm_[^=]+)=(.*?)(?=&|$)","gi");var e={},c;while((c=d.exec(document.URL))!=null){e[c[1]]=c[2]}if(Object.keys(e).length>0){return"&data="+encodeURIComponent(JSON.stringify(e))}else{return""}};a.renderIframeContainer=function(d){var f,e;var c=a.bpconf[d];f=document.createElement("div");f.setAttribute("id",c.divId);f.setAttribute("overflow","hidden");f.setAttribute("lineHeight",0);f.setAttribute("margin",0);f.setAttribute("padding",0);e=document.getElementById(c.locatorDivId);if(e==null){return null}e.appendChild(f);return f};a.renderIframe=function(e,d){var f,g;var c=a.bpconf[d];f=document.getElementById(c.iframeId);if(!f){f=document.createElement("iframe");f.setAttribute("id",c.iframeId);f.setAttribute("width",c.defaultWidth);f.setAttribute("height",c.defaultHeight);f.setAttribute("scrolling","no");f.setAttribute("marginwidth","0");f.setAttribute("marginheight","0");f.setAttribute("frameborder","0");f.setAttribute("style","display:block;");g=document.getElementById(c.divId);if(g!=null){g.appendChild(f)}}f.contentWindow.document.write(e.responseText);f.contentWindow.document.close();c.resizeTimer=setTimeout(function(){a.handleOnResizeEvent()},c.resizeTimeout)};a.renderBanner=function(d){var c=a.bpconf[d];c.iid=a.getiid(d);c.divId+=c.iid;c.iframeId+=c.iid;a.constructIframeUrl(d);a.renderIframeContainer(d);var e=c.iframeUrl;c.customXhttp=a.ajaxRequest(e,false,d)};a.customBanner=function(c){a.renderIframe(a.bpconf[c].customXhttp,c)};a.defaultBanner=function(e){var d=a.bpconf[e];if(!document.getElementById(d.iframeId)){if(!d.isDefault){d.isDefault=true;var c=a.isAdBlockEnabled();var f=location.protocol+(a.isAdBlockEnabled()?d.abl:d.dl);d.customXhttp=a.ajaxRequest(f,true,e)}}};a.isAdBlockEnabled=function(){return !document.getElementById("tSrngBEkWlDy")};a.checkIfBpPresent=function(){a.bpconf.forEach(function(d,c){var e=document.getElementById(d.locatorDivId);if(e){a.globalConfig.activeBp.push(c);a.renderBanner(c)}else{a.globalConfig.missingDivs.push(c)}});b.addEventListener("load",a.handleMissingDivs);a.globalConfig.intervalId=setInterval(a.handleMissingDivs,500);a.attachWindowEventListeners();setTimeout(function(){clearInterval(a.globalConfig.intervalId)},5000)};a.handleMissingDivs=function(){var e=[];var c=a.globalConfig.missingDivs;c.forEach(function(f,g){var h=document.getElementById(a.bpconf[f].locatorDivId);if(h){e.push(g);a.globalConfig.activeBp.push(f);a.renderBanner(f)}});if(e.length>0){for(var d=e.length-1;d>=0;d--){a.globalConfig.missingDivs.splice(e[d],1)}}};a.onloadCheckBp=function(){a.handleMissingDivs()};a.ajaxRequest=function(d,g,c){var i;if(b.XDomainRequest){i=new XDomainRequest();if(i){i.onerror=function(){a.defaultBanner(c)};i.ontimeout=function(){a.defaultBanner(c)};i.onload=function(){a.customBanner(c)};i.timeout=a.bpconf[c].defaultRenderTimeout;i.open("get",d);i.send()}else{if(!g){a.defaultBanner(c)}}}else{i=new XMLHttpRequest();try{if(!g){i.withCredentials=true}}catch(h){}i.onreadystatechange=function(){if(i.readyState==4){if(i.status==200&&this.responseText){clearTimeout(f);a.customBanner(c)}else{if(!g){a.defaultBanner(c)}}}};var f=setTimeout(function(){if(!g){a.defaultBanner(c)}},a.bpconf[c].defaultRenderTimeout);i.open("GET",d,true);i.send()}return i};a.checkIfBpPresent()})(window);