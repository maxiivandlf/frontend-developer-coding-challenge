import styles from './controls.module.css';
import Image from 'next/image';

function Controls() {
  return (
    <>
      <div className={styles.sorted}>
        <p>Sortd by:</p>
        <a className={styles.selectd} href=''>
          Most Recent
        </a>
        <a href=''>Lowest Price</a>
        <a href=''>Highest Price</a>
      </div>
      <div className={styles.pages}>
        <a>
          <Image
            alt='icon'
            className={styles.leftArrow}
            src={'./assets/icons/chevron-active.svg'}
            width={20}
            height={20}
          />
        </a>
        <a>Page 1 of 2</a>
        <a>
          <Image
            alt='icon'
            src={'./assets/icons/chevron-active.svg'}
            width={20}
            height={20}
          />
        </a>
      </div>
    </>
  );
}

export default Controls;
