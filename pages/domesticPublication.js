import PublicationHeader from "../components/PublicationHeader";
import { createGlobalStyle } from 'styled-components';

const domesticPublication = () => {
    return (
        <div>
            <GlobalStyle/>
            <PublicationHeader></PublicationHeader>
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

export default domesticPublication;