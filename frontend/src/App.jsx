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


function App() {
  const[cardItems,setCardItems]= useState([])
  const [loggedInUser,setLoggedInUser]=useState("")
  const [userMobileRegisterData,setUserMobileRegsiterData]=useState("")
  const [userMobileRegisterFormData,setUserMobileRegsiterFormData]=useState("")

  return (
    <>
    <ToastContainer position='top-center' theme="dark"/>
    <Header cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} userMobileRegisterData={userMobileRegisterData} setUserMobileRegsiterData={setUserMobileRegsiterData}/>

    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Home/>} />
      <Route path="/product/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems}/>} />
      <Route path="/cart" element={<PlaceOrder cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} userMobileRegisterData={userMobileRegisterData}/>} />
      <Route path="/payment" element={<PaymentMethod cardItems={cardItems} setCardItems={setCardItems} loggedInUser={loggedInUser} userMobileRegisterData={userMobileRegisterData} setUserMobileRegsiterData={setUserMobileRegsiterData} userMobileRegisterFormData={userMobileRegisterFormData} setUserMobileRegsiterFormData={setUserMobileRegsiterFormData}/>}/>


    </Routes>

    <Footer/>

      
    </>

  )
}

export default App
