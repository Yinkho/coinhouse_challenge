import React from "react";
import Graph from "../Graph/Graph";
import btcData from "../../data/btc.json";
import ethData from "../../data/eth.json";
import ltcData from "../../data/ltc.json";
import xrpData from "../../data/xrp.json";

const Home = () => {
  return (
    <div>
      <Graph
        data1={btcData}
        dataName1="Bitcoin"
        data2={ethData}
        dataName1="Etherum"
      />
    </div>
  );
};

export default Home;
