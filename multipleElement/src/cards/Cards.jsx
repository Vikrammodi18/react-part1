import { useEffect,useState } from "react"

function Card({data}){
    const [addToCart,setAddToCart] = useState(false)

    return (
        <>
        
        <div className="w-3xs h-70 shadow-xl px-6 rounded-xl m-10">
            <div className="p-1">

            <img className="h-35 w-full object-cover" src={data.thumbnail} alt="" />
            </div>
            <div>
                <h4 className="leading-none">{data.title}</h4>
                <p>{data.price}</p>
                <p>free delivery</p>
                <button className="border-1 px-1 py-1 rounded-lg my-1 bg-gray-300 hover:bg-gray-400 duration-200" onClick={()=>{setAddToCart(!addToCart)}}>{addToCart?"added":"add to cart"}</button>
                
                

            </div>
        </div>
        </>
    )
}
function Cards (){
    const[data,setData] = useState([])
    useEffect(()=>{
        const productData = async()=>{
            const response = await fetch('https://dummyjson.com/products')
            const product = await response.json()
            setData(product)
        }
        productData()
    },[])
    console.log(data)
    return(
        <>
        <div className="flex flex-wrap">
        { data.products.map((data)=>
        <Card data={data} />
        
        )}
        </div>
       
        </>
    )
}

export default Cards