import './controls.css';

function Controls() {
  return (
    <>
      <div className='sorted'>
        <p>Sortd by:</p>
        <a className='selectd' href=''>
          Most Recent
        </a>
        <a href=''>Lowest Price</a>
        <a href=''>Highest Price</a>
      </div>
      <div className='pages'>
        <a href=''>&lArr;</a>
        <a href=''>Page 1 of 2</a>
        <a href=''>&rArr;</a>
      </div>
    </>
  );
}

export default Controls;
