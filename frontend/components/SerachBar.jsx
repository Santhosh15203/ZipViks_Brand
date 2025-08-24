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
          <div className=" modal fade mt-5 input-group search-bar-container small-search" id="searchModal">
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header " data-bs-dismiss="modal">
                  <h5 className="fmodal-title text-dark fw-bold text-decoration-underline">Explore Products</h5>
                  <button className="btn btn-close "></button>

                </div>


                <div className="modal-body d-flex  ">
                   <input
                        type="text"
                        id="input-search"
                        value={userinput}
                        className="form-control border border-secondary p-1 ps-3 search"
                        placeholder="Search for Products, Brands and More"
                        onChange={(e) => setUserinput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSearchBar();
                        }}
                      />
                      <span className="input-group-append">
                        <button
                          onClick={handleSearchBar}
                          type="button"
                          className="btn bg-success text-white"
                        >
                          <i className="bi bi-search"></i>
                        </button>
                      </span>

                </div>

              </div>

            </div>
            
</div>

        </>
    )
}