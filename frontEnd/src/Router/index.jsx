import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
import Home from '../pages/Home';
import ConfBackEnd from '../pages/ConfBackEnd';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings/server" element={<ConfBackEnd />} />
    </Routes>
  )
}

export default Router;
