import Parent from "./Parent"

function Child(){
    let employees = [
        {
          name: "Vikram Kumar",
          address: "Ranchi, Jharkhand",
          department: "IT",
          income: 75000
        },
        {
          name: "Anjali Sharma",
          address: "Delhi",
          department: "HR",
          income: 55000
        },
        {
          name: "Raj Mehta",
          address: "Mumbai, Maharashtra",
          department: "Finance",
          income: 68000
        },
        {
          name: "Sneha Patel",
          address: "Ahmedabad, Gujarat",
          department: "Marketing",
          income: 60000
        },
        {
          name: "Amit Roy",
          address: "Kolkata, West Bengal",
          department: "Operations",
          income: 72000
        }
      ];
    return(
        <>
        <Parent employees={employees}/>
        </>
    )
}

export default Child