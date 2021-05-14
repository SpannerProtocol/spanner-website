(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[976],{9079:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(5761),a=n(7399),i=n(5156),o=n(8522),l=n(5444),s=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=(0,s.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=c(e,["color","size"]);return s.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),s.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),s.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));d.displayName="Menu";var m,p,g,h=d,f=n(9880),y=n(8032),v=n(798),b=JSON.parse('{"r":{"General":["getting-started","glossary"],"Learn":["roadmap","web3","parameters",{"subcategory":"Basics","items":["architecture","bolt","governance"]},{"subcategory":"DeFi","items":["dex","yieldfarming"]},{"subcategory":"BulletTrain","items":["bullettrain","dpo-rules"]}],"Use":["spanner-dapp","supported-wallets"],"Build":["build-on-spanner","integration-guide","tools"],"Maintain":["network-maintainers","collator"]}}'),w=n(3600),k=n(5609),O=y.default.div.withConfig({displayName:"MdxLayout__HamburgerWrapper",componentId:"sc-613gxx-0"})(["cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]),x=y.default.div.withConfig({displayName:"MdxLayout__DocsGrid",componentId:"sc-613gxx-1"})(["display:grid;width:100%;grid-template-columns:min(180px) auto;grid-column-gap:1rem;grid-row-gap:1rem;",";"],(function(e){return e.theme.mediaWidth.upToSmall(m||(m=(0,r.Z)(["\n  display: flex;\n  "])))})),T=y.default.div.withConfig({displayName:"MdxLayout__DesktopWrapper",componentId:"sc-613gxx-2"})(["display:initial;",";"],(function(e){return e.theme.mediaWidth.upToSmall(p||(p=(0,r.Z)(["\n    display: none;\n"])))})),D=y.default.div.withConfig({displayName:"MdxLayout__MobileWrapper",componentId:"sc-613gxx-3"})(["display:none;",";"],(function(e){return e.theme.mediaWidth.upToSmall(g||(g=(0,r.Z)(["\n    display: initial;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n"])))})),P=y.default.div.withConfig({displayName:"MdxLayout__IconWrapper",componentId:"sc-613gxx-4"})(["border:1 solid transparent;border-radius:4px;padding:0.35rem;background:",";"],(function(e){return e.theme.primary1}));function E(e){var t=(0,s.useMemo)((function(){var t={};return e.allMdx.nodes.forEach((function(e){if(e.frontmatter.path){var n=e.frontmatter.path.split("/").reverse()[0];t[n]=e.frontmatter}})),t}),[e]);return s.createElement(s.Fragment,null,Object.keys(b.r).map((function(e,n){return s.createElement(s.Fragment,null,s.createElement(w.H9,{key:n,fontSize:"20px",padding:"0.5rem 0"},e),b.r[e].map((function(e){return"string"==typeof e?Object.keys(t).includes(e)?s.createElement(s.Fragment,null,t[e].path&&s.createElement(o._,{to:t[e].path},s.createElement(w.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):null:"object"==typeof e?s.createElement(s.Fragment,null,s.createElement(w.H9,{fontSize:"16px",padding:"0.5rem 0"},e.subcategory),e.items.map((function(e){return Object.keys(t).includes(e)?s.createElement(s.Fragment,null,t[e].path&&s.createElement(o._,{to:t[e].path},s.createElement(w.xv,{key:t[e].title,padding:"0.15rem 0"},t[e].title))):null}))):null})))})))}function C(e){var t=e.navData;return s.createElement(s.Fragment,null,E(t))}function j(){var e=(0,f.Z)("(max-width: 720px)"),t=(0,l.useStaticQuery)("1120139937");return s.createElement(s.Fragment,null,e?s.createElement(D,null,s.createElement(_,{navData:t})):s.createElement(T,null,s.createElement(C,{navData:t})))}var N=(0,a.Z)({list:{width:250},fullList:{width:"auto"}});function _(e){var t=e.navData,n=(N(),s.useState(!1)),r=n[0],a=n[1],o=(0,s.useContext)(y.ThemeContext),l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a(e)}};return s.createElement(s.Fragment,null,s.createElement(O,{onClick:l(!0)},s.createElement(P,null,s.createElement(h,{size:24,color:o.white}))),s.createElement(i.ZP,{anchor:"right",open:r,onClose:l(!1)},s.createElement("div",{style:{padding:"1rem"}},E(t))))}function B(e){var t=e.children;return s.createElement(v.Z,null,s.createElement(k.vs,null,s.createElement(x,null,s.createElement(j,null),s.createElement(k.IH,{style:{overflow:"scroll"}},t))))}},5145:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return u}});var r=n(9756),a=(n(7294),n(3497)),i=n(9079),o={},l={_frontmatter:o},s=i.Z;function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BulletTrain")," (a Growth Template) is an evolutionary viral growth marketing model running on the Spanner Blockchain.\nBulletTrain includes (1) ",(0,a.kt)("strong",{parentName:"p"},"TravelCabin")," for projects to provide as incentive to its community, and\n(2) ",(0,a.kt)("strong",{parentName:"p"},"DPO")," (Decentralized Programmable Organization) - an autonomous organizational structure that enables fair and scalable community collaboration\nbased on ",(0,a.kt)("em",{parentName:"p"},"piece-rate")," incentives.\nTogether, they allow projects to achieve 10x community growth over traditional campaigns such as airdrops and influencer promotions, where effectiveness is difficult to track and tokens are often misused.\nBulletTrain is designed with the goal of helping projects grow their ",(0,a.kt)("em",{parentName:"p"},"communities through communities"),"."),(0,a.kt)("br",null),(0,a.kt)("br",null),"Projects can run their own BulletTrain by offering **TravelCabins** of different **TravelClasses** (reward tiers) to **Passengers** (users) and DPOs (groups of Passengers). It's easier and encouraged for passengers to purchase a TravelCabin with others as a DPO. Once boarded, passengers will start receiving their **Benefits** until the end of their journey.",(0,a.kt)("h2",null,"TravelCabins"),(0,a.kt)("p",null,"TravelCabins are reward generating packages of different classes offered to early adopters. They are designed to incentivize communities and improve liquidity. Higher tiered travel classes generate higher rewards and has a higher purchasing requirement."),(0,a.kt)("br",null),(0,a.kt)("br",null),"Travel Cabins offer the following benefits to its passengers in varying amounts depending on the cabin's **Travel Class**:",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Periodic ",(0,a.kt)("strong",{parentName:"li"},"yields")," until the ride ends"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ticket Fares")," back when the ride ends. "),(0,a.kt)("li",{parentName:"ul"},"If the passenger is a DPO, the Travel Cabin will give an extra ",(0,a.kt)("strong",{parentName:"li"},"Bonus")," as a boarding gift for its efforts in growing the community.")),(0,a.kt)("p",null,"BulletTrain offers ",(0,a.kt)("strong",{parentName:"p"},"Milestone Rewards")," to all TravelCabin passengers triggered by Ticket Fare collection milestones.\nOn reaching a milestone, the reward is distributed to all boarded passengers.\nIn other words, late-boarding passengers won't receive any past Milestone Rewards."),(0,a.kt)("br",null),(0,a.kt)("br",null),"Passengers must withdraw their yields from the Travel Cabins at least every 7-days. Otherwise, 1% of the accumulated unwithdrawn yield will go to the user who withdraws on the Passenger's behalf - a rule referred to as **Treasure Hunting**.",(0,a.kt)("h2",null,"A brief introduction to DPO"),(0,a.kt)("p",null," DPO is an abbreviation for Decentralized Programmable Organization.\nThrough DPO, the community sets their own objectives, incentives and crowdfunding goals.\nBy allowing this, communities can adapt and create the most effective incentives to help projects acquire new users.  "),(0,a.kt)("h2",null,"Decentralized Programmable Organization (DPO)"),(0,a.kt)("p",null,'DPO is a novel crowdfunding model extending from affiliate marketing.\nIt offers a gateway for communities to collectively purchase better incentive packages they could not have afforded individually.\nDPO allows communities to program their own objectives and incentive structures, allowing greater market efficiencies over regular affiliate marketing.\nDPO enables a new approach to growth where "projects grow projects, communities grow communities."'),(0,a.kt)("br",null),(0,a.kt)("br",null),"DPO is **fully open**, **fairly incentivized** and **infinitely scalable**:",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any user can create a DPO to purchase an incentive package to earn Management Fees."),(0,a.kt)("li",{parentName:"ul"},"Any user can invite others to join any DPO to earn referral bonus."),(0,a.kt)("li",{parentName:"ul"},"Any user can join a DPO to earn incentive package rewards. Users can join the DPO as an individual or create another DPO to join. The latter forms a scalable ",(0,a.kt)("strong",{parentName:"li"},"DPO Chain")," pattern that enables crowdfunds to include other crowdfunds to shoot for a larger goal. A DPO Chain can extend to ",(0,a.kt)("strong",{parentName:"li"},"any length")," by chaining more DPOs.")),(0,a.kt)("p",null,"In BulletTrain, DPOs are communities that try to purchase a TravelCabin together. This empowers passengers to purchase TravelCabins that they could not have afforded individually. By utilizing DPOs, passengers are incentivized to invite more passengers to the project's BulletTrain."),(0,a.kt)("br",null),(0,a.kt)("br",null),"Check this introductory [article](https://spannerprotocol.medium.com/introducing-dpo-e4ca0730e1c) for the design rationals and [DPO Rules](dpo_rule.md) for more details.",(0,a.kt)("p",null,"|"," ",(0,a.kt)("img",{parentName:"p",src:"/img/bullettrainonepage.png",alt:"BulletTrain Overview"})," ","|","\n","|",":--:","|","\n| An Schematic Overview of BulletTrain. Data shown for illustrations only |"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-bullettrain-mdx-a92852d090b68d38f936.js.map