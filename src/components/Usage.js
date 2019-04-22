import React from 'react';
import HighLight from './HighLight';
import './Usage.scss';

const passDynamicParam = (inputValue) => {
  return `
    First:
    
    # xyz:数字类型的权限属性，为rwx属性数值的相加
    # —R:进行递归，可修改子目录下的文件
    chmod [-R] xyz 文件名/目录名
    
    # 修改test.txt的权限为${inputValue}
    chmod ${inputValue} test.txt
  `;
};

const Usage = ({ inputValue }) =>  {
  return (
    <div className="use-age">
      <h2 className="center mb20">Two ways to change:</h2>
      <HighLight markdown={passDynamicParam(inputValue)} />
    </div>
  );
};

export default Usage;
