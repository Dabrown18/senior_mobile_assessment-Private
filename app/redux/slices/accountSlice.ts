import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountState, Transaction } from "../../types";

const initialState: AccountState = {
  isLoading: false,
  transactions: [],
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<{data: Transaction[]}>) => {
      state.transactions = action.payload.data.reverse()
    },
  },
});

export const { actions: accountActions, reducer: accountReducer } = accountSlice;
