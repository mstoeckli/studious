import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledInput */
export const StyledInput = styled.div`
  & label {
    box-sizing: border-box;
    display: block;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    color: var(--description-color);
    padding-left: 0.25rem;
  }
  
  & label.required:after {
    content:" *";
    color: var(--color-error);
    font-size: 0.875rem;
  }
  
  & input {
    display: block;
    width: 100%;
    min-height: 44px;
    margin: 0.35rem 0;
    padding: 8px 16px 8px 35px;
    font-size: 0.85rem;
    font-weight: 600;
    font-family: inherit;
    -webkit-appearance: none;
    color: var(--title-color);
    background: #fff;
    transition: border 0.3s ease;
    outline: none;
    border: 1px solid var(--color-input-border);
    border-radius: 5px;
    
    &:invalid[focused="true"] ~ span {
      display: block;
    }
    
    &:invalid[focused="true"] {
      border: 1px solid var(--color-error);
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    
    &::placeholder {
      font-size: 0.775rem;
      font-weight: 400;
      color: #a9a9a9;
    }
  }
  
  & span {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-error);
    display: none;
    margin-bottom: 1rem;
    padding: 0 0.25rem;
    transition: display 0.5s ease-in;
  }
  
  & svg {
    float: left;
    margin-left: 10px;
    margin-top: -45px;
    position: relative;
    z-index: var(--z-index-dropdown-active);
    color: var(--color-icon-default);
  }
`