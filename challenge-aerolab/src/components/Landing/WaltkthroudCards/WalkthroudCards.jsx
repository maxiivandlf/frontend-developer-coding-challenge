import styles from './walkCards.module.css';
import CardWalk from './CardWalk/CardWalk';

function WalkthCards(imagen) {
  return (
    <section className={styles.WaltkthroudCards}>
      <div className={styles.containerCard}>
        <CardWalk
          src={'./assets/illustrations/walkthroug-1-desktop.png'}
          title={'1 - BROWSE'}
          iconImg={'./assets/icons/walkthrough-1.svg'}
        />
        <CardWalk
          src={'./assets/illustrations/walkthroug-2-desktop.png'}
          title={'2 - CHOOSE'}
          iconImg={'./assets/icons/walkthrough-3.svg'}
        />
        <CardWalk
          src={'./assets/illustrations/walkthroug-3-desktop.png'}
          title={'3 - ENJOY'}
          iconImg={'./assets/icons/walkthrough-2.svg'}
        />
      </div>
    </section>
  );
}

export default WalkthCards;
