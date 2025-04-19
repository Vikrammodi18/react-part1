
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'


import { useState } from 'react'
import { faApple, faGoogle, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'


function Login(){
    const[count,setCount] = useState(0)
    function addNumber(){
        setCount(pre=>pre+1)
        console.log(count)
    }
    return (
        <>
        
        <div className="w-full h-80 flex flex-wrap justify-center content-center">
            <div className="w-3xl h-70 bg-white flex flex-wrap flex-col content-center">
                <h4 className="p-4 text-center text-2xl font-black text-gray-700">Login to Apple Store</h4>
                <div className="w-lg border-1 mt-4 px-4 rounded-xl border-solid flex justify-between">
                    
                    <input type="text" name="" id="email" placeholder="Enter your email" className="outline-none h-10 w-full py-2 px-2" />
                    <button onClick={addNumber}><FontAwesomeIcon className='text-2xl hover:text-gray-500' icon={faRightLong} /></button>
                </div>
                    <div className='text-3xl text-center my-6'>
                    <FontAwesomeIcon className='mx-2 hover:text-gray-500' icon={faApple} />
                    <FontAwesomeIcon className='mx-2 hover:text-gray-500' icon={faInstagramSquare} />
                    <FontAwesomeIcon className='mx-2 hover:text-gray-500' icon={faGoogle} />
                    
                    </div>
            </div>
        </div>
        
        </>
    )
}

export default Login