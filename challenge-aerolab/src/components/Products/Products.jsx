import './products.css';
import ViewProducts from './ViewProducts/ViewProducts';
import FilterProducts from './FilterProducts/FilterProducts';
import Controls from './Controls/Controls';

function Products() {
  return (
    <section id='productos' className='products'>
      <h2 className='products_title'>
        TECH <span>PRODUCTS</span>
      </h2>
      <header className='products_filter'>
        <FilterProducts />
        <Controls />
      </header>
      <ViewProducts />
    </section>
  );
}

export default Products;
