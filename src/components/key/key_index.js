import React, { Component } from 'react';
// import { abc } from '../constants/abc';

class InputKey extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.state = {
      kryptoWord: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      kryptoWord: this.input.current.value
    })
  }

  thTag = () => {
    this.state.kryptoWord
      .split('')
      .toUpperCase()
      .map((letter, index) =>
      <th key={index}>
        <span className="normalFont" >{letter}</span>
        <span className="smallFont">{index}</span>
      </th>
    )
  }

  render() {
    // const { kryptoWord } = this.state
    // console.log(this.state);
    return (
      <div>
        <h1>Configuration</h1>
        <h2>Keyword</h2>
        <form onSubmit={this.handleSubmit} >
          <input
            className="input-key"
            type={'text'}
            defaultValue=''
            placeholder = {'Enter Krypto Key Here'}
            ref={this.input}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
        <br/>
        <table>
          <tbody>
            <tr>
              <th>
                <span className="normalFont">N</span>
                <span className="smallFont">13</span>
              </th>
              <th className="activeTh">
                <span className="normalFont">T</span>
                <span className="smallFont">19</span>
              </th>
              <th>
                <span className="normalFont">K</span>
                <span className="smallFont">10</span>
              </th>

              {/* { this.thTag } */}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default InputKey;
