import styled from "styled-components"
import PropTypes from "prop-types";

const About = () => {
    return (
            <Inner>
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
    height: 250px;   
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px 0 100px;
    overflow: hidden;
`

const Inner_title = styled.h2`
    text-align: center;
    vertical-align: middle;
    margin-right: 80px;
    line-height: 250px;
`

const Inner_content = styled.h4`
`

export default About;