import styled from 'styled-components';
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '10vh')};
  background: #222;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 700px){
    height: 15vh;
  }
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`

export const TitleLogo = styled.h1`
  font-size: 2rem;
  font-weight: 100;
  color: #fff;
  font-family: 'Inter';
`

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 50px;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  font-family: 'inter';
  font-weight: 400;
  text-decoration: none;
  margin: 1rem;
  transition: all .4s;
  display: inline-block;
  text-decoration: none;

  :hover{
    color: #ccc;
  }

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #307e77;
    transition: width .3s;
  }

  :hover::after {
    width: 100%;
    transition: width .3s;
  }

  @media(max-width: 700px){
    display: none;
  }
`

export const OCLinkBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media(min-width: 700px){
    display: none;
  }
`

export const Open = styled(MenuIcon)`
  color: #fff;
  font-size: 30px;
  transition: all .4s;
  :hover{
    color: #ccc;
    transition: all .4s;
  }
`

export const Close = styled(CloseIcon)`
  color: #fff;
  width: 1.2em;
  height: 1.2em;
  :hover{
      transform: rotate(-45deg);
      transition: all .4s;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  margin-top: 1rem;

  @media(min-width: 700px){
    display: none;
  }
`

export const NavbarLinkExtended = styled(Link)`
  color: #fff;
  font-size: 2em;
  font-family: 'inter';
  font-weight: 400;
  text-decoration: none;
  transition: all .3s;
  margin-top: 14px;
  padding: 0.8rem 2rem;
  width: 100%;
  text-align: center;
  :hover{
    color: #222;
    background: #fff;
    border-radius: 2px;
    width: 100%;
  }

`