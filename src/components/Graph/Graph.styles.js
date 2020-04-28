import styled from "styled-components";

export const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: graph-appear 0.3s ease;

  @keyframes graph-appear {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  & > h1 {
    font-weight: 400;
  }

  @media (max-width: 1000px) {
    & > h1 {
      font-size: 25px;
    }
  }
`;
