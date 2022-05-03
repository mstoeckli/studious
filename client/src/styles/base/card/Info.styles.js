import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledCardInfo */
export const StyledCardInfo = styled.div`
  background: ${props => props.backgroundColor};
  border-left: 3px solid ${props => props.borderColor};
  border-radius: 6px;
  width: 145px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  cursor: default;
  min-width: 125px;
  
  & svg {
    color: #fff;
    font-size: 1.75rem;
    padding-right: 0.5rem;
  }
  
  & h4 {
    color: #fff;
    font-size: 0.7rem;
    font-weight: 500;
  }
  
  & span {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
  }
`