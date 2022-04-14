import styled from 'styled-components';

/**  @return {React.RefAttributes<HTMLDivElement>} StyledSubscription */
export const StyledSubscription = styled.section`
  width: 275px;
  height: 600px;
  margin-bottom: 1rem;
  box-shadow: rgb(0 0 0 / 5%) 0 6px 24px 0, rgb(0 0 0 / 8%) 0 0 0 1px;
  background: #fff;
  
  & header {
    text-align: center;
    line-height: 24px;
    
    & span {
      font-size: 0.8rem;
      font-weight: 600;
      color: #fff;
    }
  }
  
  & header.basic {
    background: #688fbf;
  }
  
  & header.professional {
    background: #68bf8a;
  }
  
  & main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 160px;
    padding: 1rem;
    
    & .price {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      
      & .title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #455a64;
      }
      
      & .description {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--title-color);
        
        & .per-month {
          font-size: 0.85rem;
          font-weight: 600;
          color: #8f9ca2;
          padding-left: 0.15rem;
        }
      }
    }
  }
  
  & article {
    padding: 0 1rem;
  }
`