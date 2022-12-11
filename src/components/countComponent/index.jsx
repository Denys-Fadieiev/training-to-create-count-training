import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/languageSlice';
import CONSTANTS from '../../constants';

const {
  LANGUAGE: { UA_UA, EN_US, RU_RU },
  LANGUAGE,
} = CONSTANTS;

const translations = new Map([
  [
    UA_UA.VALUE,
    {
      countText: 'Рахунок',
      stepText: 'Крок',
      incrementText: 'Збільшити',
      decrementText: 'Зменшити',
    },
  ],
  [
    EN_US.VALUE,
    {
      countText: 'Count',
      stepText: 'Step',
      incrementText: 'Increment',
      decrementText: 'Decrement',
    },
  ],
  [
    RU_RU.VALUE,
    {
      countText: 'Счет',
      stepText: 'Шаг',
      incrementText: 'Увеличить',
      decrementText: 'Уменьшить',
    },
  ],
]);

const Count = (props) => {
  // const { count, step, incrementFn, decrementFn, setStepFn, } = props;
  const { 
    count, 
    step,
    lang,
    increment, 
    decrement, 
    setStep,
    setLang,
  } = props;

  const translation = translations.get(lang);
  const { countText, stepText, incrementText, decrementText } = translation;
console.log(translation)
  return (
    <div>
      <select
        value={lang}
        onChange={({target: { value }}) => setLang(value)}
      >
        {Object.values(LANGUAGE).map((langObj) => (
          <option key={langObj.VALUE} value={langObj.VALUE}>
            {langObj.OPTION_TEXT}
          </option>
        ))}
      </select>
      <p>
        {countText}: {count}
      </p>
      <label>
        {stepText}: {' '}
        <input 
          type="number"
          value={step}
          // onChange={({target: {value}}) => setStepCb(value)}
          onChange={({target: {value}}) => setStep(value)}
        />
      </label>
      {/* <button onClick={() => incrementCb()}>Increment</button>
      <button onClick={() => decrementCb()}>Decrement</button> */}
      <button onClick={() => increment()}>{incrementText}</button>
      <button onClick={() => decrement()}>{decrementText}</button>
    </div>
  );
}

function mapSrateToProps (state) {
  return{
    ...state.counter,
    lang: state.lang,
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
  setLang,
}

export default connect(mapSrateToProps, mapDispatchToProps)(Count);
