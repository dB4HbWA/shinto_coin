import React, { Component } from "react";
import { connect } from 'react-redux';
import { BUY_SHINTO_COINS } from "./state/action";

class BuyView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
    this.changeNumber = this.changeNumber.bind(this)
  }

  changeNumber(e) {
    this.setState({ number: e.target.value })
  }

  render() {
    return (
      <div className="buyView">
        <h1>Buy ShintoCoins</h1>
        <div>
          Current ShintoCoin Value: ${this.props.value}.00
    </div>
        <div>
          Number of ShintoCoins Owned: {this.props.value - 1}
    </div>
        <div class="row">
          <div class="small-1 medium-1 large-1 xlarge-1 columns">&nbsp;</div>
          <div class="small-2 medium-2 large-2 xlarge-2 columns">
            <input type="text" placeholder="Number" onChange={this.changeNumber} />
          </div>

          <div class="small-1 medium-1 large-1 xlarge-1 columns" />
          <div class="small-2 medium-2 large-2 xlarge-2 columns">
            <button className="button btn-cta" onClick={() => this.props.buyCoins(this.state.number)} >Buy</button>
          </div>
          <div class="small-6 medium-6 large-6 xlarge-6 columns" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCoins(number) {
      dispatch({ type: BUY_SHINTO_COINS, payload: parseInt(number) })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyView)
