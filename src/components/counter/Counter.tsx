// import { useState } from 'react';
import Button from "components/button";
import { Count, CounterWrapper } from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {actions} from 'store/redux/counter/counterSlice';
import {counterState} from 'store/redux/counter/selectors';

function Counter() {

  // СПОСОБ РАБОТЫ COUNTER ЧЕРЕЗ useState(), Т.Е. ЧЕРЕЗ ЛОКАЛЬНОЕ ХРАНИЛИЩЕ ДАННЫХ

  // const [count, setCount] = useState<number>(0) 

  // const onPlus = () => {
  //   setCount((prevValue: number) => prevValue + 1)
  // }
  // const onMinus = () => {
  //   setCount((prevValue: number) => prevValue - 1)
  // }

  // const onDivide = () => {
  //   setCount((prevValue: number) => prevValue / 2)
  // }

  // const onMultiply = () => {
  //   setCount((prevValue: number) => prevValue * 2
  //     )
  // }

  // создаем функцию dispatch - функция, вызывающая action, говорящая store какой именно reducer нужно вызвать
  const dispatch = useDispatch();
  const counter = useSelector(counterState);  

  const onPlus = () => {
    // "диспачим экшн" под именем add

    dispatch(actions.add())
  }

  const onMinus = () => {
    dispatch(actions.minus())
  }

  const onMultiply = () => {
    dispatch(actions.multiply(3))
  }

  const onDivide = () => {
    dispatch(actions.divide(4))
  }

  return (
    <CounterWrapper>
      {/* СПОСОБ РАБОТЫ COUNTER ЧЕРЕЗ useState(), Т.Е. ЧЕРЕЗ ЛОКАЛЬНОЕ ХРАНИЛИЩЕ
      ДАННЫХ
      <Button name="/" type="button" onClick={onDivide} />
      <Button name="-" type="button" onClick={onMinus} />
      <Count>{Number(count.toFixed(2))}</Count>
      <Button name="+" type="button" onClick={onPlus} />
      <Button name="*" type="button" onClick={onMultiply} /> */}

      <Button name="divide" type="button" onClick={onDivide} />
      <Button name="minus" type="button" onClick={onMinus} />
      <Count>{Number(counter.count.toFixed(2))}</Count>
      <Button name="plus" type="button" onClick={onPlus} />
      <Button name="multiply" type="button" onClick={onMultiply} />
    </CounterWrapper>
  )
}

export default Counter;