import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp";
import Store from './Components/Pages/Store/Store.js';
import ResetStyle from "./Styles/reset";
function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
