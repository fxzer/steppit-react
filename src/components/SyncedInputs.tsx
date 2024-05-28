import { useState } from 'react';

export default function SyncedInputs() {
  return (
    <>
      <Input label="第一个输入框" />
      <Input label="第二个输入框" />
    </>
  );
}

function Input({ label }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
