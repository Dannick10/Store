import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProductstoCart } from '../../redux/products/Action'

import styles from './CardProducts.module.css'

const CardProducts = ({data}) => {
  
  const dispatch = useDispatch()

  const handleProductClick = () => {
      dispatch(addProductstoCart(data))
  }

  return (
    <div className={styles.card}>

          <div className={styles.site}><a href={data.permalink} target='_blank'><i className="fa-solid fa-store"></i></a></div>

          <div className={styles.showcase}>
            <img src={data.thumbnail} alt="" id={data.thumbnail_id}/>
          </div>
         <div className={styles.title}>
            <h3>{data.title.substr(0,23)}</h3>
         </div>
         <div className={styles.info}>
            {data.original_price == null ? (<p>A partir</p>):(<p className={styles.originalprice}>{data.original_price} R$</p>)}
            <p className={styles.price}>{data.price} R$</p>
         </div>

         <div className={styles.buy}>
          <button onClick={handleProductClick}>Comprar</button>
         </div>

    </div>
  )
}

export default CardProducts