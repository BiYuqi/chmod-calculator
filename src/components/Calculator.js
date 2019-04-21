import React, { Component } from 'react';
import Header from './Header';
import Select from './Select'
import Usage from './Usage';
import { calculator } from '../utils/calculator';
import './Calculator.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerSec: '0',
      groupSec: '0',
      publicSec: '0',
      inputValue: ''
    }
  }

  componentDidMount() {
    this.setState({
      inputValue: `${this.state.ownerSec}${this.state.groupSec}${this.state.publicSec}`
    })
  }

  handleOwner = (data) => {
    this.setState({
      ownerSec: calculator(data),
      inputValue: `${calculator(data)}${this.state.groupSec}${this.state.publicSec}`
    })
  };

  handleGroup = (data) => {
    this.setState({
      groupSec: calculator(data),
      inputValue: `${this.state.ownerSec}${calculator(data)}${this.state.publicSec}`
    })
  };

  handlePublic = (data) => {
    this.setState({
      publicSec: calculator(data),
      inputValue: `${this.state.ownerSec}${this.state.groupSec}${calculator(data)}`
    })
  };

  onTodoChange = (event) => {
    const value = event.target.value;
    if (!/^[1234567]{3}$/.test(value)) {
      const data = value.replace(/[^\d]*/gi, '').substring(0, 3);
      this.setState({
        inputValue: data
      });
    } else {
      this.setState({
        inputValue: event.target.value
      });
    }

  };

  render() {
    const { inputValue } = this.state;

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
          <input
            type="text"
            value={inputValue}
            onChange={this.onTodoChange}
            readOnly
          />
        </div>
        <Usage inputValue={inputValue} />
      </div>
    );
  }
}

export default Calculator;
