import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp";
import Store from "./Components/Pages/Store/Store.js";
import ResetStyle from "./Styles/reset";
import SignIn from "./Components/Pages/SignIn";
import UserContext from "./Components/context/userContext";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <ResetStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
