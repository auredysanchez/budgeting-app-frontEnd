import { Link } from "react-router-dom";


function TransactionListItem({ transaction, index }) {
  return (
    <tr>
      <td>
        {transaction.date}
      </td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.name}</Link>
      </td>
      <td>
        {transaction.amount}
      </td>
    </tr>
  );
}

export default TransactionListItem;