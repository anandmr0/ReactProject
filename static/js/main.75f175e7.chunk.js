(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[0],{38:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),o=a(5),i=a(2);var u=a(13);var s=a(6),m=a(10),d=a(8),p=a(9),b=a(35),f=a(37),E=a(15);var v=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"font-bold py-3"},"AppName"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",class:"text-blue-500 py-3 border-t border-b block",onClick:e.closemenu},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about",class:"text-blue-500 py-3 border-t border-b block",onClick:e.closemenu},"About"))))};var h=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(E.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),o=Object(E.b)(a,null,{from:{opacity:0,transform:"translate3d(0,-40px,0)"},enter:{opacity:1,transform:"translate3d(0,0px,0)"},leave:{opacity:0,transform:"translate3d(0,-40px,0)"}});return r.a.createElement("nav",null,r.a.createElement("span",{className:"text-xl"},r.a.createElement(b.a,{icon:f.a,onClick:function(){return l(!a)}})),o.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(E.a.div,{key:a,style:n,className:"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50",onClick:function(){return l(!1)}})})),c.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(E.a.div,{key:a,style:n,className:"fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow",onClick:function(){return l(!1)}},r.a.createElement(v,{closemenu:function(){return l(!1)}}))})))},y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{class:"border-p  p-3 flex justify-between"},r.a.createElement("section",{class:"font-bold"},"My App"),r.a.createElement(h,null))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"bg-gray-700 fixed text-center p-3 absolute inset-x-0 bottom-0 "},"@Copy Right 2020")},x=a(17),k=a.n(x);var N=function(){return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"loader"}))};var w=function(e){return r.a.createElement("div",{className:"border mb-4 rounded overflow-hidden"},r.a.createElement(o.b,{to:"/products/".concat(e.products.id)},r.a.createElement("div",{style:{backgroundImage:"url('".concat(e.products.images,"')")},className:"w-full h-64 bg-blue bg-cover"})),r.a.createElement("div",{className:"p-3"},r.a.createElement("h3",{className:"font-bold text-xl mb-3"},r.a.createElement(o.b,{to:"/products/".concat(e.products.id)},e.products.name))),r.a.createElement("div",{className:"font-bold-mb-3"},"$",e.products.price),r.a.createElement("div",{className:"mb-3"},"$",e.products.description),r.a.createElement(o.b,{to:"/products/".concat(e.products.id),className:"bg-blue-500 text-white p-2 flex justify-center w-full"},"View"))};function j(e){var t=Object(n.useState)({loading:!1,data:null,error:!1}),a=Object(u.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){l({loading:!0,data:null,error:!1}),k.a.get(e).then((function(e){l({loading:!1,data:e.data,error:!1})})).catch((function(){l({loading:!1,data:null,error:!0})}))}),e),r}var O=function(){Object(i.f)().id;var e=j("https://5f6f7281adc24200166e10eb.mockapi.io/products?page=1&limit=10"),t=null;return e.error&&(t=r.a.createElement("p",null,"There was an error please refresh or try again ")),e.loading&&(t=r.a.createElement(N,null)),e.data&&(t=e.data.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(w,{products:e}))}))),r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold text-2xl mb-3"},"Best Sellers"),t)};var C=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold text-2xl mb-3"},"About"),r.a.createElement("p",null,"  This is about"))};var A=function(){var e=Object(i.f)().id,t=j("https://5f6f7281adc24200166e10eb.mockapi.io/products/".concat(e)),a=null;return t.error&&(a=r.a.createElement("p",null,"There was an error please refresh or try again ")),t.loading&&(a=r.a.createElement(N,null)),t.data&&(a=r.a.createElement("div",null,r.a.createElement("h1",{className:"text-2xl font-bold mb-2"},t.data.name),r.a.createElement("div",null,r.a.createElement("img",{src:t.data.images,alt:t.data.name})),r.a.createElement("div",{className:"font-bold text-xl mb-2"},"$",t.data.price),r.a.createElement("div",null,t.data.description))),r.a.createElement("div",null,a)};var S=function(){return r.a.createElement("div",{className:"relative pb-10 min-h-screen"},r.a.createElement(o.a,null,r.a.createElement(y,null),r.a.createElement("div",{className:"p-3"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(i.a,{path:"/about"},r.a.createElement(C,null)),r.a.createElement(i.a,{path:"/products/:id"},r.a.createElement(A,null)))),r.a.createElement(g,null)))};a(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.75f175e7.chunk.js.map