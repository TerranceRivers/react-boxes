import React from 'react'
import Square from './Square'

function Body() {
  return (
    <div className="body">
       <div> <Square number="1" color="red"/></div> 
       <div> <Square number="2" color="blue"/></div> 
       <div> <Square number="3" color="yellow"/></div> 
    </div>
  )
}

export default Body
