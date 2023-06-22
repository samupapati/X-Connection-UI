import { styled } from "styled-components";

const ProfileGroupWrapper = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 8px 0 8px 32px;

    background-color: attr();
`

const ImgWrapper = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 8px;
    
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        box-shadow: 0px 5px 10px 0px #00000040;
    }
`

const Name = styled.a`
    font-size: 16px;
    color: var(--font1);
    font-weight: bold;
    text-decoration: none;
`

const Text = styled.p`
    font-size: 14px;
    color: var(--font2);
    font-weight: 300;
    line-height: 12px;
`

function ProfileGroup({linkImg, name, text}){
    return (
        <ProfileGroupWrapper>
            <ImgWrapper href="#">
                <img src={linkImg} alt="profile img" />
            </ImgWrapper>
            <div>
                <Name href="#">{name}</Name>
                {text !== '' ?
                    <Text>{text}</Text>
                    :
                    ''
                }
            </div>
        </ProfileGroupWrapper>
    )
}

export default ProfileGroup;