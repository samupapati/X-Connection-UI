import { styled } from "styled-components";

const ProfileGroupWrapper = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    padding: 8px 0 8px 32px;
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
    position: relative;
`

const Text = styled.p`
    font-size: 14px;
    color: var(--font2);
    font-weight: 300;
    line-height: 12px;
`

const Status = styled.div`
    width: 8px;
    height: 8px;
    background-color: ${(props) => {
        switch(props.status){
            default: 
                return 'gray'
            case 'online':
                return 'var(--green1)'
            case 'occupied':
                return 'orange'
            case 'unavailable':
                return 'red'
        }
    }};
    border-radius: 50%;
    position: absolute;
    top: 8px;
    right: -15px;
`


function ProfileGroup({linkImg, name, text, status}){

    return (
        <ProfileGroupWrapper>
            <ImgWrapper href="#">
                <img src={linkImg} alt="profile img" />
            </ImgWrapper>
            <div>
                <Name href="#">
                    {name}
                    {status !== undefined ? <Status status={status}></Status> : ''}
                </Name>
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