import styled from "styled-components";

export default styled.div`
  display: flex;
  //flex-direction: row;
  flex-direction: ${({ direction = "column" }) => direction};
  padding: 1rem;
  gap: 2rem;
  margin-block-end: 2rem;
`;
