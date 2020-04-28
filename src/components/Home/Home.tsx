import React, { useState } from "react";
import Graph from "../Graph/Graph";
import btcData from "../../data/btc.json";
import ethData from "../../data/eth.json";
import ltcData from "../../data/ltc.json";
import xrpData from "../../data/xrp.json";
import CustomSelect from "../CustomSelect/CustomSelect";
import { SelectContainer } from "./Home.styles";

interface SelectedCurrency {
  name: string;
  data: { price: number; date: number; ratio: number; score: number }[];
}

const currencies: {
  name: string;
  data: { price: number; date: number; ratio: number; score: number }[];
}[] = [
  {
    name: "Bitcoin",
    data: btcData,
  },
  {
    name: "Ethereum",
    data: ethData,
  },
  {
    name: "Litecoin",
    data: ltcData,
  },
  {
    name: "Ripple",
    data: xrpData,
  },
];

const Home: React.FC = () => {
  const [selectedCurrency1, setSelectedCurrency1] = useState<SelectedCurrency>({
    ...currencies[0],
  });
  const [selectedCurrency2, setSelectedCurrency2] = useState<SelectedCurrency>({
    ...currencies[1],
  });

  // display the currencies' name on options of the select
  const optionsList: {
    name: string;
    data: { price: number; date: number; ratio: number; score: number }[];
  }[] = currencies.filter(
    (currency) =>
      currency.name !== selectedCurrency1.name &&
      currency.name !== selectedCurrency2.name
  );

  return (
    <div>
      <Graph
        data1={selectedCurrency1.data}
        name1={selectedCurrency1.name}
        data2={selectedCurrency2.data}
        name2={selectedCurrency2.name}
      />
      <SelectContainer>
        <CustomSelect
          optionsList={optionsList}
          selectedOption={selectedCurrency1}
          setSelectedOption={setSelectedCurrency1}
          bgColor="#da81ff"
        />
        {console.log(selectedCurrency2)}
        <CustomSelect
          optionsList={optionsList}
          selectedOption={selectedCurrency2}
          setSelectedOption={setSelectedCurrency2}
          bgColor="#6ac6ef"
        />
      </SelectContainer>
    </div>
  );
};

export default Home;
