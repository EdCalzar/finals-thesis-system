import { Route, Routes } from 'react-router-dom';
import './components/pages/Login.css';
import Login from './components/pages/Login';
import MainPage from './MainPage'; // Import MainPage
import { Home, Story, Safety_map } from './components/pages';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<MainPage><Home /></MainPage>} />
      <Route path="/story" element={<MainPage><Story /></MainPage>} />
      <Route path="/safety_map" element={<MainPage><Safety_map /></MainPage>} />
    </Routes>
  );
}

export default App;
