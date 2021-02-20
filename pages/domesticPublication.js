import Publication_header from "../components/Publication_header";
import International_pub from "../components/International_pub"
import styled, { createGlobalStyle } from 'styled-components';

const domestic_publication = () => {
    return (
        <div>
            <GlobalStyle/>
            <Publication_header></Publication_header>
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


export default domestic_publication;
