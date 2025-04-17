import { useState } from "react"



function ButtonSubscribe(){
    let [isSubscribe,setIsSubscribe] = useState(false)
    function isSubscribeButton(){

        setIsSubscribe(!isSubscribe)

    }
    return(
        <button onClick={(isSubscribeButton)}>{isSubscribe?"unsubscribe":"subscribe"}</button>
    )
}
export default ButtonSubscribe