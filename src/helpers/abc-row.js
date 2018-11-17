import React from 'react';
import { abc } from '../constants/abc';

export const abcRow = (keyNum, curIdx, onLetterSelect) => {
  return (
    abc.map((letter, index) =>
      <th key={index} className="buttons">
        <button className="btn-abc" onClick={() => (keyNum.length > 0) && onLetterSelect(letter)} >
          <span className="abc-font" >{letter}</span>
          <span className="smallFont">{index}</span>
        </button>
      </th>
    )
  )
}
