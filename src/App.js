import "./App.css";
import Category from "./Pages/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Pages/Payment";
import CustomPack from "./Pages/CustomPack";
import AllAccess from "./Pages/AllAccess";
import Main from "./Pages/Main";
import TrackPages from "./Pages/TrackPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Main />} />
          <Route path=":slug" element={<Category />}></Route>
          <Route path="payment/:slug" element={<Payment />} />
          <Route path="custompack" element={<CustomPack />} />
          <Route path="allaccess" element={<AllAccess />} />
          <Route path="track" element={<TrackPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
