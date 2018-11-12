import React from 'react';
import { abc } from '../../constants/abc';

export const Encrypted = ({ keyNum, sourceText }) => {
  const cipher = (key, str) => {
  	return str
      .toUpperCase()
      .split('')
      .map((ltr, i) => abc[(abc.indexOf(ltr) + key[i % key.length]) % abc.length]);
  };

  const thEncrypted = cipher(keyNum, sourceText).map((ltr, index) =>
    <th key={index}>
        <span className="normalFont">{ltr}</span>
        <span className="smallFont">{abc.indexOf(ltr)}</span>
    </th>
  );

  return (
    <tr>
      <th className="label">Encrypted Text</th>
      {keyNum && sourceText && thEncrypted}
    </tr>
  )
}
