import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  h1{
    text-transform: uppercase;
    font-size: 40px;
    width: 100%;
  }
  .img{
    width: 30%;

  }
  .noticia{
    width: 70%;

  }
  a{
    color: ${theme => theme.theme.colors.text};
    text-decoration: none;
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-weight: bold;
    font-size: 18px;
    transition: all.4s;
    &:hover{
      font-size: 22px;
    }
  }
`;
