import React, {FC} from "react";
import { View, Text, StatusBar, Button, SafeAreaView, StyleSheet } from "react-native";
import { TransactionList } from "../transaction-list";
import { Transaction } from "../types";

interface Props {
  balance: string
  onPressUpdateJS: () => void
  onPressUpdateNative: () => void
  sections: {
    wires: Transaction[]
    deposits: Transaction[]
  }
}

const AppView: FC<Props> = ({
  balance,
  onPressUpdateJS,
  onPressUpdateNative,
  sections
}) => {
  return (
    <SafeAreaView style={styles.container}>
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
      <TransactionList sections={sections} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
