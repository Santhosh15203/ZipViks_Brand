import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';


export default function CardDetails({cardItems,setCardItems}) {
  const {id}=useParams()
  const[product,setProduct]=useState(null)
  const [custumQuantity,setCustumQuantity]=useState(1)
  

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/product/${id}`)
    .then(res=>res.json())
    .then(res=>setProduct(res.singleuserproduct))

  },[id])
  if (!product) {
    return <>
             <div style={{ width: "100%", height: "347px" }} className="p-5 d-flex justify-content-center align-items-center"> 
                 <p > <i className="bi bi-arrow-clockwise spin"></i> Loading...</p> 
             </div>
           </> 
  }
  const fixedprice=Number(String(product.fixedprice).replace(/,/g,""))
  const discount=Number(product.discount)
  const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)

  function handleIncrementQuantity(){
    if(product.quantity==custumQuantity) return
    else setCustumQuantity((state)=>state+1)
  }
  function handleDecrementQuantity(){
    if(custumQuantity>1) setCustumQuantity((state)=>state-1)
  }

  function handleAddToCart(){
   const aldreadyIdExists= cardItems.find((item)=>(
      item.product._id===product._id
   ))
    if(!aldreadyIdExists){
    const newItems={product,custumQuantity}
    setCardItems((state)=>[...state,newItems])
    toast.success("Successfully added to cart!")
  }
  else{
    toast.error("Item is already in the cart!")
  }
  }
 
  return (
    <>
       <div className=" p-2 mt-2 mb-2 d-flex gap-3">
        <div>
          <img src={product.image} alt="image"  style={{width:"850px",objectFit:"cover",height:"555px"}}/>
        </div>
        <div className=" d-flex flex-column text-center align-items-center" style={{width:"520px"}}>
          <div className="mt-5 d-flex flex-column justify-content-center">
            <h3 className="mb-1"><strong> {product.name}</strong></h3>
            <p><small>product id : #<span className="text-danger">{product._id}</span></small></p>
          </div>
          <p><strong>Rating : </strong> {product.ratings}</p>
          <div className="d-flex gap-2 ">
            <p> <strong>₹{sellingprice}</strong> </p>
            <p className="text-decoration-line-through text-muted">₹{fixedprice}</p>
            <p className="text-danger">{discount}% off</p>
          </div>
          <div >
            <ul className="list-unstyled d-flex gap-3">
              <li><button className="btn btn-danger" onClick={handleDecrementQuantity} disabled={custumQuantity <=1}>-</button></li>
              <li><p className="mt-1"><strong>{custumQuantity}</strong></p></li>
              <li><button className="btn btn-primary" onClick={handleIncrementQuantity} disabled={custumQuantity > product.quantity}>+</button></li>
            </ul>
          </div>
            <button onClick={handleAddToCart} className="btn btn-success ps-5 pe-5 mt-3" disabled={product.quantity==0}>Add to cart</button>
            <hr />
            <div>
              <p><strong>Status : </strong><span className={product.quantity>0?"text-success":"text-danger"} > <strong>{product.quantity>0 ?"' In Stock '":"' Out Of Stock '"}</strong> </span> </p>
            </div>
            <div className=" ms-0 descripton " style={{width:"450px",wordBreak: "break-word"}}>
              <p className="lh-md"><strong >Description : </strong> {product.description}</p>  
            </div> 
            <div className="bg-dark w-100 lh-sm mt-2 mb-2 border border-secondary"> </div>
            <p className="mt-3"><strong>Sold by :</strong> {product.soldby}</p>           
        </div>


        
       </div>
    </>
  )
}
