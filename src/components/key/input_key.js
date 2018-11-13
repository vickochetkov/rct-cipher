import React from 'react';

export const InputKey = () => {
  return (
    <form onSubmit={e =>
      { e.preventDefault();
      this.handleSubmit(this.input.current.value) }
    } >
      <input
        className="input-key"
        type={'text'}
        defaultValue=''
        placeholder = {'Enter Crypto Key Here'}
        ref={this.input}
      />
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}
