import './App.css';
// import FeedbackForm1 from './components/FeedbackForm1';
// import Form from './components/Form';
// import WrapMemo from './components/memo/Wrap';
// import MovingDot from './components/MovingDot';
// import NameForm from './components/NameForm';
// import Panel from './components/Panel';
import SyncedInputs from './components/SyncedInputs';
function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <>
      {/* <WrapMemo />  */}
      {/* <Form status='success' /> */}
      {/* <MovingDot /> */}
      {/* <FeedbackForm1 /> */}
      {/* <NameForm/> */}
      <SyncedInputs />
      {/* <Counter />
      <Counter /> */}

      <div>
        {isFancy ? <div><Counter isFancy={true} /></div> : <Counter isFancy={false} />}
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked);
            }}
          />
          使用好看的样式
        </label>
      </div>
    </>
  );
}
import { useState } from 'react';

// export default function App() {
//   return (
//     <div>
//     </div>
//   );
// }

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>加一</button>
    </div>
  );
}

export default App;
