
import Navbar from "../navbar";
import Footer from "../footer"
import { Outlet } from "react-router-dom";

const Layout = () => {
    
    return (
        <>
        <div className="h-full">
        <Navbar/>
        <div className="min-h-screen">
        <Outlet/>
        </div>
         <Footer/>
        </div>
         
        </>
    )
}

export default Layout