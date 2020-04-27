import styled from "styled-components";

export const CustomSelectContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 250px;
  margin: 10px 15px 10px 15px;

  #select {
    position: relative;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid #c7c7c7;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${({ isActive }) => (isActive ? "#DCDCDC" : "#ffffff")};

    &:hover {
      transition: all 0.2s ease;
      background-color: #dcdcdc;
    }

    p {
      padding-left: 10px;
    }

    img {
      transition: all 0.3s ease;
      position: absolute;
      right: 20px;
      width: 12px;
      ${({ animate }) => (animate ? "transform: rotateX(180deg);" : "")}
    }
  }

  #options-container {
    display: ${({ isActive }) => (isActive ? "bloc" : "none")};
    position: absolute;
    top: 120%;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #d8d8d8;
    overflow: hidden;
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    animation: ${({ animate }) => (!animate ? "appear 0.2s" : "disappear 0.2s")}
      ease;

    @keyframes appear {
      from {
        transform: translateY(0px);
        opacity: 1;
      }
      to {
        transform: translateY(30px);
        opacity: 0;
      }
    }

    @keyframes disappear {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    .option {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 35px;
      background-color: #ffffff;
      transition: all 0.2s ease;

      &:hover {
        background-color: ${({ bgColor }) => `${bgColor}`};
        color: #ffffff;
        font-weight: 700;
        transition: all 0.2s ease;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 620px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: 0;
    margin-left: 0;

    #select {
      width: 90%;
      max-width: 400px;
    }

    #options-container {
      width: 90%;
      max-width: 400px;
    }
  }
`;
