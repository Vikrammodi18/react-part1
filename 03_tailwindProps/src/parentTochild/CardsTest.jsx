
function Cards({name,address,department,income}){
    
    return(
        <>
        
    <div className="bg-white rounded-2xl shadow-md p-4 border hover:shadow-xl transition duration-300">
    <h3 className="text-lg font-bold mb-1">{name}</h3>
    <p className="text-gray-600 mb-1"><strong>Address:</strong> {address}</p>
    <p className="text-gray-600 mb-1"><strong>Department:</strong> {department}</p>
    <p className="text-gray-700"><strong>Income:</strong> ₹{income.toLocaleString()}</p>
    </div>
        </>
    )
}

function CardComponent(props){

    return(
        props.employess.map((emp,index)=>(
            <Cards name = {emp.name}
                    address={emp.address}
                    department={emp.department}
                    income={emp.income}
               
        
        />
    )
        )
    )
}

export default CardComponent