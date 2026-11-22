import styled from "styled-components";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import AddCabinModal from "../ui/AddCabinModal";

const StyleH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-grey-800);
  margin-bottom: 2.4rem;
`;

function Cabins() {
  return (
    <Row type="vertical" style={{ justifyContent: "space-between" }}>
      <StyleH1>All cabins</StyleH1>
      <CabinTable />
      <AddCabinModal />
    </Row>
  );
}

export default Cabins;
