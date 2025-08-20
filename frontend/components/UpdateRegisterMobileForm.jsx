import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function UpdateRegisterMobileForm({mobileMobile,userMobileRegisterFormData,setUserMobileRegsiterFormData}){
 

     const [fullname, setFullname] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
  
  useEffect(() => {
    if (userMobileRegisterFormData) {
      setFullname(userMobileRegisterFormData.fullname || "");
      setMobile(userMobileRegisterFormData.mobile || "");
      setAddress(userMobileRegisterFormData.address || "");
      setCity(userMobileRegisterFormData.city || "");
      setState(userMobileRegisterFormData.state || "");
      setZipcode(userMobileRegisterFormData.zipcode || "");
    }
  }, [userMobileRegisterFormData]);
  console.log("id",userMobileRegisterFormData)


async  function handleRegisterMobileUpdateForm(e){
    e.preventDefault()
    try{
      const res=await fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/mobileform/${userMobileRegisterFormData._id}`,{
      method:"PUT",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({fullname,mobile,address,city,state,zipcode})
    })
    const userFound=await res.json()
    if(res.ok){
        const updated = userFound;
      setUserMobileRegsiterFormData(updated);

        toast.success("Updated Successfull !")
        const modal = bootstrap.Modal.getInstance(document.getElementById("updateMobileRegisterForm"));
        modal?.hide();
    }
    else{
      toast.error("Updated error!")
    }

   
    


    }
    catch(error){
      console.log("update register form data error",error.message)
    }
   

  }

    return(
        <>
           <div className="modal fade" id="updateMobileRegisterForm">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark fw-bold text-decoration-underline " >Profile Update</h5>
                        <button className="btn-close bg-danger" data-bs-dismiss="modal" ></button>
                    </div>

                    {/* Register Mobile form */}

                    <form onSubmit={handleRegisterMobileUpdateForm}>

                    <div className="modal-body">
                        <div>
                    <div className="d-flex justify-content-between mt-3 mb-2 gap-4 text-start">
                      <div className="w-50">
                        <label className="fw-bold small"> Name :</label>
                        <input type="text" className="form-control" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                      </div>
                      <div className="w-50">
                        <label className="fw-bold small"> Mobile :</label>
                        <input type="tel" className="form-control" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                      </div>
                    </div>
                    <div className="text-start">
                      <label className="fw-bold small">Address : </label>
                      <input className="form-control p-4"  value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div className="d-flex mt-2 mb-2 justify-content-between gap-3">
                      <div>
                        <label className="fw-bold small">City : </label>
                        <input type="text" className="form-control"  value={city} onChange={(e)=>setCity(e.target.value)} />
                      </div>
                      <div>
                        <label className=" fw-bold small">State : </label>
                        <input type="text" className="form-control"  value={state} onChange={(e)=>setState(e.target.value)}/>
                      </div>
                      <div>
                        <label className="fw-bold small">ZipCode : </label>
                        <input type="text" className="form-control"  value={zipcode} onChange={(e)=>setZipcode(e.target.value)}/>
                      </div>
                      
                    </div>
                    <div className="text-end mt-3">
                        <button type="submit" className="btn btn-success">Update Me</button>
                    </div>
                  </div>

                    </div>

                    </form>

                </div>

            </div>
            
           </div>
        </>

    )
}