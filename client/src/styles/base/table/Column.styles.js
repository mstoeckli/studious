import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLTableRowElement>} StyledTableColumn */
export const StyledTableColumn = styled.th`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 8px;
  width: 1%;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.65rem;
  color: #787878;
  text-align: ${props => props.align || "left"};

  &:nth-child(1) {
    position: sticky;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }

  //&:nth-child(1) {
  //  z-index: 2;
  //  background-color: #fff;
  //}
  
  &:first-child {
    padding-left: 14px;
  }

  & span {
    text-transform: uppercase;
    padding-right: 0.5rem;
  }

  & svg {
    cursor: pointer;
  }

  & .show-line-number,
  & .multi-select-checkbox,
  & .show-content-icon {
    width: 40px;
    min-width: 40px;
  }
`