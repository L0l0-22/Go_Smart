import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ItSolutions from './pages/ItSolutions';
import LearnMoreAbout from './pages/LearnMoreAbout';
import Products from './pages/Products';
import RequestDemo from './pages/RequestDemo';

function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/itsolutions" element={<ItSolutions />} />
        <Route path="/about" element={<LearnMoreAbout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/requestdemo" element={<RequestDemo />} />
      </Routes>
       <Footer />
    </>
  );
}

export default App;
