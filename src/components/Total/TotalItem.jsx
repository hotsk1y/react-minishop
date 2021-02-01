import React from 'react'

const TotalItem = ({ el, incrItem, decrItem, removeItem }) => {
  const _incrItem = () => incrItem(el);

  const _decrItem = () => decrItem(el);

  const _removeItem = () => removeItem(el);

  return (
    <div className="total__item">
      <div className="total__item-descr">
        <div className="total__item-descr-wrapper">
          <img className='total__item-img' src={el.url} alt="" />
          <div className="total__item-text">
            <div className="total__item-text-title">{el.title}</div>
            <div className="total__item-text-descr">{el.subtitle}</div>
          </div>
        </div>

        <div className="item-amount">
          <button className="minus-btn circle" onClick={_decrItem} >-</button>
          <div className="number">{el.count}</div>
          <button className="plus-btn circle" onClick={_incrItem}>+</button>
        </div>

        <div className="item-price">
          {el.price * el.count} грн
        </div>

        <button className='delete-item__btn circle' onClick={_removeItem}>x</button>
      </div>
    </div>
  );
}

export default TotalItem;
