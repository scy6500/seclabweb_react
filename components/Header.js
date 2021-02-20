import styled from "styled-components"
import Menu_btn from "../components/Menu_btn";
import Link from "next/link";
import {MenuOutlined} from "@ant-design/icons";
import "antd/dist/antd.css"
import { useCallback, useState } from "react";
import ScrollTo from 'react-scroll-into-view'

const Header = () => {
    const texts = ["Home", "About", "Publication", "Members"];
    const [showdetail, setShowDetail] = useState(false);
    const onIconClicked = useCallback(() => {
        setShowDetail(showdetail => !showdetail)
    }, []);
    const onMenuClicked = useCallback(() => {
        if (showdetail === true){
            setShowDetail(showdetail => !showdetail)
        }
    });
    return (
        <Headers>
            <Link href="/"><Logo>Information Security Lab</Logo></Link>
            <Menu showdetail={showdetail} onClick={onMenuClicked}>
                {texts.map((v) => (
                    <ScrollTo selector={"#" + v}><Menu_btn key={v} text={v}></Menu_btn></ScrollTo>
                ))}
            </Menu>
            <Bars onClick={onIconClicked}/>
        </Headers>
        
    )
}
const Bars = styled(MenuOutlined)`
    color: white;
    display: none;
    @media screen and (max-width: 575px) {
        display: block;
        position: absolute;
        right: 20px;
        margin: 2px;
    }
`;
const Headers = styled.header`
    width: 100vw;
    position: fixed;
    background-color: black;
    display : flex;
    justify-content : space-between;
    align-items: center;
    z-index: 999;
    @media screen and (max-width: 575px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;
        font-size : 10px;
        padding-left : 0;
    }
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

const Menu = styled.div`
    display : flex;
    margin: auto 20px;
    @media screen and (max-width: 575px) {
        flex-direction: column;
        text-align: center;
        width: 100%;
        display: ${({ showdetail }) => showdetail ? 'flex' : 'none'};
    }
`



export default Header;
