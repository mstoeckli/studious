import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledText */
export const StyledText = styled.div`
  display: flex;
  align-items: center;
  
  & svg {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  
  & span {
    color: var(--title-color);
    font-weight: 500;
  }
`