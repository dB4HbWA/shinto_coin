import React, { Component } from "react";
import { connect } from "react-redux";
import { SELL_SHINTO_COINS } from "./state/action";

class SellView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.changeNumber = this.changeNumber.bind(this);
    this.validateSell = this.validateSell.bind(this);
  }

  changeNumber(e) {
    this.setState({ number: e.target.value });
  }

  validateSell(sellAmt) {
    if (isNaN(sellAmt)) {
      this.setState({ userMsg: "Please enter a number." });
    } else if (sellAmt > this.props.value) {
      this.setState({
        userMsg: "You do not have enough Shinto coin to make this sell."
      });
    } else {
      this.props.sellCoins(sellAmt);
      this.setState({ userMsg: "Sold: " + this.state.number });
    }
  }

  render() {
    return (
      <div className="sellView">
        <h1>Sell ShintoCoins</h1>
        <div>Current ShintoCoin Value: ${this.props.value}.00</div>
        <div>Number of ShintoCoins Owned: {this.props.value - 1}</div>
        <div className="row">
          <div className="small-1 medium-1 large-1 xlarge-1 columns">
            &nbsp;
          </div>
          <div className="small-2 medium-2 large-2 xlarge-2 columns">
            <input
              type="text"
              placeholder="Number"
              onChange={this.changeNumber}
            />
          </div>

          <div className="small-1 medium-1 large-1 xlarge-1 columns" />
          <div className="small-2 medium-2 large-2 xlarge-2 columns">
            <button
              className="button btn-cta small"
              onClick={() => this.validateSell(this.state.number)}
            >
              Sell
            </button>
          </div>
          <div className="small-6 medium-6 large-6 xlarge-6 columns" />
          {this.state.userMsg}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sellCoins(number) {
      dispatch({ type: SELL_SHINTO_COINS, payload: parseInt(number) });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellView);
