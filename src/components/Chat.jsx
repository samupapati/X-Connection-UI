import TitleWindow from './TitleWindow'
import ProfileGroup from './ProfileGroup'
import ProfilePicture4 from '../assets/images/profile/profilepicture4.jpg'
import ProfilePicture5 from '../assets/images/profile/profilepicture5.jpg'
import ProfilePicture6 from '../assets/images/profile/profilepicture6.jpg'
import ProfilePicture7 from '../assets/images/profile/profilepicture7.jpg'
import ProfilePicture8 from '../assets/images/profile/profilepicture8.jpg'
import ProfilePicture9 from '../assets/images/profile/profilepicture9.jpg'
import ProfilePicture10 from '../assets/images/profile/profilepicture10.jpg'
import ProfilePicture11 from '../assets/images/profile/profilepicture11.jpg'
import ProfilePicture12 from '../assets/images/profile/profilepicture12.jpg'
import ProfilePicture13 from '../assets/images/profile/profilepicture13.jpg'
import ProfilePicture14 from '../assets/images/profile/profilepicture14.jpg'
import ProfilePicture15 from '../assets/images/profile/profilepicture15.jpg'
import ProfilePicture16 from '../assets/images/profile/profilepicture16.jpg'
import ProfilePicture17 from '../assets/images/profile/profilepicture17.jpg'
import ProfilePicture18 from '../assets/images/profile/profilepicture18.jpg'
import ProfilePicture19 from '../assets/images/profile/profilepicture19.jpg'
import { styled } from 'styled-components'


//1420px
const ChatStyle = styled.section`
    width: 285px;
    height: calc(100vh - 76px);
    background-color: var(--gray1);
    border-radius: 10px;
    box-shadow: 0px 0px 9px 2px #00000040;
    overflow: hidden;
    position: fixed;
    right: 16px;
        
    ul{
        height: calc(100% - 44px);
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 5px;               /* width of the entire scrollbar */
        }
        &::-webkit-scrollbar-track {
          background: var(--gray2);        /* color of the tracking area */
        }
        &::-webkit-scrollbar-thumb {
          background-color: var(--green1);    /* color of the scroll thumb */
        }
    }

    ul li:nth-child(even){
        background-color: var(--gray2);
    }
    
    ul li{
        padding: 8px 0 8px 16px;
    }

    @media all and (max-width: 1420px){
        display: none;
    }
`

function Chat(){
    return(
        <ChatStyle>
            <TitleWindow title={'Chat'}/>
            <ul>
                <ProfileGroup linkImg={ProfilePicture4} name={'Jonathan Campbell'} text={'Thanks for the guidance!'}/>
                <ProfileGroup linkImg={ProfilePicture5} name={'Laura Powers'} text={"Perfect! I'm heading to the beach then!"}/>
                <ProfileGroup linkImg={ProfilePicture6} name={'Becky Perez'} text={"You're welcome! Enjoy your reading!"}/>
                <ProfileGroup linkImg={ProfilePicture7} name={'Charles Ritter'} text={"Hi! How's it going?"}/>
                <ProfileGroup linkImg={ProfilePicture8} name={'Jason Obrien'} text={"No problem! Have a great day!"}/>
                <ProfileGroup linkImg={ProfilePicture9} name={'Vanessa Smith'} text={"Will do. Thanks again!"}/>
                <ProfileGroup linkImg={ProfilePicture10} name={'Roy Taylor'} text={"I need some advice on choosing a career"}/>
                <ProfileGroup linkImg={ProfilePicture11} name={'John Evans'} text={"Awesome, thanks for the suggestions!"}/>
                <ProfileGroup linkImg={ProfilePicture12} name={'Michelle Hammond'} text={"I enjoy action and sci-fi."}/>
                <ProfileGroup linkImg={ProfilePicture13} name={'Taylor Hart'} text={"Same here! Any movie recomendations?"}/>
                <ProfileGroup linkImg={ProfilePicture14} name={'Debora Hood'} text={"Any plans for the weekend?"}/>
                <ProfileGroup linkImg={ProfilePicture15} name={'Bryan Batista'} text={"How's your day?"}/>
                <ProfileGroup linkImg={ProfilePicture16} name={'Jose Martinez'} text={""}/>
                <ProfileGroup linkImg={ProfilePicture17} name={'Scott Anderson'} text={""}/>
                <ProfileGroup linkImg={ProfilePicture18} name={'Lisa Owen'} text={""}/>
                <ProfileGroup linkImg={ProfilePicture19} name={'Rebecca Williams'} text={""}/>
            </ul>
        </ChatStyle>
    )
}

export default Chat;

