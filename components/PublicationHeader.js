import styled from "styled-components"
import Link from "next/link";
import "antd/dist/antd.css"

const PublicationHeader = () => {
    return (
        <Headers>
            <Link href="/"><Logo>Information Security Lab</Logo></Link>
        </Headers>
    )
}

const Headers = styled.header`
    height: 38px;
    width: 100vw;
    position: fixed;
    background-color: black;
    display : flex;
    justify-content : space-between;
    align-items: center;
`;

const Logo = styled.a`
    margin: auto 20px;
    color : white;
    text-decoration: none;
    &:hover {
        color: gray;
        cursor: pointer;
    } 
`

export default PublicationHeader;