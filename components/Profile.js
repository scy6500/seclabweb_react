import styled from "styled-components";
import Image from 'next/image';
import {MailOutlined} from "@ant-design/icons";
import Link from "next/link";
import PropTypes from "prop-types";

const Profile = (props) => {
    const {name, role, email} = props
    return (
        <Inner>
            <Image
                src="/blank-profile.png"
                alt="blank profile"
                width={70}
                height={70}
            />
            <h6>{name}</h6>
            <Role>{role}</Role>
            <Link href={"mailto:"+email}><MailOutlined /></Link>
        </Inner>
    )
}

const Inner = styled.div`
    text-align: center;
`

const Role = styled.h6`
    color: #aeaeae;
`

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Profile;