import MyContext from './MyContext.js';

function C() {
  return (
    // 接受数据的组件导入定义的context使用Consumer来接收,可接收到的是一个函数。
    <MyContext.Consumer>
      {value => <span>{value}</span>}   
    </MyContext.Consumer>
  );
}

export default C;
