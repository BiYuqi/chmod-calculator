import React, { Component } from 'react';
import CheckBox from './CheckBox';
import './Select.scss';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title || 'default',
      read: props.read || false,
      write: props.write || false,
      execute: props.execute || false
    }
  }

  handleRead = (event) => {
    this.setState({
      read: event.target.checked
    }, () => this.setSelectChangeData());
  };

  handleWrite = (event) => {
    this.setState({
      write: event.target.checked
    }, () => this.setSelectChangeData());
  };

  handleExecute = (event) => {
    this.setState({
      execute: event.target.checked
    }, () => this.setSelectChangeData());
  };

  setSelectChangeData() {
    this.props.onSelectChange({
      read: this.state.read,
      write: this.state.write,
      execute: this.state.execute
    })
  }

  render() {
    const { title, read, write, execute } = this.state;

    return (
      <div className="chmod-select">
        <h2>{ title }</h2>
        <div className="chmod-select-container">
          <CheckBox onChange={this.handleRead} title={title} text="read" defaultValue={read} />
          <CheckBox onChange={this.handleWrite} title={title} text="write" defaultValue={write} />
          <CheckBox onChange={this.handleExecute} title={title} text="execute" defaultValue={execute} />
        </div>
      </div>
    );
  }
}

export default Select;
