import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp";
import ResetStyle from "./Styles/reset";
import SignIn from "./Components/Pages/SignIn";
function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
