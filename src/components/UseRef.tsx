import { useRef, useEffect } from 'react';

export default function UseRef({children}) {
  console.log('[ children ]-4', children)
  const myInputRef = useRef(null);

  useEffect(() => {
    // 通过 myRef.current 访问该元素
    myInputRef.current.focus();
    console.log('[  myInputRef ]-9',  myInputRef)
  }, []);

  return (
    <div>
      <input ref={myInputRef} type="text" />
      <Timer />
    </div>
  )
}

function Timer() {
  // count 是一个 useRef 对象，它在多次渲染之间保持不变，并用于计算计时器的值。
  const count = useRef(0);

  const startTimer = () => {
    setInterval(() => {
      count.current += 1;
      console.log(`Timer count: ${count.current}`);
    }, 1000);
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      {count.current}  {/* 不更新页面 */}
    </div>
  );
}
