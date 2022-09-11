import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: grey;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>This is the Header</h1>
            <p>Welcome</p>
        </StyledHeader>
        
    )
}
