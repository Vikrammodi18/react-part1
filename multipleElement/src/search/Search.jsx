import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Search (){

    return (
        <>
        <div>
            <div className="border-solid border-1 inline-block  rounded-xl overflow-hidden ">
            <input type="text" className="outline-none w-m p-2"  placeholder="search for products" />
            <input type="submit" className="py-2 px-2 bg-gray-400 hover:bg-gray-300 hover:text-gray-900" value="search" />

            </div>
        </div>
        </>
    )
}
export default Search