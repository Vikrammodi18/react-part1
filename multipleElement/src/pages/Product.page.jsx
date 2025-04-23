import { useState, useEffect } from "react"

import Cards from "../components/Cards.component"
import NavBar from "../components/NavBar.component"
import Search from "../components/Search.component"
function Product (){
    const [searchData,setSearchData] = useState("phone")
    console.log(searchData)
    const[data,setData] = useState()
    
    const productData = async ()=>{
        let url = `https://dummyjson.com/products/search?q=${searchData}`
        
        const response = await fetch(url)
        const product = await response.json()
        
        setData(product)
    }
    useEffect(()=>{
        productData()
    },[searchData])

    return(
        <>
        <div className="px-20 py-5">
            <div className="text-center">
                <NavBar  />
            </div>
            <div className="text-right">

            <Search setSearchData={setSearchData} />
            </div>
            <Cards data={data} />
        </div>
        </>
    )
}

export default Product