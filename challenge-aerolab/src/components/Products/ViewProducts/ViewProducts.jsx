import './viewProducts.css';
import CardProduct from './CardProduct/CardProduct';

const option = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

const url = 'https://coding-challenge-api.aerolab.co/products';

async function getData() {
  const res = await fetch(url, option, { cache: 'no-store' });
  return res.json();
}

export default async function ViewProducts() {
  const productos = await getData();

  return (
    <section className='view-products'>
      {productos.map((producto) => (
        <CardProduct
          key={producto.id}
          namePro={producto.name}
          urlimg={producto.img.url}
          category={producto.category}
        />
      ))}
    </section>
  );
}
