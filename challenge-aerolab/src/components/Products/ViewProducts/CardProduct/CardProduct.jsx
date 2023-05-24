import './cardProduct.css';
import Image from 'next/image';

function CardProduct(producto) {
  return (
    <article className='card_pro'>
      <div className='product'>
        <img
          className='img_card'
          src={producto.urlimg}
          alt={producto.namePro}
        />
        <footer className='product_detail'>
          <h4>{producto.namePro}</h4>
          <p>{producto.category}</p>
        </footer>
      </div>
      <a className='btn_product'>
        Redeem for{' '}
        <Image
          src={'./assets/icons/aeropay-2.svg'}
          width={18}
          height={18}
          alt={'Imagen'}
        />{' '}
        12.500
      </a>
    </article>
  );
}

export default CardProduct;
