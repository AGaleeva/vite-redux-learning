import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const globalState = (state: RootState) => state

export const todosState = createSelector(globalState, (state) => state.todos)  