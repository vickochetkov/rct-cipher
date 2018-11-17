import React from 'react';
import { encryptor } from '../../helpers/encryptor';
import { abc } from '../../constants/abc';

export const Encrypted = ({ keyNum, sourceText }) => {


  const thEncrypted = encryptor(sourceText, keyNum, abc).map((ltr, index) =>
    <th key={index}>
        <span className="normalFont">{ltr}</span>
        <span className="smallFont">{abc.indexOf(ltr)}</span>
    </th>
  );

  return (
    <tr>
      <th className="label">Encrypted Text</th>
      {(keyNum.length > 0) && (sourceText.length > 0) && thEncrypted}
    </tr>
  )
}
