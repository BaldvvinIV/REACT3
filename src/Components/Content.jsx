import React, { useState } from 'react';
import Button from './Buttons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Content() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleplus = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleminus = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <div className='NumberSide'>
        {count}
      </div>
      <div className='ButtonsSide'>
        <Button text='Увеличить' className='plus' onClick={handleplus}/>
        <Button text='Уменьшить' className='minus' onClick={handleminus}/>
        <Button text='Сбросить' className='reset'  onClick={handleReset}/>
      </div>
    </div>
  );
}

export default Content;