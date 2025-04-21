import {useState } from "react"

function Card({data}){
    const [addToCart,setAddToCart] = useState(false)
  
    return (
        <>
        
        <div className="w-3xs h-70  inset-shadow-2xs shadow-lg px-5 rounded-xl mx-3 my-3">
            <div className="p-1 text-center object-cover flex justify-center">

            <img className="h-35" src={data.images[0]} alt="" />
            </div>
            <div className="text-wrap">
                <h5 className="leading-none "> <b>{data.title}</b></h5>
                <p>Price:{data.price.toLocaleString('en-IN')}</p>
                <p>free delivery</p>
                <button className="shadow-lg inset-shadow-2xs shadow-gray-500/40 px-2 py-1 rounded-lg my-1 bg-gray-300 hover:bg-gray-400 duration-200" onClick={()=>{setAddToCart(!addToCart)}}>{addToCart?"added":"add to cart"}</button>
 
            </div>
        </div>
        </>
    )
}
function Cards ({data}){
    
    
    return(
        <>
        <div className="flex flex-wrap w-full justify-between">
       { data?.products? (data.products.map((data)=>
        <Card data={data} key={data.index} />
        )):<h3 className="text-center my-3">loadingg</h3>}
        </div>
        </>
    )
}

export default Cards