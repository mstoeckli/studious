import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLImageElement>} StyledTable */
export const StyledTable = styled.div`
  height: 100%;
  padding: 1.25rem 1.25rem 0 1.25rem;
  
  & .container {
    overflow-x: auto;
    overflow-y: auto;
    
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
        height: auto;
        margin: 0 0 0.25rem 0;
        
        & table {
          text-align: left;
          vertical-align: middle;
          border-collapse: separate;
          border-spacing: 8px;

          & th, & td {
            padding: 8px;
            white-space: nowrap;
          }
          
          & thead {
            & tr {
              white-space: nowrap;
              
              & th {
                font-weight: 700;
                font-size: 0.65rem;
                color: #787878;
                text-transform: uppercase;
                border-bottom: 1px solid lightgray;
                
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
              & td {
                font-size: 0.7rem;
                font-weight: 500;
                color: var(--description-color);
                
                & div {
                  border-bottom: 1px solid lightgray;
                }
              }
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
`