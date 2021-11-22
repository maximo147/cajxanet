import styled from "styled-components";

const SecctionStyles = styled.div`
    position: relative;
    top: 70px;

    width: 100%;

    padding-top: 20px;
`;

const Secction = ({children}) => {
    return(
        <SecctionStyles>
            {children}
        </SecctionStyles>
    )
}

export default Secction;