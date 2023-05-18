import Landing from '../components/Landing/Landing';
import Products from '../components/Products/Products';
import Footer from '../components/Foorter/Footer';
import './page.css';

export default function Home() {
  return (
    <>
      <main className='main-content'>
        <Landing />
        <Products />
      </main>
      <Footer />
    </>
  );
}
