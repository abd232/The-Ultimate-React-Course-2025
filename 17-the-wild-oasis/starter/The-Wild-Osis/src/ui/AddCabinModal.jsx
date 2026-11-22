import { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const AddCabinButton = styled.button`
  font-family: "Sono";
  font-weight: 600;
  background-color: var(--color-blue-700);
  color: var(--color-grey-0);
  padding: 1rem 2.4rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
`;

function AddCabinModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AddCabinButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add new cabin
      </AddCabinButton>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <CreateCabinForm />
        </Modal>
      )}
    </>
  );
}

export default AddCabinModal;
