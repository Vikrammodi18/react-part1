
function Parent(Props){
    console.log(Props)
    return(
        <>
         <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employee Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Address</th>
            <th className="border border-gray-400 px-4 py-2">Department</th>
            <th className="border border-gray-400 px-4 py-2">Income</th>
          </tr>
        </thead>
        <tbody>
          {Props.employees.map((emp, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{emp.name}</td>
              <td className="border border-gray-400 px-4 py-2">{emp.address}</td>
              <td className="border border-gray-400 px-4 py-2">{emp.department}</td>
              <td className="border border-gray-400 px-4 py-2">₹{emp.income.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    )
}

export default Parent