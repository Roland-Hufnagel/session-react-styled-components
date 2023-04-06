import styled from "styled-components";
// export function Button2(props){
//     return(<button>click me</button>)
// }
export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  
  background-color: ${({ bgcolor }) => {
    return bgcolor === "danger"
      ? "var(--secondary-color)"
      : "var(--primary-color)"
  }};
  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
