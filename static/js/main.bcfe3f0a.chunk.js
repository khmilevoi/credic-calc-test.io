(this["webpackJsonpcredit-calc"]=this["webpackJsonpcredit-calc"]||[]).push([[0],{51:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e.n(c),a=e(20),u=e.n(a),o=e(5),s=e(21),b=e.n(s),f=e(8),j=e.n(f),x=e(22),d=e(23),l=e.n(d),p="https://api.test.l-l.cloud/v2/conditions",m={amount:{min:0,max:0,limit:0},term:{min:0,max:0},interestRate:0},O={STEP:10},v=e(2),h=e(3);function g(){var n=Object(v.a)(["\n  width: 100%;\n"]);return g=function(){return n},n}function w(){var n=Object(v.a)([""]);return w=function(){return n},n}function y(){var n=Object(v.a)([""]);return y=function(){return n},n}function k(){var n=Object(v.a)(["\n  margin-top: 40px;\n\n  display: flex;\n  flex-direction: column;\n\n  font-size: 11px;\n"]);return k=function(){return n},n}function C(){var n=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return C=function(){return n},n}function T(){var n=Object(v.a)(["\n  font-size: 38px;\n"]);return T=function(){return n},n}function M(){var n=Object(v.a)(["\n  font-size: 15px;\n  color: #000000bf;\n"]);return M=function(){return n},n}function S(){var n=Object(v.a)(["\n  width: 100%;\n\n  margin-bottom: 4px;\n\n  display: flex;\n  justify-content: space-between;\n\n  white-space: nowrap;\n"]);return S=function(){return n},n}function z(){var n=Object(v.a)(["\n  padding: 0 10px;\n"]);return z=function(){return n},n}function E(){var n=Object(v.a)(["\n  width: 257px;\n\n  padding: 13px 6px 5px 6px;\n  margin: 0 10px;\n\n  border-radius: 18px;\n\n  box-shadow: 0 4px 15px rgba(26, 124, 206, 0.37);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return E=function(){return n},n}function Y(){var n=Object(v.a)(["\n  font-size: 38px;\n"]);return Y=function(){return n},n}function A(){var n=Object(v.a)([""]);return A=function(){return n},n}function D(){var n=Object(v.a)(["\n  width: 158px;\n\n  margin-left: 14px;\n  margin-top: 14px;\n\n  display: flex;\n  flex-direction: column;\n"]);return D=function(){return n},n}function J(){var n=Object(v.a)(["\n  display: flex;\n"]);return J=function(){return n},n}function P(){var n=Object(v.a)(["\n  min-width: 730px;\n\n  padding: 12px 8px;\n  margin: 15px;\n\n  border-radius: 18px;\n\n  display: flex;\n  //justify-content: space-between;\n  flex-wrap: wrap;\n\n  background-color: #fff;\n  box-shadow: 0 6px 20px rgba(38, 153, 251, 0.2);\n"]);return P=function(){return n},n}function R(){var n=Object(v.a)(["\n  display: flex;\n"]);return R=function(){return n},n}function B(){var n=Object(v.a)(["\n  html, body {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n"]);return B=function(){return n},n}var F=Object(h.a)(B()),I=h.b.div(R()),N=h.b.div(P()),q=h.b.div(J()),G=h.b.div(D()),H=h.b.span(A()),K=h.b.span(Y()),L=h.b.div(E()),Q=h.b.div(z()),U=h.b.div(S()),V=h.b.div(M()),W=h.b.div(T()),X=h.b.div(C()),Z=h.b.div(k()),$=h.b.div(y()),_=h.b.div(w()),nn=h.b.input(g()),tn=function(n){var t=n.value,e=n.max,i=n.min,a=n.step,u=n.onChange,o=n.title,s=n.subtitle,b=Object(c.useCallback)((function(n){u(Number.parseFloat(n.currentTarget.value))}),[u]);return Object(r.jsxs)(L,{children:[Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{children:o}),Object(r.jsx)(W,{children:t}),Object(r.jsx)(V,{children:s})]}),Object(r.jsxs)(Z,{children:[Object(r.jsxs)(X,{children:[Object(r.jsx)($,{children:i}),Object(r.jsx)(_,{children:e})]}),Object(r.jsx)(nn,{type:"range",max:e,min:i,value:t,step:a,onChange:b})]})]})},en=function(){var n=function(){var n=Object(c.useState)(m),t=Object(o.a)(n,2),e=t[0],r=t[1],i=Object(c.useCallback)(Object(x.a)(j.a.mark((function n(){var t,e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.get(p);case 2:t=n.sent,e=t.data,r(e);case 5:case"end":return n.stop()}}),n)}))),[]);return Object(c.useEffect)((function(){i().then()}),[i]),e}(),t=function(n){var t=Object(c.useState)(n.amount.limit),e=Object(o.a)(t,2),r=e[0],i=e[1],a=Object(c.useState)(n.term.max),u=Object(o.a)(a,2),s=u[0],f=u[1];Object(c.useEffect)((function(){i(n.amount.limit),f(n.term.max)}),[n]);var j=Object(c.useMemo)((function(){return r+r*n.interestRate*s}),[r,n,s]),x=Object(c.useMemo)((function(){return b()().add(s,"days")}),[s]);return{setAmount:Object(c.useCallback)((function(t){t>n.amount.limit?i(n.amount.limit):i(t)}),[n]),amount:r,setTerm:f,term:s,nextTerm:x,result:j}}(n),e=t.setTerm,i=t.setAmount,a=t.amount,u=t.term,s=t.result,f=t.nextTerm;return Object(r.jsxs)(N,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)(tn,{value:a,max:n.amount.max,min:n.amount.min,onChange:i,step:O.STEP,title:"\u0421\u0443\u043c\u043c\u0430, \u0433\u0440\u043d"}),Object(r.jsx)(tn,{value:u,max:n.term.max,min:n.term.min,onChange:e,step:1,title:"\u0421\u0440\u043e\u043a, \u0434\u043d\u0435\u0439",subtitle:"\u0414\u043e ".concat(f.format("DD.MM.YYYY dd"))})]}),Object(r.jsxs)(G,{children:[Object(r.jsx)(H,{children:"\u0418\u0442\u043e\u0433\u043e \u043a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443:"}),Object(r.jsxs)(K,{children:[Math.floor(s)," \u0433\u0440\u043d"]})]})]})},rn=function(){return Object(r.jsxs)(I,{children:[Object(r.jsx)(F,{}),Object(r.jsx)(en,{})]})};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(rn,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.bcfe3f0a.chunk.js.map