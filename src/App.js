import "./App.css";
import Category from "./Pages/Category";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Payment from "./Pages/Payment";
import CustomPack from "./Pages/CustomPack";
import AllAccess from "./Pages/AllAccess";
import Main from "./Pages/Main";
import TrackPages from "./Pages/TrackPages";
import { useEffect, useState } from "react";
import { CartProvider } from "./contexts/Cart";
import CustomPayment from "./Pages/CustomPayment";
import TrackPayment from "./Pages/TrackPayment";
import Success from "./Pages/Success";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  useEffect(() => {
    const selectedCourses = JSON.parse(localStorage.getItem("selectedCourses"));

    if (selectedCourses && selectedCourses.length > 0) {
      setSelectedCourse(selectedCourses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourse));
  }, [selectedCourse]);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <CartProvider value={{ selectedCourse, setSelectedCourse }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route path="" element={<Main />} />
            <Route path="category/:slug" element={<Category />}></Route>
            <Route path="packpayment" element={<CustomPayment />} />
            <Route path="trackpayment" element={<TrackPayment />} />
            <Route path="payment/:slug" element={<Payment />} />
            <Route path="category/customizepack" element={<CustomPack />} />
            <Route path="category/allaccess" element={<AllAccess />} />
            <Route path="tracks/:slug" element={<TrackPages />} />
            <Route path="letskillit" element={<Success />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
