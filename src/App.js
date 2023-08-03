import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/public/HomePage';
import CoworkingsPage from './pages/admin/CoworkingsPage';
import CreateCoworkingPage from './pages/admin/CreateCoworkingPage';
import UpdateCoworkingPage from './pages/admin/UpdateCoworkingPage';
import LoginPage from './pages/public/LoginPage';
import MainAdminPage from './pages/admin/MainAdminPage';
import CoworkingsPagePublic from './pages/public/CoworkingPagePublic';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/coworkings" element={<CoworkingsPage />} />
        <Route path='/admin/coworkings/create' element={<CreateCoworkingPage />} />
        <Route path='/admin/coworkings/:id/update' element={<UpdateCoworkingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<MainAdminPage />} />
        <Route path="/coworkings" element={<CoworkingsPagePublic />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
