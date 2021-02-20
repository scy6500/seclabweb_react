import PublicationHeader from "../components/PublicationHeader";
import InternationalPub from "../components/InternationalPub"
import { createGlobalStyle } from 'styled-components';

const internationalPublication = () => {
    return (
        <div>
            <GlobalStyle/>
            <PublicationHeader></PublicationHeader>
            <InternationalPub></InternationalPub>
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

export default internationalPublication;