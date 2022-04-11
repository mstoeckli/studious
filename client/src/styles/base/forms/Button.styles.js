import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLButtonElement>} StyledButton */
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  outline: none;
  text-align: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 0.775rem;
  font-weight: 600;
  letter-spacing: 0.75px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: var(--color-submit-button);
  border-radius: 5px;
  min-height: 44px;
  margin-top: 1rem;
  
  & span {
    color: #fff;
  }
`