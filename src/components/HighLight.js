import React, { Component } from 'react';
import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import 'highlight.js/styles/github.css';

export default class HighLight extends Component {
  constructor(props) {
    super(props);
    this.highLight = React.createRef();
  }
  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    hljs.registerLanguage('bash', bash);
    hljs.highlightBlock(this.highLight.current);
  }

  render() {
    return (
      <pre ref={this.highLight} className={this.props.className}>
        <code>{this.props.children}</code>
      </pre>
    )
  }
};
