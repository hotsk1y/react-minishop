import React, { useState, useEffect } from 'react'
import { get, set, clearAll } from '../../utils/storage';
import TotalItem from './TotalItem'
import EmptyTotal from './EmptyTotal'

const Total = (props) => {
  const [ orders, _orders ] = useState([]);
  const [ total, _total ] = useState(0);

  useEffect(() => {
    const orders = get('myOrders');
    console.log('orders', orders)
    _orders(orders);
  }, []);

  useEffect(() => {
    let ordersTotal = 0;
    orders?.map(item => ordersTotal += item.price * item.count);

    _total(ordersTotal);
  }, [orders])

  const removeAll = () => {
    _orders([]);
    clearAll();
  };
  
  const isBasketEmpty = () => orders && orders.length > 0 ? showIOrdertem() : <EmptyTotal ordersItems={orders} />;

  const showIOrdertem = () => orders.map(el => <TotalItem el={el} incrItem={incrItem} decrItem={decrItem} removeItem={removeItem}/> );

  const incrItem = (el) => {
    const newOrders = orders.map(item => item.id === el.id ? { ...item, count: item.count + 1 } : item);

    _orders(newOrders);
    set('myOrders', newOrders);
  };

  const decrItem = (el) => {
    const newOrders = orders?.map(item => item.id === el.id ? { ...item, count: item.count - 1 } : item)?.filter(order => order.count > 0);

    _orders(newOrders);
    set('myOrders', newOrders);
  };

  const removeItem = (el) => {
    const newOrders = orders.filter(order => order.id !== el.id);

    _orders(newOrders);
    set('myOrders', newOrders);
  }
  
  return (
    <div className="total">
      <div className="total__title">
        <div className="total__title-basket">
          <img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Shopping-Cart-icon.png" alt="basket-logo"/>
          <div className='total__title-text'>Корзина</div>          
        </div>
        <button className="clear">
          <img src="https://img.icons8.com/ios/452/trash--v1.png" alt="trash-logo"/>
          <div className="total__clear-text" onClick={removeAll}>Очистить корзину</div>
        </button>
      </div>
      {isBasketEmpty()}
      <div className='total__title-text-end'>Итого: { total } грн</div>
    </div>
  )
}

export default Total