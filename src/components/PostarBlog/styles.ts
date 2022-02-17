import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  .container{
    width: 1280px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 9px 2%;
    form{
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 6px;
      input{
        width: 100%;
        max-width: 300px;
        border-radius: 8px;
        height: 30px;
        padding-left: 9px;
        border: 0;
      }
      textarea{
        width: 70vw;
        resize: vertical;
        max-height: 300px;
        padding: 9px;
        border: 0;
        height: 200px;
      }
      button{
        width: 100%;
        max-width: 300px;
        height: 30px;
        border-radius: 8px;
        border: 0;
        background: ${theme => theme.theme.colors.secundary};
        color: ${theme => theme.theme.colors.text};
        cursor: pointer;
      }
    }
  }
`;
