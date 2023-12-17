import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

// Забираем все, что лежит в глобальном стэйте
const globalState = (state: RootState) => state

// Надо забрать только то, что нужно, а именно в данном случае, состояние counter
// 1 аргумент createSelector - функция колбэк, возвращающая глобальный стэйт
// 2 аргумент - колбэк фун-я, возвращающая нужную часть из глобального стэйта

export const counterState = createSelector(globalState, (state) => state.counter)