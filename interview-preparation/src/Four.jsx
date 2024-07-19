
import React from 'react';
import './style/Four.css' ; 

function Four() {

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'] ; 

  return (
    <div className='outer-container'>
        <ul className='item-list'>
        {items.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    </div>
  )
}

export default Four