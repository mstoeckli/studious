import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledCustomize */
export const StyledCustomize = styled.div`
  width: 300px;
  max-height: ${props => `${props.tableHeight - 40}px`};
  overflow-x: hidden;
  overflow-y: auto;
  
  & > header {
    padding: 0.5rem;
    border-bottom: 1px solid #e9e9e9;
    
    & span {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--title-color)
    }
  }
  
  & > article {
    padding: 0.5rem;
    border-bottom: 1px solid #e9e9e9;
    
    & .article-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 0.2rem;
      
      & svg {
        color: var(--title-color-nav-group);
        padding-left: 0.5rem;
        cursor: pointer;
      }
    }
    
    & span {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--title-color-nav-group);
    }
    
    & div.customize-manage-content-info {
      text-align: center;
      margin-top: 0.5rem;
      
      & > span {
        text-transform: none;
        color: var(--color-error);
      }
    }
    
    & button {
      & svg, & span {
        color: #fff;
      }
    }
    
    & ul {
      padding-top: 6px;

      & li.active-view {
        & svg, & span {
          color: var(--color-nav-menu-hover);
        }
      }
      
      & li {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;
        padding: 8px;
        cursor: pointer;
        
        & .customize-view-remove {
          color: var(--color-error) !important;
        }
        
        & svg {
          color: var(--color-icon-default);
          font-size: 18px !important;
          width: 20px;
        }
        
        & span {
          font-size: 0.775rem;
          font-weight: 500;
          padding-left: 8px;
          color: var(--title-color-dropdown-menu);
        }

        &:hover {
          background: var(--background-color-nav-menu-hover);
          
          & svg, & span {
            color: var(--color-nav-menu-hover);
          }
        }
      }
      

    }
  }
  
  & > article.customize-manage {
    display: flex;
    flex-direction: column;
    
    & .customize-manage-content {
      padding-top: 2px;
      width: 100%;
      
      & > .customize-manage-content-buttons {
        display: flex;
        gap: 6px;
        justify-content: flex-end;
      }
    }
  }

  ::-webkit-scrollbar {
    width: var(--webkit-scrollbar-width);
    height: var(--webkit-scrollbar-width);
    border-radius: var(--webkit-scrollbar-border-radius);
    background: var(--webkit-scrollbar-background);
  }

  ::-webkit-scrollbar-thumb {
    height: var(--webkit-scrollbar-thumb-height);
    border-radius: var(--webkit-scrollbar-thumb-border-radius);
    background-color: var(--webkit-scrollbar-thumb-background-color);
  }
`