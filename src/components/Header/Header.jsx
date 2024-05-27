import React, {useMemo, useState} from 'react'
import styles from './Header.module.css'

import store from '/store.svg'
import { useDispatch, useSelector } from 'react-redux'
import rootReducer from '../../redux/root-reducer'
import { selectProductsCount } from '../../redux/products/cart.selection'

const Header = ({getquery,getmenu, setmenu}) => {

  const { products } = useSelector((rootReducer) => rootReducer.productsReduce)
  
  const dispatch = useDispatch()

  const productsCount = useSelector(selectProductsCount)

  const [query,Setquery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
      getquery(query)
      Setquery('')
  }

  return (
    <header className={styles.Header}>
          <section> 
              <div className={styles.store}>
                  <img src={store} alt="" className={styles.logo}/>
                 <h2 className={styles.title}>STORE</h2>
              </div>
                <div className={styles.search}>
                     <input 
                      type="text" 
                      placeholder='Buscar...'
                      value={query}
                      onChange={(e) => Setquery(e.target.value)}/>

                     <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
                </div>
                <div className={styles.category}>
                      <p>Categoria</p>
                </div>
         </section>

              <aside className={styles.shopping}>
                <div className={styles.cicle}><p>{productsCount}</p></div>
                <i className="fa-solid fa-cart-shopping" onClick={()=>{setmenu(true)}}></i>
              </aside>
    </header>
  )
}

export default Header