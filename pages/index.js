import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import styled, { createGlobalStyle } from 'styled-components';

const Seclab = () => {
    return (
        <div>
            <GlobalStyle/>
            <Header></Header>
            <Home></Home>
            <About></About>

        </div>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
		padding: 0;
		margin: 0;
        box-sizing: border-box;
	}
`;

export default Seclab;