(function(e){function t(t){for(var o,i,a=t[0],s=t[1],l=t[2],d=0,b=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function i(e){return a.p+"js/"+({Dev:"Dev",Help:"Help",PatchNote:"PatchNote"}[e]||e)+"."+{Dev:"8057163e",Help:"93ff1e6c",PatchNote:"fe292886"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=i(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0bde":function(e,t,n){"use strict";var o=n("6fb1"),r=n.n(o);n.d(t,"default",(function(){return r.a}))},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=Object(o["g"])("head",null,[Object(o["g"])("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0","user-scaleable":"yes"})],-1);function c(e,t,n,c,i,a){var s=Object(o["t"])("Header"),l=Object(o["t"])("router-view"),d=Object(o["t"])("Footer");return Object(o["p"])(),Object(o["d"])(o["a"],null,[r,Object(o["g"])(s),Object(o["g"])(l),Object(o["g"])(d)],64)}var i=Object(o["g"])("div",{class:"navbar2"},null,-1),a={class:"navbar1"},s={class:"logo1"},l=Object(o["g"])("img",{class:"logo3",src:"img/logo.svg"},null,-1),d={class:"menu"},u=Object(o["f"])("메인"),b=Object(o["f"])("패치 노트"),f=Object(o["f"])("도움말"),g=Object(o["g"])("a",{href:"https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot",target:"_blank"},"봇 초대",-1),h=Object(o["f"])("개발자"),v=Object(o["e"])('<div class="RightMenu"><a id="darkBtn"><img src="img/light_mode.svg"></a><a id="lightBtn"><img src="img/dark_mode.svg"></a><div class="burger"><div></div><div></div><div></div></div></div>',1),p={class:"mobMenu"},j={class:"mobMenuInner"},O={class:"mobMenuLinks"},m=Object(o["f"])("메인"),y=Object(o["g"])("hr",null,null,-1),_=Object(o["f"])("패치 노트"),x=Object(o["g"])("hr",null,null,-1),w=Object(o["f"])("도움말"),k=Object(o["g"])("hr",null,null,-1),S=Object(o["g"])("a",{href:"https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot",target:"_blank"},"봇 초대",-1),M=Object(o["g"])("hr",null,null,-1),P=Object(o["f"])("개발자");function C(e,t,n,r,c,C){var H=Object(o["t"])("router-link");return Object(o["p"])(),Object(o["d"])(o["a"],null,[i,Object(o["g"])("header",null,[Object(o["g"])("div",a,[Object(o["g"])("div",s,[Object(o["g"])(H,{to:"/",class:"logo2"},{default:Object(o["x"])((function(){return[l]})),_:1})]),Object(o["g"])("div",d,[Object(o["g"])(H,{to:"/"},{default:Object(o["x"])((function(){return[u]})),_:1}),Object(o["g"])(H,{to:"/path_note"},{default:Object(o["x"])((function(){return[b]})),_:1}),Object(o["g"])(H,{to:"/help_menu"},{default:Object(o["x"])((function(){return[f]})),_:1}),g,Object(o["g"])(H,{to:"/dev"},{default:Object(o["x"])((function(){return[h]})),_:1})]),v]),Object(o["g"])("div",p,[Object(o["g"])("div",j,[Object(o["g"])("div",O,[Object(o["g"])(H,{to:"/"},{default:Object(o["x"])((function(){return[m]})),_:1}),y,Object(o["g"])(H,{to:"/path_note"},{default:Object(o["x"])((function(){return[_]})),_:1}),x,Object(o["g"])(H,{to:"/help_menu"},{default:Object(o["x"])((function(){return[w]})),_:1}),k,S,M,Object(o["g"])(H,{to:"/dev"},{default:Object(o["x"])((function(){return[P]})),_:1})])])])])],64)}var H={name:"App",mounted:function(){this.btn()},methods:{btn:function(){var e=document.querySelector(".burger"),t=document.querySelector(".mobMenu"),n=document.querySelector("header");e.addEventListener("click",(function(){e.classList.contains("burgerToggle")?(e.classList.remove("burgerToggle"),t.style.height="0px",n.style.background="#0006"):(e.classList.add("burgerToggle"),t.style.height="298px",n.style.background="#000b")}))}}};H.render=C;var N=H,T={class:"footer3"},A={class:"footer1"},E=Object(o["g"])("div",{class:"footAbout"},[Object(o["g"])("img",{class:"logo4",src:"img/logo.svg"}),Object(o["g"])("a",null,"미니게임 봇")],-1),F=Object(o["g"])("div",{id:"menu"},"메뉴",-1),L={class:"footMenu"},z=Object(o["f"])("메인"),B=Object(o["f"])("패치노트"),q=Object(o["f"])("도움말"),D=Object(o["g"])("a",{href:"https://discord.com/oauth2/authorize?client_id=856090100458979379&permissions=8&scope=bot",target:"_blank"},"봇 초대",-1),I=Object(o["f"])("개발자"),R=Object(o["e"])('<div class="footer1"><div class="copyright">Copyright ⓒ 2021 by HCT</div><div id="other">등등</div><div class="other"><a href="https://github.com/Happy-Coding-Team">깃허브</a><a href="https://discord.gg/rRRwEYy8w8">디스코드</a><a href="https://happycoding.team/">팀사이트</a></div></div>',1),G=Object(o["g"])("div",{id:"copyright"},"Copyright ⓒ 2021 by HCT",-1);function J(e,t){var n=Object(o["t"])("router-link");return Object(o["p"])(),Object(o["d"])("footer",null,[Object(o["g"])("div",T,[Object(o["g"])("div",A,[E,F,Object(o["g"])("div",L,[Object(o["g"])(n,{to:"/"},{default:Object(o["x"])((function(){return[z]})),_:1}),Object(o["g"])(n,{to:"/path_note"},{default:Object(o["x"])((function(){return[B]})),_:1}),Object(o["g"])(n,{to:"/help_menu"},{default:Object(o["x"])((function(){return[q]})),_:1}),D,Object(o["g"])(n,{to:"/dev"},{default:Object(o["x"])((function(){return[I]})),_:1})])]),R]),G])}const W={};W.render=J;var X=W,Y={href:"#",class:"btn_gotop"},K=Object(o["g"])("span",{class:"glyphicon glyphicon-chevron-up"},null,-1);function Q(e,t){return Object(o["p"])(),Object(o["d"])("a",Y,[K])}const U={};U.render=Q;var V=U,Z={components:{Header:N,Footer:X,TopButton:V},mounted:function(){$("#darkBtn").on("click",(function(){ChangeFun()})),$("#lightBtn").on("click",(function(){ChangeFun()}))}};Z.render=c;var ee=Z,te=n("9483");Object(te["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var ne=n("6c02"),oe={class:"home"},re=Object(o["e"])('<div class="section" id="banner1"><div class="banner_inner"><div class="left_content"><div><h1>환영합니다!</h1></div><div class="banner_content"><a class="typing">MG봇으로 디스코드 서버 내에서<br>재미있고 다양한 미니게임을 즐겨보세요.</a></div><div class="buttons"><a class="button" href="https://discord.com/oauth2/authorize?client_id=856090100458979379&amp;permissions=8&amp;scope=bot">봇 초대하기</a><a class="button" href="https://discord.gg/uWAnfpXbhd">서포트서버</a></div></div><div class="banner_background"><video autoplay muted loop><source src="video/banner1.mp4" type="video/mp4"></video></div></div></div><div class="section" id="banner2"><div class="banner_inner"><div class="minigame_title"><h1>미니게임</h1><a>다양하고 재미있는 미니게임을 제공합니다.</a></div><div class="minigames"><div><h3>제작중입니다</h3><a></a></div><div><h3>제작중입니다</h3><a></a></div><div><h3>제작중입니다</h3><a></a></div><div><h3>제작중입니다</h3><a></a></div><div><h3>제작중입니다</h3><a></a></div><div><h3>제작중입니다</h3><a></a></div></div></div></div><div class="section" id="banner3"><div class="banner_inner"><div><h1>MG봇을 사용중인 서버 수</h1><a class="roll drag_none" id="roll_1"></a></div><div><h1>다양한 미니게임을 즐기기 위해<br>봇을 초대해보세요.</h1><a class="button" href="https://discord.com/oauth2/authorize?client_id=856090100458979379&amp;permissions=8&amp;scope=bot">봇 초대하기</a></div><div><h1>오류가 발생하거나 건의사항 문의시,<br>서포트서버에서 연락주시기 바랍니다.</h1><a class="button" href="">서포트서버</a></div></div></div>',3);function ce(e,t,n,r,c,i){return Object(o["p"])(),Object(o["d"])("div",oe,[re])}n("ac1f"),n("5319"),n("25f0"),n("1276");var ie=["0","1","2","3","4","5","6","7","8","9"];function ae(e,t){var n=document.getElementById("roll_"+e),o=n.childElementCount,r=parseInt(getComputedStyle(n).fontSize.replace("px",""));if(t.toString().length>o)for(var c=0;c<t.toString().length-o;c++){for(var i="<div class='number' style='bottom:0px'>",a=0;a<ie.length;a++)i+="<a style='height:1em'>"+ie[a]+"</a>";i+="</div>",n.innerHTML+=i}n.style.height="1em",n.style.width=n.childNodes[e-1].clientWidth*t.toString().length+"px";for(var s=0;s<t.toString().length;s++){var l=ie.indexOf(t.toString().split("")[s]);n.childNodes[s].style="bottom:"+(r*l+4)+"px"}}var se={name:"App",mounted:function(){this.get_bot_invited(),ae(1,"12345")},methods:{get_bot_invited:function(){}}};se.render=ce;var le=se,de=n("9703"),ue=[{path:"/",name:"Home",component:le},{path:"/path_note",name:"PatchNote",component:function(){return n.e("PatchNote").then(n.bind(null,"5614"))}},{path:"/help_menu",name:"Help",component:function(){return n.e("Help").then(n.bind(null,"c3ef"))}},{path:"/dev",name:"Dev",component:function(){return n.e("Dev").then(n.bind(null,"4409"))}},{path:"/:pathMatch(.*)*",name:"NotFound",component:de["default"]}],be=Object(ne["a"])({history:Object(ne["b"])("/"),routes:ue}),fe=be;Object(o["c"])(ee).use(fe).mount("#app")},"6fb1":function(e,t){},9703:function(e,t,n){"use strict";var o=n("df93"),r=n("0bde");r["default"].render=o["a"],t["default"]=r["default"]},df93:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("7a23"),r={class:"home"},c=Object(o["g"])("div",{class:"banner",id:"banner1"},[Object(o["g"])("h1",{style:{"font-size":"55px"}},"404 Not Found"),Object(o["g"])("div",null,[Object(o["g"])("a",{class:"typing",style:{"text-align":"center"}},[Object(o["f"])("요청하신 페이지를 찾을 수 없습니다."),Object(o["g"])("br"),Object(o["g"])("br"),Object(o["f"])(" 방문하시려는 페이지의 주소가 잘못 입력되었거나,"),Object(o["g"])("br"),Object(o["f"])(" 페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다."),Object(o["g"])("br"),Object(o["g"])("br"),Object(o["f"])(" 입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다."),Object(o["g"])("br"),Object(o["f"])(" 관련 문의사항은 "),Object(o["g"])("span",{onclick:"location.href = 'https://happycoding.team/forum';",style:{cursor:"pointer"}},"즐거운 코딩팀 포럼"),Object(o["f"])("에 알려주시면 친절하게 안내해 드리겠습니다."),Object(o["g"])("br"),Object(o["g"])("br"),Object(o["f"])(" 감사합니다. 😢")])])],-1);function i(e,t,n,i,a,s){return Object(o["p"])(),Object(o["d"])("div",r,[c])}}});
//# sourceMappingURL=app.e32260a5.js.map