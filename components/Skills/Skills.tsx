import { Tooltip } from '@mui/material'
import React,{useEffect} from 'react'
import {Container, Grid, Icon} from './style'
import Card from '../Body/Card/Card'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'



export default function Skills() {
    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])

  return (
    <Container id={'skills'} >
        <h1>Trajetória & Skills</h1>
        <p> Cursei 3 anos de ensino médio com habilitação técnica em Recursos Humanos, e durante esses anos eu desenvolvi a paixão por criar e desenvolver projetos.</p>
        <p> Resiliência, empatia, criatividade e organização são minhas principais skills. Faço judô e jiu jitsu desde os 6 anos, e muito da dedicação e resiliência que aprendi no dojo, hoje é uma bagagem na minha trajetória. </p>
        <Grid data-aos="fade-right">
            <h1>Hard Skills</h1>
            <ul>
                <Tooltip title="JavaScript" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/js.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>  
                <Tooltip title="Typescript" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/ts.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="React" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/react.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="Node JS" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/node-js.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="Nest JS" data-aos="flip-left"> 
                   <Icon>
                        <Image src="/images/nest-js.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                   </Icon>
                </Tooltip>
                <Tooltip title="Next JS" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/next-js.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="C# (C Sharp)" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/c-sharp.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="Git" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/git.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
            </ul>
            <ul>
                <Tooltip title="CSS3" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/css.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="HTML5" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/html.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>             
                <Tooltip title="Material UI" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/mui.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="Bootstrap" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/boots.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="Figma" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/figma.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="Sass" data-aos="flip-left">
                    <Icon>
                        <Image src="/images/sass.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                    </Icon>
                </Tooltip>
                <Tooltip title="Canva" data-aos="flip-left">
                   <Icon>
                        <Image src="/images/canva.svg" alt="avatar" width={600} height={400} quality={70} layout="responsive"/> 
                   </Icon>
                </Tooltip>
            </ul>
            <Card/>
        </Grid>
    </Container>
  )
}
