import {createSlice} from'@reduxjs/toolkit';

// дефолтное состояние при инициализации приложения
const counterInitialState = {
  count: 0
}

// создать slice - это функция, принимающая в себя объект и которая передает данные в глобальный store
// создает reducers и actions

const counterSlice = createSlice({
  // имя по которому следим за состоянием в store
  name: 'COUNTER',
  // создаем состояние для store, передав ему initialState
  initialState: counterInitialState,
  reducers: {
    add: (state) => {
      state.count += 1
    },
  },
})

export const actions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;