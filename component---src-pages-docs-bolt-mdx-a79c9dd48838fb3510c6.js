(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[892],{3380:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(5761),a=n(7399),i=n(3491),o=n(1175),l=n(4376),s=n(8032),c=s.default.div.withConfig({displayName:"Sidebar__SideBar",componentId:"sc-1pojqly-0"})(["display:flex;justify-content:flex-end;height:100%;width:30vw;position:fixed;overflow-y:scroll;top:0;left:0;padding-top:80px;border:1px solid ",";background-color:",";"],(function(e){return e.theme.bg3}),(function(e){return e.theme.bg2})),d=n(5444),p=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=(0,p.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=m(e,["color","size"]);return p.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),p.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),p.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),p.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));f.displayName="Menu";var g,h,y,k=f,v=n(9880),b=n(2228),x=JSON.parse('{"r":{"📄 GENERAL":["getting-started","glossary"],"🧑🏼‍💻 LEARN":["roadmap","web3","parameters",{"subcategory":"BASICS","items":["architecture","bolt","governance"]},{"subcategory":"DEFI","items":["dex","yieldfarming"]},{"subcategory":"BULLETTRAIN","items":["bullettrain","dpo-rules"]}],"👛 USE":["spanner-dapp","supported-wallets"],"🔧 BUILD":["build-on-spanner","integration-guide","tools"],"⚖️ MAINTAIN":["network-maintainers","collator"]}}'),w=n(5609),E=s.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),N=s.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100vw;height:100vh;grid-template-columns:30vw auto;grid-column-gap:5vw;grid-row-gap:1rem;justify-content:flex-start;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,r.Z)(["\n  display: flex;\n  "])))})),S=s.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(h||(h=(0,r.Z)(["\n    display: none;\n"])))})),L=s.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(y||(y=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),_=s.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1})),O=s.default.p.withConfig({displayName:"MdxLayout__SidebarCategory",componentId:"sc-613gxx-5"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),T=s.default.p.withConfig({displayName:"MdxLayout__SidebarSubCategory",componentId:"sc-613gxx-6"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:400;letter-spacing:0.7px;color:#707070;word-spacing:0.5rem;']),I=s.default.p.withConfig({displayName:"MdxLayout__SidebarItem",componentId:"sc-613gxx-7"})(['text-align:left;font-family:"Lato","Roboto",sans-serif;font-size:14px;font-weight:bold;letter-spacing:0.28px;color:',";opacity:1;padding-left:",";"],(function(e){return e.theme.text1}),(function(e){return e.nested?"1rem":"0"}));function C(e){var t=(0,p.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return p.createElement(p.Fragment,null,Object.keys(x.r).map((function(e,n){return p.createElement(p.Fragment,null,p.createElement(O,{key:n},e),x.r[e].map((function(e,n){return"string"==typeof e?Object.keys(t).includes(e)?p.createElement("div",{key:n},t[e].path&&p.createElement(l._x,{to:t[e].path},p.createElement(I,{key:t[e].title},t[e].title))):null:"object"==typeof e?p.createElement("div",{key:n},p.createElement(T,null,e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?p.createElement("div",{key:t[e].title},t[e].path&&p.createElement(l._x,{to:t[e].path},p.createElement(I,{key:t[e].title,nested:!0},t[e].title))):null}))):null})))})))}function j(e){var t=e.navData;return p.createElement(p.Fragment,null,p.createElement(c,null,p.createElement("div",{style:{padding:"0 3rem"}},C(t))))}var M=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function B(e){var t=e.navData,n=(M(),p.useState(!1)),r=n[0],a=n[1],o=(0,p.useContext)(s.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return p.createElement(p.Fragment,null,p.createElement(E,{onClick:l(!0)},p.createElement(_,null,p.createElement(k,{size:24,color:o.white}))),p.createElement(i.ZP,{anchor:"right",open:r,onClose:l(!1)},p.createElement("div",{style:{padding:"1rem 2.5rem"}},C(t))))}function P(){var e=(0,v.Z)("(max-width: 720px)"),t=(0,d.useStaticQuery)("1120139937");return p.createElement(p.Fragment,null,e?p.createElement(L,null,p.createElement(B,{navData:t})):p.createElement(S,null,p.createElement(j,{navData:t})))}function D(e){var t=e.children;return p.createElement(b.Z,null,p.createElement(o.Z,{siteTitle:"Spanner Protocol",fixed:!0,withBorder:!0}),p.createElement(N,null,p.createElement(P,null),p.createElement(w.bu,null,t)))}},3972:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var r=n(9756),a=(n(7294),n(3497)),i=n(3380),o={},l={_frontmatter:o},s=i.Z;function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"BOLT Economy"),(0,a.kt)("p",null,"BOLT is the native token of Spanner Protocol. It is primarily used as a utility token for consuming protocol utilities like Smart Contracts and protocol governance."),(0,a.kt)("h3",null,"Precision"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Unit"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Decimal Places"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Plank"),(0,a.kt)("td",{parentName:"tr",align:"right"},"0"),(0,a.kt)("td",{parentName:"tr",align:"right"},"0.0000000010")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Microbolt (uBOLT)"),(0,a.kt)("td",{parentName:"tr",align:"right"},"4"),(0,a.kt)("td",{parentName:"tr",align:"right"},"0.0000010000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Millibolt (mBOLT)"),(0,a.kt)("td",{parentName:"tr",align:"right"},"7"),(0,a.kt)("td",{parentName:"tr",align:"right"},"0.0010000000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BOLT (BOLT)"),(0,a.kt)("td",{parentName:"tr",align:"right"},"10"),(0,a.kt)("td",{parentName:"tr",align:"right"},"1.0000000000")))),(0,a.kt)("h3",null,"Issuance and Distribution"),(0,a.kt)("p",null,"Total BOLT issuance = 1,000,000,000"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Token sales (0%): It is noteworthy that Spanner Protocol was initially developed at the expense of the founding members who provided the initial idea, engineering efforts and capital needed to bootstrap the protocol. Having no initial token sale also gives the benefit that no major token holders can significantly influence the market thus providing token holders more price stability."),(0,a.kt)("li",{parentName:"ul"},"Team (12%): Scheduled to linearly vest to Spanner core developers over a 4-year period after Jan 1st of 2022. This is to ensure both long-term commitment and short term market stability. The list of beneficiary wallets of core developers will be public for community review. "),(0,a.kt)("li",{parentName:"ul"},"Early Growth (28%): Used for creating TravelCabin in BulletTrain or other growth-oriented offerings that incentivse early token holders, partners and projects launching on Spanner.   "),(0,a.kt)("li",{parentName:"ul"},"Protocol Validators (20%): In the ",(0,a.kt)("a",{parentName:"li",href:"/docs/roadmap"},"Spanner Parachain phase"),", Spanner needs to incentives community helping the parachain slot auctioning via ",(0,a.kt)("a",{parentName:"li",href:"https://defidao.medium.com/polkadot-dot-reveals-details-of-initial-parachain-offering-ipo-launch-69a8aa23ee88"},"Initial Parachain Offering")," or an equivalent model."),(0,a.kt)("li",{parentName:"ul"},"Operation Reserve (40%): It is of vital importance for the protocol to be agile (futureproof) to future technological disruption or token model innovations. The reserve gives Spanner Protocol the flexibility to be on par with future innovations. Reserve usage will be determined through the formal governance model. ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-bolt-mdx-a79c9dd48838fb3510c6.js.map