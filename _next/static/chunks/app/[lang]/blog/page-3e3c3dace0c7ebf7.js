(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9552,8646,4502,2444],{3759:function(e,n,t){var a={"./menu.ar.json":[1510,1510],"./menu.da.json":[6781,6781],"./menu.de.json":[8607,8607],"./menu.en.json":[9053,9053],"./menu.es.json":[1107,1107],"./menu.fi.json":[936,936],"./menu.fr.json":[4902,4902],"./menu.he.json":[4403,4403],"./menu.it.json":[9766,9766],"./menu.ja.json":[7634,7634],"./menu.ko.json":[2040,2040],"./menu.nl.json":[5389,5389],"./menu.no.json":[1662,1662],"./menu.pt.json":[2562,2562],"./menu.ru.json":[7364,7364],"./menu.sv.json":[7569,7569],"./menu.th.json":[7793,7793],"./menu.tr.json":[4608,4608],"./menu.vi.json":[545,545],"./menu.zh-hant.json":[7752,7752],"./menu.zh.json":[5427,5427]};function i(e){if(!t.o(a,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=a[e],i=n[0];return t.e(n[1]).then(function(){return t.t(i,19)})}i.keys=function(){return Object.keys(a)},i.id=3759,e.exports=i},8621:function(e,n,t){var a={"./ar.json":[1861,1861],"./da.json":[5130,5130],"./de.json":[3650,3650],"./en.json":[7890,7890],"./es.json":[8559,8559],"./fi.json":[7549,7549],"./fr.json":[5345,5345],"./he.json":[9659,9659],"./it.json":[5177,5177],"./ja.json":[3302,3302],"./ko.json":[1594,1594],"./nl.json":[8757,8757],"./no.json":[3524,3524],"./pt.json":[2140,2140],"./ru.json":[8827,8827],"./sv.json":[1794,1794],"./th.json":[6843,6843],"./tr.json":[6720,6720],"./vi.json":[8068,8068],"./zh-hant.json":[8359,8359],"./zh.json":[4355,4355]};function i(e){if(!t.o(a,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=a[e],i=n[0];return t.e(n[1]).then(function(){return t.t(i,19)})}i.keys=function(){return Object.keys(a)},i.id=8621,e.exports=i},1403:function(e,n,t){Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,6284)),Promise.resolve().then(t.bind(t,9199)),Promise.resolve().then(t.bind(t,5806))},6284:function(e,n,t){"use strict";var a=t(7437),i=t(803),o=t(8755),r=t(6463),s=t(943),u=t(4410),l=t(2265);n.default=e=>{let{className:n="mt-6",lang:t}=e;(0,l.useMemo)(s.Mb,[]);let c=(0,r.usePathname)(),g=c.replace("/".concat(t),"").split("/").filter(e=>e),h=[{label:"Home",href:(0,u.b)(t,""),"aria-label":"/"===c?"page":void 0}];return g.forEach((e,n)=>{let a=(0,u.b)(t,"/".concat(g.slice(0,n+1).join("/")));"page"!==e&&h.push({label:(0,i.OI)(e.replace(/[-_]/g," "))||"",href:a,"aria-label":c===a?"page":void 0})}),(0,a.jsx)("nav",{"aria-label":"Breadcrumb",className:n,children:(0,a.jsx)("ol",{className:"inline-flex",role:"list",children:h.map((e,n)=>{let{label:t,...i}=e;return(0,a.jsxs)("li",{className:"mx-1 capitalize",role:"listitem",children:[n>0&&(0,a.jsx)("span",{className:"inline-block mr-1",children:"/"}),n!==h.length-1?(0,a.jsx)(o.Z,{className:"text-primary dark:text-darkmode-primary",...i,children:t}):(0,a.jsx)("span",{className:"text-light dark:text-darkmode-light",children:t})]},n)})})})}},8755:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(7437),i=t(231),o=t.n(i),r=t(145),s=e=>{let{href:n,passHref:t,...i}=e;return r.site.Yw?(0,a.jsx)("a",{href:n,...i}):(0,a.jsx)(o(),{href:n,passHref:t,...i})}},9199:function(e,n,t){"use strict";t.r(n);var a=t(7437),i=t(2265);n.default=e=>{let{src:n,fallback:t,...o}=e,[r,s]=(0,i.useState)(n);return(0,i.useEffect)(()=>{s(n)},[n]),(0,a.jsx)("img",{...o,src:r,onError:()=>{s(t)}})}},5806:function(e,n,t){"use strict";var a=t(7437),i=t(145),o=t(803),r=t(6463),s=t(7812);n.default=e=>{var n,t,u;let{lang:l,title:c,meta_title:g,image:h,description:m,canonical:d,noindex:p}=e,{meta_image:f,meta_author:j,meta_description:b}=i.metadata,{base_url:_}=i.site,w=(0,r.usePathname)(),x=RegExp("(".concat(s.map(e=>"^/".concat(e.languageCode)).join("|"),")"),"g"),v=w.replace(x,"").replace(/^\/|\/$/g,"");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:(0,o.ab)("".concat(g||c?"".concat(g||c," - "):"").concat((null===(n=s.find(e=>e.languageCode===l))||void 0===n?void 0:n.title)||i.site.title))}),d&&(0,a.jsx)("link",{rel:"canonical",href:d,itemProp:"url"}),s.filter(e=>!(w.includes("/tags/")||w.includes("/categories/")||w.includes("/authors/"))||e.languageCode===l).map(e=>(0,a.jsx)("link",{rel:"alternate",hrefLang:e.languageCode,href:"".concat(_,"/").concat(e.languageCode).concat(v?"/"+v:"")},e.languageCode)),p&&(0,a.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,a.jsx)("meta",{name:"description",content:(0,o.ab)(m||b)}),(0,a.jsx)("meta",{name:"author",content:j}),(0,a.jsx)("meta",{property:"og:title",content:(0,o.ab)("".concat(g||c?"".concat(g||c," - "):"").concat((null===(t=s.find(e=>e.languageCode===l))||void 0===t?void 0:t.title)||i.site.title))}),(0,a.jsx)("meta",{property:"og:description",content:(0,o.ab)(m||b)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(_,"/").concat(w.replace("/",""))}),(0,a.jsx)("meta",{name:"twitter:title",content:(0,o.ab)("".concat(g||c?"".concat(g||c," - "):"").concat((null===(u=s.find(e=>e.languageCode===l))||void 0===u?void 0:u.title)||i.site.title))}),(0,a.jsx)("meta",{name:"twitter:description",content:(0,o.ab)(m||b)}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(_).concat(h||f)}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(_).concat(h||f)}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},943:function(e,n,t){"use strict";t.d(n,{FC:function(){return r},Mb:function(){return u},qz:function(){return s}});var a=t(145),i=t(7812);let o=a.settings.disable_languages,r=async e=>{let n=await t(3759)("./menu.".concat(e,".json")),a=await t(8621)("./".concat(e,".json"));return{...n,...a}},s=()=>i.filter(e=>!o.includes(e.languageCode)),u=()=>a.settings.default_language},4410:function(e,n,t){"use strict";t.d(n,{b:function(){return o}});var a=t(145),i=t(943);function o(e,n){let t=(0,i.Mb)(),o=(0,i.qz)();e=e!==t||a.settings.default_language_in_subdir?e.replace(/^\/|\/$/g,""):"";let r=RegExp("(".concat(o.map(e=>"^/".concat(e.languageCode)).join("|"),")"),"g");return n=n.replace(r,"").replace(/^\/|\/$/g,""),a.site.Yw&&(n=encodeURI(encodeURI(n)))&&!/\/$/.test(n)&&(n+="/"),""!==e&&(e="/".concat(e)),"".concat(a.site.Yw&&a.site.Km?a.site.Km:"").concat(e,"/").concat(n)}},803:function(e,n,t){"use strict";t.d(n,{OI:function(){return o},ab:function(){return s},gI:function(){return i},nR:function(){return r}}),t(7727);var a=t(2266);let i=(e,n)=>({__html:n?a.TU.parse(e):a.TU.parseInline(e)}),o=e=>{let n;try{n=decodeURI(decodeURI(e))}catch(t){console.error("Failed to decode URI component",t),n=e}return n.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()})},r=e=>o(e).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),s=e=>u(a.TU.parse(e).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")),u=e=>{let n={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>n[e])}},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Tan Shuai","base_url":"https://tanshuai.com","Km":"","Yw":true,"logo":"","logo_darkmode":"","logo_width":"150","logo_height":"27","logo_text":"Tan Shuai"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"light","pagination":2,"summary_length":200,"blog_folder":"blog","default_language":"en","disable_languages":[],"default_language_in_subdir":false},"f":{"ly":"2001","iF":"tanshuai.com","k1":""},"navigation_button":{"enable":false,"label":"Get Started","link":"https://tanshuai.com"},"disqus":{"enable":false,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"Tan Shuai","meta_image":"/images/og-image.png","meta_description":"Tan Shuai (tanshuai)"}}')},7812:function(e){"use strict";e.exports=JSON.parse('[{"languageName":"English","languageCode":"en","contentDir":"english","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"繁體中文","languageCode":"zh-hant","contentDir":"traditional_chinese","title":"譚帥 - Tan Shuai (tanshuai)","weight":1},{"languageName":"简体中文","languageCode":"zh","contentDir":"chinese","title":"谭帅 - Tan Shuai (tanshuai)","weight":1},{"languageName":"日本語","languageCode":"ja","contentDir":"japanese","title":"タン・シュアイ - Tan Shuai (tanshuai)","weight":1},{"languageName":"Deutsch","languageCode":"de","contentDir":"german","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Fran\xe7ais","languageCode":"fr","contentDir":"french","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Русский","languageCode":"ru","contentDir":"russian","title":"Тан Шуай - Tan Shuai (tanshuai)","weight":1},{"languageName":"Espa\xf1ol","languageCode":"es","contentDir":"spanish","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"한국어","languageCode":"ko","contentDir":"korean","title":"탄 슈아이 - Tan Shuai (tanshuai)","weight":1},{"languageName":"ภาษาไทย","languageCode":"th","contentDir":"thai","title":"ทัน ชว่าย - Tan Shuai (tanshuai)","weight":1},{"languageName":"Tiếng Việt","languageCode":"vi","contentDir":"vietnamese","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"عربي","languageCode":"ar","contentDir":"arabic","title":"تان شواي - Tan Shuai (tanshuai)","weight":1},{"languageName":"Portugu\xeas","languageCode":"pt","contentDir":"portuguese","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Italiano","languageCode":"it","contentDir":"italian","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Nederlands","languageCode":"nl","contentDir":"dutch","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Svenska","languageCode":"sv","contentDir":"swedish","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Norsk","languageCode":"no","contentDir":"norwegian","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Dansk","languageCode":"da","contentDir":"danish","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"Suomi","languageCode":"fi","contentDir":"finnish","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"T\xfcrk\xe7e","languageCode":"tr","contentDir":"turkish","title":"Tan Shuai (tanshuai)","weight":1},{"languageName":"עברית","languageCode":"he","contentDir":"hebrew","title":"תאן שואי - Tan Shuai (tanshuai)","weight":1}]')}},function(e){e.O(0,[8056,4673,2971,7023,1744],function(){return e(e.s=1403)}),_N_E=e.O()}]);