import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLButtonElement>} StyledCheckbox */
export const StyledCheckbox = styled.input`
  position: relative;
  cursor: pointer;
  width: 0;

  &:before, &:checked:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 5px;
    border: 1px solid #e9e9e9;
    background-color: #fff;
    content: "";
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
    width: 11px;
    height: 11px;
    border-radius: 3px;
    background: var(--color-nav-menu-hover);
    border-width: 0 2px 2px 0;
    position: absolute;
    top: 0.175rem;
    left: 0.175rem;
  }
`