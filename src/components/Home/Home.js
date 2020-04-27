import React, { useState } from "react";
import Graph from "../Graph/Graph";
import btcData from "../../data/btc.json";
import ethData from "../../data/eth.json";
import ltcData from "../../data/ltc.json";
import xrpData from "../../data/xrp.json";
import CustomSelect from "../CustomSelect/CustomSelect";
import { SelectContainer } from "./Home.styles";

const currencies = [
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

const Home = () => {
  const [selectedCurrency1, setSelectedCurrency1] = useState({
    ...currencies[0],
  });
  const [selectedCurrency2, setSelectedCurrency2] = useState({
    ...currencies[1],
  });

  const optionsList = currencies.filter(
    (currency) =>
      currency.name !== selectedCurrency1.name &&
      currency.name !== selectedCurrency2.name
  );

  const renderSelects = () => (
    <SelectContainer>
      <select
        onChange={(e) => {
          setSelectedCurrency1(
            currencies.find((currency) => currency.name === e.target.value)
          );
        }}
      >
        {currencies
          .filter((currency) => currency.name !== selectedCurrency2.name)
          .map((currency, index) => (
            <option key={index} value={currency.name}>
              {currency.name}
            </option>
          ))}
      </select>
      <select
        onChange={(e) => {
          setSelectedCurrency2(
            currencies.find((currency) => currency.name === e.target.value)
          );
        }}
      >
        {currencies
          .filter((currency) => currency.name !== selectedCurrency1.name)
          .map((currency, index) => (
            <option key={index} value={currency.name}>
              {currency.name}
            </option>
          ))}
      </select>
    </SelectContainer>
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
