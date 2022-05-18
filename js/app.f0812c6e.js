document.addEventListener("DOMContentLoaded",(function(){volantis.requestAnimationFrame((()=>{VolantisApp.init(),VolantisApp.subscribe(),VolantisFancyBox.init(),highlightKeyWords.startFromURL(),locationHash(),volantis.pjax.push((()=>{VolantisApp.pjaxReload(),VolantisFancyBox.init(),sessionStorage.setItem("domTitle",document.title),highlightKeyWords.startFromURL()}),"app.js"),volantis.pjax.send((()=>{volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js")}))}));const locationHash=()=>{if(window.location.hash){let e=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),t=document.getElementById(e);t&&setTimeout((()=>{window.location.hash.startsWith("#fn")?volantis.scroll.to(t,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant",observer:!0}):volantis.scroll.to(t,{addTop:5,behavior:"instant",observer:!0})}),1e3)}};Object.freeze(locationHash);const VolantisApp=(()=>{const e={};let t=80;e.init=()=>{volantis.dom.header&&(t=volantis.dom.header.clientHeight+16),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(e.setGlobalHeaderMenuEvent(),e.setHeader(),e.setHeaderSearch())},volantis.scroll.push(e.scrollEventCallBack,"scrollEventCallBack")},e.event=()=>{if(volantis.dom.$(document.getElementById("scroll-down")).on("click",(function(){e.scrolltoElement(volantis.dom.bodyAnchor)})),volantis.GLOBAL_CONFIG.sidebar.for_page.includes("webinfo")||volantis.GLOBAL_CONFIG.sidebar.for_post.includes("webinfo")){const t=volantis.GLOBAL_CONFIG.sidebar.webinfo.lastupd;document.getElementById("last-update-show")&&t.enable&&t.friendlyShow&&(document.getElementById("last-update-show").innerHTML=e.utilTimeAgo(volantis.GLOBAL_CONFIG.lastupdate))}if(document.getElementById("webinfo-runtime-count")){let e=new Date(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.data),t=(new Date).getTime()-e.getTime(),o=Math.floor(t/864e5);document.getElementById("webinfo-runtime-count").innerHTML=`${o} ${volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.unit}`}document.body.oncopy=function(){e.messageCopyright()}},e.restData=()=>{t=volantis.dom.header?volantis.dom.header.clientHeight+16:80},e.setIsMobile=()=>{document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},e.scrolltoElement=(e,o=t)=>{volantis.scroll.to(e,{top:e.offsetTop-o})},e.scrollEventCallBack=()=>{const e=volantis.dom.bodyAnchor.offsetTop-t,o=volantis.scroll.getScrollTop();volantis.dom.topBtn&&(o>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),volantis.scroll.del>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl")),volantis.dom.header&&(o-e>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")),pdata.ispage&&volantis.dom.wrapper&&(volantis.scroll.del>0&&o>100?volantis.dom.wrapper.addClass("sub"):volantis.scroll.del<0&&volantis.dom.wrapper.removeClass("sub")),volantis.isMobile&&(pdata.ispage&&volantis.dom.tocTarget&&volantis.dom.toc&&(volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")),volantis.dom.mPhoneList&&volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()})))},e.setScrollAnchor=()=>{volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((t=>{t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.bodyAnchor),t.stopImmediatePropagation()}))},e.setHeader=()=>{pdata.ispage&&(volantis.dom.wrapper.find(".nav-sub .title").html(document.title.split(" - ")[0]),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((t=>{t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.commentTarget),t.stopImmediatePropagation()})):volantis.dom.comment.style.display="none",volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((e=>{e.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(e){e.stopPropagation(),volantis.dom.tocTarget&&volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}))):volantis.dom.toc.style.display="none"))},e.setHeaderMenuSelection=()=>{volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((e=>{let t=volantis.dom.$(e).find("li a.active");t&&t.removeClass("active");let o=volantis.dom.$(e).find("div a.active");o&&o.removeClass("active")}));var e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var t=e.match(/page\d{0,}$/g);t&&(t=t[0],e=e.split(t)[0]);var o=e.match(/index.html/);o&&(o=o[0],e=e.split(o)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((t=>{let o=t.querySelector("[active-action=action-"+e+"]");o&&volantis.dom.$(o).addClass("active")}))},e.setGlobalHeaderMenuEvent=()=>{volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(e){e.querySelector(".list-v")&&volantis.dom.$(e).click((function(e){e.stopPropagation(),e.currentTarget.parentElement.childNodes.forEach((function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach((function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()}))}));let t=e.currentTarget.children;for(let e=0;e<t.length;e++){const o=t[e];"menu"===volantis.dom.$(o).title?volantis.dom.$(o).display="flex":volantis.dom.$(o).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(e){volantis.dom.$(e.parentElement).click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach((function(e){volantis.dom.$(e).hide()}))}),0)})),e.setPageHeaderMenuEvent()},e.setPageHeaderMenuEvent=()=>{volantis.isMobile&&volantis.dom.$(document).click((function(e){volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))}))},e.setHeaderSearch=()=>{volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(e){e.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")}),!1),volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}),!1),volantis.dom.search.click((function(e){e.stopPropagation()}),!1))},e.setTabs=()=>{let e=document.querySelectorAll("#l_main .tabs .nav-tabs");e&&e.forEach((function(e){e.querySelectorAll("a").forEach((function(e){volantis.dom.$(e).on("click",(e=>{e.preventDefault(),e.stopPropagation();const t=volantis.dom.$(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(e.target.className).addClass("active"),!1}))}))}))},e.footnotes=()=>{let e=document.querySelectorAll("#l_main .footnote-backref, #l_main .footnote-ref > a");e.forEach((function(t,o){e[o].click=()=>{},volantis.dom.$(t).on("click",(e=>{e.stopPropagation(),e.preventDefault();let t=decodeURI(e.target.hash.split("#")[1]).replace(/\ /g,"-"),o=document.getElementById(t);o&&volantis.scroll.to(o,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"})}))}))},e.utilCopyCode=t=>{document.querySelectorAll(t).forEach((t=>{t.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fa-solid fa-copy"></i><span>COPY</span></button>');const o=t.previousSibling;o.onclick=n=>{n.stopPropagation();const s=o.querySelector("i"),l=o.querySelector("span");t.focus();const a=new Range;a.selectNodeContents(t),document.getSelection().removeAllRanges(),document.getSelection().addRange(a);const i=document.getSelection().toString();e.utilWriteClipText(i).then((()=>{e.messageCopyright(),o.classList.add("copied"),s.classList.remove("fa-copy"),s.classList.add("fa-check-circle"),l.innerText="COPIED",setTimeout((()=>{s.classList.remove("fa-check-circle"),s.classList.add("fa-copy"),l.innerText="COPY"}),2e3)})).catch((e=>{VolantisApp.message("系统提示",e,{icon:"fa fa-exclamation-circle red"}),o.classList.add("copied-failed"),s.classList.remove("fa-copy"),s.classList.add("fa-exclamation-circle"),l.innerText="COPY FAILED",setTimeout((()=>{s.classList.remove("fa-exclamation-circle"),s.classList.add("fa-copy"),l.innerText="COPY"}))}))}}))},e.utilWriteClipText=e=>navigator.clipboard.writeText(e).then((()=>Promise.resolve())).catch((t=>{const o=document.createElement("input");o.setAttribute("readonly","readonly"),document.body.appendChild(o),o.setAttribute("value",e),o.select();try{let e=document.execCommand("copy");return document.body.removeChild(o),e&&"unsuccessful"!==e?Promise.resolve():Promise.reject("复制文本失败!")}catch(t){return document.body.removeChild(o),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}})),e.utilTimeAgo=e=>{const t=6e4,o=36e5,n=24*o,s=(new Date).getTime()-e,l=s/t,a=s/o,i=s/n,r=s/6048e5,c=s/2592e6;if(s<0)result="";else if(c>=1&&c<7)result=" "+parseInt(c)+" 月前";else if(r>=1&&r<4)result=" "+parseInt(r)+" 周前";else if(i>=1&&i<7)result=" "+parseInt(i)+" 天前";else if(a>=1&&a<24)result=" "+parseInt(a)+" 小时前";else if(l>=1&&l<60)result=" "+parseInt(l)+" 分钟前";else if(s>=0&&s<=t)result="刚刚";else{const t=new Date;t.setTime(e);const o=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,s=t.getDate()<10?"0"+t.getDate():t.getDate();t.getHours()<10?t.getHours():t.getHours(),t.getMinutes()<10?t.getMinutes():t.getMinutes(),t.getSeconds()<10?t.getSeconds():t.getSeconds();result=o+"-"+n+"-"+s}return result},e.message=(e,t,o={},n=null)=>{function s(e,t,o,n){const{icon:s,time:l,position:a,transitionIn:i,transitionOut:r,messageColor:c,titleColor:d,backgroundColor:m,zindex:u,displayMode:g}=o;iziToast.show({layout:"2",icon:"Fontawesome",closeOnEscape:"true",displayMode:g||"replace",transitionIn:i||volantis.GLOBAL_CONFIG.plugins.message.transitionIn,transitionOut:r||volantis.GLOBAL_CONFIG.plugins.message.transitionOut,messageColor:c||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:d||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:m||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:u||volantis.GLOBAL_CONFIG.plugins.message.zindex,icon:s||volantis.GLOBAL_CONFIG.plugins.message.icon.default,timeout:l||volantis.GLOBAL_CONFIG.plugins.message.time.default,position:a||volantis.GLOBAL_CONFIG.plugins.message.position,title:e,message:t,onClosed:()=>{n&&n()}})}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(()=>{s(e,t,o,n)}))):s(e,t,o,n)},e.question=(e,t,o={},n=null,s=null,l=null)=>{function a(e,t,o,n,s,l){const{icon:a,time:i,position:r,transitionIn:c,transitionOut:d,messageColor:m,titleColor:u,backgroundColor:g,zindex:v}=o;iziToast.question({id:"question",icon:"Fontawesome",close:!1,overlay:!0,displayMode:"once",position:"center",messageColor:m||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:u||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:g||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:v||volantis.GLOBAL_CONFIG.plugins.message.zindex,icon:a||volantis.GLOBAL_CONFIG.plugins.message.icon.quection,timeout:i||volantis.GLOBAL_CONFIG.plugins.message.time.quection,title:e,message:t,buttons:[["<button><b>是</b></button>",(e,t)=>{e.hide({transitionOut:d||"fadeOut"},t,"button"),n&&n(e,t)}],["<button><b>否</b></button>",(e,t)=>{e.hide({transitionOut:d||"fadeOut"},t,"button"),s&&s(e,t)}]],onClosed:(e,t,o)=>{l&&l(e,t,o)}})}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(()=>{a(e,t,o,n,s,l)}))):a(e,t,o,n,s,l)},e.hideMessage=(e=null)=>{const t=document.querySelector(".iziToast");function o(e){iziToast.hide({},t),e&&e()}t?"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,(()=>{o(e)}))):o(e):e&&e()};let o=0;return e.messageCopyright=()=>{volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.copyright.enable&&o<1&&(o++,VolantisApp.message(volantis.GLOBAL_CONFIG.plugins.message.copyright.title,volantis.GLOBAL_CONFIG.plugins.message.copyright.message,{icon:volantis.GLOBAL_CONFIG.plugins.message.copyright.icon,transitionIn:"flipInX",transitionOut:"flipOutX",displayMode:1}))},{init:()=>{e.init(),e.event()},subscribe:()=>{e.setIsMobile(),e.setHeader(),e.setHeaderMenuSelection(),e.setGlobalHeaderMenuEvent(),e.setHeaderSearch(),e.setScrollAnchor(),e.setTabs(),e.footnotes()},pjaxReload:()=>{e.event(),e.restData(),e.setHeader(),e.setHeaderMenuSelection(),e.setPageHeaderMenuEvent(),e.setScrollAnchor(),e.setTabs(),e.footnotes(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(e){e.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style"),o=0},utilCopyCode:e.utilCopyCode,utilWriteClipText:e.utilWriteClipText,utilTimeAgo:e.utilTimeAgo,message:e.message,question:e.question,hideMessage:e.hideMessage,messageCopyright:e.messageCopyright,scrolltoElement:e.scrolltoElement}})();Object.freeze(VolantisApp);const VolantisFancyBox=(()=>{const e={loadFancyBox:e=>{volantis.css(volantis.GLOBAL_CONFIG.plugins.fancybox.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.fancybox.js).then((()=>{e&&e()}))},init:(t=!0,o=e.groupBind)=>{!document.querySelector(".md .gallery img, .fancybox")&&t||("undefined"==typeof Fancybox?e.loadFancyBox(o):o())},elementHandling:(e,t)=>{document.querySelectorAll(e).forEach((e=>{if(e.hasAttribute("fancybox"))return;e.setAttribute("fancybox","");const o=document.createElement("a");o.setAttribute("href",e.src),o.setAttribute("data-caption",e.alt),o.setAttribute("data-fancybox",t),o.classList.add("fancybox"),o.append(e.cloneNode()),e.replaceWith(o)}))},bind:t=>{e.init(!1,(()=>{Fancybox.bind(t,{groupAll:!0,Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(e,t,o){return o.$trigger.alt||null}})}))},groupBind:(e=null)=>{const t=new Set;document.querySelectorAll(".gallery").forEach((e=>{e.querySelector("img")&&t.add(e.getAttribute("data-group")||"default")})),e&&t.add(e);for(const e of t)Fancybox.unbind('[data-fancybox="'+e+'"]'),Fancybox.bind('[data-fancybox="'+e+'"]',{Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1}})}};return{init:e.init,bind:e.bind,groupBind:(t,o="default")=>{try{e.elementHandling(t,o),e.init(!1,(()=>{e.groupBind(o)}))}catch(e){console.error(e)}}}})();Object.freeze(VolantisFancyBox);const highlightKeyWords=(()=>{let e={markNum:0,markNextId:-1,startFromURL:()=>{const t=decodeURI(new URL(location.href).searchParams.get("keyword")),o=t?t.split(" "):[],n=document.querySelector("#l_main");1==o.length&&"null"==o[0]||(e.start(o,n),e.scrollToFirstHighlightKeywordMark())},scrollToFirstHighlightKeywordMark:()=>{volantis.cleanContentVisibility(),e.scrollToNextHighlightKeywordMark("0")||volantis.requestAnimationFrame(e.scrollToFirstHighlightKeywordMark)},scrollToNextHighlightKeywordMark:t=>{let o=t||(e.markNextId+1)%e.markNum;e.markNextId=parseInt(o);let n=document.getElementById("keyword-mark-"+e.markNextId);return n||(e.markNextId=(e.markNextId+1)%e.markNum,n=document.getElementById("keyword-mark-"+e.markNextId)),n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),n},scrollToPrevHighlightKeywordMark:t=>{let o=t||(e.markNextId-1+e.markNum)%e.markNum;e.markNextId=parseInt(o);let n=document.getElementById("keyword-mark-"+e.markNextId);return n||(e.markNextId=(e.markNextId-1+e.markNum)%e.markNum,n=document.getElementById("keyword-mark-"+e.markNextId)),n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),n},start:(t,o)=>{if(e.markNum=0,!t.length||!o||1==t.length&&"null"==t[0])return;console.log(t);const n=document.createTreeWalker(o,NodeFilter.SHOW_TEXT,null),s=[];for(;n.nextNode();)n.currentNode.parentNode.matches("button, select, textarea")||s.push(n.currentNode);s.forEach((o=>{const[n]=e.getIndexByWord(t,o.nodeValue);if(!n.length)return;const s=e.mergeIntoSlice(0,o.nodeValue.length,n);e.highlightText(o,s,"keyword"),e.highlightStyle()}))},getIndexByWord:(e,t,o=!1)=>{const n=[],s=new Set;return e.forEach((e=>{const l=document.createElement("div");l.innerText=e;const a=(e=l.innerHTML).length;if(0===a)return;let i=0,r=-1;for(o||(t=t.toLowerCase(),e=e.toLowerCase());(r=t.indexOf(e,i))>-1;)n.push({position:r,word:e}),s.add(e),i=r+a})),n.sort(((e,t)=>e.position!==t.position?e.position-t.position:t.word.length-e.word.length)),[n,s]},mergeIntoSlice:(e,t,o)=>{let n=o[0],{position:s,word:l}=n;const a=[],i=new Set;for(;s+l.length<=t&&0!==o.length;){i.add(l),a.push({position:s,length:l.length});const e=s+l.length;for(o.shift();0!==o.length&&(n=o[0],s=n.position,l=n.word,e>s);)o.shift()}return{hits:a,start:e,end:t,count:i.size}},highlightText:(t,o,n)=>{const s=t.nodeValue;let l=o.start;const a=[];for(const{position:t,length:i}of o.hits){const o=document.createTextNode(s.substring(l,t));l=t+i;let r=document.createElement("mark");r.className=n,r=e.highlightStyle(r),r.appendChild(document.createTextNode(s.substr(t,i))),a.push(o,r)}t.nodeValue=s.substring(l,o.end),a.forEach((e=>{t.parentNode.insertBefore(e,t)}))},highlightStyle:t=>{if(t)return t.id="keyword-mark-"+e.markNum,e.markNum++,t.style.background="transparent",t.style["border-bottom"]="1px dashed #ff2a2a",t.style.color="#ff2a2a",t.style["font-weight"]="bold",t},cleanHighlightStyle:()=>{document.querySelectorAll(".keyword").forEach((e=>{e.style.background="transparent",e.style["border-bottom"]=null,e.style.color=null,e.style["font-weight"]=null}))}};return{start:(t,o)=>{e.start(t,o)},startFromURL:()=>{e.startFromURL()},scrollToNextHighlightKeywordMark:t=>{e.scrollToNextHighlightKeywordMark(t)},scrollToPrevHighlightKeywordMark:t=>{e.scrollToPrevHighlightKeywordMark(t)},cleanHighlightStyle:()=>{e.cleanHighlightStyle()}}})();Object.freeze(highlightKeyWords);const DOMController={visible:(e,t=!0)=>{e&&(e.style.display=!0===t?"block":"none")},remove:e=>{document.querySelectorAll(e).forEach((e=>{e.remove()}))},removeList:e=>{e.forEach((e=>{DOMController.remove(e)}))},setAttribute:(e,t,o)=>{document.querySelectorAll(e).forEach((e=>{e.setAttribute(t,o)}))},setAttributeList:e=>{e.forEach((e=>{DOMController.setAttribute(e[0],e[1],e[2])}))},setStyle:(e,t,o)=>{document.querySelectorAll(e).forEach((e=>{e.style[t]=o}))},setStyleList:e=>{e.forEach((e=>{DOMController.setStyle(e[0],e[1],e[2])}))},fadeIn:e=>{if(e)return e.style.visibility="visible",e.style.opacity=1,e.style.display="block",e.style.transition="all 0.5s linear",e},fadeOut:e=>{if(e)return e.style.visibility="hidden",e.style.opacity=0,e.style.display="none",e.style.transition="all 0.5s linear",e},fadeToggle:e=>{if(e)return e="hidden"==e.style.visibility?DOMController.fadeIn(e):DOMController.fadeOut(e)},fadeToggleList:e=>{e.forEach((e=>{DOMController.fadeToggle(e)}))},hasClass:(e,t)=>{if(e)return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:(e,t)=>{if(e)return e.classList.add(t),e},removeClass:(e,t)=>{if(e)return e.classList.remove(t),e},toggleClass:(e,t)=>{if(e)return DOMController.hasClass(e,t)?DOMController.removeClass(e,t):DOMController.addClass(e,t),e},toggleClassList:e=>{e.forEach((e=>{DOMController.toggleClass(e[0],e[1])}))}};Object.freeze(DOMController);
//# sourceMappingURL=../maps/js/app.f0812c6e.js.map
