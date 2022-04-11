import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLLIElement>} StyledDropdownItem */
export const StyledDropdownItem = styled.li`
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
  
  & svg {
    color: var(--color-icon-default);
    font-size: 18px !important;
    width: 20px;
  }
  
  & a {
    text-decoration: none;
  }
  
  & a,
  & span {
    font-size: 0.775rem;
    font-weight: 500;
    padding-left: 8px;
    color: var(--title-color-dropdown-menu);
  }

  &:hover {
    background: var(--background-color-dropdown-menu-hover);

    & a, & span,  & svg {
      color: var(--color-dropdown-menu-hover);
    }
  }
`