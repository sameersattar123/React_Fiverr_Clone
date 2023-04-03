import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Footer from "./Components/Footer/Footer"
import "./App.scss"
import Gigs from "./Pages/gigs/Gigs"
import Order from "./Pages/order/Order"
import Messages from "./Pages/Messages/Messages"
import Message from "./Pages/Message/Message"
import Gig from "./Pages/gig/Gig"
import Add from "./Pages/add/Add"
import MyGigs from "./Pages/myGigs/MyGigs"
import Register from "./Pages/register/Register"
import Login from "./Pages/Login/Login"

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gigs" element={<Gigs/>}/>
          <Route path="/orders" element={<Order/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/message/:id" element={<Message/>}/>
          <Route path="/gig/:id" element={<Gig/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/myGigs" element={<MyGigs/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
    
    </>
  )
}

export default App
