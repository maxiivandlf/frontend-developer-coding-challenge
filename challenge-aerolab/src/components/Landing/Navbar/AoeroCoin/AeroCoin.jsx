'use client';

import { useState } from 'react';
import Image from 'next/image';
import './AeroCoin.css';
import Aeropay from './Aeropay/Aeropay';

function Aerocoin() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className='aero-coins'>
      <div className='coins-head'>
        <Image
          src={'./assets/icons/aeropay-1.svg'}
          width={40}
          height={40}
          alt='aeropay'
        />
        <h3>2000</h3>
        <Image
          src={'./assets/icons/chevron-active.svg'}
          width={30}
          height={30}
          alt='icon'
          className='iconChev'
          onClick={handleClick}
        />
      </div>
      {isMenuVisible ? <Aeropay /> : null}
    </div>
  );
}

export default Aerocoin;
