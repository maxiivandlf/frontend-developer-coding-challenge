import styles from './cardCredit.module.css';
import Image from 'next/image';

function CardCredit(props) {
  return (
    <div className={styles.cardBG}>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <h3 className={styles.titleCard}>Aerocard</h3>
          <Image
            className={styles}
            width={40}
            height={40}
            alt='iconaerolab'
            src={props.icon}
          />
        </div>
        <div className={styles.cardBottom}>
          <span>{props.name}</span>
          <span>07/23</span>
        </div>
      </div>
    </div>
  );
}

export default CardCredit;
