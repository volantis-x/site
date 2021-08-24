document.addEventListener("DOMContentLoaded",(function(){volantis.requestAnimationFrame((()=>{VolantisApp.init(),VolantisApp.subscribe(),volantisFancyBox.loadFancyBox(),highlightKeyWords.startFromURL(),locationHash(),volantis.pjax.push((()=>{VolantisApp.pjaxReload(),sessionStorage.setItem("domTitle",document.title),highlightKeyWords.startFromURL(),volantisFancyBox.pjaxReload()}),"app.js"),volantis.pjax.send((()=>{volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js")}))}));const locationHash=()=>{if(window.location.hash){let e=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),t=document.getElementById(e);t&&setTimeout((()=>{window.location.hash.startsWith("#fn")?window.scrollTo({top:t.offsetTop+volantis.dom.bodyAnchor.offsetTop-volantis.dom.header.offsetHeight}):window.scrollTo({top:t.offsetTop+volantis.dom.bodyAnchor.offsetTop+5})}),1e3)}},VolantisApp=(()=>{const e={};let t=80;return e.init=()=>{volantis.dom.header&&(t=volantis.dom.header.clientHeight+16),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(e.setGlobalHeaderMenuEvent(),e.setHeader(),e.setHeaderSearch())}},e.event=()=>{volantis.dom.$(document.getElementById("scroll-down")).on("click",(function(){e.scrolltoElement(volantis.dom.bodyAnchor)}))},e.restData=()=>{t=volantis.dom.header?volantis.dom.header.clientHeight+16:80},e.setIsMobile=()=>{document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},e.scrolltoElement=(e,o=t)=>{window.scrollTo({top:e.offsetTop-o,behavior:"smooth"})},e.getScrollTop=()=>{let e;return window.pageYOffset?e=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},e.initScrollEvents=()=>{volantis.scroll={},volantis.scroll.lastScrollTop=e.getScrollTop(),volantis.requestAnimationFrame((function t(){const o=e.getScrollTop();volantis.scroll.lastScrollTop!==o&&(volantis.scroll.del=o-volantis.scroll.lastScrollTop,volantis.scroll.lastScrollTop=o,e.scrollEventCallBack()),volantis.requestAnimationFrame(t)}))},e.scrollEventCallBack=()=>{const o=volantis.dom.bodyAnchor.offsetTop-t,n=e.getScrollTop();volantis.dom.topBtn&&(n>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),volantis.scroll.del>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl")),volantis.dom.header&&(n-o>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")),pdata.ispage&&volantis.dom.wrapper&&(volantis.scroll.del>0&&n>100?volantis.dom.wrapper.addClass("sub"):volantis.scroll.del<0&&volantis.dom.wrapper.removeClass("sub")),volantis.isMobile&&(pdata.ispage&&volantis.dom.tocTarget&&volantis.dom.toc&&(volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")),volantis.dom.mPhoneList&&volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()})))},e.setScrollAnchor=()=>{volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((t=>{t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.bodyAnchor),t.stopImmediatePropagation()}))},e.setHeader=()=>{pdata.ispage&&(volantis.dom.wrapper.find(".nav-sub .title").html(pdata.postTitle),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((t=>{t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.commentTarget),t.stopImmediatePropagation()})):volantis.dom.comment.remove(),volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((e=>{e.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(e){e.stopPropagation(),volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}))):volantis.dom.toc.remove()))},e.setHeaderMenuSelection=()=>{volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((e=>{let t=volantis.dom.$(e).find("li a.active");t&&t.removeClass("active");let o=volantis.dom.$(e).find("div a.active");o&&o.removeClass("active")}));var e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var t=e.match(/page\d{0,}$/g);t&&(t=t[0],e=e.split(t)[0]);var o=e.match(/index.html/);o&&(o=o[0],e=e.split(o)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((t=>{let o=t.querySelector("[active-action=action-"+e+"]");o&&volantis.dom.$(o).addClass("active")}))},e.setGlobalHeaderMenuEvent=()=>{volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(e){e.querySelector(".list-v")&&volantis.dom.$(e).click((function(e){e.stopPropagation(),e.currentTarget.parentElement.childNodes.forEach((function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach((function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()}))}));let t=e.currentTarget.children;for(let e=0;e<t.length;e++){const o=t[e];volantis.dom.$(o).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(e){volantis.dom.$(e.parentElement).click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach((function(e){volantis.dom.$(e).hide()}))}),0)})),e.setPageHeaderMenuEvent()},e.setPageHeaderMenuEvent=()=>{volantis.isMobile&&volantis.dom.$(document).click((function(e){volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))}))},e.setHeaderSearch=()=>{volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(e){e.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")}),!1),volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}),!1),volantis.dom.search.click((function(e){e.stopPropagation()}),!1))},e.setTabs=()=>{let e=document.querySelectorAll("#l_main .tabs .nav-tabs");e&&e.forEach((function(e){e.querySelectorAll("a").forEach((function(e){volantis.dom.$(e).on("click",(e=>{e.preventDefault(),e.stopPropagation();const t=volantis.dom.$(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(e.target.className).addClass("active"),!1}))}))}))},e.footnotes=()=>{let e=document.querySelectorAll("#l_main .footnote-backref, #l_main .footnote-ref > a");e.forEach((function(t,o){e[o].click=()=>{},volantis.dom.$(t).on("click",(e=>{e.stopPropagation(),e.preventDefault();let t=decodeURI(e.target.hash.split("#")[1]).replace(/\ /g,"-"),o=document.getElementById(t);o&&window.scrollTo({top:o.offsetTop+volantis.dom.bodyAnchor.offsetTop-volantis.dom.header.offsetHeight})}))}))},e.copyCode=()=>{(document.querySelector(".highlight .code pre")||document.querySelector(".article pre code"))&&document.querySelectorAll(".highlight .code pre, .article pre code").forEach((t=>{t.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fas fa-copy"></i><span>COPY</span></button>');const o=t.previousSibling;o.onclick=n=>{n.stopPropagation();const a=o.querySelector("i"),l=o.querySelector("span");t.focus();const s=new Range;s.selectNodeContents(t),document.getSelection().removeAllRanges(),document.getSelection().addRange(s);const i=document.getSelection().toString();e.writeClipText(i).then((()=>{volantis.messageCopyright&&volantis.messageCopyright.enable&&volantis.message(volantis.messageCopyright.title,volantis.messageCopyright.message,{icon:volantis.messageCopyright.icon}),o.classList.add("copied"),a.classList.remove("fa-copy"),a.classList.add("fa-check-circle"),l.innerText="COPIED",setTimeout((()=>{a.classList.remove("fa-check-circle"),a.classList.add("fa-copy"),l.innerText="COPY"}),2e3)})).catch((e=>{volantis.message("系统提示",e,{icon:"fa fa-exclamation-circle red"}),o.classList.add("copied-failed"),a.classList.remove("fa-copy"),a.classList.add("fa-exclamation-circle"),l.innerText="COPY FAILED",setTimeout((()=>{a.classList.remove("fa-exclamation-circle"),a.classList.add("fa-copy"),l.innerText="COPY"}))}))}}))},e.writeClipText=e=>{try{return navigator.clipboard.writeText(e).then((()=>Promise.resolve())).catch((e=>Promise.reject(e||"复制文本失败!")))}catch(t){const o=document.createElement("input");o.setAttribute("readonly","readonly"),document.body.appendChild(o),o.setAttribute("value",e),o.select();try{let e=document.execCommand("copy");return document.body.removeChild(o),e&&"unsuccessful"!==e?Promise.resolve():Promise.reject("复制文本失败!")}catch(e){return document.body.removeChild(o),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}},{init:()=>{e.init(),e.event(),e.initScrollEvents()},subscribe:()=>{e.setIsMobile(),e.setHeader(),e.setHeaderMenuSelection(),e.setGlobalHeaderMenuEvent(),e.setHeaderSearch(),e.setScrollAnchor(),e.setTabs(),e.footnotes(),e.copyCode()},pjaxReload:()=>{e.event(),e.restData(),e.setHeader(),e.setHeaderMenuSelection(),e.setPageHeaderMenuEvent(),e.setScrollAnchor(),e.setTabs(),e.footnotes(),e.copyCode(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(e){e.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style")},writeClipText:e.writeClipText}})();Object.freeze(VolantisApp);const volantisFancyBox=(()=>{const e={initFB:()=>{const e=new Set;if(e.add("default"),e.add("Twikoo"),document.querySelector(".md .gallery img, .fancybox")){document.querySelectorAll(".md .gallery").forEach((function(t){t.querySelector("img")&&e.add(t.getAttribute("data-group")||"default")})),Fancybox.destroy();for(const t of e)t&&Fancybox.bind('[data-fancybox="'+t+'"]',{Hash:!1})}},loadFancyBox:t=>{document.querySelector(".md .gallery img, .fancybox")&&(volantis.css(" https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"),volantis.js("https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js").then((()=>{e.initFB(),t&&t()})))}};return{loadFancyBox:(t=null)=>{e.loadFancyBox(t)},initFancyBox:()=>{e.initFB()},pjaxReload:()=>{"undefined"==typeof Fancybox?e.loadFancyBox():e.initFB()}}})();Object.freeze(volantisFancyBox);const highlightKeyWords=(()=>{let e={markNum:0,markNextId:-1,startFromURL:()=>{const t=decodeURI(new URL(location.href).searchParams.get("keyword")),o=t?t.split(" "):[],n=document.querySelector("#l_main");1==o.length&&"null"==o[0]||(e.start(o,n),e.scrollToFirstHighlightKeywordMark())},scrollToFirstHighlightKeywordMark:()=>{e.scrollToNextHighlightKeywordMark("0")||volantis.requestAnimationFrame(e.scrollToFirstHighlightKeywordMark)},scrollToNextHighlightKeywordMark:t=>{let o=t||(e.markNextId+1)%e.markNum;e.markNextId=parseInt(o);let n=document.getElementById("keyword-mark-"+e.markNextId);return n||(e.markNextId=(e.markNextId+1)%e.markNum,n=document.getElementById("keyword-mark-"+e.markNextId)),n&&window.scrollTo({top:n.getBoundingClientRect().top+document.documentElement.scrollTop-volantis.dom.header.offsetHeight-5}),n},scrollToPrevHighlightKeywordMark:t=>{let o=t||(e.markNextId-1+e.markNum)%e.markNum;e.markNextId=parseInt(o);let n=document.getElementById("keyword-mark-"+e.markNextId);return n||(e.markNextId=(e.markNextId-1+e.markNum)%e.markNum,n=document.getElementById("keyword-mark-"+e.markNextId)),n&&window.scrollTo({top:n.getBoundingClientRect().top+document.documentElement.scrollTop-volantis.dom.header.offsetHeight-5}),n},start:(t,o)=>{if(e.markNum=0,!t.length||!o||1==t.length&&"null"==t[0])return;console.log(t);const n=document.createTreeWalker(o,NodeFilter.SHOW_TEXT,null),a=[];for(;n.nextNode();)n.currentNode.parentNode.matches("button, select, textarea")||a.push(n.currentNode);a.forEach((o=>{const[n]=e.getIndexByWord(t,o.nodeValue);if(!n.length)return;const a=e.mergeIntoSlice(0,o.nodeValue.length,n);e.highlightText(o,a,"keyword"),e.highlightStyle()}))},getIndexByWord:(e,t,o=!1)=>{const n=[],a=new Set;return e.forEach((e=>{const l=document.createElement("div");l.innerText=e;const s=(e=l.innerHTML).length;if(0===s)return;let i=0,r=-1;for(o||(t=t.toLowerCase(),e=e.toLowerCase());(r=t.indexOf(e,i))>-1;)n.push({position:r,word:e}),a.add(e),i=r+s})),n.sort(((e,t)=>e.position!==t.position?e.position-t.position:t.word.length-e.word.length)),[n,a]},mergeIntoSlice:(e,t,o)=>{let n=o[0],{position:a,word:l}=n;const s=[],i=new Set;for(;a+l.length<=t&&0!==o.length;){i.add(l),s.push({position:a,length:l.length});const e=a+l.length;for(o.shift();0!==o.length&&(n=o[0],a=n.position,l=n.word,e>a);)o.shift()}return{hits:s,start:e,end:t,count:i.size}},highlightText:(t,o,n)=>{const a=t.nodeValue;let l=o.start;const s=[];for(const{position:t,length:i}of o.hits){const o=document.createTextNode(a.substring(l,t));l=t+i;let r=document.createElement("mark");r.className=n,r=e.highlightStyle(r),r.appendChild(document.createTextNode(a.substr(t,i))),s.push(o,r)}t.nodeValue=a.substring(l,o.end),s.forEach((e=>{t.parentNode.insertBefore(e,t)}))},highlightStyle:t=>{if(t)return t.id="keyword-mark-"+e.markNum,e.markNum++,t.style.background="transparent",t.style["border-bottom"]="1px dashed #ff2a2a",t.style.color="#ff2a2a",t.style["font-weight"]="bold",t},cleanHighlightStyle:()=>{document.querySelectorAll(".keyword").forEach((e=>{e.style.background="transparent",e.style["border-bottom"]=null,e.style.color=null,e.style["font-weight"]=null}))}};return{start:(t,o)=>{e.start(t,o)},startFromURL:()=>{e.startFromURL()},scrollToNextHighlightKeywordMark:t=>{e.scrollToNextHighlightKeywordMark(t)},scrollToPrevHighlightKeywordMark:t=>{e.scrollToPrevHighlightKeywordMark(t)},cleanHighlightStyle:()=>{e.cleanHighlightStyle()}}})();Object.freeze(highlightKeyWords);