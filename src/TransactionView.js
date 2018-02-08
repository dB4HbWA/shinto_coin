import React from "react";
import { connect } from "react-redux";

const TransactionView = props => {
  
  console.log(props)
 const transaction = props.transactions.find((transaction) => (transaction.id == props.match.params.id))
    return (
      <div className="TransactionView">
        <h1>Ledger Transaction Details</h1>
        <p>Detailed view of a transaction from the ledger.</p>
        <div>Transaction: {transaction.id}</div>
        <div>{transaction.action} {transaction.amount} ShintoCoin(s)</div>
      
      </div>
    );
}

const mapStateToProps = state => {
  return {
    // plugged into the store state, linked local transactions to redux transactions
    transactions: state.transactions
  };
};


export default connect(mapStateToProps)(TransactionView);



