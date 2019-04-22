import React, { Component } from 'react';
import marked from 'marked';
import 'highlight.js/styles/github.css';
import './HighLight.scss';

export default class HighLight extends Component {
  constructor(props) {
    super(props);
  }

  renderMarked() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code) => require('highlight.js').highlightAuto(code).value,
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    return {__html: marked(this.props.markdown)}
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.renderMarked()} />
    )
  }
};
