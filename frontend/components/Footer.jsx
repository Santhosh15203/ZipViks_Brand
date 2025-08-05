import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div style={{position:"static",bottom:0,left:0,width:"100%"}}>

            <div className="d-flex justify-content-around  small p-4 bg-dark " style={{ fontFamily: "'Nunito Rounded', sans-serif" }}>
          
            <div >
              <h5 className="text-decoration-none small text-secondary mb-3">ABOUT</h5>
              <ul className="list-unstyled small ">
                <li><a href="#" className="text-decoration-none  text-white">Contact Us</a></li>
                <li><a href="#" className="text-decoration-none text-white">About Us</a></li>
                <li><a href="#" className="text-decoration-none  text-white">Careers</a></li>
                <li><a href="#" className="text-decoration-none text-white">ZipViks Stories</a></li>
                <li><a href="#" className="text-decoration-none  text-white">Press</a></li>
                <li><a href="#" className="text-decoration-none text-white">Corporate Information</a></li>
              </ul>
            </div>
            <div >
              <h5 className="text-decoration-none small text-secondary mb-3">PRODUCTS</h5>
              <ul className="list-unstyled small ">
                <li><a href="#" className="text-decoration-none  text-white">Men's T-Shirt</a></li>
                <li><a href="#" className="text-decoration-none text-white">Men's Trouser</a></li>
                <li><a href="#" className="text-decoration-none  text-white">Men's Cotton Pant</a></li>
                <li><a href="#" className="text-decoration-none text-white">Men's Lycra</a></li>
                <li><a href="#" className="text-decoration-none  text-white">Women's Night Wear</a></li>
                <li><a href="#" className="text-decoration-none text-white">Kid's Anime Dress</a></li>
              </ul>
            </div>
            <div >
              <h5 className="text-decoration-none small text-secondary mb-3">HELP</h5>
              <ul className="list-unstyled small ">
                <li><a href="#" className="text-decoration-none  text-white">Payments</a></li>
                <li><a href="#" className="text-decoration-none text-white">Shopping</a></li>
                <li><a href="#" className="text-decoration-none  text-white">Cancellation & Returns</a></li>
                <li><a href="#" className="text-decoration-none text-white">FAQ</a></li>
              </ul>
            </div>
            <div >
              <h5 className="text-decoration-none small text-secondary mb-3">CONSUMER POLICY</h5>
              <ul className="list-unstyled small ">
                <li><a href="#" className="text-decoration-none  text-white">Cancellation & Returns</a></li>
                <li><a href="#" className="text-decoration-none text-white">Terms Of Use</a></li>
                <li><a href="#" className="text-decoration-none  text-white">Security</a></li>
                <li><a href="#" className="text-decoration-none text-white">Privacy</a></li>
                <li><a href="#" className="text-decoration-none text-white">Sitemap</a></li>
              </ul>
            </div>
            <div >
              <h5 className="text-decoration-none small text-secondary mb-3">SOCIAL</h5>
              <ul className="list-unstyled small d-flex gap-2">
                <li><a href="#" className="text-decoration-none  text-white"><i className="bi bi-facebook"></i></a></li>
                <li><a href="#" className="text-decoration-none  text-white"><i className="bi bi-instagram"></i></a></li>
                <li><a href="#" className="text-decoration-none  text-white"><i className="bi bi-whatsapp"></i></a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-decoration-none small text-secondary mb-3">MAIL US</h5>
               <ul className="list-unstyled small gap-2">
                <li className="text-white">Email : <a href="mailto:zipvikshoppy@gmail.com" className="text-decoration-none  text-white">zipvikshoppy@gmail.com</a></li>
                <li className="text-white">Phone : 987654310</li>

              </ul>
            </div>
            </div>

            <div className="bg-dark mt-1 text-white small " style={{ fontFamily: "'Nunito Rounded', sans-serif" }}>
              
                <ul className="list-unstyled text-center small align-items-center d-flex justify-content-around ">
                  <li>
                    <div > <a href="#" className="text-decoration-none gap-2 d-flex mt-2 text-white">
                         <img src="/logo/white-logo.png" alt="brand-logo" style={{width:"25px",height:"25px"}} />
                        <p className="small mt-2">Seller Hub</p> </a>
                    </div> </li>
                  <li>&copy; 2026 ZipViks. All Rights Reserved. Developed by <span ><Link to={"https://santhosh15203.github.io/Portfolio/"} className="text-danger "><strong>Santhosh Moorthi</strong> </Link></span></li>

                  <li>
                    <div  className="d-flex gap-2 "> 
                      <a href="#" className="text-decoration-none  text-white"> Privacy Policy</a>
                      <a href="#" className="text-decoration-none text-white">Terms of Use</a>
                    </div>
                  </li>
                </ul>
              
            </div>

      </div>


      
    </>
  );

}
