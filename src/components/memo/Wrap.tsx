import Filter from './Filter';
import Pager from './Pager';
import { useState,useCallback, useRef, useEffect } from 'react';


function App() {
  // const [count, setCount] = useState(0);
  // const [filter, setFilter] = useState('');
  // const [ pager, setPager] = useState(0);
    // function getList() {
    //   console.log('getList');
      
    // }
    /*  坑3 --->  */
    // const getList = useCallback(() => {
    //   console.log('getList');
    //   /** 坑4：  useCallback 拿不到最新数据*/ 
    //   console.log('count',count);
      
    // },[count])  // 依赖为空，只执行一次 ，需要传入 count 作为依赖

  // 坑7 解决方案
  // const filter = useRef('');
  // const pager = useRef(0);  // 更新不会引发视图更新
  // const setFilter = (value) => {
  //   filter.current = value;
  // }
  // const setPager = (value) => {
  //   pager.current = value;
  // } 每次都会触发更新
  // const setFilter = useCallback((value) => {
  //   filter.current = value;
  // }
  // ,[])
  // const setPager = useCallback((value) => {
  //   pager.current = value;
  // }
  // ,[])
  

    /*  坑5 --->  */
    // const getList = useCallback(() => {
    //   console.log('getList');
    //   /** 坑4：  useCallback 拿不到最新数据*/ 
    //   console.log(count,filter.current,pager.current);
      
    //  /* 坑7： count 变化 ，又引发子组件更新 （回到起点） */ 
    // },[count ])  // 依赖为空，只执行一次 ，需要传入 count 作为依赖


    /* 最后： */
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('');
    const [ pager, setPager] = useState(0); 
    useEffect(() => {
      console.log('getList');
      console.log(count,filter,pager);
    }
    ,[count,filter,pager])  
  return (
    <>
      
        <div className="app">
          <h2>App</h2>
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </div>
          <div className='my'></div>
          <Filter   setFilter={setFilter} />
          <div className='my'></div>
          <Pager  setPager={setPager} />
      
    </>
  );
}

export default App ;
