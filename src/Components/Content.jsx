import React, { useState } from 'react';
import Button from './Buttons';

function Content() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className='NumberSide'>
        {count}
      </div>
      <div className='ButtonsSide'>
        <Button text='Увеличить' className='plus' onClick={handlePlus} />
        <Button text='Уменьшить' className='minus' onClick={handleMinus} />
        <Button text='Сбросить' className='reset' onClick={handleReset} />
      </div>
    </div>
  );
}

export default Content;