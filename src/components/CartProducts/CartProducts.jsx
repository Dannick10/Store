import React, {useState} from 'react'

import { useSelector } from 'react-redux'
import CardProducts from '../CardProducts/CardProducts'

import styles from './CartProducts.module.css'

const CartProducts = ({menu,setmenu}) => {



  const { products } = useSelector((rootReducer) => rootReducer.productsReduce)

  return (
    <div className={styles.menu} style={menu ? {visibility: 'visible'}: {visibility: 'hidden'}}>
        <p style={{position: 'absolute', top: '1em', fontFamily: 'var(--font0)'}}>Seu carrinho</p>
        <div className={styles.close}>
        <i className="fa-solid fa-xmark" onClick={()=>setmenu(false)}></i>
        </div>

        <div className={styles.section_products}> 

        {products.map(products => <div className={styles.product}><CardProducts data={products} cart={true}/></div>)}
        </div>

        <div className={styles.button}>
          <button>Finalizar compra</button>
        </div>
    </div>
  )
}

export default CartProducts