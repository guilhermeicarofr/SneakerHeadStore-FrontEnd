import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp";
import ResetStyle from "./Styles/reset";
function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
