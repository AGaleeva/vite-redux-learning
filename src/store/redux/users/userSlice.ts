import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {v4} from 'uuid';

import {UsersState, User, AddUserPayload} from './types'

const usersInitialState: UsersState = {
  users: [],
}

const usersSlice = createSlice({
  name: 'USERS',
  initialState: usersInitialState,
  reducers: {
    // 2 аргумент у любого reducer - это обьект action
    // что такое обьект action?
    // action = {
    //  payload: {} //это данные которые мы передаем из компонента при диспатче экшена в круглых скобках
    // type: "USER/addUser" // это автоматичекси сгенерированный тип, мы можем увидить его в redux Devtools
    // }
    addUser: (state: UsersState, { payload }: PayloadAction<AddUserPayload>) => {
      // каждому новому добавленному юзеру генерируется уникальный id через библиотеку "uuid"
      state.users = [...state.users, {...payload, id: v4()}]
    },
    deleteUser: (state: UsersState, { payload }: PayloadAction<string>) => {
      state.users = [...state.users].filter((userObject) => userObject.id !== payload)
    },
    deleteAllUsers: () => usersInitialState
  }
})

export const usersActions = usersSlice.actions;
export const usersReducers = usersSlice.reducer