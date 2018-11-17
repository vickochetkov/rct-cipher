import React from 'react';
// import { abc } from '../../constants/abc';
import { newAbc } from '../../helpers/new-abc';
import { abcRow } from '../../helpers/abc-row';

const Table = ({ keyNum, curIdx, onLetterSelect }) => {
  return (
    <table>
      <tbody>
        <tr>
          { abcRow(keyNum, curIdx, onLetterSelect) }
        </tr>
        <tr>
          { (keyNum.length > 0) && newAbc(keyNum, curIdx) }
        </tr>
      </tbody>
    </table>
  )
};

export default Table;
