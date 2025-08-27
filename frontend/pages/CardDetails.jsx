import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import StarDisplay from "../components/StarDisplay";


export default function CardDetails({cardItems,setCardItems,productType}) {
  const [maximumQuantityReached,setMaximumQuantityReached]=useState("")
  const [userSelectSize,setUserSelectSize]=useState("Please select a size")
  const [selectsize,setSelectsize]=useState("")
  const sizes=["S","M","L","XL","2XL","3XL"]
  const {id}=useParams()
  const[product,setProduct]=useState(null)
  const [custumQuantity,setCustumQuantity]=useState(1)
  const navigate=useNavigate()
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/${productType}/${id}`)
    .then(res =>res.json())
    .then(res =>{
      let data=null
      switch(productType){
       
       case "product":
            data = res.singleuserproduct;
            break;
          case "tshirt":
            data = res.singletshirtproduct;
            break;
          case "hoodie":
            data = res.singlehoodieproduct;
            break;
          case "tpant":
            data = res.singletpantproduct;
            break;
          case "shorts":
            data = res.singleshortsproduct;
            break;
          case "chudi":
            data = res.singlechudiproduct;
            break;
          case "leggins":
            data = res.singlelegginsproduct;
            break;
          case "nightwear":
            data = res.singlenightyproduct;
            break;
          default:
            data = null;

      }
      setProduct(data)
       console.log("productType",product,"data",data)
    })
      
  },[id,productType])
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
   const TotalNumberOfQuantityInAllSize=sizes.reduce((acc,size)=>acc+Number(product[size] || 0),0)
   
  function handleIncrementQuantity(){
    const TotalSizeQuantity=product[selectsize]
    if(TotalSizeQuantity==custumQuantity){
      setMaximumQuantityReached("Maximum item reached !")
    }
       
    else { setCustumQuantity((state)=>state+1); setMaximumQuantityReached(""); }
          
  }
  function handleDecrementQuantity(){
    setCustumQuantity((state) => state - 1);
    setMaximumQuantityReached(""); 
  }
function handleAddToCart() {
  if (!selectsize) {
    toast.error("Please select a size");
    return;
  }
  const itemExists = cardItems.some(
    (item) =>
      item.product._id === product._id && item.selectsize === selectsize
  );
  if (itemExists) {
    toast.error("Item with this size is already in the cart!");
  } else {
    const newItems = { product, custumQuantity, selectsize };
    setCardItems((state) => [...state, newItems]);
    toast.success("Successfully added to cart!");
    navigate("/");
  }
}

  return (
    <>

        <div className="mt-2  d-flex d-lg-none justify-content-end">
            <p className="me-2 m-0 p-0"><a href="/" className="text-decoration-none text-danger text-end" title="Go to Homepage!">↩️back</a></p>
          
        </div>

       <div className="container mb-0 d-flex flex-column mt-0 mt-lg-3 flex-lg-row gap-3 align-items-center justify-content-center ">
        
        
        <div className="col-12 col-lg-6 mt-0  d-flex justify-content-center">
            <img 
              src={product.image} 
              alt="image" 
              className="img-fluid bg-success" 
              style={{ maxHeight: "350px", objectFit: "cover" }} 
            />
          </div>

        <div className="col-12 col-lg-6 d-flex flex-column text-center align-items-center ">
          <div className=" d-flex flex-column justify-content-center"> 
            <h4 className="mb-0"><strong > {product.name}</strong></h4>
            <p className="mb-1 small"><small>product id : #<span className="text-danger">{product._id}</span></small></p>
             <div className="fw-bold mt-0 "> <StarDisplay rating={product.ratings} /></div>
            
          </div>
        
          <div className="d-flex gap-2 mb-1">
            <p className="m-0 p-0"> <strong><span className="text-success fs-6">₹{sellingprice}.00</span> </strong> </p>
            <p className="text-decoration-line-through text-muted small m-0 p-0">₹{fixedprice}.00</p>
            <p className="text-danger fw-bold small m-0 p-0" >({discount}% off )</p>
          </div>


          <div className="required ">                                                                    
            <ul className="list-unstyled d-flex gap-2 mb-1">
              {sizes.map((size) => {
                const isOutOfStock = Number(product[size]) === 0;
                const isSelected = selectsize === size;

                return (
                  <li key={size}>
                    <button
                      className={`btn border ${isSelected ? "bg-dark text-white" : "border-dark"} ${isOutOfStock ? "text-decoration-line-through" : ""}`}
                      onClick={() => {
                        setSelectsize(size);
                        setCustumQuantity(1);
                        setMaximumQuantityReached("");
                      }}
                      disabled={isOutOfStock}
                    >
                      {size}
                    </button>
                  </li>
                );
              })}
            </ul>

            {!selectsize && (<p className="text-danger text-start">{TotalNumberOfQuantityInAllSize==0?!userSelectSize:userSelectSize}</p> )}
          </div>
          {selectsize && ( <>
             <div className="">
                <p><strong>Available Stocks :</strong> <span className="text-danger fw-bold">{product[selectsize]}</span></p>
              </div> 
          </>)}

          <div className=" d-flex flex-column">
            <div className="">
                 <ul className="list-unstyled d-flex gap-3 justify-content-center  m-0">
                  <li><button className="btn border border-dark" onClick={handleDecrementQuantity} disabled={custumQuantity <=1||TotalNumberOfQuantityInAllSize==0}>-</button></li>
                  <li><p className="" disabled={TotalNumberOfQuantityInAllSize==0}><strong>{TotalNumberOfQuantityInAllSize==0?"0":custumQuantity}</strong></p></li>
                  <li><button className="btn border border-dark" onClick={handleIncrementQuantity} disabled={custumQuantity > product[selectsize]  || TotalNumberOfQuantityInAllSize==0}>+</button></li>
                </ul>
                
            </div>
            <div>
               {maximumQuantityReached && (<p className="text-danger">{maximumQuantityReached}</p> )}
            </div>
          
          </div>
          
            <button onClick={handleAddToCart} className="btn btn-success ps-5 pe-5 mt-1" disabled={TotalNumberOfQuantityInAllSize==0}>Add to cart</button>

            <div >
              <p className="mb-0 mt-1"><strong>Status : </strong><span className={TotalNumberOfQuantityInAllSize>0?"text-success":"text-danger"} > <strong>{TotalNumberOfQuantityInAllSize>0 ?"' In Stock '":"' Out Of Stock '"}</strong> </span> </p>
            </div>
            <div className="container " style={{wordBreak: "break-word"}}>
              <p className="lh-sm mb-2"><strong >Description : </strong> {product.description}</p>  
            </div> 
            <div className="bg-dark w-50 text-center mb-1  border border-secondary"> </div>
            <p className=""><strong>Sold by :</strong> {product.soldBy}</p>           
        </div>


        
       </div>
    </>
  )
}
