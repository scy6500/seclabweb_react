import Layout from "../components/Layout"
import styled, { createGlobalStyle } from 'styled-components';

const Home = () => {
    return (
        <div>
            <GlobalStyle/>
            <Layout>as</Layout>
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

export default Home;