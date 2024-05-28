//组件A 
import { useState } from "react";
import B from "./B";
import MyContext from './MyContext.js';

function A() {
  const [va, setVa] = useState('a')
  return (
    // 传递数据组件里使用Provide包裹着子组件，并且在用value属性来传递数据
    <MyContext.Provider value={va}> 
      {/* 这里可以包含你的组件树 */} 
      <B />
      <button onClick={() =>setVa('b')}>按钮</button>
    </MyContext.Provider> 
  );
}
export default A;
