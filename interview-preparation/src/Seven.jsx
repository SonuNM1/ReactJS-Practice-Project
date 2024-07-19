import React, { useEffect, useState } from 'react' ; 
import './style/Seven.css' ; 

function Seven() {

    const [time, setTime] = useState(60) ; 

    useEffect(()=>{
        if(time > 0){
            const timer = setTimeout(()=>setTime(time-1), 1000)
            return ()=> clearTimeout(timer)
        }
    },[time])

  return (
    <div className='container'>
        <div className='timer'>
        Time Left: {time} seconds
        </div> 
    </div>
  )
}

export default Seven