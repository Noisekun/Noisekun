(this.webpackJsonpnoisekun=this.webpackJsonpnoisekun||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(19)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"HOST",(function(){return m}));var o=n(0),r=n.n(o),l=n(4),c=n.n(l),u=n(5);n.n(u).a.config();var m="https://noisekun-server.herokuapp.com";n(13),n(14),n(15);function i(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/Noisekun"},"Noisekun")))}n(16);function d(e){var t=e.Sound,n=e.VolumeController,a=e.changeStateOfAudio,o=e.env;return r.a.createElement("div",{className:"audios"},r.a.createElement(t,{name:"rain",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"storm",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"wind",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"water",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"ocean_waves",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"small_waves",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"forest_ambience",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"leafs",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"fire",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"night",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"coffee",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"fan",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"train",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"air_plane",changeStateOfAudio:a,VolumeController:n,env:o}),r.a.createElement(t,{name:"underwater",changeStateOfAudio:a,VolumeController:n,env:o}))}var s=n(1);n(17);function f(e){var t=e.name,n=e.changeStateOfAudio,a=e.VolumeController,l=e.env,c=Object(o.useState)(!1),u=Object(s.a)(c,2),m=u[0],i=u[1];return r.a.createElement("div",{className:"sound-component"},r.a.createElement("audio",{loop:!0,id:t},r.a.createElement("source",{src:"".concat(l.HOST,"/").concat(t),type:"audio/mp3"})),r.a.createElement("div",{className:"sound-button",id:"".concat(t,"_button"),onClick:function(){var e=document.querySelector("#".concat(t)),a=document.getElementById("".concat(t,"_button")),o=document.getElementById("".concat(t,"_audio_controller"));n(e,m,i,a,o)}},r.a.createElement("img",{src:"/Noisekun/icons/".concat(t,".svg"),alt:t})),r.a.createElement(a,{audioObject:document.querySelector("#".concat(t)),id:"".concat(t,"_audio_controller")}))}n(18);var v=function(e){var t=e.audioObject,n=e.id,a=Object(o.useState)(1e3),l=Object(s.a)(a,2),c=l[0],u=l[1];return r.a.createElement("input",{type:"range",name:"audio-decrement",className:"audio-controller",id:n,min:"1",max:"1000",value:c,onChange:function(e){u(Number(e.target.value));var n,a,o=Number(e.target.value)/1e3;a=o,(n=t)&&(n.volume=a)}})};function E(e,t,n,a,o){t?e&&(e.pause(),n(!1)):e&&(e.play(),n(!0)),a&&a.classList.toggle("selected"),o&&o.classList.toggle("selected")}var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement("div",{className:"main-section"},r.a.createElement(d,{Sound:f,VolumeController:v,changeStateOfAudio:E,env:a})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.8450c233.chunk.js.map