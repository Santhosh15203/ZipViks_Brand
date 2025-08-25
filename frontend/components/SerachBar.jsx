import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SearchBar.css";


export default function SearchBar(){
    const [userinput,setUserinput]=useState("")
    const navigate=useNavigate()


    const handleSearchBar = () => {
      
    if (userinput.trim()) {
      navigate("/search?keyword=" + userinput);
     
    }
    if (userinput.trim()==="") navigate("/")

      const modal=bootstrap.Modal.getInstance(document.getElementById("searchModal"))
      modal.hide()
      resetForm()
       
   
  };
    function  resetForm(){
      setUserinput("")
      }

    return(
        <>
          <div className=" modal fade mt-1 input-group search-bar-container small-search" id="searchModal">
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header " data-bs-dismiss="modal">
                  <h5 className="fmodal-title text-dark fw-bold text-decoration-underline">Explore Products</h5>
                  <button className="btn btn-close "></button>

                </div>


                <div className="modal-body input-group d-flex  ">
                    <input
                        type="text"
                        value={userinput}
                        className="form-control border border-secondary p-1 ps-3 search input-group"
                        placeholder="Search for Products, Brands and More"
                        onChange={(e) => setUserinput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSearchBar();
                        }}
                      />
                      
                        <button
                          onClick={handleSearchBar}
                          type="button"
                          className="btn bg-success text-white"
                        >
                          <i className="bi bi-search"></i>
                        </button>

                </div>

              </div>

            </div>
            
</div>

        </>
    )
}