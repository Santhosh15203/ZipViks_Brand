import { Link } from "react-router-dom"
import StarDisplay from "./StarDisplay"

export default function ProductCard({product}){
    const fixedprice=Number(String(product.fixedprice).replace(/,/g,""))
    const discount=Number(product.discount)
    const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)

    return(
        <>
        <div className="card border border-shadow  d-flex flex-column"  style={{ width: "100%", height: "350px" }}>
                <img src={product.image} className="card-top-img" alt={product.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <div>
                        <h6 className="mb-1">{product.name}</h6>
                        <p className="small mb-1">{product.description}</p>
                        <div className="mb-1">
                            {product.ratings} <StarDisplay rating={product.ratings} />
                        </div>
                    </div>

                    <div>
                        <div className="d-flex gap-2 align-items-center">
                            <p className="fw-bold mb-0">₹{sellingprice}.00</p>
                            <p className="small text-decoration-line-through mb-0">₹{product.fixedprice}</p>
                            <p className="text-danger mb-0">
                            <span>{product.discount}</span>% off
                            </p>
                        </div>
                        <Link to={"/product/" + product._id} className="btn btn-danger btn-sm mt-2 w-100"> View Details </Link>
                    </div>
                </div>
                </div>

            {/* <div className="card border border-shadow bg-success " style={{width:"100%"}}>
                <img src={product.image} className="card-top-img " alt={product.name} style={{width: "100%",height: "200px",objectFit: "cover" }} />
                <div className="card-body ">
                    <h6 className="">{product.name}</h6>
                    <p className="small mb-0 mt-0">{product.description}</p>
                    <div className="mb-0">{product.ratings} <StarDisplay rating={product.ratings} /></div>
                    <div className="d-flex gap-2 mb-0 ">
                        <p className="fw-bold">₹{sellingprice}.00</p>
                        <p className="small text-decoration-line-through">₹{product.fixedprice}</p>
                        <p className="text-danger"><span>{product.discount}</span>% off
                        </p>
                    </div>
                    <Link to={"/product/"+product._id} className="btn btn-danger mb-0 mt-0">View Details</Link>
                </div>
                
            </div> */}

            
            
        </>
    )
}