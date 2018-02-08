import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter // a higher order component
} from 'react-router-dom'
import HomeView from './HomeView'
import MineView from './MineView'
import BuyView from './BuyView'
import SellView from './SellView'
import LedgerView from './LedgerView'
import TransactionView from './TransactionView'

const NmTab = (props) => {
  return (
    <Route path={props.to} children={({match}) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} >
          <Link to={props.to}>{props.tabName}</Link>
        </li>
      )}
    } />
  )
}

const ButtonGroup = props => (
  <nav>
    <ul className="tabs">
      <NmTab to={"/home"} tabName="Home" />
      <NmTab to={"/mine"} tabName="Mine Coins" />
      <NmTab to={"/buy"} tabName="Buy Coins" />
      <NmTab to={"/sell"} tabName="Sell Coins" />
      <NmTab to={"/ledger"} tabName="Browse Ledger" />
    </ul>
  </nav>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ButtonGroup />
          <Switch>
            <Route path="/home" component={HomeView} />
            <Route path="/mine" component={MineView} />
            <Route path="/buy" component={BuyView} />
            <Route path="/sell" component={SellView} />
            <Route path="/ledger" component={LedgerView} />
            <Route path="/transaction/:id" component={TransactionView} />
        </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

