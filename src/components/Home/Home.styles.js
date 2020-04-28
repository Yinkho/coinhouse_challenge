import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > select {
    width: 180px;
    height: 40px;
    border-radius: 7px;
    font-size: 18px;
    line-height: 23px;
    padding-left: 8px;
    margin: 0 5px;
    font-family: Roboto;
    border: 1px solid #b2b2b2;
    color: #8b8b8b;
    outline: none;
    appearance: none;

    & > option {
      background-color: black;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;
