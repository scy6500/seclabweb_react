import Layout from "../components/Layout"
import Home from "../components/Home"
import styled, { createGlobalStyle } from 'styled-components';

const Seclab = () => {
    return (
        <div>
            <GlobalStyle/>
            <Layout>
                <Home></Home>
            </Layout>
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