import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledTable */
export const StyledTable = styled.div`
  height: 100%;
  padding: 1.25rem 1.25rem 0 1.25rem;

  & .dropdown-menu-container {
    top: calc(100% + 25px);
  }
  
  & .container {
    & section {
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid var(--color-input-border);
      border-radius: 6px;
      background: #fff;
      padding: 0 0 4px 0;
      margin-bottom: 0.5rem;
      margin-right: 0.25rem;
      transition: all 0.3s ease-in-out;
      
      & header {
        display: flex;
        justify-content: space-between;
        height: 40px;
        padding: 0 0.5rem 0 1rem;
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
          padding-right: 1rem;
          font-size: 1rem;
          cursor: pointer;
        }
      }
      
      & header.expanded {
        //color: #2d59ab;
        background: #fbfbfb;
      }
      
      & article {
        height: 100%;
        margin: 0.25rem;
        overflow-x: auto;
        overflow-y: auto;
        transition: all 0.3s ease-in-out;
        
        & table {
          text-align: left;
          vertical-align: middle;
          border-collapse: collapse;
          width:100%;

          & td.align-center {
            text-align: center;
          }

          & td {
            padding: 8px;
            width: 1%;
            white-space: nowrap;

            &:nth-child(1) {
              position: sticky;
              left: 0;
              z-index: 1;
              background-color: #fff;
            }
          }

          & td:first-child {
            padding-left: 14px;
          }
          
          //& th.align-center,
          //& td.align-center {
          //  text-align: center;
          //}
          //
          //& th, & td {
          //  padding: 8px;
          //  width: 1%;
          //  white-space: nowrap;
          //
          //  &:nth-child(1) {
          //    position: sticky;
          //    left: 0;
          //    z-index: 1;
          //    background-color: #fff;
          //  }
          //}
          //
          //& th:first-child,
          //& td:first-child {
          //  padding-left: 14px;
          //}
          
          & thead {
            & tr {
              white-space: nowrap;
              border-bottom: 1px solid lightgray;
              
              //& th {
              //  position: sticky;
              //  top: 0;
              //  z-index: 1;
              //  background-color: #fff;
              //  font-weight: 700;
              //  font-size: 0.65rem;
              //  color: #787878;
              //  text-transform: uppercase;
              //  
              //  & span {
              //    padding-right: 0.5rem;
              //  }
              //  
              //  & svg {
              //    cursor: pointer;
              //  }
              //
              //  &:nth-child(1) {
              //    z-index: 2;
              //    background-color: #fff;
              //  }
              //}
              
              //& th.show-line-number,
              //& th.multi-select-checkbox,
              //& th.show-content-icon {
              //  width: 40px;
              //  min-width: 40px;
              //}
            }
          }

          & tbody {
            & tr {
              border-bottom: 1px solid #f9f9f9;
              
              & td {
                font-size: 0.7rem;
                font-weight: 500;
                color: var(--description-color);
                
                & div {
                  padding: 4px
                }
              }
              
              & td.show-line-number {
                font-size: 0.75rem;
                font-weight: 600;
                color: var(--title-color);
              }
              
              & td.show-content-icon {
                font-size: 0.85rem;
                color: var(--title-color);
              }
            }
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
    }
    
    & section.group-close {
      padding: 0;
      
      & header {
        background: #fff;
        border-bottom: none;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
      
      & article {
        height: 0;
        opacity: 0;
        margin: 0;
      }
    }
  }
`