import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledDropdown */
export const StyledDropdown = styled.div`
  position: relative;
  
  & .active  {
    opacity: 1 !important;
    transform: translateY(0);
  }
  
  & .dropdown-menu-container.active {
    z-index: var(--z-index-dropdown-active);
  }
  
  & svg.active {
    color: var(--color-nav-menu-hover) !important;
  }
  
  & .dropdown-menu-container {
    position: absolute;
    top: calc(100% + 10px);
    border-radius: 5px;
    border-color: #bfbfbf;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    padding: 8px;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
    z-index: var(--z-index-dropdown-inactive);
    background: #fff;
    
    & ul {
      width: auto;
      height: auto;
    }
  }

  & .right {
    right: 0;
  }

  & .left {
    left: 0;
  }
`