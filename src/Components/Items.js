import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addItem } from '../Redux/Actions/cartAction';

const Items = ({product}) => {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.cart);
    const addItemInCart = ()=>{
      let add = true;
        data.forEach(element => {
          if(element.id === product.id){
            add = false;
          } 
        });

        //alert("Item Added...")

        if(add){
          dispatch(addItem(product));
          if(localStorage.getItem('cart-items')){
            const tempArr = JSON.parse(localStorage.getItem('cart-items'));
            localStorage.setItem('cart-items',JSON.stringify([...tempArr,product]));
          }else{
            localStorage.setItem('cart-items',JSON.stringify([product]));
          }
        }
    }
  return (
    <div className="items">
                <img src={product.thumbnail} alt={product.title} loading='lazy'/>
                <div>
                    <p>Title : {product.title}</p>
                    <p>Price : $ {product.price}</p>
                </div>
                <button onClick={addItemInCart}>Add To Cart</button>
            </div>
  )
}

export default Items
