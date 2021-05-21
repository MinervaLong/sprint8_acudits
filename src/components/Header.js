import styled from 'styled-components';

const Heading = styled.h1`
    @media (max-width: 800px){
        font-size:28pt;
    }
`

const Header = () => {
    return(
        <Heading >Ready to laugh? &#x1F923;</Heading>
    )

}

export default Header;