(this.webpackJsonpnoisekun=this.webpackJsonpnoisekun||[]).push([[0],{36:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),c=t(15),i=t.n(c),a=t(5),l=t(3);var u=function usePersistedState(n,e){var t=Object(o.useState)((function(){var t=localStorage.getItem(n);return t?JSON.parse(t):e})),r=Object(a.a)(t,2),c=r[0],i=r[1];return Object(o.useEffect)((function(){localStorage.setItem(n,JSON.stringify(c))}),[n,c]),[c,i]},d=t(16);t.n(d).a.config();var s,b,g,f,h={HOST:"https://noisekun-server.herokuapp.com"},m=t(4),p=Object(l.e)(s||(s=Object(m.a)(["\n\n  0% {\n    background-color: #52bad5;\n  }\n  5% {\n    background-color: #2980b9;\n  }\n  10% {\n    background-color: #5ce5b4;\n  }\n  15% {\n    background-color: #73a84f;\n  }\n  20% {\n    background-color: #9b59b6;\n  }\n  25% {\n    background-color: #cb92e2;\n  }\n  30% {\n    background-color: #1c128b;\n  }\n  35% {\n    background-color: #d8e33d;\n  }\n  40% {\n    background-color: #e2b618;\n  }\n  45% {\n    background-color: #d35400;\n  }\n  50% {\n    background-color: #ba1616;\n  }\n  55% {\n    background-color: #52bad5;\n  }\n  60% {\n    background-color: #2980b9;\n  }\n  65% {\n    background-color: #5ce5b4;\n  }\n  70% {\n    background-color: #73a84f;\n  }\n  75% {\n    background-color: #9b59b6;\n  }\n  80% {\n    background-color: #cb92e2;\n  }\n  85% {\n    background-color: #1c128b;\n  }\n  90% {\n    background-color: #e3b63d;\n  }\n  95% {\n    background-color: #d8e33d;\n  }\n  100% {\n    background-color: #52bad5;\n  }\n"]))),j=Object(l.c)(b||(b=Object(m.a)(["\n\n  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;700&display=swap');\n\n  * {\n    padding: 0;\n    margin: 0;\n    outline: none;\n  }\n\n  *:focus,\n  *:active {\n    outline: none;\n  }\n\n  *::-moz-focus-outer {\n    border: 0;\n  }\n\n\n\n  body {\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n    color: white;\n\n    background: fixed no-repeat center;\n    background-size: cover;\n    animation: "," 300s 0s infinite;\n\n    input:focus {\n    outline: none;\n    }\n\n    section.main-section {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    section.audio-section {\n      min-height: 85vh;\n      height: 100%;\n    }\n\n    button {\n      background: none;\n      border: none;\n    }\n\n    button:hover {\n      cursor: pointer;\n    }\n  }\n"])),p),x={title:"light",colors:{header:{text:"rgba(255, 255, 255, 0.7)",background:"rgba(255, 255, 255, 0.1)"},footer:{text:"rgba(255,255,255,1)",background:"rgba(255, 255, 255, 0.1)"},config:{arrowButton:{color:"rgba(255, 255, 255, 0.5)",hover:"rgba(255, 255, 255, 0.7)",checked:"rgba(255, 255, 255, 1)"},fieldset:{color:"rgba(56, 56, 56,1)",titleBackground:"rgba(255, 255, 255, 0.7)",inputBackground:"rgba(255, 255, 255, 0.5)"},resetButton:{color:"rgba(0, 0, 0, 0.753)",background:"rgba(255, 255, 255, 0.5)",hover:"rgba(255, 200, 200, 0.5)",active:{desktop:"rgba(255,255,255,1)",mobile:"rgba(255, 200, 200, 0.8)"}}},sound:{color:"rgba(255, 255, 255, 0.5)",hover:"rgba(255, 255, 255, 0.8)",selected:"rgba(255, 255, 255, 1)"},volumeController:{background:"rgba(255,255,255,1)",thumb:"rgba(255,255,255,1)"}}},O={title:"dark",colors:{header:{text:"rgba(0, 0, 0, 0.7)",background:"rgba(0, 0, 0, 0.1)"},footer:{text:"rgba(0,0,0,1)",background:"rgba(0, 0, 0, 0.1)"},config:{arrowButton:{color:"rgba(0, 0, 0, 0.5)",hover:"rgba(0, 0, 0, 0.7)",checked:"rgba(0, 0, 0, 1)"},fieldset:{color:"rgba(255, 255, 255,1)",titleBackground:"rgba(0, 0, 0, 0.7)",inputBackground:"rgba(0, 0, 0, 0.5)"},resetButton:{color:"rgba(255, 255, 255, 0.753)",background:"rgba(0, 0, 0, 0.5)",hover:"rgba(255, 55, 55, 0.5)",active:{desktop:"rgba(0,0,0,1)",mobile:"rgba(255, 55, 55, 0.8)"}}},sound:{color:"rgba(0, 0, 0, 0.5)",hover:"rgba(0, 0, 0, 0.8)",selected:"rgba(0, 0, 0, 1)"},volumeController:{background:"rgba(0,0,0,1)",thumb:"rgba(0,0,0,1)"}}},v=l.d.header(g||(g=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 15vh;\n\n  backdrop-filter: blur(10px);\n  background: ",";\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.089);\n\n  h1 {\n    a {\n      text-decoration: none;\n      font-weight: 700;\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.header.background}),(function(n){return n.theme.colors.header.text})),k=t(0);function Header(){return Object(k.jsx)(v,{children:Object(k.jsx)("h1",{children:Object(k.jsx)("a",{href:"/Noisekun",children:"Noisekun"})})})}var w,y,C=l.d.div(f||(f=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 30px;\n\n  @media (max-width: 650px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (max-width: 550px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  @media (max-width: 400px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: 300px) {\n    grid-template-columns: 1fr;\n  }\n"])));function Audios(n){var e=n.Sound,t=n.VolumeController,o=n.changeStateOfAudio,r=n.env;return Object(k.jsxs)(C,{children:[Object(k.jsx)(e,{name:"rain",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"storm",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"wind",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"water",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"ocean-waves",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"small-waves",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"forest-ambience",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"leafs",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"fire",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"night",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"coffee",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"fan",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"train",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"air-plane",changeStateOfAudio:o,VolumeController:t,env:r}),Object(k.jsx)(e,{name:"underwater",changeStateOfAudio:o,VolumeController:t,env:r})]})}var S=l.d.div(w||(w=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 100px;\n  height: 100px;\n"]))),A=l.d.div(y||(y=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100px;\n  height: 100px;\n\n  color: ",";\n\n  transition: 0.1s;\n\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n\n  &.selected {\n    color: ",";\n  }\n\n  .icons {\n    font-size: 80px;\n  }\n"])),(function(n){return n.theme.colors.sound.color}),(function(n){return n.theme.colors.sound.hover}),(function(n){return n.theme.colors.sound.selected}));function Sound_Sound(n){var e=n.name,t=n.changeStateOfAudio,r=n.VolumeController,c=n.env,i=Object(o.useState)(!1),l=Object(a.a)(i,2),u=l[0],d=l[1];return Object(k.jsxs)(S,{children:[Object(k.jsxs)("audio",{loop:!0,preload:"true",id:e,children:[Object(k.jsx)("source",{src:"".concat(c.HOST,"/webm/").concat(e),type:"audio/webm"}),Object(k.jsx)("source",{src:"".concat(c.HOST,"/mp3/").concat(e),type:"audio/mp3"})]}),Object(k.jsx)(A,{id:"".concat(e,"-button"),className:u?"selected":"",onClick:function onClick(){var n=document.querySelector("#".concat(e));t(n,u,d)},children:Object(k.jsx)("i",{className:"".concat({rain:"icofont-rainy",storm:"icofont-rainy-thunder",wind:"icofont-wind",water:"icofont-water-drop","ocean-waves":"icofont-wind-waves","small-waves":"icofont-wave","forest-ambience":"icofont-tree-alt",leafs:"icofont-leaf",fire:"icofont-fire-burn",night:"icofont-night",coffee:"icofont-coffee-mug",fan:"icofont-headphone",train:"icofont-train-line","air-plane":"icofont-airplane",underwater:"icofont-swimmer"}[e]," icons")})}),Object(k.jsx)(r,{audioObject:document.querySelector("#".concat(e)),id:"".concat(e,"-audio-controller"),state:u})]})}var B,N,V,I,T,E=t(6),z=t(7),F=function BackgroundConfig(n){var e=n.setUrl,t=n.url;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"fieldset",children:[Object(k.jsx)("div",{className:"fieldset-content fieldset-content-title",children:Object(k.jsx)("span",{children:"background"})}),Object(k.jsx)("div",{className:"fieldset-content fieldset-content-input",children:Object(k.jsx)("input",{type:"text",id:"url",name:"url",placeholder:"wallpaper url",value:t,onChange:function onChange(n){e(n.target.value)}})})]})})},H=t(20),_=t.n(H),J=function ToogleThemeConfig(n){var e=n.toggleTheme,t=Object(o.useContext)(l.a).title;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"fieldset",children:[Object(k.jsx)("div",{className:"fieldset-content fieldset-content-title",children:Object(k.jsx)("span",{children:"theme"})}),Object(k.jsx)("div",{className:"fieldset-content fieldset-content-input",children:Object(k.jsx)(_.a,{onChange:e,checked:"dark"===t,checkedIcon:Object(k.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",fontSize:"20px",color:"#262525"},children:Object(k.jsx)(E.a,{icon:z.b})}),uncheckedIcon:Object(k.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",fontSize:"20px",color:"#e8e8e8"},children:Object(k.jsx)(E.a,{icon:z.c})}),handleDiameter:30,height:30,width:60,onColor:"none",offColor:"none",onHandleColor:"#262525",offHandleColor:"#e8e8e8"})})]})})},q=l.d.input(B||(B=Object(m.a)(["\n  display: none;\n\n  @media (max-width: 750px) {\n    display: none;\n  }\n"]))),M=l.d.label(N||(N=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  top: 2vh;\n  right: 2vw;\n\n  width: 80px;\n  height: 80px;\n\n  color: ",";\n  font-size: 30px;\n\n  transition: 1s;\n\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n\n  ",":checked ~ & {\n    transform: translateX(-14vw) rotateY(-180deg);\n    color: ",";\n  }\n\n  @media (max-width: 1100px) {\n    transition: none;\n\n    ",":checked ~ & {\n      transform: rotateY(-180deg);\n      left: 0;\n      color: ",";\n    }\n  }\n  @media (max-width: 750px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.colors.config.arrowButton.color}),(function(n){return n.theme.colors.config.arrowButton.hover}),q,(function(n){return n.theme.colors.config.arrowButton.checked}),q,(function(n){return n.theme.colors.config.arrowButton.checked})),L=l.d.div(V||(V=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  right: -300px;\n\n  height: 100%;\n  min-width: 14vw;\n\n  padding: 15px;\n\n  transition: 1s;\n\n  div.fieldset {\n    div.fieldset-content {\n      padding: 15px;\n      text-align: center;\n      color: ",";\n    }\n\n    div.fieldset-content-title {\n      border-radius: 10px 10px 0 0;\n      backdrop-filter: blur(10px);\n      background: ",";\n    }\n\n    div.fieldset-content-input {\n      border-radius: 0 0 10px 10px;\n      backdrop-filter: blur(5px);\n      background: ",";\n    }\n\n    input#url {\n      border: none;\n      background: none;\n      text-align: center;\n      color: ",";\n    }\n  }\n\n  div.fieldset + div.fieldset {\n    margin-top: 5px;\n  }\n\n  button {\n    border-radius: 10px;\n\n    padding: 15px;\n    margin-top: 5px;\n\n    width: 100%;\n\n    backdrop-filter: blur(5px);\n    background: ",";\n    color: ",";\n    transition: 0.1s;\n  }\n\n  button:hover {\n    background: ",";\n    backdrop-filter: blur(10px);\n  }\n  button:active {\n    background-color: ",";\n  }\n\n  ",":checked ~ & {\n    transform: translateX(-300px);\n  }\n\n  @media (max-width: 1100px) {\n    div.fieldset {\n      div.fieldset-content-title {\n        backdrop-filter: blur(10px);\n      }\n      div.fieldset-content-input {\n        backdrop-filter: blur(5px);\n      }\n    }\n  }\n\n  @media (max-width: 750px) {\n    position: relative;\n    right: 0;\n\n    max-width: 250px;\n\n    margin: auto;\n\n    div.fieldset {\n      div.fieldset-content {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      div.fieldset-content-input {\n        min-height: 30px;\n\n        border-radius: 0 0 10px 10px;\n\n        backdrop-filter: blur(5px);\n        background: ",";\n      }\n    }\n\n    button {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      height: 50px;\n\n      background: ",";\n      color: ",";\n    }\n\n    button:active {\n      background-color: ",";\n      backdrop-filter: blur(10px);\n    }\n  }\n"])),(function(n){return n.theme.colors.config.fieldset.color}),(function(n){return n.theme.colors.config.fieldset.titleBackground}),(function(n){return n.theme.colors.config.fieldset.inputBackground}),(function(n){return n.theme.colors.config.fieldset.color}),(function(n){return n.theme.colors.config.resetButton.background}),(function(n){return n.theme.colors.config.resetButton.color}),(function(n){return n.theme.colors.config.resetButton.hover}),(function(n){return n.theme.colors.config.resetButton.active.desktop}),q,(function(n){return n.theme.colors.config.fieldset.inputBackground}),(function(n){return n.theme.colors.config.resetButton.hover}),(function(n){return n.theme.colors.config.resetButton.color}),(function(n){return n.theme.colors.config.resetButton.active.mobile})),R=function Configurations(n){var e,t=n.toggleTheme,r=Object(o.useState)(null!==(e=localStorage.getItem("background_url"))&&void 0!==e?e:""),c=Object(a.a)(r,2),i=c[0],l=c[1];function saveConfigs(){var n=document.querySelector("body");n&&(n.style.backgroundImage="url(".concat(i,")"),localStorage.setItem("background_url",i))}return Object(o.useEffect)((function(){saveConfigs()}),[]),Object(o.useEffect)((function(){saveConfigs()}),[i]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(q,{type:"checkbox",id:"config-button"}),Object(k.jsx)(M,{htmlFor:"config-button",children:Object(k.jsx)(E.a,{icon:z.a})}),Object(k.jsxs)(L,{className:"configurations-list",children:[Object(k.jsx)(F,{url:i,setUrl:l}),Object(k.jsx)(J,{toggleTheme:t}),Object(k.jsx)("button",{onClick:function onClick(){return function resetConfigs(){l("")}()},type:"button",children:"reset"})]})]})},U=l.d.input(I||(I=Object(m.a)(["\n  opacity: 0;\n\n  appearance: none;\n\n  width: 100%;\n  height: 2px;\n\n  background: ",";\n\n  cursor: pointer;\n\n  /* MARKER */\n  /* Chrome/Safari/Opera */\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 13px;\n    width: 13px;\n\n    background: ",";\n\n    border: none;\n    border-radius: 100%;\n  }\n\n  /* Firefox */\n  &::-moz-range-thumb {\n    height: 13px;\n    width: 13px;\n\n    background: ",";\n\n    border: none;\n    border-radius: 100%;\n  }\n\n  /* IE */\n  &::-ms-thumb {\n    height: 13px;\n    width: 13px;\n\n    background: ",";\n\n    border: none;\n    border-radius: 100%;\n  }\n\n  &.selected {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.volumeController.background}),(function(n){return n.theme.colors.volumeController.thumb}),(function(n){return n.theme.colors.volumeController.thumb}),(function(n){return n.theme.colors.volumeController.thumb})),X=function VolumeControler(n){var e=n.audioObject,t=n.id,r=n.state,c=Object(o.useState)(1e3),i=Object(a.a)(c,2),l=i[0],u=i[1];return Object(k.jsx)(U,{className:r?"selected":"",type:"range",name:"audio-decrement",id:t,min:"1",max:"1000",value:l,onChange:function onChange(n){u(Number(n.target.value));var t=Number(n.target.value)/1e3;!function changeVolume(n,e){n&&(n.volume=e)}(e,t)}})},Y=l.d.footer(T||(T=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n\n  padding: 15px;\n\n  background: ",";\n  backdrop-filter: blur(4px);\n\n  p {\n    a {\n      text-decoration: none;\n      color: ",";\n    }\n  }\n\n  p {\n    a.author {\n      font-weight: bold;\n    }\n  }\n\n  p {\n    a.copy:hover {\n      cursor: pointer;\n      text-decoration: underline;\n    }\n  }\n"])),(function(n){return n.theme.colors.footer.background}),(function(n){return n.theme.colors.footer.text}));function Footer(){return Object(k.jsx)(Y,{children:Object(k.jsxs)("div",{children:[Object(k.jsxs)("p",{children:["by"," ",Object(k.jsxs)("a",{href:"https://github.com/mateusfg7",className:"author",children:["mateusfg7"," "]})," "]}),Object(k.jsx)("p",{children:Object(k.jsxs)("a",{href:"https://github.com/mateusfg7/Noisekun/blob/master/LICENSE",className:"copy",children:[" ","\xa9 MIT License"]})})]})})}function changeStateOfAudio_changeStateOfAudio(n,e,t){e?n&&(n.pause(),t(!1)):n&&(n.play(),t(!0))}var D=function App(){var n=u("theme",x),e=Object(a.a)(n,2),t=e[0],o=e[1];return Object(k.jsx)(l.b,{theme:t,children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(j,{}),Object(k.jsx)(Header,{}),Object(k.jsx)("section",{className:"main-section audio-section",children:Object(k.jsx)(Audios,{Sound:Sound_Sound,VolumeController:X,changeStateOfAudio:changeStateOfAudio_changeStateOfAudio,env:h})}),Object(k.jsx)(R,{toggleTheme:function toggleTheme(){o("light"===t.title?O:x)}}),Object(k.jsx)(Footer,{})]})})};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(D,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.11d9aa60.chunk.js.map