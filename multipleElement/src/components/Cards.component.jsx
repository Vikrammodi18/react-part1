// require("dotenv").config()
import {useState } from "react"

function Card({data}){
    const [addToCart,setAddToCart] = useState(false)
    
    const payment = async (price)=>{
        
        const url = "http://localhost:8080/api/v1/payments/createOrder"
        const response = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                amount:price}),
            
        })
        const orderData = await response.json()
        let{data:paymentData} = orderData
        // console.log(paymentData)
        
        const options = {
            key: "rzp_test_EhBj4zClwJawsX", // Replace with your Razorpay key_id
            amount:paymentData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: 'INR',
            name: 'academyX',
            description: 'Test Transaction',
            order_id: paymentData.id, // This is the order_id created in the backend
            callback_url:"http://localhost:8080/payments/verifyPayment" , // Your success URL
            prefill: {
              name: 'vikram kumar modi',
              email: 'vikram@example.com',
              contact: '9999999999'
            },
            theme: {
              color: '#808080'
            },
          };
          
          const rzp = new Razorpay(options);
          rzp.open();
    
    
    }
    return (
        <>
        
        <div className="w-3xs h-70  inset-shadow-2xs shadow-lg px-5 rounded-xl mx-3 my-3">
            <div className="p-1 text-center object-cover flex justify-center">

            <img className="h-35" src={data.images[0]} alt="" />
            </div>
            <div className="text-wrap">
                <h5 className="leading-none "> <b>{data.title}</b></h5>
                <p>Price:{data.price.toLocaleString('en-IN')}</p>
                <p>free delivery</p>
                <div>

                <button className=" inline-block mx-2 shadow-lg inset-shadow-2xs shadow-gray-500/40 px-2 py-1 rounded-lg my-1 bg-gray-300 hover:bg-gray-400 duration-200" onClick={()=>{setAddToCart(!addToCart)}}>{addToCart?"added":"add to cart"}</button>
                <button className="shadow-lg inset-shadow-2xs shadow-gray-500/40 px-2 py-1 rounded-lg my-1 bg-blue-600 hover:bg-blue-400 duration-200" onClick={()=>{payment(data.price)}}>buy now</button>
                </div>
            </div>
        </div>
        </>
    )
}
function Cards ({data}){
    
    
    return(
        <>
        <div className="flex flex-wrap w-full justify-between">
       { data?.products? (data.products.map((data)=>
        <Card data={data} key={data.index} />
        )):<h3 className="text-center my-3">loadingg</h3>}
        </div>
        </>
    )
}

export default Cards