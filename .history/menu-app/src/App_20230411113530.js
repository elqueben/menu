import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/ar"
    </Routes>
    </>
  );
}

export default App;
