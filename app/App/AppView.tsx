import React, {FC} from "react";
import { View, Text, StatusBar, Button, SafeAreaView, StyleSheet } from "react-native";
import { TransactionList } from "../transaction-list";
import { Transaction } from "../types";

interface Props {
  balance: string
  transactions: Transaction[]
  onPressUpdateJS: () => void
  onPressUpdateNative: () => void
}

const AppView: FC<Props> = ({
  balance,
  transactions,
  onPressUpdateJS,
  onPressUpdateNative
}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text
        style={styles.balance}>
        Balance: {balance !== undefined ? balance : "?"}
      </Text>
      <View
        style={styles.buttonContainer}>
        <Button
          title="Update (JS)"
          onPress={onPressUpdateJS}
        />
        <Button
          title="Update (Native)"
          onPress={onPressUpdateNative}
        />
      </View>
      <TransactionList transactions={transactions} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  balance: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
})

export default AppView;
