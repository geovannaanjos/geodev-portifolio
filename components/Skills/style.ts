import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    background: #fff;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    > h1{
        color: #222;
        font-size: 3rem;
        font-weight: 600;
        font-family: 'Work Sans';;
        padding: 1.5rem;
    }
    > p {
        color: #222;
        width: 100%;
        padding: 1rem 2rem;
        font-weight: 400;
        font-size: 22px;
        @media(min-width: 730px){
            width: 80%;
        }
        @media(min-width: 1024px){
            width: 60%;
        }
    }
`

export const Grid = styled.section`
    background: #222;
    padding: 1rem;
    columns: 250px auto ;
    display: flex;
    flex-direction: column;
    align-items: center;
    > ul{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 2rem;
    }
    > ul > span{
        font-weight: 100;
    }
    > h1{
        color: #ccc;
        font-weight: 300;
        margin-bottom: 10px;
        font-family: 'Work Sans';
        font-size: 2rem;
        @media(min-width: 920px){
            font-size: 3rem;
        }
        
    }
    
    @media(min-width: 730px){
        padding: 2rem 1rem;
    }
    :hover{
        filter: brightness(1.1);
    }
`

export const Icon = styled.div`
    margin-right: 5%;
    img{
        max-width: 100%;
        border-radius: 5% 0%;
        @media(min-width: 700px){
            max-width: 80%;
            width: 50%;
        }
    }

`