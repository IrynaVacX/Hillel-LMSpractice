import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';
import '../styles/Counter.css';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button className="counter-button increment" onClick={() => dispatch(increment())}>+</button>
        <button className="counter-button decrement" onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default Counter;

