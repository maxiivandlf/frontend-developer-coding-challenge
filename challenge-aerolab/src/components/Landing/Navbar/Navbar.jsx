import Aerocoin from './AoeroCoin/AeroCoin';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <picture className='logo'>
        <img src='./assets/icons/aerolab-logo-1.svg' alt='' />
      </picture>

      <Aerocoin />
    </nav>
  );
}

export default Navbar;
