(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{3380:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(5761),a=n(7399),i=n(5156),o=n(1175),l=n(8522),c=n(8032),s=c.default.div.withConfig({displayName:"Sidebar__SideBar",componentId:"sc-1pojqly-0"})(["display:flex;justify-content:flex-end;height:100%;width:30vw;position:fixed;overflow-y:scroll;top:0;left:0;padding-top:80px;border:1px solid ",";background-color:",";"],(function(e){return e.theme.bg3}),(function(e){return e.theme.bg2})),u=n(5444),d=n(7294);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=(0,d.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=m(e,["color","size"]);return d.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),d.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));f.displayName="Menu";var y,g,h,x=f,v=n(9880),w=n(2228),b=JSON.parse('{"r":{"📄 GENERAL":["getting-started","glossary"],"🧑🏼‍💻 LEARN":["roadmap","web3","parameters",{"subcategory":"BASICS","items":["architecture","bolt","governance"]},{"subcategory":"DEFI","items":["dex","yieldfarming"]},{"subcategory":"BULLETTRAIN","items":["bullettrain","dpo-rules"]}],"👛 USE":["spanner-dapp","supported-wallets"],"🔧 BUILD":["build-on-spanner","integration-guide","tools"],"⚖️ MAINTAIN":["network-maintainers","collator"]}}'),E=n(5609),k=c.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),L=c.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100vw;height:100vh;grid-template-columns:30vw auto;grid-column-gap:5vw;grid-row-gap:1rem;justify-content:flex-start;",";"],(function(e){return e.theme.mediaWidth.upToSmall(y||(y=(0,r.Z)(["\n  display: flex;\n  "])))})),_=c.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,r.Z)(["\n    display: none;\n"])))})),S=c.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(h||(h=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),C=c.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1})),I=c.default.p.withConfig({displayName:"MdxLayout__SidebarCategory",componentId:"sc-613gxx-5"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),N=c.default.p.withConfig({displayName:"MdxLayout__SidebarSubCategory",componentId:"sc-613gxx-6"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),O=c.default.p.withConfig({displayName:"MdxLayout__SidebarItem",componentId:"sc-613gxx-7"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:bold;letter-spacing:0.28px;color:',";opacity:1;padding-left:",";"],(function(e){return e.theme.text1}),(function(e){return e.nested?"1rem":"0"}));function j(e){var t=(0,d.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return d.createElement(d.Fragment,null,Object.keys(b.r).map((function(e,n){return d.createElement(d.Fragment,null,d.createElement(I,{key:n},e),b.r[e].map((function(e,n){return"string"==typeof e?Object.keys(t).includes(e)?d.createElement("div",{key:n},t[e].path&&d.createElement(l._,{to:t[e].path},d.createElement(O,{key:t[e].title},t[e].title))):null:"object"==typeof e?d.createElement("div",{key:n},d.createElement(N,null,e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?d.createElement("div",{key:t[e].title},t[e].path&&d.createElement(l._,{to:t[e].path},d.createElement(O,{key:t[e].title,nested:!0},t[e].title))):null}))):null})))})))}function M(e){var t=e.navData;return d.createElement(d.Fragment,null,d.createElement(s,null,d.createElement("div",{style:{padding:"0 3rem"}},j(t))))}var D=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function T(e){var t=e.navData,n=(D(),d.useState(!1)),r=n[0],a=n[1],o=(0,d.useContext)(c.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return d.createElement(d.Fragment,null,d.createElement(k,{onClick:l(!0)},d.createElement(C,null,d.createElement(x,{size:24,color:o.white}))),d.createElement(i.ZP,{anchor:"right",open:r,onClose:l(!1)},d.createElement("div",{style:{padding:"1rem 2.5rem"}},j(t))))}function Z(){var e=(0,v.Z)("(max-width: 720px)"),t=(0,u.useStaticQuery)("1120139937");return d.createElement(d.Fragment,null,e?d.createElement(S,null,d.createElement(T,{navData:t})):d.createElement(_,null,d.createElement(M,{navData:t})))}function P(e){var t=e.children;return d.createElement(w.Z,null,d.createElement(o.Z,{siteTitle:"Spanner Protocol",fixed:!0,withBorder:!0}),d.createElement(L,null,d.createElement(Z,null),d.createElement(E.bu,null,t)))}},5026:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return s}});var r=n(9756),a=(n(7294),n(3497)),i=n(3380),o={},l={_frontmatter:o},c=i.Z;function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Spanner Decentralized Exchange (DEX)"),(0,a.kt)("p",null,"Spanner Protocol progressively implements the ",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org/blog/uniswap-v2/"},"Uniswap V2 protocol"),". Uniswap is a phenomenal decentralized exchange product and becomes essential for the 2020 DeFi boom. Read the ",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org/blog/year-in-review/"},"2020 Uniswap review here"),"."),(0,a.kt)("p",null,"User interaction with the DEX on Spanner is similar to the Uniswap on Ethereum, except for the fee configuration, gas price and transaction finality time. Users can experience a much faster transaction confirmation."),(0,a.kt)("p",null,"Users can add liquidity anytime to the liquidity pool and get some shares of their Liquidity Provider (LP) token. Liquidity providers can remove liquidity anytime with their LP tokens."),(0,a.kt)("p",null,"Liquidity providers can earn fee from every transaction happened in the liquidity pool. The initial setting is 0.3% and can be changed through on-chain governance. In addition to the transaction fee, liquidity providers can earn more from ",(0,a.kt)("a",{parentName:"p",href:"/docs/yieldfarming"},"Yield Farming")," with their LP tokens."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-dex-mdx-6d4ad6d92a1345f2c9fb.js.map