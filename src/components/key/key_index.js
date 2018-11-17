import React, { Component } from 'react';
// import { inputKey } from './input_key';
import { abc } from '../../constants/abc';

class IndexKey extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleSubmit = kryptoWord => {
    this.props.onKeySubmit(kryptoWord
      .toUpperCase()
      .split('')
      .map(ltr => abc.indexOf(ltr))
    );
  }

  thKeyOutput = (kryptoNum, curIdx) => {
    // console.log(curIdx);
    return (
      kryptoNum
        .map((num, index) =>
        <th key={index} className={`${index === curIdx && 'active-th'}`} >
          <span className="normalFont" >{abc[num]}</span>
          <span className="smallFont">{num}</span>
        </th>
      )
    )
  }

  render() {
    const { keyNum, curIdx } = this.props;
    // console.log(curIdx);

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
              { this.thKeyOutput(keyNum, curIdx) }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default IndexKey;
