import React, { useState } from 'react';
// 坑：数据更新不及时
function State() {
  const [count, setCount] = useState(0);

  const inc = () => {
    // setCount(count + 1);
    // setCount(count + 1); 
    // console.log('[ count ]-8', count) // 这里的 count 还是 0 ,页面 1
    
    // 新值依赖旧值的计算，传箭头函数拿到旧值，再进行就算，返回新值
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);  //  页面 2
    
  };
  return ( <>
  <button onClick={inc}>add</button>  {count}
  </> );
}

export default State;
