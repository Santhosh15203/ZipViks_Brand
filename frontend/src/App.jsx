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

  return (
    <>
    <ToastContainer position='top-center' theme="dark"/>
    <Header cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} userMobileRegisterData={userMobileRegisterData} setUserMobileRegsiterData={setUserMobileRegsiterData} userMobileRegisterFormData={userMobileRegisterFormData}/>

    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Home/>} />
      <Route path="/product/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems}/>} />
      <Route path="/cart" element={<PlaceOrder cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} userMobileRegisterData={userMobileRegisterData}/>} />
      <Route path="/payment" element={<PaymentMethod cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} userMobileRegisterData={userMobileRegisterData} setUserMobileRegsiterData={setUserMobileRegsiterData} userMobileRegisterFormData={userMobileRegisterFormData} setUserMobileRegsiterFormData={setUserMobileRegsiterFormData}/>}/>
      
       <Route path="/hoodie" element={<Hoodie/>} />
       <Route path="/tshirt" element={<Tshirt/>} />
       <Route path="/tpant" element={<Tpant/>} />
       <Route path="/shorts" element={<Shorts/>} />
       <Route path="/chudi" element={<Chudi/>} />
       <Route path="/leggins" element={<Leggins/>} />
       <Route path="/saree" element={<Saree/>} />
       <Route path="/nightwear" element={<Nightwear/>} />

    </Routes>

    <Footer/>

      
    </>

  )
}

export default App
