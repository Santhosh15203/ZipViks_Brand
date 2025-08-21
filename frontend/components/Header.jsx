import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SerachBar";
import "../pages/Home.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import EmailForm from "./EmailForm";
import { toast } from "react-toastify";
import UpdateRegisterModal from "./UpdateRegisterModal";
import MobileRegisterForm from "./MobileRegisterForm";
export default function Header({cardItems,setCardItems,loggedInUser,setLoggedInUser,userMobileRegisterData,setUserMobileRegsiterData}) {
  const navigate=useNavigate()

  function logOut() {
  setLoggedInUser(null);
  setCardItems([]);
  setUserMobileRegsiterData(null);
  toast.success("Logged Out !");
  navigate("/");
}

  return (
    <>
    <div className="container fw-bold d-flex align-items-center justify-content-between ps-2 pe-2" style={{ fontFamily: "'Nunito Rounded', sans-serif"}}>
      <div className=" ">
         <ul className="list-unstyled d-flex gap-3 mb-0 ">
              <li><a href="#" className="text-decoration-none text-dark  small"><i className="bi bi-whatsapp text-success fs-6"></i> Whatsapp</a></li>
              <li><a href="#" className="text-decoration-none text-dark small "><i className="bi bi-instagram fs-6 " style={{color:"#E1306C"}}></i> Instagram</a></li>
          </ul>

      </div>
      <div>

            {loggedInUser || userMobileRegisterData ? 
            <>
             <div className="text-dark text-decoration-none lh-sm d-flex align-items-center gap-0">
              <div className="gap-3 d-flex dropdown text-decoration-none" style={{cursor:"pointer"}}>
                 <div className="small" data-bs-toggle="dropdown">
                  <img src="/logo/zipVikz-brand-logo.png" className="rounded-circle" style={{ width: "25px", height: "25px", objectFit: "cover" }} />
                  <p className="text-white mt-1">Hi, {loggedInUser.firstname || userMobileRegisterData.mobile}</p>
                </div>
                <ul className="dropdown-menu p-0 rounded mt-2 gap-3"  style={{minWidth:"130px"}} >
                  <li className="dropdown-item small text-center p-2 border-bottom" data-bs-toggle="modal" data-bs-target="#updateRegisterModal"  >Profile Update</li>
                  <li className="dropdown-item text-danger small text-center p-2 fw-bold" style={{cursor:"pointer"}} onClick={logOut}>  
                   Log Out
                  </li>
                </ul>
              </div>
               
            </div>
            </> :
            
            <>  <div className="text-dark text-decoration-none d-flex flex-column align-items-center gap-0 mt-2">
                  <div className=" text-decoration-none " style={{ cursor: "pointer" }}>
                    <ul className="d-flex gap-2 small list-unstyled" >
                      <li className="" data-bs-toggle="modal" data-bs-target="#loginModal" >Login</li>
                      <li style={{cursor:"none"}}>|</li>
                      <li className=" " data-bs-toggle="modal" data-bs-target="#registerMobile" >Register</li>
                    </ul>
                  </div>
                </div> 
                <LoginForm  setLoggedInUser={setLoggedInUser} setUserMobileRegsiterData={setUserMobileRegsiterData}/>
            <EmailForm  setLoggedInUser={setLoggedInUser}/>
            <MobileRegisterForm setUserMobileRegsiterData={setUserMobileRegsiterData}/>
            <RegisterForm setLoggedInUser={setLoggedInUser}/>
            <UpdateRegisterModal loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            
            </> }

      </div>

    </div>
   
    <div className="d-flex flex-column mt-0" style={{position:"sticky",top:0,zIndex:1000 }}>
       <nav className="navbar navbar-light  navbar-expand-lg d-flex flex-column  mb-0 p-sm-0 bg-dark " style={{ fontFamily: "'Nunito Rounded', sans-serif"}}>
        
        <div className="container d-flex justify-content-between align-items-center">

            <button className="navbar-toggler d-lg-none d-flex  p-0 bg-white align-items-center"  data-bs-toggle="offcanvas" data-bs-target="#listItems" aria-expanded="false"><span className="navbar-toggler-icon  p-0"></span></button>  
           
          <div className="text-center d-flex gap-3 small-logo pt-1 pb-1"> 
                      {/*Logo link */}
            
            <img src="/logo/zipVikz-brand-logo.png" alt="brand-logo" className="" style={{width:"60px",height:"50px",objectFit:"cover"}} />
            <Link to={"/"} className="text-decoration-none ">
              <h4 className="text-white mb-0 ">
                <strong style={{ fontFamily: "'Open Sans', Arial, Helvetica, sans-serif" }}>ZїpѵїКz</strong>
              </h4>
              <p className="text-white small mb-0 mt-0">
                <strong className="text-danger">Glow</strong> with Us
              </p>
            </Link>
          
          </div>

           <ul className=" navbar-nav n list-unstyled d-none d-lg-flex gap-5 justify-content-center align-items-center  small  p-0 my-auto" >
              <li className="nav-item "><a href="" className=" nav-link text-white">HOME</a> </li>
              <li className="nav-item"><a href="" className="nav-link text-white"> T SHIRTS</a></li>
              <li className="nav-item"><a href="" className="nav-link text-white">HOODIES</a></li>
              <li className="nav-item"><a href="" className="nav-link text-white">TRACK PANT</a> </li>
              <li className="nav-item"><a href="" className="nav-link text-white">SHORTS</a> </li>
              <li className="nav-item"><a href="" className="nav-link text-white">CHUDI</a> </li>
              <li className="nav-item"><a href="" className="nav-link text-white">SAREE</a> </li>

            </ul>


          <div className="offcanvas offcanvas-start d-lg-none" id="listItems" style={{ fontFamily: "'Nunito Rounded', sans-serif"}}>
            <div className="offcanvas-header">
              <h5 className="fw-bold text-decoration-underline ">Zipvikz Product Menu :</h5>
              <button className="btn-close " data-bs-dismiss="offcanvas" da></button>

            </div>
            <div className="offcanvas-body">
               <ul className=" navbar-nav list-unstyled d-flex  justify-content-start ">
              <li className="nav-item border border-bottom border-0"><a href="" className="small fw-bold text-dark nav-link">HOME</a> </li>
              <li className="nav-item border border-bottom border-0"><a href="" className="small fw-bold text-dark nav-link"> T SHIRTS</a></li>
              <li className="nav-item border border-bottom border-0"><a href="" className="small fw-bold text-dark nav-link">HOODIES</a></li>
              <li className="nav-item border border-bottom border-0"><a href="" className="small fw-bold text-dark nav-link">TRACK PANT</a> </li>
              <li className="nav-item border border-bottom border-0"><a href="" className="small fw-bold text-dark nav-link">SHORTS</a> </li>
              <li className="nav-item border border-bottom border-0"><a href="" className="small fw-bold text-dark nav-link">CHUDI</a> </li>
              <li className="nav-item border border-bottom border-0"><a href="" className="small fw-bold text-dark nav-link">SAREE</a> </li>

            </ul>

            </div>
           

          </div>






         

          

          

          <div className="d-flex gap-3 text-center mt-2 small-cart  align-items-center" >  {/*cart and user */}
             <div className="text-white " style={{cursor:"pointer"}} >
                <i className="bi bi-search fs-6" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
              </div>

             <Link to={"/cart"} className="text-white text-decoration-none d-flex ">
              <i className="bi bi-heart-fill fs-6" style={{ color: "white" }}>
                <sup className="text-warning fs-6 ms-1">{cardItems?cardItems.length:0}</sup>
              </i>
            </Link>
             <Link to={"/cart"} className="text-white text-decoration-none d-flex ">
              <i className="bi bi-cart-dash fs-6" style={{ color: "white" }}>
                <sup className="text-warning fs-6 ms-1">{cardItems?cardItems.length:0}</sup>
              </i>
            </Link>

            
             
            
          </div>
          
        </div>
      </nav>

      
      
    </div>
    <SearchBar/>   {/*search bar */}




     <div className="display-container "style={{ fontFamily: "'Nunito Rounded', sans-serif"}} >
        <ul className="d-flex gap-4  text-dark list-unstyled display pb-0 pt-1 fw-bold bg-warning ">
          <li className="ms-5 text-nowrap ">🚚Free Shipping on All Products!</li>
          <li className="text-nowrap">🛒 Unstoppable Deals. Unbeatable Prices.</li>
          <li  className="text-nowrap">💥 Start Shopping Now — Before It’s Gone!</li>
          <li className="text-nowrap">🔥 Trending Products Selling Out Fast!</li>
          <li className="text-nowrap">🧾 No Hidden Charges – What You See Is What You Pay!</li>
        </ul>
      </div>
     
    </>
  );
}