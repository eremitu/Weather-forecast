(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(21)},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),s=n(2),c=n(3),u=n(5),l=n(4),p=n(6),d=n(8),h=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={latitude:null,longitude:null},n.handleGetGeoClick=n.handleGetGeoClick.bind(Object(d.a)(n)),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"handleGetGeoClick",value:function(){this.getGeo()}},{key:"getGeo",value:function(){var t,e=this;new Promise(function(e,n){navigator.geolocation.getCurrentPosition(e,n,t)}).then(function(t){return e.coords=t,e.coords}).catch(function(t){alert(t.message)}).then(function(t){return e.setState({latitude:t.coords.latitude,longitude:t.coords.longitude},function(){return e.props.liftingData(e.state.latitude,e.state.longitude)}),e.coords})}},{key:"render",value:function(){return r.a.createElement("div",{className:"geoButton"},r.a.createElement("button",{className:"geoButton-btn btn btn-primary btn-lg active","aria-pressed":"true",onClick:this.handleGetGeoClick()},"Get coords"),r.a.createElement("div",{onLoad:this.handleGetGeoClick()},"Your latitude is:  ",this.state.latitude?this.state.latitude:"0.0"," ; Your longitude is:  ",this.state.longitude?this.state.longitude:"0.0"))}}]),e}(r.a.Component),f=n(1),m=n.n(f),b=n(7),v="7a1ee10880b498dbc386741f0bb3f9dd",g=n(12),j=n.n(g),w=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={error:null,isLoaded:!1,items:[],input:""},n.componentDidMount=n.componentDidMount.bind(Object(d.a)(n)),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t){this.props.props.input!==t.props.input&&(console.log("\u0410\u0421\u0422\u0410\u041d\u0410\u0412\u0418\u0421\u042c"),this.search())}},{key:"componentDidMount",value:function(){var t=this;new Promise(function(){var e=Object(b.a)(m.a.mark(function e(n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(function(){n(t.props)},1e3);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.props.props.latitude,"&lon=").concat(t.props.props.longitude,"&appid=").concat(v)).then(function(){var t=Object(b.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).then(function(e){t.setState({isLoaded:!0,items:e})},function(e){t.setState({isLoaded:!0,error:e})});case 2:case"end":return e.stop()}},e)})))}},{key:"search",value:function(){var t=this;new Promise(function(){var e=Object(b.a)(m.a.mark(function e(n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(function(){n(t.props)},1e3);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t.props.props.input,"&appid=").concat(v)).then(function(){var t=Object(b.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).then(function(e){t.setState({isLoaded:!0,items:e})},function(e){t.setState({isLoaded:!0,error:e})});case 2:case"end":return e.stop()}},e)})))}},{key:"render",value:function(){var t=this.state,e=t.isLoaded,n=t.items;return null!=this.state.error?r.a.createElement("div",{className:"container-fluid data text-center"},"API Server is not responding "):e?j.a.isUndefined(n)?r.a.createElement("div",{className:"container-fluid data"},"Unable to get your GeoLocation or server went wrong"):r.a.createElement("div",{className:"container-fluid data"},"In ",n.name,". Temperature now is ",n.main.temp," F Athmospheric pressure is ",n.main.pressure," mbar"):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),e}(r.a.Component),O=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={input:""},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"handleSubmit",value:function(t){t.preventDefault(),console.log(this.state.input),this.props.liftingData(this.state.input)}},{key:"handleChange",value:function(t){this.setState({input:t.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{id:"searchBar"},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"searchForm",placeholder:"Where do you live?",value:this.state.input,onChange:this.handleChange.bind(this)}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary searchButton",onClick:this.handleSubmit.bind(this)},"Search"))}}]),e}(r.a.Component),k=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).getInput=function(t){n.setState({input:t}),console.log("input is in APP")},n.getPosition=function(t,e){n.setState({latitude:t,longitude:e})},n.state={latitude:null,longitude:null,input:""},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{liftingData:this.getPosition}),r.a.createElement(w,{props:this.state}),r.a.createElement(O,{liftingData:this.getInput}))}}]),e}(r.a.Component);n(20);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.491c56fe.chunk.js.map