import React, { useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Container, Title, Grid, Box, ContainerGrid, BtnSeeMore, See} from './style'
import GitHubIcon from '@mui/icons-material/GitHub';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import MovieIcon from '@mui/icons-material/Movie';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';


export default function Technologies() {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

   
  return (
    <Container id={'projects'}>
        <Title>
            Projetos
        </Title>
        <ContainerGrid>
            <Grid>
                <Box data-aos="fade-up">
                    <span> FlashLight <FlashlightOnIcon/> </span> 
                    <p>Projeto FlashLight: desenvolvido com React Native</p>
                    <div>
                        <Avatar
                            alt="FlashLight"
                            src="/images/flashlight.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <Link href="https://github.com/geovannaanjos/Flashlight---React-Native" target={'_blank'} rel='noopener'>
                        <See> Ver projeto <ArrowForwardIcon/> </See>
                    </Link>
                </Box>

                <Box data-aos="fade-up">
                    <span> Validação <CheckCircleIcon/> </span>
                    <p>Projeto Validação de dados: desenvolvido com Node e Nest JS</p>
                    <div>
                        <Avatar
                            alt="Validation"
                            src="/images/data.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <Link href="https://github.com/geovannaanjos/nodejs-validacao-de-dados" target={`_blank`} rel='noopener'>
                        <See> Ver projeto <ArrowForwardIcon/> </See>
                    </Link>
                </Box>

                <Box data-aos="fade-up">
                    <span>Movies Api <MovieIcon/></span> 
                    <p>Projeto Movies Api: desenvolvido com React</p>
                    <div>
                        <Avatar
                            alt="Movies"
                            src="/images/movies.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <Link href="https://github.com/geovannaanjos/movies-api" target={"_blank"} rel='noopener'>
                        <See> Ver projeto <ArrowForwardIcon/> </See>
                    </Link>
                </Box>
            </Grid>
            <BtnSeeMore>
                <Link href="https://github.com/geovannaanjos" target={'_blank'} rel='noopener'>
                    Ver Mais <GitHubIcon/>
                </Link>
            </BtnSeeMore>
        </ContainerGrid>
    </Container>
  )
}
