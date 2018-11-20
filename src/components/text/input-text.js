import React from 'react';

const InputText = ({ sourceText }) => {

  return (
    <div className="box a">
      <h2>Original Text</h2><br/>
      <input
        type={'text'}
        value={sourceText}
        readOnly
      />
      {/*<button className="btn" onClick={() => onClearClick()} >Clear All</button>*/}
    </div>
  )
}

export default InputText;
