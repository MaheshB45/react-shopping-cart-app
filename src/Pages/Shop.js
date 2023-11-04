import React from 'react';
import { useSelector} from 'react-redux';
import Items from '../Components/Items';

const Shop = () => {
    const { loader, data, error } = useSelector(state=>state.fetch);
    
  return (
    <>
    <h2>All Items</h2>
    {loader && 
    <div style={{height: '82vh', background:'#000', color:'#FFF', display:'flex', alignItems:'center', justifyContent:'center'}} className="load">
        <h1>Loading...</h1>
    </div> }
    {data && <div className='shop-container'> 
      {data.products.map(product=>{
        return (
            <Items key={product.id} product={product}/>
        );
      })}
    </div>}
    {
        error &&
        <div style={{height: '82vh', background:'#ff5c5c', color:'#FFF', display:'flex', alignItems:'center', justifyContent:'center'}} className="load">
            <h1>{error}</h1>
        </div>
    }
    </>
  )
}

export default Shop
