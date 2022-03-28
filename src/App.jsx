import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./components/customer/Customers.jsx";
import Cart from "./components/cart/Cart.jsx";
import NavBar from "./components/MainNavbar.jsx";
import Products from "./components/product/Products.jsx";
import MainContent from "./components/MainContent.jsx";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column site-container">
          <header>
            <NavBar />
          </header>
          <main>
            <Container>
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="customers/" element={<Customers />} />
                <Route path="products/*" element={<Products />} />
                <Route path="cart/" element={<Cart />} />
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
