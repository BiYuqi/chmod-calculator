import React from 'react';
import HighLight from './HighLight';
import './Usage.scss';

const Usage = ({ inputValue }) =>  {
  return (
    <div className="use-age">
      <h2 className="center mb20">Two ways to change:</h2>
      <HighLight className="calculator-display__code-block">
        # xyz:数字类型的权限属性，为rwx属性数值的相加 <br />
        # —R:进行递归，可修改子目录下的文件 <br />
        chmod [-R] xyz 文件名/目录名 <br /><br />
        # 修改test.txt的权限为777 <br />
        chmod 777 test.txt <br />
      </HighLight>
    </div>
  );
};

export default Usage;
