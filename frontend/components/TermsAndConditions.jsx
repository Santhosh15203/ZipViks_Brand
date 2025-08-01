export default function TermsAndConditions(){
    return(
        <>
         <div className="d-flex justify-content-around flex-wrap p-4" style={{ backgroundColor: 'aliceblue',fontFamily: "'Nunito Rounded', sans-serif" }}>
       
        <div>
          <h5 className="text-decoration-underline fs-6 mb-3">Shop</h5>
          <ul className="list-unstyled small">
            <li><a href="#" className="text-decoration-none  text-dark">All T-Shirts</a></li>
            <li><a href="#" className="text-decoration-none text-dark">New Arrivals</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-decoration-underline fs-6 mb-3">Information</h5>
          <ul className="list-unstyled small">
            <li><a href="#" className="text-decoration-none text-dark">Shipping Policy</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Return Policy</a></li>
          </ul>
        </div>

      
        <div>
          <h5 className="text-decoration-underline fs-6 mb-3">Follow Us</h5>
          <ul className="list-unstyled small">
            <li>
              <a href="#" className="text-decoration-none text-dark">
                <i className="bi bi-whatsapp me-2" style={{ color: '#25D366' }}></i>Whatsapp
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">
                <i className="bi bi-instagram me-2" style={{ color: '#E1306C' }}></i>Instagram
              </a>
            </li>
          </ul>
        </div>

     
        <div>
          <h5 className="text-decoration-underline fs-6 mb-3">Contact</h5>
          <ul className="list-unstyled small">
            <li>
              Email: <a href="mailto:zipviks0610@gmail.com" className="text-decoration-none text-dark">zipviks0610@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:987654210" className="text-decoration-none text-dark">987654210</a>
            </li>
          </ul>
        </div>
         </div>
        </>
    )
}