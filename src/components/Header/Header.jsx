import React, {useState} from 'react'
import styles from './Header.module.css'

import store from '/store.svg'

const Header = ({getquery}) => {

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
                <div className={styles.cicle}><p>0</p></div>
                <i className="fa-solid fa-cart-shopping"></i>
              </aside>
    </header>
  )
}

export default Header