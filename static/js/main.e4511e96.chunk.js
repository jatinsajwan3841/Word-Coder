(this.webpackJsonparithmetic_coder=this.webpackJsonparithmetic_coder||[]).push([[0],{54:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),c=n.n(i),o=(n(54),n(30)),l=n(38),s=n(26),u=n(42),j=n(60),b=n(6);function d(e){var t=e.code,n=e.prob,r=t,a=r.length,i=[],c={};Object(o.a)(r).forEach((function(e){return c[e]?c[e]++:c[e]=1}));var l=c;if(null==n)for(var s in l)l[s]=l[s]/a;else l=Object.fromEntries(Object.entries(n).sort());for(var d=Object.keys(l),h=Object.values(l),p=[0],f=0;f<h.length-1;f++)p.push(+(h[f]+p[f]).toFixed(10));p.push(1),i.push(p);var m,x=p,O=Object(u.a)(r);try{for(O.s();!(m=O.n()).done;){var g=m.value,v=[],y=d.indexOf(g),w=x[y],S=x[y+1];v.push(w);for(var F=S-w,C=0;C<d.length-1;C++)v.push(+(F*l[d[C]]+v[C]).toFixed(10));v.push(S),x=v,i.push(v)}}catch(W){O.e(W)}finally{O.f()}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{elevation:3,children:Object(b.jsxs)("ul",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",listStyle:"none"},children:[Object(b.jsx)("li",{children:Object(o.a)(d).map((function(e,t){return Object(b.jsx)("span",{style:{width:"5px",display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"0.9rem"},children:e},t)}))}),i.map((function(e,t){return Object(b.jsxs)("li",{style:{width:"100px",display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"0.9rem"},children:["Iteration ",t+1,e.map((function(e){return Object(b.jsx)("span",{children:e},Math.random())}))]},t)}))]})}),Object(b.jsxs)("center",{style:{paddingBottom:"2rem"},children:["Tag value: ",(x[0]+x[x.length-1])/2]})]})}var h=n(95),p=n(96),f=n(99),m=n(98),x=n(97);function O(){var e=a.a.useState(""),t=Object(s.a)(e,2),n=t[0],i=t[1],c=a.a.useState(""),u=Object(s.a)(c,2),j=u[0],O=u[1],g=a.a.useState(null),v=Object(s.a)(g,2),y=v[0],w=v[1],S=a.a.useState(!1),F=Object(s.a)(S,2),C=F[0],W=F[1],B=a.a.useState(!1),D=Object(s.a)(B,2),I=D[0],k=D[1],T=function(e){i(e.target.value),k(!1),w(null)};return Object(r.useEffect)((function(){O(Object(o.a)(new Set(n)))}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a,{position:"static",color:"secondary",style:{height:"3rem",textAlign:"center"},children:Object(b.jsx)("div",{style:{paddingTop:"0.5rem",fontSize:"1.5rem"},children:"Arithmetic Coder"})}),Object(b.jsxs)("p",{style:{paddingLeft:"1rem",paddingRight:"1rem"},children:["*general info :",Object(b.jsx)("hr",{}),"- You can input only the word to code or can provide the probabilities along with word too. ",Object(b.jsx)("br",{}),"- Iteration 1 is the initial CDF of probabilities and in the last Iteration only the max and min value is of our interest for generating tag value."]}),Object(b.jsxs)(p.a,{maxWidth:"sm",children:[Object(b.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),null!==y)&&(1!==Object.values(y).reduce((function(e,t){return e+t}))?alert("wrong probabilties input"):k(!0))},style:{marginTop:"1rem"},children:[Object(b.jsx)(m.a,{name:"word",onChange:T,onBlur:T,value:n,label:"Input Word",fullWidth:!0}),Object(b.jsx)(f.a,{onChange:function(){W(!C),w(null)},inputProps:{"aria-label":"primary checkbox"}}),"Select here to input probabilities",C&&j.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m.a,{type:"number",name:e,fullWidth:!0,inputProps:{min:"0",max:"1",step:"0.01"},style:{marginBottom:"1rem"},onBlur:function(e){!function(e){var t={};t[e.target.name]=parseFloat(e.target.value),w(Object(l.a)(Object(l.a)({},y),t))}(e),k(!1)},onChange:function(){return k(!1)},label:"probablity of ".concat(e)},t)})})),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{style:{marginRight:"1rem"},variant:"contained",type:"submit",color:"secondary",children:"Let's go!"}),Object(b.jsx)(x.a,{variant:"contained",type:"reset",onClick:function(){i(""),w(null),k(!1)},color:"primary",children:"Reset"})]}),I&&Object(b.jsx)(d,{code:n,prob:y})]})]})}var g=function(){return Object(b.jsx)(O,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[59,1,2]]]);
//# sourceMappingURL=main.e4511e96.chunk.js.map