import React from 'react';
import HighLight from './HighLight';

const Usage = ({ inputValue }) =>  {
  return (
    <div className="use-age">
      <h2 className="center mb20">Two way to Usage:</h2>
      <HighLight className="calculator-display__code-block">
        <div>chmod -R ${inputValue} fileName/DirName</div>
      </HighLight>
    </div>
  );
};

export default Usage;
