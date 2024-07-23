import React, { useState } from 'react'

function AgeValidation() {

    const [isAgeValid, setIsAgeValid] = useState(false);

    /*
    if(isAgeValid){
        return (
            <>
                <h2>You can vote</h2>
            </>
          ) 
    } else{
        return(
            <h2>You cannot vote</h2>
        )
    }*/

    /*
    let age; 

    if(isAgeValid){
        age = <div>You can vote</div>
    } else{
        age = <div>You cannot vote</div>
    }
    return(
        <>{age}</>
    )
    */

    return(
        <>
            {isAgeValid ? <div>You can vote</div> : <div>You cannot vote</div> }
        </>
    )
    
}

export default AgeValidation