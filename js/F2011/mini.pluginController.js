/*
Developed By Alfred Kam, alfredkam.com
Last Updated: Nov 2011
Version: 0.0.5
Supervisor: Jerome Waldisphul
About: This is a plugin controller for phylo
CopyRight MCB, Alfred Kam
*/
(function(){function a(){this.type=["init","menu","gameStart","gameMenu","onMoveStart","onMoveStop","gameEnd"];this.tracker=[];this.stage="";this.gameSetting="";this.win="";this.checkDevice=common.checkDevice;this.addScript=function(a){var b=document;var c=b.createElement("script");c.src=a;c.type="text/javascript";b.body.appendChild(c)};this.addCSS=function(a){var b=document;var c=b.createElement("script");c.href=a;c.rel="stylesheet";b.body.appendChild(c)};this.body={html:function(a){$("#sandbox").html("<div class='phylo-body'>"+a+"</div>")},append:function(a){$(".phylo-body").append(a)}};this.deviceType=common.checkDevice();if(this.deviceType=="other")this.deviceType="desktop";else if(this.deviceType=="ipad")this.deviceType="tablet";else this.deviceType="mobile"}var b=function(){var a=this;this.name=[];this.returnName=function(){return this.name};this.arr=[];this.add=function(b,c){a.arr.push(c);a.name.push(b)};this.runOnce=function(b){var c=this.name.indexOf(b);try{a.arr[c].run()}catch(d){console.log("Error > Executing Plugin "+a.name[c])}};this.run=function(){for(var b=0;b<a.arr.length;b++)try{a.arr[b].run()}catch(c){console.log("Error > Executing Plugin "+a.name[b])}}};a.prototype.pre=function(){var a=this.tracker;var c=this.type,d=this.fn;var e=c.length;var f=common.checkDevice();if(f=="other")f="desktop";else if(f=="ipad")f="tablet";else f="mobile";while(e--){a.push(new b)}for(var g in d){try{var h=d[g].type.toString();var i=d[g].device.toString();if(i.search(f)<0){continue}h=h.split(",");for(name in h){var j=$.trim(h[name]);var k=c.indexOf(j);if(k>-1){a[k].add(g,d[g])}else{console.log("Error > Plugin "+g+" thrown type '"+j+"' not exist")}}}catch(l){console.log("Error > Dealing with plugin "+g+"\n Please check device and type are defined")}}};a.prototype.run=function(a){try{if(a=="pre-menu"){var b=this.tracker[this.type.indexOf("menu")].returnName();var c="",d="";if(b.length==0)return;for(d in b){c=b[d].substr(0,1).toUpperCase()+b[d].substr(1);window.setHref.push([c,b[d]])}}else if(a=="post-menu"){var c="";var e=this.type.indexOf("menu");var b=this.tracker[e].returnName();var f=this;if(b.length==0)return;for(c in b){$("#"+b[c]).click(function(){f.tracker[e].runOnce(b[c])})}}else if(a=="gameMenu"){var b=this.tracker[this.type.indexOf("gameMenu")].returnName();if(b.length==0)return;var g=this.tracker[this.type.indexOf("gameMenu")].arr;for(item in b){var c=g[item].name.toString().split(",");for(var d=0;d<c.length;d++)c[d]=$.trim(c[d]);c.push(g[item].run);window.gameMenuArray.push(c)}}else this.tracker[this.type.indexOf(a)].run()}catch(h){console.log("Plugin Controller Error @"+a+" > "+h)}};a.prototype.fn={};a.prototype.setgs=function(a){this.gameSetting=a};a.prototype.setStage=function(a){this.stage=a};a.prototype.setWinLoose=function(a){this.win=a};a.prototype.href=function(a,b){var c="";for(var d=0;d<a.length;d++){c+="<a ";if(b.className!=null)c+="class='"+b.className+"' ";c+="href='#' id='"+a[d][1]+"'>"+a[d][0]+"</a>"}return c};a.prototype.hash=function(){return window.location.hash};a.prototype.requestPage=function(a,b){if(a=="play"^a=="home"){return}var c="../content/"+this.GET("lang")+"/"+a+".html";var d=this;d.fetchedPage[a]="";$.post(c,function(c){d.fetchedPage[a]=c;if(b.last==true){b.start()}}).error(function(){d.fetchedPage[a]="<span style='font-size:2em;color:red;'>Oops!</span><br>This page does not exist yet, please check again later!<br>If you create this page, please add content/&#60;language&#62;/"+a+".html";if(b.last==true){b.start()}})};a.prototype.loadingOffSet=false;a.prototype.changePage=function(a){a=a.replace(/#/,"").toLowerCase();this.page=a;console.log(a);if(common.checkDevice()!="other"&&common.checkDevice()!="ipad")if(a.search(/play/)>-1){if(gameID.check())return}if(a=="play"^a=="home"){$("#sandbox").html("");var b=document,c=window;animate.sleep();try{$("#footer").show()}catch(d){console.log("Error > footer went missing weee...")}}else if(a=="menu"){try{$("#footer").show()}catch(d){console.log("Error > footer went missing weee...")}}else{$("#sandbox").css({left:"",position:""});$("#sandbox").html("<div class='phylo-body'><div class='phylo-content'></div></div>");if(this.fetchedPage[a]==""){loading.install();this.loadingOffSet=true;window.setTimeout(function(){mcb.changePage(a)},100);return}if(this.loadingOffSet==true){loading.uninstall();this.loadingOffSet=false}if(this.fetchedPage[a]==undefined){if(common.checkDevice()=="other"^common.checkDevice()=="ipad")$(".phylo-content").html("<span style='font-size:2em;color:red;'>Oops!</span><br>This page does not exist!<br>Are trying to look up something??? But we forgive you for helping us compute alignments")}else $(".phylo-content").html(this.fetchedPage[a]);footer.adjust(a)}};a.prototype.GET=function(a){var b={};document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g,function(){function a(a){return decodeURIComponent(a.split("+").join(" "))}b[a(arguments[1])]=a(arguments[2])});return b[a]};a.prototype.cookie={create:function(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+c*24*60*60*1e3);var e="; expires="+d.toGMTString()}else var e="";document.cookie=a+"="+b+e+"; path=/"},read:function(a){var b=a+"=";var c=document.cookie.split(";");for(var d=0;d<c.length;d++){var e=c[d];while(e.charAt(0)==" ")e=e.substring(1,e.length);if(e.indexOf(b)==0)return e.substring(b.length,e.length)}return null},erase:function(a){mcb.cookie.create(a,"",-1)}};a.prototype.ext={};a.prototype.data=function(a){$.post("../s/index.php",{ip:window.ip,page:window.location.hash.replace(/#/,""),lang:mcb.GET("lang"),code:a})};a.prototype.history=function(){var a=this;window.onhashchange=function(){mcb.data("0");setTimeout(function(){var b=window.location.hash;if(b.search(a.page)<1){if(b.search(/play/)>-1)mcb.changePage("play");else mcb.changePage(b)}},0)};window.onbeforeunload=function(){mcb.data("1")}};a.prototype.progressBar=function(){var a=this;var b=document,c=window;var d="<div class='meter-wrap'><div class='meter-value' style='background-color: #0a0; width: 0%;'><div class='meter-text'>loading...</div></div></div>";this.fetchedPage=new Array;var e=b.createElement("div");e.id="progress";b.body.appendChild(e);$("#progress").html(d)};a.prototype.addProgress=function(a){var b=$(".meter-text").html();if(b=="loading..."){$(".meter-value").css("width",a+"%");$(".meter-text").html(a+"%")}else{b=parseInt(b.replace(/%/,""));$(".meter-value").css("width",b+a+"%");$(".meter-text").html(b+a+"%")}};a.prototype.killProgress=function(){$("#progress").hide()};a.prototype.preFetch=function(a,b){loading.install();var c=100/a.length;this.fetchedPage=new Array;for(var d=0;d<a.length;d++){if(d==a.length-1){this.requestPage(a[d][1],{last:true,start:b.start})}else{this.requestPage(a[d][1],{last:false})}}loading.uninstall()};a.prototype.body={html:function(a){if(a==undefined){return $("#sandbox").html()}else{$("#sandbox").html(a)}},append:function(a){if(a==undefined){console.log("Error > value for body append is undefined")}else $("#sandbox").append(a)}};var c=a.prototype,d=[["fn",c.fn],["init",c.pre],["run",c.run],["setgs",c.setgs],["setStage",c.setStage],["setWinLoose",c.setWinLoose],["href",c.href],["hash",c.hash],["requestPage",c.requestPage],["GET",c.GET],["cookie",c.cookie],["ext",c.ext],["history",c.history],["changePage",c.changePage],["data",c.data],["progressBar",c.progressBar],["addProgress",c.addProgress],["killProgress",c.killProgress],["preFetch",c.preFetch]];common.exportSingleton("mcb",a,d)})()
