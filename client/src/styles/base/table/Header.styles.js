import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledTableHeader */
export const StyledTableHeader = styled.div`
  width: 100%;

  & .dropdown-icon-custom {
    font-size: 1.25rem;
    padding-left: 0.5rem;
    color: var(--color-icon-default);
  }

  & .dropdown-menu-container-custom {
    top: calc(100% + 20px);
  }

  & .info {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 0.75rem;

    & .content {
      & .title {
        display: flex;
        align-items: center;

        & > span {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--title-color);
        }

        & > svg {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: 1.25rem;
          color: var(--color-nav-menu-hover);
          padding-left: 0.5rem;
        }
      }

      & p {
        font-size: 0.875rem;
        color: var(--description-color);
      }
    }
  }

  & > header {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    min-height: 44px;
    height: auto;
    width: 100%;
    padding-bottom: 0.5rem;

    & .quick-options {
      height: 32px;
      border: 1px solid #e9e9e9;
      border-radius: 6px;
      outline: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      cursor: pointer;

      & > svg {
        color: var(--color-icon-default);
        padding-right: 0.25rem;
      }

      & > span {
        font-size: 0.775rem;
        font-weight: 500;
        color: var(--title-color-nav-menu);
      }

      &:hover {
        border-color: var(--border-color-dropdown-filter-hover);
        background: var(--background-color-dropdown-filter-hover);

        & svg, & span {
          color: var(--color-nav-menu-hover);
        }
      }
    }
  }

  & .option-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    padding-bottom: 0.5rem;

    & .values {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: auto;
      height: 24px;
      background: #f5f5f5;
      border: 1px solid #c7c7c7;
      border-radius: 5px;

      & > svg {
        color: var(--color-icon-default);
        padding: 0 0 0 0.25rem;
      }

      & > span {
        width: 100%;
        padding: 2px 4px;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--title-color-nav-menu);
      }
    }
  }

  & > article {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0.25rem 0;

    & > span {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--title-color-nav-menu);
    }
  }

  & .card-info {
    margin-bottom: 0.75rem;
  }
`