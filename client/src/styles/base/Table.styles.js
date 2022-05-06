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
                    
          & thead {
            & tr {
              white-space: nowrap;
              border-bottom: 1px solid lightgray;
            }
          }

          & tbody {
            & tr {
              & + tr.row-content {
                border-bottom: 1px solid #f9f9f9;
                opacity: 1;
                transition: opacity 0.5s ease;

                & > td {
                  display: table-cell;
                  font-size: 0.85rem;
                  font-weight: 500;
                  color: var(--description-color);
                  padding: 1rem;
                  transition: all 0.5s ease;
                }
              }
              
              & + tr.row-content-hide {
                border-top: 1px solid #f9f9f9;
                opacity: 0;

                & > td {
                  display: none;
                }
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