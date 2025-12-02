import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
