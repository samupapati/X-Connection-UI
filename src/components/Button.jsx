import { styled } from "styled-components";

const ButtonPrimary = styled.button`        
    width: 96px;
    height: 36px;
    background-color: var(--green1);
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-size: 20px;
    cursor: pointer;
    transition: transform .5s;
    
    &:hover{
        transform: scale(110%);
    }
`

const ButtonSecondary = styled.button`        
    width: 82px;
    height: 35px;
    background-color: var(--gray2);
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    color: var(--green2);
    font-size: 13px;
    cursor: pointer;
    transition: transform .5s;
    
    &:hover{
        transform: scale(110%);
    }
`

function Button({type}){
    return(
        <>
            {type === 'btn1' ?
                    <ButtonPrimary>Add</ButtonPrimary>
                :
                    <ButtonSecondary>Comment</ButtonSecondary>
            }
        </>
    )
}

export default Button;