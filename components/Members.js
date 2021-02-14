import styled from "styled-components";
import Profile from "../components/Profile";

const Members = () => {
    return (
        <Inner>
            <Title>Members</Title>
            <Box>
                <Profile name={"Yoon MyungKeun"} role={"Professor"} email={"mkyoon@kookmin.ac.kr"}></Profile>
                <Profile name={"Hur Junnyeong"} role={"Master's Student"} email={"m2019551@kookmin.ac.kr"}></Profile>
                <Profile name={"Son Hyeongy "} role={"Master's Student"} email={"forever2331@kookmin.ac.kr"}></Profile>
            </Box>
            <Box>
                <Profile name={"Jeon Hahoon"} role={"Master's Student"} email={"plmokn1007@kookmin.ac.kr"}></Profile>
                <Profile name={"Jin Segwang "} role={"Master's Student"} email={"20133264@kookmin.ac.kr"}></Profile>
                <Profile name={"Byeon Seunghun "} role={"Master's Student"} email={"20175164@kookmin.ac.kr"}></Profile>
            </Box>
        </Inner>
    )
}

const Inner = styled.div`
    height: 450px;
    width: 100%;
    background-color: white;
`

const Title = styled.h2`
    color: black;
    text-align: center;
    padding: 30px 0;
`

const Box = styled.div`
    justify-content: space-around;
    display: flex;
    margin-bottom: 40px;
`

export default Members;