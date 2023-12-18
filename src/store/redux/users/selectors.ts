import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export const globalState = (state: RootState) => state

export const usersState = createSelector(globalState, (state) => state.users)  