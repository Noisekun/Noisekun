(this.webpackJsonpnoisekun=this.webpackJsonpnoisekun||[]).push([[0],{19:function(n,e,t){n.exports=t(33)},33:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(12),c=t.n(r),l=t(13);t.n(l).a.config();var i={HOST:"https://noisekun-server.herokuapp.com"},u=t(2),d=t(3);function _templateObject(){var n=Object(u.a)(["\n\n  0% {\n    background-color: #52bad5;\n  }\n  5% {\n    background-color: #2980b9;\n  }\n  10% {\n    background-color: #5ce5b4;\n  }\n  15% {\n    background-color: #73a84f;\n  }\n  20% {\n    background-color: #9b59b6;\n  }\n  25% {\n    background-color: #cb92e2;\n  }\n  30% {\n    background-color: #1c128b;\n  }\n  35% {\n    background-color: #d8e33d;\n  }\n  40% {\n    background-color: #e2b618;\n  }\n  45% {\n    background-color: #d35400;\n  }\n  50% {\n    background-color: #ba1616;\n  }\n  55% {\n    background-color: #52bad5;\n  }\n  60% {\n    background-color: #2980b9;\n  }\n  65% {\n    background-color: #5ce5b4;\n  }\n  70% {\n    background-color: #73a84f;\n  }\n  75% {\n    background-color: #9b59b6;\n  }\n  80% {\n    background-color: #cb92e2;\n  }\n  85% {\n    background-color: #1c128b;\n  }\n  90% {\n    background-color: #e3b63d;\n  }\n  95% {\n    background-color: #d8e33d;\n  }\n  100% {\n    background-color: #52bad5;\n  }\n"]);return _templateObject=function _templateObject(){return n},n}var m=Object(d.c)(_templateObject());function global_templateObject(){var n=Object(u.a)(["\n\n  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap');\n\n  * {\n    padding: 0;\n    margin: 0;\n    outline: none;\n  }\n\n  *:focus,\n  *:active {\n    outline: none;\n  }\n\n  *::-moz-focus-outer {\n    border: 0;\n  }\n\n\n\n  body {\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n    color: white;\n\n    background: fixed no-repeat center;\n    background-size: cover;\n    animation: "," 300s 0s infinite;\n\n    input:focus {\n    outline: none;\n    }\n\n    section.main-section {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    section.audio-section {\n      min-height: 85vh;\n      height: 100%;\n    }\n\n    button {\n      background: none;\n      border: none;\n    }\n\n    button:hover {\n      cursor: pointer;\n    }\n  }\n"]);return global_templateObject=function _templateObject(){return n},n}var s=Object(d.a)(global_templateObject(),m);function styles_templateObject(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 15vh;\n\n  backdrop-filter: blur(2px);\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.089);\n\n  h1 {\n    a {\n      text-decoration: none;\n      font-weight: 700;\n      color: rgba(255, 255, 255, 0.7);\n    }\n  }\n"]);return styles_templateObject=function _templateObject(){return n},n}var b=d.b.header(styles_templateObject());function Header(){return o.a.createElement(b,null,o.a.createElement("h1",null,o.a.createElement("a",{href:"/Noisekun"},"Noisekun")))}function Audios_styles_templateObject(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 30px;\n\n  @media (max-width: 650px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (max-width: 550px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  @media (max-width: 400px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: 300px) {\n    grid-template-columns: 1fr;\n  }\n"]);return Audios_styles_templateObject=function _templateObject(){return n},n}var p=d.b.div(Audios_styles_templateObject());function Audios(n){var e=n.Sound,t=n.VolumeController,a=n.changeStateOfAudio,r=n.env;return o.a.createElement(p,null,o.a.createElement(e,{name:"rain",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"storm",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"wind",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"water",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"ocean-waves",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"small-waves",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"forest-ambience",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"leafs",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"fire",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"night",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"coffee",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"fan",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"train",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"air-plane",changeStateOfAudio:a,VolumeController:t,env:r}),o.a.createElement(e,{name:"underwater",changeStateOfAudio:a,VolumeController:t,env:r}))}var g=t(4);function _templateObject2(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100px;\n  height: 100px;\n\n  opacity: 0.5;\n\n  transition: 0.1s;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n\n  &.selected {\n    opacity: 1;\n  }\n"]);return _templateObject2=function _templateObject2(){return n},n}function Sound_styles_templateObject(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 100px;\n  height: 100px;\n"]);return Sound_styles_templateObject=function _templateObject(){return n},n}var f=d.b.div(Sound_styles_templateObject()),h=d.b.div(_templateObject2());function Sound_Sound(n){var e=n.name,t=n.changeStateOfAudio,r=n.VolumeController,c=n.env,l=Object(a.useState)(!1),i=Object(g.a)(l,2),u=i[0],d=i[1];return o.a.createElement(f,null,o.a.createElement("audio",{loop:!0,preload:"true",id:e},o.a.createElement("source",{src:"".concat(c.HOST,"/webm/").concat(e),type:"audio/webm"}),o.a.createElement("source",{src:"".concat(c.HOST,"/mp3/").concat(e),type:"audio/mp3"})),o.a.createElement(h,{id:"".concat(e,"-button"),onClick:function onClick(){var n=document.querySelector("#".concat(e)),a=document.getElementById("".concat(e,"-button")),o=document.getElementById("".concat(e,"-audio-controller"));t(n,u,d,a,o)}},o.a.createElement("img",{src:"/Noisekun/icons/".concat(e,".svg"),alt:e})),o.a.createElement(r,{audioObject:document.querySelector("#".concat(e)),id:"".concat(e,"-audio-controller")}))}var v=t(17),O=t(18),x=function BackgroundConfig(n){var e=n.setUrl,t=n.url;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"fieldset"},o.a.createElement("div",{className:"fieldset-content fieldset-content-title"},o.a.createElement("span",null,"background")),o.a.createElement("div",{className:"fieldset-content fieldset-content-input"},o.a.createElement("input",{type:"text",id:"url",name:"url",placeholder:"wallpaper url",value:t,onChange:function onChange(n){e(n.target.value)}}))))};function _templateObject3(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  right: -300px;\n\n  height: 100%;\n  min-width: 14vw;\n\n  padding: 15px;\n\n  transition: 1s;\n\n  div.fieldset {\n    div.fieldset-content {\n      padding: 15px;\n      text-align: center;\n      color: #39353b;\n    }\n\n    div.fieldset-content-title {\n      border-radius: 10px 10px 0 0;\n      backdrop-filter: blur(10px);\n      background: rgba(255, 255, 255, 0.7);\n    }\n\n    div.fieldset-content-input {\n      border-radius: 0 0 10px 10px;\n      backdrop-filter: blur(5px);\n      background: rgba(255, 255, 255, 0.5);\n    }\n\n    input#url {\n      border: none;\n      background: none;\n      text-align: center;\n    }\n  }\n\n  button {\n    border-radius: 10px;\n\n    padding: 15px;\n    margin-top: 5px;\n\n    width: 100%;\n\n    backdrop-filter: blur(5px);\n    background: rgba(255, 255, 255, 0.5);\n    color: rgba(0, 0, 0, 0.753);\n    transition: 0.1s;\n  }\n\n  button:hover {\n    background-color: rgba(255, 200, 200, 0.5);\n    backdrop-filter: blur(10px);\n  }\n  button:active {\n    background-color: white;\n  }\n\n  ",":checked ~ & {\n    transform: translateX(-300px);\n  }\n\n  @media (max-width: 1100px) {\n    div.fieldset {\n      div.fieldset-content-title {\n        backdrop-filter: blur(10px);\n      }\n      div.fieldset-content-input {\n        backdrop-filter: blur(5px);\n      }\n    }\n  }\n\n  @media (max-width: 750px) {\n    position: relative;\n    right: 0;\n\n    max-width: 250px;\n\n    margin: auto;\n\n    div.fieldset {\n      div.fieldset-content {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      div.fieldset-content-input {\n        min-height: 30px;\n\n        border-radius: 0 0 10px 10px;\n\n        backdrop-filter: blur(5px);\n        background: rgba(255, 255, 255, 0.5);\n      }\n    }\n\n    button {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      height: 50px;\n\n      background: rgba(255, 200, 200, 0.5);\n      color: rgba(0, 0, 0, 0.753);\n    }\n\n    button:active {\n      background-color: rgba(255, 200, 200, 0.8);\n      backdrop-filter: blur(10px);\n    }\n  }\n"]);return _templateObject3=function _templateObject3(){return n},n}function styles_templateObject2(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  top: 2vh;\n  right: 2vw;\n\n  width: 80px;\n  height: 80px;\n\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 30px;\n\n  transition: 1s;\n\n  &:hover {\n    cursor: pointer;\n    color: rgba(255, 255, 255, 0.7);\n  }\n\n  ",":checked ~ & {\n    transform: translateX(-14vw) rotateY(-180deg);\n    color: rgba(255, 255, 255, 1);\n  }\n\n  @media (max-width: 1100px) {\n    transition: none;\n\n    ",":checked ~ & {\n      transform: rotateY(-180deg);\n      left: 0;\n      color: rgba(255, 255, 255, 1);\n    }\n  }\n  @media (max-width: 750px) {\n    display: none;\n  }\n"]);return styles_templateObject2=function _templateObject2(){return n},n}function Configurations_styles_templateObject(){var n=Object(u.a)(["\n  display: none;\n\n  @media (max-width: 750px) {\n    display: none;\n  }\n"]);return Configurations_styles_templateObject=function _templateObject(){return n},n}var j=d.b.input(Configurations_styles_templateObject()),k=d.b.label(styles_templateObject2(),j,j),y=d.b.div(_templateObject3(),j);function Configurations(){var n,e=Object(a.useState)(null!==(n=localStorage.getItem("background_url"))&&void 0!==n?n:""),t=Object(g.a)(e,2),r=t[0],c=t[1];function saveConfigs(){var n=document.querySelector("body");n&&(n.style.backgroundImage="url(".concat(r,")"),localStorage.setItem("background_url",r))}return Object(a.useEffect)((function(){saveConfigs()}),[]),Object(a.useEffect)((function(){saveConfigs()}),[r]),o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{type:"checkbox",id:"config-button"}),o.a.createElement(k,{htmlFor:"config-button"},o.a.createElement(v.a,{icon:O.a})),o.a.createElement(y,{className:"configurations-list"},o.a.createElement(x,{url:r,setUrl:c}),o.a.createElement("button",{onClick:function onClick(){return function resetConfigs(){c("")}()},type:"button"},"reset")))}function VolumeController_styles_templateObject(){var n=Object(u.a)(["\n  opacity: 0;\n\n  appearance: none;\n\n  width: 100%;\n  height: 2px;\n\n  background: white;\n\n  cursor: pointer;\n\n  /* MARKER */\n  /* Chrome/Safari/Opera */\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 13px;\n    width: 13px;\n\n    background: white;\n\n    border: none;\n    border-radius: 100%;\n  }\n\n  /* Firefox */\n  &::-moz-range-thumb {\n    height: 13px;\n    width: 13px;\n\n    background: white;\n\n    border: none;\n    border-radius: 100%;\n  }\n\n  /* IE */\n  &::-ms-thumb {\n    height: 13px;\n    width: 13px;\n\n    background: white;\n\n    border: none;\n    border-radius: 100%;\n  }\n\n  &.selected {\n    opacity: 1;\n  }\n"]);return VolumeController_styles_templateObject=function _templateObject(){return n},n}var _=d.b.input(VolumeController_styles_templateObject()),E=function VolumeControler(n){var e=n.audioObject,t=n.id,r=Object(a.useState)(1e3),c=Object(g.a)(r,2),l=c[0],i=c[1];return o.a.createElement(_,{type:"range",name:"audio-decrement",id:t,min:"1",max:"1000",value:l,onChange:function onChange(n){i(Number(n.target.value));var t=Number(n.target.value)/1e3;!function changeVolume(n,e){n&&(n.volume=e)}(e,t)}})};function Footer_styles_templateObject(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n\n  padding: 15px;\n\n  background-color: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(4px);\n\n  p {\n    a {\n      text-decoration: none;\n      color: white;\n    }\n  }\n\n  p {\n    a.author {\n      font-weight: bold;\n    }\n  }\n\n  p {\n    a.copy:hover {\n      cursor: pointer;\n      text-decoration: underline;\n    }\n  }\n"]);return Footer_styles_templateObject=function _templateObject(){return n},n}var w=d.b.footer(Footer_styles_templateObject());function Footer(){return o.a.createElement(w,null,o.a.createElement("div",null,o.a.createElement("p",null,"by"," ",o.a.createElement("a",{href:"https://github.com/mateusfg7",className:"author"},"mateusfg7"," ")," "),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/mateusfg7/Noisekun/blob/master/LICENSE",className:"copy"}," ","\xa9 MIT License"))))}function changeStateOfAudio_changeStateOfAudio(n,e,t,a,o){e?n&&(n.pause(),t(!1)):n&&(n.play(),t(!0)),a&&a.classList.toggle("selected"),o&&o.classList.toggle("selected")}var S=function App(){return o.a.createElement("div",{className:"App"},o.a.createElement(s,null),o.a.createElement(Header,null),o.a.createElement("section",{className:"main-section audio-section"},o.a.createElement(Audios,{Sound:Sound_Sound,VolumeController:E,changeStateOfAudio:changeStateOfAudio_changeStateOfAudio,env:i})),o.a.createElement(Configurations,null),o.a.createElement(Footer,null))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bcc781ef.chunk.js.map