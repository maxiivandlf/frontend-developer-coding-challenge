import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <picture className='logo'>
        <img src='./assets/icons/aerolab-logo-1.svg' alt='' />
      </picture>
      <div>
        <select name='credits' id='credis'>
          <option value=''>Tarjeta</option>
          <option value=''>Creditos</option>
          <option value=''>Btn</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
