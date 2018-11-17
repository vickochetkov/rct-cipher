import React, { Component } from 'react';
import { Display } from './components/display/display_index';
import IndexKey from './components/key/key_index';
import Text from './components/text/text_index';
// import { encryptor } from './helpers/encryptor';
// import { abc } from './constants/abc';
import './App.css';

class App extends Component {
  state = {
    keyNum: [],
    curIdx: 0,
    sourceText: "",
  }

  clearHandle = () => {
    return (
      this.setState({
        keyNum: [],
        curIdx: 0,
        sourceText: "",
      })
    )
  }

  render() {
    const { keyNum, curIdx, sourceText } = this.state;
    const curIndex = sourceText.length%keyNum.length;

    return (
      <div>
        <h1>Visual Cipher</h1><br/>
        <Display
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <br/><hr/><br/>
        <IndexKey
          keyNum={keyNum}
          curIdx={curIdx}
          onKeySubmit={keyNum => this.setState({
            keyNum,
            curIdx: 0,
            sourceText: "",
          })}
        />
        <br/><hr/><br/>
        <Text
          keyNum={keyNum}
          curIdx={curIdx}
          sourceText={sourceText}
          onClearClick={this.clearHandle}
          onLetterSelect={letter => this.setState({
            sourceText: sourceText + letter,
            curIdx: curIndex})
          }
        />
      </div>
    )
  }
}

export default App;
