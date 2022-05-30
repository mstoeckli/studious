import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledFilter */
export const StyledFilter = styled.div`
  width: 300px;
  max-height: ${props => `${props.tableHeight - 40}px`};
  overflow-x: hidden;
  overflow-y: auto;
  
  & > header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid #e9e9e9;

    & span {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--title-color)
    }

    & svg {
      font-size: 1rem;
      padding-left: 1rem;
      cursor: pointer;
    }

    & .apply {
      color: #455a64
    }

    & .clear {
      color: #d83f3f
    }
  }
`