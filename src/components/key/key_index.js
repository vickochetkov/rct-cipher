import React, { Component } from 'react';
// import { inputKey } from './input_key';
import { abc } from '../../constants/abc';

class IndexKey extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()

    this.state = {
      errorMsg: false,
    }
  }

  handleSubmit = kryptoWord => {
    const checkWord = /^[a-z]{3,10}$/i
    if (checkWord.test(kryptoWord)) {
      this.setState({ errorMsg: false });
      this.props.onKeySubmit(kryptoWord
        .toUpperCase()
        .split('')
        .map(ltr => abc.indexOf(ltr))
      )
    } else {
      this.setState({ errorMsg: true })
    }
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

    return (
      <div>
        <h1 className="title-2">Crypto WORD</h1><br/>
        <div className="form-holder">
          <form onSubmit={e =>
            { e.preventDefault();
            this.handleSubmit(this.input.current.value) }
          } >
            {this.state.errorMsg && <h3 className="errMsg">Error! Use single word 3-10 <u>characters</u> long instead!</h3>}
            <input
              type={'text'}
              defaultValue=''
              placeholder = {'Enter Crypto Word*'}
              ref={this.input}
            />
            <button className="btn subm" type="submit">Submit</button>
          </form>
          <h4>* use single word 3-10 characters long</h4>
        </div>
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
