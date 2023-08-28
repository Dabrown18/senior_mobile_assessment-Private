import React, {FC} from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { TransactionListItem } from "./transaction-list-item";
import { Transaction } from "./types";

interface Props {
  sections: {
    wires: Transaction[]
    deposits: Transaction[]
  }
}

export const TransactionList: FC<Props> = ({
  sections
}) => {
  return (
    <View>
      <Text style={styles.title}>
        Transactions
      </Text>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>
          A fee may apply
        </Text>
        <Text style={styles.subTitle}>
          A fee may apply
        </Text>
      </View>
      <View style={styles.dataContainer}>
        <FlatList
          data={sections.wires}
          renderItem={({item, index}) => {
            return (
              <TransactionListItem key={index} transaction={item} />
            )
          }}
        />
        <FlatList
          data={sections.deposits}
          renderItem={({item, index}) => {
            return (
              <TransactionListItem key={index} transaction={item} />
            )
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'100%',
    paddingHorizontal: 15
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5
  },
  subTitle: {
    fontSize: 12,
    color: 'slategray'
  }
})
