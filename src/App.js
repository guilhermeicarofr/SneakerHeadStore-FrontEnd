import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SignUp from "./Components/Pages/SignUp";
import Store from "./Components/Pages/Store/Store.js";
import ResetStyle from "./Styles/reset";
import SignIn from "./Components/Pages/SignIn";

import { StoreContext } from './Contexts/storeContext.js';

function App() {

  const [ products, setProducts ] = useState([]);
  const [ shopcart, setShopcart] = useState([]);

  return (

    <StoreContext.Provider value={{ products, setProducts, shopcart, setShopcart }}>
      <BrowserRouter>
        <ResetStyle />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
