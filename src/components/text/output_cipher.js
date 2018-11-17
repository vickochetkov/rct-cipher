import React from 'react';
import { encryptor } from '../../helpers/encryptor';
import { abc } from '../../constants/abc';

const OutputCipher = ({sourceText, keyNum}) => {
  const cipher = encryptor(sourceText, keyNum, abc).join('');

  return (
    <div>
      <h2>Cipher Text</h2><br/>
      <input
        className="output"
        type={'text'}
        readOnly
        value={cipher}
      /><br/>
    </div>
  )
}

export default OutputCipher;
