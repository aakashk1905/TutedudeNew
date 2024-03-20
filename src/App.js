import "./App.css";
import Category from "./Pages/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Pages/Payment";
import CustomPack from "./Pages/CustomPack";
import AllAccess from "./Pages/AllAccess";
import Main from "./Pages/Main";
import TrackPages from "./Pages/TrackPages";
import { useEffect, useState } from "react";
import { CartProvider } from "./contexts/Cart";
import CustomPayment from "./Pages/CustomPayment";

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
  return (
    <CartProvider value={{ selectedCourse, setSelectedCourse }}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Main />} />
            <Route path=":slug" element={<Category />}></Route>
            <Route path="custom/payment" element={<CustomPayment />} />
            <Route path="payment/:slug" element={<Payment />} />
            <Route path="custompack" element={<CustomPack />} />
            <Route path="allaccess" element={<AllAccess />} />
            <Route path="track" element={<TrackPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
