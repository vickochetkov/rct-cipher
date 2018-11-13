import React, { Component } from 'react';
// import { inputKey } from './input_key';
import { abc } from '../../constants/abc';

class IndexKey extends Component {
  constructor(props) {
    super(props)

    this.state = {
      kryptoWord: '',
    }

    this.input = React.createRef()
  }

  handleSubmit = kryptoWord => {
    this.setState({kryptoWord});
    this.props.onKeySubmit(kryptoWord
      .toUpperCase()
      .split('')
      .map(ltr => abc.indexOf(ltr))
    );
  }

  thKeyOutput = kryptoWord => {
    // console.log(kryptoWord);
    return (
      kryptoWord
        .toUpperCase()
        .split('')
        .map((letter, index) =>
        <th key={index}>
          <span className="normalFont" >{letter}</span>
          <span className="smallFont">{abc.indexOf(letter)}</span>
        </th>
      )
    )
  }

  render() {
    const { kryptoWord } = this.state

    return (
      <div>
        <h1>Crypto WORD</h1>
        <form onSubmit={e =>
          { e.preventDefault();
          this.handleSubmit(this.input.current.value) }
        } >
          <input
            className="input-key"
            type={'text'}
            defaultValue=''
            placeholder = {'Enter Crypto Key Here'}
            ref={this.input}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
        <br/>
        <table>
          <tbody>
            <tr>
              { this.thKeyOutput(kryptoWord) }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexKey;
