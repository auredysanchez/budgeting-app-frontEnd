import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

function TransactionDetails({ deleteTransaction }) {
  const [transactionListItem, setTransactionListItem] = useState({});
  let { index } = useParams();
  let history = useHistory();

  const fetchTransactionListItem = async () => {
    try {
      const res = await axios.get(`${API}/transactionList/${index}`);
      setTransactionListItem(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactionList")
  }

  useEffect(() => {
    fetchTransactionListItem();
  });

  return (
      <article>
        <h3>
          <p>Name: {transactionListItem.name}</p>
          <p>Amount: ${transactionListItem.amount}</p>
          <p>From: {transactionListItem.from}</p>
          <p>Date: {transactionListItem.date}</p>
        </h3>
        <div className="showNav">
          <Link to={`/transactionList`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </article>
  );
}

export default withRouter(TransactionDetails);
