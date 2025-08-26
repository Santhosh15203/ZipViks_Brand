import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SerachBar";
import "../pages/Home.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import EmailForm from "./EmailForm";
import { toast } from "react-toastify";
import UpdateRegisterModal from "./UpdateRegisterModal";
import MobileRegisterForm from "./MobileRegisterForm";
import { useState } from "react";
export default function Header({cardItems,setCardItems,loggedInUser,setLoggedInUser,userMobileRegisterData,setUserMobileRegsiterData}) {
  const navigate=useNavigate()
   const [userinput2,setUserinput2]=useState("")

   const handleSearchBarlg = () => {
      
    if (userinput2.trim()) {
      navigate("/search?keyword=" + userinput2); resetForm()
     
    }
    if (userinput2.trim()==="") navigate("/")

      const modal=bootstrap.Modal.getInstance(document.getElementById("searchModal"))
      modal.hide()
      resetForm()
  };

  function  resetForm(){
      setUserinput2("")
      }

  function logOut() {
  setLoggedInUser(null);
  setCardItems([]);
  setUserMobileRegsiterData(null);
  toast.success("Logged Out !");
  navigate("/");
}

  return (
    <>


     <div className="display-container bg-warning"style={{ fontFamily: "'Nunito Rounded', sans-serif"}} >
        <ul className="d-flex gap-4 text-dark list-unstyled display m-0 p-0 fw-bold bg-warning ">
          <li className="ms-5 text-nowrap ">🚚Free Shipping on All Products!</li>
          <li className="text-nowrap">🛒 Unstoppable Deals. Unbeatable Prices.</li>
          <li  className="text-nowrap">💥 Start Shopping Now — Before It’s Gone!</li>
          <li className="text-nowrap">🔥 Trending Products Selling Out Fast!</li>
          <li className="text-nowrap">🧾 No Hidden Charges – What You See Is What You Pay!</li>
        </ul>
      </div>


    <div className="container-fluid  bg-dark ">
      <div className="container d-flex align-items-center justify-content-between ps-2 pe-2 " style={{ fontFamily: "'Nunito Rounded', sans-serif"}}>
            <div className="d-flex  p-1">
                <ul className="list-unstyled align-items-center d-flex gap-1 gap-lg-3 mb-0   ">
              
                      <li><Link to="#" className="text-decoration-none text-white move small"><i className="bi bi-whatsapp  fs-6"></i> Whatsapp</Link></li>
                      <li><Link to="#" className="text-decoration-none text-white move small "><i className="bi bi-instagram fs-6 "></i> Instagram</Link></li>
                  </ul>

              </div>
              <div>

                    {loggedInUser || userMobileRegisterData ? 
                    <>
                    <div className="text-white text-decoration-none d-flex align-items-center gap-0 p-1 mb-0">
                      <div className="gap-3 d-flex dropdown text-decoration-none" style={{cursor:"pointer",fontFamily: "'Nunito Rounded', sans-serif"}}>
                        <div className="small dropdown-toggle " data-bs-toggle="dropdown">
                          <img src="/logo/zipVikz-brand-logo.png" className="rounded-circle" style={{ width: "20px", height: "20px", objectFit: "cover" }} />
                          <span className="text-white ms-1">Hi, {loggedInUser.firstname || userMobileRegisterData.mobile}</span>
                        </div>
                        <ul className="dropdown-menu p-0 bg-dark  mt-1 "  style={{zIndex:1100}} >
                          {loggedInUser && (<li className="dropdown-item small bg-dark text-white text-center border-bottom" data-bs-toggle="modal" data-bs-target="#updateRegisterModal"  >Profile Update</li>)}
                          
                          <li className="dropdown-item small bg-danger text-white text-center " style={{cursor:"pointer"}} onClick={logOut}>  
                          Log Out
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                    </> :
                    
                    <>  <div className="text-white small p-1" style={{ cursor: "pointer" }}>
                          
                            <ul className="list-unstyled d-flex align-items-center gap-2 mb-0" >
                              <li className="" data-bs-toggle="modal" data-bs-target="#loginModal" >Login</li>
                              <li style={{cursor:"none"}}>|</li>
                              <li className=" " data-bs-toggle="modal" data-bs-target="#registerMobile" >Register</li>
                            </ul>
                        
                        </div> 
                        <LoginForm  setLoggedInUser={setLoggedInUser} setUserMobileRegsiterData={setUserMobileRegsiterData}/>
                    <EmailForm  setLoggedInUser={setLoggedInUser}/>
                    
                    <RegisterForm setLoggedInUser={setLoggedInUser}/>
                    
                    
                    </> }
                    <MobileRegisterForm setUserMobileRegsiterData={setUserMobileRegsiterData}/>
                    <UpdateRegisterModal loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>

              </div>

      </div>
     

    </div>
   
    <div className="d-flex flex-column  mt-0 border" style={{position:"sticky",top:0,left:0,zIndex:1000 }}>
       <nav className="navbar navbar-light  navbar-expand-lg d-flex flex-column  mb-0 p-sm-0 bg-white " style={{ fontFamily: "'Nunito Rounded', sans-serif"}}>
        
        <div className="container d-flex justify-content-between align-items-center">
<button className="navbar-toggler d-lg-none d-flex  p-0  align-items-center"  data-bs-toggle="offcanvas" data-bs-target="#listItems" aria-expanded="false"><span className="navbar-toggler-icon  p-0"></span></button>  
          <div className="text-center d-flex gap-3 small-logo pt-1 pb-1"> 
            
               {/*Logo link */}
            
            <img src="/logo/zipVikz-brand-black-logo.png" alt="brand-logo" className="" style={{width:"60px",height:"55px",objectFit:"cover"}} />
            <Link to={"/"} className="text-decoration-none ">
              <h4 className="text-dark mb-0 ">
                <strong style={{ fontFamily: "'Open Sans', Arial, Helvetica, sans-serif" }}>ZїpѵїКz</strong>
              </h4>
              <p className="text-dark  small mb-0 mt-0">
                <strong className="text-danger ">Decide it!</strong> Own it!              </p>
            </Link>
          
          </div>

          <div className="offcanvas offcanvas-start d-lg-none" id="listItems" style={{ fontFamily: "'Nunito Rounded', sans-serif"}} >
            <div className="offcanvas-header">
              <h5 className="fw-bold text-decoration-underline ">Zipvikz Product Menu :-</h5>
              <button className="btn-close " data-bs-dismiss="offcanvas" ></button>

            </div>
            <div className="offcanvas-body">
               <ul className=" navbar-nav list-unstyled d-flex  justify-content-start ">
              <li className="nav-item border border-bottom border-0"><Link to="/" className="small fw-bold text-dark nav-link">🏠 HOME</Link> </li>
              <li className="nav-item border border-bottom border-0"><Link to="" className="small fw-bold text-dark nav-link">👕 T SHIRTS</Link></li>
              <li className="nav-item border border-bottom border-0"><Link to="/hoodie" className="small fw-bold text-dark nav-link">🧥 HOODIES</Link></li>
              <li className="nav-item border border-bottom border-0"><Link to="" className="small fw-bold text-dark nav-link">👖 TRACK PANT</Link> </li>
              <li className="nav-item border border-bottom border-0"><Link to="" className="small fw-bold text-dark nav-link">🩳 SHORTS</Link> </li>
              <li className="nav-item border border-bottom border-0"><Link to="" className="small fw-bold text-dark nav-link">👗 CHUDI</Link> </li>
              <li className="nav-item border border-bottom border-0"><Link to="" className="small fw-bold text-dark nav-link">🦵 LEGGINS</Link> </li>
              <li className="nav-item border border-bottom border-0"><Link to="" className="small fw-bold text-dark nav-link">🥻 SAREE</Link> </li>
              <li className="nav-item border border-bottom border-0"><Link to="" className="small fw-bold text-dark nav-link">👘 NIGHT WEAR</Link> </li>

            </ul>

            </div>
           

          </div>
          
           <div className="input-group d-none d-lg-flex bg-warning w-50">
                   <input
                        type="text"
                        value={userinput2}
                        className="form-control border border-secondary p-1 ps-3 search input-group"
                        placeholder="Search for Products, Brands and More"
                        onChange={(e) => setUserinput2(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSearchBarlg();
                        }}
                      />
                      
                        <button
                          onClick={handleSearchBarlg}
                          type="button"
                          className="btn bg-dark text-white"
                        >
                          <i className="bi bi-search"></i>
                        </button>

                </div>


          <div className="d-flex gap-3 text-center  align-items-center" >  {/*cart and user */}
             <div className="text-dark d-flex d-lg-none" style={{cursor:"pointer"}} >
                <i className="bi  bi-search fs-6 dark" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
              </div>

             <Link to={"/cart"} className="text-white text-decoration-none d-lg-flex d-none ">
              <i className="bi bi-heart-fill  fs-6" style={{ color: "#000000",fontWeight: "bold" }}>
                <sup className="text-danger fs-6 ms-1 ">{cardItems?cardItems.length:0}</sup>
              </i>
            </Link>
             <Link to={"/cart"} className="text-white text-decoration-none d-flex ">
              <i className="bi bi-cart-plus-fill fs-6" style={{ color: "black",fontWeight: "bold" }}>
                <sup className="text-danger fs-6 ms-1">{cardItems?cardItems.length:0}</sup>
              </i>
            </Link>

            
             
            
          </div>
          
        </div>
      </nav>

      
      
    </div>
    <SearchBar/>   {/*search bar */}

     <nav className="navbar navbar-light  navbar-expand-lg bg-white d-none d-lg-flex flex-column  mb-0 p-sm-0 " style={{ fontFamily: "'Nunito Rounded', sans-serif",position:"sticky",top:65,zIndex:1000 }}>
              
              <div className="container  justify-content-center align-items-center p-2">
              <ul className=" navbar-nav  list-unstyled   gap-5 justify-content-center align-items-center  small  my-auto" ><nav className="navbar navbar-light  navbar-expand-lg bg-white d-none d-lg-flex flex-column  mb-0 p-sm-0 " style={{ fontFamily: "'Nunito Rounded', sans-serif",position:"sticky",top:65,zIndex:1000 }}>
              
              <div className="container  justify-content-center align-items-center p-2">
              <ul className=" navbar-nav  list-unstyled   gap-5 justify-content-center align-items-center  small  my-auto" >
                      <li className="nav-item "><Link to="/" className=" nav-link fw-bold text-dark">🏠 HOME</Link> </li>
                      <li className="nav-item"><Link to="/" className="nav-link fw-bold text-dark">👕 T SHIRTS</Link></li>
                      <li className="nav-item"><Link to="/hoodie" className="nav-link fw-bold text-dark">🧥 HOODIES</Link></li>
                      <li className="nav-item"><Link to="" className="nav-link fw-bold text-dark">👖 TRACK PANT</Link> </li>
                      <li className="nav-item"><Link to="" className="nav-link fw-bold text-dark">🩳 SHORTS</Link> </li>
                      <li className="nav-item"><Link to="" className="nav-link fw-bold text-dark">👗 CHUDI</Link> </li>
                      <li className="nav-item"><Link to="" className="nav-link fw-bold text-dark">🦵 LEGGINS</Link> </li>
                      <li className="nav-item"><Link to="" className="nav-link fw-bold text-dark">🥻 SAREE</Link> </li>
                      <li className="nav-item"><Link to="" className="nav-link fw-bold text-dark">👘 NIGHT WEAR</Link> </li>

            </ul>
        </div>
     </nav>

            </ul>
        </div>
     </nav>

    

   




    
     
    </>
  );
}