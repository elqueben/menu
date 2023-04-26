import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome'
import { Arcu } from './pages/arcu';
import { Donec } from './pages/donec';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Arcu" element={<Arcu />} />
      <Route path="/Donec" element={<Donec />}
    </Routes>
    </>
  );
}

export default App;
