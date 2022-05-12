import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLSpanElement>} StyledButton */
export const StyledButton = styled.button`
  border: 1px solid ${props => props.disabled ? "#9d9d9d" : "#3f6ad8"};
  border-radius: 5px;
  background: ${props => props.disabled ? "#adb1b7" : "#688ccd"};
  padding: 4px;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  
  & svg {
    padding-right: 0.5rem;
    color: #fff
  }
  
  & span {
    font-size: 0.775rem;
    font-weight: 600;
    color: #fff;
  }
`