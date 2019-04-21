import React, { Component } from 'react';
import hljs from 'highlight.js/lib/highlight';
import shell from 'highlight.js/lib/languages/shell';
import 'highlight.js/styles/github.css';
import './HighLight.scss';

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
    hljs.registerLanguage('shell', shell);
    hljs.highlightBlock(this.highLight.current)
  }

  render() {
    const { children } = this.props;
    return (
      <pre ref={this.highLight} className={`highlight-default ${this.props.className}`}>
        <code>{children}</code>
      </pre>
    )
  }
};
