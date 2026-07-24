// assignment.ts
// What this file demonstrates: a small assignment using union/intersection types for a Bank system
// Concepts used: union types, intersection types, discriminated unions, narrowing

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed transaction results

// Assignment: model simple bank transaction results using a discriminated union.

type Timestamped = {
  timestamp: string;
};

type DepositTransaction = {
  type: "deposit";
  amount: number;
} & Timestamped;

type WithdrawalTransaction = {
  type: "withdrawal";
  amount: number;
} & Timestamped;

type FailedTransaction = {
  type: "failed";
  reason: string;
} & Timestamped;

type Transaction = DepositTransaction | WithdrawalTransaction | FailedTransaction;

function processTransaction(transaction: Transaction): void {
  switch (transaction.type) {
    case "deposit":
      console.log(`[${transaction.timestamp}] Deposited Rs.${transaction.amount}`);
      break;
    case "withdrawal":
      console.log(`[${transaction.timestamp}] Withdrew Rs.${transaction.amount}`);
      break;
    case "failed":
      console.log(`[${transaction.timestamp}] Transaction failed: ${transaction.reason}`);
      break;
  }
}

const transactions: Transaction[] = [
  { type: "deposit", amount: 5000, timestamp: "2026-07-01" },
  { type: "withdrawal", amount: 1500, timestamp: "2026-07-02" },
  { type: "failed", reason: "Insufficient balance", timestamp: "2026-07-03" },
];

transactions.forEach(processTransaction);
