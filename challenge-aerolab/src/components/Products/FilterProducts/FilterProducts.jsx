function FilterProducts() {
  return (
    <>
      <label htmlFor='category-products'>Filter by:</label>
      <select name='category-products' id='category-products'>
        <option value='all_roducts'>All Products</option>
        <option value='gaming'>Gaming</option>
        <option value='audio'>Audio</option>
        <option value='smart-home'>Smart Home</option>
        <option value='monitors-tv'>Monitors & TV</option>
      </select>
    </>
  );
}

export default FilterProducts;
