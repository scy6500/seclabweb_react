import Header from "../components/Header";
import International_pub from "../components/International_pub"
import styled, { createGlobalStyle } from 'styled-components';

const international_publication = () => {
    return (
        <div>
            <GlobalStyle/>
            <Header></Header>
            <International_pub></International_pub>
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


export default international_publication;