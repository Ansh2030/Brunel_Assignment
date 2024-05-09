
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home'
import Success from "./Components/Success/Success";
function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
   {/* <Register/> */}


      </>
  );
}

export default App;
