import styled from "styled-components";
import Profile from "../components/Profile";
import React, { useEffect, useState } from "react";
import dataBase from "../public/Firebase";

const Members = () => {
    const [memberData, setMemberData] = useState([])
    const getMembers = async() => {
        const membersDb = dataBase.collection("members");
        const members = await membersDb.orderBy("order").get();
        members.forEach(member => {
            setMemberData(memberData => [...memberData, member.data()])
        }
        )
      }
    useEffect(() => {
        getMembers();
    }, [])
    return (
        <Inner id={"Members"}>
            <Title>Members</Title>
            <Box>
                {memberData.map((v) => (
                    <Profile key={v.order} name={v.name} role={v.role} email={v.email}></Profile>
                ))}
            </Box>
        </Inner>
    )
}

const Inner = styled.div`
    height: 300px;
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