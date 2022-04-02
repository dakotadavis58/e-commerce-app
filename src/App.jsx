import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// need this css for toastify to look good!!! idw to do it manually
import "react-toastify/dist/ReactToastify.css";
import Customers from "./components/customer/Customers.jsx";
import Cart from "./components/cart/Cart.jsx";
import NavBar from "./components/MainNavbar.jsx";
import ProductsManager from "./components/product/ProductsManager.jsx";
import MainContent from "./components/MainContent.jsx";
import { Container } from "react-bootstrap";
import SignInScreen from "./components/screens/SignInScreen.jsx";
import ShippingAddressScreen from "./components/screens/ShippingAddressScreen.jsx";
import SignUpScreen from "./components/screens/SignUpScreen.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column site-container">
          <ToastContainer position="bottom-center" limit={1} />
          <header>
            <NavBar />
          </header>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/products/*" element={<ProductsManager />} />
                <Route path="/cart/" element={<Cart />} />
                <Route path="/signin" element={<SignInScreen />} />
                <Route path="/signup" element={<SignUpScreen />} />
                <Route path="/shipping" element={<ShippingAddressScreen />} />
                <Route path="*" element={<div>404: Not found</div>} />
              </Routes>
            </Container>
          </main>
          <footer>
            <div className="text-center">All rights reserved</div>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
