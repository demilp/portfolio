(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"0879":function(t,e,n){t.exports=n.p+"img/react-logo.ac1d3501.png"},"0f21":function(t,e,n){},1029:function(t,e,n){t.exports=n.p+"img/asp-logo.81761cbc.png"},1771:function(t,e,n){var i={"./asp-logo.png":"1029","./cloud-background.png":"6747","./cordova-logo.png":"b529","./js-logo.png":"c0fe","./name-demian.jpg":"3211","./node-logo.png":"2b8c","./python-logo.png":"6424","./react-logo.png":"0879","./tensorflow-logo.png":"2969","./unity-logo.png":"7b2e","./vue-logo.png":"2c09","./webpack-logo.png":"a097"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="1771"},"23f0":function(t,e,n){"use strict";var i=n("9c96"),s=n.n(i);s.a},2969:function(t,e,n){t.exports=n.p+"img/tensorflow-logo.1402b489.png"},"2b3c":function(t,e,n){},"2b8c":function(t,e,n){t.exports=n.p+"img/node-logo.b5c26fff.png"},"2c09":function(t,e,n){t.exports=n.p+"img/vue-logo.41131678.png"},3211:function(t,e,n){t.exports=n.p+"img/name-demian.c8f4ff80.jpg"},"528c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}}),i("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[i("img",{attrs:{src:n("3211"),width:"156",height:"30"}})]),i("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.showNav=!t.showNav}}},[i("span",{attrs:{"aria-hidden":"true"}}),i("span",{attrs:{"aria-hidden":"true"}}),i("span",{attrs:{"aria-hidden":"true"}})])],1),i("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarBasicExample"}},[i("div",{staticClass:"navbar-start"}),i("div",{staticClass:"navbar-end"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n          Home\n        ")]),i("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("\n          About\n        ")]),i("router-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v("\n          Projects\n        ")]),i("router-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v("\n          Contact\n        ")])],1)])]),i("router-view")],1)},a=[],o={name:"App",data:function(){return{showNav:!1}}},r=o,c=(n("034f"),n("b184"),n("2877")),l=Object(c["a"])(r,s,a,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hero-home is-cover is-relative is-fullheight-with-navbar is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-1"},[t._v("Hello, I'm Demián.")]),n("h2",{staticClass:"subtitle is-3"},[t._v("\n          A customer focused, entrepreneurially minded software engineer.\n        ")])])])])])}],h={name:"home"},v=h,g=Object(c["a"])(v,p,m,!1,null,null,null),f=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._m(1),t._m(2),n("section",{staticClass:"section"},[n("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v("\n      Technologies I've Worked With\n    ")]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("Tech",{attrs:{title:"Vue.js",snippet:"Full production applications written in Vue",image:"vue-logo.png"}}),n("Tech",{attrs:{title:"JavaScript",snippet:"Proficient in ES6 and ES5 JS",image:"js-logo.png"}}),n("Tech",{attrs:{title:"Node.js",snippet:"Back-ends written using Node and Express",image:"node-logo.png"}}),n("Tech",{attrs:{title:"Cordova",snippet:"Mobile applications built with Cordova",image:"cordova-logo.png"}})],1),n("div",{staticClass:"columns is-centered"},[n("Tech",{attrs:{title:"Unity3d",snippet:"Games and interactive experiences developed using Unity3D",image:"unity-logo.png"}}),n("Tech",{attrs:{title:"ASP.NET",snippet:"Services and tools built with ASP.NET and .NET",image:"asp-logo.png"}}),n("Tech",{attrs:{title:"React.js",snippet:"Web templates written in React",image:"react-logo.png"}}),n("Tech",{attrs:{title:"Tensorflow",snippet:"Machine learning models build with Tensorflow",image:"tensorflow-logo.png"}})],1),n("p",{staticClass:"tech-box-title title is-4 has-text-weight-light has-text-centered"},[t._v("\n        Web API's • Mongodb • Angular • Machine Learning • SQL Server • Git •\n        Webpack • Entity Framework • jQuery • Photoshop • 3ds Max\n      ")])])]),n("section",{staticClass:"section has-background-light"},[n("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v("\n      What Drives Me\n    ")]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-half content"},[n("ul",[n("li",[n("Strong",[t._v("An innate desire to learn:")]),t._v("\n              Through the years I've been passionate about learning new\n              technologies and being able to develop full-fledged applications\n              from begining to end.\n            ")],1),n("li",[n("Strong",[t._v("A passion for automatization:")]),t._v(" Many of the\n              projects that I am most proud of, are tools that can help a team\n              focus on the most important parts of a development by automating\n              repetitive tasks.\n            ")],1),n("li",[n("Strong",[t._v("Always creating:")]),t._v(" I believe that the best way of\n              learning is by doing. Prototyping a proof of concept, failing\n              fast if necessary and iterating even faster.\n            ")],1),n("li",[n("Strong",[t._v("Being surrounded by great people:")]),t._v(" I consider it\n              essential to be able to work with a passionate, skilled and\n              reliable group of people.\n            ")],1)])])])])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-medium is-primary is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-2"},[t._v("\n          Meet Demián\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v("\n      What I Bring\n    ")]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"box"},[n("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v("\n              Front End Focus\n            ")]),n("p",[t._v("\n              Focused on building user interfaces with JS (Vue, React, ES6),\n              HTML, and CSS that are well designed and functional.\n            ")])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"box"},[n("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v("\n              Full Stack Experience\n            ")]),n("p",[t._v("\n              Experience working across the application stack using APIs,\n              Node, Mongo, Heroku, ASP.NET, SQL Server and IIS to deliver\n              production applications from design to deployment.\n            ")])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"box"},[n("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v("\n              Broad Customer Focused Experience\n            ")]),n("p",[t._v("\n              5 years of experience developing interactive experiences + 2\n              years of experience developing a digital signage platform to\n              help brands reach their audience.\n            ")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section has-background-light"},[n("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v("\n      Where I Come From\n    ")]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-four-fifths"},[n("p",[t._v("\n            In 2015 I joined SIA Interactive, where I developed over hundreds\n            of interactive experiences and R+D projects from begining to end,\n            using a broad variety of technologies and devices like DSLR\n            cameras, NFC and RFID tags, Kinect sensors, fingerprint readers,\n            handheld devices, VR headsets and more. I learned to work under\n            high pressure on a fast-paced environment as most projects are\n            confirmed by the client one or two weeks before delivery time, and\n            are subject to last minute changes on the client's demand. Because\n            of this, I designed and developed diverse reusable modular systems\n            that minimized developement time by over 50%, as well as the\n            server that connects them all. This whole system consisting of\n            modular clients allowed the company to sell projects with a higher\n            added value that couldn't have been done before."),n("br"),t._v("\n            In 2017 I changed from the interactive experiences development\n            area to Dex Manager, a digital signage platform that runs on\n            Android, Chrome, Tizen and WebOs with a single JavaScript\n            codebase. It was there that I learned how to work on a large scale\n            project with long term support while designing the architecture of\n            new features.\n          ")])])])])])}],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column is-one-fifth"},[i("div",{staticClass:"box"},[i("figure",{staticClass:"image is-square"},[i("img",{attrs:{src:n("1771")("./"+t.image),alt:"Placeholder image"}})]),i("h3",{staticClass:"tech-box-title title is-4 has-text-weight-medium has-text-centered"},[t._v("\n      "+t._s(t.title)+"\n    ")]),i("p",[t._v("\n      "+t._s(t.snippet)+"\n    ")])])])},w=[],x={name:"Tech",props:{title:String,snippet:String,image:String}},y=x,j=(n("d497"),Object(c["a"])(y,_,w,!1,null,null,null)),k=j.exports,S={name:"about",components:{Tech:k}},E=S,R=(n("e76e"),Object(c["a"])(E,b,C,!1,null,null,null)),I=R.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero is-medium is-primary is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-2"},[t._v("\n          Get In Touch\n        ")])])])]),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-one-third"},[n("div",{staticClass:"box"},[n("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v("\n              Email\n            ")]),n("p",[n("a",{attrs:{href:"mailto:demilp.dev@gmail.com"}},[t._v("demilp.dev@gmail.com")])]),n("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v("\n              Linkedin\n            ")]),n("p",[n("a",{attrs:{href:"https://www.linkedin.com/in/demian-levy-polat-63181353/"}},[t._v("\n                https://www.linkedin.com/in/demian-levy-polat-63181353/\n              ")])]),n("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v("\n              Github\n            ")]),n("p",[n("a",{attrs:{href:"https://github.com/demilp"}},[t._v("github.com/demilp")])])])])])])])])}],T={name:"contact"},M=T,$=Object(c["a"])(M,P,O,!1,null,null,null),A=$.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("section",{staticClass:"section"},[n("div",{staticClass:"container is-fluid"},[n("div",{staticClass:"columns is-multiline"},t._l(t.projects,(function(e,i){return n("div",{key:i,staticClass:"column is-one-fifth"},[n("post-card",t._b({},"post-card",e,!1))],1)})),0)])])])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-medium is-primary is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-2"},[t._v("\n          Some of the projects that I have built\n        ")])])])])}],D=(n("96cf"),n("3b8d")),B=n("bc3a"),L=n.n(B),W=L.a.create({baseURL:"https://api.airtable.com/v0/appnaZi5KLOcogH1u/Projects"}),z="key2r8YPfnqdhnlVl";W.defaults.headers.common={Authorization:"Bearer "+z};var V={getProjects:function(){return W.get("?view=Ordered")},getProject:function(t){return W.get("?filterByFormula={Slug}='"+t+"'")}},J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-card"},[n("router-link",{attrs:{to:"/project/"+t.slug}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-fullwidth"},[n("img",{ref:"img",attrs:{src:t.image,alt:"Placeholder image"}})])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(t.title))])])]),n("div",{staticClass:"content"},[n("p",[t._v(t._s(t.snippet))]),n("button",{staticClass:"button is-fullwidth"},[t._v("View Project")])])])])])],1)},H=[],U={name:"PostCard",props:{title:String,date:String,snippet:String,image:String,slug:String}},G=U,Q=(n("b7dd"),Object(c["a"])(G,J,H,!1,null,"7e5962d0",null)),q=Q.exports,K={name:"projects",components:{PostCard:q},data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return n.apply(this,arguments)}function n(){return n=Object(D["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.getProjects();case 3:n=e.sent,console.log(n),t.airtableResponse=n.data.records,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.apply(this,arguments)}e()},computed:{projects:function(){for(var t=this,e=[],n=0;n<t.airtableResponse.length;n++)if(t.airtableResponse[n].fields.Published){var i={title:t.airtableResponse[n].fields.Title,date:t.airtableResponse[n].fields["Date Published"],snippet:t.airtableResponse[n].fields.Excerpt,image:t.airtableResponse[n].fields.Image?t.airtableResponse[n].fields.Image[0].url:"",slug:t.airtableResponse[n].fields.slug};e.push(i)}return e}}},Y=K,Z=Object(c["a"])(Y,N,F,!1,null,null,null),X=Z.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero is-medium is-primary is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[t.project?n("h1",{staticClass:"title is-2"},[t._v("\n          "+t._s(t.project.title)+"\n        ")]):t._e(),t.project?n("h2",{staticClass:"subtitle is-4"},[t._v("\n          "+t._s(t.project.snippet)+"\n        ")]):t._e()])])]),n("section",{staticClass:"section"},[n("div",{staticClass:"container is-fluid"},[n("div",{staticClass:"columns"},[t.project?n("div",{staticClass:"column is-two-thirds"},[n("vue-simple-markdown",{attrs:{source:t.project.body}})],1):t._e(),n("div",{staticClass:"column is-one-third"},[t.project?n("div",{staticClass:"columns is-multiline"},t._l(t.project.images,(function(t,e){return n("div",{key:e,staticClass:"column is-full"},[n("img",{attrs:{src:t.url}})])})),0):t._e()])]),t.project&&t.project.video?n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"853",height:"480",src:t.project.video,frameborder:"0",allowfullscreen:""}})]):t._e()])])])},et=[],nt={name:"project",data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return n.apply(this,arguments)}function n(){return n=Object(D["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.getProject(t.$route.params.slug);case 3:n=e.sent,console.log(n),t.airtableResponse=n.data.records,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.apply(this,arguments)}e()},computed:{project:function(){var t=this;if(t.airtableResponse[0]){var e={title:t.airtableResponse[0].fields.Title,snippet:t.airtableResponse[0].fields.Excerpt,images:t.airtableResponse[0].fields.Image,body:t.airtableResponse[0].fields.Body,video:t.airtableResponse[0].fields.Video};return e}return null}}},it=nt,st=(n("23f0"),Object(c["a"])(it,tt,et,!1,null,"5b0cbb7c",null)),at=st.exports;i["a"].use(d["a"]);var ot=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:f},{path:"/index.html",name:"home",component:f},{path:"/about",name:"about",component:I},{path:"/contact",name:"contact",component:A},{path:"/projects",name:"projects",component:X},{path:"/project/:slug",name:"project",component:at}]}),rt=n("7602"),ct=n.n(rt);n("0ae1");i["a"].use(ct.a),i["a"].config.productionTip=!1,new i["a"]({router:ot,render:function(t){return t(u)}}).$mount("#app")},6424:function(t,e,n){t.exports=n.p+"img/python-logo.bab39ee7.png"},"64a9":function(t,e,n){},6747:function(t,e,n){t.exports=n.p+"img/cloud-background.b40ab066.png"},"7b2e":function(t,e,n){t.exports=n.p+"img/unity-logo.77cc5720.png"},"9c96":function(t,e,n){},a097:function(t,e,n){t.exports=n.p+"img/webpack-logo.dcd5e077.png"},ace0:function(t,e,n){},b184:function(t,e,n){"use strict";var i=n("ace0"),s=n.n(i);s.a},b529:function(t,e,n){t.exports=n.p+"img/cordova-logo.e5931797.png"},b7dd:function(t,e,n){"use strict";var i=n("528c"),s=n.n(i);s.a},c0fe:function(t,e,n){t.exports=n.p+"img/js-logo.e8c27f6b.png"},d497:function(t,e,n){"use strict";var i=n("0f21"),s=n.n(i);s.a},e76e:function(t,e,n){"use strict";var i=n("2b3c"),s=n.n(i);s.a}});
//# sourceMappingURL=app.ccdc991c.js.map