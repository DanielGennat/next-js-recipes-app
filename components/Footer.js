import styled from "styled-components"

export const StyledFooter = styled.footer`
    background-color: grey;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <h3>This is the Footer</h3>
            <p>Impressum</p>
        </StyledFooter>
    )
}