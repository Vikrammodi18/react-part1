import { useEffect, useState } from "react"

function SideBar (){

    const[category,setCategory] = useState("")
    const fetchedData = async()=>{
        let url = 'https://dummyjson.com/products/categories'
        const response = await fetch(url)
        const categories = await response.json() 
        
        setCategory(categories)
    } 
    useEffect(()=>{
        fetchedData()
    },[])
        
    return (
        <>
        <div className="w-3xs h-screen bg-gray-300 text-center pl-4 py-4 overflow-auto">

            <h4 >Categories</h4>

            <div className=" w-full text-left my-5 ">
              <ul>
               { category?(category.map((categories,index)=>
                    <li key={index} onClick={()=> console.log(categories.url)}><a className=" duration-200 hover:ring-1 block px-3 hover:shadow-inner hover:shadow-gray-400 py-1 text-lg mb-1 rounded" href="#">{categories.name}</a></li>
                    
                )):<h3>loading</h3>}
                
                
                
                
              </ul>
               
            </div>

        </div>
        </>
    )

}
export default SideBar