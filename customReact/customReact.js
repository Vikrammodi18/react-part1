function customReact(reactElement,mainContainer){
    // const element = document.createElement(reactElement.type)
    // element.setAttribute("className",reactElement.props?.className||"")
    // element.textContent = reactElement.children
    // mainContainer.appendChild(element)

    const element = document.createElement(reactElement.type)
    element.textContent = reactElement.children
    for (const prop in reactElement.props) {
        element.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(element)
}
const reactElement = {
    type:"div",
    props:{
        className:"heading1",
        id:"heading"
    },
    children:"i am heading"
}

const mainContainer = document.querySelector("#root")
customReact(reactElement,mainContainer)
