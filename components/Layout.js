import PropTypes from "prop-types";
import Header from "../components/Header";


const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
        
    )
}


Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;
