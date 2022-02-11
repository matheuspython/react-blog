import styled from 'styled-components';

export const Container = styled.header`
  background:#3C474B;
  height: 75px;
  width:100%;
  color:#fff;
  .container{
    padding:0 2%;
    width: 100%;
    height: 100%;
    max-width:1280px;
    margin: 0 auto;
    display: flex;
    align-items:center;
    justify-content: space-between;
    img{
      cursor:pointer;
      width: 80px;
    }
  }
  aside{
    z-index:999;
    transition: .4s;
    display: none;
    position:fixed;
    top:0;
    right:0;  
    width: 300px;
    height: 100vh;
    background: #162521;
    
    img{
      width: 30px;
      position: absolute;
      right: 15px;
      top: 15px;
      cursor: pointer;
    }

    ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      gap:30px;
      a{
        color: white;
        text-decoration:none;
        transition: .4s;
        &:hover{
          font-size:20px;
        }
      }
    }

  }
`;
