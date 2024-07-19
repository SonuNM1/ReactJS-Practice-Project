import React, { useEffect, useState } from 'react' ; 
import './style/Six.css' ; 


function Six() {

    const [data, setData] = useState(null) ; 

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data) ; 
            setData(data) ; 
        })
    },[])

  return (
    <div className='container'>
        {
            data ? (
                <div className='data-card'>
                    <h1>Id: {data.id}</h1>
                    <h1>Title : {data.title}</h1>
                    <p>Body: {data.body}</p>
                </div>
            ): (
                <p className='loading'>Loading . . . .</p>
            )
        }
    </div>
  )
}

export default Six