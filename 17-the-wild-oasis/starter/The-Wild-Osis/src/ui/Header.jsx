import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.6rem 3.2rem;
  box-shadow: var(--shadow-sm);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
