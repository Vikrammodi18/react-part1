
function Search ({setSearchData}){
    
    let str = ""
    
    const searchedInput = (data)=>{
        str = data
    }
    const searchedButton = ()=>{
        setSearchData(str)
    }
    return(
        <>
        <div className="m-5 inset-shadow-2xs shadow-lg  flex justify-between inline-block rounded-xl overflow-hidden ">
            <input type="text" onChange={(e)=>{searchedInput(e.target.value)}} className="w-3xs px-2 py-2 outline-none" placeholder="Search items" name="" id="" />
            <button onClick={searchedButton} className="bg-gray-300 px-3 py-2 hover:bg-gray-400 text-lg ">search</button>
        </div>
        </>
    )
}

export default Search