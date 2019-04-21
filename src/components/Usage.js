import React from 'react';
import HighLight from './HighLight';
import './Usage.scss';

const usageData = [
  '# xyz:数字类型的权限属性，为rwx属性数值的相加',
  '# —R:进行递归，可修改子目录下的文件',
  'chmod [-R] xyz 文件名/目录名',
  '# 修改test.txt的权限为777',
  'chmod 777 test.txt'
]

const Usage = ({ inputValue }) =>  {
  return (
    <div className="use-age">
      <h2 className="center mb20">Two ways to change:</h2>
      {
        usageData.map((item, index) => {
          return (
            <HighLight key={index} className="calculator-display__code-block">
              {item}
            </HighLight>
          )
        })
      }
    </div>
  );
};

export default Usage;
