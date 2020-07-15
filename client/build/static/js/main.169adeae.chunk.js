(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),l=(a(37),a(7)),s=a(8),i=a(10),u=a(9),m=a(11),h=a(13),d=a(1);a(38);var v=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg text-light"},o.a.createElement("div",{className:"container"},o.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Google Books"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(h.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"}," Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(h.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))))};var f=function(){return o.a.createElement("div",{className:"jumbotron text-center"},o.a.createElement("div",{className:"container text-light"},o.a.createElement("h1",null," Google Books Search ")))};var k=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))};var b=function(){return o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},p=a(31);var E=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},o.a.createElement("h2",null,"Search for and save Books of Interest")),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search a Book",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-dark mt-3 mb-5"},"Search"))))},g=a(15),B=a.n(g),N={getBook:function(e){return B.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},deleteBook:function(e){return B.a.delete("/api/book/"+e).then(function(e){return e.data})},saveBook:function(e){return B.a.post("/api/book",e).then(function(e){return e.data})},savedBooks:function(){return B.a.get("/api/book").then(function(e){return e.data})}},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a.handleSave=function(e){a.state.savedBooks.map(function(e){return e._id}).includes(e._id)?N.deleteBook(e._id).then(function(e){return a.setState({savedBooks:a.state.savedBooks.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.error(e)}):N.saveBook(e).then(function(e){return a.setState({savedBooks:a.state.savedBooks.concat([e])})}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.books.length?o.a.createElement("div",null,this.props.books.map(function(t){return o.a.createElement("div",{className:"card mb-3",key:t._id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement("img",{alt:t.title,className:"img-fluid",src:t.image})),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.title," by ",t.authors),o.a.createElement("p",{className:"card-text"},t.description),o.a.createElement("div",null,o.a.createElement("a",{href:t.link,className:"btn badge-pill btn-outline-dark mt-3"},"View"),o.a.createElement("button",{onClick:function(){return e.handleSave(t)},className:"btn badge-pill btn-outline-warning mt-3 ml-3"},e.state.savedBooks.map(function(e){return e._id}).includes(t._id)?"Unsave":"Save"))))))})):o.a.createElement("h1",{className:"text-center"},"No Results to Display"))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",books:[]},a.makeBook=function(e){return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}},a.searchBook=function(e){N.getBook(e).then(function(e){return a.setState({books:e.data.items.map(function(e){return a.makeBook(e)})})}).catch(function(e){return console.error(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBook(a.state.search)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchBook()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Results"),o.a.createElement(w,{books:this.state.books})))}}]),t}(o.a.Component),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Saved books"),o.a.createElement(w,{books:this.state.savedBooks}))}}]),t}(n.Component),O=(a(61),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(f,null),o.a.createElement(k,null,o.a.createElement(d.a,{exact:!0,path:"/",component:j}),o.a.createElement(d.a,{exact:!0,path:"/search",component:j}),o.a.createElement(d.a,{exact:!0,path:"/saved",component:y}),o.a.createElement(d.a,{exact:!0,path:"/noMatch",component:b}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[32,1,2]]]);
//# sourceMappingURL=main.169adeae.chunk.js.map