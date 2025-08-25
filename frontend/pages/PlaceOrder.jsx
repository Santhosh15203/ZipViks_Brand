
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function PlaceOrder({cardItems,setCardItems,loggedInUser,userMobileRegisterData}){

    const [modifiedMaximumQuantityReached,setModifiedMaximumQuantityReached]=useState(null)
    const[complete,setComplete]=useState(false)
    const [feedback,setFeedback]=useState("")
    const navigate=useNavigate()

const handleIncrementQuantity = (id, size) => {
    let reachLimit = false;
    const updatedItems = cardItems.map((storedcard) => {
        
        if (storedcard.product._id === id && storedcard.selectsize === size) {
            if (storedcard.custumQuantity < Number(storedcard.product[size]) ) {
                return { ...storedcard, custumQuantity: storedcard.custumQuantity + 1 };
            } else {
                reachLimit = true;
            }
        }
        return storedcard;
    });

    setCardItems(updatedItems);
    if (reachLimit) {
        setModifiedMaximumQuantityReached({id,size});
    } else {
        setModifiedMaximumQuantityReached("");
    }
};

    const handleDecrementQuantity=(id,size)=>{
       const updatedItems= cardItems.map((storedcard)=>{
            if(storedcard.product._id===id && storedcard.selectsize === size){
                if(storedcard.custumQuantity>=1){
                    return {...storedcard,custumQuantity:storedcard.custumQuantity-1}
                }
            }
            return storedcard
        })
        setCardItems(updatedItems);
        setModifiedMaximumQuantityReached(""); 
    }

    const handleDeleteItem = (id, size) => {
            const updatedItems = cardItems.filter(
            (card) =>  !(card.product._id === id && card.selectsize === size)
            );
            setCardItems(updatedItems);
    };                                                                                                                   

    
    function handlePlaceOrderItems(){
        if(loggedInUser || userMobileRegisterData ){
            navigate("/payment");
        }
        else  { navigate("/");
            toast.error("User must be login!");
            return }
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
                                            <div className="d-flex flex-column text-center justify-content-center gap-1" style={{ marginTop: "10%" }}>
                                                <p className="text-danger fs-3 ">Your cart item is Empty!</p>
                                                <p> <Link to={'/'} className="btn  btn-outline-dark small">Back to Home</Link></p>
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
                                 <div className="container mt-3  " >

                                        <div className="text-center mt-3">
                                            <h6>Your Cart : <span className="text-success">{cardItems.length}</span> items</h6>
                                        </div>
                                        
                                        
                                            
                                            {cardItems.map((card)=>{
                                                if (!card || !card.product) return null;
                                                const discount=Number(card.product.discount)
                                                const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                                                const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)
                                                 
                                                return(
                                                    <div className="d-flex justify-content-center" key={`${card.product._id}-${card.selectsize}`}>
                                                        <div className=" ">
                                                            <img src={card.product.image} alt="img" style={{width:"100%",height:"200px",objectFit:"cover"}} />
                                                        </div>

                                                        <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center  " style={{maxHeight:"200px"}}>

                                                             <div className=" ">
                                                                
                                                                <Link to={`/product/${card.product._id}`} className="text-decoration-none"><strong className="text-dark fs-6 text-decoration-underline p-0 p-lg-4" style={{maxWidth:"50px"}}>{card.product.name}</strong></Link>
                                                            </div>
                                                            <div className=" p-0 p-lg-4" >
                                                                <p className="m-0 "> 1pc.<strong> ₹{sellingprice}.00</strong></p>
                                                            </div>
                                                            <div className=" p-0 p-lg-4" >
                                                                <p className="m-0">size :<strong> {card.selectsize}</strong></p>
                                                            </div>
                                                            
                                                                    <div className=" d-flex flex-column text-center bg-white">
                                                                        <ul className="list-unstyled d-flex m-0 p-0 p-lg-4 gap-2 gap-lg-3">
                                                                                <li><button className="btn border border-dark" onClick={()=>handleDecrementQuantity(card.product._id,card.selectsize)} disabled={card.custumQuantity<=1}>-</button></li>
                                                                                <li><p className=""><strong>{card.custumQuantity}</strong></p></li>
                                                                                <li><button className="btn border border-dark" onClick={()=>handleIncrementQuantity(card.product._id,card.selectsize)} disabled={card.custumQuantity>Number(card.product[card.selectsize])}>+</button></li>
                                                                            </ul>

                                                                    </div>
                                                                
                                                                    {modifiedMaximumQuantityReached && modifiedMaximumQuantityReached.id === card.product._id && modifiedMaximumQuantityReached.size === card.selectsize && (
                                                                        <div className="text-danger small">
                                                                            Max. Stock Limit !
                                                                        </div>
                                                                        )}
                                                               
                                                                
                                                            
                                                                
                                                            <div className=" p-0 p-lg-4">
                                                                <p className="m-0">Tot amt.<strong className="text-success"> ₹{card.custumQuantity*sellingprice}.00</strong></p>
                                                            </div>
                                                            <div className=" p-0 p-lg-4">
                                                                <button className=" btn-sm border  border-dark" onClick={()=>{handleDeleteItem(card.product._id,card.selectsize)}}><i className="bi bi-trash3-fill text-danger"></i></button>
                                                            </div>




                                                        </div>
                                                       
                                                    </div>
                                                )
                                            })}
                                                
                                           
                                           
                                        

                                        <div className="d-flex mt-5" >
                                            <div className="w-75 ">
                                                <img src="./slide/carousel1.jpg" style={{width:"100%",height:"172px" ,objectFit:"cover"}} alt="offer code" />
                                            </div>
                                            <div className=" p-2 w-25 text-center">
                                                <p className="fw-bold mt-1 text-decoration-underline">Order Summary</p>
                                                    <p className="mb-2">Total Items : <strong>{cardItems.reduce((acc,card)=>(acc+card.custumQuantity),0)} (Units)</strong></p>
                                                    <p>Total Amount : <strong>₹{cardItems.reduce((acc,card)=>{
                                                                                                            const discount=Number(card.product.discount)
                                                                                                            const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                                                                                                            const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)
                                                                                                            return (acc+(card.custumQuantity*Number(sellingprice)))
                                                                                                            },0)}.00</strong></p>
                                               
                                                 <button className="btn btn-success " onClick={handlePlaceOrderItems}>Proceed to Pay</button>

                                            </div>
                                                 
                                            
                                               
                                           </div>
                                </div>

                            
                               </>}
       
        </>
    )
}