import {Link} from "react-router-dom"
function NavBar(){

    return(
        <>
        <nav className="w-full px-4 py-3 h-18 inset-shadow-2xs  rounded-xl flex flex-wrap justify-between content-center shadow-xl ">
            <nav className="rounded-full overflow-hidden">
                <img className="h-10" src="https://i.pinimg.com/736x/9e/f8/83/9ef8833281360bf193d2bcf0663233b6.jpg" alt="" />
            </nav>
            <div>
                <ul className="flex flex-wrap gap-2 content-center py-2">
                    <li><Link  className="hover:text-gray-500" to="#">Home</Link></li>
                    <li><Link className="hover:text-gray-500" to="/">Products</Link></li>
                    <li><Link className="hover:text-gray-500" to="/category">Category</Link></li>
                    <li><a className="hover:text-gray-500" href="#">Cart</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default NavBar