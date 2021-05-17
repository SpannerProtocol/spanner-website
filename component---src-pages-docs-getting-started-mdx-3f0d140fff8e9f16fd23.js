(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[478],{3380:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(5761),o=n(7399),a=n(5156),i=n(1175),l=n(8522),s=n(8032),c=s.default.div.withConfig({displayName:"Sidebar__SideBar",componentId:"sc-1pojqly-0"})(["display:flex;justify-content:flex-end;height:100%;width:30vw;position:fixed;overflow-y:scroll;top:0;left:0;padding-top:80px;border:1px solid ",";background-color:",";"],(function(e){return e.theme.bg3}),(function(e){return e.theme.bg2})),u=n(5444),p=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=(0,p.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,i=m(e,["color","size"]);return p.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),p.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));f.displayName="Menu";var h,y,g,v=f,x=n(9880),b=n(2228),w=JSON.parse('{"r":{"📄 GENERAL":["getting-started","glossary"],"🧑🏼‍💻 LEARN":["roadmap","web3","parameters",{"subcategory":"BASICS","items":["architecture","bolt","governance"]},{"subcategory":"DEFI","items":["dex","yieldfarming"]},{"subcategory":"BULLETTRAIN","items":["bullettrain","dpo-rules"]}],"👛 USE":["spanner-dapp","supported-wallets"],"🔧 BUILD":["build-on-spanner","integration-guide","tools"],"⚖️ MAINTAIN":["network-maintainers","collator"]}}'),k=n(5609),E=s.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),S=s.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100vw;height:100vh;grid-template-columns:30vw auto;grid-column-gap:5vw;grid-row-gap:1rem;justify-content:flex-start;",";"],(function(e){return e.theme.mediaWidth.upToSmall(h||(h=(0,r.Z)(["\n  display: flex;\n  "])))})),j=s.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(y||(y=(0,r.Z)(["\n    display: none;\n"])))})),_=s.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),C=s.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1})),N=s.default.p.withConfig({displayName:"MdxLayout__SidebarCategory",componentId:"sc-613gxx-5"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),L=s.default.p.withConfig({displayName:"MdxLayout__SidebarSubCategory",componentId:"sc-613gxx-6"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),I=s.default.p.withConfig({displayName:"MdxLayout__SidebarItem",componentId:"sc-613gxx-7"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:bold;letter-spacing:0.28px;color:',";opacity:1;padding-left:",";"],(function(e){return e.theme.text1}),(function(e){return e.nested?"1rem":"0"}));function O(e){var t=(0,p.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return p.createElement(p.Fragment,null,Object.keys(w.r).map((function(e,n){return p.createElement(p.Fragment,null,p.createElement(N,{key:n},e),w.r[e].map((function(e,n){return"string"==typeof e?Object.keys(t).includes(e)?p.createElement("div",{key:n},t[e].path&&p.createElement(l._,{to:t[e].path},p.createElement(I,{key:t[e].title},t[e].title))):null:"object"==typeof e?p.createElement("div",{key:n},p.createElement(L,null,e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?p.createElement("div",{key:t[e].title},t[e].path&&p.createElement(l._,{to:t[e].path},p.createElement(I,{key:t[e].title,nested:!0},t[e].title))):null}))):null})))})))}function M(e){var t=e.navData;return p.createElement(p.Fragment,null,p.createElement(c,null,p.createElement("div",{style:{padding:"0 3rem"}},O(t))))}var T=(0,o.Z)({list:{width:250},fullList:{width:"auto"}});function W(e){var t=e.navData,n=(T(),p.useState(!1)),r=n[0],o=n[1],i=(0,p.useContext)(s.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(e)}};return p.createElement(p.Fragment,null,p.createElement(E,{onClick:l(!0)},p.createElement(C,null,p.createElement(v,{size:24,color:i.white}))),p.createElement(a.ZP,{anchor:"right",open:r,onClose:l(!1)},p.createElement("div",{style:{padding:"1rem 2.5rem"}},O(t))))}function Z(){var e=(0,x.Z)("(max-width: 720px)"),t=(0,u.useStaticQuery)("1120139937");return p.createElement(p.Fragment,null,e?p.createElement(_,null,p.createElement(W,{navData:t})):p.createElement(j,null,p.createElement(M,{navData:t})))}function D(e){var t=e.children;return p.createElement(b.Z,null,p.createElement(i.Z,{siteTitle:"Spanner Protocol",fixed:!0,withBorder:!0}),p.createElement(S,null,p.createElement(Z,null),p.createElement(k.bu,null,t)))}},5264:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return c}});var r=n(9756),o=(n(7294),n(3497)),a=n(3380),i={},l={_frontmatter:i},s=a.Z;function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Getting Started"),(0,o.kt)("p",null,"We maintain a list of articles about our vision, roadmap and features. If you have not read our ",(0,o.kt)("a",{parentName:"p",href:"https://spannerprotocol.medium.com/"},"Medium blogs"),", then you are recommended to start there. "),(0,o.kt)("h2",null,"What's Spanner's Vision and Strategy?"),(0,o.kt)("p",null,"Spanner seeks to make crypto and blockchain more accessible to everyone. We believe that in order for the entire crypto industry to flourish, the technology needs to be more accessible to mainstream users. ",(0,o.kt)("a",{parentName:"p",href:"https://spannerprotocol.medium.com/solving-the-contract-trilemma-33e493f56596"},"Solving the Contract Trilemma")," outlines how we've constructed and classified our problem statement so start there for a deeper understanding of our vision and mission."),(0,o.kt)("p",null,"To achieve our vision, we need more than just technological innovation. We need the means to attract end-users with real adoption. Thus, our first strategic move is to help projects launch and grow on Spanner Protocol. By making it easier for projects, especially those that want the benefits of blockchain and crypto without having to build it themselves, we're confident that the quantity and quality of end-user applications will improve in order to meet mainstream user requirements. Our success is intricately tied to the success of the projects using our protocol."),(0,o.kt)("h2",null,"Why Projects want to launch on Spanner?"),(0,o.kt)("p",null,"Our primary strategy is to ",(0,o.kt)("a",{parentName:"p",href:"https://spannerprotocol.medium.com/how-spanner-helps-projects-to-succeed-3eb00d6a7c74"},"help projects succeed launching on Spanner"),". "),(0,o.kt)("p",null,"We believe that a successful decentralized crypto project needs 3 key elements: asset, liquidity and growth. Specifically, a crypto project needs to issue their assets (e.g. tokens), provision liquidity for the tokens through exchange platforms and devise a strategy to grow their community (e.g. users/token holders). "),(0,o.kt)("p",null,"Spanner provides projects with asset, liquidity and growth, ",(0,o.kt)("strong",{parentName:"p"},"3-in-1 on Spanner Protocol"),". This can be done with little-to-no code. Thus, we make it super easy and accessible for new projects to get started."),(0,o.kt)("h2",null,"How does Spanner work?"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://spannerprotocol.medium.com/spanner-architecture-explained-55655b8d0ab4"},"Spanner Architecture Explained"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-getting-started-mdx-3f0d140fff8e9f16fd23.js.map