(function(){function c(){}c.prototype.f=function(a,b,e){if(a.addEventListener)a.addEventListener(b,e,!1);else if(a.attachEvent)a.attachEvent("on"+b,e);else{var c=a["on"+b];a["on"+b]=function(a){var a=a?a:window.event,b=e(a);return c!=void 0&&c(a)==!0&&b==!0}}};c.prototype.i=function(a,b){a.removeEventListener&&a.removeEventListener(b,!1)};c.prototype.filter=function(a){a=a.replace(/px$/,"");return a=a.replace(/^#/,"")};c.prototype.b=function(a){return a=="faq"?"FAQ":a.charAt(0).toUpperCase()+a.slice(1)};
c.prototype.a=function(a,b,e){if(!window[a]){a=window[a]=new b;for(b=0;b<e.length;b++)a[e[b][0]]=e[b][1]}};c.prototype.d=function(a){if(document.getElementById("dump")!=null)document.getElementById("dump").innerHTML=a;else{var b=document.createElement("div");b.id="dump";document.body.appendChild(b);document.getElementById("dump").style.zIndex="100";document.getElementById("dump").style.position="absolute";document.getElementById("dump").style.right="0px";document.getElementById("dump").innerHTML=
a;document.getElementById("dump").style.border="dotted"}};c.prototype.h=function(){return"random"};c.prototype.g=function(a,b){var e=document,c=e.createElement("iframe");c.id=a;c.name=a;c.src=b;e.body.appendChild(c);document.getElementById(a).height="0";document.getElementById(a).width="0";document.getElementById(a).style.k="none"};c.prototype.c=function(){var a="miui,iphone,ipod,series60,symbian,andriod,windows ce,blackberry,palm,ipad".split(","),b=navigator.userAgent.toLowerCase();if(this.set!=
null)return this.set;if(b.search("qt")>-1)return this.set="qt";if(b.search("andriod 3.")>-1)return this.set="ipad";if(b.search("android")>-1)return this.set="android";if(b.search("iemobile")>-1)return this.set="iemobile";for(var c=0;c<a.length;c++)if(b.search("webkit")>-1&&b.search(a[c])>-1)return this.set=a[c],a[c];return this.set="other"};c.prototype.e=function(a){var b=new function(){var a=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];if(window.ActiveXObject)for(var b=0;b<a.length;b++)try{return new ActiveXObject(a[b])}catch(c){}else return window.XMLHttpRequest?
new XMLHttpRequest:!1};b.onreadystatechange=function(){};b.open("GET",a,!0);b.send(null)};var d=c.prototype;c.prototype.a("common",c,[["listen",d.f],["exportSingleton",d.a],["dump",d.d],["checkDevice",d.c],["makeFrame",d.g],["nameFrame",d.h],["filter",d.filter],["cap",d.b],["removeListen",d.i],["addExtension",d.j],["getNoReply",d.e]])})();
