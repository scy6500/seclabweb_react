import styled from "styled-components"
import {GlobalOutlined, GatewayOutlined} from "@ant-design/icons";
import "antd/dist/antd.css"
import Link from "next/link";
import { useCallback, useState } from "react";

const Publication = () => {
    const [isOverseasHover, setisOverseasHover] = useState(false);
    const [isDomesticHover, setisDomesticHover] = useState(false);
    const overseas_mouseenter = useCallback(() => {
        setisOverseasHover(true);
    }, []);
    const overseas_mouseleave = useCallback(() => {
        setisOverseasHover(false);
    }, []);
    const domestic_mouseenter = useCallback(() => {
        setisDomesticHover(true);
    }, []);
    const domestic_mouseleave = useCallback(() => {
        setisDomesticHover(false);
    }, []);
    return (
        <Inner id={"Publication"}>
            <Title>Publication</Title>
            <Category>
            <Link href="/international_publication">
                <Overseas_pub onMouseEnter={overseas_mouseenter} onMouseLeave={overseas_mouseleave} isDomesticHover={isDomesticHover}>
                        <Overseas/>
                        <h3>Overseas publications</h3>
                </Overseas_pub>
            </Link>
            <Link href="/">
                <Domestic_pub onMouseEnter={domestic_mouseenter} onMouseLeave={domestic_mouseleave} isOverseasHover={isOverseasHover}>
                    <Domestic/>
                    <h3>Domestic publications</h3>
                </Domestic_pub>
            </Link>
            </Category>
        </Inner>

    )
}

const Inner = styled.div`
    width: 100%;
    height: 500px; 
    background-color: rgb(247, 247, 247);
`

const Title = styled.h2`
    color: black;
    text-align: center;
    padding: 30px 0;
`

const Overseas = styled(GlobalOutlined)`
    font-size: 200px; 
    margin-bottom: 30px;
`

const Domestic = styled(GatewayOutlined)`
    font-size: 200px;
    margin-bottom: 30px;
`

const Category = styled.div`
    display: flex;
    margin: 60px 0;
    justify-content : space-around;
`
const Overseas_pub = styled.div`
    text-align: center;
    opacity: ${({ isDomesticHover }) => isDomesticHover ? 0.5 : 1};
    &:hover {
        cursor: pointer;
    } 
`

const Domestic_pub = styled.div`
    text-align: center;
    opacity: ${({ isOverseasHover }) => isOverseasHover ? 0.5 : 1};
    &:hover {
        cursor: pointer;
    } 
`

export default Publication;
