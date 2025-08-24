import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className=""  style={{ position: "static", bottom: 0, left: 0,right:0, width: "100%"}}>

          

            <div className="d-flex flex-column flex-lg-row bg-dark text-white justify-content-around p-1 p-lg-3 pb-0" style={{fontFamily: "'Open Sans', Arial, Helvetica, sans-serif",fontSize:"14px"}} >

              <div className=" text-center pt-1 ">
                 <p className="text-center mb-0"> <strong >  <img src="/logo/zipVikz-brand-logo.png" alt="logo" className="" style={{width:"35px",height:"35px"}} />
                  <span className="fs-5">ZїpѵїКz</span></strong></p>
                
                <p className="mb-1"><span className="text-danger fw-bold">Shop</span> the latest fashion at prices that suit every pocket.<br/>
                <span className="text-danger fw-bold">From</span>  trendy styles for men, women, and kids, everything you need is just a click away.<br/>
                 <span className="text-danger fw-bold">Enjoy</span>  fast delivery, secure payments, and hassle-free returns for a seamless experience.<br/>
                  <span className="text-danger fw-bold">Explore</span>  endless choices that match every mood, occasion, and style.<br/>
                   <span className="text-danger fw-bold">Online</span>  shopping has never b'n this easy, stylish & fun.</p>
              </div>

               <div className="" >
                  <p className="text-decoration-underline justify-content-center d-flex  text-white mb-0">PRODUCTS</p>
                   <ul className="list-unstyled gap-1 justify-content-center d-flex flex-wrap flex-lg-column mb-1">
                    <li className=""><a href="#" className="text-decoration-none  text-white">TShirts</a></li>
                    <li className="mb-0"><a href="#" className="text-decoration-none  text-white ">Hoodies</a></li>
                    <li className="mb-0"><a href="#" className="text-decoration-none  text-white ">TrackPant</a></li>
                    <li className="mb-0"><a href="#" className="text-decoration-none  text-white ">Shorts</a></li>
                    <li className="mb-0"><a href="#" className="text-decoration-none   text-white ">Chudi</a></li>
                    <li className="mb-0"><a href="#" className="text-decoration-none  text-white">Leggins</a></li>
                    <li className="mb-0"><a href="#" className="text-decoration-none   text-white ">Saree</a></li>
                  </ul>
                  
              </div>

               <div className="" >
                  <p className="text-decoration-underline justify-content-center  d-flex  text-white mb-0">CUSTOMER POLICY</p>
                   <ul className="list-unstyled gap-1 justify-content-center  d-flex flex-wrap flex-lg-column mb-0 mb-lg-1 ">
                    <li><a href="#" className="text-decoration-none  text-white ">Privacy Policy</a></li>
                    <li><a href="#" className="text-decoration-none text-white d-none d-lg-inline">Terms and Condition </a><a href="" className="text-decoration-none text-white d-inline d-lg-none">T&C</a></li>
                    <li><a href="#" className="text-decoration-none  text-white ">Return & Refund</a></li>
                    <li><a href="#" className="text-decoration-none text-white ">Shipping Policy</a></li>
                  </ul>
              </div>

               <div className="" >
                  <p className="text-decoration-underline justify-content-center  d-flex  text-white mb-0">SOCIAL</p>
                   <ul className="list-unstyled  d-flex justify-content-center flex-lg-column mb-1 ">
                    <li><a href="#" className="text-decoration-none  text-white p-2"><i class="bi bi-whatsapp"></i></a></li>
                    <li><a href="#" className="text-decoration-none text-white p-2"><i class="bi bi-instagram"></i></a></li>
                    <li><a href="#" className="text-decoration-none  text-white p-2"><i class="bi bi-youtube"></i></a></li>
                    <li><a href="#" className="text-decoration-none text-white p-2"><i class="bi bi-facebook"></i></a></li>
                  </ul>
              </div>

               <div className=" " >
                  <p className="text-decoration-underline justify-content-center  d-flex m-0 p-0  text-white mb-0">CONTACT US</p>

                   <div className="list-unstyled flex-wrap d-flex  flex-lg-column gap-1 gap-lg-0 ">
                    <div className=" ">
                      <p className="m-1 p-0" ><a href="#" className="text-decoration-none  text-white"><i class="bi bi-envelope-at"></i> buyzipvikz@gmail.com</a></p>
                      <p className="m-1 p-0"><i class="bi bi-telephone-outbound"></i> +91 99999 99991</p>

                    </div>
                    <div className="">
                      <p className="m-1 p-0" ><i class="bi bi-geo-alt"></i> 8/1234 A, PN Road,<br/>Tirupur - 641 602.</p>
                      <p className="m-1 p-0"><a href="" className="text-decoration-none text-white"><i class="bi bi-chat-left-text"></i>  Send Feedback</a></p>

                    </div>
                    
                  </div>
              </div>

            </div>




            
            <div className=" d-flex justify-content-around p-2 pb-2 mt-1 text-white bg-dark "  style={{ fontFamily:" Open Sans', Arial, Helvetica, sans-serif",fontSize:"14px" }}>

              <div className="d-none d-lg-flex ">
                <img src="/logo/zipVikz-brand-logo.png" alt="brand-logo" style={{width:"25px",height:"25px"}} className="bg-dark"/>
                <p className=" m-0 p-0">Zipvikz</p>

              </div>
              <div className="text-center">
                <p className="m-0 p-0">&copy; 2026 ZipViks. All Rights Reserved. Developed by <Link to={"https://santhosh15203.github.io/Portfolio/"} className="text-danger "><strong>Santhosh Moorthi</strong> </Link></p>

              </div>

              <div  className="d-none d-lg-flex "> 
                <ul className="d-flex list-unstyled m-0 p-0 gap-0 gap-lg-3">
                  <li><a href="#" className="text-decoration-none   text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-decoration-none  text-white">Terms of Use</a></li>
                </ul>
 
                      
              </div>

            </div>


      </div>

    </>
  );

}
