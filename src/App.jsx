import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// need this css for toastify to look good!!! idw to do it manually
import 'react-toastify/dist/ReactToastify.css';
import Customers from './components/customer/Customers.jsx';
import Cart from './components/cart/Cart.jsx';
import NavBar from './components/MainNavbar.jsx';
import ProductsManager from './components/product/ProductsManager.jsx';
import { Container } from 'react-bootstrap';
import SignInScreen from './components/screens/SignInScreen.jsx';
import ShippingAddressScreen from './components/screens/ShippingAddressScreen.jsx';
import SignUpScreen from './components/screens/SignUpScreen.jsx';
import PaymentScreen from './components/screens/PaymentScreen.jsx';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen.jsx';
import React from 'react';
import OrderScreen from './components/screens/OrderScreen.jsx';
import OrderHistoryScreen from './components/screens/OrderHistoryScreen.jsx';
import ProfileScreen from './components/screens/ProfileScreen.jsx';
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
                <Route path="/" element={<ProductsManager />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/products/*" element={<ProductsManager />} />
                <Route path="/cart/" element={<Cart />} />
                <Route path="/signin" element={<SignInScreen />} />
                <Route path="/signup" element={<SignUpScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/shipping" element={<ShippingAddressScreen />} />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/placeorder" element={<PlaceOrderScreen />} />
                <Route path="/orders/:id" element={<OrderScreen />} />
                <Route path="/orderhistory/" element={<OrderHistoryScreen />} />

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
