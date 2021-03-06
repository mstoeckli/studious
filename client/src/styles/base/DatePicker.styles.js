import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledDatePicker */
export const StyledDatePicker = styled.div`
  display: flex;
  justify-content: center;
  width: 275px;

  & span {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--title-color);
  }
  
  & svg {
    color: var(--color-icon-default);
  }

  & button {
    height: 24px;
    border: 1px solid var(--border-color-default);
    border-radius: 6px;
    outline: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    background: transparent;

    & svg {
      padding-right: 0.5rem;
    }

    &:hover {
      border: 1px solid var(--border-color-default-active); 
      background: var(--background-color-nav-menu-hover);
      
      & span, & svg {
        color: var(--color-nav-menu-hover);
      }
    }
  }
  
  & .calendar {
    & header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 275px;
      
      & .calendar-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        background-color: #f9f9f9;
        width: 24px;
        height: 24px;
        cursor: pointer;
        
        & svg {
          font-size: 0.75rem;
        }
      }
      
      & .calendar-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
      }
    }

    & article {
      padding-top: 0.5rem;
      
      & .calendar-week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        place-items: center;
      }

      & .calendar-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
        padding-top: 0.5rem;
        
        & span {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          font-weight: 500;
          color: var(--title-color);
          padding: 5px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          
          &:hover {
            font-weight: 600;
            background: var(--background-color-nav-menu-hover);
            color: var(--color-nav-menu-hover);
          }
        }
        
        & .current {
          color: var(--color-nav-menu-hover);
          border: 1px solid var(--border-color-default);
          font-weight: 600;
        }
        
        & .active {
          display: inline-grid !important;
          background: var(--background-color-nav-menu-hover);
          color: var(--color-nav-menu-hover);
          font-weight: 600;
        }
        
        & .hover {
          background: #f1f1f1;
        }
        
        & .prev,
        & .next {
          color: #e2e2e2;
        }
      }
      
      & .calendar-months,
      & .calendar-years {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(3, auto);
        background-color: #fff;
        padding: 8px;
        gap: 8px;
        transform: scale(1.5);
        visibility: hidden;
        pointer-events: none;
        transition: all 0.2s ease-in-out;
        
        & > span {
          display: grid;
          place-items: center;
          cursor: pointer;
          border-radius: 6px;
          
          &:hover {
            background: var(--background-color-nav-menu-hover);
            color: var(--color-nav-menu-hover);
          }
        }
      }
    }
    
    & .calendar-months.show,
    & .calendar-years.show {
      transform: scale(1);
      visibility: visible;
      pointer-events: visible;
    }
    
    & footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 275px;
      padding-top: 0.5rem;
      
      & button {
        width: 100%;
      }
    }
  }
`