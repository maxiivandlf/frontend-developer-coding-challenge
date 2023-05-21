import './walkCard.css';

function WalkthCards(imagen) {
  return (
    <>
      <article className='intro_card'>
        <div className='intro_img'>
          <img src={imagen.src} alt='' className='img_card' />
        </div>
        <div className='bottom_card'>
          <div className='icon-title'>
            <img src='./assets/icons/walkthrough-1.svg' alt='' />

            <h3>{imagen.title}</h3>
          </div>
          <p>Browse our tech catalog with more than 20 top tech products</p>
        </div>
      </article>
    </>
  );
}

export default WalkthCards;
