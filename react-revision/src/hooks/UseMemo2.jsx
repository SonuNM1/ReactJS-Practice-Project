import React, { useMemo, useState } from 'react'

function UseMemo2() {

    const nums = new Array(30_000_000).fill(0).map((_,i)=>{
        return{
            index: i,
            isMagical: i === 29_00_000
        }
    })

    const[numbers, setNumebrs] = useState(nums) ; 

    const magical = useMemo(numbers.find(item=>item.isMagical===true),[]) ; // expensive computation

  return (
    <>
        <span>Magical number is:  {magical.index}</span>
    </>
  )
}

export default UseMemo2