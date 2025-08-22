import { Link } from "react-router-dom"
import StarDisplay from "./StarDisplay"

export default function ProductCard({product}){
    const fixedprice=Number(String(product.fixedprice).replace(/,/g,""))
    const discount=Number(product.discount)
    const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)

    return(
        <>
        <div className="card border border-shadow d-flex  flex-column p-0  "  style={{ width: "100%", height: "400px" }}>
                <img src={product.image} className="card-top-img " alt={product.name} style={{ width: "100%", height: "75%", objectFit: "cover" }} />
                
                <div className="card-body small d-flex flex-column justify-content-center  pt-1 pb-0 p-0 ">
                    <div className="ps-1">
                        <h6 className="mb-1">{product.name}</h6>
                        <p className=" mb-0">{product.description}</p>
                        <div className="mb-0 small">
                            {product.ratings} <StarDisplay rating={product.ratings} />
                        </div>
                    </div>

                    <div className="mb-0 ">
                        <div className="d-flex gap-2 align-items-center ps-1">
                            <p className="fw-bold mb-0">₹{sellingprice}.00</p>
                            <p className="small text-decoration-line-through mb-0">₹{product.fixedprice}</p>
                            <p className="text-danger mb-0">
                            <span>{product.discount}</span>% off
                            </p>
                        </div>
                        <Link to={"/product/" + product._id} className="btn btn-danger btn-sm mt-2 w-100 mb-0 ps-0"> View Details </Link>
                    </div>
                </div>



                </div>

            
            
        </>
    )
}