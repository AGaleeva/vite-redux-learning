import { useState } from 'react';
import Button from "components/button";
import { Count, CounterWrapper } from './styles';

const [value, setValue] = useState<number>(0);

const onPlus = () => {
  setValue(value + 1);
};
const onMinus = () => {
  setValue(value - 1);
};


function Counter() {
  return (
    <CounterWrapper>
      <Button name='-' type='button' onClick={onMinus} />
      <Count>{value}</Count>
      <Button name='+' type='button' onClick={onPlus} />
    </CounterWrapper>
  )
}

export default Counter;