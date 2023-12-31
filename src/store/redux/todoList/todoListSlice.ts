import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {v4} from 'uuid';

import { Todo, TodoState } from './types'

const todoInitialState: TodoState = {
  todos: [],
}

const todosSlice = createSlice({
  name: 'TODOS',
  initialState: todoInitialState,
  reducers: {    
    addTodo: (state: TodoState, { payload }: PayloadAction<string>) => {      
      state.todos = [...state.todos, {todo: payload, id: v4()}]
    },
    deleteTodo: (state: TodoState, { payload }: PayloadAction<string>) => {
      state.todos = [...state.todos].filter((todo) => todo.id !== payload)
    },
    deleteAllTodos: () => todoInitialState
  }
})

export const todosActions = todosSlice.actions;
export const todosReducers = todosSlice.reducer