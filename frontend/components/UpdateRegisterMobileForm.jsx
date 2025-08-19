import { useEffect, useState } from "react"

export default function UpdateRegisterMobileForm({mobileMobile}){
    const [user,setUser]=useState(null)

    useEffect(()=>{
      if(mobileMobile.length==10){
         fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/getMobileRegisterFormDataUser/${mobileMobile}`)
        .then(res=>res.json())
        .then((data)=>{
        setUser(data)
        console.log("data",data)
        }) 
        .catch(err => console.error("Fetch error:", err))
      }

    },[mobileMobile])

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
                        <input type="text" className="form-control"  />
                      </div>
                      <div className="w-50">
                        <label className="fw-bold small"> Mobile :</label>
                        <input type="tel" className="form-control" />
                      </div>
                    </div>
                    <div className="text-start">
                      <label className="fw-bold small">Address : </label>
                      <input className="form-control p-4"  />
                    </div>
                    <div className="d-flex mt-2 mb-2 justify-content-between gap-3">
                      <div>
                        <label className="fw-bold small">City : </label>
                        <input type="text" className="form-control"  />
                      </div>
                      <div>
                        <label className=" fw-bold small">State : </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div>
                        <label className="fw-bold small">ZipCode : </label>
                        <input type="text" className="form-control"  />
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