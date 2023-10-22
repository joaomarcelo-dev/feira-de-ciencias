import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
import Home from '../pages/Home';
import ConfBackEnd from '../pages/ConfBackEnd';
import ConfChats from '../pages/ConfChats';
import ConfUser from '../pages/ConfUsers';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings/server" element={<ConfBackEnd />} />
      <Route path="/settings/chats" element={<ConfChats />} />
      <Route path="/settings/users" element={<ConfUser />} />
    </Routes>
  )
}

export default Router;
