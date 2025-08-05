import { Link } from "react-router-dom"
import StarDisplay from "./StarDisplay"

export default function ProductCard({product}){
    const fixedprice=Number(String(product.fixedprice).replace(/,/g,""))
    const discount=Number(product.discount)
    const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)

    return(
        <>
            
            <div className="card border border-shadow" style={{width:"280px"}}>
                <img src={product.image} className="card-top-img " alt={product.name} style={{width: "280px",height: "250px",objectFit: "cover" }} />
                <div className="card-body">
                    <h6>{product.name}
                    </h6>
                    <p className="small mb-0">{product.description}</p>
                    <p className="mb-0">{product.ratings} <StarDisplay rating={product.ratings} /></p>
                    <div className="d-flex gap-2 mt-2 mb-0 ">
                        <p className="fw-bold">₹{sellingprice}.00</p>
                        <p className="small text-decoration-line-through">₹{product.fixedprice}</p>
                        <p className="text-danger"><span>{product.discount}</span>% off
                        </p>
                    </div>
                    <Link to={"/product/"+product._id} className="btn btn-danger">View Details</Link>
                </div>
                
            </div>
            
        </>
    )
}