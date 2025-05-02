import { useEffect, useState } from "react"
import Ratings from "../components/ratings.component"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar.component";


function ProductDetails(){
    
    const [productData,setProductData] = useState("")
    const {id} = useParams();
   
    const fetchProductDetails = async ()=>{
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        setProductData(jsonResponse)
    }
    useEffect(()=>{
        fetchProductDetails()
    },[])
    return (
        <>
        <NavBar />
        <div className="text-center text-3xl mt-10 "><h2>produtDetails</h2></div>
        <div className="flex flex-wrap justify-around py-3 rounded-xl shadow-xl">
            <div className="overflow-hidden py-5 my-10">
                <img className="scale-125" src={productData.thumbnail} alt="" />
            </div>
            <div>
                <div className="p-3 w-2xl text-2xl my-4 font-mono">
                    <h1>title:<span className="font-bold">{productData.title}</span></h1>
                    <h1>description:<span className="font-bold leading-none tracking-tight">{productData.description}</span></h1>
                    <p className="">category: <span className="font-bold ">{productData.category} </span></p>
                    <p>price:<span className="font-bold">{productData.price} </span></p>
                    <p>stock:<span className="font-bold">{productData.stock}</span></p>
                    <p>warrenty:<span className="font-bold">{productData.warrantyInformation} </span></p>
                    <p>rating: <span className="font-bold">{productData.rating} </span></p>
                </div>
            </div>
        </div>
        <div>
            <Ratings reviews={productData.reviews} />
        </div>
        </>
    )
}
export default ProductDetails