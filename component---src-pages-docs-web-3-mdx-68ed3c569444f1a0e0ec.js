(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[635],{9079:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(5761),a=n(7399),o=n(5156),l=n(8522),i=n(5444),u=n(7294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=(0,u.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=m(e,["color","size"]);return u.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),u.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));s.displayName="Menu";var d,p,f,g=s,y=n(9880),h=n(8032),v=n(9487),x=JSON.parse('{"r":{"General":["getting-started","glossary"],"Learn":["roadmap","web3","parameters",{"subcategory":"Basics","items":["architecture","bolt","governance"]},{"subcategory":"DeFi","items":["dex","yieldfarming"]},{"subcategory":"BulletTrain","items":["bullettrain","dpo-rules"]}],"Use":["spanner-dapp","supported-wallets"],"Build":["build-on-spanner","integration-guide","tools"],"Maintain":["network-maintainers","collator"]}}'),b=n(3600),E=n(5609),w=h.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),k=h.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100%;grid-template-columns:min(180px) auto;grid-column-gap:1rem;grid-row-gap:1rem;",";"],(function(e){return e.theme.mediaWidth.upToSmall(d||(d=(0,r.Z)(["\n  display: flex;\n  "])))})),_=h.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(p||(p=(0,r.Z)(["\n    display: none;\n"])))})),O=h.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(f||(f=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),C=h.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1}));function j(e){var t=(0,u.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return u.createElement(u.Fragment,null,Object.keys(x.r).map((function(e,n){return u.createElement(u.Fragment,null,u.createElement(b.H9,{key:n,fontSize:"20px",padding:"0.5rem 0"},e),x.r[e].map((function(e){return"string"==typeof e?Object.keys(t).includes(e)?u.createElement(u.Fragment,null,t[e].path&&u.createElement(l._,{to:t[e].path},u.createElement(b.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):null:"object"==typeof e?u.createElement(u.Fragment,null,u.createElement(b.H9,{fontSize:"16px",padding:"0.5rem 0"},e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?u.createElement(u.Fragment,null,t[e].path&&u.createElement(l._,{to:t[e].path},u.createElement(b.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):(console.log(e),null)}))):null})))})))}function M(e){var t=e.navData;return u.createElement(u.Fragment,null,j(t))}function S(){var e=(0,y.Z)("(max-width: 720px)"),t=(0,i.useStaticQuery)("1120139937");return console.log(t),u.createElement(u.Fragment,null,e?u.createElement(O,null,u.createElement(Z,{navData:t})):u.createElement(_,null,u.createElement(M,{navData:t})))}var L=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function Z(e){var t=e.navData,n=(L(),u.useState(!1)),r=n[0],a=n[1],l=(0,u.useContext)(h.ThemeContext),i=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return u.createElement(u.Fragment,null,u.createElement(w,{onClick:i(!0)},u.createElement(C,null,u.createElement(g,{size:24,color:l.white}))),u.createElement(o.ZP,{anchor:"right",open:r,onClose:i(!1)},u.createElement("div",{style:{padding:"1rem"}},j(t))))}function D(e){var t=e.children;return u.createElement(v.Z,null,u.createElement(E.vs,null,u.createElement(k,null,u.createElement(S,null),u.createElement(E.IH,{style:{overflow:"scroll"}},t))))}},1385:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var r=n(9756),a=(n(7294),n(3497)),o=n(9079),l={},i={_frontmatter:l},u=o.Z;function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(u,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"https://spannerprotocol.medium.com/spanner-polkadot-and-the-web3-adventure-5bd9c880e084"},"Spanner, Polkadot and Web3"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-web-3-mdx-68ed3c569444f1a0e0ec.js.map