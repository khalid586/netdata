!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="722979ea-7b33-4981-83c6-e11a734d1bf4",e._sentryDebugIdIdentifier="sentry-dbid-722979ea-7b33-4981-83c6-e11a734d1bf4")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"bc401569f0a5aac35c96315fba57182a8ad450f2"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[252],{46019:function(e,t,n){n.r(t),n.d(t,{SignIn:function(){return F},default:function(){return B}});n(74916),n(15306),n(64765),n(77601);var a=n(67294),i=n(89250),o=n(17563),r=n(15557),c=n(15794),l=n(1043),u=n(87562),d=n(25065),s=(n(92222),n(60677)),f=s.default.a.withConfig({displayName:"linkButton__LinkButton",componentId:"sc-9kv26a-0"})(["color:",";text-decoration:none;background-color:transparent;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;height:",";background:",";border:1px solid ",";border-radius:2px;max-width:320px;width:100%;",";&:hover{text-decoration:none;color:unset;}"],(0,r.getColor)("background"),(0,r.getSizeBy)(5.5),(0,r.getColor)("mainBackground"),(0,r.getColor)("mainBackground"),(function(e){var t=e.disabled;return"\n    opacity: ".concat(t?.4:1,";\n    pointer-events: ").concat(t?"none":"auto",";\n  ")})),g=function(e){return(0,s.default)(f).withConfig({displayName:"linkButton",componentId:"sc-9kv26a-1"})(["box-shadow:0px 0px 1px rgba(0,0,0,0.12);border-radius:2px;background:",";border:1px solid ",";span{flex:1;display:flex;align-items:center;justify-content:center;padding:0 ",";color:",";}"],e,e,(0,r.getSizeBy)(1),(0,r.getColor)("bright"))},m=g("#445260"),p=g("#4285f4"),b=n(29439),h=n(78312),v=function(e){var t=e.onSubmit,n=e.disabled,i=e.initialValue,o=e.buttonLabel,c=e.tagging,l=(0,r.useInputValue)({value:i||""}),u=(0,b.Z)(l,4),d=u[0],s=u[1],f=u[3],g=(0,r.useTouchedState)({}),m=(0,b.Z)(g,2),p=m[0],v=m[1],E=(0,a.useState)(!1),w=(0,b.Z)(E,2),x=w[0],y=w[1],k=(0,a.useCallback)((function(e){e.preventDefault(),t(d)}),[t,d]);return a.createElement(r.Flex,{as:"form",column:!0,gap:4,width:"100%","data-testid":"emailField"},a.createElement(h.U5,{value:d,onChange:s,isValid:x,setIsValid:y,instantFeedback:"positiveFirst",isDirty:f,success:x&&"Valid E-mail",onBlur:v,touched:p,"data-testid":"emailField-input"}),a.createElement(h.Sn,{type:"submit",disabled:n||!f,width:"100%",label:o,onClick:k,"data-ga":"signinup::click-email::".concat(c),"data-testid":"emailField-submitButton"}))},E=n(8360),w=n(91940),x=function(){return a.createElement(r.Flex,{height:"1px",width:"100%",background:"disabled"})},y=n(87462),k=n(46189),C=n(92432),I=k.Z.demoSlug,_=function(e){return a.createElement(r.Text,(0,y.Z)({textAlign:"center"},e),"Discover the power and simplicity of Netdata in our live infrastructure monitoring"," ",a.createElement(h.Fg,{onClick:function(){(0,C.L)("signinup","click-demo","sni-view")},href:"/spaces/".concat(I),target:"_blank"},"demo")," ")},S=function(e){var t=e.to;return a.createElement(r.Box,{position:"fixed"},a.createElement(r.Button,{as:"a",href:t,flavour:"borderless",label:"Go back to ".concat(t.replace(/#.*/,"")),icon:"arrow_left",rel:"noopener noreferrer"}))},F=function(){var e=(0,i.TH)().search,t=window.location.hash,n=(0,l.iM)(),c=o.parse(e).redirect_uri,s=(0,a.useCallback)((function(a){var i=encodeURIComponent((0,u.$)("/sign-in".concat(e),t)),o=encodeURIComponent((0,u.$)("/sign-up/verify".concat(e),t));n({email:a,redirectURI:i,registerURI:o})}),[]);return(0,a.useEffect)((function(){if(/app\.netdata\.cloud/.test(location.hostname)){var e=document.createElement("script");return e.src="https://zsvdrp94yfxr.statuspage.io/embed/script.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}}),[]),a.createElement(a.Fragment,null,!!c&&a.createElement(S,{to:c}),a.createElement(w.Z,{"data-testid":"signIn"},a.createElement(r.H1,{textAlign:"center"},"Welcome!"),a.createElement(r.TextBig,{textAlign:"center"},"Sign in and let\u2019s get you started:"),a.createElement(h.Yb,null,a.createElement(r.Flex,{column:!0,gap:4},a.createElement(p,{href:(0,u.G)("google"),disabled:!1,"data-ga":"signinup::click-google::sni-view","data-testid":"signIn-googleButton"},a.createElement(h.xG,null,a.createElement(d.av,null)),a.createElement(r.Text,{textAlign:"center"},"Continue with Google")),a.createElement(m,{href:(0,u.G)("github"),disabled:!1,"data-ga":"signinup::click-github::sni-view","data-testid":"signIn-githubButton"},a.createElement(h.xG,null,a.createElement(d.bY,null)),a.createElement(r.Text,null,"Continue with GitHub"))),a.createElement(r.Flex,{gap:2,alignItems:"center"},a.createElement(x,null),a.createElement(r.H4,null,"or"),a.createElement(x,null)),a.createElement(v,{onSubmit:s,buttonLabel:"Sign in by email",tagging:"sni-view"})),a.createElement(r.Flex,{column:!0,gap:2,alignSelf:"center",width:{max:"480px"}},a.createElement(r.TextBig,{textAlign:"center"},"Don't have a Netdata account yet? Relax! Sign-in and we will create one for you!"),a.createElement(_,{margin:[4,0,0]}),a.createElement(E.Z,null)),a.createElement(x,null),a.createElement(r.Flex,{column:!0,gap:4,alignItems:"center"},a.createElement(d.lR,null),a.createElement(r.TextSmall,{textAlign:"center"},"Netdata is a member of the Cloud Native Computing Foundation (CNCF), and it is the 3rd most starred project in the CNCF landscape."))))},B=(0,c.k)(F,"light")},87562:function(e,t,n){n.d(t,{$:function(){return i},G:function(){return o}});n(26699),n(32023),n(92222),n(74916),n(64765);var a=n(58591),i=function(e,t){var n=(0,a.kG)(["expires_at",t]),i=t.includes("join-callback")?decodeURIComponent(n):n;return"".concat(window.location.origin).concat(e,"#").concat(i)},o=function(e,t){var n=window.location,a=n.search,o=n.hash,r=encodeURIComponent(i("/sign-in".concat(a).concat(a.length?"&":"?","oauth=").concat(e,"&"),o)),c=encodeURIComponent(i("/sign-up/verify".concat(a).concat(a.length?"&":"?","oauth=").concat(e,"&"),o));return"/api/v2/auth/account/".concat(e,"?redirect_uri=").concat(r,"&register_uri=").concat(c).concat(t?"&is_unverified_registration=true":"")}},76362:function(e,t,n){n.d(t,{S1:function(){return o},ZT:function(){return a},ae:function(){return c},jU:function(){return r},on:function(){return i}});var a=function(){};function i(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var r="undefined"!==typeof window,c="undefined"!==typeof navigator},94829:function(e,t,n){var a=n(67294),i=n(76362);t.Z=function(e,t){var n=(0,a.useState)(function(e,t){return void 0!==t?t:!!i.jU&&window.matchMedia(e).matches}(e,t)),o=n[0],r=n[1];return(0,a.useEffect)((function(){var t=!0,n=window.matchMedia(e),a=function(){t&&r(!!n.matches)};return n.addListener(a),r(n.matches),function(){t=!1,n.removeListener(a)}}),[e]),o}}}]);