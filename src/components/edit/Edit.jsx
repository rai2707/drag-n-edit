import React, { useState } from 'react';

const Edit = () => {
  const [textValue, setTextValue] = useState('');
  const [addText, setAddText] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const onTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const addTextHandler = () => {
    if (textValue.trim() !== '') {
      if (isEditing) {
        const updatedTexts = addText.map((text, index) => index === currentIndex ? textValue : text);
        setAddText(updatedTexts);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setAddText([...addText, textValue]);
      }
      setTextValue('');
    }
  };

  const onEditHandler = (index) => {
    setTextValue(addText[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const onRemoveHandler = (index) => {
    setAddText(addText.filter((ele, i) => i !== index));
    if (isEditing && index === currentIndex) {
      setTextValue('');
      setIsEditing(false);
      setCurrentIndex(null);
    }
  };

  const onRemoveAllHandler = () => {
    setAddText([]);
    setTextValue('');
    setIsEditing(false);
    setCurrentIndex(null);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Edit Functionality</h1>
      <div>
        <input type="text" placeholder="Enter Text" value={textValue} onChange={onTextChange} />
        <button onClick={addTextHandler}>
          {isEditing ? 'UPDATE' : 'ADD'}
        </button>
        {addText.length > 0 && (
          <button onClick={onRemoveAllHandler}>DELETE ALL</button>
        )}
        <h2>
          {addText.length === 0 ? (
            <div>No Data Available</div>
          ) : (
            addText.map((ele, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h4>{ele}</h4>
                <button onClick={() => onRemoveHandler(index)}>DELETE</button>
                <button onClick={() => onEditHandler(index)}>EDIT</button>
              </div>
            ))
          )}
        </h2>
      </div>
    </div>
  );
};

export default Edit;

// import React, { useState } from 'react'

// const Edit = () => {
//   const [textValue, setTextValue] = useState('')
//   const [addText, setAddText] = useState([])
//   const onTextHandler = (e) =>{
//     setTextValue(e.target.value)
//   }
//   const clickHandler = () =>{
//     if(textValue.trim() !== ''){
//       setAddText([...addText, textValue])
//     setTextValue('')
//     }
//   }
//   const onDelHandler = (index) =>{
//     setAddText(addText.filter((ele, i) => i !== index))
//     setTextValue('')
//   }
//   return (
//     <div>
//     <h2>
//     {addText.map((ele, index) =>{
//       return(
//         <div key={ele}>
//           <h3>{ele}</h3>
//           <button onClick={() => onDelHandler(index)}>Del</button>
//         </div>
//       )
//     })}
//     </h2>
//       <input onChange={onTextHandler} value={textValue} placeholder='Enter text' type='text'/>
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

// export default Edit

