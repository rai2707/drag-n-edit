import React, { useState } from 'react'

const Edit = () => {
  const [textValue, setTextValue] = useState('');
  const [addText, setAddText] = useState('');
  const onTextChange = (e) =>{
    setTextValue(e.target.value)
  }
  const addTextHandler = () =>{
    setAddText(textValue)
    console.log(textValue);
    
  }
  const onRemoveHandler = () =>{
    setAddText('')
    setTextValue('')
  }
  return (
    <div>
      <h1>Edit Functionality</h1>
      <div>
      <h2>{addText}</h2>
        <input type='text' placeholder='Enter Text' value={textValue} onChange={onTextChange}/>
        <button onClick={addTextHandler}>ADD</button>
        <button onClick={onRemoveHandler}>DELETE</button>
      </div>
    </div>
  )
}

export default Edit
