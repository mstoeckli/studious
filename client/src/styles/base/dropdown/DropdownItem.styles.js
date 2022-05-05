import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLLIElement>} StyledDropdownItem */
export const StyledDropdownItem = styled.li`
  height: ${props => props.height || "32px"};
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.marginBottom || "0"};
  border-bottom: ${props => props.borderBottom || "none"};
  border-radius: ${props => props.borderRadius || "5px"};
  padding: ${props => props.padding || "4px 8px"};
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