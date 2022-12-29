import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    h1{
        color: #f1f1f1;
        font-weight: 400;
        font-size: 1.2rem;
        font-weight: 300;
        font-family: 'Work Sans';
        margin-right: 1rem;
        @media(min-width: 730px){
            font-size: 20px;
        }
        @media(min-width: 1024px){
            font-size: 28px;
        }
    }
`

export const ImageScud = styled.div`
    width: 75px;
    height: 75px;
`