import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledSidebar */
export const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  padding: 0.5rem 0.75rem;
  border-right: 1px solid lightgray;
  box-shadow: rgb(0 0 0 / 10%) 0 1px 5px 0;
  z-index: var(--z-index-dropdown-active);

  & menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100% - 88px);
    margin-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;

    & span.hide {
      display: none !important;
    }
    
    & .group {
      font-weight: 500;
      margin: 0.25rem 0;

      & .group-open {
        display: block;
      }

      & .group-close {
        display: none;
      }
      
      & > span {
        font-size: 0.7rem;
        font-weight: 600;
        padding-left: 12px;
        text-transform: uppercase;
        color: var(--title-color-nav-group);
      }
      
      & ul {
        margin: 4px 0;

        & li {
          display: flex;
          align-items: center;
          height: 40px;
          list-style: none;
          border-radius: 12px;
          margin-bottom: 4px;
          transition: background 0.2s ease-in;
          cursor: pointer;

          & svg {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: var(--color-icon-default);
            padding-left: 16px;
            width: 16px;
          }

          & > span {
            font-size: 0.775rem;
            font-weight: 500;
            padding-left: 12px;
            color: var(--title-color-nav-menu);
            text-transform: none;
            width: 100%;
          }

          &:hover {
            background: var(--background-color-nav-menu-hover);

            & svg, & span {
              color: var(--color-nav-menu-hover);
            }
          }
        }

        & .active {
          background: var(--background-color-nav-menu-hover);

          & svg, & span {
            color: var(--color-nav-menu-hover);
          }
        }
      }

      & .onboarding-content {
        position: relative;
        width: 100%;
        margin-top: 1rem;
        border: 0.1rem dashed #bfbfbf;
        border-radius: 5px;
      }
      
      & .onboarding-content-project-hide {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        cursor: pointer;

        & svg {
          color: var(--color-icon-default);
          font-size: 1.5rem;
        }

        & span {
          display: none;
        }

        &:hover {
          & svg {
            color: #3f6ad8;
          }
        }
      }
      
      & .onboarding-content-project {
        height: auto;
        text-align: center;
        padding: 1rem;
        cursor: pointer;

        & svg {
          margin-bottom: 1rem;
          font-size: 2rem;
          color: var(--color-icon-default);
        }

        & .project-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--title-color);
        }

        & .project-description {
          font-size: 0.775rem;
          font-weight: 500;
          padding-left: 12px;
          color: var(--description-color);
        }

        &:hover {
          & svg,
          & .project-description {
            color: #3f6ad8;
          }
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0;
      border-radius: var(--webkit-scrollbar-border-radius);
      background: var(--webkit-scrollbar-background);
    }
  }

  // iPhone SE
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {
    display: none;
  }
`