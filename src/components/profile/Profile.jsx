import { IoSchool } from 'react-icons/io5'
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'
import { styled } from 'styled-components';
import CoverPicture from '../../assets/images/coverpicture.jpg'
import ProfilePicture2 from '../../assets/images/profile/profilepicture2.jpg'
import StoriePicture from '../../assets/images/storiepicture.jpg'
import Button from "../Button";
import Post from './Post';

const ProfileStyle = styled.section`
    position: relative;
    width: 100%;
    box-shadow: 0px 0px 9px 2px #00000040;
    overflow: hidden;
    padding-bottom: 16px;
    background-color: var(--gray1);
    grid-column: 2;
    
    
    @media all and (max-width: 890px){
        display: flex;
        flex-direction: column;
    }
    @media all and (min-width: 890px){
        margin-bottom: 16px;
        height: calc(100vh - 76px);
        overflow-y: auto;
    }
    @media all and (min-width: 1132px){
        border-radius: 10px;
    }
`

const WrapperTop = styled.article`
    background-color: var(--gray1);
    padding-bottom: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 100px;
    align-items: center;
    justify-items: center;

    button{
        grid-column: 3;
        justify-self: flex-end;
        @media all and (min-width: 890px){
            margin-right: 32px;
        }
    }

    @media all and (max-width: 890px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`

const WrapperCoverPicture = styled.div`
    width: 100%;
    height: 240px;
    grid-column: 1 / span 3;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

const WrapperProfilePicture = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 120px;
    left: 32px;
    box-shadow: 0px 10px 20px 0px #00000040;

    img{
        width: 100%;
        height: 100%;
    }

    @media all and (max-width: 890px){
        left: 0; right: 0;
        margin: 0 auto;
    }
`

const Titles = styled.div`
    grid-column: 2;
    justify-self: start;

    h1{
        font-size: 48px;
        color: var(--font1);

        @media all and (max-width: 890px){
            margin-top: 104px;
        }
    }
    h2{
        font-size: 20px;
        color: var(--font2);
        
        @media all and (max-width: 890px){
            text-align: center;
            margin-bottom: 24px;
        }
    }
    @media all and (min-width: 890px){
        position: absolute;
        left: 310px;
        top: 240px;
        h2{
            margin-top: -15px;
        }
    }
`

const WrapperBottom = styled.article`
    background-color: var(--gray1);
    @media all and (max-width: 890px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media all and (min-width: 890px){
        display: grid;
        grid-template-columns: 280px auto;
        padding: 0 32px;
    }
`

const AboutList = styled.ul`
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    position: sticky;
    top: 16px;
    
    margin-top: 16px;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    color: var(--font1);
    
    i{
        display: flex;
        align-items: center;
        font-size: 16px;
        margin-right: 8px;
        color: var(--green1);
    }

    @media all and (max-width: 890px){
        font-size: 13px;
    }
`

const WrapperStories = styled.div`
    width: 220px;
    height: 348px;
    margin-top: 32px;
    position: sticky;
    top: 200px;

    h3{
        font-size: 20px;
        color: var(--green2);
    }

    @media all and (max-width: 890px){
        h3{
            text-align: center;
        }
    }
    
`

const WrapperPictureStorie = styled.div`
    width: 100%;
    height: 308px;
    margin-top: 8px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &::before, &::after{
        content: '';
        position: absolute;
    }
    &::before{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, black, transparent);
        z-index: 1;
    }
    &::after{
        content: '16 Hours ago';
        z-index: 2;
        right: 8px;
        bottom: 8px;
        color: var(--font2);
        font-size: 12px;
    }
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    
    @media all and (max-width: 890px){
        width: 100%;
        padding: 0 32px;
    }
    @media all and (min-width: 890px){
        margin-top: 0;
    }
`

const PostsSectionsName = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 88px;
    position: sticky;
    top: 0px;
    background-color: var(--gray1);

    padding-top: 16px;

    h3{
        color: var(--green2);
        font-size: 20px;
        position: relative;
        cursor: pointer;
    }
    h3[class="active"]::after{
        content: '';
        width: 50%;
        height: 2px;
        background-color: var(--green2);
        position: absolute;
        top: 100%;
        left: 0; right: 0;
        margin: 0 auto;
        border-radius: 50px;
    }
`

function Profile(){
    return(
        <ProfileStyle>
            <WrapperTop>
                <WrapperCoverPicture>
                    <img src={CoverPicture} alt="Cover - landscape of a city" />
                </WrapperCoverPicture>
                <WrapperProfilePicture>
                    <img src={ProfilePicture2} alt="profile img" />
                </WrapperProfilePicture>
                <Titles>
                    <h1>John Doe</h1>
                    <h2>Tech Lead</h2>
                </Titles>
                <Button type={'btn1'}/>
            </WrapperTop>
            <WrapperBottom>
                <div>
                    <AboutList>
                        <ListItem><i><IoSchool/></i>Analysis and Systems Development</ListItem>
                        <ListItem><i><AiFillHome/></i>Silicon Valley</ListItem>
                        <ListItem><i><MdOutlineWork/></i>XYZ Solutions</ListItem>
                        <ListItem><i><AiFillHeart/></i>Married</ListItem>
                        <ListItem><i><FaUserFriends/></i>590 Friends</ListItem>
                    </AboutList>
                    <WrapperStories>
                        <h3>Stories</h3>
                        <WrapperPictureStorie>
                            <img src={StoriePicture} alt="storie img" />
                        </WrapperPictureStorie>
                    </WrapperStories>
                </div>
                <Posts>
                    <PostsSectionsName>
                        <h3 className='active'>Posts</h3>
                        <h3>Likes</h3>
                        <h3>Photos</h3>
                    </PostsSectionsName>
                    <Post/>
                </Posts>
            </WrapperBottom>
        </ProfileStyle>
    )
}

export default Profile;