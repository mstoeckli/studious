import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledSignIn */
export const StyledSignIn = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem;
  background: #fff;
  
  & .left {
    border: 1px solid red;
    width: 350px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  
  & .right {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    
    & .signin-step1 {
      max-width: 450px;
      min-width: 300px;
    }
  }
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
  //flex-wrap: wrap;
  //height: 100%;
  //
  //& .image {
  //  display: flex;
  //  justify-content: flex-end;
  //  width: 50%;
  //  
  //  & img {
  //    min-width: 650px;
  //    min-height: auto;
  //  }
  //}
  //
  //& .content {
  //  //display: flex;
  //  //justify-content: flex-start;
  //  //width: 50%;
  //  
  //  & h1 {
  //    font-size: 2rem;
  //    font-weight: 800;
  //    text-align: center;
  //    margin-bottom: 1rem;
  //  }
  //
  //  & p {
  //    font-size: 0.775rem;
  //    font-weight: 500;
  //    margin-bottom: 0.25rem;
  //    text-align: center;
  //    color: #767676;
  //  }
  //
  //  & .content-auth {
  //    max-width: 350px;
  //    min-width: 350px;
  //  }
  //
  //  & .auth-mail-error {
  //    font-size: 0.65rem;
  //    font-weight: 500;
  //    text-align: center;
  //    color: var(--color-error);
  //    display: none;
  //    margin: 1rem 0;
  //    transition: display 0.5s ease-in;
  //  }
  //
  //  & .auth-mail-error-none {
  //    display: none;
  //  }
  //
  //  & .auth-mail-error-block {
  //    display: block;
  //  }
  //
  //  & .content-copyright {
  //    text-align: center;
  //    margin-top: 0.5rem;
  //  }
  //}
`