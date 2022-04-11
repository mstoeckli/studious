import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledProjectsNotFound */
export const StyledProjectsNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 4000px;
  height: 100%;

  .error-code {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    & .number {
      font-weight: 900;
      font-size: 15rem;
      line-height: 1;
      color: #293b49
    }
    
    & .illustration {
      position: relative;
      width: 12rem;
      margin: 0 2rem;
      
      & .circle {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 12rem;
        height: 11rem;
        border-radius: 50%;
        background-color: #293b49;
      }
      
      & .clip {
        position: absolute;
        bottom: 0.3rem;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        width: 12.5rem;
        height: 13rem;
        border-radius: 0 0 50% 50%;

        & .paper {
          position: absolute;
          bottom: -0.3rem;
          left: 50%;
          transform: translateX(-50%);
          width: 9.2rem;
          height: 12.4rem;
          border: 0.3rem solid #293b49;
          background-color: #fff;
          border-radius: 0.8rem;
          
          & .face {
            position: relative;
            margin-top: 2.3rem;

            & .eyes {
              position: absolute;
              top: 0;
              left: 2.4rem;
              width: 4.6rem;
              height: 0.8rem;

              & .eye {
                position: absolute;
                bottom: 0;
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background-color: #293b49;
                animation-name: eye;
                animation-duration: 4s;
                animation-iteration-count: infinite;
                animation-timing-function: ease-in-out;
              }

              & .eye-left {
                left: 0;
              }

              & .eye-right {
                right: 0;
              }
            }

            & .rosyCheeks {
              position: absolute;
              top: 1.6rem;
              width: 1rem;
              height: 0.2rem;
              border-radius: 50%;
              background-color: #fdabaf;
            }

            & .rosyCheeks-left {
              left: 2rem;
            }

            & .rosyCheeks-right {
              right: 1.4rem;
            }

            & .mouth {
              position: absolute;
              top: 3.1rem;
              left: 50%;
              width: 1.6rem;
              height: 0.2rem;
              border-radius: 0.1rem;
              transform: translateX(-50%);
              background-color: #293b49;
            }
          }
        }
      }
    }
  }

  & span.title {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--title-color);
  }

  & span.description {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--description-color);
  }

  @keyframes eye {
    0% {
      height: 0.8rem;
    }
    50% {
      height: 0.8rem;
    }
    52% {
      height: 0.1rem;
    }
    54% {
      height: 0.8rem;
    }
    100% {
      height: 0.8rem;
    }
  }
`