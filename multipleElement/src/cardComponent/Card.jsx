import{ useEffect, useState} from 'react'
function Card({val,index}){
//   console.log(val)
    const [addToCart,setAddToCart] = useState(false)
    const popUp = ()=>{
        
    }
    return(
        <>
    <div  className="w-64 h-70 rounded-xl px-3 py-1 text-gray-500 mx-4 my-4 shadow-lg">
        <img className="h-38 object-contain rounded-xl w-50 mx-3" src={val.images[0]}alt="" />
        <div className="px-2 py-1" >
            <h5 className='p-0 m-0'>{val.title}</h5>
            <p className=""> <b> &#8377; {val.price.toLocaleString('en-IN')}</b></p>
            <p className="text-sm">free delivery</p>
            <button className="bg-gray-800 px-2 my-2 hover:bg-gray-700  rounded text-white cursor-pointer" onClick={()=> {setAddToCart (addToCart=> !addToCart),popUp()}} >{addToCart?"added":"add to cart"} </button>
        </div>
    </div>
        </>
    )
}
function Cards(){
    const products = [
        { name: "Wireless Mouse", price: 599 },
        { name: "Bluetooth Speaker", price: 1299 },
        { name: "Laptop Stand", price: 899 },
        { name: "USB-C Cable", price: 299 },
        { name: "Gaming Keyboard", price: 2499 },
        { name: "Smartwatch", price: 3499 },
        { name: "Webcam", price: 1599 },
        { name: "Power Bank", price: 1199 }
      ];
      
      const [data,setData] = useState({})
      useEffect(()=>{
        const fetchData = async ()=>{
           const response = await fetch('https://dummyjson.com/products/search?q=phone')
           const value = await response.json()
           
           setData(value)

        }
          fetchData()
          
      },[])
      
    return(
        <div className='flex flex-wrap justify-center'>
            {data.products?
            data.products.map((val,index)=> (
                <Card val={val} key={index}/>
            )):<h1 className='h-64'>loading</h1>
            }

        </div>
    )
}

export default Cards