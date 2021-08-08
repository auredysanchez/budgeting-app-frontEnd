import { useState } from "react";
import { withRouter } from "react-router";

function TransactionNewForm({ addTransactionListItem, history }) {
  const [transactionListItem, setTransactionListItem] = useState({
    date: "",
    name: "",
    amount: "",
  });

  const handleTextChange = (event) => {
    setTransactionListItem({
      ...transactionListItem,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransactionListItem(transactionListItem);
    history.push("/transactions");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={transactionListItem.name}
        onChange={handleTextChange}
        placeholder="name"
        required
      />
      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        value={transactionListItem.date}
        onChange={handleTextChange}
        placeholder="date"
      />
      <label htmlFor="amount">Amount:</label>
      <input
        type="text"
        id="amount"
        value={transactionListItem.amount}
        onChange={handleTextChange}
        placeholder="amount"
      />
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
