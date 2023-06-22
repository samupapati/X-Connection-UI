import ProfileGroup from "./ProfileGroup";
import TitleWindow from "./TitleWindow";
import GroupPicture1 from "../assets/images/groups/grouppicture1.jpg"
import GroupPicture2 from "../assets/images/groups/grouppicture2.jpg"
import GroupPicture3 from "../assets/images/groups/grouppicture3.jpg"
import GroupPicture4 from "../assets/images/groups/grouppicture4.jpg"
import GroupPicture5 from "../assets/images/groups/grouppicture5.jpg"
import GroupPicture6 from "../assets/images/groups/grouppicture6.jpg"
import { styled } from "styled-components";

const GroupsStyle = styled.section`
    width: 210px;
    background-color: var(--gray1);
    border-radius: 10px;
    box-shadow: 0px 0px 9px 2px #00000040;
    overflow: hidden;
    margin-top: 16px;
    height: calc(100vh - 527px);
    
    ul{
        overflow-y: auto;
        height: calc(100% - 44px);
    }

    *:not(:first-child){
        li{
            padding: 8px 0px 8px 16px;
        }
    }
    li:nth-child(even){
        background-color: var(--gray2);
    }

    @media all and (max-width: 1132px){
        display: none;
    }
`

function Groups(){
    return(
        <GroupsStyle>
            <TitleWindow title={'Groups'}/>
            <ul>
                <ProfileGroup linkImg={GroupPicture1} name={'The astronomy club'} text={'2.964 members'}/>
                <ProfileGroup linkImg={GroupPicture2} name={'I hate wake up early'} text={'36.229 members'}/>
                <ProfileGroup linkImg={GroupPicture3} name={'Tech news'} text={'4.501 members'}/>
                <ProfileGroup linkImg={GroupPicture4} name={'I love cats'} text={'89.511 members'}/>
                <ProfileGroup linkImg={GroupPicture5} name={'Photography'} text={'2.500 members'}/>
                <ProfileGroup linkImg={GroupPicture6} name={'Front-end world'} text={'3.720 members'}/>
            </ul>
        </GroupsStyle>
    )
}

export default Groups;