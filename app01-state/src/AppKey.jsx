import React, { useState } from 'react'

export default function AppKey() {
  
  const date = [
    {id: 1, name: 'Product01'},
    {id: 2, name: 'Product02'},
    {id: 3, name: 'Product03'},
    {id: 4, name: 'Product04'},
    {id: 5, name: 'Product05'},
  ]

  const [product, setProduct] = useState(date)

  const deleteDate = (id)=>{
    setProduct(product.filter((item)=>item.id != id));
  }

  return (
    <div>          
      {product.map((item,index) => {
        return(
        <div key={index}>
          
          {item.id} {item.name}
          <button onClick={()=>deleteDate(item.id)}className="btn btn-secondary">Delete</button>
          
        </div>
      )
      })}
    </div>
  )
}

