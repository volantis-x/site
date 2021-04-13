if($((function(){VolantisApp.init(),VolantisApp.subscribe(),volantisFancyBox.loadFancyBox(),volantis.pjax.push((()=>{$((function(){VolantisApp.pjaxReload(),sessionStorage.setItem("domTitle",document.title)}))}),"app.js"),volantis.pjax.push(volantisFancyBox.pjaxReload),volantis.pjax.send((()=>{void 0!==$.fancybox&&$.fancybox.close()}),"fancybox")})),window.location.hash){let e=setInterval((function(){let t=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-");$("#"+t).length&&($("html, body").animate({scrollTop:$("#"+t).offset().top-40},500),clearInterval(e))}),100)}const Debounce=(e,t)=>{const o=t||50;let a;return function(){const t=arguments;a&&clearTimeout(a),a=setTimeout((()=>{a=null,e.apply(this,t)}),o)}},VolantisApp=(()=>{const e={};let t=80;return e.init=()=>{volantis.$.bodyAnchor=$("#safearea"),volantis.$.topBtn=$("#s-top"),volantis.$.wrapper=$("#wrapper"),volantis.$.coverAnchor=$("#l_cover .cover-wrapper"),volantis.$.switcher=$("#l_header .switcher .s-search"),volantis.$.header=$("#l_header"),volantis.$.search=$("#l_header .m_search"),volantis.$.mPhoneList=$("#l_header .m-phone .list-v"),volantis.$.header[0]&&(t=volantis.$.header[0].clientHeight+16),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(e.setGlobalHeaderMenuEvent(),e.setHeader(),e.setHeaderSearch())}},e.event=()=>{$("#scroll-down").off("click").on("click",(function(){e.scrolltoElement(volantis.$.bodyAnchor)}))},e.restData=()=>{t=volantis.$.header[0]?volantis.$.header[0].clientHeight+16:80},e.setIsMobile=()=>{document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},e.scrolltoElement=(e,o=t)=>{const a=e.href?$(decodeURI(e.getAttribute("href"))):$(e);window.scrollTo({top:a.offset().top-o,behavior:"smooth"})},e.setScrollAnchor=()=>{volantis.$.topBtn.length&&volantis.$.bodyAnchor&&volantis.$.topBtn.click((t=>{t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.$.bodyAnchor),t.stopImmediatePropagation()}));let o=document.body.scrollTop;$(document,window).scroll(Debounce((()=>{const e=volantis.$.bodyAnchor.offset().top-t,a=$(window).scrollTop(),n=a-o;o=a,a>volantis.$.bodyAnchor.offset().top?(volantis.$.topBtn.addClass("show"),n>0?volantis.$.topBtn.removeClass("hl"):volantis.$.topBtn.addClass("hl")):volantis.$.topBtn.removeClass("show").removeClass("hl"),a-e>-1?volantis.$.header.addClass("show"):volantis.$.header.removeClass("show")})))},e.setHeader=()=>{if(!pdata.ispage)return;volantis.$.wrapper.find(".nav-sub .title").html(pdata.postTitle);let e=document.body.scrollTop;$(document,window).scroll(Debounce((()=>{const t=$(window).scrollTop(),o=t-e;o>=50&&t>100?(e=t,volantis.$.wrapper.addClass("sub")):o<=-50&&(e=t,volantis.$.wrapper.removeClass("sub"))}))),volantis.$.comment=$("#s-comment"),volantis.$.commentTarget=$("#l_main article#comments"),volantis.$.commentTarget.length?volantis.$.comment.click((e=>{e.preventDefault(),e.stopPropagation(),scrolltoElement(volantis.$.commentTarget),e.stopImmediatePropagation()})):volantis.$.comment.remove(),volantis.isMobile&&(volantis.$.toc=$("#s-toc"),volantis.$.tocTarget=$("#l_side .toc-wrapper"),volantis.$.tocTarget.length&&volantis.$.tocTarget.children().length?(volantis.$.toc.click((e=>{e.stopPropagation(),volantis.$.tocTarget.toggleClass("active"),volantis.$.toc.toggleClass("active")})),$(document).click((function(e){e.stopPropagation(),volantis.$.tocTarget.removeClass("active"),volantis.$.toc.removeClass("active")})),$(document,window).scroll(Debounce((()=>{volantis.$.tocTarget.removeClass("active"),volantis.$.toc.removeClass("active")}),100))):volantis.$.toc.remove())},e.setHeaderMenuSelection=()=>{volantis.$.headerMenu=$(".navigation","#l_header,#l_cover,#l_side"),volantis.$.headerMenu.find("li a.active").removeClass("active"),volantis.$.headerMenu.find("div a.active").removeClass("active");var e=null,t=location.pathname.replace(/\/|%|\./g,"");0==t.length&&(t="home");var o=t.match(/page\d{0,}$/g);o&&(o=o[0],t=t.split(o)[0]);var a,n=t.match(/index.html/);n&&(n=n[0],t=t.split(n)[0]),(t=t.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.$.headerMenu&&(e=$("#"+t,volantis.$.headerMenu),(a=e)&&a.length&&a.addClass("active").siblings().removeClass("active"))},e.setGlobalHeaderMenuEvent=()=>{volantis.isMobile?$("#l_header .m-phone li:has(.list-v)").click((function(e){e.stopPropagation(),$($(e.currentTarget).children("ul")).show()})):$("#wrapper .m-pc li > a[href]").parent().click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&$("#wrapper .m-pc .list-v").hide()})),e.setPageHeaderMenuEvent()},e.setPageHeaderMenuEvent=()=>{volantis.isMobile&&($(document).click((function(e){volantis.$.mPhoneList.hide()})),$(window).scroll(Debounce((()=>{volantis.$.mPhoneList.hide()}))))},e.setHeaderSearch=()=>{volantis.isMobile&&0!==volantis.$.switcher.length&&(volantis.$.switcher.click((function(e){e.stopPropagation(),volantis.$.header.toggleClass("z_search-open"),volantis.$.switcher.toggleClass("active"),volantis.$.search.find("input").focus()})),$(document).click((function(e){volantis.$.header.removeClass("z_search-open"),volantis.$.switcher.removeClass("active")})),volantis.$.search.click((function(e){e.stopPropagation()})))},e.setTabs=()=>{$("#l_main .tabs .nav-tabs").length&&$("#l_main .tabs .nav-tabs").on("click","a",(e=>{e.preventDefault(),e.stopPropagation();const t=$(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),t.find(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find($(e.target).attr("class")).addClass("active"),!1}))},{init:()=>{e.init(),e.event()},subscribe:()=>{e.setIsMobile(),e.setHeader(),e.setHeaderMenuSelection(),e.setGlobalHeaderMenuEvent(),e.setHeaderSearch(),e.setScrollAnchor(),e.setTabs()},pjaxReload:()=>{e.event(),e.restData(),e.setHeader(),e.setHeaderMenuSelection(),e.setPageHeaderMenuEvent(),e.setScrollAnchor(),e.setTabs(),$("#l_header .nav-main").find(".list-v").not(".menu-phone").removeAttr("style",""),$("#l_header .menu-phone.list-v").removeAttr("style",""),0!==volantis.$.switcher.length&&$(document).click((function(e){volantis.$.header.removeClass("z_search-open"),volantis.$.switcher.removeClass("active")}))}}})();Object.freeze(VolantisApp);const volantisFancyBox=(()=>{const e={initFB:()=>{const e=new Set;e.add("default"),$(".md .gallery").each((function(t,o){$(o).has("img").length&&e.add($(o).attr("data-group")||"default")}));for(const t of e)t&&$('[data-fancybox="'+t+'"]').fancybox({hash:!1,loop:!0,closeClick:!0,helpers:{overlay:{closeClick:!0}},buttons:["zoom","slideShow","fullScreen","download","thumbs","close"]})},loadFancyBox:()=>{0!=$(".md .gallery").find("img").length&&(volantis.css("https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"),volantis.js("https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js",(()=>{e.initFB()})))}};return{loadFancyBox:()=>{e.loadFancyBox()},pjaxReload:()=>{void 0===$.fancybox?e.loadFancyBox():e.initFB()}}})();Object.freeze(volantisFancyBox);