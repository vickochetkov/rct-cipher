// esversion: 6
import React from 'react';
import Table from './table';
import InputText from './input-text';
import OutputCipher from './output_cipher';
// import { abc } from '../../constants/abc';

const Text = ({keyNum, curIdx, sourceText, onClearClick, onLetterSelect}) => {

  return (
    <div>
      <h1>Encoding</h1>
      {/*<h2>Source Text</h2>*/}
      <br/>
      <Table
      keyNum={keyNum}
      curIdx={curIdx}
      onLetterSelect={onLetterSelect}
      />
      <br/><hr/><br/>
      <InputText
        sourceText={sourceText}
        /*onInputChange={onInputChange}*/
        onClearClick={onClearClick}
      />
      <OutputCipher
        sourceText={sourceText}
        keyNum={keyNum}
      />
    </div>
  )
};

export default Text;
