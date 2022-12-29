import styled from '@emotion/styled';

export const Container = styled.section`
    background: #222;
`

export const ContactDirect = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    > span{
        color: #ccc;
        font-weight: 200;
    }
    span > a{
        color: #ccc;
        cursor: pointer;
        :hover{
            color: #fff;
        }
    }
`

export const Center = styled.section`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    height: 100vh;
    @media(min-width: 700px){
        flex-direction: row-reverse;
    }
`

export const Social = styled.div`
    width: 100%;
    background: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1{
        font-size: 3rem;
        color: #f1f1f1;
        font-weight: 500;
        font-family: 'Work Sans';
    }
`



export const ContainerRedes = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    a{
        text-decoration: none;
    }
    h1{
        color: #222;
        font-weight: 600;
        font-size: 25px;
        font-family: 'Work Sans';
    }
    
`


export const Grid = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 10px;
`

export const Box = styled.div`
    display: flex;
    background: #222;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 20vh;
    width: 100px;
    :hover{
        color: #3e7b69;
    }
    > button{
        outline: none;
        border: none;
        background: transparent;
        color: #fff;
    }

    a > svg{
        cursor: pointer;
        color: #fff;
        font-size: 55px;
        transition: all 0.8s;
        @media(min-width: 730px){
            font-size: 65px;
        }
    }
    @media(min-width: 920px){
        justify-content: center;
    }
`


export const ComeBack = styled.div`
    display: flex;
    padding: 1rem;
    align-items: flex-end;
    justify-content: flex-end;
    background: #222; 
    button{
        background: transparent;
        padding: 0.5rem 1rem;
        border: none;
        color: #fff;
        font-size: 1.3rem;
        font-family: 'Roboto';
        transition: all 0.2s;
        > svg{
            font-size: 30px ;
        }
        :hover{
            filter: brightness(1.3);
            background: #111;
            color: #fff;
        }
    }
`