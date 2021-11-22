import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img1-min.jpeg'
import img2 from '../assets/img2-min.jpg'

const HeaderStyles = styled.div`
    height: 70px;
    width: 100%;
    z-index: 1;
    background-color: #fcc;
    position: fixed;
    padding: 0 120px;
    display: flex;
    align-items: center;
    font-family: 'Rubik', 'Sans-serif';
`;

const ContainerLogo = styled.div`
    width: 40%;
    font-size: 22px;
    
`;

const ContainerItems = styled.div`
    width: 60%;
    font-size: 16px;
    display: flex;
`;

const Item = styled.div`
    flex: 1;
    a{
        text-decoration: none;
        color: #000000;
    }
`;

const Carousel = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f694c;
    div{
        div{
            div{
                img{
                    width: 100%;
                    height: 200x;
                }
            }
        }
    }
`;

const Texto = styled.div`
    //position: absolute;
    border: 1px solid #ffffff;
    padding: 30px;
    font-size: 35px;
    font-weight: 600;
    border-radius: 10px;
    color: #ffffff;
`;


const Header = () => {
    return (
        <>
            <HeaderStyles>
                <ContainerLogo>
                    CAJXANET
                </ContainerLogo>
                <ContainerItems>
                    <Item><a href="#">Inicio</a></Item>
                    <Item><a href="#nosotros">Nosotros</a></Item>
                    <Item><a href="#servicios">Servicios</a></Item>
                    <Item><a href="#catalogo">Catalogo</a></Item>
                    <Item><a href="#proyectos">Proyectos</a></Item>
                    <Item><a href="#contacto">Contacto</a></Item>
                </ContainerItems>
            </HeaderStyles>
            <Carousel>
                <Texto>Somos expertos, líderes en software</Texto>
            </Carousel>
        </>
    )
};

export default Header;
