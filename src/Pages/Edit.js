import TransactionEditForm from "../Components/TransactionEditForm";

function Edit({ updateTransactions, transactions }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <TransactionEditForm updateTransactions={updateTransactions} transactions={transactions} />
    </div>
  );
}

export default Edit;
