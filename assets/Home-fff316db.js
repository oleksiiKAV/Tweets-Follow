import{s as i,j as t}from"./index-29193679.js";import{l as e}from"./logo-0fe2b947.js";const o=i.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-image: url(${e});
  background-repeat: repeat;
  background-size: 200px;
  background-position: 10px 10px;
`,n=i.img`
border-radius:50%;
width: 10%;
  height: 10%;
  animation: scaleAnimation 2s ease-in-out;

  @keyframes scaleAnimation {
    0% {
      width: 10%;
      height: 10%;
    }
    100% {
      width: 30%;
      height: 30%;
    }    
  }
`,s="/Tweets-Follow/assets/tw_logo-adca8db2.gif";function d(){return t.jsxs(o,{children:[t.jsx("h1",{hidden:!0,children:"GOIT REACT TECH"}),t.jsx(n,{src:s,width:"10%",alt:"twitlogo"})]})}export{d as default};
