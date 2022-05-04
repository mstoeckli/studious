import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLButtonElement>} StyledCheckbox */
export const StyledCheckbox = styled.input`
  position: relative;
  cursor: pointer;

  &:before, &:checked:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    border: 1px solid var(--color-input-border);
    background-color: #fff;
    content: "";
    margin-left: -0.125rem;
    border-radius: 3px;
  }

  //&:checked:after {
  //  content: "";
  //  display: block;
  //  width: 11px;
  //  height: 4px;
  //  border-radius: 3px;
  //  background: var(--color-nav-menu-hover);
  //  border-width: 0 2px 2px 0;
  //  position: absolute;
  //  top: 0.375rem;
  //  left: 0.175rem;
  //}

  &:checked:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background: var(--title-color);
    position: absolute;
    top: 3px;
    left: 1px;
  }
`