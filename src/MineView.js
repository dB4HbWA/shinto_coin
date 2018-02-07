import  React, { Component} from "react";
import  {connect} from 'react-redux'; 

import { MINE_SHINTO_COINS } from "./state/action";


class MineView extends Component {
    constructor(props){
      super(props)
      this.state = {
        number: 0
      }
    }

  render() {
    return
    (
      <div className="mineView">
        <h1>Mine ShintoCoins</h1>
        <p>
          Here you can mine ShintoCoins by being the first to solve the algorithm:{" "}
        </p>
        <p>What is the 7th Fibonacci sequence number?</p>
        {/* <div className="md-text-field"> */}
        <div class="row">
          <div class="small-1 medium-1 large-1 xlarge-1 columns">&nbsp;</div>
          <div class="small-2 medium-2 large-2 xlarge-2 columns">
            <input type="text" placeholder="Number" />
          </div>

          <div class="small-1 medium-1 large-1 xlarge-1 columns" />
          <div class="small-2 medium-2 large-2 xlarge-2 columns">
            <button className="button btn-cta" onClick={() => this.props.mineCoin(this.state.number)}>Mine</button>
          </div>
          <div class="small-6 medium-6 large-6 xlarge-6 columns" />
        </div>
      </div>
    )
  }
}


const mapTabDisplayStateToProps = (state) => {
  return {
    tabs: state.tabs,
    selectedTab: state.selectedTab
  }
}

const mapTabDisplayDispatchToProps = (dispatch) => {
  return {
    mineCoin(num) {
      dispatch({ type: MINE_SHINTO_COINS, payload: num })
    }
  }
}


export default connect(mapTabDisplayStateToProps, mapTabDisplayDispatchToProps)(MineView)
