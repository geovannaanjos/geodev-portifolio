import styled from '@emotion/styled';

export const Container = styled.div`
    background: #f2f2f2;
    color: #ccc;
    display: flex;
    align-items: center;
    flex-direction:column-reverse;
    justify-content: center;
    @media(max-width: 700px){
        flex-direction: column-reverse;
        padding-top: 0;
    }
    @media(min-width: 700px){
        flex-direction: row;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
`

export const LeftSide = styled.div`
    flex: 50%;
    background: #222;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(min-width: 730px){
        height: 90vh;
    }
    @media(min-width: 1024px){
        height: 100vh;
    }
`

export const CargoName = styled.aside`
    margin-left: 1rem;
    width: 200px;
    color: #fff;
    font-size: 2rem;
    font-family: 'Work Sans';
    margin-top: 1rem;
    font-weight: 300;
    transform: rotate(-90deg);
    @media(min-width: 700px){
        width: 400px;
    }
`

export const ImageProfile = styled.div`
    img{
        width: 100%;
        max-width: 80%;
        border-radius: 5% 0%;
        margin: 5%;
    }
    
    @media(min-width: 700px){
        max-width: 100%;
        margin: 5%;
    }
`


export const Cargo = styled.span`
    font-weight: 200;
    font-size: 1.8rem;
    font-family: 'Work Sans';
    color: #ccc;
`


export const RightSide = styled.div`
    flex: 50%;
    background: #f2f2f2;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 1024px){
        height: 100vh;
    }
`

export const PrincipalText = styled.div`
    padding: 1rem 2rem;
    &::selection{
        color: #fff;
        background: #7209b7;
    }
`


export const NameProf = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

export const FullName = styled.h1`
    font-size: 30px;
    margin: 0;
    font-weight: 600;
    font-size: 3rem;
    font-family: 'Work Sans';
    color: #333;
`
export const FinalName = styled.b`
    font-weight: 600;
    font-size: 3rem;
    font-family: 'Work Sans';
    color: #186c62;
    margin:0;
`

export const AboutP = styled.p`
    font-weight: 400;
    line-height: 1.4;
    font-size: 18px;
    color: #222;
`

export const ButtonProjects = styled.button`
    background: #222;
    border-radius: 1px 2px;
    padding: 6px 20px;
    border: none;
    color: #fff;
    border: 1px solid #222;
    font-weight: 400;
    font-family: 'Work Sans';
    font-size: 1.2rem;
    transition: all 0.5s;
    &:hover{
        transform: translateY(3px);
        color: #fff;
        background: #444;
    }

`