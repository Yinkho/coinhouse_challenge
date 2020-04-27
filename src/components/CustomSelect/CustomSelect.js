import React, { useState, useRef } from "react";
import { CustomSelectContainer } from "./CustomSelect.styles";
import arrow from "../../assets/arrow.png";

const CustomSelect = ({
  optionsList,
  selectedOption,
  setSelectedOption,
  bgColor,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const wrapperRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsActive(false);
      setAnimate(!animate);
    }
  };

  return (
    <CustomSelectContainer
      ref={wrapperRef}
      onClick={(event) => {
        handleClickOutside(event);
      }}
      isActive={isActive}
      animate={animate}
      bgColor={bgColor}
    >
      <div
        id="select"
        onClick={(event) => {
          setAnimate(!animate);
          setIsActive(!isActive);
          handleClickOutside(event);
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
