import styled, { css } from "styled-components";

const row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default row;
