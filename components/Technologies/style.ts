import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #111;
    background-image: url('/images/back-grid.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem;
`

export const Title = styled.h1`
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    font-weight: 300;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-family: 'Work Sans';;
    margin: 2rem;
`

export const ContainerGrid = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

export const Grid = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    width: 90%;
    padding: 1rem 2rem;
    background: #222;
    margin:1rem 10px;
    border-radius: 2%;
    background: rgba(255, 255, 255, 0.21);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    > a{
        color: #fff;
        font-weight: 300;
        font-size: 25px;
        font-family: 'Work Sans';
        transition: all .4s;
            :hover{
                color: #121212;
            }
    }
    > p{
        font-weight: 200;
        font-size: 22px;
        margin: 2rem 0;
    }
    > span{
        font-size: 1.5rem;
        font-weight: 600;
        font-family: 'Work Sans';
    }
    @media(max-width: 576px){
        height: 60vh;
    }

`

export const See = styled.button`
    margin-top: 2rem;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    background: transparent;
    font-weight: 500;
    font-size: 22px;
    font-family: 'Work Sans';
    border:none;

    ::after{
        content: "";
        width: 0;
        display: block;
        transition: width .4s;
        background: #ddd;
        height: 2px;
    }

    :hover::after{
        content: "";
        width: 95%;
        transition: width .4s;
    }
`



export const BtnSeeMore = styled.button`
    background: #222;
    padding: 0.5rem 2rem;
    width: auto;
    border: 1px solid #fff ;
    border-radius: 2px;
    outline: none;
    margin: 1rem;
    transition: all .4s;
    > a{
        color: #fff;
        font-weight: 400;
        font-family: 'Work Sans';
        font-size: 18px;
        text-transform: uppercase;
        > svg{
            margin-left: 1rem;
        }
    }

    :hover{
        filter: brightness(1.3);
        transform: translateY(2px);
    }
`

