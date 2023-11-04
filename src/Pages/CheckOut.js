import React,{ useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from '../Components/CartItems.js';
import { clearAll, addItem } from '../Redux/Actions/cartAction.js';


const CheckOut = () => {
  const [total, setTotal] = useState(0);
  const [checkedOut, setcheckedOut] = useState(false);
  const data = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  useEffect(()=>{
      if(data.length === 0 && localStorage.getItem('cart-items')){
        const tempArr = JSON.parse(localStorage.getItem('cart-items'));
        tempArr.map(product=>{
          return dispatch(addItem(product));
        })
      }
  },[data.length, dispatch]);
  
  useEffect( ()=>{
    let temp = 0;
    data && data.forEach(element => {
      temp += element.price;
    });
    setTotal(temp);
    localStorage.setItem('cart-items',JSON.stringify(data));
  },[data]);

  function checkOutOrders(){
    dispatch(clearAll());
    localStorage.clear();
    setcheckedOut(true);
  }
  return (
    <div>
      <h2>My Cart</h2>
      <div className="wrapper">
        <div className="items-container">
          {
            checkedOut && <h1>Orders Placed SuccessFully</h1>
          }
          {
            data &&
            data.map(item=>{
              return <CartItems key={item.id} item={item}/>
            })
          }
        </div>
        <div className="cart">
          <h3 style={{textAlign: 'center' , marginBottom : '3rem' , fontSize: '1.3rem' , fontWeight: '500'}}>Checkout List</h3>
          <ol>
          {
            data && data.map(item=>{
              return <li key={item.id}> <span>{item.title}</span> <span>$ {item.price}</span> </li>
            })
          }
          </ol>
          <p className='total'><span>Total :</span> <span>$ {total}</span></p>

          <button className='CheckOut' onClick={checkOutOrders}>Click To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
