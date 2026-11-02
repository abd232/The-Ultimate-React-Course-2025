import styled from "styled-components";
import Side from "./Side";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: var(--color-grey-50);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Side />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </StyledAppLayout>
  );
}

export default AppLayout;
