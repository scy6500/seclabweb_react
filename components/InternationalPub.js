import styled from "styled-components"
import React, { useEffect, useState } from "react";
import dataBase from "../public/Firebase";
import PublicationDetail from "./PublicationDetail"

const InternationalPub = () => {
    const [publicationData, setPublicationData] = useState([])
    const getPublication = async() => {
        const publicationDb = dataBase.collection("publications");
        const publications = await publicationDb.orderBy("year", "desc").orderBy("month", "desc").get();
        publications.forEach(publication => {
            setPublicationData(publicationData => [...publicationData, publication.data()])
        }
        )
      }
    useEffect(() => {
        getPublication();
    }, [])
    return (
        <div>
            <Sub>International Publication</Sub>
            <Inner>
                {publicationData.map((v) => (
                    <PublicationDetail key = {v.title} title={v.title} writer={v.writer} conference={v.conference} year={v.year} month={v.month}></PublicationDetail>
                ))}
            </Inner>
        </div>
    )
}

const Inner = styled.div` 
    margin: 0 10em;
`;

const Sub = styled.div`
    background-color: rgb(247, 247, 247);
    height : 100px;
    width: 100%;
    padding: 40px 10em 0 10em;
    line-height: 55px;
    margin-bottom: 30px;
`;

export default InternationalPub;