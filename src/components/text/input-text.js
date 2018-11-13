import React from 'react';

const InputText = ({ keyNum, curIdx, sourceText }) => {
  // <form onSubmit={this.handleSubmit} >
  return (
    <form>
      <input
        className="input-text"
        type={'text'}
        // value={}
      />
      <button className="btn">Clear</button>
    </form>
  )
}

export default InputText;
