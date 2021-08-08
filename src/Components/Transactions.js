import TransactionListItem from "./TransactionListItem";
import React from "react";

function Transactions({ transactions }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Take me there</th>
            <th>See this TransactionList</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transactionListItem, index) => {
            return (
              <TransactionListItem
                key={index}
                transactionListItem={transactionListItem}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
