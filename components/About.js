import styled from "styled-components"

const About = () => {
    return (
            <Inner id={"About"}>
                <InnerTitle>About</InnerTitle>
                <InnerContent>
                    Welcome to Information Security Laboratory in the College of Computer Science at Kookmin University.<br />
                    Our research interests lie in Artificial Intelligence Security, Network Security, Artificial Intelligence<br />
                    Malware Detection and Cyber Threat Intelligence(CTI). Specifically, we focus on Artificial Intelligence Security.
                </InnerContent>
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

const InnerTitle = styled.h2`
    text-align: center;
    vertical-align: middle;
    margin-right: 80px;
    line-height: 250px;
    @media screen and (max-width: 575px) {
        text-align: center;
        margin: 0 auto;
    }
`

const InnerContent = styled.h4`
@media screen and (max-width: 575px) {
    text-align: center;
    margin: 0 auto 30px auto;
}
`

export default About;