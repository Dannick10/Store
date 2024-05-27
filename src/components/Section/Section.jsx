import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import CardProducts from '../CardProducts/CardProducts'

const Section = ({setquery,setmenu}) => {

    const [query,Setquery] = useState('iphone')
    const [products,Setproducts] = useState()
    const [loading,SetLoading] = useState(false)
    const [error,SetError] = useState(false)

    useEffect(() => {
        Setquery(setquery)
    },[setquery])

    
    useEffect(() => {

        SetLoading(true)
        SetError(false)

        const fetchProducts = async () => {


            try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
            const data  = await response.json()
            Setproducts(data.results)
            
        }catch{
            SetError(true)
        }
        SetLoading(false)
}   
        fetchProducts()
    },[query])

  return (
    <section className={styles.section_product}>
        {error && <p>Houve um erro, tente novamente.</p>}
        {loading && <div className={styles.loading}>Carregando</div>}  
        {!loading && <>
        {products && products.map((e) => (<><CardProducts data={e} setmenu={setmenu}/></>))}
        </>}
     
    </section>
  )
}

export default Section