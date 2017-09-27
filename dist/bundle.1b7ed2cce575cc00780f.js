webpackJsonp([1],{464:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(30),s=n(915),d=r(s),p=n(916),m=r(p),b=n(917),h=r(b),y=n(918),v=r(y),w=n(919),_=r(w),E=n(920),g=r(E),O=n(921),j=r(O);n(922);var k=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderFirstRow=n.renderFirstRow.bind(n),n.renderSecondRow=n.renderSecondRow.bind(n),n.renderRow=n.renderRow.bind(n),n}return l(t,e),u(t,[{key:"renderFirstRow",value:function(){var e=[{name:"Django",iconClass:"devicon-django-plain"},{name:"Node",iconClass:"devicon-nodejs-plain"},{name:"Meteor",iconClass:"devicon-meteor-plain"},{name:"React",iconClass:"devicon-react-original"}];return this.renderRow(e)}},{key:"renderSecondRow",value:function(){var e=[{name:"Python",iconClass:"devicon-python-plain"},{name:"Java",iconClass:"devicon-java-plain"}];return this.renderRow(e)}},{key:"renderRow",value:function(e){var t=this;return e.map(function(e){return c.default.createElement(f.Grid.Column,{key:e.name},c.default.createElement("i",{className:t.props.detailed?e.iconClass+" colored":e.iconClass}),c.default.createElement("br",null),c.default.createElement("h4",null,e.name))})}},{key:"renderMoreDetails",value:function(){var e=[{name:"Redux",src:d.default},{name:"Webpack",src:m.default},{name:"jQuery",src:h.default},{name:"SemanticUI",src:v.default},{name:"Bootstrap",src:_.default},{name:"Materialize",src:g.default},{name:"PyTorch",src:j.default}];return c.default.createElement("div",{id:"more-details"},c.default.createElement("h3",null,"Other Technologies"),c.default.createElement(f.List,{horizontal:!0},e.map(function(e){return c.default.createElement(f.List.Item,{key:e.name},c.default.createElement(f.Image,{src:e.src,height:"40",width:"40"}),c.default.createElement(f.List.Content,null,e.name))})))}},{key:"render",value:function(){return c.default.createElement("div",{className:"section-margin"},c.default.createElement("h1",null,"Web Development"),c.default.createElement(f.Grid,{padded:!0,columns:4},c.default.createElement(f.Grid.Row,null,this.renderFirstRow())),c.default.createElement("br",null),c.default.createElement("h1",null,"Software Engineering"),c.default.createElement(f.Grid,{padded:!0,columns:2},c.default.createElement(f.Grid.Row,null,this.renderSecondRow())),this.props.detailed&&this.renderMoreDetails())}}]),t}(i.Component);t.default=k},465:function(e,t,n){e.exports=n.p+"dff5cbf4b41633fc24d0bc368fb3646c.jpg"},466:function(e,t,n){e.exports=n.p+"634841c42c4b58b222aacd3aa0d3f206.jpg"},467:function(e,t){},468:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(30),s=n(924),d=r(s),p=n(925),m=r(p);n(926);var b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"section-margin"},c.default.createElement(f.Divider,null),c.default.createElement(f.Divider,{className:"section-divider",horizontal:!0},c.default.createElement("h3",null,"Resume")),c.default.createElement(f.Container,null,c.default.createElement(f.Modal,{basic:!0,trigger:c.default.createElement(f.Image,{id:"resume-modal",size:"big",centered:!0,src:d.default})},c.default.createElement(f.Modal.Content,{image:!0},c.default.createElement(f.Image,{wrapped:!0,src:d.default}))),c.default.createElement("br",null),c.default.createElement("a",{href:m.default},c.default.createElement("h2",null,"Download Resume")),c.default.createElement("br",null)))}}]),t}(i.Component);t.default=b},469:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(30);n(927);var f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"renderPowered",value:function(){return i.default.createElement("div",null,i.default.createElement("p",{id:"powered"},"Powered By Me"))}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("div",{id:"contact",className:"section-margin"},i.default.createElement(c.Divider,null),i.default.createElement(c.Divider,{className:"section-divider",horizontal:!0},i.default.createElement("h3",null,"Contact")),i.default.createElement("div",null,i.default.createElement("a",{href:"https://www.linkedin.com/in/jonzhou1/"},i.default.createElement(c.Icon,{name:"linkedin square",link:!0,size:"big"})),i.default.createElement("a",{href:"mailto:jonathan.zhou93@gmail.com"},i.default.createElement(c.Icon,{name:"mail",link:!0,size:"big"})))),this.props.detailed&&this.renderPowered())}}]),t}(u.Component);t.default=f},489:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),l=n(161),u=r(l),i=n(580),c=r(i);n(940),u.default.render(a.default.createElement("div",null,a.default.createElement(c.default,null)),document.querySelector(".container"))},580:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(581),s=r(f),d=n(909),p=r(d),m=n(937),b=r(m),h=n(939),y=(r(h),function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeCircle:2},n.changeActiveCircle=n.changeActiveCircle.bind(n),n}return l(t,e),u(t,[{key:"changeActiveCircle",value:function(e){this.setState({activeCircle:e}),scroll(0,0)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.default,{activeCircle:this.state.activeCircle,onCircleClick:this.changeActiveCircle}),c.default.createElement(p.default,{activeCircle:this.state.activeCircle}),c.default.createElement(b.default,null))}}]),t}(i.Component));t.default=y},581:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(30);n(908);var f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderCircles=n.renderCircles.bind(n),n.less=n.less.bind(n),n.more=n.more.bind(n),n}return a(t,e),l(t,[{key:"renderCircles",value:function(){var e=this;return[0,1,2,3,4].map(function(t){return i.default.createElement(c.Menu.Item,{key:t,onClick:function(){return e.props.onCircleClick(t)}},i.default.createElement(c.Icon,{size:"large",name:e.props.activeCircle===t?"circle":"circle thin"}))})}},{key:"less",value:function(){this.props.activeCircle>0&&this.props.onCircleClick(this.props.activeCircle-1)}},{key:"more",value:function(){this.props.activeCircle<4&&this.props.onCircleClick(this.props.activeCircle+1)}},{key:"addSwiper",value:function(){}},{key:"render",value:function(){return i.default.createElement(c.Menu,{id:"header",borderless:!0,widths:"8",fixed:"top"},i.default.createElement(c.Menu.Item,{onClick:this.less},"Fewer Details"),this.renderCircles(),i.default.createElement(c.Menu.Item,{onClick:this.more},"More Details"))}}]),t}(u.Component);t.default=f},908:function(e,t){},909:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(910),s=r(f),d=n(912),p=r(d),m=n(914),b=r(m),h=n(929),y=r(h),v=n(935),w=r(v),_=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.renderContent=n.renderContent.bind(n),n}return l(t,e),u(t,[{key:"renderContent",value:function(){switch(this.props.activeCircle){case 0:return c.default.createElement(s.default,null);case 1:return c.default.createElement(p.default,null);case 2:return c.default.createElement(b.default,null);case 3:return c.default.createElement(y.default,null);case 4:return c.default.createElement(w.default,null)}}},{key:"render",value:function(){return c.default.createElement("div",{className:"header-margin"},this.renderContent())}}]),t}(i.Component);t.default=_},910:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u);n(911);var c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",{id:"lowball"},i.default.createElement("h1",null,"Here Be Developer"))}}]),t}(u.Component);t.default=c},911:function(e,t){},912:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(30);n(913);var f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement(c.Container,{id:"brief"},i.default.createElement("h2",null,"Hello! My name is Jon. I'm a Web Developer and Software Engineer.",i.default.createElement("br",null),i.default.createElement("br",null),"I primarily provide full stack web development (especially w/ React) and Python engineering. You can ",i.default.createElement("a",{href:"assets/Resume.pdf"},"Download my Resume Here "),"and check out ",i.default.createElement("a",{href:"http://officialunderblue.com"},"A Website I Made Here. "),i.default.createElement("br",null),i.default.createElement("br",null),"If you have any questions, or have need of my tech services, feel free to contact me at jonathan.zhou93@gmail.com, or check out my ",i.default.createElement("a",{href:"https://www.linkedin.com/in/jonzhou1/"},"LinkedIn.")),i.default.createElement(c.Icon,{name:"computer",size:"huge"}))}}]),t}(u.Component);t.default=f},913:function(e,t){},914:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(30),s=n(464),d=r(s),p=n(923),m=r(p),b=n(468),h=r(b),y=n(469),v=r(y);n(928);var w=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(f.Segment,{id:"landing",inverted:!0,padded:!0},c.default.createElement("h1",{id:"name"},"Jonathan Zhou"),c.default.createElement("h3",null,"Software Engineer & Web Developer")),c.default.createElement(d.default,null),c.default.createElement(m.default,null),c.default.createElement(h.default,null),c.default.createElement(v.default,null))}}]),t}(i.Component);t.default=w},915:function(e,t,n){e.exports=n.p+"7b75f8d24a6253b6ea72f36be0ca73e1.png"},916:function(e,t,n){e.exports=n.p+"c59db8a099f134c3343802afcaf5a5fd.png"},917:function(e,t,n){e.exports=n.p+"af3c21bccb1ddda567a1f5df09bd7dd7.png"},918:function(e,t,n){e.exports=n.p+"d6658ee931e117d6c9414a267569b953.png"},919:function(e,t,n){e.exports=n.p+"8a42533f0044857d9c85c20b235a1962.png"},920:function(e,t,n){e.exports=n.p+"1652032019ceafecfe6bbdd9305098e6.png"},921:function(e,t,n){e.exports=n.p+"5dddecc9a5b8b4a7655b1ec85dc02df8.png"},922:function(e,t){},923:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(30),s=n(465),d=r(s),p=n(466),m=r(p);n(467);var b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"section-margin"},c.default.createElement(f.Divider,null),c.default.createElement(f.Divider,{className:"section-divider",horizontal:!0},c.default.createElement("h3",null,"Portfolio")),c.default.createElement(f.Container,null,c.default.createElement("h3",null,"officialunderblue.com"),c.default.createElement(f.Image,{centered:!0,size:"big",src:d.default,href:"http://officialunderblue.com"})),c.default.createElement(f.Divider,{hidden:!0}),c.default.createElement(f.Container,null,c.default.createElement("h3",null,"wrkbook.com (contributor)"),c.default.createElement(f.Image,{centered:!0,size:"big",src:m.default,href:"http://wrkbook.com"})))}}]),t}(i.Component);t.default=b},924:function(e,t,n){e.exports=n.p+"031c95eeb7fa8d587b5fa6f778070f85.jpg"},925:function(e,t,n){e.exports=n.p+"81adcf764f890cf620e19b54805d6385.pdf"},926:function(e,t){},927:function(e,t){},928:function(e,t){},929:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=(n(30),n(464)),s=r(f),d=n(930),p=r(d),m=n(468),b=r(m),h=n(931),y=r(h),v=n(469),w=r(v);n(934);var _=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,c.default.createElement("div",{id:"portrait-landing"}),c.default.createElement("div",{id:"portrait-info"},c.default.createElement("h1",{id:"portrait-name"},"Jonathan Zhou"),c.default.createElement("h3",null,"Software Engineer, Web Developer, Musician, and Creator. Strives to make things that do good (and do well!)"))),c.default.createElement(s.default,{detailed:!0}),c.default.createElement(p.default,null),c.default.createElement(b.default,null),c.default.createElement(y.default,null),c.default.createElement(w.default,{detailed:!0}))}}]),t}(i.Component);t.default=_},930:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(30),s=n(465),d=r(s),p=n(466),m=r(p);n(467);var b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"section-margin"},c.default.createElement(f.Divider,null),c.default.createElement(f.Divider,{className:"section-divider",horizontal:!0},c.default.createElement("h3",null,"Portfolio")),c.default.createElement(f.Grid,{stackable:!0},c.default.createElement(f.Grid.Row,{columns:1},c.default.createElement(f.Grid.Column,null,c.default.createElement("h3",null,"officialunderblue.com"))),c.default.createElement(f.Grid.Row,{columns:2},c.default.createElement(f.Grid.Column,null,c.default.createElement(f.Image,{size:"big",src:d.default,href:"http://officialunderblue.com"})),c.default.createElement(f.Grid.Column,{verticalAlign:"middle"},c.default.createElement("h3",null,"officialunderblue.com is the (aptly named) official website of the NYC indie rock band Underblue, in which Jon also performs as a guitarist and composer. The website is built almost entirely with React, Javascript, and Webpack")))),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement(f.Grid,{stackable:!0},c.default.createElement(f.Grid.Row,{columns:1},c.default.createElement(f.Grid.Column,null,c.default.createElement("h3",null,"wrkbook.com (contributor)"))),c.default.createElement(f.Grid.Row,{columns:2},c.default.createElement(f.Grid.Column,null,c.default.createElement(f.Image,{size:"big",src:m.default,href:"http://wrkbook.com"})),c.default.createElement(f.Grid.Column,{verticalAlign:"middle"},c.default.createElement("h3",null,"WrkBook is a job matching and employment services company for contractors and skilled laborers, based in NYC. The company uses React and Meteor to build its website. WrkBook was in Alpha as of Summer 2017.")))))}}]),t}(i.Component);t.default=b},931:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(30),f=n(932);n(933);var s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activeIndex:0},n.renderAccordion=n.renderAccordion.bind(n),n.handleClick=n.handleClick.bind(n),n}return a(t,e),l(t,[{key:"renderAccordion",value:function(){var e=[{id:0,title:"What kind of development do you do?",content:f.commonText},{id:1,title:"How long have you been programming?",content:f.howLongText},{id:2,title:"Did you go to school for computer science?",content:f.studyText},{id:3,title:"What's the best way to get in touch with you?",content:f.contactText},{id:4,title:"Do you take contracts/commissions?",content:f.commissionsText},{id:5,title:"What's your favorite programming language?",content:f.favoriteLanguageText}];return i.default.createElement(c.Accordion,{id:"accordion",panels:e,styled:!0,fluid:!0})}},{key:"handleClick",value:function(){}},{key:"render",value:function(){return i.default.createElement("div",{className:"section-margin"},i.default.createElement(c.Divider,null),i.default.createElement(c.Divider,{className:"section-divider",horizontal:!0},i.default.createElement("h3",null,"FAQ")),this.renderAccordion())}}]),t}(u.Component);t.default=s},932:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contactText="Send me an email at jonathan.zhou93@gmail.com. I'll usually respond  within 24 hours!",t.commissionsText="I mostly certainly do - For contract work and commissions, just send me an email with the details of your job and we can take it from there.",t.howLongText="I've been programming on a regular basis for over a year, though I've been workingirregularly in tech both at work and at home for much longer. I started studying computer science and development full time in February 2017.",t.studyText="No, I went to school for Marketing and Consulting. But I naturally gravitated towardstech and programming tasks in my first job out of college, and became certain in short time that programmingwas my Path. Funny how it works that way.",t.commonText="These days I work most often with full stack web development, though I also build traditional desktop apps as well. My long term personal projects usually have to do with neural networks and AI.",t.favoriteLanguageText="Javascript tries, but alas, my heart belongs to Python."},933:function(e,t){},934:function(e,t){},935:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u);n(936);var c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("iframe",{id:"wikipedia",src:"https://en.wikipedia.org/wiki/Programmer"}))}}]),t}(u.Component);t.default=c},936:function(e,t){},937:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(30);n(938);var f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(c.Menu,{id:"footer",fixed:"bottom",compact:!0,secondary:!0},i.default.createElement(c.Menu.Item,{href:"https://github.com/Argonautic"},i.default.createElement(c.Icon,{name:"github",size:"large"})),i.default.createElement(c.Menu.Item,{href:"https://www.linkedin.com/in/jonzhou1/"},i.default.createElement(c.Icon,{name:"linkedin square",link:!0,size:"large"})),i.default.createElement(c.Menu.Item,{href:"mailto:jonathan.zhou93@gmail.com"},i.default.createElement(c.Icon,{name:"mail",link:!0,size:"large"}))))}}]),t}(u.Component);t.default=f},938:function(e,t){},939:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(function(e){return i.default.createElement("h1",null,"Hi!")}))}}]),t}(u.Component);t.default=c},940:function(e,t){}},[489]);