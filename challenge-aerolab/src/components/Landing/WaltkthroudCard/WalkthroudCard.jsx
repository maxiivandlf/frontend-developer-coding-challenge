import './walkCard.css';

function WalkthCards() {
  return (
    <>
      <article className='intro_card'>
        <div className='intro_img'>
          <img
            src='./assets/illustrations/walkthroug-1-desktop.png'
            alt=''
            className='img_card'
          />
        </div>
        <div className='bottom_card'>
          <div className='icon-title'>
            <img src='./assets/icons/walkthrough-1.svg' alt='' />
            <h3>1-Browse</h3>
          </div>
          <p>Browse our tech catalog with more than 20 top tech products</p>
        </div>
      </article>
    </>
  );
}

export default WalkthCards;
