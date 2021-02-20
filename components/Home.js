import styled from "styled-components";
import Image from 'next/image';

const Home = () => {
    return (
        <Inner id={"Home"}>
            <Filiter></Filiter>
            <Image
                src="/security.jpg"
                alt="picture of home"
                layout="fill"
                z-index={-1}
                position="relative"
                object-fit="cover"

            />
            <Text>Welcome to Kookmin University's Information Security Lab!</Text>
        </Inner>
    )
}

const Inner = styled.div`
    height: 100vh;
    position: relative;
    z-index: 99;
`

const Filiter = styled.div`
    position: absolute;
    background-color: black;
    z-index: 9;
    height: 100%;
    width: 100%;
    opacity: 0.7;
`

const Text = styled.h1`
    width: 100%;
    height: 100%;
    line-height: 100vh;
    position: absolute;
    color: white;
    z-index: 999;
    text-align: center;
    vertical-align: middle;
    overflow:hidden; 
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: 3vw;
`

export default Home;