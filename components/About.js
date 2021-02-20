import styled from "styled-components"

const About = () => {
    return (
            <Inner id={"About"}>
                <Inner_title>About</Inner_title>
                <Inner_content>
                    Welcome to Information Security Laboratory in the College of Computer Science at Kookmin University.<br />
                    Our research interests lie in Artificial Intelligence Security, Network Security, Artificial Intelligence<br />
                    Malware Detection and Cyber Threat Intelligence(CTI). Specifically, we focus on Artificial Intelligence Security.
                </Inner_content>
            </Inner>
    )
}

const Inner = styled.div` 
    width: 100%;
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px 0 100px;
    overflow: hidden;
    @media screen and (max-width: 575px) {
        flex-direction: column;
    }
`

const Inner_title = styled.h2`
    text-align: center;
    vertical-align: middle;
    margin-right: 80px;
    line-height: 250px;
    @media screen and (max-width: 575px) {
        text-align: center;
        margin: 0 auto;
    }
`

const Inner_content = styled.h4`
@media screen and (max-width: 575px) {
    text-align: center;
    margin: 0 auto 30px auto;
}
`

export default About;