// esversion: 6
import React from 'react';
import Table from './table';
import InputText from './input-text';
import OutputCipher from './output_cipher';
import ClearButton from './clear-btn';

const Text = ({keyNum, curIdx, sourceText, onClearClick, onLetterSelect}) => {

  return (
    <div>
      <h1 className="title-2">Word Encoding</h1>
      <br/>
      <h2 className="">Use these buttons to input Text after Crypto WORD was defined</h2>
      <Table
      keyNum={keyNum}
      curIdx={curIdx}
      onLetterSelect={onLetterSelect}
      />
      <div className="wrapper">
        <InputText sourceText={sourceText}/>
        <OutputCipher sourceText={sourceText} keyNum={keyNum}/>
        <ClearButton onClearClick={onClearClick}/>
      </div>
    </div>
  )
};

export default Text;
