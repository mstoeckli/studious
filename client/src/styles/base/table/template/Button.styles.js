import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLSpanElement>} StyledButton */
export const StyledButton = styled.button`
  border: 1px solid #59a4c9;
  border-radius: 5px;
  background: #85bdd8;
  padding: 4px;
  cursor: pointer;
  
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