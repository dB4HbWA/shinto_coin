import React from "react";
const SellView = props => (
  <div className="SellView">
    <h1>Sell ShintoCoins</h1>
    <div>
      Current ShintoCoin Value:
    </div>
    <div>
      Number of ShintoCoins Owned:
    </div>
    {/* <div className="md-text-field"> */}
    <div class="row">
      <div class="small-1 medium-1 large-1 xlarge-1 columns">&nbsp;</div>
      <div class="small-2 medium-2 large-2 xlarge-2 columns">
        <input type="text" placeholder="Number" />
      </div>

      <div class="small-1 medium-1 large-1 xlarge-1 columns" />
      <div class="small-2 medium-2 large-2 xlarge-2 columns">
        <button className="button btn-cta">Sell</button>
      </div>
      <div class="small-6 medium-6 large-6 xlarge-6 columns" />
    </div>
  </div>
);

export default SellView;
