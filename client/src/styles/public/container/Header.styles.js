import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLHeadingElement>} StyledHeader */
export const StyledHeader = styled.header`
  position: relative;
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  //overflow: hidden;
  
  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  & .dropdown-menu-container-custom {
    top: calc(100% + 30px) !important;
    width: 250px;
  }
`