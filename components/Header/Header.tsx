import React,{useState} from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  TitleLogo,
  OCLinkBtn,
  NavbarLinkExtended,
  Close,
  Open
} from './style'


export default function Header(){
  const [ extendNavbar, setExtendNavbar] = useState(false);

  return(
    <Container extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <TitleLogo> Geo | Dev</TitleLogo>
        </LeftContainer>

        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink href="#about"> Sobre </NavbarLink>
            <NavbarLink href="#skills"> Skills </NavbarLink>
            <NavbarLink href="#projects"> Projetos </NavbarLink>
            <NavbarLink href="#contato"> Contato </NavbarLink>
            <OCLinkBtn onClick={()=>{setExtendNavbar((curr)=> !curr)}}> 
              {extendNavbar ? <> <Close/> </> : <> <Open/> </>}
            </OCLinkBtn>
          </NavbarLinkContainer>
        </RightContainer>

      </NavbarInnerContainer>
      { extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended href="#about"> Sobre </NavbarLinkExtended>
          <NavbarLinkExtended href="#skills"> Skills </NavbarLinkExtended>
          <NavbarLinkExtended href="#projects"> Projetos </NavbarLinkExtended>
          <NavbarLinkExtended href="#contato"> Contato </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </Container>

  )
}