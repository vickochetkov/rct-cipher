import React, { Component } from 'react';
import { Display } from './components/display/display_index';
import IndexKey from './components/key/key_index';
import Text from './components/text/text_index';
import './App.css';
// import

class App extends Component {
  state = {
    keyNum: [15],
    curIdx: null,
    sourceText: "second",
  }

  render() {
    const { keyNum, curIdx, sourceText } = this.state;

    return (
      <div>
        <h1>Visual Vigenère Cipher</h1><br/>
        <Display
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <br/><hr/><br/>
        <IndexKey
          curIdx={curIdx}
          onKeySubmit={keyNum => this.setState({keyNum}) }
        />
        <br/><hr/><br/>
        <Text
          keyNum={keyNum}
          curIdx={curIdx}
          sourceText={sourceText}
        />
      </div>
    )
  }
}

export default App;
