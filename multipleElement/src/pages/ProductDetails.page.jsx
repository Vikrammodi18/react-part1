
function ProductDetails(){

    return (
        <>
        <div className="text-center text-3xl "><h2>produtDetails</h2></div>
        <div className="flex justify-around py-3 rounded-xl shadow-xl">
            <div className="overflow-hidden">
                <img className="scale-125" src="https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp" alt="" />
            </div>
            <div>
                <div className="p-3 w-2xl text-2xl my-4 font-mono">
                    <h1>title:<span className="font-bold">12345</span></h1>
                    <h1>description:<span className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, libero.</span></h1>
                    <p className="line-clamp-3">category: <span className="font-bold ">kitchen</span></p>
                    <p>price: <span className="font-bold">1232</span></p>
                    <p>stock: <span className="font-bold">12345</span></p>
                    <p>warrenty information: <span className="font-bold">12345</span></p>
                    <p>rating: <span className="font-bold">12345</span></p>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductDetails