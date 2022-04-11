import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledToggleSwitch */
export const StyledToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  
  & input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }

  & input[type="checkbox"]:checked + label {
    background: #16a085;
    
    & span {
      margin-left: 50%;
      background: #1abc9c;
      
      & > .checked {
        display: block;
      }
      
      & > .unchecked {
        display: none;
      }
    }
  }
  
  & label {
    display: flex;
    align-items: center;
    width: 3rem;
    height: 1.75rem;
    border-radius: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    background: #2c3e50;
    
    & > span {
      display: flex;
      margin-left: 0.3rem;
      justify-content: center;
      align-items: center;
      width: 1.25rem;
      height: 1.25rem;
      background: #d34545;
      border-radius: 6px;
      transition: all 0.5s ease;
      box-shadow: 0 0 8px rgba(0,0,0,0.3);
      
      & > svg {
        color: #fff;
        font-weight: 600;
      }
      
      & > .unchecked {
        display: block;
      }
      
      & > .checked {
        display: none;
      }
    }
  }
  
  & > span {
    font-size: 0.775rem;
    font-weight: 500;
    color: var(--description-color);
    padding-left: 0.5rem;
  }
`