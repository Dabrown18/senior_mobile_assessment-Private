import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import _ from 'lodash'

export const selectTransactions = (state: RootState) => state.account.transactions

export const selectBalance = createSelector(
  [selectTransactions],
  (transactions) => {
    let balance = 0;

    const clonedTransactions = _.cloneDeep(transactions)

    clonedTransactions.map((transaction) => {
      balance += transaction.amount
    });

    return numberWithCommas(balance.toFixed(2))
  }
)

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
