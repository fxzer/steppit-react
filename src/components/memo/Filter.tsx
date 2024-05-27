import { memo, useRef } from 'react';

 function Filter ( { setFilter}) {
   // 问题：使用 memo 后，父组件传入的函数 getList,更新父组件 count， 又会触发 Filter 更新 
   // 原因： 父组件函数重新执行，导致传入的函数地址发生变化
   // 解决： 使用 useCallback 缓存函数地址
  console.log('Filter Render');
  const inputValue = useRef('');
  return (<div className='filter'>
    {/* <input type="text" placeholder="Search..."  onChange={(e) => setFilter(e.target.value)}/> */}
    <input type="text" placeholder="Search..."  onChange={(e) => inputValue.current =e.target.value}/>
    {/* <button onClick={getList}>Search</button> */}
    <button onClick={() =>setFilter(inputValue.current)}>Search</button>
  </div> )
}


export default memo(Filter);
