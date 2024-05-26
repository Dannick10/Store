import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Section from './components/Section/Section'

function App() {

  const [query,Setquery] = useState('')
  
  
  return (
    <>
    <Header getquery={Setquery}/>
    <Section setquery={query}/>
    </>
  )
}

export default App
