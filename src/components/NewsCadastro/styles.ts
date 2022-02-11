import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 130px;
  background: ${theme => theme.theme.colors.primary};
  

  .container{
    height: 100%;
    width: 100%;
    max-width: 1280px;
    margin:0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    align-items:center;
    h2{
      text-transform:uppercase;
    }
    form{
      display: flex;
      flex-direction: column;
      gap:7px;
      input, button{
        width: 400px;
        height: 35px;
        border:0;
      }
      input{
        padding-left:9px;
      }
      button{
        cursor:pointer;
        background: ${theme => theme.theme.colors.secundary};
        color:white;
      }
    }
  }
`;
