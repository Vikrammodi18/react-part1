import { useEffect,useState } from "react"

function Card({data}){
    const [addToCart,setAddToCart] = useState(false)
  
    return (
        <>
        
        <div className="w-3xs h-70 shadow-xl px-6 rounded-xl m-10">
            <div className="p-1">

            <img className="h-35 w-full object-cover" src={data.images[0]} alt="" />
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
function Cards ({searchData="phone",setSearchData}){

    const[data,setData] = useState([])
    const productData = async()=>{
        let url = `https://dummyjson.com/products/search?q=${searchData}`
        const response = await fetch(url)
        const product = await response.json()
        setData(product)
    }
    useEffect(()=>{
        productData()
    },[setSearchData,productData])
    
    return(
        <>
        <div className="flex flex-wrap">
       { data.products? (data.products.map((data)=>
        <Card data={data} key={data.index} />
        )):<h3 className="text-center my-3">loadingg</h3>}
        </div>
        </>
    )
}

export default Cards