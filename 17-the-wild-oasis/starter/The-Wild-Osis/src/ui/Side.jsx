import styled from "styled-components";
import Logo from "./logo";

const StyledSide = styled.div`
  width: 15rem;
  flex-shrink: 0;
  background-color: var(--color-grey-0);
`;

function Side() {
  return (
    <StyledSide>
      <Logo />
    </StyledSide>
  );
}

export default Side;
