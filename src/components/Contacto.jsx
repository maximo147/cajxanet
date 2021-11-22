import styled from "styled-components"

const ContactoStyles = styled.div`

    h3{
        text-align: center;
        margin: 30px 0px;
    }
`;

const FormularioStyles = styled.form`
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    div{
        width: 100%;
        input{
            width: 50%;
        }
    }
    input, textarea{
        width: 100%;
        outline: none;
        border: none;
        border: 2px solid #8878af;
        border-radius: 5px;
        padding: 5px 12px;
        margin-bottom: 10px;
    }
    button{
        border: none;
        width: 200px;
        background-color: green;
        padding: 5px 20px;
        border-radius: 5px;
        font-weight: bold;
        color: #ffffff;
        margin: 0 auto;
    }
`;

const Formulario = () => {
    return (
        <FormularioStyles>
            <div id="contacto">
                <input type="text" placeholder="Nombres" />
                <input type="text" placeholder="Telefono" />
            </div>

            <input type="email" placeholder="Email" />
            <textarea placeholder="Dinos tu idea"></textarea>
            <button>Enviar</button>
        </FormularioStyles>
    )
}

const Contacto = () => {
    return (
        <ContactoStyles>
            <h3>Contactenos</h3>
            <Formulario></Formulario>
        </ContactoStyles>
    )
}

export default Contacto