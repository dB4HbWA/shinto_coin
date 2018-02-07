import React, { Component } from "react";
import { connect } from 'react-redux';

import { MINE_SHINTO_COINS } from "./state/action";


class MineView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: ""
    }
    this.changeAnswer = this.changeAnswer.bind(this)
  }

  changeAnswer(e) {
    this.setState({answer: e.target.value})
  }

  render() {

    return (
      <div className="mineView">
        <h1>Mine ShintoCoins</h1>
        <p>
          Here you can mine ShintoCoins by being the first to solve the algorithm:{" "}
        </p>
        <p>What is the 7th Fibonacci sequence number?</p>
        <div className="row">
          <div className="small-1 medium-1 large-1 xlarge-1 columns">&nbsp;</div>
          <div className="small-2 medium-2 large-2 xlarge-2 columns">
            <input type="text" placeholder="Answer" onChange={this.changeAnswer} />
          </div>

          <div className="small-1 medium-1 large-1 xlarge-1 columns" />
          <div className="small-2 medium-2 large-2 xlarge-2 columns">
            <button className="button btn-cta" onClick={() => this.props.mineCoin(this.state.answer)}>Mine</button>
          </div>
          <div className="small-6 medium-6 large-6 xlarge-6 columns" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mineCoin(answer) {
      if (answer == 8)
        dispatch({ type: MINE_SHINTO_COINS })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MineView)
