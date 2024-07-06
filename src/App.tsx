import Header from "./components/Headers/Header.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from "./pages/Cadastro.tsx";
import Login from './pages/Login.tsx';
import Home from "./pages/Home.tsx";
import ScrollToTopButton from "./components/ScrollToTop.tsx";
import CheckIn from "./components/ProductsCheck/CheckIn.tsx";
import CheckOut from "./components/ProductsCheck/CheckOut.tsx";
import Footer from './components/Footer/Footer.tsx'
import Games from "./pages/Games.tsx";

function App() {
  return (
    <div className='app bg-AltLightBlue text-DarkBlueG'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/checkin/:id" element={<CheckIn />}/>
          <Route path="/games/checkout/:id" element={<CheckOut />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </Router>
  
    </div>
  );
}

export default App;
