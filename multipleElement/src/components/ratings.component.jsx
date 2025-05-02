
function Rating({val}){
    console.log(val)
    return (
        <>
        <div className="w-3xs rounded-xl shadow-xl px-3 py-2">
            <h4>rating: <span>{val.rating}</span></h4>
            <h4>comment:<span>{val.comment}</span></h4>
            <div><h4> <span>{new Date(val.date).toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}</span></h4></div>
            <h4>name: <span>{val.reviewerName}</span></h4>
            <h1>email: <span className="text-wrap">{val.reviewerEmail}</span></h1>
        </div>
        </>
    )
}
function Ratings({reviews:data}){

    return (
        <>
        <div className="flex flex-wrap px-5 py-10 gap-10 ">

        {
        data? (data.map((val)=>
            <Rating val={val} />
        )) : (<h4>loading..</h4>)
        }
        </div>
        </>
    )
}
export default Ratings
