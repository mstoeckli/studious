import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledStatus */
export const StyledStatus = styled.div`
  border-radius: 5px;
  padding: 2px 4px;
  width: fit-content;
  cursor: pointer;
  
  & > svg {
    color: #fff;
    font-size: 0.775rem;
    padding-right: 4px;
  }

  & > span {
    font-size: 0.775rem;
    font-weight: 500;
    color: #fff;
  }
`