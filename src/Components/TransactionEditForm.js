import React from "react"
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function TransactionEditForm(props) {
  let { index } = useParams();
  let history = useHistory();

  const [transactionListItem, setTransactionListItem] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const handleTextChange = (event) => {
    setTransactionListItem({
      ...transactionListItem,
      [event.target.id]: event.target.value,
    });
  };

  const handleNumberChange = (event) => {
    setTransactionListItem({
      ...transactionListItem,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTransactionList(transactionListItem, index);
    history.push(`/transactionList/${index}`);
  };

  const fetchTransactionListItem = async () => {
    try {
      const res = await axios.get(`${API}/transactionList/${index}`);
      setTransactionListItem(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTransactionListItem()
  }, []);

  // useEffect(() => {
  //   const API = apiURL();
  //   const fetchTransactionListItem = async () => {
  //     try {
  //       const res = await axios.get(`${API}/transactionList/${index}`);
  //       setTransaction(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchTransaction();
  // }, [index]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">date:</label>
        <input
          type="text"
          id="date"
          value={transactionListItem.date}
          placeholder="date"
          onChange={handleNumberChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={transactionListItem.name}
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={transactionListItem.amount}
          placeholder="amount"
          onChange={handleNumberChange}
        />
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={transactionListItem.from}
          placeholder="from"
          onChange={handleTextChange}
        />
      </form>
      <Link to={`transactionList/${index}`}>
        <button>Create New Item</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;
