import { useState } from "react"
import { Link } from "react-router-dom"

export default function MobileRegisterForm(){
    const [userMobileNumber,setUserMobileNumber]=useState("")


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

    function handleUserMobileNumberRegisteration(){

    }
    function resetForm(){
        setUserMobileNumber("")
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

                  <form onSubmit={handleUserMobileNumberRegisteration}>
                     <div className="modal-body d-flex flex-column gap-2">
                        <img src="./form/mobileRegisterLogo.jpg" alt="mobile logo"  style={{width:"100%",objectFit:"cover"}} className="rounded"/>
                       
                            <div className="input-group mt-2">
                                <span  className="input-group-text"><img src="/form/indianFlag.png" alt="flag" style={{width:"33px"}} />+91</span>
                                <input type="text" placeholder="Enter Phone Number" maxLength={10}  className="form-control" value={userMobileNumber} onChange={(e)=>{setUserMobileNumber(e.target.value)}} required/>
                                                                                                                                                                                                                             
                            </div>
                            <button className="btn btn-danger small mb-3" type="submit">Continue with OTP</button>
                            <p className=" mb-0" style={{fontSize:"13px"}}>By continuing, you agree to our</p>
                            <ul className="list-unstyled d-flex gap-2 mb-0 small mt-0 justify-content-center ">
                              <li><a href="" className="text-dark small">Terms of Service</a></li>
                              <li><a href="" className="text-dark small">Privacy Policy</a></li>
                              <li><a href="" className="text-dark small">Content Policy</a></li>
                            </ul>
                       
                    </div>

                  </form>
                 


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