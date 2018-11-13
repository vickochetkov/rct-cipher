// esversion: 6
import React from 'react';
import Table from './table';
import InputText from './input-text';
import OutputCipher from './output_cipher';
// import { abc } from '../../constants/abc';

const Text = ({keyNum, curIdx, sourceText}) => {

  return (
    <div>
      <h1>Encoding</h1>
      {/*<h2>Source Text</h2>*/}
      <br/>
      <Table />
      <br/><hr/><br/>
      <InputText
        keyNum={keyNum}
        curIdx={curIdx}
        sourceText={sourceText}
      />
      <OutputCipher />
    </div>
  )
};

export default Text;
