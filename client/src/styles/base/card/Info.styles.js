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
  justify-content: center;
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

  // iPhone SE
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {
    height: 25px;
    width: 80px;
    min-width: 80px;
    
    & h4 {
      display: none;
    }
    
    & svg, & span {
      font-size: 1rem;
    }
  }
`