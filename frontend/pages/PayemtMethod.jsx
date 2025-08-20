import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UpdateRegisterMobileForm from "../components/updateRegisterMobileForm";
import UpdateRegisterModal from "../components/UpdateRegisterModal";

export default function PaymentMethod({ cardItems, setCardItems, loggedInUser,userMobileRegisterData ,userMobileRegisterFormData,setUserMobileRegsiterFormData}) {
  const [firstname] = useState(loggedInUser.firstname || "");
  const [mobile] = useState(loggedInUser.mobile || "");
  const [address] = useState(loggedInUser.address || "");
  const [city] = useState(loggedInUser.city || "");
  const [state] = useState(loggedInUser.state || "");
  const [zipcode] = useState(loggedInUser.zipcode || "");
 
  const[mobileName,setMobileName]=useState("")
  const[mobileMobile,setMobileMobile]=useState("")
  const[mobileAddress,setMobileAddress]=useState("")
  const[mobileCity,setMobileCity]=useState("")
  const[mobileState,setMobileState]=useState("")
  const[mobileZipcode,setMobileZipcode]=useState("")

  useEffect(() => {
  if (userMobileRegisterFormData) {
    setMobileName(userMobileRegisterFormData.fullname || "");
    setMobileMobile(userMobileRegisterFormData.mobile || "");
    setMobileAddress(userMobileRegisterFormData.address || "");
    setMobileCity(userMobileRegisterFormData.city || "");
    setMobileState(userMobileRegisterFormData.state || "");
    setMobileZipcode(userMobileRegisterFormData.zipcode || "");
  }
}, [userMobileRegisterFormData]);

  const [showUPI, setShowUPI] = useState(true);
  const [deliveryStatus,setDeliveryStatus]=useState(false)
  const [submit,setSubmit]=useState(true)
  const [showEdit,setShowEdit]=useState(false)
  const [paymentOption, setPaymentOption] = useState("Google Pay");

  const totalMrp = cardItems.reduce((acc, card) => {
    const fixedprice = Number(String(card.product.fixedprice).replace(/,/g, ""));
    return acc + fixedprice * card.custumQuantity;
  }, 0);

  const totalDiscountAmt = cardItems.reduce((acc, card) => {
    const fixedprice = Number(String(card.product.fixedprice).replace(/,/g, ""));
    const discount = Number(card.product.discount / 100);
    const totalDiscount = Number(fixedprice * discount).toFixed(0);
    return acc + totalDiscount * card.custumQuantity;
  }, 0);

  const totalPaymentAmt = cardItems.reduce((acc, card) => {
    const discount = Number(card.product.discount);
    const fixedprice = Number(String(card.product.fixedprice).replace(/,/g, ""));
    const sellingprice = Number(fixedprice - (fixedprice * discount) / 100).toFixed(0);
    return acc + card.custumQuantity * Number(sellingprice);
  }, 0);

  function resetForm(){
     setMobileName("");
    setMobileMobile("");
    setMobileAddress("");
    setMobileCity("");
    setMobileState("");
    setMobileZipcode("");
  }

   const storeData={
        fullname: mobileName,
          mobile: mobileMobile,
          address: mobileAddress,
          city: mobileCity,
          state: mobileState,
          zipcode: mobileZipcode
    }

async function hanldeMobileRegisterForm(e){
    e.preventDefault()
    console.log("userform",userMobileRegisterFormData)
   
       
    
    try{
      
      await fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/mobileform`,{
      method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(storeData),
       
    })
    setUserMobileRegsiterFormData(storeData)
    
    setSubmit(false)
    setShowEdit(true)
    // resetForm()
    toast.success("Submitted !  ");
    

    }
    catch(error){
      console.log("Mobile Register Form Error: ",error)
    }

   

  }
  console.log("user",userMobileRegisterFormData)

  return (
    
    <>
  
    <div className="d-flex justify-content-around mb-3 mt-3 gap-5 container">
        <div className="d-flex flex-column p-3 w-75">  

        {loggedInUser && 
             <>
              <div>
                  <h5 className="text-danger fw-bold text-center mt-2 text-decoration-underline">BILLING DETAILS</h5>
                </div>
                <div className="rounded border shadow p-3 mt-3">
                  <div>
                    <div className="d-flex justify-content-between mt-3 mb-2 gap-4 text-start">
                      <div className="w-50">
                        <label className="fw-bold small"> Name :</label>
                        <input type="text" className="form-control" style={{ cursor: "none" }} value={firstname} readOnly />
                      </div>
                      <div className="w-50">
                        <label className="fw-bold small"> Mobile :</label>
                        <input type="tel" className="form-control" style={{ cursor: "none" }} value={mobile} readOnly />
                      </div>
                    </div>
                    <div className="text-start">
                      <label className="fw-bold small">Address : </label>
                      <input className="form-control p-4" style={{ cursor: "none" }} value={address} readOnly />
                    </div>
                    <div className="d-flex mt-2 mb-2 justify-content-between gap-3">
                      <div>
                        <label className="fw-bold small">City : </label>
                        <input type="text" className="form-control" style={{ cursor: "none" }} value={city} readOnly />
                      </div>
                      <div>
                        <label className="fw-bold small">State : </label>
                        <input type="text" className="form-control" style={{ cursor: "none" }} value={state} readOnly />
                      </div>
                      <div>
                        <label className="fw-bold small">ZipCode : </label>
                        <input type="text" className="form-control" style={{ cursor: "none" }} value={zipcode} readOnly />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end mt-4 gap-0 small">
                  <p className="mb-0">
                    If you want to edit this <span className="fw-bold ">Billing Details</span>, click the link below.
                  </p>
                  <p
                    className="text-danger small text-decoration-underline"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#updateRegisterModal"
                  >
                    Edit profile
                  </p>
                </div>
                <UpdateRegisterModal/>
            </>
        }

         {userMobileRegisterData && <>
                    <div>
                      <h5 className=" fw-bold text-center mt-2 text-danger" style={{fontFamily:"sans-serif"}}>BILLING DETAILS</h5>
                    </div>
                    <div className="rounded border shadow p-3 mt-3">
                      <form onSubmit={hanldeMobileRegisterForm}>
                          <div>
                        <div className="d-flex justify-content-between mt-3 mb-2 gap-4 text-start">
                          <div className="w-50">
                            <label className="fw-bold small"> Name :<span className="text-danger">*</span></label>
                            <input type="text" className="form-control"  value={mobileName} disabled={showEdit} onChange={(e)=>{setMobileName(e.target.value)}} required />
                          </div>
                          <div className="w-50">
                            <label className="fw-bold small"> Mobile :<span className="text-danger">*</span></label>
                            <input type="tel" className="form-control" value={mobileMobile} disabled={showEdit}  onChange={(e)=>{setMobileMobile(e.target.value)}} required  />
                          </div>
                        </div>
                        <div className="text-start">
                          <label className="fw-bold small">Address :<span className="text-danger">*</span> </label>
                          <input className="form-control p-4"  value={mobileAddress} disabled={showEdit}  onChange={(e)=>{setMobileAddress(e.target.value)}}  required  />
                        </div>
                        <div className="d-flex mt-2 mb-2 justify-content-between gap-3">
                          <div>
                            <label className="fw-bold small">City :<span className="text-danger">*</span> </label>
                            <input type="text" className="form-control"   value={mobileCity} disabled={showEdit}  onChange={(e)=>{setMobileCity(e.target.value)}} required  />
                          </div>
                          <div>
                            <label className="fw-bold small">State :<span className="text-danger">*</span> </label>
                            <input type="text" className="form-control" value={mobileState} disabled={showEdit}  onChange={(e)=>{setMobileState(e.target.value)}} required />
                          </div>
                          <div>
                            <label className="fw-bold small">ZipCode :<span className="text-danger">*</span> </label>
                            <input type="text" className="form-control"  value={mobileZipcode} disabled={showEdit}  onChange={(e)=>{setMobileZipcode(e.target.value)}} required  />
                          </div>
                         
                          

                        </div>
                        {submit && (
                           <div className="text-end mt-3 ">
                             <button className="mb-0 btn btn-danger small p-2" type="submit">Submit</button>
                          </div>

                        )}
                        
                      </div>

                      </form>

                    </div>

                    {showEdit && (
                      <div className="text-end mt-4 gap-0 small">
                      <p className="mb-0">
                        If you want to edit this <span className="fw-bold ">Billing Details</span>, click the link below.
                      </p>
                      <p
                        className="text-danger small text-decoration-underline"
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#updateMobileRegisterForm"
                      >
                        Edit profile
                      </p>
                    </div>

                    )}
                    <UpdateRegisterMobileForm mobileMobile={mobileMobile} userMobileRegisterFormData={userMobileRegisterFormData} setUserMobileRegsiterFormData={setUserMobileRegsiterFormData} />
                    
              </>}


                                                                     
        </div>


          <div className="shadow border p-4 w-50">
          <div className="p-1">
            <h6 className="text-center fw-bold " style={{fontFamily:"sans-serif"}}>
              PRICE DETAILS{" "}
              <span className="text-danger">
                ({cardItems.reduce((acc, card) => acc + card.custumQuantity, 0)} items)
              </span>
            </h6>
          </div>
          <hr />
          <div className="d-flex justify-content-between gap-5">
            <p>Total MRP (Inc.all Taxes)</p>
            <p>₹{totalMrp}.00</p>
          </div>
          <div className="d-flex justify-content-between gap-5">
            <p>Total Discount Amt</p>
            <p className="text-danger">- ₹{totalDiscountAmt}.00</p>
          </div>
          <div className="d-flex justify-content-between gap-5">
            <p>Delivery</p>
            <p className="text-success">🛵Free</p>
          </div>
          <div className="d-flex justify-content-between gap-5 border-bottom">
            <h6>Total Payment</h6>
            <h6>₹{totalPaymentAmt}.00</h6>
          </div>

          <div className="mt-3">
            <h6 className="fw-bold text-center " style={{fontFamily:"sans-serif"}}>PAYMENT METHOD</h6>

            <div className="mt-4">
              <input
                type="radio"
                checked={showUPI}
                onChange={() => {
                  setShowUPI(true)
                  setDeliveryStatus(false)
                }}
                style={{ cursor: "pointer" }} 
              />{" "}
              <span>Pay via UPI</span> 
              {showUPI && (
                <>
                  <div className="d-flex justify-content-around mt-3 gap-0">
                    <div onClick={() => setPaymentOption("Google Pay")} style={{ cursor: "pointer" }}>
                      <img src="./form/gpay.jpeg" alt="gpay" className="shadow rounded" style={{ width: "50px" }} />
                      <p className="text-center small mt-1">Gpay</p>
                    </div>
                    <div onClick={() => setPaymentOption("PhonePe")} style={{ cursor: "pointer" }}>
                      <img src="./form/phonepe.png" alt="phonepe" className="shadow rounded" style={{ width: "50px" }} />
                      <p className="text-center small mt-1">PhonePe</p>
                    </div>
                    <div onClick={() => setPaymentOption("Paytm")} style={{ cursor: "pointer" }}>
                      <img src="./form/paytm.png" alt="paytm" className="shadow rounded" style={{ width: "50px" }} />
                      <p className="text-center small mt-1">Paytm</p>
                    </div>
                    <div onClick={() => setPaymentOption("Bhim")} style={{ cursor: "pointer" }}>
                      <img src="./form/bhim.png" alt="bhim" className="shadow rounded" style={{ width: "50px" }} />
                      <p className="text-center small mt-1">Bhim</p>
                    </div>
                  </div>

                  <div className="bg-warning rounded mt-1">
                    <a
                      href={`upi://pay?pa=sandymoo1523-2@okhdfcbank&pn=Santhosh&am=${totalPaymentAmt}&cu=INR`}
                      className="text-decoration-none"
                    >
                      <p className="fw-bold text-dark p-2 text-center">
                        Pay ₹{totalPaymentAmt}.00 <span className="small ms-1">via {paymentOption}</span>
                      </p>
                    </a>
                  </div>
                </>
              )}
            </div> 
            <div>
              <input
                type="radio"
                checked={deliveryStatus}
                onChange={() => {
                  setDeliveryStatus(true);
                  setShowUPI(false)
                }}
                style={{ cursor: "pointer" }}
              />{" "}
              <span>Cash on Delivery</span> 
             
              {deliveryStatus && (
                <>
                <span className="text-success ms-2">(Available Soon....)</span>
                </>
              )}
            </div>
          </div>
        </div>





      </div>
  


  
      
    </>
  );
}
