import styled from "styled-components"
import {GlobalOutlined, GatewayOutlined} from "@ant-design/icons";
import "antd/dist/antd.css"
import Link from "next/link";
import { useCallback, useState } from "react";

const Publication = () => {
    const [isOverseasHover, setisOverseasHover] = useState(false);
    const [isDomesticHover, setisDomesticHover] = useState(false);
    const overseasMouseEnter = useCallback(() => {
        setisOverseasHover(true);
    }, []);
    const overseasMouseLeave = useCallback(() => {
        setisOverseasHover(false);
    }, []);
    const domesticMouseEnter = useCallback(() => {
        setisDomesticHover(true);
    }, []);
    const domesticMouseLeave = useCallback(() => {
        setisDomesticHover(false);
    }, []);
    return (
        <Inner id={"Publication"}>
            <Title>Publication</Title>
            <Category>
                <Link href="/internationalPublication">
                    <OverseasPub onMouseEnter={overseasMouseEnter} onMouseLeave={overseasMouseLeave} isDomesticHover={isDomesticHover}>
                            <Overseas/>
                            <h3>Overseas Publications</h3>
                    </OverseasPub>
                </Link>
                <Link href="/domesticPublication">
                    <DomesticPub onMouseEnter={domesticMouseEnter} onMouseLeave={domesticMouseLeave} isOverseasHover={isOverseasHover}>
                        <Domestic/>
                        <h3>Domestic Publications</h3>
                    </DomesticPub>
                </Link>
            </Category>
        </Inner>
    )
}

const Inner = styled.div`
    width: 100%;
    height: 100%; 
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
    margin-top: 30px;
    justify-content : space-around;
    @media screen and (max-width: 575px) {
        flex-direction: column;
    }
`
const OverseasPub = styled.div`
    text-align: center;
    opacity: ${({ isDomesticHover }) => isDomesticHover ? 0.5 : 1};
    &:hover {
        cursor: pointer;
    } 
    margin-bottom: 30px;
`

const DomesticPub = styled.div`
    text-align: center;
    opacity: ${({ isOverseasHover }) => isOverseasHover ? 0.5 : 1};
    &:hover {
        cursor: pointer;
    } 
    margin-bottom: 30px;
`

export default Publication;