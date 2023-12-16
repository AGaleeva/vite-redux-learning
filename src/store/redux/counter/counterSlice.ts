import {createSlice, PayloadAction} from'@reduxjs/toolkit';

import {CounterInitialState} from './types';

// counterInitialState - это дефолтное состояние для counter state
const counterInitialState: CounterInitialState = {
  count: 0
}

// создать slice - это функция, принимающая в себя объект и которая передает данные в глобальный store
// создает reducers и actions

const counterSlice = createSlice({

  // имя по которому следим за состоянием в store
  // когда будет вызываться reducer, по этому имени будет происходить отслеживание изменений в state при запросах (Redux Devtools)

  name: 'COUNTER',

  // создаем состояние для store, передав ему initialState

  initialState: counterInitialState,
  reducers: {

    // функция reducer - меняет стэйт и принимает в себя 2 аргумента:
    // 1 аргумент - это текущее состояние в стейте
    // 2 аргумент - это action
    // action - это объект, состоящий из двух ключей: первый - тип вызываемого action (type), второй - Payload - то, что мы передаем из компонентов в качестве аргументов
    // {
    //    type:
    // }

    add: (state: CounterInitialState) => {
      // console.log(state);
      state.count += 1
    },
    minus: (state: CounterInitialState) => {
      state.count -= 1
    },
    //  multiply: (state: CounterInitialState, action: PayloadAction<number>) => {
    //   state.count *= action.payload
    // }, 
    
    // передача с дефолтовым значением
    multiply: (state: CounterInitialState, {payload = 2}: PayloadAction<number| undefined> ) => {
      state.count *= payload
    }, 

    divide: (state: CounterInitialState, {payload = 2}: PayloadAction<number | undefined> ) => {
      state.count /= payload
    }
  },
})

// actions - это actions, которые будут "диспачиться", т.е. говорить store какой reducer вызвать. Надо передавать actions в компонент, в котором планируется "диспатчить экшн".

export const actions = counterSlice.actions;

// counterRedecer

export const counterReducer = counterSlice.reducer;