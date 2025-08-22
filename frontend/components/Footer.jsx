import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className=""  style={{ position: "static", bottom: 0, left: 0,right:0, width: "100%"}}>

          

            <div className="d-flex flex-column flex-lg-row bg-dark text-white justify-content-around p-3 pb-0" style={{fontFamily: "'Open Sans', Arial, Helvetica, sans-serif"}} >

              <div className="small text-center ">
                 <p className="text-center mb-0"> <strong >  <img src="/logo/zipVikz-brand-logo.png" alt="logo" className="" style={{width:"35px",height:"35px"}} />
                  <span className="fs-5">ZїpѵїКz</span></strong></p>
                
                <p><span className="text-danger fw-bold">Shop</span> the latest fashion at prices that suit every pocket.<br/>
                <span className="text-danger fw-bold">From</span>  trendy styles for men, women, and kids, everything you need is just a click away.<br/>
                 <span className="text-danger fw-bold">Enjoy</span>  fast delivery, secure payments, and hassle-free returns for a seamless experience.<br/>
                  <span className="text-danger fw-bold">Explore</span>  endless choices that match every mood, occasion, and style.<br/>
                   <span className="text-danger fw-bold">Online</span>  shopping has never been this easy, stylish, and fun.</p>
              </div>

               <div className="" >
                  <h4 className="text-decoration-underline small d-flex justify-content-center text-white ">PRODUCTS</h4>
                   <ul className="list-unstyled small d-flex justify-content-center flex-lg-column  ">
                    <li><a href="#" className="text-decoration-none  text-white p-1">TShirts</a></li>
                    <li><a href="#" className="text-decoration-none text-white p-1">Hoodies</a></li>
                    <li><a href="#" className="text-decoration-none  text-white p-1">TrackPant</a></li>
                    <li><a href="#" className="text-decoration-none text-white p-1">Shorts</a></li>
                    <li><a href="#" className="text-decoration-none  text-white p-1">Chudi</a></li>
                    <li><a href="#" className="text-decoration-none text-white p-1">Leggins</a></li>
                    <li><a href="#" className="text-decoration-none text-white p-1">Saree</a></li>
                    <li><a href="#" className="text-decoration-none text-white p-1">NightWear</a></li>
                  </ul>
                  
              </div>

               <div className="" >
                  <h5 className="text-decoration-underline small d-flex justify-content-center text-white ">CUSTOMER POLICY</h5>
                   <ul className="list-unstyled small d-flex justify-content-center flex-lg-column  ">
                    <li><a href="#" className="text-decoration-none  text-white p-1">Privacy Policy</a></li>
                    <li><a href="#" className="text-decoration-none text-white p-1">Terms and Condition</a></li>
                    <li><a href="#" className="text-decoration-none  text-white p-1">Return & Refund</a></li>
                    <li><a href="#" className="text-decoration-none text-white p-1">Shipping Policy</a></li>
                  </ul>
              </div>

               <div className="" >
                  <h5 className="text-decoration-underline small d-flex justify-content-center text-white ">SOCIAL</h5>
                   <ul className="list-unstyled small d-flex justify-content-center flex-lg-column  ">
                    <li><a href="#" className="text-decoration-none  text-white p-2"><i class="bi bi-whatsapp"></i></a></li>
                    <li><a href="#" className="text-decoration-none text-white p-2"><i class="bi bi-instagram"></i></a></li>
                    <li><a href="#" className="text-decoration-none  text-white p-2"><i class="bi bi-youtube"></i></a></li>
                    <li><a href="#" className="text-decoration-none text-white p-2"><i class="bi bi-facebook"></i></a></li>
                  </ul>
              </div>

               <div className="" >
                  <h5 className="text-decoration-underline small d-flex justify-content-center text-white ">CONTACT US</h5>

                   <div className="list-unstyled small d-flex justify-content-around flex-lg-column  ">
                    <div className="">
                      <p className="mb-1 " ><a href="#" className="text-decoration-none  text-white"><i class="bi bi-envelope-at"></i>  zipvikzshoppy@gmail.com</a></p>
                      <p className="mb-1"><i class="bi bi-telephone-outbound"></i> +91 99999 99991</p>

                    </div>
                    <div>
                      <p className="mb-1" ><i class="bi bi-geo-alt"></i> N0.32 Pandiyan Nagar,<br/> Kovil Street,Tirupur-641 602.</p>
                      <p><a href="" className="text-decoration-none text-white"><i class="bi bi-chat-left-text"></i>  Send Feedback</a></p>

                    </div>
                    
                  </div>
              </div>

            </div>

            <div className="bg-dark mt-1 text-white small " style={{ fontFamily: "'Nunito Rounded', sans-serif" }}>
              
                <ul className="list-unstyled text-center small align-items-center d-flex justify-content-around ">
                  <li>
                    <div > <a href="/" className="text-decoration-none gap-2 d-flex mt-2 text-white">
                         <img src="/logo/zipVikz-brand-logo.png" alt="brand-logo" style={{width:"25px",height:"25px"}} />
                        <p className="small mt-2">Seller Hub</p> </a>
                    </div> </li>
                  <li>&copy; 2026 ZipViks. All Rights Reserved. Developed by <span ><Link to={"https://santhosh15203.github.io/Portfolio/"} className="text-danger "><strong>Santhosh Moorthi</strong> </Link></span></li>

                  <li>
                    <div  className="d-flex gap-3 d-none d-lg-flex"> 
                      <a href="#" className="text-decoration-none  text-white">Privacy Policy</a>
                      <a href="#" className="text-decoration-none text-white">Terms of Use</a>
                    </div>
                  </li>
                </ul>
            </div>


      </div>

    </>
  );

}
