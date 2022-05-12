import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLHeadingElement>} StyledHeader */
export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & .logo {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding-left: 8px;

    & img {
      width: 32px;
      height: 40px;
    }
  }

  & .company {
    padding-left: 16px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;

    & .studious {
      font-size: 1rem;
      font-weight: 600;
      color: var(--title-color);
    }

    & p {
      display: block;
      font-size: 0.775rem;
      color: var(--description-color) !important;
      margin: 0 !important;
    }
  }

  & .company-hide {
    display: none !important;
  }
`