import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function MobileRegisterForm({setUserMobileRegsiterData}){
  const navigate=useNavigate()
    const [mobile,setMobile]=useState("")
    const [step,setStep]=useState(1)
    const[userOtp,setUserOtp]=useState("")
    const[wrongOtp,setWrongOtp]=useState("")
    const[otp,setOtp]=useState("")
    const[userAldreadyFound,setUserAldreadyFound]=useState("")
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
    

   async function sendOTP(e) {
  e.preventDefault();

  try {
    const userRes = await fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/userlogin`);
    const { userlogindata } = await userRes.json();

    const regRes = await fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/getMobileRegisterData`);
    const { registerMobileData } = await regRes.json();

    const registerForm = userlogindata.find(user => user.mobile === mobile);
    const mobileRegister = registerMobileData.find(user => user.mobile === mobile);

    if (mobile.length !== 10) {
      setUserAldreadyFound("Invalid Input!");
    } else if (!registerForm && !mobileRegister) {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000);
      setOtp(generatedOtp);
      toast.success(`Your OTP is ${generatedOtp}`);
      setStep(2);
    } else {
      setUserAldreadyFound("User already exist!");
      setMobile("");
    }
  } catch (err) {
    console.error("Send OTP error:", err);
    toast.error("Something went wrong, please try again.");
  }
}


   
function verifyOTP(e) {
  e.preventDefault();
  if (String(otp) === String(userOtp)) {
    fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/registermobile`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile }) // mobile will now have the value
    })
    .then(res => res.json())
    .then(() => {
      
      const modal = bootstrap.Modal.getInstance(document.getElementById('registerMobile'));
      modal?.hide();
      fetch(` ${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/getMobileRegisterData`)
      .then(res=>res.json())
      .then((res)=>{
        const storeData=res.registerMobileData
        const registerMobileData=storeData.find(user=>user.mobile==mobile)
        setUserMobileRegsiterData(registerMobileData)
      })
      toast.success("Successfully Registered!");
      navigate("/")
      
    })
    .catch((error) => {
      toast.error("Registration failed. Please try again.");
      console.log(error.message())
    });
  } else {
    setWrongOtp("Invalid OTP!");
    setUserOtp("");
  }
}

    function resetCode(){
      const generatedOtp = Math.floor(1000 + Math.random() * 9000); 
                setOtp(generatedOtp);
                toast.success(`Your OTP is ${generatedOtp}`)

    }
    function resetForm(){
        setUserOtp("")
    }
    return(
        <>                                                                  
           <div className="modal fade " id="registerMobile" aria-hidden="true">
              <div className="modal-dialog ">
                <div className="modal-content ">

                  <div className="modal-header">
                    <h5 className="modal-title text-dark fw-bold text-decoration-underline " >Mobile Registeration</h5>
                    <button className="btn-close " data-bs-dismiss="modal"></button>
                  </div>

          
                     <div className="modal-body d-flex flex-column gap-2">
                        <img src="./form/mobileRegisterLogo.jpg" alt="mobile logo"  style={{width:"100%",height:"75%",objectFit:"cover"}} className="rounded"/>
                          
                          {step==1 && (
                            <>
                            <form onSubmit={sendOTP}>
                               <div className="input-group mt-2">
                                <span  className="input-group-text"><img src="/form/indianFlag.png" alt="flag" style={{width:"33px"}} />+91</span>
                                <input type="tel" placeholder="Enter Phone Number" maxLength={10} name="mobile" className="form-control " value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required/>       
                                                
                                                                                                           
                            </div>
                               {userAldreadyFound && <>
                                    <p className="text-danger mt-1 mb-0 ">{userAldreadyFound}</p>
                                </>}
                        
                            <button className="btn btn-danger fs-7 mb-2 w-100 mt-3" type="submit">Send OTP</button>

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
                                  {wrongOtp && <>
                                  <p className="text-danger mb-0  mt-2">{wrongOtp}</p>
                                      
                                  </>}
                                  <button className="btn btn-success  mt-3 w-100" type="submit">
                                    Verify OTP
                                  </button>
                                </form>
                                <div className="d-flex justify-content-between">
                                  <p  className="mt-0 text-decoration-underline  " style={{ cursor: "pointer"}} onClick={resetCode}>Resend Code</p>
                                  <p  className="mt-0 text-decoration-underline  " style={{ cursor: "pointer"}} onClick={() => setStep(1)}>Back</p>
                                 

                                </div>
                              </>
                            )}

                          <div>
                            <p className=" mb-0 text-center" style={{fontSize:"17px"}}>By continuing, you agree to our</p>
                            <ul className="list-unstyled d-flex gap-3 mb-0 mt-0 justify-content-center ">
                              <li><a href="" className="text-dark ">Terms of Service</a></li>
                              <li><a href="" className="text-dark ">Privacy Policy</a></li>
                              <li><a href="" className="text-dark ">Content Policy</a></li>
                            </ul>

                          </div>
                            
                    </div>

                  <div className="modal-footer d-flex justify-content-between ">
                    <p className="text-decoration-none" onClick={()=>{resetForm()}} style={{cursor:"pointer"}}  >Reset</p>
                    <p>Create am account? <span className="text-danger text-decoration-none"  onClick={()=>{switchModal('registerMobile','registerModal')}} style={{cursor:"pointer"}}>Sign Up</span></p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}