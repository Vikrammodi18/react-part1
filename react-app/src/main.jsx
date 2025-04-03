import React,{StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
// const anotherElement = (
//   <a href="https://google.com" target='_blank'> visit to google</a>
// )

const reactElem = React.createElement(
  "a",
  {href:"https://google.com", target:"_blank"},
  "click me to visit google"
)
createRoot(document.getElementById('root'))
.render(
  <>
    <Chai />
    <App />
    {reactElem}
    </>

)
