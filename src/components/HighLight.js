import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import 'highlight.js/styles/github.css';
import './HighLight.scss';

const renderMarked = (markdown) => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: (code) => highlight.highlightAuto(code).value,
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  return {__html: marked(markdown)}
};

const HighLight = ({ markdown }) => {
  return (
    <div
      className="fire-highlight"
      dangerouslySetInnerHTML={renderMarked(markdown)}
    />
  )
};

export default HighLight;
