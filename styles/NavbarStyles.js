import styled from "@emotion/styled";

export const NavbarStyles = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  background: white;
  justify-content: center;
  width: 100%;

  .logo {
    width: 25px;
    height: 25px;
  }
  .contain {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  h1 {
    position: relative;
    font-size: 30px;
  }

  li {
    list-style: none;
    text-align: Center;
    font-size: 18px;
    font-weight: Bold;
    border-top: 1px white solid;
  }

  a {
    display: block;
    width: 100%;
    padding: 20px 0;
    text-decoration: none;
    color: white;
    transition: 0.2s;
  }

  a:hover {
    color: #421747;
    transition: 0.2s;
  }

  .menu {
    display: flex;
    margin-top: 5px;
    align-items: center;
    width: 30px;
    cursor: pointer;
  }

  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw;
    left: 0;
    top: 40px;
    transform: ${(props) => (props.menu ? "translate(0)" : "translate(180%)")};
    transition: 0.3s;
    background-color: black;
    z-index: 3;
  }

  @media only screen and (min-width: 400px) {
    .logo {
      width: 35px;
      height: 35px;
    }
    @media only screen and (min-width: 1024px) {
      .contain {
        width: 85%;
      }
      h1 {
        font-size: 40px;
      }

      .menu {
        display: none;
      }

      ul {
        transform: translate(0);
        position: relative;
        top: 0;
        background: white;
        width: 40%;
        flex-direction: row;
        justify-content: space-around;
      }

      li {
        width: 70px;
      }

      a {
        color: black;
      }
      a:hover {
        border-bottom: 5px solid #7f5b83;
      }
    }
  }
`;
