import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledNavbarItem */
export const StyledNavbarItem = styled.li`
  font-size: 1.25rem;
  color: var(--color-icon-default);
  padding: 0 0.5rem;
  list-style: none;
  
  & svg:hover {
    color: var(--color-nav-menu-hover);
    cursor: pointer;
  }
  
  & svg.active{
    color: var(--color-nav-menu-hover);
  }
`