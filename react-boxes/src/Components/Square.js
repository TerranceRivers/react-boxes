import React from 'react'

function Square(props) {
    console.log(props.number)
  return (
    <div className="square"style={{ color: props.color}}>
      square{props.number}
      
    </div>
  )
}

export default Square
