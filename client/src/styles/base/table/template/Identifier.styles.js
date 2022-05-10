import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledIdentifier */
export const StyledIdentifier = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"};
  align-items: center;
  padding: 0 !important;
  
  & svg {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  
  & h4 {
    color: var(--title-color);
  }
  
  & span {
    color: var(--description-color);
  }
`