import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBar(){
    const [userinput,setUserinput]=useState("")
    const navigate=useNavigate()
    

    const handleSearchBar = () => {
    if (userinput.trim()) {
      navigate("/search?keyword=" + userinput);
    }
    if (userinput.trim()==="") navigate("/")
   
  };

    return(
        <>
          <div className="input-group" style={{ width: "650px" }}>
                <input
                type="text"
                id="input-search"
                className="form-control border border-secondary p-1 ps-3 search"
                placeholder="Search for Products, Brands and More"
                onChange={e => setUserinput(e.target.value)}
                onKeyDown={e => {
                    if (e.key === "Enter") handleSearchBar();  // when Enter is pressed
                  }}
                />
        <div className="input-group-append">
          <button onClick={handleSearchBar} type="button" className="btn bg-danger text-white" >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
        </>
    )
}