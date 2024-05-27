import React, { useCallback, useEffect, useMemo, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProductstoCart, decreaseProductstoCart, increaseProductstoCart, removeProductstoCart } from '../../redux/products/Action'

import styles from './CardProducts.module.css'

const CardProducts = ({data,cart,setmenu}) => {

  const formatCurrency = (value, locale = 'pt-BR', currency = 'BRL') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(value);
  }
  
  const dispatch = useDispatch()

  const handleProductClick = () => {
      dispatch(addProductstoCart(data))
  }

  const handleProductRemove = () => {
      dispatch(removeProductstoCart(data.id))
  }

  const handleProductIncrease = (e) => {
    e.stopPropagation();
    dispatch(increaseProductstoCart(data.id));
  }

  const handleProductDecrease = (e) => {
    e.stopPropagation();
    dispatch(decreaseProductstoCart(data.id));
  }

  return (
    <div className={styles.card} key={data.id} id={data.id}>
          {cart && <>
            <i className="fa-solid fa-xmark" style={{position:'absolute', left: '.6em',fontSize:'1.3em', cursor: 'pointer'}} onClick={handleProductRemove}></i>
            </>}
          <div className={styles.site}><a href={data.permalink} target='_blank'><i className="fa-solid fa-store"></i></a></div>

          <div className={styles.showcase} >
            <img src={data.thumbnail} alt="" id={data.thumbnail_id}/>
          </div>
         <div className={styles.title}>
            <h3>{data.title.substr(0,23)}</h3>
         </div>
         <div className={styles.info}>
            {!cart && <>
            {data.original_price == null ? (<p>A partir</p>):(<p className={styles.originalprice}>{formatCurrency(data.original_price)}</p>)}
            </>}

            <p className={styles.price}>{formatCurrency(data.price)}</p>
         </div>

          {!cart ? <>
         <div className={styles.buy}>
          <button onClick={() => {handleProductClick()}} >Comprar</button>
         </div>
          </>: <>
          <div className={styles.buy} onClick={handleProductDecrease}>
          <button>-</button>
          <p>{data.quantity}</p>
          <button onClick={handleProductIncrease}>+</button>
         </div>
          </>}

    </div>
  )
}

export default CardProducts