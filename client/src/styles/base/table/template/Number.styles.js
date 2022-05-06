import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledNumber */
export const StyledNumber = styled.div`
  display: flex;
  align-items: center;
  padding: 0 !important;
  
  & svg {
    font-size: 1rem;
    padding-right: 0.5rem;
    color: var(--icon-color-default);
  }
  
  & span {
    color: var(--title-color);
    font-size: 0.75rem;
    font-weight: 600;
  }
`