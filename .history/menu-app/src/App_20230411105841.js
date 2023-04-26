import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/welcome'


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Welcome />} />
    <Welcome />
    </Routes>
    </>
  );
}

export default App;
