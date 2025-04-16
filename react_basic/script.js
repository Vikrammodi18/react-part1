
const root = ReactDOM.createRoot(document.querySelector("#root"))
// const h1 = React.createElement("h1",{},"welcome to react")
const user = "vikram"
const container = React.createElement("div",{id:"1",className:"container"},
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
        ]),
        React.createElement("div",{key:"anotherDiv"},`hello,${user}`)
    ]
)
// const container =  <div id="1">
// <h1>this is heading</h1>
// <p className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit</p>
// <img
//     src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
//     style={{width:"300px",borderRadius:"5px"}}
//     />
// <form>
//     <div style={{padding: "5px"}}>
//         <label htmlFor="username">username:</label>
//         <input type="Text" id="username"/>
//         </div>
//     <div style= {{padding: "5px"}}>
//         <label htmlFor="password">password:</label>
//         <input type="password" id="password"/>
//     </div>
// </form>
// </div>

// const name = "vikram"
// const h2 = <h3>hello {name}</h3>
// const form = <form>
//     <div className="username">
//     <label htmlFor="username">username:</label>
//     <input id="username" type="text"  />

//     </div>
//     <div className="password">
//         <label htmlFor="password">password:</label>
//         <input id="password" type="password" />
//     </div>
// </form>
root.render(container)