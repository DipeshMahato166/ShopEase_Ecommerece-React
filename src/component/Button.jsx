import React from 'react'

const Button = ({props}) => {
  return (
    
    <button  className= {`h-10 rounded-3xl text-white ${props.bg} w-30 cursor-pointer` }>
        {props.text}
    </button>
  )
}

export default Button