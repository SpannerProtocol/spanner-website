(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{9079:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(5761),a=n(7399),i=n(5156),o=n(8522),l=n(5444),u=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=s(e,["color","size"]);return u.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));p.displayName="Menu";var d,m,f,h=p,y=n(9880),g=n(8032),v=n(798),x=JSON.parse('{"r":{"General":["getting-started","glossary"],"Learn":["roadmap","web3","parameters",{"subcategory":"Basics","items":["architecture","bolt","governance"]},{"subcategory":"DeFi","items":["dex","yieldfarming"]},{"subcategory":"BulletTrain","items":["bullettrain","dpo-rules"]}],"Use":["spanner-dapp","supported-wallets"],"Build":["build-on-spanner","integration-guide","tools"],"Maintain":["network-maintainers","collator"]}}'),b=n(3600),w=n(5609),E=g.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),k=g.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100%;grid-template-columns:min(180px) auto;grid-column-gap:1rem;grid-row-gap:1rem;",";"],(function(e){return e.theme.mediaWidth.upToSmall(d||(d=(0,r.Z)(["\n  display: flex;\n  "])))})),_=g.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(m||(m=(0,r.Z)(["\n    display: none;\n"])))})),L=g.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(f||(f=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),O=g.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1}));function C(e){var t=(0,u.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return u.createElement(u.Fragment,null,Object.keys(x.r).map((function(e,n){return u.createElement(u.Fragment,null,u.createElement(b.H9,{key:n,fontSize:"20px",padding:"0.5rem 0"},e),x.r[e].map((function(e){return"string"==typeof e?Object.keys(t).includes(e)?u.createElement(u.Fragment,null,t[e].path&&u.createElement(o._,{to:t[e].path},u.createElement(b.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):null:"object"==typeof e?u.createElement(u.Fragment,null,u.createElement(b.H9,{fontSize:"16px",padding:"0.5rem 0"},e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?u.createElement(u.Fragment,null,t[e].path&&u.createElement(o._,{to:t[e].path},u.createElement(b.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):null}))):null})))})))}function S(e){var t=e.navData;return u.createElement(u.Fragment,null,C(t))}function j(){var e=(0,y.Z)("(max-width: 720px)"),t=(0,l.useStaticQuery)("1120139937");return u.createElement(u.Fragment,null,e?u.createElement(L,null,u.createElement(D,{navData:t})):u.createElement(_,null,u.createElement(S,{navData:t})))}var M=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function D(e){var t=e.navData,n=(M(),u.useState(!1)),r=n[0],a=n[1],o=(0,u.useContext)(g.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return u.createElement(u.Fragment,null,u.createElement(E,{onClick:l(!0)},u.createElement(O,null,u.createElement(h,{size:24,color:o.white}))),u.createElement(i.ZP,{anchor:"right",open:r,onClose:l(!1)},u.createElement("div",{style:{padding:"1rem"}},C(t))))}function F(e){var t=e.children;return u.createElement(v.Z,null,u.createElement(w.vs,null,u.createElement(k,null,u.createElement(j,null),u.createElement(w.IH,{style:{overflow:"scroll"}},t))))}},5026:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var r=n(9756),a=(n(7294),n(3497)),i=n(9079),o={},l={_frontmatter:o},u=i.Z;function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(u,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Spanner Protocol progressively implements the ",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org/blog/uniswap-v2/"},"Uniswap V2 protocol"),". Uniswap is a phenomenal decentralized exchange product and becomes essential for the 2020 DeFi boom. Read the ",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org/blog/year-in-review/"},"2020 Uniswap review here"),"."),(0,a.kt)("br",null),(0,a.kt)("br",null),"User interaction with the DEX on Spanner is similar to the Uniswap on Ethereum, except for the fee configuration, gas price and transaction finality time. Users can experience a much faster transaction confirmation.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Users can add liquidity anytime to the liquidity pool and get some shares of their Liquidity Provider (LP) token. Liquidity providers can remove liquidity anytime with their LP tokens.",(0,a.kt)("br",null),(0,a.kt)("br",null),"Liquidity providers can earn fee from every transaction happened in the liquidity pool. The initial setting is 0.3% and can be changed through on-chain governance. In addition to the transaction fee, liquidity providers can earn more from [Yield Farming](yieldfarm.md) with their LP tokens.")}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-dex-mdx-e5f353d5d56d493e54fa.js.map