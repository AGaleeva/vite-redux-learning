import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

const store = (state: RootState) => state

export const catFactsSelector = createSelector(store, (state) => state.catFacts)