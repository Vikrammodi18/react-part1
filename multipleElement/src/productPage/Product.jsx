import { useState } from "react"
import Cards from "../cards/Cards"
import NavBar from "../navBar/NavBar"
import Search from "../search/Search"

function Product (){
    const [searchData,setSearchData] = useState("")

    return(
        <>
        <div className="px-20 py-5">
            <div className="text-center">
                <NavBar  />
            </div>
            <div className="text-right">

            <Search setSearchData={setSearchData} />
            </div>
        <Cards searchData={searchData} setSearchData={setSearchData} />
        </div>
        </>
    )
}

export default Product