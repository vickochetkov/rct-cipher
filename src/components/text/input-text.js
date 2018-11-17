import React from 'react';

const InputText = ({ sourceText, onClearClick }) => {

  return (
    <form>
      <input
        className="input-text"
        type={'text'}
        value={sourceText}
        readOnly
      />
      <button className="btn" onClick={() => onClearClick()} >Clear</button>
    </form>
  )
}

export default InputText;
