import { DiscosProvider } from "./context/DiscosProvider.jsx";
import { Routes, Route } from 'react-router-dom';

import Cabecera from './components/Cabecera';
import Menu from './components/Menu';
import Pie from './components/Pie';
import Inicio from './pages/Inicio';
import InsertarDisco from './pages/InsertarDisco';
import ListarDisco from './pages/ListarDisco';

const App = () => {
  return (
    <>
      <Cabecera />
      <Menu />
      <DiscosProvider>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/insertar" element={<InsertarDisco />} />
            <Route path="/listar" element={<ListarDisco />} />
          </Routes>
        </main>
      </DiscosProvider>
      <Pie />
    </>
  );
};

export default App;