import TitleWindow from './TitleWindow'
import ProfileGroup from './ProfileGroup';
import ProfilePicture1 from '../assets/images/profile/profilepicture1.jpg'
import { styled } from 'styled-components';

const ActiviesStyle = styled.section`
    width: 210px;
    background-color: var(--gray1);
    border-radius: 10px;
    box-shadow: 0px 0px 9px 2px #00000040;

    > li{
        padding: 8px 0px 8px 16px;
        background-color: var(--gray2);
        a{
            color: var(--green2);
            font-weight: normal;
            font-size: 15px;
        }
    }
    

    @media all and (max-width: 1132px){
        display: none;
    }
`

const ActiviesList = styled.ul`
    width: 100%;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    li{
        list-style: none;
    
        a{
            text-decoration: none;
            color: var(--green2);
        }
    }
`

function Activies(){
    return(
        <ActiviesStyle>
            <TitleWindow title={'Activies'}/>
            <ProfileGroup linkImg={ProfilePicture1} name={'My profile'} text={''} />
            <ActiviesList>
                <li><a href="#">My stories</a></li>
                <li><a href="#">Friends Request</a></li>
                <li><a href="#">Meetings</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Trends</a></li>
                <li><a href="#">Jobs</a></li>
            </ActiviesList>
        </ActiviesStyle>
    )
}

export default Activies;