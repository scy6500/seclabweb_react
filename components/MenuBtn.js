import styled from "styled-components"
import PropTypes from "prop-types";

const MenuBtn = (props) => {
    const {text} = props;
    return (
        <Btn>{text}</Btn>
    )
}

const Btn = styled.div` 
    padding: 8px 12px;
    color: white;
    &:hover {
        color: gray;
        cursor: pointer;
    } 
`;

MenuBtn.propTypes = {
    text: PropTypes.string.isRequired
}

export default MenuBtn;