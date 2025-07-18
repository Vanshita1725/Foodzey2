import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Category from "./Category";
import Products from "./Products";
import Pages from "./Pages";
import Blog from "./Blog";
import Element from "./Element";
import Home2 from "./Componenets/Home2";
import Home1 from "./Componenets/home1";
import Productlist2 from "./Productlist2";
import Allproductlist from "./Allproductlist";
import Aboutus from "./Aboutus";
import Login from "./Componenets/Login";
import Ragistion from "./Componenets/Ragistion";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Faq from "./Faq";
import Wishlist from "./Wishlist";
import Forgetpassword from "./Forgetpassword";
import Changepassword from "./Changepassword";
import Sendotp from "./Sendotp";
import Verifyotp from "./Verifyotp";


function App() {


  return (

      <div>
       
        <Routes>
          {/* <Route path="/" element={<Nevbar />}/> */}
            <Route path="/" element={<Home />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Ragistion" element={<Ragistion />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/product/:id" element={<Products />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Element" element={<Element />} />
            <Route path="/Home2" element={<Home2 />} />
            <Route path="/Home1" element={<Home1 />} />
            <Route path="/productlist2" element={<Productlist2 />} />
            <Route path="/Allproductlist" element={<Allproductlist />} />
            <Route path="/Aboutus" element={<Aboutus />}/>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout/>} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Forgetpassword" element={< Forgetpassword/>}/>
            <Route path="/Changepassword" element={<Changepassword />} />
            <Route path="/Sendotp" element={<Sendotp />} />
            <Route path="/Verifyotp" element={< Verifyotp/>} />
            <Route path="*" element={<h1 className="text-center my-5">404 Not Found</h1>} ></Route>

        </Routes>
      </div>  

  )
}

export default App;
