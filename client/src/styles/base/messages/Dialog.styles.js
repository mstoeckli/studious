import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledDialog */
export const StyledDialog = styled.div`
  display: ${props => props.state || "none"};
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 16px;
  //box-shadow: rgba(9, 30, 66, 0.08) 0 2px 4px -1px, rgba(9, 30, 66, 0.08) 0 0 0 1px;
  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
  background-color: #fff;
  z-index: var(--z-index-dialog);
  
  & svg.customIcon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    color: ${props => props.messageTypeColor || `var(--color-icon-default)`};
  }
  
  & svg.close {
    width: 10px;
    font-size: 1rem;
    color: var(--color-icon-default);
    align-self: flex-end;
    background-color: transparent;
    border: none;
    margin-bottom: 12px;
    cursor: pointer;
  }
  
  & h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--title-color);
    text-align: center;
    margin-bottom: 12px;
  }
  
  & span {
    font-size: 0.775rem;
    color: var(--description-color);
    text-align: center;
    margin-bottom: 12px;
  }
  
  & button.support {
    display: flex;
    justify-content: center;
    cursor: pointer;
    height: 32px;
    padding: 8px;
    border: 1px solid #e9e9e9;
    border-radius: 6px;
    outline: none;
    background-color: #fff;
    transition: all 0.3s ease;
    margin-bottom: 12px;
    
    & svg {
      font-size: 1rem;
      color: var(--color-icon-default);
      padding-right: 0.5rem;
    }
    
    & span {
      font-size: 0.775rem;
      font-weight: 600;
      color: var(--title-color);
      margin-bottom: 0;
    }
    
    &:hover {
      border-color: var(--border-color-dropdown-filter-hover);
      background: var(--background-color-dropdown-filter-hover);

      & svg, & span {
        color: var(--color-nav-menu-hover);
      }
    }
  }
`