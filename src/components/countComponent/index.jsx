import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';

const Count = (props) => {
  // const { count, step, incrementFn, decrementFn, setStepFn, } = props;
  const { count, step, increment, decrement, setStep, } = props;

  return (
    <div>
      <p>
        Count: {count}
      </p>
      <label>
        Step: {' '}
        <input 
          type="number"
          value={step}
          // onChange={({target: {value}}) => setStepCb(value)}
          onChange={({target: {value}}) => setStep(value)}
        />
      </label>
      {/* <button onClick={() => incrementCb()}>Increment</button>
      <button onClick={() => decrementCb()}>Decrement</button> */}
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
}

function mapSrateToProps (state) {
  return{
    ...state.counter,
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     incrementFn: () => dispatch(increment()),
//     decrementFn: () => dispatch(decrement()),
//     setStepFn: (value) => dispatch(setStep(value)),
//   };
// };

const mapDispatchToProps = {
  increment,
  decrement,
  setStep,
}

export default connect(mapSrateToProps, mapDispatchToProps)(Count);
