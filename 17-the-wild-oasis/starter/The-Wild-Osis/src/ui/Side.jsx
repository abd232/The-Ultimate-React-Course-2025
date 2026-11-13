import styled from "styled-components";
import Logo from "./logo";
import { NavList, Link } from "./MainNav";

const StyledSide = styled.div`
  width: 15rem;
  flex-shrink: 0;
  height: 100vh;
  background-color: var(--color-grey-0);
`;

function Side() {
  return (
    <StyledSide>
      <Logo />
      <NavList>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/cabins">Cabins</Link>
        <Link to="/account">Account</Link>
        <Link to="/settings">Settings</Link>
      </NavList>
    </StyledSide>
  );
}

export default Side;
