import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plan from './pages/Plan';
import Meals from './pages/Meals';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/signup" || location.pathname === "/signin";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
