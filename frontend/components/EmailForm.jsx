import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function EmailForm({setLoggedInUser}){
    const [currentEmail,setcurrentEmail]=useState("")
    const [currentPassword,setcurrentPassword]=useState("")
    const [emailDoesnotExist,setEmailDoesnotExist]=useState("")
    const [passwordDoesnotExist,setPasswordDoesnotExist]=useState("")
    const [showPassword, setShowPassword] = useState(false);

    const navigate=useNavigate()
    function resetForm(){
        setcurrentEmail("")
        setcurrentPassword("")
    }
    function handleCheckEmailPassword(e){
        e.preventDefault()
        fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/userlogin`)
        .then(res=>res.json())
        .then(res=>{
            const userdata=res.userlogindata
            const email=userdata.some(user=>user.email===currentEmail)
            const password=userdata.some(user=>user.password===currentPassword)

            if(email) setEmailDoesnotExist("")
            else setEmailDoesnotExist("The email is not register!")

            if(password) setPasswordDoesnotExist("")
            else setPasswordDoesnotExist("The password doesn't match !")

            const user=userdata.find(user=>user.email==currentEmail && user.password==currentPassword)


            if(user){
                setLoggedInUser(user)
                 const hideModal = document.getElementById("emailModal");
                 if (hideModal) {
                    const modal = bootstrap.Modal.getInstance(hideModal) || new bootstrap.Modal(hideModal);
                    modal.hide();
                }
                resetForm()
                toast.success("Successfully Login !")
                navigate("/") 


            }
                 
                
        })


        
    }
      function switchModal(fromId, toId) {
        const fromEle = document.getElementById(fromId);
        const toEle = document.getElementById(toId);

        if (fromEle && toEle) {
        const hideModal = bootstrap.Modal.getInstance(fromEle) || new bootstrap.Modal(fromEle);
        const showModal = bootstrap.Modal.getInstance(toEle) || new bootstrap.Modal(toEle);
        hideModal.hide();
        setTimeout(() => {
          showModal.show()
        }, 300);
        }
  }

    return(
        <>
          <div className="modal fade" id="emailModal" aria-hidden="true">
              <div className="modal-dialog p-5 pt-0">
                <div className="modal-content " >
                    <form onSubmit={handleCheckEmailPassword}>
                         <div className="modal-header">
                            <h5 className="modal-title text-dark fw-bold text-decoration-underline " >E-mail Login</h5>
                            <button className="btn-close " onClick={()=>resetForm()} data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <img src="./form/emailLogo.jpg" alt="img" style={{width:"100%",objectFit:"cover"}} />
                            <div className="d-flex flex-column gap-2 mt-4 " >
                            <label  className="small text-start"> E-mail Id :</label>
                            <input type="email"  className="form-control small-placeholder"  value={currentEmail} onChange={(e)=>{setcurrentEmail(e.target.value)}} placeholder="xyz@gmail.com" required/>
                            
                            { emailDoesnotExist && <> <p className="text-danger small text-start">{emailDoesnotExist}</p></>}
                            <label  className="small text-start"> Password :</label>
                            <div className="input-group">
                                <input type={showPassword?"text":"password"}   className="form-control small-placeholder" value={currentPassword} onChange={(e)=>{setcurrentPassword(e.target.value)}} placeholder="*******" required/>
                                <span className="input-group-text" onClick={()=>{setShowPassword(!showPassword)}} style={{cursor:"pointer"}}><i className={`bi ${showPassword?"bi-eye":"bi-eye-slash"}`}></i> </span>
                            </div>
                            { passwordDoesnotExist && <> <p className="text-danger small text-start">{passwordDoesnotExist}</p></>}

                            
                            </div>
                            <div className=" mt-2 gap-2 small">
                            <p className="">or continue with <span className="text-decoration-underline text-success" onClick={()=>{switchModal('emailModal','loginModal')}} style={{cursor:"pointer"}}><i>Phone number</i></span>.</p>
                            <button className="btn btn-success w-100 " type="submit">Login</button>
                            </div>
                        
                        </div>
                        <div className="modal-footer small d-flex justify-content-between">
                           <p className="text-decoration-underline" onClick={()=>{resetForm()}} style={{cursor:"pointer"}}  >Reset</p>
                            <p>Don't have an account? <span className="text-danger text-decoration-underline"  onClick={()=>{switchModal('emailModal','registerModal')}} style={{cursor:"pointer"}}>Sign Up</span></p>

                        </div>

                    </form>
                 

                </div>

              </div>
            </div>
        </>
    )
}