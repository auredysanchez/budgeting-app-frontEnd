import TransactionDetails from "../Components/TransactionDetails";

function Show({ deleteTransaction }) {
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <TransactionDetails deleteTransaction={deleteTransaction} />
      </section>
    </div>
  );
}

export default Show;
