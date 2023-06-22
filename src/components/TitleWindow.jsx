import { styled } from "styled-components";

const TitleWindowStyle = styled.div`
    width: 100%;
    height: 44px;
    background-color: var(--green1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: sticky;
    top: 0;

    h3{
        color: var(--white);
        font-size: 16px;
    }
`

function TitleWindow({title}){
    return (
        <TitleWindowStyle>
            <h3>{title}</h3>
        </TitleWindowStyle>
    )
}

export default TitleWindow;