import Cards from "../cards/Cards";
import NavBar from "../navBar/NavBar";
import SideBar from "../sidebar/Sidebar";
import {useState,useEffect} from "react"
function Categories(){
    const [data,setCategory] = useState()
    const [categoryData,setCategoryData] = useState("beauty")
    const [productData,setProductData] = useState()
    
    const fetchedData = async()=>{
        let url = 'https://dummyjson.com/products/categories'
        const response = await fetch(url)
        const categories = await response.json() 
        
        setCategory(categories)
    } 
    const fetcedCategoryData = async() =>{
        let url = `https://dummyjson.com/products/category/${categoryData}`
        const response = await fetch(url)
        const product = await response.json()

        setProductData(product)
    }
    useEffect(()=>{
        fetchedData()
    },[])
    useEffect(()=>{
        
        fetcedCategoryData()
    },[productData])
    return(
        <>
        <div className="px-6 py-5 ">
        <NavBar />
        <div className="text-center text-3xl p-2">
            <h4 >Categories</h4>
        </div>
        <div className="flex justify-between" >
            <SideBar data={data} setCategoryData={setCategoryData} />
            <div className="ml-9">
            <Cards data={productData}/>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Categories