import { useState } from "react"
import Cards from "../cards/Cards"
import NavBar from "../navBar/NavBar"
import Search from "../search/Search"

function Product (){
    const [searchData,setSearchData] = useState("")

    return(
        <>
        <NavBar  />
        <Search setSearchData={setSearchData} />
        <Cards searchData={searchData} setSearchData={setSearchData} />
        </>
    )
}

export default Product