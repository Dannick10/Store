import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Section from './components/Section/Section'
import CartProducts from './components/CartProducts/CartProducts'

function App() {

  const [menu, SetMenu] = useState(false)
  const [query,Setquery] = useState('')
  
  
  return (
    <>
    <Header getquery={Setquery} getMenu={menu} setmenu={SetMenu}/>
    <Section setquery={query} setmenu={SetMenu}/>
    <CartProducts menu={menu} setmenu={SetMenu}/>
  
    </>
  )
}

export default App
