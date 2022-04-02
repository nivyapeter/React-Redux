import React from 'react'
import { useSelector } from 'react-redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
  return (
    <div>
        <h2>Number of cakes - </h2>
        <button>BUY CAKES</button>
    </div>
  )
}

export default HooksCakeContainer