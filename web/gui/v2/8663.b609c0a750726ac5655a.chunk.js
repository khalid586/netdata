!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b82288bf-79d9-4fc1-8e06-dde6ec0c4cd7",e._sentryDebugIdIdentifier="sentry-dbid-b82288bf-79d9-4fc1-8e06-dde6ec0c4cd7")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"e09374f80294d71bfeb7934cee1dd8bf8af6341c"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[8663],{36925:function(e,t,n){n.d(t,{vV:function(){return r}});n(74916),n(77601);var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=function(e){return!!e&&a.test(e)}},86414:function(e,t,n){n.d(t,{m:function(){return d}});var a=n(93433),r=n(29439),o=(n(26699),n(32023),n(92222),n(21249),n(57640),n(9924),n(57327),n(41539),n(88449),n(2490),n(59849),n(74916),n(15306),n(67294)),i=n(64969),l=n(36925),c=(0,n(71893).default)(i.Select).withConfig({displayName:"styled__StyledSelect",componentId:"sc-bkkrx-0"})(["width:100%;"]),s=(n(66992),n(70189),n(78783),n(88921),n(96248),n(13599),n(11477),n(64362),n(15389),n(90401),n(45164),n(91238),n(54837),n(87485),n(56767),n(76651),n(61437),n(35285),n(39865),n(33948),n(51532),n(10072),n(23042),n(99137),n(71957),n(96306),n(103),n(74592),n(58276),n(35082),n(12813),n(18222),n(38563),n(50336),n(7512),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name";return e.length?"string"===typeof e[0]?(0,a.Z)(new Set(e)):(0,a.Z)(new Map(e.map((function(e){return[e[t],e]}))).values()):[]}),u=[],d=function(e){var t=e.invitations,n=e.setInvitations,d=(0,o.useState)(u),f=(0,r.Z)(d,2),m=f[0],p=f[1],v=(0,o.useState)(""),b=(0,r.Z)(v,2),g=b[0],h=b[1],y=(0,o.useState)(""),E=(0,r.Z)(y,2),w=E[0],x=E[1],k=function(){return x("")},C=(0,o.useCallback)((function(e){h(e.toLowerCase())}),[h]),Z=o.useCallback((function(e){var t=e.emails,a=void 0===t?u:t,r=e.invitations,o=void 0===r?u:r;if(e.isEmailValid){var i=s(a),l=s(o);return p(i),n(l),h(""),void k()}x("Invalid Email")}),[n]),S=(0,o.useCallback)((function(e){return(0,l.vV)(e)&&!m.includes(e)}),[m]),O=(0,o.useCallback)((function(e){Z({isEmailValid:!0,emails:e.map((function(e){return e.value})),invitations:e.map((function(e){return{email:e.value,name:e.value.split("@")[0]}}))})}),[p]),I=(0,o.useCallback)((function(e){var n=e.clipboardData.getData("Text").toLowerCase().replace(/ /g,",").replace(/,,/g,",").split(",").filter((function(e){return S(e)}))||u;Z({emails:[].concat((0,a.Z)(m),(0,a.Z)(n)),invitations:[].concat((0,a.Z)(t),(0,a.Z)(n.map((function(e){return{email:e,name:e.split("@")[0]}})))),isEmailValid:n.length>0}),e.preventDefault()}),[m,t,S,Z]),j=(0,o.useCallback)((function(e){if(g)switch(k(),e.key){case"Enter":case"Tab":case",":case" ":Z({emails:[].concat((0,a.Z)(m),[g]),invitations:[].concat((0,a.Z)(t),[{email:g,name:g.split("@")[0]}]),isEmailValid:S(g)}),e.preventDefault()}}),[m,g,t,S,Z]);return o.createElement(i.Flex,{justifyContent:"space-between",column:!0,onPaste:I},o.createElement(c,{components:{DropdownIndicator:null},inputValue:g,isClearable:!0,isMulti:!0,menuIsOpen:!1,onBlur:function(){g&&Z({emails:[].concat((0,a.Z)(m),[g]),invitations:[].concat((0,a.Z)(t),[{email:g,name:g.split("@")[0]}]),isEmailValid:S(g)})},onChange:O,onInputChange:C,onKeyDown:j,onClear:function(){p(u),n(u)},placeholder:"Enter an email and hit enter",value:m.map((function(e){return{label:t=e,value:t};var t}))}),w&&o.createElement(i.Text,{color:"error"},w))}},18663:function(e,t,n){n.d(t,{l:function(){return D}});var a=n(87462),r=n(15861),o=n(29439),i=n(64687),l=n.n(i),c=(n(21249),n(57640),n(9924),n(57327),n(41539),n(88449),n(2490),n(59849),n(92222),n(67294)),s=n(64969),u=n(92432),d=n(74855),f=n(52631),m=n(90025),p=n(91008),v=n(86414),b=n(74059),g=n(95383),h=n(35838),y=n(53338),E=n(16645),w=n(7693),x=n(92903),k=n(87181),C=function(e){var t=e.id,n=e.handleDelete,a=(0,h.D)(t,"email");return c.createElement(s.Flex,{justifyContent:"between",alignItems:"center"},c.createElement(s.Flex,{gap:4},c.createElement(s.Icon,{color:"text",name:"check"}),c.createElement(s.Text,null,a)),c.createElement(s.Button,{flavour:"borderless",icon:"trashcan",onClick:function(){return n({email:a})}}))},Z=n(93017),S=n(36925),O=n(33335),I=n(8048),j=n(46475),T=function(e){var t=e.email;return(0,S.vV)(t)},_={header:"Invitations",text:"Invitations successfully sent!"},D=function(e){var t=e.onClose,n=e.isSubmodal,i=void 0!==n&&n,S=(0,b.OS)(),D=S.id,R=S.name,P=S.slug,B=(0,g.yE)(),U=(0,c.useState)(B),N=(0,o.Z)(U,2),V=N[0],F=N[1],A=(0,c.useState)([]),L=(0,o.Z)(A,2),M=L[0],q=L[1],Q=(0,c.useState)([]),Y=(0,o.Z)(Q,2),G=Y[0],J=Y[1],z=(0,c.useState)(),H=(0,o.Z)(z,2),K=H[0],$=H[1],W=(0,h.E)(D),X=(0,o.Z)(W,4),ee=X[0],te=X[1],ne=X[2],ae=X[3],re=(0,Z.Z)(),oe=(0,o.Z)(re,2)[1],ie=function(e){var n=e||_,a=n.header,r=n.text,o=(0,d.sc)({header:a,text:r,success:!0}),i=G.filter(T).map((function(e){return e.email})).join(",");(0,u.L)("invite","invite-sent","".concat(K,"::").concat(i,"::").concat(V.join(",")),"","","invite-sent"),f.Z.success(o,{context:"manageInvitations"}),t()},le=function(){var e=(0,r.Z)(l().mark((function e(){var t,n,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=G.filter(T),n=t.map((function(e){return{email:e.email,name:e.name,role:K,roomIDs:V}})),a="".concat(window.location.origin,"/spaces/").concat(P,"/join-space"),ne(n,a,{onSuccess:ie,onError:oe});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=(0,O.QB)(),se=function(e){return function(t){var n=t.email;e&&te(e),J(G.filter((function(e){return e.email!==n}))),q(M.filter((function(e){return e.email!==n})))}},ue=(0,c.useCallback)((function(){F([])}),[F]),de="member"===K;return c.createElement(E.u6,{right:!0,closeOnEsc:!0,closeOnOverlayClick:!0,onClose:t},c.createElement(w.x,{onClose:t,isSubmodal:i,title:"Invite Users"}),c.createElement(x.B,null,"Invite users to\xa0",R),c.createElement(E.TZ,null,c.createElement(k.qQ,null,"Send invitations to your team"),c.createElement(k.ne,null,"TIP: You can send more invitations at once, separate each with a comma."),c.createElement(v.m,{invitations:G,setInvitations:J}),c.createElement("br",null),c.createElement(k.qQ,null,"Rooms"),c.createElement(s.Flex,{alignItems:"center",justifyContent:"between",margin:[1,0,2]},c.createElement(s.TextSmall,null,"Choose one or more rooms you'd like to invite users to."),!!V.length&&c.createElement(s.Button,{onClick:ue,padding:[0],flavour:"borderless","data-ga":"rooms-clear",label:"Clear",small:!0},"Clear")),c.createElement(s.Box,{"data-testid":"invite-selectRoom"},c.createElement(m.Z,(0,a.Z)({selectedValue:V,onChange:F},de?{formatOptions:function(e){return{isDisabled:e.name===y.TY}},filterValues:function(e){return e.label===y.TY}}:{}))),c.createElement("br",null),c.createElement(k.qQ,null,"Role"),c.createElement(k.ne,null,"Choose a role for invited user."," ",c.createElement(p.Z,{href:j.R,target:"_blank",rel:"noopener noreferrer",Component:s.TextSmall},"Learn more")),c.createElement(s.Box,{"data-testid":"invite-selectRole"},c.createElement(I.Z,{availableRoles:ce,dataGA:"invite-to-space",dataTestId:"invite-selectRole",onChange:function(e){$(e.target.value)},value:K})),c.createElement(k.p7,null,c.createElement(s.Button,{label:"Send",onClick:le,disabled:0===G.length||!K,flavour:"hollow",isLoading:ae})),c.createElement(s.H5,{margin:[2,0,0]},"Invitations awaiting response"),c.createElement(s.Flex,{column:!0},ee.length>0?ee.map((function(e){return c.createElement(C,{key:e,handleDelete:se(e),id:e})})):c.createElement(k.xB,null,c.createElement("br",null),c.createElement(k.qQ,null,"You haven't invited any users yet.")))))}},87181:function(e,t,n){n.d(t,{ne:function(){return c},p7:function(){return i},qQ:function(){return o},xB:function(){return l}});var a=n(71893),r=n(64969),o=(0,a.default)(r.H5).withConfig({displayName:"styled__StyledH5",componentId:"sc-1kusjmi-0"})(["display:flex;align-items:center;"]),i=a.default.div.withConfig({displayName:"styled__FormRow",componentId:"sc-1kusjmi-1"})(["width:100%;display:flex;flex-flow:row no-wrap;justify-content:flex-end;margin-top:",";"],(0,r.getSizeBy)(2)),l=a.default.div.withConfig({displayName:"styled__StyledUserInvitationEmptyListItem",componentId:"sc-1kusjmi-2"})(["display:flex;flex-flow:column nowrap;align-items:center;"]),c=(0,a.default)(r.TextSmall).withConfig({displayName:"styled__StyledSecondaryText",componentId:"sc-1kusjmi-3"})(["margin:2px 0 8px;"])},46475:function(e,t,n){n.d(t,{R:function(){return a}});var a="https://learn.netdata.cloud/docs/nightly/concepts/role-based-access-model"},99826:function(e,t,n){n(92222);var a=n(67294),r=n(46715),o=n(74059);t.Z=function(e){var t=(0,r.RP)(),n=t.loaded,i=t.value,l=t.hasError,c=(0,o.uk)(),s=n&&i?i.billingEmail?"update":"checkout":"",u=(0,a.useCallback)((function(e){return n&&i?"/spaces/".concat(c,"/settings/billing/all-plans#billingModalType=").concat(s,"&billingModalSlug=").concat(e):null}),[e,c,s]),d=e?u(e):null;return{loaded:n,getUrl:u,url:d,hasError:l}}},8048:function(e,t,n){n(2707),n(21249),n(57640),n(9924),n(26699),n(32023),n(9653),n(92222);var a=n(67294),r=n(64969),o=n(71893),i=n(64637),l=n(87917),c=n(74059),s=n(91008),u=n(79655),d=n(33335),f=n(99826),m={admin:"Users with this role can control Spaces, Rooms, Nodes, Users and Billing. They can also access any Room in the Space.",member:"Users with this role can create Rooms and invite other Members. They can only see the Rooms they belong to and all Nodes in the All Nodes room",manager:"Users with this role can manage Rooms and Users. They can access any Room in the Space.",troubleshooter:"Users with this role can use Netdata to troubleshoot, not manage entities. They can access any Room in the Space.",observer:"Users with this role can only view data in specific Rooms.",billing:"Users with this role can handle billing options and invoices."},p=(0,o.default)(r.Flex).withConfig({displayName:"rolePicker__PlanBadge",componentId:"sc-ypuqww-0"})(["pointer-events:auto;"]);t.Z=function(e){var t=e.availableRoles,n=e.dataGA,o=e.dataTestId,v=e.onChange,b=e.value,g=(0,c.OS)("plan"),h=(0,a.useMemo)((function(){return(0,l.xJ)(g).map((function(e){return{isChecked:e===b,isEnabled:t.includes(e),role:e}})).sort((function(e,t){return Number(t.isEnabled)-Number(e.isEnabled)}))}),[t,l.xJ,g,b]),y=(0,d.gI)("billing:ReadAll"),E=(0,f.Z)().getUrl;return a.createElement(r.Flex,{column:!0,gap:2,"data-testid":"".concat(o,"-roleOptions")},h.map((function(e){var t=e.isChecked,l=e.isEnabled,c=e.role,d=l?void 0:"medium",f="troubleshooter"===c?"pro":"business";return a.createElement(r.RadioButton,{key:c,checked:t,"data-ga":"".concat(n,"::select-role-").concat(c,"::global-view"),"data-testid":"".concat(o,"-").concat(c,"Option"),disabled:!l,onChange:v,value:c,alignItems:"start"},a.createElement(r.Flex,{column:!0},a.createElement(r.Flex,{gap:2,alignItems:"center"},a.createElement(r.Text,{opacity:d},(0,i.fm)(c)),!l&&a.createElement(p,{background:"sideBarMini",border:{side:"all",color:"border"},cursor:"initial",padding:[1],round:!0},a.createElement(s.Z,{align:"bottom",as:u.rU,boxProps:{as:r.Flex},color:"text",Component:r.TextMicro,content:"Available on ".concat((0,i.fm)(f)," plan"),"data-ga":"".concat(n,"::click-plan-badge-").concat(f,"::global-view"),disabled:!y,hoverColor:"textFocus",showToolTip:!0,strong:!0,to:E(f)},(0,i.fm)(f)))),a.createElement(r.TextSmall,{color:"textLite",opacity:d},m[c])))})))}},35838:function(e,t,n){n.d(t,{D:function(){return _},E:function(){return T}});var a=n(15861),r=n(29439),o=n(4942),i=n(93433),l=n(64687),c=n.n(l),s=(n(66992),n(41539),n(70189),n(78783),n(88921),n(96248),n(13599),n(11477),n(64362),n(15389),n(90401),n(45164),n(91238),n(54837),n(87485),n(56767),n(76651),n(61437),n(35285),n(39865),n(33948),n(92222),n(21249),n(57640),n(9924),n(15581),n(2490),n(34514),n(54747),n(57327),n(88449),n(59849),n(47941),n(82526),n(38880),n(49337),n(33321),n(69070),n(67294)),u=n(4480),d=(0,u.xu)({key:"invitation",default:{id:"",email:""}}),f=(0,u.xu)({key:"invitationIds",default:[]}),m=n(45987),p=n(26398),v=["role"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=function(e){return e.map((function(e){return{id:e.id,email:e.email}}))},h=function(e){return p.Z.get("/api/v2/spaces/".concat(e,"/invitations"),{transform:g})},y={member:1,admin:2,manager:3,troubleshooter:4,observer:5,billing:6},E=function(e){return e.map((function(e){var t=e.role,n=(0,m.Z)(e,v);if(void 0===y[t])throw new Error("role not found");return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({role:y[t]},n)}))},w=function(e,t,n){return p.Z.post("/api/v1/spaces/".concat(e,"/invitations"),{redirectURI:n,requests:E(t)})},x=function(e,t){return p.Z.delete("/api/v1/spaces/".concat(e,"/invitations"),{params:{invitation_ids:t.join(",")}})},k=(n(85827),n(25387),n(72608),n(62200)),C=function(e){var t=e.data,n=e.invitations;return t.reduce((function(e,t,a){var r,o;(o=t.errorMsgKey)&&o===k.Sq&&(null!==(r=n[a])&&void 0!==r&&r.email&&e.push(n[a].email));return e}),[])},Z=function(e){return e.length>1};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=(0,u.CG)({key:"spaceInvitationValue",get:function(e){var t=e.id,n=e.key;return function(e){var a=(0,e.get)(d(t));return n?a[n]:a}}}),j=(0,u.CG)({key:"spaceInvitationsIdsValue",get:function(e){return function(t){return(0,t.get)(f(e))}},set:function(e){return function(t,n){var a=t.set,r=n.invitations,o=n.merge;a(f(e),(function(e){return(0,i.Z)(new Set([].concat((0,i.Z)(e),(0,i.Z)(r.map((function(e){return e.id}))))))})),r.forEach((function(e){a(d(e.id),(function(t){return O(O({},o&&t),e)}))}))}}}),T=function(e){var t=(0,u.sJ)(j(e)),n=(0,s.useState)(!1),o=(0,r.Z)(n,2),l=o[0],m=o[1],p=(0,u._8)((function(t){var n=t.snapshot,r=t.set;return(0,a.Z)(c().mark((function t(){var a,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getLoadable(j(e));case 2:if(t.sent.length){t.next=9;break}return t.next=6,h(e);case 6:a=t.sent,o=a.data,r(j(e),{invitations:o,merge:!0});case 9:case"end":return t.stop()}}),t)})))}),[e]),v=(0,s.useCallback)(function(){var t=(0,a.Z)(c().mark((function t(n,a,r){var o,i,l,s,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.onSuccess,i=r.onError,t.prev=1,m(!0),t.next=5,w(e,n,a);case 5:if(l=t.sent,s=l.data,!(u=C({data:s,invitations:n})).length||Z(n)){t.next=11;break}return i&&i({message:"User has already joined that space!"}),t.abrupt("return");case 11:if(!u.length||!Z(n)){t.next=18;break}if(u.length!==n.length){t.next=15;break}return i&&i({message:"All of the selected users are already meembers of this space"}),t.abrupt("return");case 15:if(!o){t.next=18;break}return o({header:"Invitations partially send",text:"Some of the selected users are already members of this space"}),t.abrupt("return");case 18:o&&o(),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),i&&i(t.t0);case 24:return t.prev=24,m(!1),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[1,21,24,27]])})));return function(e,n,a){return t.apply(this,arguments)}}(),[e]),b=(0,u._8)((function(t){var n=t.snapshot,r=t.set,o=t.reset;return function(){var t=(0,a.Z)(c().mark((function t(a){var l,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getPromise(j(e));case 2:return l=t.sent,s=l.filter((function(e){return e===a})),r(f(e),(function(e){var t=new Set(e);return s.forEach((function(e){return t.delete(e)})),(0,i.Z)(t)})),t.prev=5,t.next=8,x(e,[a]);case 8:s.forEach((function(e){o(d(e))})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),r(j(e),{invitations:l,merge:!1});case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}()}),[e]);return(0,s.useEffect)((function(){p()}),[e]),[t,b,v,l]},_=function(e,t){return(0,u.sJ)(I({id:e,key:t}))}}}]);