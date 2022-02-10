import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 5%;
  }
`;

export const Section = styled.div`
`;

export const StyledButton = styled.button`
  outline: none;
  border: 0;
  background: none;
`;