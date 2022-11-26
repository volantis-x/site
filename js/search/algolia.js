"use strict";function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var SearchService=function(){var e,t,a,n={};return n.queryText=null,n.template='<div id="u-search">\n  <div class="modal">\n    <header class="modal-header" class="clearfix">\n      <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit">\n        <span class="fa-solid fa-search"></span>\n      </button>\n      <div id="algolia-search-input"></div>\n      <a id="u-search-btn-close" class="btn-close"> <span class="fa-solid fa-times"></span> </a>\n    </header>\n    <main class="modal-body">\n      <div id="algolia-search-results">\n        <div id="algolia-hits">\n          <div class="search-icon"><i class="fa-sharp fa-solid fa-telescope"></i></i></div>\n        </div>\n      </div>\n    </main>\n    <footer>\n      <div id="algolia-pagination"></div>\n      <hr>\n      <div id="algolia-info">\n        <div class="algolia-stats"></div>\n        <div class="algolia-poweredBy"></div>\n      </div>\n    </footer>\n  </div>\n  <div id="modal-overlay" class="modal-overlay"></div>\n  </div>\n  ',n.init=function(){var e=document.createElement("div");e.innerHTML+=n.template,document.body.append(e),(t=volantis.GLOBAL_CONFIG.search).appId&&t.apiKey&&t.indexName?(n.event(),n.setAlgolia()):(document.querySelector("#u-search main.modal-body").innerHTML="Algolia setting is invalid!",document.querySelector("#u-search main.modal-body").style.textAlign="center",document.querySelector("#u-search .modal").style.maxHeight="128px")},n.event=function(){document.querySelector("#u-search-btn-close").addEventListener("click",n.close,!1),document.querySelector("#modal-overlay").addEventListener("click",n.close,!1),document.querySelectorAll(".u-search-form").forEach((function(e){e.addEventListener("submit",n.onSubmit,!1)})),document.querySelector("#algolia-search-input").addEventListener("input",(function(e){var t=e.target.querySelector(".ais-SearchBox-input");n.queryText=t?t.value:e.target.value}))},n.setAlgolia=function(){var i;e=instantsearch({indexName:t.indexName,searchClient:algoliasearch(t.appId,t.apiKey),searchFunction:function(e){e.state.query&&e.search()}});var s=instantsearch.widgets.configure({hitsPerPage:t.hitsPerPage}),r=instantsearch.widgets.searchBox({container:"#algolia-search-input",autofocus:!0,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,searchAsYouType:t.searchAsYouType,placeholder:t.placeholder,templates:{input:"algolia-input"},queryHook:function(e,t){clearTimeout(a),a=setTimeout((function(){return t(e)}),500)}}),o=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(e){var t=n.queryText?"?keyword=".concat(n.queryText):"",a=e.permalink?e.permalink:"".concat(volantis.GLOBAL_CONFIG.root).concat(e.path),i=e._highlightResult,s=i.contentStripTruncate?n.cutContent(i.contentStripTruncate.value):i.contentStrip?n.cutContent(i.contentStrip.value):i.content?n.cutContent(i.content.value):"";return'\n            <a href="'.concat(a).concat(t,'" class="result">\n            <span class="title">').concat(i.title.value||"no-title",'</span>\n            <span class="digest">').concat(s,"</span>\n            </a>")},empty:function(e){return'<div id="resule-hits-empty"><i class="fa-solid fa-box-open"></i><p>'.concat(volantis.GLOBAL_CONFIG.languages.search.hits_empty.replace(/\$\{query}/,e.query),"</p></div>")}}}),c=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){var t=volantis.GLOBAL_CONFIG.languages.search.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return"".concat(t)}}}),l=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy",theme:"dark"===(null===(i=volantis.dark)||void 0===i?void 0:i.mode)?"dark":"light"}),u=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}});e.addWidgets([s,r,o,c,l,u]),e.start()},n.setQueryText=function(a){var i;n.queryText=a,e||n.init(),null===(i=e)||void 0===i||i.setUiState(_defineProperty({},t.indexName,{query:a}))},n.search=function(){document.querySelector("#u-search").style.display="block",document.addEventListener("keydown",(function(e){"Escape"===e.code&&n.close()}),{once:!0})},n.onSubmit=function(e){e.preventDefault();var t=e.target.querySelector(".u-search-input");n.setQueryText(null!=t&&t.value?t.value:e.target.value),n.search()},n.cutContent=function(e){if(""===e)return"";var t=e.indexOf("<mark>"),a=t-30,n=t+120,i="",s="";return a<=0?(a=0,n=140):i="...",n>e.length?n=e.length:s="...",i+e.substring(a,n)+s},n.close=function(){document.querySelector("#u-search").style.display="none"},{init:n.init,setQueryText:function(e){n.setQueryText(e)},search:n.search,close:n.close}}();Object.freeze(SearchService),SearchService.init();
//# sourceMappingURL=../../maps/js/search/algolia.js.map
