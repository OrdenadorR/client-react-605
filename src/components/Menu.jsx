import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul className='menu-list'>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/insertar">Insertar Disco</Link></li>
        <li><Link to="/listar">Listar Disco</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;