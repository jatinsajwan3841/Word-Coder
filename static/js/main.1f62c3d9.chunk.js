(this.webpackJsonparithmetic_coder=this.webpackJsonparithmetic_coder||[]).push([[0],{53:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),c=n.n(i),o=(n(53),n(30)),l=n(26),s=n(41),u=n(59),j=n(6);function b(e){var t=e.code,n=e.prob,r=t,a=r.length,i=[],c={};Object(o.a)(r).forEach((function(e){return c[e]?c[e]++:c[e]=1}));var l=c;if(null==n)for(var b in l)l[b]=l[b]/a;else l=Object.fromEntries(Object.entries(n).sort());for(var d=Object.keys(l),h=Object.values(l),p=[0],f=0;f<h.length-1;f++)p.push(+(h[f]+p[f]).toFixed(10));p.push(1),i.push(p);var m,x=p,O=Object(s.a)(r);try{for(O.s();!(m=O.n()).done;){var g=m.value,v=[],y=d.indexOf(g),w=x[y],S=x[y+1];v.push(w);for(var F=S-w,C=0;C<d.length-1;C++)v.push(+(F*l[d[C]]+v[C]).toFixed(10));v.push(S),x=v,i.push(v)}}catch(W){O.e(W)}finally{O.f()}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{elevation:3,children:Object(j.jsxs)("ul",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",listStyle:"none"},children:[Object(j.jsx)("li",{children:Object(o.a)(d).map((function(e,t){return Object(j.jsx)("span",{style:{width:"5px",display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"0.9rem"},children:e},t)}))}),i.map((function(e,t){return Object(j.jsxs)("li",{style:{width:"100px",display:"flex",flexDirection:"column",flexWrap:"wrap",margin:"0.9rem"},children:["Iteration ",t+1,e.map((function(e){return Object(j.jsx)("span",{children:e},Math.random())}))]},t)}))]})}),Object(j.jsxs)("center",{style:{paddingBottom:"2rem"},children:["Tag value: ",(x[0]+x[x.length-1])/2]})]})}var d=n(94),h=n(95),p=n(98),f=n(97),m=n(96);function x(){var e=a.a.useState(""),t=Object(l.a)(e,2),n=t[0],i=t[1],c=a.a.useState(""),s=Object(l.a)(c,2),u=s[0],x=s[1],O=a.a.useState(null),g=Object(l.a)(O,2),v=g[0],y=g[1],w=a.a.useState(!1),S=Object(l.a)(w,2),F=S[0],C=S[1],W=a.a.useState(!1),D=Object(l.a)(W,2),I=D[0],k=D[1],B=function(e){i(e.target.value),k(!1)};return Object(r.useEffect)((function(){x(Object(o.a)(new Set(n)))}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{position:"static",color:"secondary",style:{height:"3rem",textAlign:"center"},children:Object(j.jsx)("div",{style:{paddingTop:"0.5rem",fontSize:"1.5rem"},children:"Arithmetic Coder"})}),Object(j.jsxs)("p",{style:{paddingLeft:"1rem",paddingRight:"1rem"},children:["*general info :",Object(j.jsx)("hr",{}),"- You can input only the word to code or can provide the probabilities along with word too. ",Object(j.jsx)("br",{}),"- Iteration 1 is the initial CDF of probabilities and in the last Iteration only the max and min value is of our interest for generating tag value."]}),Object(j.jsxs)(h.a,{maxWidth:"sm",children:[Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),F){var t={},n=0;u.forEach((function(r){var a=parseFloat(e.target[r].value);t[e.target[r].name]=a,n+=a})),1!==n?(k(!1),alert("wrong probabilties input")):(y(t),k(!0))}else k(!0)},style:{marginTop:"1rem"},children:[Object(j.jsx)(f.a,{name:"word",onChange:B,onBlur:B,value:n,label:"Input Word",fullWidth:!0}),Object(j.jsx)(p.a,{onChange:function(){C(!F),y(null)},inputProps:{"aria-label":"primary checkbox"}}),"Select here to input probabilities",F&&u.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f.a,{type:"number",name:e,fullWidth:!0,inputProps:{min:"0",max:"1",step:"0.01"},style:{marginBottom:"1rem"},onChange:function(){return k(!1)},label:"probablity of ".concat(e)},t)})})),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{style:{marginRight:"1rem"},variant:"contained",type:"submit",color:"secondary",children:"Let's go!"}),Object(j.jsx)(m.a,{variant:"contained",type:"reset",onClick:function(){i(""),y(null),k(!1)},color:"primary",children:"Reset"})]}),I&&Object(j.jsx)(b,{code:n,prob:v})]})]})}var O=function(){return Object(j.jsx)(x,{})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),g()}},[[58,1,2]]]);
//# sourceMappingURL=main.1f62c3d9.chunk.js.map