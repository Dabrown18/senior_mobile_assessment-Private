import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import _ from 'lodash'
import { Transaction } from "../../types";

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

export const selectSections = createSelector(
  [selectTransactions],
  (transactions) => {
    const clonedTransactions = _.cloneDeep(transactions)

    const wires: Transaction[] = []
    const deposits: Transaction[] = []

    clonedTransactions.map((transaction) => {
      if (transaction.type === 'wire') {
        wires.push(transaction)
      }
      if (transaction.type === 'deposit') {
        deposits.push(transaction)
      }
    });

    return {
      wires,
      deposits
    }
  }
)

function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
