import styled from 'styled-components'

const CatalogoStyles = styled.div`
    width: 60%;
    margin: 50px auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    div{
        text-align: center;
        text-decoration: none;
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const Button = styled.a`
    text-decoration: none;

    border-radius: 7px;
    margin: 10px;
    padding: 5px;
    cursor: pointer;
    transition: all 350ms ease;
    &:hover{
        background-color: #3c4468;
        color: #ffc;
    }
`;

const Catalogo = () => {
    return(
        <CatalogoStyles>
            <div id="catalogo">
                Visita nuestro catálogo
            </div>
            <div>
                <Button>Click aqui</Button>
            </div>
        </CatalogoStyles>
    )
}

export default Catalogo