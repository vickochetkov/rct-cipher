// esversion: 6
import React from 'react';
import { abc } from '../../constants/abc';

const Table = () => {
  const thTag = abc    
    .map((letter, index) =>
      <th key={index} className="buttons">
        <button className="btn-abc">
          <span className="abc-font" >{letter}</span>
          <span className="smallFont">{index}</span>
        </button>
      </th>
    )

  return (
    <table>
      <tbody>
        <tr>
          { thTag }
        </tr>
        <tr>
          <th>
            <span className="normalFont" >S</span>
            <span className="smallFont">18</span>
          </th>
          <th>
            <span className="normalFont" >T</span>
            <span className="smallFont">19</span>
          </th>
        </tr>
      </tbody>
    </table>
  )
};

export default Table;
