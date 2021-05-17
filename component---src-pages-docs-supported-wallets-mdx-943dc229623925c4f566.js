(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[538],{3380:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(5761),a=n(7399),o=n(5156),l=n(1175),i=n(8522),s=n(8032),u=s.default.div.withConfig({displayName:"Sidebar__SideBar",componentId:"sc-1pojqly-0"})(["display:flex;justify-content:flex-end;height:100%;width:30vw;position:fixed;overflow-y:scroll;top:0;left:0;padding-top:80px;border:1px solid ",";background-color:",";"],(function(e){return e.theme.bg3}),(function(e){return e.theme.bg2})),c=n(5444),p=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=(0,p.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,l=m(e,["color","size"]);return p.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),p.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));f.displayName="Menu";var h,y,g,w=f,x=n(9880),v=n(2228),b=JSON.parse('{"r":{"📄 GENERAL":["getting-started","glossary"],"🧑🏼‍💻 LEARN":["roadmap","web3","parameters",{"subcategory":"BASICS","items":["architecture","bolt","governance"]},{"subcategory":"DEFI","items":["dex","yieldfarming"]},{"subcategory":"BULLETTRAIN","items":["bullettrain","dpo-rules"]}],"👛 USE":["spanner-dapp","supported-wallets"],"🔧 BUILD":["build-on-spanner","integration-guide","tools"],"⚖️ MAINTAIN":["network-maintainers","collator"]}}'),k=n(5609),E=s.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),S=s.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100vw;height:100vh;grid-template-columns:30vw auto;grid-column-gap:5vw;grid-row-gap:1rem;justify-content:flex-start;",";"],(function(e){return e.theme.mediaWidth.upToSmall(h||(h=(0,r.Z)(["\n  display: flex;\n  "])))})),_=s.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(y||(y=(0,r.Z)(["\n    display: none;\n"])))})),C=s.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),N=s.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1})),L=s.default.p.withConfig({displayName:"MdxLayout__SidebarCategory",componentId:"sc-613gxx-5"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),I=s.default.p.withConfig({displayName:"MdxLayout__SidebarSubCategory",componentId:"sc-613gxx-6"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),D=s.default.p.withConfig({displayName:"MdxLayout__SidebarItem",componentId:"sc-613gxx-7"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:bold;letter-spacing:0.28px;color:',";opacity:1;padding-left:",";"],(function(e){return e.theme.text1}),(function(e){return e.nested?"1rem":"0"}));function W(e){var t=(0,p.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return p.createElement(p.Fragment,null,Object.keys(b.r).map((function(e,n){return p.createElement(p.Fragment,null,p.createElement(L,{key:n},e),b.r[e].map((function(e,n){return"string"==typeof e?Object.keys(t).includes(e)?p.createElement("div",{key:n},t[e].path&&p.createElement(i._,{to:t[e].path},p.createElement(D,{key:t[e].title},t[e].title))):null:"object"==typeof e?p.createElement("div",{key:n},p.createElement(I,null,e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?p.createElement("div",{key:t[e].title},t[e].path&&p.createElement(i._,{to:t[e].path},p.createElement(D,{key:t[e].title,nested:!0},t[e].title))):null}))):null})))})))}function M(e){var t=e.navData;return p.createElement(p.Fragment,null,p.createElement(u,null,p.createElement("div",{style:{padding:"0 3rem"}},W(t))))}var O=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function j(e){var t=e.navData,n=(O(),p.useState(!1)),r=n[0],a=n[1],l=(0,p.useContext)(s.ThemeContext),i=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return p.createElement(p.Fragment,null,p.createElement(E,{onClick:i(!0)},p.createElement(N,null,p.createElement(w,{size:24,color:l.white}))),p.createElement(o.ZP,{anchor:"right",open:r,onClose:i(!1)},p.createElement("div",{style:{padding:"1rem 2.5rem"}},W(t))))}function T(){var e=(0,x.Z)("(max-width: 720px)"),t=(0,c.useStaticQuery)("1120139937");return p.createElement(p.Fragment,null,e?p.createElement(C,null,p.createElement(j,{navData:t})):p.createElement(_,null,p.createElement(M,{navData:t})))}function Z(e){var t=e.children;return p.createElement(v.Z,null,p.createElement(l.Z,{siteTitle:"Spanner Protocol",fixed:!0,withBorder:!0}),p.createElement(S,null,p.createElement(T,null),p.createElement(k.bu,null,t)))}},5249:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return u}});var r=n(9756),a=(n(7294),n(3497)),o=n(3380),l={},i={_frontmatter:l},s=o.Z;function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(s,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Supported Wallets on Spanner's Dapp"),(0,a.kt)("p",null,"Links to Spanner's DApp will be made available here after its official launch."),(0,a.kt)("h2",null,"Wallets"),(0,a.kt)("p",null,"While waiting wallet support for Polkadot/Subtrate matures, Spanner has created a custodial wallet service to improve the experience of users on Spanner.\nSpanner will actively add additional wallet options as they become available. "),(0,a.kt)("h3",null,"Custodial Wallets"),(0,a.kt)("p",null,"Users can use any Ethereum wallet that is available via ",(0,a.kt)("a",{parentName:"p",href:"https://walletconnect.org/wallets"},"WalletConnect")," to authenticate with Spanner.\nWhen a user uses their Ethereum wallet, a keypair is generated for them by Spanner using Hierarchical Determinstic (HD) Key Derivation and\nis not stored. If user wants to use other wallet options in the future to have control over their own keys, they can do so and transfer their balances over."),(0,a.kt)("h3",null,"Universal Signer Wallets via Desktop Browser Extensions"),(0,a.kt)("p",null,"We currently support desktop universal signers such as PolkadotJS and MathWallet.\nThis is for users with experience with crypto wallets and wants control over their own keys.\nUsing the wallet you can create your own account with the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Network"),": Polkadot Substrate"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Key Derivation and Signing Algorithm"),": Schnorrkel/Ristretto x25519 (sr25519)")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-supported-wallets-mdx-943dc229623925c4f566.js.map