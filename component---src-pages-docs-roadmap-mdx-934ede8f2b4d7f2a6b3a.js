(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[352],{9079:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(5761),a=n(7399),i=n(5156),o=n(8522),l=n(5444),u=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=s(e,["color","size"]);return u.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));p.displayName="Menu";var m,d,f,h=p,g=n(9880),y=n(8032),v=n(798),k=JSON.parse('{"r":{"General":["getting-started","glossary"],"Learn":["roadmap","web3","parameters",{"subcategory":"Basics","items":["architecture","bolt","governance"]},{"subcategory":"DeFi","items":["dex","yieldfarming"]},{"subcategory":"BulletTrain","items":["bullettrain","dpo-rules"]}],"Use":["spanner-dapp","supported-wallets"],"Build":["build-on-spanner","integration-guide","tools"],"Maintain":["network-maintainers","collator"]}}'),b=n(3600),x=n(5609),w=y.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),E=y.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100%;grid-template-columns:min(180px) auto;grid-column-gap:1rem;grid-row-gap:1rem;",";"],(function(e){return e.theme.mediaWidth.upToSmall(m||(m=(0,r.Z)(["\n  display: flex;\n  "])))})),O=y.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(d||(d=(0,r.Z)(["\n    display: none;\n"])))})),_=y.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(f||(f=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),P=y.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1}));function S(e){var t=(0,u.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return u.createElement(u.Fragment,null,Object.keys(k.r).map((function(e,n){return u.createElement(u.Fragment,null,u.createElement(b.H9,{key:n,fontSize:"20px",padding:"0.5rem 0"},e),k.r[e].map((function(e){return"string"==typeof e?Object.keys(t).includes(e)?u.createElement(u.Fragment,null,t[e].path&&u.createElement(o._,{to:t[e].path},u.createElement(b.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):null:"object"==typeof e?u.createElement(u.Fragment,null,u.createElement(b.H9,{fontSize:"16px",padding:"0.5rem 0"},e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?u.createElement(u.Fragment,null,t[e].path&&u.createElement(o._,{to:t[e].path},u.createElement(b.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):null}))):null})))})))}function C(e){var t=e.navData;return u.createElement(u.Fragment,null,S(t))}function L(){var e=(0,g.Z)("(max-width: 720px)"),t=(0,l.useStaticQuery)("1120139937");return u.createElement(u.Fragment,null,e?u.createElement(_,null,u.createElement(T,{navData:t})):u.createElement(O,null,u.createElement(C,{navData:t})))}var N=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function T(e){var t=e.navData,n=(N(),u.useState(!1)),r=n[0],a=n[1],o=(0,u.useContext)(y.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return u.createElement(u.Fragment,null,u.createElement(w,{onClick:l(!0)},u.createElement(P,null,u.createElement(h,{size:24,color:o.white}))),u.createElement(i.ZP,{anchor:"right",open:r,onClose:l(!1)},u.createElement("div",{style:{padding:"1rem"}},S(t))))}function M(e){var t=e.children;return u.createElement(v.Z,null,u.createElement(x.vs,null,u.createElement(E,null,u.createElement(L,null),u.createElement(x.IH,{style:{overflow:"scroll"}},t))))}},4731:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var r=n(9756),a=(n(7294),n(3497)),i=n(9079),o={},l={_frontmatter:o},u=i.Z;function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(u,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",null,"Launch Phases"),(0,a.kt)("p",null,"Spanner Protocol has following three major launch phases:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 1 - Hammer Testnet"),": Launched 2020 Q1. A value-free playground for experimental protocol and feature upgrades. Partners can connect to the testnet RPC endpoints for integration. The testnet may have bugs and unexpected reboots. Check out the ",(0,a.kt)("a",{parentName:"p",href:"integration_guide.md"},"integration guide")," for more information."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 2 - Spanner Mainnet"),": Scheduled to Launch in 2021 Q2. The mainnet is the first official release of Spanner Protocol where the native token BOLT will be available in our liquidity pools. Our first growth template BulletTrain will launch alongside with the mainnet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 3 - Spanner Parachain"),": After the official launch of Polkadot parachain integration, we will bid for a parachain slot with community-wide support. The parachain integration is anticipated to benefit Spanner and BOLT token via improved interoperability and pool security. "),(0,a.kt)("h2",null,"Feature Roadmap"),(0,a.kt)("p",null,"We will progressively implement following features and more. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Economy of Scale for DPO usages"),(0,a.kt)("li",{parentName:"ul"},"A broader scope of DPO connectivity to off-chain and cross-chain actions."),(0,a.kt)("li",{parentName:"ul"},"More features for interoperability with other Parachain and integration. "),(0,a.kt)("li",{parentName:"ul"},"Parachain infrastructure like Collator. ")),(0,a.kt)("p",null,"The actual implementation schedule are evolving based on our github issue discussion pages."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-roadmap-mdx-934ede8f2b4d7f2a6b3a.js.map