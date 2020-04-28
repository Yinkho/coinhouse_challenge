import React, { useState } from "react";
import { CustomSelectContainer } from "./CustomSelect.styles";
import arrow from "../../assets/arrow.png";

interface Props {
  optionsList: {
    name: string;
    data: { price: number; date: number; ratio: number; score: number }[];
  }[];
  selectedOption: {
    data: { price: number; date: number; ratio: number; score: number }[];
    name: string;
  };
  setSelectedOption: (option: {
    data: { price: number; date: number; ratio: number; score: number }[];
    name: string;
  }) => void;
  bgColor: string;
}

const CustomSelect: React.FC<Props> = ({
  optionsList,
  selectedOption,
  setSelectedOption,
  bgColor,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const renderOptions = () => {
    return optionsList.map((option, key) => (
      <div
        key={key}
        className="option"
        onClick={() => {
          setIsActive(false);
          setAnimate(!animate);
          setSelectedOption(option);
        }}
      >
        <p>{option.name}</p>
      </div>
    ));
  };

  return (
    <CustomSelectContainer
      isActive={isActive}
      animate={animate}
      bgColor={bgColor}
      data-test="custom-select-container"
    >
      <div
        id="select"
        onClick={() => {
          setAnimate(!animate);
          setIsActive(!isActive);
        }}
      >
        <p>{selectedOption.name}</p>
        <img src={arrow} alt="Choose a currency to compare" />
      </div>
      <div id="options-container">{renderOptions()}</div>
    </CustomSelectContainer>
  );
};

export default React.memo(CustomSelect);
