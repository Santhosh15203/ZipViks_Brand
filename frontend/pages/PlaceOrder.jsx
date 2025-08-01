
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function PlaceOrder({cardItems,setCardItems,loggedInUser}){
    const[complete,setComplete]=useState(false)
    const [feedback,setFeedback]=useState("")
    const navigate=useNavigate()
    const handleIncrementQuantity=(id) => {
       const updatedItems= cardItems.map((storedcard)=>{
            if(storedcard.product._id===id){
                if(storedcard.custumQuantity<storedcard.product.quantity){
                    return {...storedcard,custumQuantity:storedcard.custumQuantity+1}
                }

            }

            return storedcard
        })
        setCardItems(updatedItems)
    }

    const handleDecrementQuantity=(id)=>{
       const updatedItems= cardItems.map((storedcard)=>{
            if(storedcard.product._id===id){
                if(storedcard.custumQuantity>1){
                    return {...storedcard,custumQuantity:storedcard.custumQuantity-1}
                }

            }
            return storedcard
        })
        setCardItems(updatedItems)
    }

    const handleDeleteItem=(id)=>{
        const updatedItems=cardItems.filter((card)=>{
            if(card.product._id!==id){
                return true
            }
        })
        setCardItems(updatedItems)
    }
    
    function handlePlaceOrderItems(loggedInUser){
        if(!loggedInUser){
            toast.error("User must be login !")
            setCardItems([])
            navigate("/")
            return
        }
        else {

        //     fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/order`,
        // {
        //     method:"POST",
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify({cardIte
        // ms,user:loggedInUser})
        // })
        // .then(()=>{
        //     // setCardItems([]);
        //     // setComplete(true);
        //     // toast.success("Order Success!")
        //     navigate("/payment")
        // })
        }
            navigate("/payment")

        
    }
    function handleSubmitFeedback(e){
        e.preventDefault(); 
        if(feedback===""){
            alert("plese fill out the field")
            return
        }
        toast.success("Thank for your response.")
        navigate('/')
    }
   
    
    return(
        <>
        {cardItems.length<=0? <> 
                                 {!complete?
                                      <>
                                       <div className="" style={{ width: "100%", height: "250px" }}>
                                            <div className="d-flex justify-content-center gap-1" style={{ marginTop: "10%" }}>
                                                <span className="text-danger fs-3 ">Your cart item is Empty!</span>
                                            </div>
                                        </div>
                                      </>:
                                      <>
                                       <div  className="d-flex flex-column align-items-center justify-content-center gap-4">
                                          <div className="d-flex flex-column text-center gap-1 mt-5" >
                                            <h5 className="text-success mb-0">Order Complete !</h5>
                                            <p>Your order has been placed succesfully.</p>
                                          </div>
                                          <div className="mt-5 mb-3 border p-4">
                                            <form onSubmit={handleSubmitFeedback}>
                                                <h4>We want your opinion!😊</h4>
                                                <p>How satisfied are you with our product.What do you like/not like about our product?*</p>
                                                <textarea className="p-2" rows={4} cols={70} placeholder="Please fill in your answer" onChange={(e)=>{setFeedback(e.target.value)}} required></textarea><br />
                                                <button className="btn btn-primary ">Send Feedback</button>
                                            </form>
                                          </div>
                                          
                                       </div>
                                      
                                      </>}
                                
                               </>:
                               <>
                                 <div className="container  mt-3 " >
                                        <div className="text-center mt-3">
                                            <h5>Your Cart : <span className="text-success">{cardItems.length}</span> items</h5>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <div>
                                            {cardItems.map((card)=>{
                                                if (!card || !card.product) return null;
                                                const discount=Number(card.product.discount)
                                                const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                                                const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)
                                                 
                                                return(
                                                    <div className="d-flex gap-3 mb-3" key={card.product._id}>
                                                    <div>
                                                        <img src={card.product.image} alt="img" style={{width:"250px",height:"200px",objectFit:"cover"}} />
                                                    </div>
                                                    <div className="d-flex flex-column flex-column justify-content-center align-items-center" style={{width:"250px"}}>
                                                       <p className="mb-1 text-muted">(Product Name)</p>
                                                        <Link to={`/product/${card.product._id}`} className="text-decoration-none"><strong className="text-dark fs-6">{card.product.name}</strong></Link>
                                                    </div>
                                                    <div className=" d-flex flex-column justify-content-center align-items-center pt-2" style={{width:"80px"}}>
                                                        <p className="mb-1 text-muted">(1pc. Amt)</p>
                                                        <p><strong> ₹{sellingprice}.00</strong></p>
                                                    </div>
                                                    <div className="ms-3 d-flex flex-column align-items-center justify-content-center pt-3 " >
                                                        <div className="mb-0 text-muted">
                                                            <p>(Add count)</p>
                                                        </div>
                                                        <div >
                                                            <ul className="list-unstyled d-flex gap-3">
                                                                <li><button className="btn btn-danger" onClick={()=>handleDecrementQuantity(card.product._id)} disabled={card.custumQuantity<=1}>-</button></li>
                                                                <li><p className="mt-1"><strong>{card.custumQuantity}</strong></p></li>
                                                                <li><button className="btn btn-primary" onClick={()=>handleIncrementQuantity(card.product._id)} disabled={card.custumQuantity>=card.product.quantity}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="ms-3 d-flex flex-column align-items-center justify-content-center pt-2">
                                                        <p className="mb-1 text-muted">(Total. Amt)</p>
                                                        <p className="text-success fw-bold">₹{card.custumQuantity*sellingprice}.00</p>
                                                    </div>
                                                    <div className="d-flex flex-column align-items-center justify-content-center ms-3 pt-0">
                                                        <p className="mb-0 text-muted">(Delete)</p>
                                                        <button className="btn " onClick={()=>{handleDeleteItem(card.product._id)}}><i className="bi bi-trash3-fill text-danger"></i></button>
                                                    </div>
                                                </div>
                                                )
                                            })}
                                                
                                               
                                           
                                           </div>
                                           <div className="border border-secondary shadow ms-5 d-flex justify-content-center text-center rounded" style={{width:"250px",height:"200px"}}>
                                               <div>
                                                 <p className="fw-bold mt-3 text-decoration-underline mb-4">Order Summary</p>
                                                 <div className="mb-4">
                                                    <p className="mb-2">Total Items : <strong>{cardItems.reduce((acc,card)=>(acc+card.custumQuantity),0)} (Units)</strong></p>
                                                    <p>Total Amount : <strong>₹{cardItems.reduce((acc,card)=>{
                                                                                                            const discount=Number(card.product.discount)
                                                                                                            const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                                                                                                            const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)
                                                                                                            return (acc+(card.custumQuantity*Number(sellingprice)))
                                                                                                            },0)}.00</strong></p>
                                                    
                                                 </div>
                                                 <button className="btn btn-success ps-5 pe-5 " onClick={()=>{handlePlaceOrderItems(loggedInUser)}}>Proceed to Pay</button>
                                               </div>
                                           </div>
                                        </div>
                                </div>

                            
                               </>}
       
        </>
    )
}