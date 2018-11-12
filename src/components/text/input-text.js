import React from 'react';

const InputText = () => {
  // <form onSubmit={this.handleSubmit} >
  return (
    <form>      
      <input
        className="input-text"
        type={'text'}
        // value={}
        // placeholder = {'Type Word Here'}
      />
      <button className="btn">Clear</button>
    </form>
  )
}

export default InputText;
