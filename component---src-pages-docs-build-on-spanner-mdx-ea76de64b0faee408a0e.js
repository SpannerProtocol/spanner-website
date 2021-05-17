(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[191],{3380:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(5761),o=n(7399),a=n(5156),i=n(1175),l=n(8522),c=n(8032),u=c.default.div.withConfig({displayName:"Sidebar__SideBar",componentId:"sc-1pojqly-0"})(["display:flex;justify-content:flex-end;height:100%;width:30vw;position:fixed;overflow-y:scroll;top:0;left:0;padding-top:80px;border:1px solid ",";background-color:",";"],(function(e){return e.theme.bg3}),(function(e){return e.theme.bg2})),s=n(5444),p=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=(0,p.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,i=m(e,["color","size"]);return p.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),p.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));f.displayName="Menu";var y,g,h,x=f,b=n(9880),v=n(2228),w=JSON.parse('{"r":{"📄 GENERAL":["getting-started","glossary"],"🧑🏼‍💻 LEARN":["roadmap","web3","parameters",{"subcategory":"BASICS","items":["architecture","bolt","governance"]},{"subcategory":"DEFI","items":["dex","yieldfarming"]},{"subcategory":"BULLETTRAIN","items":["bullettrain","dpo-rules"]}],"👛 USE":["spanner-dapp","supported-wallets"],"🔧 BUILD":["build-on-spanner","integration-guide","tools"],"⚖️ MAINTAIN":["network-maintainers","collator"]}}'),E=n(5609),k=c.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),S=c.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100vw;height:100vh;grid-template-columns:30vw auto;grid-column-gap:5vw;grid-row-gap:1rem;justify-content:flex-start;",";"],(function(e){return e.theme.mediaWidth.upToSmall(y||(y=(0,r.Z)(["\n  display: flex;\n  "])))})),_=c.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,r.Z)(["\n    display: none;\n"])))})),j=c.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(h||(h=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),L=c.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1})),C=c.default.p.withConfig({displayName:"MdxLayout__SidebarCategory",componentId:"sc-613gxx-5"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),I=c.default.p.withConfig({displayName:"MdxLayout__SidebarSubCategory",componentId:"sc-613gxx-6"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),O=c.default.p.withConfig({displayName:"MdxLayout__SidebarItem",componentId:"sc-613gxx-7"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:bold;letter-spacing:0.28px;color:',";opacity:1;padding-left:",";"],(function(e){return e.theme.text1}),(function(e){return e.nested?"1rem":"0"}));function M(e){var t=(0,p.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return p.createElement(p.Fragment,null,Object.keys(w.r).map((function(e,n){return p.createElement(p.Fragment,null,p.createElement(C,{key:n},e),w.r[e].map((function(e,n){return"string"==typeof e?Object.keys(t).includes(e)?p.createElement("div",{key:n},t[e].path&&p.createElement(l._,{to:t[e].path},p.createElement(O,{key:t[e].title},t[e].title))):null:"object"==typeof e?p.createElement("div",{key:n},p.createElement(I,null,e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?p.createElement("div",{key:t[e].title},t[e].path&&p.createElement(l._,{to:t[e].path},p.createElement(O,{key:t[e].title,nested:!0},t[e].title))):null}))):null})))})))}function N(e){var t=e.navData;return p.createElement(p.Fragment,null,p.createElement(u,null,p.createElement("div",{style:{padding:"0 3rem"}},M(t))))}var T=(0,o.Z)({list:{width:250},fullList:{width:"auto"}});function D(e){var t=e.navData,n=(T(),p.useState(!1)),r=n[0],o=n[1],i=(0,p.useContext)(c.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(e)}};return p.createElement(p.Fragment,null,p.createElement(k,{onClick:l(!0)},p.createElement(L,null,p.createElement(x,{size:24,color:i.white}))),p.createElement(a.ZP,{anchor:"right",open:r,onClose:l(!1)},p.createElement("div",{style:{padding:"1rem 2.5rem"}},M(t))))}function Z(){var e=(0,b.Z)("(max-width: 720px)"),t=(0,s.useStaticQuery)("1120139937");return p.createElement(p.Fragment,null,e?p.createElement(j,null,p.createElement(D,{navData:t})):p.createElement(_,null,p.createElement(N,{navData:t})))}function W(e){var t=e.children;return p.createElement(v.Z,null,p.createElement(i.Z,{siteTitle:"Spanner Protocol",fixed:!0,withBorder:!0}),p.createElement(S,null,p.createElement(Z,null),p.createElement(E.bu,null,t)))}},5442:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return u}});var r=n(9756),o=(n(7294),n(3497)),a=n(3380),i={},l={_frontmatter:i},c=a.Z;function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Build Projects on Spanner"),(0,o.kt)("p",null,"Quickly build high-quality crypto projects on Spanner. As Spanner's catalogue of components grow,\nthey will be made accessible to projects through our one-click-deployment marketplace. "),(0,o.kt)("h2",null,"Getting Started"),(0,o.kt)("p",null,"Projects can quickly create their token and then add it to Spanner DEX Liquidity Pools in minutes.\nThis can be done without code and will be made available via our web application. "),(0,o.kt)("h2",null,"Open collaboration"),(0,o.kt)("p",null,"After Mainnet launch, open-source developers will be able to collaborate with us on creating components\nto solve problems for their own business verticals. The more projects, the more components.\nSince inception, we envisioned having a component for every challenge and this mission will require help from our open-source community.\nWe believe that Spanner's success is intricately bound to the success of its projects. "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-build-on-spanner-mdx-ea76de64b0faee408a0e.js.map