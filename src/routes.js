import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Congratulations from './pages/Congratulations';
import Presents from './pages/Presents';


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/congratulations" element={<Congratulations />} />
      <Route path="/presents" element={<Presents />} />
    </Routes>
  )
}

export default MainRoutes