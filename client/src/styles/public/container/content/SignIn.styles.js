import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledSignIn */
export const StyledSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 8px;

  & h1 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 16px;
    text-align: center;
    color: var(--title-color);
  }

  & p {
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;
    color: var(--description-color);
  }

  & .made-in-switzerland {
    font-weight: 600;
    margin: 16px 0 8px 0 !important;
  }

  & .container {
    margin: auto;

    & form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 32px 0;

      & p {
        margin: 32px 0;

        & a, & strong {
          font-weight: 600;
          color: var(--title-color);
          text-decoration: none;
        }
      }

      & ul {
        margin-bottom: 56px;
        overflow: hidden;

        & .active {
          color: var(--color-nav-menu-hover);
        }

        & li {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          position: relative;
          width: 100px;
          float: left;
          list-style-type: none;

          & svg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            color: #fff;
            background: var(--color-icon-default);
            border: 2px solid #fff;
            border-radius: 12px;
            margin: 0 auto 10px auto;
            padding: 8px;
            transition: background 0.4s ease;
          }

          & svg.active {
            background: var(--background-color-nav-menu-hover);
            color: var(--color-nav-menu-hover);
          }

          & svg.completed {
            background: var(--background-color-completed);
            color: var(--color-completed);
          }

          & h4 {
            color: var(--title-color);
            font-size: 0.85rem;
            font-weight: 600;
          }
        }

        li:not(:first-child):after{
          position: absolute;
          content: "";
          left: -12.5px;
          top: 0;
          width: 25px;
          height: 25px;
          border-bottom: 1px solid var(--color-duotone-light);
        }
      }

      & fieldset {
        display: none;
        opacity: 0;
        width: 400px;
        height: auto;
        border: none;
        
        & .nav-buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 8px;

          & button {
            max-width: 200px;
            transition: background-color 0.3s ease;
          }

          & button.back:hover {
            background-color: #9b556a
          }

          & button.next:hover {
            background-color: #559b79;
          }

          & button.next-disabled:hover {
            background-color: #7f9b8d;
          }
        }
      }

      & fieldset.active {
        opacity: 1;
        display: block;
      }

      & .error {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-error);
        text-align: center;
        display: none;
        margin: 1rem 0;
        transition: display 0.5s ease-in;
      }

      & .error-none {
        display: none;
      }

      & .error-block {
        display: block;
      }

      & p {
        font-size: 0.8rem;
        font-weight: 400;
        text-align: center;
        color: var(--description-color);
      }
    }
  }

  ::-webkit-scrollbar {
    width: var(--webkit-scrollbar-width);
    border-radius: var(--webkit-scrollbar-border-radius);
    background: var(--webkit-scrollbar-background);
  }

  ::-webkit-scrollbar-thumb {
    height: var(--webkit-scrollbar-thumb-height);
    border-radius: var(--webkit-scrollbar-thumb-border-radius);
    background-color: var(--webkit-scrollbar-thumb-background-color);
  }

  // iPhone SE
  // Browser -> Size lesser than 595px
  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px),
  screen and (max-width: 770px) {
    & form ul li {
      width: 65px !important;

      & svg {
        width: 32px !important;
        height: 32px !important;
      }

      & h4 {
        display: none;
      }

      &:not(:first-child):after{
        display: none;
      }
    }

    & form fieldset {
      width: 350px !important;
    }
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {
    & form ul {
      margin-bottom: 32px;
    }
  }
`