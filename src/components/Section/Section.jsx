import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import CardProducts from '../CardProducts/CardProducts'

const Section = ({setquery,setmenu}) => {

    const [query,Setquery] = useState('iphone')
    const [products,Setproducts] = useState()

    useEffect(() => {
        Setquery(setquery)
    },[setquery])

    
    useEffect(() => {
        const fetchProducts = async () => {
            try{
            const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
            const data  = await response.json()
            Setproducts(data.results)
        
        }catch{
        console.log('error')
        }
    }
        fetchProducts()
    },[query])

  return (
    <section className={styles.section_product}>
        {products && products.map((e) => (<><CardProducts data={e} setmenu={setmenu}/></>))}
     
    </section>
  )
}

export default Section