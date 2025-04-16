
const root = ReactDOM.createRoot(document.querySelector("#root"))
// const h1 = React.createElement("h1",{},"welcome to react")
const container = React.createElement("div",{id:"1"},
    [
        React.createElement("h1",{key:"heading"},"this is heading"),
        React.createElement("p",{className:"para1", key:"para1"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit"),
        React.createElement("img",{key:"img",style:{width:"300px",borderRadius:"5px"},src:"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}),
        React.createElement("form",{key:"form"},[
            React.createElement("div",{key:"forDiv",style:{padding:5,}},[
                React.createElement("label",{key:"labelUsername",htmlFor:"username"},"username:"),
                React.createElement("input",{type:"Text",key:"username", id:"username"}),
            ]),
            React.createElement("div",{key:"formDiv2",style:{padding:5,}},[
                React.createElement("label",{key:"labelPasswod",htmlFor:"password"},"password:"),
                React.createElement("input",{key:"password",type:"password",id:"password"})
            ])
        ])
    ]
)

root.render(container)