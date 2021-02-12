import styled from "styled-components"
import PropTypes from "prop-types";

const Menu_btn = (props) => {
    const {text} = props;
    return (
        <Btn>{text}</Btn>
    )
}

const Btn = styled.a` 
    padding: 8px 12px;
    color: white;
    &:hover {
        color: gray;
        cursor: pointer;
    } 
`;

Menu_btn.propTypes = {
    text: PropTypes.string.isRequired
}

export default Menu_btn;
