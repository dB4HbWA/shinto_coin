import React from "react";
const MineView = props => (
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
        <button className="button btn-cta">Mine</button>
      </div>
      <div class="small-6 medium-6 large-6 xlarge-6 columns" />
    </div>
  </div>
);

export default MineView;
