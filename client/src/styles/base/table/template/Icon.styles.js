import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledIcon */
export const StyledIcon = styled.div`
  & svg {
    font-size: 1rem;
    color: var(--icon-color-default);
    cursor: pointer;
  }
`