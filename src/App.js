import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Mobile from './components/Mobile';
import Register from './components/Register';
import User from './components/User';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/wall-by-eleven/" element={<Home />} />
        <Route path="/wall-by-eleven/mobile" element={<Mobile />} />
        <Route path="/wall-by-eleven/user" element={<User />} />
        <Route path="/wall-by-eleven/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
