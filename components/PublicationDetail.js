import styled from "styled-components"
import PropTypes from "prop-types";

const Publication_detail = (props) => {
    const {title, writer, coference, year, month} = props;
    return (
        <Inner>
            <h4>{title}</h4>
            <h6>{writer}</h6>
            <h6>{coference}</h6>
            <h6>{year + "/" + month}</h6>
        </Inner>
    )
}

const Inner = styled.div`
    margin-bottom: 20px;
`

Publication_detail.propTypes = {
    title: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired
}

export default Publication_detail;
