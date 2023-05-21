import Image from 'next/image';
import Navbar from './Navbar/Navbar';
import WalkthCard from './WaltkthroudCard/WalkthroudCard';

import './Landing.css';

function Landing() {
  return (
    <section className='landing'>
      <Navbar />
      <div className='landing_top'>
        <div className='landing-titles'>
          <h5>EXPLORE THE</h5>
          <h1>
            TECH <span>ZONE</span>
          </h1>
          <p>
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </p>
          <a className='btn-allProducts' href='#productos'>
            VIEW ALL PRODUCTOS &darr;
          </a>
        </div>
        <div className='hero-desktop'>
          <div className='ilustrationBG'>
            <Image
              className='hero-img'
              src={'/assets/illustrations/hero-desktop.png'}
              alt='hero-desktop'
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
      <section className='WaltkthroudCards'>
        <WalkthCard
          src={'./assets/illustrations/walkthroug-1-desktop.png'}
          title={'1 - BROWSE'}
        />
        <WalkthCard
          src={'./assets/illustrations/walkthroug-2-desktop.png'}
          title={'2 - CHOSE'}
        />
        <WalkthCard
          src={'./assets/illustrations/walkthroug-3-desktop.png'}
          title={'3 - ENJOY'}
        />
      </section>
    </section>
  );
}

export default Landing;
