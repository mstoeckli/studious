import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLTableRowElement>} StyledTableRow */
export const StyledTableRow = styled.td`
  padding: 8px;
  width: 1%;
  white-space: nowrap;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--description-color);
  text-align: ${props => props.align || "left"};

  & div {
    padding: 4px;
    justify-content: ${props => props.align || "left"};
    text-align: ${props => props.align || "left"};
  }
`