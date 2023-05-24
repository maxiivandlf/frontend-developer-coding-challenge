import Image from 'next/image';
import Style from './aeropay.module.css';

function Aeropay() {
  return (
    <ul className={Style.menu}>
      <li className={Style.menu_title}>
        <h3>Add Balance</h3>
      </li>
      <li className={Style.menuCard}>
        <div className={Style.card}>hola</div>
      </li>
      <li className={Style.menuButtons}>
        <a>
          <span className={Style.btnTextColor}>1000</span>
        </a>
        <a>
          <span>5000</span>
        </a>
        <a>
          <span className={Style.btnTextColor}>7000</span>
        </a>
      </li>
      <li className={Style.buttonAddPoints}>
        <a className={Style.btnAdd}>
          <Image
            src={'./assets/icons/aeropay-3.svg'}
            width={40}
            height={40}
            alt='aeropay'
          />
          <span>Add Points</span>
        </a>
      </li>
    </ul>
  );
}

export default Aeropay;
