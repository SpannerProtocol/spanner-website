(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[352],{3380:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(5761),r=n(7399),o=n(3491),i=n(1175),l=n(4376),u=n(8032),c=u.default.div.withConfig({displayName:"Sidebar__SideBar",componentId:"sc-1pojqly-0"})(["display:flex;justify-content:flex-end;height:100%;width:30vw;position:fixed;overflow-y:scroll;top:0;left:0;padding-top:80px;border:1px solid ",";background-color:",";"],(function(e){return e.theme.bg3}),(function(e){return e.theme.bg2})),s=n(5444),p=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=(0,p.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,i=m(e,["color","size"]);return p.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),p.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));f.displayName="Menu";var h,g,y,x=f,v=n(9880),b=n(2228),w=JSON.parse('{"r":{"📄 GENERAL":["getting-started","glossary"],"🧑🏼‍💻 LEARN":["roadmap","web3","parameters",{"subcategory":"BASICS","items":["architecture","bolt","governance"]},{"subcategory":"DEFI","items":["dex","yieldfarming"]},{"subcategory":"BULLETTRAIN","items":["bullettrain","dpo-rules"]}],"👛 USE":["spanner-dapp","supported-wallets"],"🔧 BUILD":["build-on-spanner","integration-guide","tools"],"⚖️ MAINTAIN":["network-maintainers","collator"]}}'),k=n(5609),E=u.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),S=u.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100vw;height:100vh;grid-template-columns:30vw auto;grid-column-gap:5vw;grid-row-gap:1rem;justify-content:flex-start;",";"],(function(e){return e.theme.mediaWidth.upToSmall(h||(h=(0,a.Z)(["\n  display: flex;\n  "])))})),_=u.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,a.Z)(["\n    display: none;\n"])))})),L=u.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(y||(y=(0,a.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),N=u.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1})),C=u.default.p.withConfig({displayName:"MdxLayout__SidebarCategory",componentId:"sc-613gxx-5"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),O=u.default.p.withConfig({displayName:"MdxLayout__SidebarSubCategory",componentId:"sc-613gxx-6"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),P=u.default.p.withConfig({displayName:"MdxLayout__SidebarItem",componentId:"sc-613gxx-7"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:bold;letter-spacing:0.28px;color:',";opacity:1;padding-left:",";"],(function(e){return e.theme.text1}),(function(e){return e.nested?"1rem":"0"}));function I(e){var t=(0,p.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return p.createElement(p.Fragment,null,Object.keys(w.r).map((function(e,n){return p.createElement(p.Fragment,null,p.createElement(C,{key:n},e),w.r[e].map((function(e,n){return"string"==typeof e?Object.keys(t).includes(e)?p.createElement("div",{key:n},t[e].path&&p.createElement(l._x,{to:t[e].path},p.createElement(P,{key:t[e].title},t[e].title))):null:"object"==typeof e?p.createElement("div",{key:n},p.createElement(O,null,e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?p.createElement("div",{key:t[e].title},t[e].path&&p.createElement(l._x,{to:t[e].path},p.createElement(P,{key:t[e].title,nested:!0},t[e].title))):null}))):null})))})))}function T(e){var t=e.navData;return p.createElement(p.Fragment,null,p.createElement(c,null,p.createElement("div",{style:{padding:"0 3rem"}},I(t))))}var M=(0,r.Z)({list:{width:250},fullList:{width:"auto"}});function j(e){var t=e.navData,n=(M(),p.useState(!1)),a=n[0],r=n[1],i=(0,p.useContext)(u.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(e)}};return p.createElement(p.Fragment,null,p.createElement(E,{onClick:l(!0)},p.createElement(N,null,p.createElement(x,{size:24,color:i.white}))),p.createElement(o.ZP,{anchor:"right",open:a,onClose:l(!1)},p.createElement("div",{style:{padding:"1rem 2.5rem"}},I(t))))}function D(){var e=(0,v.Z)("(max-width: 720px)"),t=(0,s.useStaticQuery)("1120139937");return p.createElement(p.Fragment,null,e?p.createElement(L,null,p.createElement(j,{navData:t})):p.createElement(_,null,p.createElement(T,{navData:t})))}function Z(e){var t=e.children;return p.createElement(b.Z,null,p.createElement(i.Z,{siteTitle:"Spanner Protocol",fixed:!0,withBorder:!0}),p.createElement(S,null,p.createElement(D,null),p.createElement(k.bu,null,t)))}},4731:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return c}});var a=n(9756),r=(n(7294),n(3497)),o=n(3380),i={},l={_frontmatter:i},u=o.Z;function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)(u,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Roadmap"),(0,r.kt)("h2",null,"Launch Phases"),(0,r.kt)("p",null,"Spanner Protocol has following three major launch phases:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Phase 1 - Hammer Testnet"),": Launched 2020 Q1. A value-free playground for experimental protocol and feature upgrades. Partners can connect to the testnet RPC endpoints for integration. The testnet may have bugs and unexpected reboots. Check out the ",(0,r.kt)("a",{parentName:"p",href:"/spanner-website/docs/integration-guide"},"integration guide")," for more information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Phase 2 - Spanner Mainnet"),": Scheduled to Launch in 2021 Q2. The mainnet is the first official release of Spanner Protocol where the native token BOLT will be available in our liquidity pools. Our first growth template BulletTrain will launch alongside with the mainnet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Phase 3 - Spanner Parachain"),": After the official launch of Polkadot parachain integration, we will bid for a parachain slot with community-wide support. The parachain integration is anticipated to benefit Spanner and BOLT token via improved interoperability and pool security. "),(0,r.kt)("h2",null,"Feature Roadmap"),(0,r.kt)("p",null,"We will progressively implement following features and more. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Economy of Scale for DPO usages"),(0,r.kt)("li",{parentName:"ul"},"A broader scope of DPO connectivity to off-chain and cross-chain actions."),(0,r.kt)("li",{parentName:"ul"},"More features for interoperability with other Parachain and integration. "),(0,r.kt)("li",{parentName:"ul"},"Parachain infrastructure like Collator. ")),(0,r.kt)("p",null,"The actual implementation schedule are evolving based on our github issue discussion pages."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-roadmap-mdx-9a5a5a4b35e496a7acc0.js.map