import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from './Pages/Success';
import SignUp from "./Pages/SignUp";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />}></Route>
        <Route path='/success-login' element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
