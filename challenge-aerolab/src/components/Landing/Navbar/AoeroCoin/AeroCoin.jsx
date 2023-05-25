'use client';

const option = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

const url = 'https://coding-challenge-api.aerolab.co/user/me';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './AeroCoin.module.css';
import Aeropay from './Aeropay/Aeropay';

function Aerocoin() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const [userDate, setUser] = useState([]);

  useEffect(() => {
    async function getDataUser() {
      const res = await fetch(url, option);
      return res.json();
    }

    async function fetchPoints() {
      const user = await getDataUser();
      const datosArray = Object.values(user);
      setUser(datosArray);
    }

    fetchPoints();
  }, []);

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className={styles.aeroCoins}>
      <div className={styles.coinsHead}>
        <Image
          src={'./assets/icons/aeropay-1.svg'}
          width={40}
          height={40}
          alt='aeropay'
        />
        <h2 className={styles.amount}>{userDate[2]}</h2>
        <Image
          src={'./assets/icons/chevron-active.svg'}
          width={30}
          height={30}
          alt='icon'
          className={styles.iconChev}
          onClick={handleClick}
        />
      </div>
      {isMenuVisible ? <Aeropay user={userDate} /> : null}
    </div>
  );
}

export default Aerocoin;
