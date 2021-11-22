import styled from "styled-components";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'

const FooterStyles = styled.div`
    margin-top: 50px;
    background-color: red;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    
    center{
        width: 50%;
    }
    div{
        font-size: 25px;
        text-align: center;
        //background-color: #000;
        width: 50%;
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <center>
                Todos los derechos reservados
            </center>
            <div>
                <IoLogoFacebook />
                <IoLogoInstagram />
                <IoLogoYoutube />
            </div>
        </FooterStyles>
    )
}

export default Footer;