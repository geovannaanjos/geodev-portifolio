import React,{useEffect} from 'react'
import {Container, AboutP, PrincipalText, NameProf, FullName, FinalName, ButtonProjects, ImageProfile, CargoName, Cargo, LeftSide, RightSide} from './style'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Technologies from '../Technologies/Technologies';
import Skills from '../Skills/Skills';
import Contato from '../Contato/Contato';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Body(){
  useEffect(()=>{
      Aos.init({duration: 2000});
  },[])
  return (
    <>
      <Container>
        
        <LeftSide>
          <CargoName> Full Stack <Cargo> Developer</Cargo></CargoName>
          <ImageProfile>
              <Image src="/images/avatar.jpeg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/>
          </ImageProfile>
        </LeftSide>
        
        <RightSide id="about">
          <PrincipalText>
            <NameProf>
              <FullName>Geovanna <FinalName>Anjos</FinalName></FullName>
            </NameProf>
            <AboutP>
              Olá, seja muito bem vindo (a)! 
              Me chamo Geovanna tenho 19 anos e atualmente moro em São Paulo. Sou desenvolvedora Full Stack e apaixonada por desenvolver e criar coisas tanto no  meio tecnologico, quanto fora.
            </AboutP>
            <AboutP>
              Meu maior objetivo é desenvolver tecnologias que tenham impacto positivo na vida de outras pessoas
              e disseminar conhecimento para aqueles que não possuam acesso.
            </AboutP>

            <ButtonProjects>
             <Link href="https://www.linkedin.com/in/geovanna-anjos12/" target={"_blank"} rel='noopener'> Conhecer Mais <ArrowForwardIcon/> </Link>
            </ButtonProjects>
          </PrincipalText>
        </RightSide>
      </Container>
      <Skills/>
      <Technologies/>
      <Contato/>
    </>
  )
}

