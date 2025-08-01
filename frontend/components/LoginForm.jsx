import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function  LoginForm({setLoggedInUser}){

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

    const[currentmobile,setCurrentmobile]=useState("")
    const[mobilenumberfound,setmobilenumberfound]=useState("")
    const navigate=useNavigate()
   function handleCheckMobileNumber(e){
    e.preventDefault()
       try{
        fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/userlogin`)
       .then(res=>res.json())
       .then((res)=>{
        const userdetails=res.userlogindata
        const userFound=userdetails.find(user=>user.mobile==currentmobile)
       if(userFound) {
        setLoggedInUser(userFound)
        const hideModal = document.getElementById("loginModal");
          if (hideModal) {
            const modal = bootstrap.Modal.getInstance(hideModal) || new bootstrap.Modal(hideModal);
            modal.hide();
          }
        resetForm()
        toast.success("Successfully Login !")
        navigate("/") }
        else setmobilenumberfound("This mobile number is not registered.")
       })
       }
       catch(error){
        console.log("error",error)
       }

   }
   function resetForm(){
    setCurrentmobile("")
    setmobilenumberfound("");
   }

    return(
        <>
          <div className="modal fade" id="loginModal" >
              <div className="modal-dialog p-5 pt-0">
                <div className="modal-content ">

                  <div className="modal-header">
                    <h5 className="modal-title text-dark fw-bold text-decoration-underline " >Sign In</h5>
                    <button className="btn-close bg-danger" data-bs-dismiss="modal"></button>
                  </div>

                  <form onSubmit={handleCheckMobileNumber}>
                     <div className="modal-body">
                        <img src="./form/loginLogo.jpg" alt="img" style={{width:"100%",objectFit:"cover"}} />
                        <div className="d-flex flex-column gap-2 mt-4" >
                            <label  className="small text-start">Enter Mobile Number :</label>
                            <input type="text"  className="form-control small-placeholder" value={currentmobile} onChange={(e)=>{setCurrentmobile(e.target.value)}}  maxLength={10} pattern="[0-9]{10}"  placeholder="(+91)" required autoFocus/>
                            { mobilenumberfound && <> <p className="text-danger small text-start">{mobilenumberfound}</p></>}

                        </div>
                        <div className=" mt-2 gap-2 small">
                            <p className="">or continue with <span className="text-decoration-underline text-success" style={{cursor:"pointer"}}  data-bs-toggle="modal"  data-bs-target="#emailModal" onClick={()=>{switchModal('loginModal','emailModal')}} data-bs-dismiss="#loginModal"><i>e-mail</i></span>.</p>
                            <button className="btn btn-success w-100" type="submit">Login</button>
                        </div>
                  </div>

                  </form>
                 


                  <div className="modal-footer small d-flex justify-content-between">
                    <p className="text-decoration-underline" onClick={()=>{resetForm()}} style={{cursor:"pointer"}}  >Reset</p>
                    <p>Don't have an account? <span className="text-danger text-decoration-underline"  onClick={()=>{switchModal('loginModal','registerModal')}} style={{cursor:"pointer"}}>Sign Up</span></p>

                  </div>

                </div>

              </div>
            </div>
        </>
    )

  }
