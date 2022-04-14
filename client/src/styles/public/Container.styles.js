import styled from "styled-components";

/** @public
 *  @type {React.RefAttributes<HTMLDivElement>} StyledContainer */
export const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
  overflow: hidden;

  // iPhone SE
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {
    width: 100% !important;
    left: 0 !important;
  }
`