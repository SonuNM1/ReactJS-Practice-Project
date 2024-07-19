import React, { useState } from 'react'
import './style/Twelve.css' ; 

function Twelve() {

    const [file, setFile] = useState(null) ; 

    const handleFileChange=(e)=>{
        const selectedFile = e.target.files[0] ; 
        setFile(selectedFile) ; 
    }

  return (
    <div className='file-uploader'>
        <input type='file' accept='image/*' onChange={handleFileChange}></input>
        {file && <img src={URL.createObjectURL(file)} alt='Upload' className='uploaded-image'/>}
    </div>
  )
}

export default Twelve