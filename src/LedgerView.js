import React from "react";
import { connect } from 'react-redux';

const LedgerView = props => (
  <div className="ledgerView">
    <h1>Browse the Ledger</h1>
    <div>
      Here you can browse all ShintoCoins transactions.
  </div>
  <div>ShintoCoin Ledger</div>
    <div className="row padding-vert-large padding-horiz-xlarge" >
      <table className="table scrollable" >
        <caption className="show-for-sr">Basic Table</caption>
        <thead>
          <tr>
            <th style={{width:"200"}}>Action</th>
            <th style={{width:"200"}}>Amount</th>
            <th style={{width:"300"}}>Value</th>
            <th style={{width:"350"}}></th>
          </tr>
        </thead>
        <tbody height="500" >
          {props.transactions.map((transaction) => (
            <tr>
              <td>{transaction.action}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.value}</td>
              <td>Details</td>
            </tr>))}
        </tbody>
      </table>
  </div>
  </div>

);

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(LedgerView)