import './viewProducts.css';
import CardProduct from './CardProduct/CardProduct';

const option = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY0ZWI0NGQ2ZTU4NDAwMWE4NTZhZWYiLCJpYXQiOjE2ODQzMzU0Mjh9.zq0NiLBTQWG7D9foayDwXEMGgd96-XZgksbV_FmORq0`,
  },
};

const url = 'https://coding-challenge-api.aerolab.co/products';

async function getData() {
  const res = await fetch(url, option);
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
