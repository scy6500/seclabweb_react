import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Publication from "../components/Publication"
import Members from "../components/Members"
import styled, { createGlobalStyle } from 'styled-components';

const Seclab = () => {
    return (
        <div>
            <GlobalStyle/>
            <Header></Header>
            <Home></Home>
            <About></About>
            <Publication></Publication>
            <Members></Members>
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