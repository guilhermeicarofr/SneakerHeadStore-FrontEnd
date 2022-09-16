import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SignUp from "./Components/Pages/SignUp";
import Store from "./Components/Pages/Store/Store.js";
import ResetStyle from "./Styles/reset";
import SignIn from "./Components/Pages/SignIn";
import UserContext from "./Components/Contexts/userContext";
import { StoreContext } from "./Components/Contexts/storeContext.js";
function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [shopcart, setShopcart] = useState([]);
  if (localStorage.getItem("user") !== null && user === null) {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }
  return (
    <BrowserRouter>
      <ResetStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <StoreContext.Provider
          value={{ products, setProducts, shopcart, setShopcart }}
        >
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
          </Routes>
        </StoreContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
