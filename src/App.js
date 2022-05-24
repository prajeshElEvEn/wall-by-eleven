import { Route, Routes } from 'react-router-dom';
import Desktop from './components/Desktop';
import Footer from './components/Footer';
import Mobile from './components/Mobile';
import Navbar from './components/Navbar';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/wall-by-eleven/" element={<Desktop />} />
        <Route path="/wall-by-eleven/mobile" element={<Mobile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
