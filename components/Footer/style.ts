import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    justify-content: space-around;
    background: #222;
    padding: 1rem;
    color: #fff;
    box-shadow: 10px 0px 4px 0px #ccc;
    @media(max-width: 460px){
        flex-direction: column;
    }
    @media(min-width: 1024px){
        height: 15vh;
    }
`

export const Author = styled.h1`
    font-weight: 200;
    font-size: 1.8rem;
`

export const Copy = styled.h2`
    font-weight: 400;
    font-size: 1.2rem;
`