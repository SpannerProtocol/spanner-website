(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[871],{3380:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(5761),a=n(7399),i=n(5156),o=n(1175),l=n(8522),u=n(8032),c=u.default.div.withConfig({displayName:"Sidebar__SideBar",componentId:"sc-1pojqly-0"})(["display:flex;justify-content:flex-end;height:100%;width:30vw;position:fixed;overflow-y:scroll;top:0;left:0;padding-top:80px;border:1px solid ",";background-color:",";"],(function(e){return e.theme.bg3}),(function(e){return e.theme.bg2})),s=n(5444),p=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=(0,p.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=m(e,["color","size"]);return p.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),p.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));f.displayName="Menu";var y,g,h,x=f,v=n(9880),w=n(2228),b=JSON.parse('{"r":{"📄 GENERAL":["getting-started","glossary"],"🧑🏼‍💻 LEARN":["roadmap","web3","parameters",{"subcategory":"BASICS","items":["architecture","bolt","governance"]},{"subcategory":"DEFI","items":["dex","yieldfarming"]},{"subcategory":"BULLETTRAIN","items":["bullettrain","dpo-rules"]}],"👛 USE":["spanner-dapp","supported-wallets"],"🔧 BUILD":["build-on-spanner","integration-guide","tools"],"⚖️ MAINTAIN":["network-maintainers","collator"]}}'),k=n(5609),E=u.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),S=u.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100vw;height:100vh;grid-template-columns:30vw auto;grid-column-gap:5vw;grid-row-gap:1rem;justify-content:flex-start;",";"],(function(e){return e.theme.mediaWidth.upToSmall(y||(y=(0,r.Z)(["\n  display: flex;\n  "])))})),N=u.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,r.Z)(["\n    display: none;\n"])))})),_=u.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(h||(h=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),L=u.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1})),j=u.default.p.withConfig({displayName:"MdxLayout__SidebarCategory",componentId:"sc-613gxx-5"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),C=u.default.p.withConfig({displayName:"MdxLayout__SidebarSubCategory",componentId:"sc-613gxx-6"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),I=u.default.p.withConfig({displayName:"MdxLayout__SidebarItem",componentId:"sc-613gxx-7"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:bold;letter-spacing:0.28px;color:',";opacity:1;padding-left:",";"],(function(e){return e.theme.text1}),(function(e){return e.nested?"1rem":"0"}));function O(e){var t=(0,p.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return p.createElement(p.Fragment,null,Object.keys(b.r).map((function(e,n){return p.createElement(p.Fragment,null,p.createElement(j,{key:n},e),b.r[e].map((function(e,n){return"string"==typeof e?Object.keys(t).includes(e)?p.createElement("div",{key:n},t[e].path&&p.createElement(l._,{to:t[e].path},p.createElement(I,{key:t[e].title},t[e].title))):null:"object"==typeof e?p.createElement("div",{key:n},p.createElement(C,null,e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?p.createElement("div",{key:t[e].title},t[e].path&&p.createElement(l._,{to:t[e].path},p.createElement(I,{key:t[e].title,nested:!0},t[e].title))):null}))):null})))})))}function D(e){var t=e.navData;return p.createElement(p.Fragment,null,p.createElement(c,null,p.createElement("div",{style:{padding:"0 3rem"}},O(t))))}var M=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function T(e){var t=e.navData,n=(M(),p.useState(!1)),r=n[0],a=n[1],o=(0,p.useContext)(u.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return p.createElement(p.Fragment,null,p.createElement(E,{onClick:l(!0)},p.createElement(L,null,p.createElement(x,{size:24,color:o.white}))),p.createElement(i.ZP,{anchor:"right",open:r,onClose:l(!1)},p.createElement("div",{style:{padding:"1rem 2.5rem"}},O(t))))}function P(){var e=(0,v.Z)("(max-width: 720px)"),t=(0,s.useStaticQuery)("1120139937");return p.createElement(p.Fragment,null,e?p.createElement(_,null,p.createElement(T,{navData:t})):p.createElement(N,null,p.createElement(D,{navData:t})))}function Z(e){var t=e.children;return p.createElement(w.Z,null,p.createElement(o.Z,{siteTitle:"Spanner Protocol",fixed:!0,withBorder:!0}),p.createElement(S,null,p.createElement(P,null),p.createElement(k.bu,null,t)))}},8051:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var r=n(9756),a=(n(7294),n(3497)),i=n(3380),o={},l={_frontmatter:o},u=i.Z;function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(u,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Overview of Spanner's Dapp"),(0,a.kt)("p",null,"Links to Spanner's DApp will be made available here after its official launch."),(0,a.kt)("h2",null,"What's available?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bridge - Move tokens between Spanner and Ethereum"),(0,a.kt)("li",{parentName:"ul"},"DeFi",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DEX - Swap project tokens"),(0,a.kt)("li",{parentName:"ul"},"Liquidity Pools - Provide Liquidity to start earning transaction fees"),(0,a.kt)("li",{parentName:"ul"},"Yield Farming - Use your Liquidity Pool Tokens to farm more yield"))),(0,a.kt)("li",{parentName:"ul"},"Project Discovery - Checkout all the projects on Spanner"),(0,a.kt)("li",{parentName:"ul"},"BulletTrain - Start participating in early project community growth capmaigns to earn rewards by helping new projects")),(0,a.kt)("h2",null,"Getting Started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use Bridge to start moving funds into Spanner"),(0,a.kt)("li",{parentName:"ol"},"Use Dex to Swap the token you want"),(0,a.kt)("li",{parentName:"ol"},"Participate in the following to earn project tokens: Liquidity Pools, Yield Farming or BulletTrain")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-spanner-dapp-mdx-7cb53365c368aadc9b55.js.map