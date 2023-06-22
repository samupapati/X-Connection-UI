import { styled } from "styled-components";
import { AiFillLike } from 'react-icons/ai'
import { BsFillChatSquareTextFill, BsShareFill } from 'react-icons/bs'
import ProfileGroup from "../ProfileGroup"
import ProfileImg1 from '../../assets/images/profile/profilepicture2.jpg'
import ProfileImg2 from '../../assets/images/profile/profilepicture3.jpg'
import ProfileImg3 from '../../assets/images/profile/profilepicture20.jpg'
import ProfileImg4 from '../../assets/images/profile/profilepicture21.jpg'
import ProfileImg5 from '../../assets/images/profile/profilepicture22.jpg'
import PostImg1 from '../../assets/images/postpicture1.jpg'
import PostImg2 from '../../assets/images/postpicture2.jpg'
import ButtonSeccondary from '../Button'

const PostWrapper = styled.article`
    width: 100%;
    margin-top: 24px;
    background-color: var(--gray2);
    border: 1px solid #00000026;
    border-radius: 10px;
    overflow: hidden;

    > :nth-child(odd){
        background-color: var(--gray1);
    }
    > :first-child{
        p{
            font-size: 13px !important;
        }
    }
`

const Description = styled.div`
    padding: 32px;
    p{
        color: var(--font1);
        font-size: 14px;
    }
`

const PictureWrapper = styled.div`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    img:first-child{
        max-width: 260px;
    }
    img:last-child{
        max-width: 200px;
    }
`

const Actions = styled.ul`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 24px;
    padding-right: 24px;
    
    li{
        list-style: none;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: var(--green2);
        cursor: pointer;
        transition: transform .5s;

        p{
            margin-left: 8px;
        }
        &:hover{
            transform: scale(110%);
        }
    }
`

const FormComment = styled.form`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    input{
        width: 100%;
        height: 35px;
        outline: none;
        border: none;
        border-radius: 10px;
        margin-right: 8px;
        padding-left: 16px;
        box-shadow: 0px 0px 5px 1px #2B8D4226;
    }
    input::placeholder{
        color: var(--font-placeholder);
    }
`

function Post() {
    let post1 = {
        group: {
            linkImg: ProfileImg1,
            name: 'John Doe',
            text: '2 Weeks ago'
        },
        description: {
            text: 'Lorem ipsum dolor.',
            img1: PostImg1,
            img2: PostImg2
        },
        comments: {
            group: {
                linkImg: ProfileImg2,
                name: 'Joana Doe',
                text: 'Donec ultricies quis dolor non ultrices.'
            }
        }
    }

    let post2 = {
        group: {
            linkImg: ProfileImg1,
            name: 'John Doe',
            text: 'Yesterday'
        },
        description: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum tempus mauris, eget ornare augue vestibulum non. Mauris a condimentum lectus.',
        },
        comments: {
            group1: {
                linkImg: ProfileImg3,
                name: 'Izabella Wilcox',
                text: 'Aenean eros odio, eleifend eget maximus nec, placerat in libero.'
            },
            group2: {
                linkImg: ProfileImg4,
                name: 'Rafael E. Woods',
                text: 'Sed malesuada tempus orci at bibendum.'
            },
            group3: {
                linkImg: ProfileImg5,
                name: 'Roger Blas',
                text: 'Malesuada et aliquam sit amet.'
            }
        }
    }

    return (
        <>
            <PostWrapper>
                <ProfileGroup linkImg={post2.group.linkImg} name={post2.group.name} text={post2.group.text}></ProfileGroup>
                <Description>
                    <p>{post2.description.text}</p>
                </Description>
                <Actions>
                    <li>
                        <AiFillLike></AiFillLike>
                        <p>Like</p>
                    </li>
                    <li>
                        <BsFillChatSquareTextFill></BsFillChatSquareTextFill>
                        <p>Send</p>
                    </li>
                    <li>
                        <BsShareFill></BsShareFill>
                        <p>Share</p>
                    </li>
                </Actions>
                <ProfileGroup linkImg={post2.comments.group1.linkImg} name={post2.comments.group1.name} text={post2.comments.group1.text}></ProfileGroup>
                <ProfileGroup linkImg={post2.comments.group2.linkImg} name={post2.comments.group2.name} text={post2.comments.group2.text}></ProfileGroup>
                <ProfileGroup linkImg={post2.comments.group3.linkImg} name={post2.comments.group3.name} text={post2.comments.group3.text}></ProfileGroup>
                <FormComment onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Comment..." />
                    <ButtonSeccondary></ButtonSeccondary>
                </FormComment>
            </PostWrapper>
            
            <PostWrapper>
                <ProfileGroup linkImg={post1.group.linkImg} name={post1.group.name} text={post1.group.text}></ProfileGroup>
                <Description>
                    <p>{post1.description.text}</p>
                    <PictureWrapper>
                        <img src={post1.description.img1} alt="post img"></img>
                        <img src={post1.description.img2} alt="post img"></img>
                    </PictureWrapper>
                </Description>
                <Actions>
                    <li>
                        <AiFillLike></AiFillLike>
                        <p>Like</p>
                    </li>
                    <li>
                        <BsFillChatSquareTextFill></BsFillChatSquareTextFill>
                        <p>Send</p>
                    </li>
                    <li>
                        <BsShareFill></BsShareFill>
                        <p>Share</p>
                    </li>
                </Actions>
                <ProfileGroup linkImg={post1.comments.group.linkImg} name={post1.comments.group.name} text={post1.comments.group.text}></ProfileGroup>
                <FormComment onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Comment..." />
                    <ButtonSeccondary></ButtonSeccondary>
                </FormComment>
            </PostWrapper>

        </>
    )
}

export default Post;