'use client';
import { useState } from 'react';

import Image from 'next/image';
import './AeroCoin.css';

function Aerocoin() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <div class='aero-coins'>
      <div class='coins-head'>
        <Image
          src={'./assets/icons/aeropay-1.svg'}
          width={50}
          height={50}
          alt='aeropay'
        />
        <h2>2.000</h2>
        <Image
          src={'./assets/icons/chevron-active.svg'}
          width={50}
          height={50}
          alt='icon'
          className='iconChev'
          onClick={handleClick}
        />
      </div>
      {isMenuVisible ? (
        <ul className='menu'>
          <li className='menu_title'>
            <h3>Add Balance</h3>
          </li>
          <li className='menu_Card'>
            <div className='card'></div>
          </li>
          <li className='menu_buttons'>
            <a>
              <span className='btn-text-color'>1000</span>
            </a>
            <a>
              <span>5000</span>
            </a>
            <a>
              <span className='btn-text-color'>7000</span>
            </a>
          </li>
          <li className='button_add_points '>
            <a className='btn-add'>
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
      ) : null}
    </div>
  );
}

export default Aerocoin;
