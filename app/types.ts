export interface Transaction {
  id: number;
  type: "creditCard" | "debitCard" | "deposit" | "wire";
  amount: number;
}

export interface AccountState {
  isLoading: boolean;
  transactions: Transaction[];
}
