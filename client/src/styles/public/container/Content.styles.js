import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledContent */
export const StyledContent = styled.div`
  position: fixed;
  height: calc(100% - 50px);
  overflow: hidden;
  background: #fdfdfd;

  // iPhone SE
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {
    width: 100% !important;
  }
`