import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledPagination */
export const StyledPagination = styled.ul`
  list-style-type: none;
  overflow: hidden;
  padding: 0.5rem 0 0 0;
  margin: 0 0 0.25rem 0;

  & li {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    padding: 2px;
    width: 20px;
    margin-right: 4px;
    
    & a {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--title-color-nav-menu);
      text-decoration: none;
    }
  }
    
  & li.active {
    background: var(--background-color-nav-menu-hover);
    border: 1px solid #3f6ad8;
  }
    
  & li.active a {
    color: #3f6ad8;
  }
`