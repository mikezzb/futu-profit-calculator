(this.webpackJsonpleek=this.webpackJsonpleek||[]).push([[0],{127:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),i=a.n(c),l=(a(127),a(192)),s=a(190),o=a(44),j=a(105),b=a(100),u=a(36),d=a(7),O=a(76),h=a(195),m=a(145),f=a(193),x=a(188),N=a(191),S=a(45),v=a(93),E=Object.freeze({COMMISSION:.0049,PLATFORM:.005,CLEARING:.003}),P=Object.freeze({COMMISSION:.99,PLATFORM:1}),p=Object.freeze({PER_SHARE:E,MIN_FEES:P}),g=Object.freeze({PER_SHARE:Object(u.a)(Object(u.a)({},E),{},{TRADING_ACTIVITY:119e-6}),PER_AMOUNT:{SEC:51e-7},MIN_FEES:Object(u.a)(Object(u.a)({},P),{},{TRADING_ACTIVITY:.01,SEC:.01})}),C=function(e,t,a){var r=0;return Object.keys(e.PER_SHARE).forEach((function(t){r+=Math.max(e.PER_SHARE[t]*a,t in e.MIN_FEES?e.MIN_FEES[t]:0)})),"PER_AMOUNT"in e&&Object.keys(e.PER_AMOUNT).forEach((function(n){r+=Math.max(e.PER_AMOUNT[n]*a*t,n in e.MIN_FEES?e.MIN_FEES[n]:0)})),r},y=function(e){var t=e.market,a=e.numOfShares,r=e.buyPrice,n=e.sellPrice;if("US"===t){var c=C(p,r,a),i=C(g,n,a);return{profit:(n-r)*a-(c+i),buyCommission:c,sellCommission:i,percentageChange:(n-r)/r}}return{}},I=(a(135),a(9)),M=[{field:"id",headerName:"ID",width:100},{field:"profit",headerName:"Profit ($)",width:120,type:"number"},{field:"percentageChange",headerName:"Gain (%)",width:120},{field:"buyPrice",headerName:"Buy ($)",width:100,type:"number"},{field:"sellPrice",headerName:"Sell ($)",width:100,type:"number"},{field:"commission",headerName:"Commission ($)",width:160,type:"number"}],A=function(e){var t=e.label,a=e.children;return Object(I.jsxs)("div",{className:"calculator-row",children:[Object(I.jsx)("div",{className:"calculator-row-label",children:"".concat(t,":")}),a]})},R=function(){var e=Object(r.useReducer)((function(e,t){return Object(u.a)(Object(u.a)({},e),t)}),{market:"US",numOfShares:100,buyPrice:15,sellPrice:15}),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(I.jsxs)("div",{children:[Object(I.jsxs)(O.a,{className:"calculator-card",elevation:1,children:[Object(I.jsx)(A,{label:"Market",children:Object(I.jsxs)(h.a,{row:!0,"aria-label":"market",name:"market",value:a.market,onChange:function(e){return n({market:e.target.value})},children:[Object(I.jsx)(m.a,{value:"US",control:Object(I.jsx)(f.a,{}),label:"US"}),Object(I.jsx)(m.a,{value:"HK",control:Object(I.jsx)(f.a,{}),label:"HK"})]})}),Object(I.jsx)(A,{label:"Number of Shares",children:Object(I.jsx)(x.a,{value:a.numOfShares,onChange:function(e){return n({numOfShares:e.target.value})},startAdornment:Object(I.jsx)(N.a,{position:"start",children:"N"})})}),Object(I.jsx)(A,{label:"Buy",children:Object(I.jsx)(x.a,{value:a.buyPrice,onChange:function(e){return n({buyPrice:e.target.value})},startAdornment:Object(I.jsx)(N.a,{position:"start",children:"$"})})}),Object(I.jsx)(A,{label:"Sell",children:Object(I.jsx)(x.a,{value:a.sellPrice,onChange:function(e){return n({sellPrice:e.target.value})},startAdornment:Object(I.jsx)(N.a,{position:"start",children:"$"})})}),Object(I.jsx)("div",{className:"calculator-btn",children:Object(I.jsx)(S.a,{variant:"contained",color:"primary",elevation:2,children:"Record"})})]}),Object(I.jsx)(O.a,{className:"profit-table-container",elevation:1,children:Object(I.jsx)("div",{className:"profit-table",children:Object(I.jsx)(v.a,{rows:[function(){var e=y(a);return{id:Date.now(),profit:e.profit,percentageChange:e.percentageChange,buyPrice:a.buyPrice,sellPrice:a.sellPrice,commission:e.buyCommission+e.sellCommission}}()],columns:M,pageSize:5})})})]})},_=(a(137),function(){return Object(I.jsxs)("div",{className:"home",children:[Object(I.jsx)(l.a,{className:"header",children:Object(I.jsxs)(s.a,{children:[Object(I.jsx)(o.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(I.jsx)(b.a,{})}),Object(I.jsx)(j.a,{variant:"h6",children:"Leek"})]})}),Object(I.jsx)(R,{})]})});a(138);var k=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(_,{})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))},w=y({market:"US",numOfShares:65,buyPrice:15.17,sellPrice:15.6});console.log(w),i.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(k,{})}),document.getElementById("root")),T()}},[[139,1,2]]]);
//# sourceMappingURL=main.f6a51123.chunk.js.map