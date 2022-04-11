import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledSignUp */
export const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

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
    margin-bottom: 32px;
    text-align: center;
    color: var(--description-color);
    
    & a {
      font-weight: 600;
      color: var(--title-color);
      text-decoration: none;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    overflow-y: auto;
    overflow-x: hidden;

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
      
      & .signup-provider {
        display: flex;
        margin-bottom: 10px;
        outline: none;
        text-align: center;
        text-transform: none;
        width: 100%;
        text-rendering: optimizelegibility;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        text-decoration: none;
        overflow: hidden;
        height: 56px;
        background: #fff;
        border: 1px solid var(--color-icon-default);
        padding: 0 24px;
        
        & img {
          height: 24px;
          width: 24px;
        }
        
        & span {
          font-size: 0.85rem;
          font-weight: 600;
          flex-grow: 1;
        }
      }
      
      & .nav-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 8px;
      }
    }
    
    & fieldset.active {
      opacity: 1;
      display: block;
    }
  }
`