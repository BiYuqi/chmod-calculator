import React, { Component } from 'react';
import Header from './Header';
import Select from './Select'
import Usage from './Usage';
import { calculator, parseCalculatorToSymbol } from '../utils/calculator';
import './Calculator.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerSec: '0',
      ownerSym: '---',
      groupSec: '0',
      groupSym: '---',
      publicSec: '0',
      publicSym: '---',
      inputValue: '',
      symbolValue: ''
    }
  }
  // TODO optimize below function
  componentDidMount() {
    this.setState({
      inputValue: `${this.state.ownerSec}${this.state.groupSec}${this.state.publicSec}`,
      symbolValue: `${this.state.ownerSym}${this.state.groupSym}${this.state.publicSym}`,
    })
  }

  handleOwner = (data) => {
    this.setState({
      ownerSec: calculator(data),
      ownerSym: parseCalculatorToSymbol(data),
      inputValue: `${calculator(data)}${this.state.groupSec}${this.state.publicSec}`,
      symbolValue: `${parseCalculatorToSymbol(data)}${this.state.groupSym}${this.state.publicSym}`,
    })
  };

  handleGroup = (data) => {
    this.setState({
      groupSec: calculator(data),
      groupSym: parseCalculatorToSymbol(data),
      inputValue: `${this.state.ownerSec}${calculator(data)}${this.state.publicSec}`,
      symbolValue: `${this.state.ownerSym}${parseCalculatorToSymbol(data)}${this.state.publicSym}`,
    })
  };

  handlePublic = (data) => {
    this.setState({
      publicSec: calculator(data),
      publicSym: parseCalculatorToSymbol(data),
      inputValue: `${this.state.ownerSec}${this.state.groupSec}${calculator(data)}`,
      symbolValue: `${this.state.ownerSym}${this.state.groupSym}${parseCalculatorToSymbol(data)}`,
    })
  };

  render() {
    const { inputValue, symbolValue, ownerSym, groupSym, publicSym } = this.state;

    return (
      <div className="calculator">
        <Header />
        <div className="calculator-main">
          <Select onSelectChange={this.handleOwner} title="Owner" />
          <Select onSelectChange={this.handleGroup} title="Group" />
          <Select onSelectChange={this.handlePublic} title="Public" />
        </div>
        <div className="calculator-display">
          <h2>Linux Permissions:</h2>
          <div className="calculator-display__input">
            <input type="text" value={inputValue} readOnly/>
            <input type="text" value={symbolValue} readOnly/>
          </div>
        </div>
        <Usage inputValue={inputValue} symbolValue={{ownerSym, groupSym, publicSym}} />
      </div>
    );
  }
}

export default Calculator;
