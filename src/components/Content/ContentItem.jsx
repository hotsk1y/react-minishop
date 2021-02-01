import React from 'react'

const ContentItem = (props) => {
  const { el } = props;
  const buy = () => props.buyItem(props.el);

  return(
    <div id={el.id} className="content__item">
        <div className="content__item-img">
          <img src={el.url} alt="" />
        </div>
        <div className="content__item-info">          
          <div className="content__item-title">{ `${el.title} ${el.subtitle}` }</div>
          <div className="content__item-descr">{el.descr}</div>
          <div className="content__item-price">{el.price} грн</div>
          <button className='content__item-btn' onClick={buy}>Купить</button>
        </div>
      </div>
  )
}

export default ContentItem