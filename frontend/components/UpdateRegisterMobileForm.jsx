import { useEffect, useState } from "react"

export default function UpdateRegisterMobileForm({mobileMobile,userMobileRegisterFormData}){
    const [user,setUser]=useState(null)

    
     const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("Tamil Nadu");
    const [zipcode, setZipcode] = useState("");
  
  useEffect(() => {
    if (userMobileRegisterFormData) {
      setName(userMobileRegisterFormData.firstname || "");
      setMobile(userMobileRegisterFormData.mobile || "");
      setAddress(userMobileRegisterFormData.address || "");
      setCity(userMobileRegisterFormData.city || "");
      setState(userMobileRegisterFormData.state || "");
      setZipcode(userMobileRegisterFormData.zipcode || "");
    }
  }, [userMobileRegisterFormData]);

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

                    <form >

                    <div className="modal-body">
                        <div>
                    <div className="d-flex justify-content-between mt-3 mb-2 gap-4 text-start">
                      <div className="w-50">
                        <label className="fw-bold small"> Name :</label>
                        <input type="text" className="form-control" value={name} />
                      </div>
                      <div className="w-50">
                        <label className="fw-bold small"> Mobile :</label>
                        <input type="tel" className="form-control" value={mobile} />
                      </div>
                    </div>
                    <div className="text-start">
                      <label className="fw-bold small">Address : </label>
                      <input className="form-control p-4"  value={address} />
                    </div>
                    <div className="d-flex mt-2 mb-2 justify-content-between gap-3">
                      <div>
                        <label className="fw-bold small">City : </label>
                        <input type="text" className="form-control"  value={city} />
                      </div>
                      <div>
                        <label className=" fw-bold small">State : </label>
                        <input type="text" className="form-control"  value={state}/>
                      </div>
                      <div>
                        <label className="fw-bold small">ZipCode : </label>
                        <input type="text" className="form-control"  value={zipcode} />
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