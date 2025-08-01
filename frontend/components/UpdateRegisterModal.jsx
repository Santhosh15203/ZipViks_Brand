import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateRegisterModal({loggedInUser,setLoggedInUser}){

      function switchModal(fromId, toId) {
        const fromEle = document.getElementById(fromId);
        const toEle = document.getElementById(toId);

        if (fromEle && toEle) {
        const hideModal = bootstrap.Modal.getInstance(fromEle) || new bootstrap.Modal(fromEle);
        const showModal = bootstrap.Modal.getInstance(toEle) || new bootstrap.Modal(toEle);
        hideModal.hide();
        setTimeout(() => {
          showModal.show()
        }, 300);
        }
      }    

  
     const [firstname, setFirstname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState(null);
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("Tamil Nadu");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("India");
    const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    if (loggedInUser) {
      setFirstname(loggedInUser.firstname || "");
      setMobile(loggedInUser.mobile || "");
      setEmail(loggedInUser.email || "");
      setPassword(loggedInUser.password || "");
      setGender(loggedInUser.gender || "");
      setAddress(loggedInUser.address || "");
      setCity(loggedInUser.city || "");
      setState(loggedInUser.state || "");
      setZipcode(loggedInUser.zipcode || "");
      setCountry(loggedInUser.country || "");
      setProfile(loggedInUser.profile );
    }
  }, [loggedInUser]);


   
    const handleUpdate=async(e)=>{
      e.preventDefault()
       const formData = new FormData();
            formData.append("firstname", firstname);
            formData.append("mobile", mobile);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("profile", profile); 
            formData.append("gender", gender);
            formData.append("address", address);
            formData.append("city", city);
            formData.append("state", state);
            formData.append("zipcode", zipcode);
            formData.append("country", country);
      try{
           
            const response= await fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/registerform/${loggedInUser._id}`, {
                method:"PUT",
                body:formData
               
            })
            const recentUserData=await response.json()
              if(response.ok){
              setLoggedInUser(recentUserData.updateUser)
                toast.success("Update Successful");
                const modal = bootstrap.Modal.getInstance(document.getElementById('updateRegisterModal'));
                modal?.hide();}
              else{
                toast.error("Update error")
              }
                
            
      }
      catch(error){
        console.log("error in update",error)
      }
           
        }
    return(
        <>
            <div className="modal fade" id="updateRegisterModal"  >
              <div className="modal-dialog">
                <div className="modal-content "style={{width:"100%"}}>
                  <div className="modal-header">
                    <h5 className="modal-title text-dark fw-bold text-decoration-underline " >Profile Update</h5>
                    <button className="btn-close bg-danger" data-bs-dismiss="modal" ></button>
                  </div>
                  
                <form  onSubmit={handleUpdate} >  
                  <div className="modal-body small">
                    <img src="./form/updateProfileLogo.jpg" alt="img" className="rounded" style={{width:"100%",height:"170px",objectFit:"cover"}} />
                    <div className=" "> 
                      <div className="d-flex justify-content-between mt-2 mb-2 text-start">
                        <div className="">
                          {/* <label className="">First name :</label> */}
                          <input type="text"   className="form-control small-placeholder" placeholder="firstname*" value={firstname} name="firstname" onChange={(e)=>{setFirstname(e.target.value)}} />
                        </div>
                         <div className="">
                          {/* <label className="">Mobile Number :</label> */}
                          <input type="tel"  className="form-control small-placeholder" name="mobile" maxLength={10} value={mobile} placeholder="(+91) :*" onChange={(e)=>{setMobile(e.target.value)}} />
                        </div>
                       
                      </div>
                      <div className="d-flex justify-content-between mt-2 mb-2 text-start gap-4">
                        <div className="w-100">
                          {/* <label className="">E-mail :</label> */}
                          <input type="email"  className="form-control small-placeholder" placeholder="email*" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
            
                        <div className="input-group">
                                <input type={showPassword?"text":"password"}   className="form-control small-placeholder" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password*" />
                                <span className="input-group-text" onClick={()=>{setShowPassword(!showPassword)}} style={{cursor:"pointer"}}><i className={`bi ${showPassword?"bi-eye":"bi-eye-slash"}`}></i> </span>
                            </div>
                      </div>
                      <div className="d-flex mt-2 mb-2 justify-content-around text-start">
                         <div className="">
                          {/* <label className="">Last name :</label> */}
                          <input type="file" className="form-control snall-placeholder" accept="image/*" name="profile"  onChange={(e)=>{setProfile(e.target.files[0])}} />
                              
                        </div>
                        <div className="d-flex flex-column w-50 ">
                          {/* <label className="ms-4">Gender :</label> */}
                          <select name="gender"  className="btn border p-2 mt-1 w-75 mx-auto small-select" value={gender} onChange={(e)=>{setGender(e.target.value)}} >
                            <option value="">select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Trans">Transgender</option>
                          </select>
                        </div>
                      </div>
                      <div className="text-start">
                          {/* <label className="">Address :</label> */}
                        <textarea   placeholder="address..*" name="address" className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}}></textarea>
                      </div>

                       <div className="d-flex mt-2 mb-2 justify-content-around ">
                        <div className="">
                          <input type="text"  className="form-control small-placeholder" placeholder="city*" name="city" value={city}  onChange={(e)=>{setCity(e.target.value)}}/>
                        </div>
                        <div className="w-50 ">
                          <select name="state" className="btn border w-75 small-select" value={state}  onChange={(e)=>{setState(e.target.value)}}>
                            <option value="">select state</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                          </select>
                        </div>
                      </div>
                       <div className="d-flex mt-2 mb-2 justify-content-around ">
                        <div className="">
                          <input type="text" maxLength={6} className="form-control small-placeholder" placeholder="postal / zipcode *" value={zipcode} name="zipcode"  onChange={(e)=>{setZipcode(e.target.value)}}/>
                        </div>
                        <div className="w-50">
                          <select name="country" className="btn border w-75 small-select" onChange={(e)=>{setCountry(e.target.value)}} value={country} >
                              <option value="">select country</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                              <option value="Botswana">Botswana</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">Czech Republic</option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">Dominican Republic</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Eswatini">Eswatini</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Greece">Greece</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Laos">Laos</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libya">Libya</option>
                              <option value="Liechtenstein">Liechtenstein</option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Moldova">Moldova</option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montenegro">Montenegro</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="North Korea">North Korea</option>
                              <option value="North Macedonia">North Macedonia</option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">Papua New Guinea</option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russia</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saint Lucia">Saint Lucia</option>
                              <option value="Samoa">Samoa</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Serbia">Serbia</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="South Korea">South Korea</option>
                              <option value="Spain">Spain</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syria">Syria</option>
                              <option value="Taiwan">Taiwan</option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania">Tanzania</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Togo">Togo</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">United Arab Emirates</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="United States">United States</option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Vatican City">Vatican City</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                        </div>
                      </div>
                      <button className="btn btn-success w-100" type="submit" >Update Me</button>
                      

                    </div>
                  </div>
                 </form>

                  <div className="modal-footer small d-flex justify-content-end">
                    <p>Already have an account? <span className="text-primary text-decoration-underline"  onClick={()=>{switchModal('updateRegisterModal','loginModal')}} style={{cursor:"pointer"}}>Login</span></p>
                  </div>
               

                </div>

              </div>
            </div>
          
        </>
    )
}