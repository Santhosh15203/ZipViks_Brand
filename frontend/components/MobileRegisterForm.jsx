import { useState } from "react"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function MobileRegisterForm(){
    const [mobile,setMobile]=useState("")
    const [step,setStep]=useState(1)
    const[userOtp,setUserOtp]=useState("")
    const[otp,setOtp]=useState("")
    const navigate=useNavigate()


     function switchModal(fromId, toId) {
        const fromEle = document.getElementById(fromId);
        const toEle = document.getElementById(toId);

        if (fromEle && toEle) {
        const hideModal = bootstrap.Modal.getInstance(fromEle) || new bootstrap.Modal(fromEle);
        const showModal = bootstrap.Modal.getInstance(toEle) || new bootstrap.Modal(toEle);
        hideModal.hide();
        showModal.show();
        }
      }    
    

    function sendOTP(e){
      e.preventDefault();
       const generatedOtp = Math.floor(1000 + Math.random() * 9000); // random 4-digit OTP
       setOtp(generatedOtp); // set OTP in state
       toast.success(`Your OTP is ${generatedOtp}`)
      setStep(2)
    } 
   
function verifyOTP(e) {
  e.preventDefault();
  console.log("otp", otp);
  console.log("userotp", userOtp);

  if (String(otp) === String(userOtp)) {
    fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/sendOTP`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile })
    })
      toast.success("Successfully Registered!");
     const modal = bootstrap.Modal.getInstance(document.getElementById('registerMobile'));
    modal?.hide();
  
         
  } else {
    toast.error("OTP wrong!");
    setUserOtp("")
  }
}

    
    function resetOtp(){
        setUserOtp("")
        verifyOTP()
    }
    return(
        <>                                                                  
           <div className="modal fade" id="registerMobile" aria-hidden="true">
              <div className="modal-dialog p-5 pt-0">
                <div className="modal-content ">

                  <div className="modal-header">
                    <h5 className="modal-title text-dark fw-bold text-decoration-underline " >Mobile Registeration</h5>
                    <button className="btn-close bg-danger" data-bs-dismiss="modal"></button>
                  </div>

          
                     <div className="modal-body d-flex flex-column gap-2">
                        <img src="./form/mobileRegisterLogo.jpg" alt="mobile logo"  style={{width:"100%",objectFit:"cover"}} className="rounded"/>
                          
                          {step==1 && (
                            <>
                            <form onSubmit={sendOTP}>
                               <div className="input-group mt-2">
                                <span  className="input-group-text"><img src="/form/indianFlag.png" alt="flag" style={{width:"33px"}} />+91</span>
                                <input type="tel" placeholder="Enter Phone Number" maxLength={10} name="mobile" className="form-control " value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required/>                                                                                                                                                                   
                            </div>
                            <button className="btn btn-danger fs-7 mb-3 w-100 mt-3" type="submit">Send OTP</button>

                            </form>
                            
                            </>

                          )}
                       {step == 2 && (
                              <>                                                                     
                                <form onSubmit={verifyOTP}>
                                  <div className="input-group mt-2">
                                    <input
                                      type="tel"
                                      placeholder="Enter OTP"
                                      maxLength={4}
                                      className="form-control"
                                      value={userOtp}
                                      onChange={(e) => setUserOtp(e.target.value)}
                                      required
                                    />
                                  </div>
                                  <button className="btn btn-success small mt-3 w-100" type="submit">
                                    Verify OTP
                                  </button>
                                </form>
                                <div className="d-flex justify-content-between">
                                  <p  className="mt-0 text-decoration-underline small " style={{ cursor: "pointer"}} onClick={sendOTP}>Resend Code</p>
                                  <p  className="mt-0 text-decoration-underline small " style={{ cursor: "pointer"}} onClick={() => setStep(1)}>Back</p>
                                 

                                </div>
                              </>
                            )}


                            <p className=" mb-0" style={{fontSize:"13px"}}>By continuing, you agree to our</p>
                            <ul className="list-unstyled d-flex gap-2 mb-0 small mt-0 justify-content-center ">
                              <li><a href="" className="text-dark small">Terms of Service</a></li>
                              <li><a href="" className="text-dark small">Privacy Policy</a></li>
                              <li><a href="" className="text-dark small">Content Policy</a></li>
                            </ul>
                    </div>

                  <div className="modal-footer small d-flex justify-content-between">
                    <p className="text-decoration-underline" onClick={()=>{resetForm()}} style={{cursor:"pointer"}}  >Reset</p>
                    <p>Don't have an account? <span className="text-danger text-decoration-underline"  onClick={()=>{switchModal('registerMobile','registerModal')}} style={{cursor:"pointer"}}>Sign Up</span></p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}