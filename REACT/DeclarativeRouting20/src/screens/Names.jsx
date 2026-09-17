import React from 'react'
import { useParams } from 'react-router'

const Names = () => {

    let {name} = useParams()
    console.log(name)


  return ( 
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Names
