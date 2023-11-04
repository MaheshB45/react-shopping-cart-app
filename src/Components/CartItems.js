import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeItem } from '../Redux/Actions/cartAction'

const CartItems = ({item}) => {
  const cartData = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoval = (id)=>{
    dispatch(removeItem(id));
    if(localStorage.getItem('cart-items')){
      // const tempArr = JSON.parse(localStorage.getItem('cart-items'));
      localStorage.setItem('cart-items',JSON.stringify([...cartData]));
    }
    //alert("Remove Item...")
  }
  return (
    <div className="items">
        <img src={item.thumbnail} alt={item.title} loading='lazy'/>
        <div>
            <p>Title : {item.title}</p>
            <p>Price : $ {item.price}</p>
        </div>
        <button onClick={()=>handleRemoval(item.id)}>Remove From Cart</button>
    </div>
  )
}

export default CartItems
