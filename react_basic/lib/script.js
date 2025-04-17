const root = ReactDOM.createRoot(document.querySelector("#root"));
// const h1 = React.createElement("h1",{},"welcome to react")
const user = "vikram";
// const container = React.createElement("div",{id:"1",className:"container"},
//     [
//         React.createElement("h1",{key:"heading"},"this is heading"),
//         React.createElement("p",{className:"para1", key:"para1"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit"),
//         React.createElement("img",{key:"img",style:{width:"300px",borderRadius:"5px"},src:"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}),
//         React.createElement("form",{key:"form"},[
//             React.createElement("div",{key:"forDiv",style:{padding:5,}},[
//                 React.createElement("label",{key:"labelUsername",htmlFor:"username"},"username:"),
//                 React.createElement("input",{type:"Text",key:"username", id:"username"}),
//             ]),
//             React.createElement("div",{key:"formDiv2",style:{padding:5,}},[
//                 React.createElement("label",{key:"labelPasswod",htmlFor:"password"},"password:"),
//                 React.createElement("input",{key:"password",type:"password",id:"password"})
//             ])
//         ]),
//         React.createElement("div",{key:"anotherDiv"},`hello,${user}`)
//     ]
// )
const container = /*#__PURE__*/React.createElement("div", {
  id: "1"
}, /*#__PURE__*/React.createElement("h1", null, "this is heading"), /*#__PURE__*/React.createElement("p", {
  className: "para1"
}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit"), /*#__PURE__*/React.createElement("img", {
  src: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  style: {
    width: "300px",
    borderRadius: "5px"
  }
}), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "5px"
  }
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "username:"), /*#__PURE__*/React.createElement("input", {
  type: "Text",
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "5px"
  }
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "password:"), /*#__PURE__*/React.createElement("input", {
  type: "password",
  id: "password"
}))));

// const name = "vikram"
const h2 = /*#__PURE__*/React.createElement("h3", null, "hello ", name);
const form = /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "username"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "username:"), /*#__PURE__*/React.createElement("input", {
  id: "username",
  type: "text"
})), /*#__PURE__*/React.createElement("div", {
  className: "password"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "password:"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})), /*#__PURE__*/React.createElement("button", {
  style: {
    backgroundColor: "white"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  style: {
    width: "50px"
  },
  alt: ""
})));
console.log(form);
console.log(container);
root.render(container);