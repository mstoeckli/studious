import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledNumber */
export const StyledNumber = styled.div`
  padding: 0 !important;
  
  & svg {
    padding-right: 0.5rem;
    color: var(--icon-color-default);
  }
  
  & span {
    color: var(--title-color);
    font-size: 0.75rem;
    font-weight: 600;
  }
`