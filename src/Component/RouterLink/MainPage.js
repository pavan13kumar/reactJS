import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import "./Style.css";
import OrderSummary from "./OrderSummary";
import PageNotFound from "./PageNotFound";
function MainPage() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/Ordersummary" element={<OrderSummary />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default MainPage;

//NOTE:
// default nav page (path='/')
// for invalid page address (path='*')
