import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .text{
      width:48%; 
      ${media.lessThan("medium")`
        width: 100%;
      `}
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align:center;
      height: 100vh;
      ${media.lessThan("medium")`
        height: 200px;
      `}
    }
    .form{
      width:48%; 
      ${media.lessThan("medium")`
        width: 100%;
      `}

      height: 100vh;
      ${media.lessThan("medium")`
        height: 200px;
      `}
      display: flex;
      align-items: center;
      justify-content: center;
      form{
        width: 100%;
        max-width:400px ;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      input{
        border: 0;
        height: 30px;
        padding-left: 15px;
        border-radius: 8px;
      }
      button{
        border: 0;
        height: 30px;
        cursor: pointer;
        border-radius: 8px;
        background: ${theme => theme.theme.colors.secundary};
        color: ${theme => theme.theme.colors.text};
      }
    }
  }
`;
