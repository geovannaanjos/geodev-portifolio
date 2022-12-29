import React,{useEffect} from 'react';
import { Container,ContactDirect, Center, Social, ContainerRedes, Grid, Box, ComeBack } from './style';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';

export default function Contato() {
    function handleScrollTop(){
        window.scroll({
          top:0,
          behavior:'smooth'
        })
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <>
    <Container>
        <Center>
            <Social>
                <h1>Entre em Contato</h1>
                <ContactDirect>
                    <span> <Link href="mailto: geovanna.anjos92@gmail.com" target={"_blank"} rel='noreferrer noopener'>geovanna.anjos92@gmail.com</Link></span>
                    <span> <Link href="https://www.linkedin.com/in/geovanna-anjos12/" target={"_blank"} rel='noreferrer noopener'>geovanna-anjos12</Link></span>
                </ContactDirect>
                <ContainerRedes id="contato" >
                    <Grid>
                        <Box >
                            <button className='github'>
                                <Link href="https://github.com/geovannaanjos" target={"_blank"} rel='noreferrer noopener'>
                                    <GitHubIcon/>
                                </Link>
                            </button>
                        </Box>
                        <Box >
                            <button className='email'>
                                <Link href="mailto: geovanna.anjos92@gmail.com" target={"_blank"} rel='noreferrer noopener'>
                                    <EmailIcon/>
                                </Link>
                            </button>
                        </Box>
                        <Box >
                            <button className='linkedin'>
                                <Link href="https://www.linkedin.com/in/geovanna-anjos12/" target={"_blank"} rel='noreferrer noopener'>
                                    <LinkedInIcon/>
                                </Link>
                            </button>
                        </Box>
                        <Box>
                            <button className='instagram'>
                                <Link href="https://instagram.com/ge.anjosssss" target={"_blank"} rel='noreferrer noopener'>
                                    <InstagramIcon/>
                                </Link>
                            </button>
                        </Box>
                    </Grid>
                </ContainerRedes>
            </Social>
        </Center>
        <ComeBack>
            <button type='button' onClick={handleScrollTop}>
                Voltar ao topo <ArrowCircleUpIcon/>
            </button>
        </ComeBack>
    </Container>
    </>
  )
}
