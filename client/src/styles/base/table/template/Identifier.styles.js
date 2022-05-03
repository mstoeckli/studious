import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledIdentifier */
export const StyledIdentifier = styled.div`
  padding: 0 !important;
  
  & h4 {
    color: var(--title-color);
  }
  
  & span {
    color: var(--description-color);
  }
`