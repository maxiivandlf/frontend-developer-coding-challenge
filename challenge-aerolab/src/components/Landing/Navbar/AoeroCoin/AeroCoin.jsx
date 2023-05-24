'use client';

import { useState } from 'react';
import Image from 'next/image';
import './AeroCoin.css';
import Aeropay from './Aeropay/Aeropay';
import Points from './Points/Points';

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
          width={50}
          height={50}
          alt='aeropay'
        />
        <Points />
        <Image
          src={'./assets/icons/chevron-active.svg'}
          width={50}
          height={50}
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
