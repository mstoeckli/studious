import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledTable */
export const StyledTable = styled.div`
  height: 100%;
  padding: 1.25rem 1.25rem 0 1.25rem;
  
  & section {
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
  }

  & .table {
    overflow-x: auto;
    overflow-y: auto;
    height: 600px;
    
    & article {
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid var(--color-input-border);
      border-radius: 6px;
      background: #fff;
      padding: 0 0 4px 0;
      margin-bottom: 0.5rem;
      margin-right: 0.25rem;
      
      & header {
        display: flex;
        justify-content: space-between;
        height: 40px;
        padding: 0 0 0 0.5rem;
        align-items: center;
        font-size: 0.85rem;
        color: var(--title-color);
        background: #fff;
        border-bottom: 1px solid var(--color-input-border);
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        
        & div {
          display: flex;
          justify-content: center;
          align-items: center;

          & span {
            font-weight: 700;
          }
        }
        
        & svg {
          padding-right: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
      }
      
      & header.expanded {
        //color: #2d59ab;
        background: #fbfbfb;
      }
      
      & main {
        height: auto;
        margin: 0 0 0.25rem 0;
        
        & table {
          text-align: left;
          vertical-align: middle;
          width: 100%;
          border-collapse: collapse;

          & th, & td {
            padding: 8px;
            white-space: nowrap;
          }
          
          & thead {
            & tr {
              border-bottom: 1px solid var(--color-input-border);

              & th {
                font-weight: 700;
                font-size: 0.65rem;
                color: #787878;
                text-transform: uppercase;
                
                & span {
                  padding-right: 0.25rem;
                }
                
                & svg {
                  cursor: pointer;
                }
              }
            }
          }
          
          & tbody {
            & tr {
              line-height: 24px;
              height: 24px;
              
              & th, td {
                padding: 8px 8px 0 8px;
                font-size: 0.7rem;
                font-weight: 500;
                color: var(--description-color);
              }

              &:nth-last-child(1) {
                margin-bottom: 6px;
              }
            }
          }
        }
      }
      
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
    
    ::-webkit-scrollbar {
      width: var(--webkit-scrollbar-width);
      height: var(--webkit-scrollbar-width);
      border-radius: var(--webkit-scrollbar-border-radius);
      background: var(--webkit-scrollbar-background);
    }
    
    ::-webkit-scrollbar-thumb {
      height: var(--webkit-scrollbar-thumb-height);
      border-radius: var(--webkit-scrollbar-thumb-border-radius);
      background-color: var(--webkit-scrollbar-thumb-background-color);
    }
  }
  //& .table {
  //  overflow-x: auto;
  //  overflow-y: scroll;
  //  border: 1px solid var(--color-input-border);
  //  border-radius: 6px;
  //  background: #fff;
  //  padding: 0 0.5rem;
  //  margin-top: 0.75rem;
  //  height: 200px;
  //  
  //  & table {
  //    text-align: left;
  //    vertical-align: middle;
  //    width: 100%;
  //    border-collapse: collapse;
  //
  //    & th, & td {
  //      padding: 8px;
  //      white-space: nowrap;
  //    }
  //
  //    & thead {
  //      position: sticky;
  //      top: 0;
  //      left: 0;
  //      z-index: 2;
  //      background: #fff;
  //      border-bottom: 1px solid #e9e9e9;
  //      height: 12px;
  //      line-height: 12px;
  //      
  //      & tr {
  //        & th {
  //          font-weight: 600;
  //          font-size: 0.8rem;
  //          color: var(--title-color);
  //          
  //          & span {
  //            padding-right: 0.5rem;
  //          }
  //
  //          & svg {
  //            cursor: pointer;
  //          }
  //        }
  //      }
  //    }
  //
  //    & tbody {
  //      & tr {
  //        height: 20px;
  //        line-height: 20px;
  //                  
  //        & th, td {
  //          font-size: 0.7rem;
  //          font-weight: 500;
  //          color: var(--description-color);
  //        }
  //        
  //        & th {
  //          font-weight: 600;
  //          color: var(--title-color);
  //        }
  //      }
  //    }
  //
  //    & .highlight-error {
  //
  //    }
  //
  //    & .highlight-warning {
  //
  //    }
  //
  //    & .highlight-success {
  //
  //    }
  //
  //    & .highlight-info {
  //
  //    }
  //  }
  //
  //  ::-webkit-scrollbar {
  //    width: var(--webkit-scrollbar-width);
  //    height: var(--webkit-scrollbar-width);
  //    border-radius: var(--webkit-scrollbar-border-radius);
  //    background: var(--webkit-scrollbar-background);
  //  }
  //
  //  ::-webkit-scrollbar-thumb {
  //    height: var(--webkit-scrollbar-thumb-height);
  //    border-radius: var(--webkit-scrollbar-thumb-border-radius);
  //    background-color: var(--webkit-scrollbar-thumb-background-color);
  //  }
  //}
`