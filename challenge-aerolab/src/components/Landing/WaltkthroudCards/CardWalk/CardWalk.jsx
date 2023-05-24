import styles from './walkCard.module.css';

function CardWalk(imagen) {
  return (
    <article className={styles.introCard}>
      <div className={styles.introImg}>
        <img src={imagen.src} alt='' className={styles.imgCard} />
      </div>
      <div className={styles.bottomCard}>
        <div className={styles.iconTitle}>
          <img src={imagen.iconImg} alt='' />

          <h3>{imagen.title}</h3>
        </div>
        <p>Browse our tech catalog with more than 20 top tech products</p>
      </div>
    </article>
  );
}

export default CardWalk;
