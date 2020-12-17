(this.webpackJsonpindian_food_ingredients_list_reactjs=this.webpackJsonpindian_food_ingredients_list_reactjs||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),a=n.n(i),c=n(20),s=n.n(c),d=n(18),o=n(7),j=n(8),l=n(10),b=n(9),h=n(11),p=n(2);var u={background:"#45046a",color:"#f1ebbb",textAlign:"center",padding:"10px"},O={color:"#ccc",textDecoration:"none"},g=function(){return Object(r.jsxs)("header",{style:u,children:[Object(r.jsx)("h1",{children:"Ingredient List"}),Object(r.jsx)(h.b,{style:O,to:"/",children:"Home"})," | ",Object(r.jsx)(h.b,{style:O,to:"about",children:"About"})," | ",Object(r.jsx)(h.b,{style:O,to:"budget",children:"Budget"})," | ",Object(r.jsx)(h.b,{style:O,to:"shops",children:"Shops"})]})},m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).getStyle=function(){return{background:"#9bdeac",padding:"15px",borderBottom:"2px #fbfd8a dotted",textDecoration:e.props.ingredient.inPantry?"line-through":"none"}},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.ingredient,t=e.id,n=e.name;return Object(r.jsx)("div",{style:this.getStyle(),children:Object(r.jsxs)("p",{children:[Object(r.jsx)("input",{type:"checkbox",onChange:this.props.actionComplete.bind(this,t)}),"",n,Object(r.jsx)("button",{onClick:this.props.delIngredient.bind(this,t),style:x,children:"\u2718"})]})})}}]),n}(i.Component),x={background:"#c70039",color:"#fff",border:"none",padding:"3px 6px",borderRadius:"40%",cursor:"arrow",float:"right"},f=m,y=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return this.props.ingredients.map((function(t){return Object(r.jsx)(f,{ingredient:t,actionComplete:e.props.actionComplete,delIngredient:e.props.delIngredient},t.id)}))}}]),n}(i.Component),v=n(22),I=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={name:""},e.onSubmit=function(t){t.preventDefault(),e.props.addIngredient(e.state.name),e.setState({name:""})},e.onChange=function(t){return e.setState(Object(v.a)({},t.target.name,t.target.value))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(r.jsx)("input",{type:"text",name:"name",style:{flex:"10",padding:"5px"},placeholder:"Add Ingredient...",value:this.state.name,onChange:this.onChange}),Object(r.jsx)("input",{type:"submit",value:"Add Item",className:"btn",style:{flex:"1"}})]})}}]),n}(i.Component);var C=function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)("h1",{children:"About"}),Object(r.jsx)("p",{children:"This is the IndianFood Ingredients App v1.0.0. It is my first React.js application. *(sajustsmile)*"})]})};var S=function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)("h1",{children:"Budget"}),Object(r.jsx)("p",{children:"This is the budget section of the IndianFood Ingredients App. If most spices are grown at home, this page can be made redundant."})]})};var A=function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)("h1",{children:"Shops"}),Object(r.jsx)("p",{children:"Shops that sell these ingredients."}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Name: Shop A, Address: abc"}),Object(r.jsx)("li",{children:"Name: Shop B, Address: def"}),Object(r.jsx)("li",{children:"Name: Shop C, Address: ghi"})]})]})},P=n(36),k=(n(33),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={ingredients:[{id:Object(P.a)(),name:"Chicken Mince (Keema)",inPantry:!1},{id:Object(P.a)(),name:"Samosa Patti",inPantry:!1},{id:Object(P.a)(),name:"Green chillies",inPantry:!1},{id:Object(P.a)(),name:"Coriander leaves",inPantry:!0},{id:Object(P.a)(),name:"Turmeric Powder",inPantry:!1},{id:Object(P.a)(),name:"Garam Masala Powder",inPantry:!0},{id:Object(P.a)(),name:"Ginger Garlic Paste",inPantry:!1}]},e.actionComplete=function(t){e.setState({ingredients:e.state.ingredients.map((function(e){return e.id===t&&(e.inPantry=!e.inPantry),e}))})},e.delIngredient=function(t){e.setState({ingredients:Object(d.a)(e.state.ingredients.filter((function(e){return e.id!==t})))})},e.addIngredient=function(t){var n={id:Object(P.a)(),name:t,inPantry:!1};e.setState({ingredients:[].concat(Object(d.a)(e.state.ingredients),[n])})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)(h.a,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(g,{}),Object(r.jsx)(p.a,{exact:!0,path:"/",render:function(t){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(I,{addIngredient:e.addIngredient}),Object(r.jsx)(y,{ingredients:e.state.ingredients,actionComplete:e.actionComplete,delIngredient:e.delIngredient})]})}}),Object(r.jsx)(p.a,{path:"/about",component:C}),Object(r.jsx)(p.a,{path:"/budget",component:S}),Object(r.jsx)(p.a,{path:"/shops",component:A})]})})})}}]),n}(i.Component));s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2dd86859.chunk.js.map