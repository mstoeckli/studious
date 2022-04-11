import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledSearch */
export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  border: 1px solid var(--color-input-border);
  border-radius: 6px;
  transition: all 0.3s ease;

  & svg {
    font-size: 1.15rem;
    color: var(--color-icon-default);
    padding: 0 0.5rem 0 0.5rem;
    cursor: pointer;
  }

  & input {
    width: 100%;
    height: 32px;
    outline: none;
    border: none;
    margin: 0 0.5rem 0 0;
    font-size: 0.775rem;
    font-weight: 500;
    color: var(--title-color-nav-menu);
  }
  
  &:focus-within,
  &:hover {
    border-color: var(--border-color-search-hover);

    & svg, & span {
      color: var(--color-nav-menu-hover);
    }
  }

  // iPhone SE
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {  
    width: 275px !important;

    & > input {
      height: 28px !important;
    }
  }
`