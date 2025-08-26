import { Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../pages/Home"
import CardDetails from "../pages/CardDetails"
import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from "../pages/PlaceOrder"
import PaymentMethod from "../pages/PayemtMethod"
import Hoodie from "../components/Hoodie"
import Tshirt from "../components/Tshirt"
import Tpant from "../components/Tpant"
import Shorts from "../components/Shorts"
import Chudi from "../components/Chudi"
import Leggins from "../components/Leggins"
import Saree from "../components/Saree"
import Nightwear from "../components/Nightwear"


function App() {
  const[cardItems,setCardItems]= useState([])
  const [loggedInUser,setLoggedInUser]=useState("")
  const [userMobileRegisterData,setUserMobileRegsiterData]=useState("")
  const [userMobileRegisterFormData,setUserMobileRegsiterFormData]=useState("")
  const [item,setItem]=useState("")

  return (
    <>
    <ToastContainer position='top-center' theme="dark"/>
    <Header cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} userMobileRegisterData={userMobileRegisterData} setUserMobileRegsiterData={setUserMobileRegsiterData} userMobileRegisterFormData={userMobileRegisterFormData}/>

    <Routes>
       <Route path="/" element={<Home setItem={setItem}/>} />
       <Route path="/hoodie" element={<Hoodie />} />
       <Route path="/tshirt" element={<Tshirt />} />
       <Route path="/tpant" element={<Tpant />} />
       <Route path="/shorts" element={<Shorts />} />
       <Route path="/chudi" element={<Chudi />} />
       <Route path="/leggins" element={<Leggins />} />
       <Route path="/saree" element={<Saree />} />
       <Route path="/nightwear" element={<Nightwear />} />
      <Route path="/search" element={<Home />} />
      <Route path="/product/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="product"/>} />
      <Route path="/hoodie/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="hoodie"/>} />
      <Route path="/tshirt/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="tshirt"/>} />
      <Route path="/tpant/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="tpant"/>} />
      <Route path="/shorts/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="shorts"/>} />
      <Route path="/chudi/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="chudi"/>} />
      <Route path="/leggins/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="leggins"/>} />
      <Route path="/saree/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems}  productType="saree"/>}/>
      <Route path="/nightwear/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems} productType="nightwear"/>} />
      <Route path="/cart" element={<PlaceOrder cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} userMobileRegisterData={userMobileRegisterData}/>} />
      <Route path="/payment" element={<PaymentMethod cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} userMobileRegisterData={userMobileRegisterData} setUserMobileRegsiterData={setUserMobileRegsiterData} userMobileRegisterFormData={userMobileRegisterFormData} setUserMobileRegsiterFormData={setUserMobileRegsiterFormData}/>}/>
      
       

    </Routes>

    <Footer/>

      
    </>

  )
}

export default App
