import React from "react";

import { fetchTransactions } from "../transaction-data";
import AppView from "./AppView";
import { useDispatch, useSelector } from "react-redux";
import { selectTransactions, selectBalance } from "../redux/slices/selectors";
import { accountActions } from "../redux/slices/accountSlice";

const App = () => {
  const dispatch = useDispatch()
  const balance = useSelector(selectBalance)
  const transactions = useSelector(selectTransactions)
  
  const onPressUpdateJS = async () => {
    const response = await fetchTransactions();
    const newTransactions = await response.json();
    dispatch(accountActions.setTransactions({data: newTransactions}))
  }

  const onPressUpdateNative = () => {
    // TODO: Compute balance via native module and set.
    // TODO: Update transaction list.
  }

  return (
    <AppView
      balance={balance}
      onPressUpdateJS={onPressUpdateJS}
      onPressUpdateNative={onPressUpdateNative}
      transactions={transactions}
    />
  );
};

export default App;
