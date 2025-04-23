
function SideBar ({data,setCategoryData}){
    const sendData = (categoryName)=>{
        console.log(categoryName)
        setCategoryData(categoryName)
    }
   
    return (
        <>
        <div className="w-3xs h-screen text-center  pl-4 my-2 overflow-auto">

            <div className="text-left my-5  ">
              <ul>
               { data?(data.map((categories,index)=>
                    <li key={index} onClick={()=>{ sendData(categories.slug)}}><a className=" duration-200 hover:ring-1 block px-3 hover:shadow-inner hover:shadow-gray-400 py-1 text-lg mb-1 rounded" href="#">{categories.name}</a></li>
                    
                )):<h3>loading</h3>}
 
              </ul>
               
            </div>

        </div>
        
        </>
    )

}
export default SideBar