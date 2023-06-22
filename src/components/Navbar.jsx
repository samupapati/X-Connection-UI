import { FaBell } from 'react-icons/fa'
import { AiFillMessage, AiFillSetting, AiOutlineMenu } from 'react-icons/ai'
import { HiMagnifyingGlassCircle } from 'react-icons/hi2'
import { TbSocial } from 'react-icons/tb'
import { styled } from 'styled-components'
import ProfilePicture1 from '../assets/images/profile/profilepicture1.jpg'

const NavbarStyle = styled.nav`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray1);
    padding: 0 32px;
    box-shadow: 0px 5px 9px 2px #00000040;
    position: sticky;
    top: 0;
    z-index: 5;

    input[type="checkbox"]{
        display: none;
    }
    input[type="checkbox"]:checked ~ .menu-slide{
        transform: translateX(100vw);
    }
`

const IconStyle = styled.i`
    font-size: 24px;
    display: flex;
    align-items: center;
    color: var(--green1);
    cursor: pointer;
    transition: transform .5s;

    img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    &:hover{
        transform: scale(110%);
    }
`

const MenuIconStyle = styled.label`
    display: none;
    cursor: pointer;
    @media all and (max-width: 768px){
        display: flex;
    }
`

const WrapperInput = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

    input{
        width: 450px;
        height: 35px;
        border-radius: 10px;
        outline: none;
        border: none;
        box-shadow: 0px 0px 5px 1px #2B8D4226;
        padding-left: 50px;
    }

    @media all and (max-width: 768px){
        width: 100vw;
        height: calc(50vh - 50px);
        justify-content: center;
        align-items: end;
        position: absolute;
        top: 50px;
        left: -100vw;
        background-color: var(--gray2);
        padding-bottom: 32px;
        transition: transform .5s;

        input{
            width: 350px;
        }
    }
`

const InputIcon = styled.i`
    font-size: 24px;
    display: flex;
    align-items: center;
    position: absolute;
    left: 15px;
    color: var(--green1);

    @media all and (max-width: 768px){
        display: none;
    }
`

const WrapperIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    z-index: 1;

    @media all and (max-width: 768px){
        width: 100vw;
        height: calc(50vh);
        flex-direction: column;
        justify-content: start;
        position: absolute;
        top: 50vh;
        left: -100vw;
        background-color: var(--gray2);
        transition: transform .5s;
    }
`

function Navbar(){
    window.addEventListener('resize', resetCheckboxOnResize)
    function resetCheckboxOnResize(){
        let checkbox = document.getElementById('toggle-menu')
        if(checkbox.checked){
            checkbox.checked = false
        }
    } 

    return(
        <NavbarStyle>
            <input type="checkbox" id="toggle-menu"/>
            <IconStyle>
                <TbSocial/>
            </IconStyle>

            <IconStyle>
                <MenuIconStyle htmlFor='toggle-menu'>
                    <AiOutlineMenu/>
                </MenuIconStyle>
            </IconStyle>

            <WrapperInput className='menu-slide'>
                <InputIcon>
                    <HiMagnifyingGlassCircle/>
                </InputIcon>
                <input type="text" placeholder='Search...'/>
            </WrapperInput>
           
            <WrapperIcons className='menu-slide'>
                <IconStyle>
                    <img src={ProfilePicture1} alt="" />
                </IconStyle>
                <IconStyle>
                    <FaBell/>
                </IconStyle>
                <IconStyle>
                    <AiFillMessage/>
                </IconStyle>
                <IconStyle>
                    <AiFillSetting/>
                </IconStyle>
            </WrapperIcons>
        </NavbarStyle>
    )
}

export default Navbar;