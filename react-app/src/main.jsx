import React,{StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
import isSubscribeButton from '../../counter/src/subscribed.jsx'
const anotherElement = (
  <a href="https://google.com" target='_blank'> visit to google</a>
)
function element(){
  return (
    <h2 className='heading'>this is heading</h2>
  )
}
const reactElem = React.createElement(
  "a",
  {href:"https://google.com", target:"_blank"},
  "click me to visit google"
)
console.log(reactElem)
function myApp (){
  return (
    <div>
      <p>this is para</p>
    </div>
  )
}
// console.log(myApp())
const container = <div id="1">
    <h1>this is heading</h1>
    <p className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit</p>
    <img
        src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
        style={{ width: "300px", borderRadius: "5px" }}
    />
    <form>
        <div style={{ padding: "5px" }}>
            <label htmlFor="username">username:</label>
            <input type="Text" id="username" />
        </div>
        <div style={{ padding: "5px" }}>
            <label htmlFor="password">password:</label>
            <input type="password" id="password" />
        </div>
    </form>
</div>
console.log(container)
createRoot(document.getElementById('root'))
.render(
// element()
reactElem
)
