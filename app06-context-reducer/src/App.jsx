import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
// import { Routes, Route } from 'react-router-dom';

  



export default function App() {
  return (
    <div className="pApp">
      <Header />
      <Cart />

      {/* <Routes>
        <Route path="create" element={<UserCreate />} />
      </Routes> */}

    </div>
  );
  
}