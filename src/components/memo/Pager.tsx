
import { useState  ,memo} from 'react';

function Pager ({ setPager}) {
  const [page, setPage] = useState(0);
  console.log('Pager Render');
  return (<div className='pager'>
    <button>Previous</button>
    <button onClick={() =>setPage(page+1)}>Next</button>  {/*  触发更新 */}
    {Array.from({length: 10}).map((_, index) => {
      return <button key={index} onClick={() => {
        setPager(index) ;
        // getList()   /* 坑6： 更改完数据拿不到最新数据： 原因： setState 是异步的， 解决： ---> getList(index) */
      }}>{index + 1}</button>
    })}
    <div>
      {/*  App count is {count}  触发更新 */}
    </div>
  </div> )
}

// React.memo 处理导出的组件： 只会在 props 或 自身 state 发生变化时重新渲染组件
export default memo(Pager);
