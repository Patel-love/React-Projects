import { useState } from 'react'
import Array from './Components/Array'
import Product from './Components/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Array/>
    <Product/>
   
    </>
  )
}

export default App
