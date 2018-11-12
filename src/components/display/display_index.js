import React from 'react';
import { abc } from '../../constants/abc';
import { OrigText } from './orig_text';
import { Key } from './key';
import { Calc } from './calc';
import { Encrypted } from './encr';

export const Display = ({ keyNum, sourceText }) => {

  return (
    <table id="display">
      <tbody>
        <OrigText
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <Key
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <Calc
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <Encrypted
          keyNum={keyNum}
          sourceText={sourceText}
        />
      </tbody>
    </table>
  )
};
