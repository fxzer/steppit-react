import React, { useState, useEffect } from 'react';
/* 
  useEffect(callback, dependencies);
  callback: 在组件渲染后执行的副作用操作的函数
  dependencies（可选）: 这是一个数组，它包含影响副作用操作执行的依赖项。当依赖项发生变化时，副作用操作会被重新执行。
 */
function Example() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('title 1');

  useEffect(() => {
    document.title = `You clicked ${count} times,${title}`;
    console.log('[ document.title ]-13', document.title)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setTitle('title 2')}>Click me title</button>
    </div>
  );
}
export default Example;
