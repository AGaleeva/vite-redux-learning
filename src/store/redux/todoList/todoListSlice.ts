import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {v4} from 'uuid';

import { AddTodoPayload, Todo, TodoState } from './types'

const todoInitialState: TodoState = {
  todos: [],
}

const todosSlice = createSlice({
  name: 'TODOS',
  initialState: todoInitialState,
  reducers: {    
    addTodo: (state: TodoState, { payload }: PayloadAction<AddTodoPayload>) => {      
      state.todos = [...state.todos, {...payload, id: v4()}]
    },
    deleteTodo: (state: TodoState, { payload }: PayloadAction<string>) => {
      state.todos = [...state.todos].filter((todoObject) => todoObject.id !== payload)
    },
    deleteAllTodos: () => todoInitialState
  }
})

export const todosActions = todosSlice.actions;
export const todosReducers = todosSlice.reducer