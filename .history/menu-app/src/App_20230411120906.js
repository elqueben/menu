import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome'
import { Arcu } from './pages/arcu';
import { Donec } from './pages/donec';
import { Eiusmod } from './pages/eiusmod';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Arcu" element={<Arcu />} />
      <Route path="/Donec" element={<Donec />} />
      <Route path="/E"
    </Routes>
    </>
  );
}

export default App;
