import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from '../components/styles/globalStyles.js';

import Store from './pages/store/Store.js';

function App() {


  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Store />} />
        </Routes>   
      </BrowserRouter>  
    </>
  );
}

export default App;
