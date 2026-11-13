import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Side from "./side";

const StyledAppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100rem;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: var(--color-grey-50);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Side />
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </StyledAppLayout>
  );
}

export default AppLayout;
