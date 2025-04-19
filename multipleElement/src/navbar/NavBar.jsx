
function NavBar (){

    return(
        <>
        <nav className="w-screen flex justify-center px-5 py-3">
            <nav className="bg-gray-500 w-4xl text-white flex flex-wrap my-4 p-5 rounded-xl justify-between">
            <div><img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" /></div>
            <div>
                <ul className="flex flex-wrap px-2 py-1  gap-x-3">
                    <li><a className="hover:text-gray-300" href="#">Home</a></li>
                    <li><a className="hover:text-gray-300" href="#">About</a></li>
                    <li><a className="hover:text-gray-300" href="#">Products</a></li>
                    <li><a className="hover:text-gray-300 hidden md:block" href="#">Login</a></li>
                    <li><a className="hover:text-gray-300 hidden md:block" href="#">SignUp</a></li>
                </ul>
            </div>
            </nav>
           
        </nav>
        </>
    )
}

export default NavBar