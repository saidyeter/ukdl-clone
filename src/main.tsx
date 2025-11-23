import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import Layout from './layout';
import ChangeTestCentrePage from './pages/change-test-centre';
import Login from './pages/login';
import Manage from './pages/manage';
import NotFound from './pages/not-found';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/change-test-centre" element={<ChangeTestCentrePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
