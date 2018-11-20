import React from 'react';

const ClearButton = ({onClearClick}) => {

  return (
    <form className="box c">
      <button className="btn clear" onClick={() => onClearClick()} >Clear All</button>
    </form>
  )
}

export default ClearButton;
