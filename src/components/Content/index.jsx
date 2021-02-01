import React from 'react';

import ContentItem from './ContentItem';
import data from '../../data.json';
import { get, set } from '../../utils/storage';

const Content = (props) => {

  const buyItem = (el) => {
    let isAlreadyInCart = false;
    const oldItems = get('myOrders');

    const newItems = oldItems?.map(item => {
      if (item.id === el.id) {
        isAlreadyInCart = true;

        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    })
    if (!isAlreadyInCart) {
      newItems.push({ ...el, count: 1 });
    };

    set('myOrders', newItems)
  }
  
  const showItems = () => data.map(el => <ContentItem el={el} buyItem={buyItem}/>);

  return (
    <section className="content">
      {showItems()}
    </section>
  )
}

export default Content