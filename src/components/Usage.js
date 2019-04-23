import React from 'react';
import HighLight from './HighLight';
import './Usage.scss';

const passDynamicParam = ({ inputValue, symbolValue }) => {
  const { ownerSym, groupSym, publicSym } = symbolValue;
  return `
    1:数字类型改变文件权限
    
    # xyz:数字类型的权限属性，为rwx属性数值的相加
    # —R:进行递归，可修改子目录下的文件
    chmod [-R] xyz 文件名/目录名
    
    # 修改test.txt的权限为 ${inputValue}
    chmod ${inputValue} test.txt
    
    2:符号类型改变文件权限
    
    # 这种方式就是用u,g,o来代表三种身份的权限
    # 此外a代表all，即全部身份（owner、group、others)
    
    # 修改test.txt的权限为 ${ownerSym}${groupSym}${publicSym}
    chmod u=${ownerSym}, g=${groupSym}, o=${publicSym} test.txt
    
    # 去掉test.txt所有身份的x权限
    chmod a-x test.txt
    
    # 再添加test.txt所有身份的x权限
    chmod a+x test.txt
  `;
};

const Usage = ({ inputValue, symbolValue }) =>  {
  console.log(symbolValue);
  return (
    <div className="use-age">
      <h2 className="center mb20">Two ways to change:</h2>
      <HighLight markdown={passDynamicParam({ inputValue, symbolValue })} />
    </div>
  );
};

export default Usage;
