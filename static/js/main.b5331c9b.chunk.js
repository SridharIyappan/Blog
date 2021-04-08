(this.webpackJsonpmyre=this.webpackJsonpmyre||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),l=c(16),r=c.n(l),a=(c(22),c(7)),o=c(0),i=function(){return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"link",children:[Object(o.jsx)("span",{className:"head",children:"Blog"}),Object(o.jsxs)("span",{className:"navlink",children:[Object(o.jsx)(a.b,{to:"/",children:"Home"}),Object(o.jsx)(a.b,{to:"/NewBlog",children:"New Blog"}),Object(o.jsx)(a.b,{to:"/About",className:"blog",children:"About Us"})]})]})})},j=function(e){var t=e.blogs,c=e.title;return Object(o.jsxs)("div",{className:"bloglist",children:[Object(o.jsx)("h2",{className:"author",children:c}),t.map((function(e){return Object(o.jsxs)("div",{className:"blogpreview",children:[Object(o.jsxs)(a.b,{to:"BlogDetails/".concat(e.id),children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("span",{children:e.content})]}),Object(o.jsxs)("h4",{children:["Written By ",e.author]})]},e.id)}))]})},b=c(8),h=function(e){var t=new AbortController,c=Object(n.useState)(null),s=Object(b.a)(c,2),l=s[0],r=s[1],a=Object(n.useState)(!0),o=Object(b.a)(a,2),i=o[0],j=o[1],h=Object(n.useState)(null),d=Object(b.a)(h,2),u=d[0],O=d[1];return Object(n.useEffect)((function(){return setTimeout((function(){return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){r(e),j(!1),O(null)})).catch((function(e){"AbortError"===e.name?console.log("gh"):(j(!1),O(e.message))}))}),200),function(){return t.abort()}}),[e]),{data:l,loading:i,error:u}},d=function(){var e=h("http://localhost:8000/blogs"),t=e.data,c=e.loading,n=e.error;return Object(o.jsxs)("div",{className:"home",children:[n&&Object(o.jsxs)("div",{className:"error",children:[" ",n," "]}),c&&Object(o.jsx)("div",{className:"loading",children:"Loading..."}),t&&Object(o.jsx)(j,{title:"All Blogs",blogs:t}),t&&Object(o.jsx)(j,{title:"Arun Blogs",blogs:t.filter((function(e){return"Arun"===e.author}))})]})},u=(c(29),c(2)),O=function(){return Object(o.jsx)("div",{className:"aboutus",children:Object(o.jsx)("h1",{children:"About"})})},x=function(){var e=Object(u.g)().id,t=h("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,s=t.loading,l=Object(u.f)();return Object(o.jsxs)("div",{className:"blogdetails",children:[s&&Object(o.jsx)("div",{className:"loading",children:"Loading..."}),n&&Object(o.jsx)("div",{className:"error",children:n}),c&&Object(o.jsxs)("article",{className:"blogpreview",children:[Object(o.jsx)("h2",{children:c.title}),Object(o.jsx)("span",{children:c.fullcontent}),Object(o.jsxs)("h4",{children:["Written By ",c.author]}),Object(o.jsx)("button",{className:"delete",onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){l.push("/")}))},children:"Delete"})]})]})},g=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)(),r=Object(b.a)(l,2),a=r[0],i=r[1],j=Object(n.useState)(),h=Object(b.a)(j,2),d=h[0],O=h[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=g[0],m=g[1],v=Object(u.f)();return Object(o.jsxs)("div",{className:"newblog",children:[Object(o.jsx)("h1",{children:"Create A New Blog"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,content:a,author:d};m(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"content-Type":"Application/json"},body:JSON.stringify(t)}).then((function(){console.log("new blog Added"),m(!1),v.push("/")}))},className:"from",children:[Object(o.jsx)("label",{children:"Title:"}),Object(o.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"",children:"Content:"}),Object(o.jsx)("textarea",{type:"text",required:!0,value:a,onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"",children:"Author:"}),Object(o.jsxs)("select",{value:d,onChange:function(e){return O(e.target.value)},children:[Object(o.jsx)("option",{value:"Sridhar",children:"Sridhar"}),Object(o.jsx)("option",{value:"Manoj",children:"Manoj"}),Object(o.jsx)("option",{value:"Maria",children:"Maria"}),Object(o.jsx)("option",{value:"Ganesh",children:"Ganesh"})]}),!f&&Object(o.jsx)("button",{children:"Add Blog"}),f&&Object(o.jsx)("button",{disabled:!0,children:"Loading..."})]})]})},f=function(){return Object(o.jsxs)("div",{className:"notfound",children:[Object(o.jsx)("h1",{children:"sorry..."}),Object(o.jsx)("h4",{children:"Page Not Found"}),Object(o.jsx)("h4",{children:Object(o.jsx)(a.b,{to:"/",children:"Go Back to home Page"})}),Object(o.jsx)("h4",{children:Object(o.jsx)(a.b,{to:"/NewBlog",children:"Want to Create New Blog"})})]})};var m=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(u.a,{path:"/NewBlog",children:Object(o.jsx)(g,{})}),Object(o.jsx)(u.a,{path:"/About",children:Object(o.jsx)(O,{})}),Object(o.jsx)(u.a,{path:"/BlogDetails/:id",children:Object(o.jsx)(x,{})}),Object(o.jsx)(u.a,{path:"*",children:Object(o.jsx)(f,{})})]})})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),l(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.b5331c9b.chunk.js.map